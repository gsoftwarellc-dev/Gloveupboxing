import { useCallback, useEffect, useRef, useState } from 'react'
import type { PageMeta, PagedResponse } from '../lib/api'

interface UseServerPageOptions<F> {
  fetcher: (filters: F & { page: number; per_page: number }) => Promise<PagedResponse<unknown>>
  filters: F
  perPage?: number
}

interface UseServerPageResult<T> {
  data: T[]
  meta: PageMeta | null
  page: number
  setPage: (p: number) => void
  loading: boolean
  error: string | null
  reload: () => void
}

export function useServerPage<T, F extends Record<string, unknown>>({
  fetcher,
  filters,
  perPage = 25,
}: UseServerPageOptions<F>): UseServerPageResult<T> {
  const [data, setData] = useState<T[]>([])
  const [meta, setMeta] = useState<PageMeta | null>(null)
  const [page, setPageState] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const abortRef = useRef<AbortController | null>(null)
  const filtersRef = useRef(filters)

  // reset to page 1 when filters change (shallow-compare stringified)
  const filtersKey = JSON.stringify(filters)
  const prevFiltersKey = useRef(filtersKey)
  if (prevFiltersKey.current !== filtersKey) {
    prevFiltersKey.current = filtersKey
    filtersRef.current = filters
    if (page !== 1) {
      // will be picked up by effect below on next render
    }
  }

  const setPage = useCallback((p: number) => {
    setPageState(p)
  }, [])

  const fetch = useCallback(
    async (p: number, f: F) => {
      abortRef.current?.abort()
      const ctrl = new AbortController()
      abortRef.current = ctrl
      setLoading(true)
      setError(null)
      try {
        const result = await (fetcher as (filters: F & { page: number; per_page: number }) => Promise<PagedResponse<T>>)({
          ...f,
          page: p,
          per_page: perPage,
        })
        if (!ctrl.signal.aborted) {
          setData(result.data)
          setMeta(result.meta)
        }
      } catch (err) {
        if (!ctrl.signal.aborted) {
          setError(err instanceof Error ? err.message : 'Failed to load data.')
        }
      } finally {
        if (!ctrl.signal.aborted) setLoading(false)
      }
    },
    [fetcher, perPage],
  )

  // When filters change, reset to page 1
  const currentFiltersKey = filtersKey
  const lastFetchedFiltersKey = useRef<string | null>(null)

  useEffect(() => {
    if (lastFetchedFiltersKey.current !== null && lastFetchedFiltersKey.current !== currentFiltersKey) {
      setPageState(1)
    }
  }, [currentFiltersKey])

  useEffect(() => {
    lastFetchedFiltersKey.current = currentFiltersKey
    void fetch(page, filters)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, currentFiltersKey])

  const reload = useCallback(() => {
    void fetch(page, filtersRef.current)
  }, [fetch, page])

  return { data, meta, page, setPage, loading, error, reload }
}
