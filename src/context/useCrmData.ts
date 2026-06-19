import { useContext } from 'react'
import { CrmDataContext } from './crmDataStore'

export function useCrmData() {
  const context = useContext(CrmDataContext)
  if (!context) {
    throw new Error('useCrmData must be used inside CrmDataProvider')
  }
  return context
}
