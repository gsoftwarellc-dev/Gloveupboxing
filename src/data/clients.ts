// Generated from 'Clients & Projects CRM.xlsx' - 12 discipline sheets + Dump sheet

export interface ClientContact {
  name: string
  role?: string
  email?: string
  phone?: string
}

export interface ClientCompany {
  id: number
  name: string
  disciplines: string[]
  contacts: ClientContact[]
}

export const clientCompanies: ClientCompany[] = [
  {
    "id": 1,
    "name": "21st Century Services",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alex Hewet",
        "role": "Quantity Surveyor",
        "email": "ahewet@21stcenturycontracts.co.uk"
      },
      {
        "name": "Elliot Harmsworth",
        "role": "Electrical Contracts Manager",
        "email": "eharmsworth@21stcenturycontracts.co.uk"
      },
      {
        "name": "John McCarthy",
        "role": "Mechanical Contracts Manager",
        "email": "jmccarthy@21stcenturycontracts.co.uk"
      },
      {
        "name": "Phillip Dolan",
        "role": "Project Manager",
        "email": "pdolan@21stcenturycontracts.co.uk"
      },
      {
        "name": "Steve Sanders",
        "role": "Buyer",
        "email": "ssanders@21stcenturycontracts.co.uk"
      }
    ]
  },
  {
    "id": 2,
    "name": "360 Formwork Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Charlie Russo",
        "role": "Operations Manager",
        "email": "crusso@360formwork.co.uk"
      }
    ]
  },
  {
    "id": 3,
    "name": "3DG",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Sechkin Figen",
        "role": "Director",
        "email": "sechkin.figen@3dg.co.uk",
        "phone": "7984232757.0"
      },
      {
        "name": "Sechkin Figen",
        "role": "Director",
        "phone": "07984 232757"
      }
    ]
  },
  {
    "id": 4,
    "name": "4D Structures",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Brian Forde",
        "role": "Contracts Manager",
        "email": "brian@4dstructures.co.uk"
      },
      {
        "name": "Ciaran Barratt",
        "role": "Director",
        "email": "ciaran@4dstructures.co.uk",
        "phone": "07557 273424"
      },
      {
        "name": "Jack McBride",
        "role": "Project Manager",
        "email": "jack@4dstructures.co.uk"
      },
      {
        "name": "Jordan Smith",
        "role": "Technical Engineer",
        "email": "jordan@4dstructures.co.uk"
      },
      {
        "name": "Kenny Glynn",
        "role": "Quantity Surveyor",
        "email": "kenny@4dstructures.co.uk"
      },
      {
        "name": "Kevin Campion",
        "role": "Contract Manager",
        "email": "kevin@4dstructures.co.uk"
      },
      {
        "name": "Mark McGill",
        "role": "Project Manager",
        "email": "mark@4dstructures.co.uk"
      },
      {
        "name": "Muhammad Farhan",
        "role": "Buyer",
        "email": "muhammad@4dstructures.co.uk"
      },
      {
        "name": "Paul McMenamin",
        "role": "Project Manager",
        "email": "paul@4dstructures.co.uk"
      },
      {
        "name": "William Ellis",
        "role": "Buyer",
        "email": "william@4dstructures.co.uk"
      }
    ]
  },
  {
    "id": 5,
    "name": "4D Structures Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Brian Forde",
        "role": "Contracts Manager",
        "email": "brian@4dstructures.co.uk"
      },
      {
        "name": "Ciaran Barratt",
        "role": "Director",
        "email": "ciaran@4dstructures.co.uk",
        "phone": "07557 273 424"
      },
      {
        "name": "Declan Dunning",
        "role": "Buyer",
        "email": "declan@4dstructures.co.uk"
      },
      {
        "name": "Dom O'Connell",
        "role": "Contracts Manager",
        "email": "dom@4dstructures.co.uk"
      },
      {
        "name": "Jack McBride",
        "role": "Project Manager",
        "email": "jack@4dstructures.co.uk"
      },
      {
        "name": "Jordan Smith",
        "role": "Technical Engineer",
        "email": "jordan@4dstructures.co.uk"
      },
      {
        "name": "Kenny Glynn",
        "role": "Quantity Surveyor",
        "email": "kenny@4dstructures.co.uk"
      },
      {
        "name": "Kevin Campion",
        "role": "Contract Manager",
        "email": "kevin@4dstructures.co.uk"
      },
      {
        "name": "Mark McGill",
        "role": "Project Manager",
        "email": "mark@4dstructures.co.uk"
      },
      {
        "name": "Morgan Farrell",
        "role": "Quantity Surveyor",
        "email": "morgan@4dstructures.co.uk"
      },
      {
        "name": "Muhammad Farhan",
        "role": "Buyer",
        "email": "muhammad@4dstructures.co.uk"
      },
      {
        "name": "Neil Sheehan",
        "role": "Buyer",
        "email": "neil@4dstructures.co.uk"
      },
      {
        "name": "Patrick Glynn",
        "role": "Site Engineer",
        "email": "patrick@4dstructures.co.uk"
      },
      {
        "name": "Paul McMenamin",
        "role": "Project Manager",
        "email": "paul@4dstructures.co.uk"
      },
      {
        "name": "William Ellis",
        "role": "Buyer",
        "email": "william@4dstructures.co.uk"
      },
      {
        "name": "William Jeffrey",
        "role": "Buyer",
        "email": "william.jeffrey@4dstructures.co.uk"
      }
    ]
  },
  {
    "id": 6,
    "name": "4Site Implementation Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Lisa Dudley",
        "role": "Director",
        "email": "lisa.dudley@4site-implementation.com"
      }
    ]
  },
  {
    "id": 7,
    "name": "777 Demolition & Haulage Company Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alex Fisher",
        "role": "Contract Manager",
        "email": "alex.fisher@777group.co.uk",
        "phone": "7960099174.0"
      },
      {
        "name": "Brett Newman",
        "role": "Contracts Manager",
        "email": "brett.newman@777group.co.uk"
      },
      {
        "name": "David Lee",
        "role": "Contracts Manager",
        "email": "david.lee@777group.co.uk"
      },
      {
        "name": "Karl Bates",
        "role": "Senior Estimator",
        "email": "karl.bates@777group.co.uk",
        "phone": "7768004664.0"
      },
      {
        "name": "Michael Pearce",
        "role": "Director",
        "email": "michael.pearce@777group.co.uk",
        "phone": "7776513965.0"
      },
      {
        "name": "Mike Pearce",
        "role": "Managing Director",
        "email": "mike.pearce@777group.co.uk"
      },
      {
        "name": "Neil Mitchell",
        "role": "Commercial Manager",
        "email": "neil.mitchell@777group.co.uk",
        "phone": "7776513965.0"
      },
      {
        "name": "Nick Thatcher",
        "role": "Site Manager",
        "email": "nick.thatcher@777group.co.uk",
        "phone": "7783616733.0"
      },
      {
        "name": "Roger Davies",
        "role": "Contracts Manager",
        "email": "roger.davies@777group.co.uk"
      },
      {
        "name": "Stuart Hutchings",
        "role": "Project Manager",
        "email": "stuart.hutchings@777group.co.uk"
      }
    ]
  },
  {
    "id": 8,
    "name": "8 Build",
    "disciplines": [
      "Fit-Out & Interiors"
    ],
    "contacts": [
      {
        "name": "Adam Cannon",
        "role": "Project manager",
        "email": "a.cannon@8build.co.uk"
      },
      {
        "name": "Amber Baker",
        "role": "Quantity Surveyor",
        "email": "a.baker@8build.co.uk"
      },
      {
        "name": "Andrew Dixon",
        "email": "a.dixon@8build.co.uk"
      },
      {
        "name": "Andrew Nightingale",
        "role": "Construction Manager",
        "email": "a.nightingale@8build.co.uk"
      },
      {
        "name": "Ben Earle",
        "role": "Project Manager",
        "email": "b.earle@8build.co.uk"
      },
      {
        "name": "Ben Shrubsole",
        "role": "Engineering Manager",
        "email": "b.shrubsole@8build.co.uk"
      },
      {
        "name": "Billy Drake",
        "role": "Project Manager",
        "email": "b.drake@8build.co.uk"
      },
      {
        "name": "Chris Pink",
        "role": "Construction Manager",
        "email": "c.pink@8build.co.uk"
      },
      {
        "name": "Dan Oakford",
        "role": "Contracts Manager",
        "email": "d.oakford@8build.co.uk"
      },
      {
        "name": "Dan Oliver",
        "role": "Quantity Surveyor"
      },
      {
        "name": "Darren Lee",
        "role": "Contracts Manager",
        "email": "d.lee@8build.co.uk"
      },
      {
        "name": "Eren Dogan",
        "role": "Construction Manager",
        "email": "e.dogan@8build.co.uk",
        "phone": "07467 900620"
      },
      {
        "name": "George Phillips",
        "role": "Quantity Surveyor",
        "email": "g.phillips@8build.co.uk"
      },
      {
        "name": "George Stroud",
        "role": "Quantity Surveyor",
        "email": "g.stroud@8build.co.uk"
      },
      {
        "name": "Harry Stevens",
        "role": "Contract Manager",
        "email": "h.stevens@8build.co.uk"
      },
      {
        "name": "Henry Gothard",
        "role": "Quantity Surveyor",
        "email": "h.gothard@8build.co.uk"
      },
      {
        "name": "Henry Pilgrim",
        "role": "Quantity Surveyor",
        "email": "h.pilgrim@8build.co.uk"
      },
      {
        "name": "Ian Woollison",
        "role": "Contracts Manager",
        "email": "i.woollison@8build.co.uk",
        "phone": "07775 758 173"
      },
      {
        "name": "James Robson",
        "role": "Quantity Surveyor",
        "email": "j.robson@8build.com"
      },
      {
        "name": "Jason Sherriff",
        "role": "Senior Quantity Surveyor",
        "email": "j.sherriff@8build.co.uk"
      },
      {
        "name": "John Flain",
        "role": "Quantity Surveyor",
        "email": "j.flain@8build.co.uk"
      },
      {
        "name": "Luke Oakford",
        "role": "Construction Manager",
        "email": "l.oakford@8build.co.uk"
      },
      {
        "name": "Mark Baker",
        "role": "Contracts Manager",
        "email": "m.baker@8build.co.uk"
      },
      {
        "name": "Mark Crawford",
        "role": "Project Manager",
        "email": "m.crawford@8build.co.uk",
        "phone": "07826 864103"
      },
      {
        "name": "Matthew Barbour",
        "role": "Project Leader",
        "email": "m.barbour@8build.co.uk"
      },
      {
        "name": "Matthew Wright",
        "role": "Quantity Surveyor",
        "email": "m.wright@8build.co.uk"
      },
      {
        "name": "Michael Filletti",
        "role": "Quantity Surveyor",
        "email": "m.filletti@8build.co.uk"
      },
      {
        "name": "Mike Fincham",
        "role": "Project Manager",
        "email": "m.fincham@8build.co.uk"
      },
      {
        "name": "Rokas Ramanauskas",
        "role": "Quantity Surveyor",
        "email": "r.ramanauskas@8build.co.uk"
      },
      {
        "name": "Sam Biggs",
        "role": "Quantity Surveyor",
        "email": "s.biggs@8build.co.uk"
      },
      {
        "name": "Sam Hay",
        "role": "Quantity Surveyor",
        "email": "s.hay@8build.co.uk"
      },
      {
        "name": "Simon Leferve",
        "role": "Project Manager",
        "email": "s.leferve@8build.co.uk"
      },
      {
        "name": "Steve Ford",
        "role": "Project Manager",
        "email": "s.ford@8build.co.uk"
      },
      {
        "name": "Warren Burrows",
        "role": "Contracts Manager",
        "email": "w.burrows@8build.co.uk"
      },
      {
        "name": "Wayne Pinnock",
        "role": "Project Manager",
        "email": "w.pinnock@8build.co.uk",
        "phone": "07730 490066"
      }
    ]
  },
  {
    "id": 9,
    "name": "A. Doran Plant Limited",
    "disciplines": [
      "Groundworks"
    ],
    "contacts": [
      {
        "name": "Andrew Doran",
        "role": "Director",
        "email": "doran_a@ymail.com"
      }
    ]
  },
  {
    "id": 10,
    "name": "A2O Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Brian Dilley",
        "role": "Contracts Manager",
        "email": "brian.dilley@a2ogroup.co.uk"
      },
      {
        "name": "Chris Page",
        "role": "Quantity Surveyor",
        "email": "chris.page@a2ogroup.co.uk"
      },
      {
        "name": "Hannah Dowds",
        "role": "Procurement Assistant",
        "email": "hannah.dowds@a2ogroup.co.uk"
      },
      {
        "name": "James Hunt",
        "role": "Quantity Surveyor",
        "email": "james.hunt@a2ogroup.co.uk"
      },
      {
        "name": "Lee Whittaker",
        "role": "Contracts Manager",
        "email": "lee.whittaker@a2ogroup.co.uk"
      },
      {
        "name": "Roman Sudenko",
        "role": "Project Manager",
        "email": "roman.sudenko@a2ogroup.co.uk"
      }
    ]
  },
  {
    "id": 11,
    "name": "AA Sherriff & Son",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andrew Sherriff",
        "role": "Director",
        "email": "andrew.sherriff@aas.co.uk"
      },
      {
        "name": "Jason Haley",
        "role": "Operations Manager",
        "email": "jason.haley@aas.co.uk"
      }
    ]
  },
  {
    "id": 12,
    "name": "Aarsleff Ground Engineering Limited",
    "disciplines": [
      "Piling"
    ],
    "contacts": [
      {
        "name": "Alistair McDonald",
        "role": "Director",
        "email": "info@aarsleff.co.uk",
        "phone": "07990 006639"
      },
      {
        "name": "Dan Broadley",
        "role": "Contracts Manager",
        "email": "db@aarsleff.co.uk",
        "phone": "07917 063287"
      },
      {
        "name": "George Newton",
        "role": "Operations Manager",
        "email": "george.newton@aarsleff.co.uk"
      },
      {
        "name": "Hayley Finney",
        "role": "Commercial Manager",
        "email": "hayleyfinney@aarsleff.co.uk",
        "phone": "07387 092510"
      },
      {
        "name": "Kevin Hague",
        "role": "Managing Director",
        "email": "kevin.hague@aarsleff.co.uk"
      },
      {
        "name": "Libby Butler",
        "role": "Project Manager",
        "email": "libbybutler@aarsleff.co.uk",
        "phone": "07918 882066"
      },
      {
        "name": "Mark Fuller",
        "role": "Piling Manager",
        "email": "markfuller@aarsleff.co.uk"
      },
      {
        "name": "Paul Wiltcher",
        "role": "Director",
        "email": "paulwiltcher@aarsleff.co.uk"
      },
      {
        "name": "Robert Speakman",
        "role": "Manager",
        "email": "robertspeakman@aarsleff.co.uk",
        "phone": "07770 596789"
      }
    ]
  },
  {
    "id": 13,
    "name": "ABC Demolition",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Stuart Wilbraham",
        "role": "Director",
        "email": "stuart.wilbraham@abcdemolitiongroup.co.uk"
      },
      {
        "name": "Sam Wilbraham",
        "role": "Manager",
        "email": "sam@abcdemolitiongroup.co.uk"
      }
    ]
  },
  {
    "id": 14,
    "name": "Able Piling & Construction",
    "disciplines": [
      "Piling"
    ],
    "contacts": [
      {
        "name": "James Woodcock",
        "role": "Engineer",
        "phone": "07745 175329"
      }
    ]
  },
  {
    "id": 15,
    "name": "ABS Mechanical & Electrical",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Aaron Davison",
        "role": "Mechanical Project Manager",
        "email": "adavison@cocksedge.com"
      },
      {
        "name": "Adrian Bishop",
        "role": "Contracts Manager",
        "email": "abishop@cocksedge.com"
      },
      {
        "name": "Darran Jones",
        "role": "Mechanical Project Manager",
        "email": "djones@cocksedge.com"
      },
      {
        "name": "Michael Dabre0",
        "role": "Electrical Engineer",
        "email": "mdabre0@cocksedge.com"
      },
      {
        "name": "Paul Thompson",
        "role": "Electrical Manager",
        "email": "pthompson@cocksedge.com"
      }
    ]
  },
  {
    "id": 16,
    "name": "ABV Contractor",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alin Busi",
        "role": "Director",
        "email": "alin.busi@nabcontractor.uk"
      },
      {
        "name": "Paul-Daniel Cormos",
        "role": "Director of Operations",
        "email": "paul-daniel.cormos@nabcontractor.uk",
        "phone": "07366 369379"
      },
      {
        "name": "Florin Boicu",
        "role": "Project Manager",
        "email": "florin.boicu@nabcontractor.uk"
      },
      {
        "name": "Nicu Gonta",
        "role": "Operations Director",
        "email": "nicu.gonta@nabcontractor.uk"
      },
      {
        "name": "Sammy Fuller",
        "role": "Assistant Quantity Surveyor",
        "email": "sammy.fuller@nabcontractor.uk"
      }
    ]
  },
  {
    "id": 17,
    "name": "AC Bacon Engineering Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andrew Bacon",
        "role": "Managing Director",
        "email": "abacon@acbacon.co.uk"
      },
      {
        "name": "Dan Durrant",
        "role": "Contracts Manager",
        "email": "dan.durrant@acbacon.co.uk"
      },
      {
        "name": "David Bacon",
        "role": "Director",
        "email": "dbacon@acbacon.co.uk"
      },
      {
        "name": "Hazel Bacon",
        "role": "Director",
        "email": "hbacon@acbacon.co.uk"
      },
      {
        "name": "Mark Dagless",
        "role": "Quantity Surveyor",
        "email": "mdagless@acbacon.co.uk"
      },
      {
        "name": "Ryan Bailey",
        "role": "Commercial Manager",
        "email": "ryan.bailey@acbacon.co.uk"
      },
      {
        "name": "Sam Messent",
        "role": "Sales Engineer",
        "email": "smessent@acbacon.co.uk"
      },
      {
        "name": "Wesley Baines",
        "role": "Senior Sales Engineer",
        "email": "wbaines@acbacon.co.uk"
      }
    ]
  },
  {
    "id": 18,
    "name": "AC1 Construction",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adrian Craciun",
        "role": "Director",
        "email": "adrian.craciun@ac1construction.com"
      },
      {
        "name": "Adrian Golescu",
        "role": "Buyer",
        "email": "adrian.golescu@ac1construction.com"
      },
      {
        "name": "Claudia Craciun",
        "role": "Director",
        "email": "claudia.craciun@ac1construction.com"
      },
      {
        "name": "Danut Preutesei",
        "role": "Project Manager",
        "email": "danut.preutesei@ac1construction.com"
      },
      {
        "name": "Gabriela Ciuborariu",
        "role": "Buyer",
        "email": "gabriela.ciuborariu@ac1construction.com"
      },
      {
        "name": "Gheorghe Ghergheluca",
        "role": "Managing Director",
        "email": "gheorghe.ghergheluca@ac1construction.com"
      },
      {
        "name": "Ionut Ardeleanu",
        "role": "Project Manager",
        "email": "ionut.ardeleanu@ac1construction.com"
      },
      {
        "name": "Paul Enasoaie",
        "role": "Project Manager",
        "email": "paul.enasoaie@ac1construction.com",
        "phone": "07445 308643"
      },
      {
        "name": "Shane Kelly",
        "role": "Director",
        "email": "shane.kelly@ac1construction.com",
        "phone": "07494 287964"
      }
    ]
  },
  {
    "id": 19,
    "name": "Acacia Gardens & Horticulture",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Sunil Patel",
        "role": "Director",
        "email": "sunil.patel@acaciagardens.co.uk",
        "phone": "07768 404504"
      }
    ]
  },
  {
    "id": 20,
    "name": "Accent Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alex Heaton",
        "role": "Director",
        "phone": "07999 566573"
      },
      {
        "name": "Alex Heaton",
        "role": "Director",
        "email": "alex.heaton@accentconstruction.co.uk",
        "phone": "07999 566573"
      }
    ]
  },
  {
    "id": 21,
    "name": "Access Contractors UK Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Ioon Grabovschi",
        "role": "Director",
        "email": "ioon.grabovschi@accesscontractorsuk.co.uk",
        "phone": "07856 957471"
      }
    ]
  },
  {
    "id": 22,
    "name": "Accurate Roofing Limited",
    "disciplines": [
      "Roofing"
    ],
    "contacts": [
      {
        "name": "Adrian Humphries",
        "role": "Quantity Surveyor",
        "email": "adrian@accurateroofing.co.uk"
      },
      {
        "name": "Barry Newlands",
        "role": "Contracts Manager",
        "email": "barry@accurateroofing.co.uk",
        "phone": "07739 959635"
      },
      {
        "name": "Billy Wharton",
        "role": "Contracts Manager",
        "email": "billy@accurateroofing.co.uk",
        "phone": "07772 521599"
      },
      {
        "name": "Tom Savage",
        "role": "Managing Surveyor",
        "email": "toms@accurateroofing.co.uk"
      }
    ]
  },
  {
    "id": 23,
    "name": "Ace Welding Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Steve Norman",
        "role": "Managing Director",
        "email": "steve.norman@aceweldingltd.com"
      },
      {
        "name": "Tom Mayby",
        "role": "Site Manager",
        "email": "tom@aceweldingltd.com"
      },
      {
        "name": "Tom Stillman",
        "role": "Contract Manager",
        "email": "tstillman@aceweldingltd.com"
      }
    ]
  },
  {
    "id": 24,
    "name": "ACS Construction Group",
    "disciplines": [
      "Groundworks"
    ],
    "contacts": [
      {
        "name": "Adam Smith",
        "role": "Quantity Surveyor",
        "email": "adam.smith@acsconstrucationgroup.com"
      },
      {
        "name": "Josh O'Brein",
        "role": "Assistant Quantity Surveyor",
        "email": "josh.obrein@acsconstrucationgroup.com"
      },
      {
        "name": "Sean Power",
        "role": "Director",
        "email": "sean.power@acsconstructiongroup.com"
      }
    ]
  },
  {
    "id": 25,
    "name": "AD Bly Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Aaron McSkimming",
        "role": "Director",
        "email": "aaron.mcskimming@adbly.co.uk"
      },
      {
        "name": "Bob O'Connor",
        "role": "Contracts Manager",
        "email": "bob.oconnor@adbly.co.uk"
      },
      {
        "name": "Charlie Goodwin",
        "role": "Contracts Manager",
        "email": "charlie.goodwin@adbly.co.uk"
      },
      {
        "name": "Charlie Randle",
        "role": "Quantity Surveyor",
        "email": "charlie.randle@adbly.co.uk"
      },
      {
        "name": "Clive Parkin",
        "role": "Quantity Surveyor",
        "email": "clive.parkin@adbly.co.uk"
      },
      {
        "name": "Finlay Connah",
        "role": "Quantity Surveyor",
        "email": "finlay.connah@adbly.co.uk"
      },
      {
        "name": "Gary Rix",
        "role": "Site Manager",
        "email": "gary.rix@adbly.co.uk"
      },
      {
        "name": "Jacek Arszynski",
        "role": "Contracts Manager",
        "email": "jacek.arszynski@adbly.co.uk"
      },
      {
        "name": "Jack Arszynski",
        "role": "Contracts Manager",
        "email": "jack.arszynski@adbly.co.uk"
      },
      {
        "name": "Kelly Moss",
        "role": "Buyer",
        "email": "kelly.moss@adbly.co.uk"
      },
      {
        "name": "Kevin Casey",
        "role": "Quantity Surveyor",
        "email": "kevin.casey@adbly.co.uk"
      },
      {
        "name": "Kieran Smith",
        "role": "Contract Manager",
        "email": "kieran.smith@adbly.co.uk"
      },
      {
        "name": "Mark Woollard",
        "role": "Project Manager",
        "email": "mark.woollard@adbly.co.uk"
      },
      {
        "name": "Noel O'Boyle",
        "role": "Contracts Manager",
        "email": "noel.oboyle@adbly.co.uk"
      },
      {
        "name": "Ollie Summers",
        "role": "Contracts Manager",
        "email": "ollie.summers@adbly.co.uk"
      },
      {
        "name": "Paul Helliar",
        "role": "Contracts Manager",
        "email": "paul.helliar@adbly.co.uk"
      },
      {
        "name": "Phil Cusack",
        "role": "Contracts Manager",
        "email": "phil.cusack@adbly.co.uk"
      },
      {
        "name": "Sarah Eley",
        "role": "Buyer",
        "email": "sarah.eley@adbly.co.uk"
      },
      {
        "name": "Sharon Lawrence",
        "role": "Project Manager",
        "email": "sharon.lawrence@adbly.co.uk"
      },
      {
        "name": "Stevie Bates",
        "role": "Contracts Manager",
        "email": "stevie.bates@adbly.co.uk"
      },
      {
        "name": "Stuart Hirst",
        "role": "Commercial Director",
        "email": "stuart.hirst@adbly.co.uk"
      },
      {
        "name": "Tony Bly",
        "role": "Managing Director",
        "email": "tony.bly@adbly.co.uk"
      },
      {
        "name": "Tony Dopson",
        "role": "Contracts Manager",
        "email": "tony.dopson@adbly.co.uk"
      }
    ]
  },
  {
    "id": 26,
    "name": "Addington (Formworks) Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andy Hutchins",
        "role": "Contracts Manager",
        "email": "andy@addingtonformworks.co.uk",
        "phone": "7801525137.0"
      },
      {
        "name": "Jamie Branch",
        "role": "Site Manager",
        "email": "jamie.branch@addingtonformworks.co.uk"
      },
      {
        "name": "Joaquim Torrao",
        "role": "Design Engineer",
        "email": "joaquim@addingtonformworks.co.uk"
      },
      {
        "name": "Keith Dwyer",
        "role": "Chief Estimator",
        "email": "keith@addingtonformworks.co.uk"
      },
      {
        "name": "Martin Henty",
        "role": "Site Foreman",
        "email": "martin.henty@addingtonformworks.co.uk",
        "phone": "7769934961.0"
      },
      {
        "name": "Michael Corcoran",
        "role": "Director",
        "email": "michael.corcoran@addingtonformworks.co.uk"
      },
      {
        "name": "Noel Corcoran",
        "role": "Contracts Manager",
        "email": "noel@addingtonformworks.co.uk"
      },
      {
        "name": "Paul O'Donnell",
        "role": "Surveyor",
        "email": "paul@addingtonformworks.co.uk"
      },
      {
        "name": "Valentin Vicol",
        "role": "Site Manager",
        "email": "valentin.vicol@addingtonformworks.co.uk"
      }
    ]
  },
  {
    "id": 27,
    "name": "Aden Contracting Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adam Webster",
        "role": "Commercial Director",
        "email": "adamwebster@adencontracting.co.uk"
      },
      {
        "name": "Denis Curtis",
        "role": "Contracts Manager",
        "email": "deniscurtis@adencontracting.co.uk",
        "phone": "7826520681.0"
      },
      {
        "name": "Jamie Clifford",
        "role": "Quantity Surveyor",
        "email": "jamieclifford@adencontracting.co.uk"
      },
      {
        "name": "Kevin Czakan",
        "role": "Contracts Manager",
        "email": "kevinczakan@adencontracting.co.uk",
        "phone": "07896 764444"
      },
      {
        "name": "Kris St John",
        "role": "Project Manager",
        "email": "krisstjohn@adencontracting.co.uk"
      },
      {
        "name": "Lauren Burgundy",
        "role": "Site Manager",
        "email": "laurenburgundy@adencontracting.co.uk"
      },
      {
        "name": "Lee Porter-Harris",
        "role": "Contracts Manager",
        "email": "leeporterharris@adencontracting.co.uk"
      },
      {
        "name": "Matthew Blythe",
        "role": "Quantity Surveyor",
        "email": "matthewblythe@adencontracting.co.uk"
      },
      {
        "name": "Michael Fitzpatrick",
        "role": "Quantity Surveyor",
        "email": "michaelfitzpatrick@adencontracting.co.uk"
      },
      {
        "name": "Scott Marshall",
        "role": "Contract Manager",
        "email": "scottmarshall@adencontracting.co.uk"
      },
      {
        "name": "Simon Roy",
        "role": "Estimator",
        "email": "simonroy@adencontracting.co.uk"
      },
      {
        "name": "Stuart Neale",
        "role": "Quantity Surveyor",
        "email": "stuartneale@adencontracting.co.uk"
      },
      {
        "name": "Vic Marshall",
        "role": "Contracts Manager",
        "email": "vicmarshall@adencontracting.co.uk",
        "phone": "07896 735 026"
      },
      {
        "name": "Matthew Blythe",
        "role": "Quantity Surveyor",
        "email": "matthew.blythe@adencontracting.co.uk"
      },
      {
        "name": "Michael Fitzpatrick",
        "role": "Quantity Surveyor",
        "email": "michael.fitzpatrick@adencontracting.co.uk"
      },
      {
        "name": "Simon Roy",
        "role": "Estimator",
        "email": "simon.roy@adencontracting.co.uk"
      }
    ]
  },
  {
    "id": 28,
    "name": "Adstone Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Dave Robson",
        "role": "Contracts Manager",
        "email": "robbo.dave@adstone.org.uk",
        "phone": "07569 878585"
      },
      {
        "name": "Gary Howson",
        "role": "Contracts Manager",
        "email": "gary.howson@adstone.org.uk"
      },
      {
        "name": "Ian Young",
        "role": "Managing Director",
        "email": "ian.young@adstone.org.uk",
        "phone": "07836 514991"
      },
      {
        "name": "Julie Young",
        "role": "Managing Director",
        "email": "julie.young@adstone.org.uk"
      },
      {
        "name": "Keith Vaughan",
        "role": "Contracts Manager",
        "email": "keith.vaughan@adstone.org.uk"
      },
      {
        "name": "Mark Roberts",
        "role": "Quantity Surveyor",
        "email": "mark.roberts@adstone.org.uk"
      },
      {
        "name": "Matt Barker",
        "role": "Site Manager",
        "email": "matt.barker@adstone.org.uk"
      }
    ]
  },
  {
    "id": 29,
    "name": "AES Construction Services Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Dan Lawton",
        "role": "Commercial Director",
        "email": "dan.lawton@aesconstruction.co.uk",
        "phone": "07775 774941"
      },
      {
        "name": "Des Cook",
        "role": "Senior Quantity Surveyor",
        "email": "des.cook@aesconstruction.co.uk"
      },
      {
        "name": "Paul Sansford",
        "role": "Contracts Manager",
        "email": "paul.sansford@aesconstruction.co.uk"
      }
    ]
  },
  {
    "id": 30,
    "name": "Ainsworth Civils & Engineering Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Julius Ainsworth",
        "role": "Managing Director",
        "email": "jainsworth@ace-limited.com"
      },
      {
        "name": "Scott Barton",
        "role": "Project Manager",
        "email": "sbarton@ace-limited.com"
      }
    ]
  },
  {
    "id": 31,
    "name": "Aitch Demolition",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "David Bradding",
        "role": "Project Manager",
        "phone": "07887 574459"
      }
    ]
  },
  {
    "id": 32,
    "name": "Aitch Group",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Antoan Grozdanov",
        "role": "Senior Site Manager",
        "email": "agrozdanov@aitchgroup.com",
        "phone": "07513 941784"
      },
      {
        "name": "Clare Carrodus",
        "role": "Development Manager",
        "email": "ccarrodus@aitchgroup.com"
      },
      {
        "name": "Jack Malkin",
        "role": "Quantity Surveyor",
        "email": "jmalkin@aitchgroup.com"
      },
      {
        "name": "John Ellice",
        "role": "Construction Manager",
        "email": "jellice@aitchgroup.com",
        "phone": "07932 958 030"
      },
      {
        "name": "Kenji Holdsworth",
        "role": "Planner",
        "email": "kholdsworth@aitchgroup.com"
      },
      {
        "name": "Nick Lawrence",
        "role": "Manager",
        "email": "nlawrence@yourtribe.london"
      },
      {
        "name": "Phoebe Juggins",
        "role": "Senior Planning Manager",
        "email": "pjuggins@aitchgroup.com"
      },
      {
        "name": "Saoirse Byrne",
        "role": "Commercial Manager",
        "email": "sbyrne@aitchgroup.com"
      },
      {
        "name": "Toby Mills",
        "role": "Senior Development Manager",
        "email": "tmills@aitchgroup.com",
        "phone": "07508 753021"
      }
    ]
  },
  {
    "id": 33,
    "name": "AJE Facades",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Gary Clarke",
        "role": "Contracts Manager",
        "email": "gary.clarke@ajefacades.com"
      },
      {
        "name": "Joel McInern",
        "role": "Director",
        "email": "joel.mcinern@ajefacades.com",
        "phone": "07956 103723"
      },
      {
        "name": "Mark Hall",
        "role": "Site Manager",
        "email": "mark.hall@ajefacades.com"
      }
    ]
  },
  {
    "id": 34,
    "name": "AJE Facades Limited",
    "disciplines": [
      "Facades & Cladding"
    ],
    "contacts": [
      {
        "name": "Gary Clarke",
        "role": "Contracts Manager",
        "email": "gary.clarke@ajefacades.com"
      },
      {
        "name": "Joel McInern",
        "role": "Director",
        "email": "joel.mcinern@ajefacades.com",
        "phone": "07956 103723"
      },
      {
        "name": "Mark Hall",
        "role": "Site Manager",
        "email": "mark.hall@ajefacades.com"
      }
    ]
  },
  {
    "id": 35,
    "name": "AKD Contracts Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adam Clarke",
        "role": "Director",
        "email": "adam@akdcontracts.co.uk"
      }
    ]
  },
  {
    "id": 36,
    "name": "AKN Engineering",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Asish Chauhan",
        "role": "Director",
        "email": "asish.chauhan@aknengineering.co.uk"
      }
    ]
  },
  {
    "id": 37,
    "name": "AKN Engineering Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Asish Chauhan",
        "role": "Director",
        "email": "office@aknengineering.co.uk"
      }
    ]
  },
  {
    "id": 38,
    "name": "ALB Brickwork",
    "disciplines": [
      "Brickwork"
    ],
    "contacts": [
      {
        "name": "Oliger Bushi",
        "role": "Director",
        "email": "oliger@albbrickwork.co.uk"
      }
    ]
  },
  {
    "id": 39,
    "name": "All Metal Roofing Limited",
    "disciplines": [
      "Roofing"
    ],
    "contacts": [
      {
        "name": "Artiom Krasavin",
        "role": "Director",
        "email": "artiom@allmetalroofing.co.uk"
      },
      {
        "name": "Mark Carroll",
        "role": "Director",
        "email": "office@allmetalroofing.co.uk",
        "phone": "07522 226481"
      },
      {
        "name": "Mark Howard",
        "role": "Estimating Director",
        "email": "mark@allmetalroofing.co.uk",
        "phone": "07545 922804"
      },
      {
        "name": "Richard Shanahan",
        "role": "Director",
        "email": "richard@allmetalroofing.co.uk",
        "phone": "07971 610029"
      },
      {
        "name": "Simon Shepherd",
        "role": "Business Development Director",
        "email": "simon@allmetalroofing.co.uk"
      }
    ]
  },
  {
    "id": 40,
    "name": "All Seasons Group",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Anthony Noble",
        "role": "Director",
        "email": "a.noble@allseasonsgroupservices.co.uk"
      },
      {
        "name": "Gary Cunningham",
        "role": "Supervisor",
        "email": "g.cunningham@allseasonsgroupservices.co.uk"
      },
      {
        "name": "Jason Severini",
        "role": "Project Manager",
        "email": "jason.severini@allseasonsgroupservices.co.uk",
        "phone": "07985 304775"
      },
      {
        "name": "Mark Robinson",
        "role": "Director",
        "email": "m.robinson@allseasonsgroupservices.co.uk",
        "phone": "07734 863313"
      }
    ]
  },
  {
    "id": 41,
    "name": "Alliance Facades Services",
    "disciplines": [
      "Facades & Cladding"
    ],
    "contacts": [
      {
        "name": "Eamonn Tobin",
        "role": "Operations Director",
        "email": "eamonn.tobin@alliancefacades.com"
      },
      {
        "name": "John Foster",
        "role": "Pre Construction Manager",
        "email": "jfoster@alliancefacades.com",
        "phone": "07764 839149"
      },
      {
        "name": "Reece Barnes",
        "role": "reece.barnes@alliancefacades.com"
      },
      {
        "name": "Reece Barnes",
        "email": "reece.barnes@alliancefacades.com"
      }
    ]
  },
  {
    "id": 42,
    "name": "Alltask",
    "disciplines": [
      "Scaffolding"
    ],
    "contacts": [
      {
        "name": "Clark Coffield",
        "role": "Contract Manager",
        "email": "clark.coffield@alltask.co.uk"
      },
      {
        "name": "Daryl Vivash",
        "role": "Contracts Supervisor",
        "email": "daryl.vivash@alltask.co.uk"
      },
      {
        "name": "Ian Howson",
        "role": "Managing Director",
        "email": "ian.howson@alltask.co.uk"
      },
      {
        "name": "Jak Patterson-Fields",
        "role": "Design Manager",
        "email": "jak.patterson-fields@alltask.co.uk"
      },
      {
        "name": "Liam Duffy",
        "role": "Contracts Manager",
        "email": "liam.duffy@alltask.co.uk"
      },
      {
        "name": "Nick Bentley",
        "role": "Quantity Surveyor",
        "email": "nick.bentley@alltask.co.uk"
      },
      {
        "name": "Nick Covell",
        "role": "Development Manager",
        "email": "nick.covell@alltask.co.uk",
        "phone": "07837 188717"
      },
      {
        "name": "Richard Thompson",
        "role": "Project Manager",
        "email": "richard.thompson@alltask.co.uk"
      },
      {
        "name": "Simon Coates",
        "role": "Contracts Manager",
        "email": "simon.coates@alltask.co.uk"
      },
      {
        "name": "Mark Walters",
        "role": "Contracts Manager",
        "email": "mark.walters@alltask.co.uk"
      }
    ]
  },
  {
    "id": 43,
    "name": "ALN Carpentry & Joinery Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adam Coles",
        "role": "Quantity Surveyor",
        "email": "adam.coles@alncarpentryandjoinery.co.uk"
      },
      {
        "name": "Alan Nash",
        "email": "alan.nash@alncarpentryandjoinery.co.uk",
        "phone": "07828 437585"
      },
      {
        "name": "Andrew Brindsley Pether",
        "role": "Contract Manager",
        "email": "andrew.brindsleypether@alncarpentryandjoinery.co.uk"
      },
      {
        "name": "Andy Brinsdale",
        "role": "Contracts Manager",
        "email": "andrew@alncarpentryandjoinery.co.uk",
        "phone": "07922 268686"
      },
      {
        "name": "Will Lawton",
        "role": "Director",
        "email": "will.lawton@alncarpentryandjoinery.co.uk"
      }
    ]
  },
  {
    "id": 44,
    "name": "Alpine Demolition Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Jan Stabley",
        "email": "jan.stabley@alpinedemolition.co.uk"
      },
      {
        "name": "Janice Bartholomew",
        "role": "Director",
        "email": "janice.bartholomew@alpinedemolition.co.uk"
      }
    ]
  },
  {
    "id": 45,
    "name": "Alto Construct",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andrew Peacock",
        "role": "Director",
        "email": "andrew.peacock@altoconstruct.co.uk"
      },
      {
        "name": "Joe Buckley",
        "role": "Quantity Surveyor",
        "email": "joe.buckley@altoconstruct.co.uk"
      },
      {
        "name": "Lavinia Gavaghan",
        "role": "Site Manager",
        "email": "lavinia.gavaghan@altoconstruct.co.uk"
      },
      {
        "name": "Liam Miller",
        "role": "Project Manager",
        "email": "liam.miller@altoconstruct.co.uk"
      },
      {
        "name": "Paul Sanderson",
        "role": "Managing Director",
        "email": "paul.sanderson@altoconstruct.co.uk"
      },
      {
        "name": "Craig Wallis",
        "role": "Project Manager",
        "email": "craig.wallis@altoconstruct.co.uk"
      },
      {
        "name": "Manny Hussain",
        "role": "Site Manager",
        "email": "manny.hussain@altoconstruct.co.uk",
        "phone": "07514 425555"
      },
      {
        "name": "Rob Fryer",
        "role": "Site Manager",
        "email": "rob.fryer@altoconstruct.co.uk"
      }
    ]
  },
  {
    "id": 46,
    "name": "Alu-fix (UK) Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andrew Caddoo",
        "role": "Senior Estimator",
        "email": "andrew.caddoo@alufixuk.com"
      },
      {
        "name": "Andy Horsley",
        "role": "Quantity Surveyor",
        "email": "andy.horsley@alufixuk.com"
      },
      {
        "name": "Dan Jones",
        "role": "Designer",
        "email": "dan.jones@alufixuk.com"
      },
      {
        "name": "Joe Judd",
        "role": "Project Manager",
        "email": "joe.judd@alufixuk.com"
      },
      {
        "name": "Peter Bryant",
        "role": "Project Manager",
        "email": "peter.bryant@alufixuk.com",
        "phone": "07801 383096"
      },
      {
        "name": "Philip Linton",
        "role": "Commercial Manager",
        "email": "philip.linton@alufixuk.com"
      },
      {
        "name": "Philip Young",
        "role": "Director",
        "email": "philip.young@alufixuk.com",
        "phone": "07831 141362"
      },
      {
        "name": "Steven Hicks",
        "role": "Operations Manager",
        "email": "steven.hicks@alufixuk.com",
        "phone": "07887 948956"
      },
      {
        "name": "Vandit Narendracumar",
        "role": "Project Manager",
        "email": "vandit.narendracumar@alufixuk.com"
      }
    ]
  },
  {
    "id": 47,
    "name": "Alumasc Exterior Building Products",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Craig Begg",
        "role": "Regional Director",
        "email": "craig.begg@alumasc-exteriors.co.uk",
        "phone": "07884 666454"
      },
      {
        "name": "Mathew Johns",
        "role": "Area Manager",
        "email": "m.johns@alumascroofing.com",
        "phone": "07464 491909"
      },
      {
        "name": "Naomi Gornall",
        "role": "Build Manager",
        "email": "n.gornall@alumascroofing.com"
      },
      {
        "name": "Sam Clayden",
        "role": "Area Manager",
        "email": "sam.clayden@alumasc-exteriors.co.uk",
        "phone": "07788 394569"
      },
      {
        "name": "Sam Nelson",
        "role": "Area Manager",
        "email": "s.nelson@alumascroofing.com",
        "phone": "07881 255058"
      }
    ]
  },
  {
    "id": 48,
    "name": "Amber Construction Services Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Bill Watts",
        "role": "Operations Manager / Construction Director",
        "email": "bill@amberconstruction.com",
        "phone": "07790 887005"
      },
      {
        "name": "Chris Charles",
        "role": "Quantity Surveyor",
        "email": "chris.charles@amberconstruction.com"
      },
      {
        "name": "Gary Nichol",
        "role": "Quantity Surveyor",
        "email": "gary@amberconstruction.com"
      },
      {
        "name": "Harriet Douglas",
        "role": "Contract Manager",
        "email": "harriet@amberconstruction.com"
      },
      {
        "name": "Steve Mack",
        "role": "Contracts Manager",
        "email": "steve.mack@amberconstruction.com"
      }
    ]
  },
  {
    "id": 49,
    "name": "Amery Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Chris Hunt",
        "role": "Contracts Manager",
        "email": "chris.hunt@ameryconstruction.co.uk",
        "phone": "7805062194.0"
      },
      {
        "name": "David Boyce",
        "role": "Commercial Director",
        "email": "david.boyce@ameryconstruction.co.uk",
        "phone": "07903 503804"
      },
      {
        "name": "Deirdre O'Rourke",
        "role": "Contracts Manager",
        "email": "deirdre.orourke@ameryconstruction.co.uk"
      },
      {
        "name": "Jack Ryan",
        "role": "Contracts Manager",
        "email": "jack.ryan@ameryconstruction.co.uk"
      },
      {
        "name": "Nigel McArdle",
        "role": "Buyer",
        "email": "nigel.mcardle@ameryconstruction.co.uk"
      }
    ]
  },
  {
    "id": 50,
    "name": "AMG Contractors",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alan Gibbons",
        "role": "Director",
        "email": "alan.gibbons@amg-contractors.uk",
        "phone": "07703 629214"
      },
      {
        "name": "Matthew Gibbons",
        "role": "Senior Contracts Manager",
        "email": "matthew.gibbons@amg-contractors.uk"
      }
    ]
  },
  {
    "id": 51,
    "name": "AN Construction Solution",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Jonathan Ngongo",
        "role": "Quantity Surveyor",
        "email": "jonathan.ngongo@an-construction.co.uk"
      },
      {
        "name": "Mantas Lopsas",
        "role": "Quantity Surveyor",
        "email": "mantas@an-construction.co.uk"
      }
    ]
  },
  {
    "id": 52,
    "name": "AN Construction Solution Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Jonathan Ngongo",
        "role": "Quantity Surveyor",
        "email": "jonathan.ngongo@an-construction.co.uk"
      },
      {
        "name": "Mantas Lopsas",
        "role": "Quantity Surveyor",
        "email": "mantas@an-construction.co.uk"
      }
    ]
  },
  {
    "id": 53,
    "name": "Anderson Group",
    "disciplines": [
      "Civil Engineering",
      "Groundworks"
    ],
    "contacts": [
      {
        "name": "Aaron Sant",
        "role": "Site Manager",
        "email": "aaron.sant@andersongroup.co.uk"
      },
      {
        "name": "Alasdair Sherry",
        "email": "a.sherry@andersongroup.co.uk"
      },
      {
        "name": "Andrew Nowosad",
        "role": "Commercial Director",
        "email": "andrew.nowosad@andersongroup.co.uk"
      },
      {
        "name": "Brian Elles",
        "role": "Project Manager",
        "email": "b.elles@andersongroup.co.uk",
        "phone": "07980 854849"
      },
      {
        "name": "Charlie Rogers",
        "role": "Contracts Manager",
        "email": "charlie.rogers@andersongroup.co.uk"
      },
      {
        "name": "Dominic Bazington",
        "email": "dominic.bazington@andersongroup.co.uk"
      },
      {
        "name": "Ian Cunnane",
        "role": "Operations Director",
        "email": "i.cunnane@andersongroup.co.uk",
        "phone": "07974 255856"
      },
      {
        "name": "Ross Brears",
        "role": "Quantity Surveyor",
        "email": "ross.brears@andersongroup.co.uk"
      },
      {
        "name": "Ross Parmenter",
        "role": "Senior Site Manager",
        "email": "r.parmenter@andersongroup.co.uk",
        "phone": "07989 476355"
      },
      {
        "name": "Shaun Emmett",
        "role": "Quantity Surveyor",
        "email": "shaun.emmett@andersongroup.co.uk"
      },
      {
        "name": "Terry Lindsell",
        "role": "Project Manager",
        "email": "t.lindsell@andersongroup.co.uk",
        "phone": "07980 854802"
      },
      {
        "name": "Tim Chilvers",
        "role": "Operations Director",
        "email": "t.chilvers@andersongroup.co.uk"
      },
      {
        "name": "Tristen Moore",
        "role": "Quantity Surveyor",
        "email": "t.moore@andersongroup.co.uk",
        "phone": "7813957492.0"
      }
    ]
  },
  {
    "id": 54,
    "name": "Anderson Group Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alasdair Sherry",
        "email": "a.sherry@andersongroup.co.uk"
      },
      {
        "name": "Brian Elles",
        "role": "Project Manager",
        "email": "b.elles@andersongroup.co.uk",
        "phone": "07980 854849"
      },
      {
        "name": "Ian Cunnane",
        "role": "Operations Director",
        "email": "i.cunnane@andersongroup.co.uk",
        "phone": "07974 255856"
      },
      {
        "name": "Ross Parmenter",
        "role": "Senior Site Manager",
        "email": "r.parmenter@andersongroup.co.uk",
        "phone": "07989 476355"
      },
      {
        "name": "Terry Lindsell",
        "role": "Project Manager",
        "email": "t.lindsell@andersongroup.co.uk",
        "phone": "07980 854802"
      },
      {
        "name": "Tim Chilvers",
        "role": "Operations Director",
        "email": "t.chilvers@andersongroup.co.uk"
      },
      {
        "name": "Tristen Moore",
        "role": "Quantity Surveyor",
        "email": "t.moore@andersongroup.co.uk",
        "phone": "07813 957492"
      }
    ]
  },
  {
    "id": 55,
    "name": "Anglia Fixing",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Chris Fitch",
        "role": "Managing Director",
        "email": "cfitch@angliafixing.co.uk"
      },
      {
        "name": "Kelvyn Woodhead",
        "role": "Director",
        "email": "kwoodhead@angliafixing.co.uk"
      },
      {
        "name": "Kevin Avery",
        "role": "Contracts Manager",
        "email": "kavery@angliafixing.co.uk"
      },
      {
        "name": "Steve Hall",
        "role": "Sales Executive",
        "email": "shall@angliafixing.co.uk"
      }
    ]
  },
  {
    "id": 56,
    "name": "Anglian Demolition & Asbestos",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Aaron Malin",
        "role": "Contracts Manager",
        "email": "aaron@angliandemo.co.uk"
      },
      {
        "name": "Andrew Elvin",
        "role": "Contracts Director",
        "email": "andye@angliandemo.co.uk",
        "phone": "07590 419059"
      },
      {
        "name": "Gary Yabsley",
        "role": "Contracts Director",
        "email": "gary.yabsley@angliandemo.co.uk"
      },
      {
        "name": "Karl Endersby",
        "role": "Demolition Contracts Manager",
        "email": "karl@angliandemo.co.uk",
        "phone": "07500 091719"
      },
      {
        "name": "Lee Storer",
        "role": "Managing Director",
        "email": "lee@angliandemo.co.uk"
      },
      {
        "name": "Peter Tolman",
        "role": "Demolition Contracts Manager",
        "email": "pete11@angliandemo.co.uk",
        "phone": "07970 715168"
      },
      {
        "name": "Richard Lambert",
        "role": "Asbestos Contracts Manager",
        "email": "richard@angliandemo.co.uk",
        "phone": "07808 254637"
      },
      {
        "name": "Robert Eastaff",
        "role": "Commercial Director",
        "email": "rob@angliandemo.co.uk"
      },
      {
        "name": "Ross Leamon",
        "role": "Director",
        "email": "ross.leamon@angliandemo.co.uk"
      },
      {
        "name": "Wayne Sampson",
        "role": "Commercial Manager",
        "email": "wayne.sampson@angliandemo.co.uk"
      }
    ]
  },
  {
    "id": 57,
    "name": "Anglian Demolition & Asbestos Limited",
    "disciplines": [
      "Demolition"
    ],
    "contacts": [
      {
        "name": "Aaron Malin",
        "role": "Contracts Manager",
        "email": "aaron@angliandemo.co.uk"
      },
      {
        "name": "Andrew Elvin",
        "role": "Contracts Director",
        "email": "andye@angliandemo.co.uk",
        "phone": "07590 419059"
      },
      {
        "name": "Gary Yabsley",
        "role": "Contracts Director",
        "email": "gary.yabsley@angliandemo.co.uk"
      },
      {
        "name": "Jamie Currie",
        "role": "Administration Officer",
        "email": "jamie@angliandemo.co.uk"
      },
      {
        "name": "Karl Endersby",
        "role": "Demolition Contracts Manager",
        "email": "karl@angliandemo.co.uk",
        "phone": "07500 091719"
      },
      {
        "name": "Lee Storer",
        "role": "Managing Director",
        "email": "lee@angliandemo.co.uk"
      },
      {
        "name": "Nick Bacon",
        "role": "HR Manager",
        "email": "nick@angliandemo.co.uk",
        "phone": "07971 702758"
      },
      {
        "name": "Peter Tolman",
        "role": "Demolition Contracts Manager",
        "email": "pete11@angliandemo.co.uk",
        "phone": "07970 715168"
      },
      {
        "name": "Richard Lambert",
        "role": "Asbestos Contracts Manager",
        "email": "richard@angliandemo.co.uk",
        "phone": "07808 254637"
      },
      {
        "name": "Robert Eastaff",
        "role": "Commercial Director",
        "email": "rob@angliandemo.co.uk"
      },
      {
        "name": "Ross Leamon",
        "role": "Director",
        "email": "ross.leamon@angliandemo.co.uk"
      },
      {
        "name": "Wayne Sampson",
        "role": "Commercial Manager",
        "email": "wayne.sampson@angliandemo.co.uk"
      }
    ]
  },
  {
    "id": 58,
    "name": "Apex Contracting Solutions",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Bharat Kerai",
        "role": "Site Manager"
      }
    ]
  },
  {
    "id": 59,
    "name": "Apex Demolition",
    "disciplines": [
      "Demolition"
    ],
    "contacts": [
      {
        "name": "Adam Lawson",
        "role": "Site Manager",
        "email": "adam.lawson@apexcontracting.co.uk",
        "phone": "07918 638815"
      },
      {
        "name": "Brad Challis",
        "role": "Contracts Manager",
        "email": "brad.challis@apexcontracting.co.uk",
        "phone": "07547 541209"
      },
      {
        "name": "David Meek",
        "role": "Contracts Manager",
        "email": "david.meek@apexcontracting.co.uk",
        "phone": "07933 322795"
      },
      {
        "name": "Mark Nicholls",
        "role": "Director",
        "email": "mark.nicholls@apexcontracting.co.uk"
      },
      {
        "name": "Matthew Meek",
        "role": "Procurement Manager",
        "email": "matthew.meek@apexcontracting.co.uk",
        "phone": "07548 614695"
      },
      {
        "name": "Tony Arlow",
        "role": "Operations Director",
        "email": "tony@apexcontracting.co.uk",
        "phone": "07766 800285"
      },
      {
        "name": "Tony Parslow",
        "role": "Group Manager",
        "email": "tony.parslow@apexcontracting.co.uk",
        "phone": "07779 904512"
      }
    ]
  },
  {
    "id": 60,
    "name": "Apex Roofing Anglia Limited",
    "disciplines": [
      "Roofing"
    ],
    "contacts": [
      {
        "name": "Ian Gaffer",
        "role": "Estimator",
        "email": "ian@apexscaffold.co.uk"
      },
      {
        "name": "Jacqueline Biswell",
        "role": "Director",
        "email": "jacqueline.biswell@apexscaffold.co.uk"
      },
      {
        "name": "Sally Peck",
        "role": "Director",
        "email": "sally@apexscaffold.co.uk"
      }
    ]
  },
  {
    "id": 61,
    "name": "APT Scaffolding",
    "disciplines": [
      "Scaffolding"
    ],
    "contacts": [
      {
        "name": "Gary Parkin",
        "role": "Health and Safety Manager",
        "email": "gary.parkin@aptscaffolding.co.uk"
      },
      {
        "name": "Philip Mendelsohn",
        "role": "Transport Manager",
        "email": "philip.mendelsohn@aptscaffolding.co.uk"
      },
      {
        "name": "Uk Xhafa",
        "role": "Quantity Surveyor",
        "email": "uk.xhafa@aptscaffolding.co.uk"
      },
      {
        "name": "Yani Peka",
        "role": "Managing Director",
        "email": "peka@aptscaffolding.co.uk"
      }
    ]
  },
  {
    "id": 62,
    "name": "Aquarian Cladding Systems",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Chris Gill",
        "role": "Operations Manager",
        "email": "chris@aquariancladding.co.uk"
      },
      {
        "name": "Jazz Rigden",
        "role": "Project Manager",
        "email": "jazz@aquariancladding.co.uk",
        "phone": "07585 704993"
      },
      {
        "name": "Paul Richards",
        "role": "Managing Director",
        "email": "paul.richards@aquariancladding.co.uk",
        "phone": "07917 384993"
      },
      {
        "name": "Ryan Callaghan",
        "role": "Technical Sales Manager",
        "email": "ryan@aquariancladding.co.uk",
        "phone": "07900 789933"
      }
    ]
  },
  {
    "id": 63,
    "name": "Aquarian Cladding Systems Limited",
    "disciplines": [
      "Facades & Cladding"
    ],
    "contacts": [
      {
        "name": "Chris Gill",
        "role": "Operations Manager",
        "email": "chris@aquariancladding.co.uk"
      },
      {
        "name": "Jazz Rigden",
        "role": "Project Manager",
        "email": "jazz@aquariancladding.co.uk",
        "phone": "07585 704993"
      },
      {
        "name": "Paul Richards",
        "role": "Managing Director",
        "email": "paul.richards@aquariancladding.co.uk",
        "phone": "07917 384993"
      },
      {
        "name": "Ryan Callaghan",
        "role": "Technical Sales Manager",
        "email": "ryan@aquariancladding.co.uk",
        "phone": "07900 789933"
      }
    ]
  },
  {
    "id": 64,
    "name": "ARC Engineering Fabrication Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Amy Hodd",
        "role": "Quantity Surveyor",
        "email": "amy.hodd@arcengineeringuk.co.uk"
      },
      {
        "name": "Stephen Hodd",
        "role": "Managing Director",
        "email": "stephen.hodd@arcengineeringuk.co.uk",
        "phone": "07710 553483"
      }
    ]
  },
  {
    "id": 65,
    "name": "Archis Scaffolding Solutions",
    "disciplines": [
      "Scaffolding"
    ],
    "contacts": [
      {
        "name": "Matthew Warner",
        "role": "Managing Director",
        "email": "matthew.warner@archisscaffolding.co.uk"
      }
    ]
  },
  {
    "id": 66,
    "name": "Ardmore Group",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adam Carlos",
        "role": "Quantity Surveyor",
        "email": "acarlos@ardmoregroup.co.uk"
      },
      {
        "name": "Adrien Briere",
        "role": "Project Manager",
        "email": "adrien.briere@ardmoregroup.co.uk"
      },
      {
        "name": "Albie Langdon",
        "role": "Project Quantity Surveyor",
        "email": "alangdon@ardmoregroup.co.uk"
      },
      {
        "name": "Andrew Russell",
        "role": "Construction Manager",
        "email": "arussell@ardmoregroup.co.uk"
      },
      {
        "name": "Arvind Ronanki",
        "role": "Quantity Surveyor",
        "email": "aronanki@ardmoregroup.co.uk"
      },
      {
        "name": "Baykal Mustafa",
        "role": "Quantity Surveyor",
        "email": "bmustafa@ardmoregroup.co.uk"
      },
      {
        "name": "Brett Sonemann",
        "role": "Project Manager",
        "email": "bsonemann@ardmoregroup.co.uk"
      },
      {
        "name": "Burcak Turhan",
        "role": "Project Manager",
        "email": "burcak.turhan@ardmoregroup.co.uk"
      },
      {
        "name": "Ciaran Crosby",
        "role": "Project Manager",
        "email": "ciaran.crosby@ardmoregroup.co.uk"
      },
      {
        "name": "Conaill Doherty",
        "role": "Director",
        "email": "cdoherty@ardmoregroup.co.uk"
      },
      {
        "name": "Connal Gallagher",
        "role": "Project Manager",
        "email": "cgallagher@ardmoregroup.co.uk"
      },
      {
        "name": "Connor Higgins",
        "role": "Quantity Surveyor",
        "email": "chiggins@ardmoregroup.co.uk",
        "phone": "07920 788303"
      },
      {
        "name": "Danny Flint",
        "role": "Commercial Manager",
        "email": "dflint@ardmoregroup.co.uk"
      },
      {
        "name": "David Dhillion",
        "role": "Project Manager",
        "email": "david.dhillion@ardmoregroup.co.uk",
        "phone": "07769 363744"
      },
      {
        "name": "Eoin O'Shea",
        "role": "Assistant Project Manager",
        "email": "eoshea@ardmoregroup.co.uk"
      },
      {
        "name": "Gary Grimwood",
        "role": "Project Manager",
        "email": "ggrimwood@ardmoregroup.co.uk"
      },
      {
        "name": "Hamish Thomson",
        "role": "Director",
        "email": "hthomson@ardmoregroup.co.uk"
      },
      {
        "name": "Hayley O'Connell",
        "role": "Quantity Surveyor",
        "email": "hoconnell@ardmoregroup.co.uk",
        "phone": "7917245938.0"
      },
      {
        "name": "Igmom Becker",
        "role": "Project Manager",
        "email": "igmom.becker@ardmoregroup.co.uk"
      },
      {
        "name": "James Brettell",
        "role": "Quantity Surveyor",
        "email": "jbrettell@ardmoregroup.co.uk"
      },
      {
        "name": "James Byrne",
        "role": "Director",
        "email": "jbyrne@ardmoregroup.co.uk"
      },
      {
        "name": "James Chainey",
        "role": "Quantity Surveyor",
        "email": "james.chainey@ardmoregroup.co.uk",
        "phone": "07741 645221"
      },
      {
        "name": "Jodie Atkins",
        "role": "Contracts Manager",
        "email": "jatkins@ardmoregroup.co.uk"
      },
      {
        "name": "Joe Pitt",
        "role": "Project Manager",
        "email": "jpitt@ardmoregroup.co.uk"
      },
      {
        "name": "John Gilligan",
        "role": "Contracts Manager",
        "email": "john.gilligan@ardmoregroup.co.uk"
      },
      {
        "name": "Krzysztof Biskupski",
        "role": "Project Manager",
        "email": "kbiskupski@ardmoregroup.co.uk"
      },
      {
        "name": "Kuldip Sandhu",
        "role": "Quantity Surveyor",
        "email": "ksandhu@ardmoregroup.co.uk"
      },
      {
        "name": "Lee Greenwood",
        "role": "Project Director",
        "email": "lgreenwood@ardmoregroup.co.uk",
        "phone": "07741 646282"
      },
      {
        "name": "Linda Chirwa",
        "role": "Quantity Surveyor",
        "email": "lchirwa@ardmoregroup.co.uk"
      },
      {
        "name": "Mark Fleming",
        "role": "Project Manager",
        "email": "mfleming@ardmoregroup.co.uk"
      },
      {
        "name": "Martyn Horne",
        "role": "Pre Construction Manager",
        "email": "mhorne@ardmoregroup.co.uk"
      },
      {
        "name": "Michael Johnson",
        "role": "Project Manager",
        "email": "mjohnson@ardmoregroup.co.uk"
      },
      {
        "name": "Nataliya Hula",
        "role": "Quantity Surveyor",
        "email": "nataliya.hula@ardmoregroup.co.uk"
      },
      {
        "name": "Nick Sinden",
        "role": "Site Manager",
        "email": "nick.sinden@ardmoregroup.co.uk"
      },
      {
        "name": "Nicola Filia",
        "role": "Design Manager",
        "email": "nfilia@ardmoregroup.co.uk"
      },
      {
        "name": "Patrick O'Brien",
        "role": "Quantity Surveyor",
        "email": "pobrien@ardmoregroup.co.uk"
      },
      {
        "name": "Reuben Fon-Lowe",
        "role": "Quantity Surveyor",
        "email": "rfon-lowe@ardmoregroup.co.uk"
      },
      {
        "name": "Ronan O'Shea",
        "role": "Contract Manager",
        "email": "ronan.oshea@ardmoregroup.co.uk"
      },
      {
        "name": "Ryan O'Leary",
        "role": "Quantity Surveyor",
        "email": "roleary@ardmoregroup.co.uk",
        "phone": "07920 254941"
      },
      {
        "name": "Sean O'Shea",
        "role": "Project Manager",
        "email": "sean.oshea@ardmoregroup.co.uk"
      },
      {
        "name": "Sharon Doherty",
        "role": "Quantity Surveyor",
        "email": "sdocherty@ardmoregroup.co.uk"
      },
      {
        "name": "Tayna Farrell",
        "role": "Project Manager",
        "email": "tfarrell@ardmoregroup.co.uk"
      },
      {
        "name": "Tim Lee",
        "role": "Quantity Surveyor",
        "email": "tlee@ardmoregroup.co.uk"
      },
      {
        "name": "Tom Gosling",
        "role": "Quantity Surveyor",
        "email": "tgosling@ardmoregroup.co.uk"
      },
      {
        "name": "Trevor Upright",
        "role": "Project Manager",
        "email": "tupright@ardmoregroup.co.uk"
      },
      {
        "name": "Vasile Silaghi",
        "role": "Project Manager",
        "email": "vasile.silaghi@ardmoregroup.co.uk",
        "phone": "7741645042.0"
      },
      {
        "name": "Eoin O'Shea",
        "role": "Assistant Project Manager",
        "email": "eo'shea@ardmoregroup.co.uk"
      }
    ]
  },
  {
    "id": 67,
    "name": "Ashvale Civil Engineering",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Aaron Marks",
        "role": "Quantity Surveyor",
        "email": "aaron@ashvalecivilengineering.co.uk"
      },
      {
        "name": "Achilles Perimoviq",
        "role": "Site Manager",
        "email": "achilles@ashvalecivilengineering.co.uk"
      },
      {
        "name": "Brandon Bacchus",
        "role": "Quantity Surveyor",
        "email": "brandon@ashvalecivilengineering.co.uk"
      },
      {
        "name": "Brodie Hollis",
        "role": "Quantity Surveyor",
        "email": "brodie@ashvalecivilengineering.co.uk"
      },
      {
        "name": "Gary White",
        "role": "Quantity Surveyor",
        "email": "gary@ashvalecivilengineering.co.uk"
      },
      {
        "name": "Lee Caldwell",
        "role": "Buyer",
        "email": "lee@ashvalecivilengineering.co.uk"
      },
      {
        "name": "Michael Cunningham",
        "role": "Contracts Manager",
        "email": "michael@ashvalecivilengineering.co.uk",
        "phone": "7854025148.0"
      },
      {
        "name": "Mick Cunningham",
        "role": "Managing Director",
        "email": "mick@ashvalecivilengineering.co.uk"
      },
      {
        "name": "Ollie Pratt",
        "role": "Contracts Manager",
        "email": "ollie@ashvalecivilengineering.co.uk"
      },
      {
        "name": "Paul O'Connor",
        "role": "Contract Manager",
        "email": "paul@ashvalecivilengineering.co.uk"
      },
      {
        "name": "Seamus Cleary",
        "role": "Quantity Surveyor",
        "email": "seamus@ashvalecivilengineering.co.uk"
      },
      {
        "name": "Steve Cunningham",
        "role": "Managing Director",
        "email": "steve@ashvalecivilengineering.co.uk",
        "phone": "7931775171.0"
      },
      {
        "name": "Peirse Duggan",
        "role": "Contracts Manager",
        "email": "peirse.duggan@ashvalecivilengineering.co.uk"
      },
      {
        "name": "Tony Wiltshire",
        "role": "Buyer",
        "email": "tony.wiltshire@ashvalecivilengineering.co.uk"
      }
    ]
  },
  {
    "id": 68,
    "name": "Aspect Four Demolition Services",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Bob Prince",
        "role": "Site Manager",
        "email": "bob.prince@aspectfour.co.uk"
      },
      {
        "name": "Nick Harvey",
        "role": "Contracts Manager",
        "email": "nickharvey@aspectfour.co.uk",
        "phone": "07791 542542"
      }
    ]
  },
  {
    "id": 69,
    "name": "Aspen Build Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alex Darlington",
        "role": "Quantity Surveyor",
        "email": "alex.darlington@aspenbuildltd.co.uk"
      },
      {
        "name": "Chris Balls",
        "role": "Site Manager",
        "email": "chris.balls@aspenbuildltd.co.uk"
      },
      {
        "name": "Gary Rush",
        "role": "Contracts Manager",
        "email": "gary.rush@aspenbuildltd.co.uk"
      },
      {
        "name": "Gordon Betts",
        "role": "Contracts Manager",
        "email": "gordon.betts@aspenbuildltd.co.uk"
      },
      {
        "name": "Jake Debenham",
        "role": "Quantity Surveyor",
        "email": "jake.debenham@aspenbuildltd.co.uk"
      },
      {
        "name": "James Betts",
        "role": "Commercial Manager",
        "email": "james.betts@aspenbuildltd.co.uk"
      },
      {
        "name": "Richard Julings",
        "role": "Site Manager",
        "email": "richard.julings@aspenbuildltd.co.uk",
        "phone": "07384 896376"
      }
    ]
  },
  {
    "id": 70,
    "name": "Atkin Trade Specialists",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Jeff Harris",
        "role": "Project Manager",
        "email": "jeff.harris@atkingroup.co.uk",
        "phone": "07766 100019"
      },
      {
        "name": "Neil Parker",
        "role": "Contracts Manager",
        "email": "neil.parker@atkingroup.co.uk"
      },
      {
        "name": "Thomas Atkin",
        "role": "Contracts Director",
        "email": "thomas.atkin@atkingroup.co.uk"
      }
    ]
  },
  {
    "id": 71,
    "name": "Aurora Building Envelope Specialists",
    "disciplines": [
      "Facades & Cladding"
    ],
    "contacts": [
      {
        "name": "James Watson",
        "role": "Managing Director",
        "email": "j.watson@aurora-limited.co.uk"
      },
      {
        "name": "Pavan Prakash",
        "role": "Contracts Manager",
        "email": "p.prakash@aurora-limited.co.uk"
      }
    ]
  },
  {
    "id": 72,
    "name": "Austin Divall Fabrications Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alec Wallsgrove",
        "role": "Contracts Manager",
        "email": "alecwallsgrove@austin-divall.co.uk"
      },
      {
        "name": "Chris Hendry",
        "role": "Managing Director",
        "email": "chris.hendry@austin-divall.co.uk"
      },
      {
        "name": "Ian Dicker",
        "role": "Director",
        "email": "ian.dicker@austin-divall.co.uk",
        "phone": "07768 285263"
      },
      {
        "name": "Nick Waller",
        "role": "Contract Manager",
        "email": "nick.waller@austin-divall.co.uk"
      }
    ]
  },
  {
    "id": 73,
    "name": "AVV Solutions Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Daniel Cocervan",
        "role": "Contract Manager",
        "email": "daniel.cocervan@avvsolutions.com"
      },
      {
        "name": "John Suiu",
        "role": "Contracts Manager",
        "email": "john@avvsolutions.com",
        "phone": "07921 867533"
      },
      {
        "name": "Julie Wills",
        "email": "julie.wills@avvsolutions.com",
        "phone": "07768 958494"
      },
      {
        "name": "Kai Pelekanos",
        "role": "Quantity Surveyor",
        "email": "kai.pelekanos@avvsolutions.com"
      },
      {
        "name": "Lachlan McComb",
        "role": "Apprentice Quantity Surveyor",
        "email": "lachlan@avvsolutions.com"
      },
      {
        "name": "Luke Wills",
        "role": "Quantity Surveyor",
        "email": "luke@avvsolutions.com"
      },
      {
        "name": "Michael Tincknell",
        "role": "Senior Quantity Surveyor",
        "email": "michael@avvsolutions.com"
      },
      {
        "name": "Tony Wills",
        "role": "Contracts Manager",
        "email": "tony@avvsolutions.com"
      },
      {
        "name": "Daniel Cocervan",
        "role": "Contract Manager",
        "email": "daniel@avvsolutions.com"
      },
      {
        "name": "Julie Wills"
      },
      {
        "name": "Kai Pelekanos",
        "role": "Quantity Surveyor",
        "email": "kai@avvsolutions.com"
      }
    ]
  },
  {
    "id": 74,
    "name": "AYM Services",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Jack Saville",
        "role": "Business Development Manager",
        "email": "jack.saville@aymservices.co.uk",
        "phone": "07955 081060"
      },
      {
        "name": "James Pearce",
        "role": "Contract Manager",
        "email": "james.pearce@aymservices.co.uk",
        "phone": "07565 622034"
      },
      {
        "name": "John Dobson",
        "role": "Site Manager",
        "email": "john.dobson@aymservices.co.uk",
        "phone": "07763 211202"
      },
      {
        "name": "Lee Jones",
        "role": "Contracts Manager",
        "email": "lee.jones@aymservices.co.uk"
      },
      {
        "name": "Mark Meddeman",
        "role": "Branch Manager",
        "email": "mark.meddeman@aymservices.co.uk"
      },
      {
        "name": "Ryan Cuthbertson",
        "role": "Contracts Manager",
        "email": "ryan.cuthbertson@aymservices.co.uk"
      }
    ]
  },
  {
    "id": 75,
    "name": "B & K Hybrid Solutions Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Aaron McAleese",
        "role": "Project Manager",
        "email": "a.mcaleese@bkhybridsolutions.co.uk"
      },
      {
        "name": "Alan Wildsmith",
        "role": "Business Development",
        "email": "alan.wildsmith@bkhybridsolutions.co.uk"
      },
      {
        "name": "Alex Brock",
        "role": "Pre Construction Manager",
        "email": "a.brock@bkstructures.co.uk",
        "phone": "07387 532664"
      },
      {
        "name": "Andrew Hemstock",
        "role": "Contracts Manager",
        "email": "andrew.hemstock@bkhybridsolutions.co.uk"
      },
      {
        "name": "Fin Bets",
        "role": "Contracts Manager",
        "email": "fin.bets@bkhybridsolutions.co.uk"
      },
      {
        "name": "Glyn Hubbard",
        "role": "Drawing Office Manager",
        "email": "g.hubbard@bkhybridsolutions.co.uk"
      },
      {
        "name": "Jacob Moorcroft",
        "role": "Quantity Surveyor",
        "email": "j.moorcroft@bkhybridsolutions.co.uk"
      },
      {
        "name": "Macy Breedon",
        "role": "Quantity Surveyor",
        "email": "m.breedon@bkhybridsolutions.co.uk"
      },
      {
        "name": "Mark Gration",
        "role": "Commercial Director",
        "email": "m.gration@bkhybridsolutions.co.uk"
      },
      {
        "name": "Paul Hayes",
        "role": "Project Manager",
        "email": "p.hayes@bkhybridsolutions.co.uk"
      },
      {
        "name": "Ryan Roberts",
        "role": "Project Manager",
        "email": "r.roberts@bkhybridsolutions.co.uk"
      },
      {
        "name": "Sam Waterall",
        "role": "Project Manager",
        "email": "s.waterall@bkhybridsolutions.co.uk"
      },
      {
        "name": "Tyler Trotter",
        "role": "Project Coordinator",
        "email": "t.trotter@bkhybridsolutions.co.uk"
      }
    ]
  },
  {
    "id": 76,
    "name": "B & K Structures",
    "disciplines": [
      "RC Frame"
    ],
    "contacts": [
      {
        "name": "Alex Brock",
        "role": "Pre Construction Manager",
        "email": "a.brock@bkstructures.co.uk",
        "phone": "07387 532664"
      },
      {
        "name": "Andrew Henstock",
        "role": "Contracts Manager",
        "email": "andrew.henstock@bkstructures.co.uk"
      },
      {
        "name": "Mark Gration",
        "role": "Commercial Director",
        "email": "m.gration@bkstructures.co.uk"
      },
      {
        "name": "Paul Hayes",
        "role": "Project Manager",
        "email": "p.hayes@bkstructures.co.uk",
        "phone": "07788 124245"
      },
      {
        "name": "Perry Marriot-Lane",
        "role": "Project Manager",
        "email": "p.marriotlane@bkstructures.co.uk"
      },
      {
        "name": "Robert McGann",
        "role": "Contracts Manager",
        "email": "robert.mcgann@bkstructures.co.uk",
        "phone": "07901 748604"
      },
      {
        "name": "Sally White",
        "role": "Quantity Surveyor",
        "email": "sally.white@bkstructures.co.uk"
      },
      {
        "name": "Andy Butterworth",
        "role": "Managing Director",
        "email": "andy.butterworth@bkstructures.co.uk"
      },
      {
        "name": "Ben Duffy",
        "role": "Contracts Manager",
        "email": "ben.duffy@bkstructures.co.uk"
      },
      {
        "name": "Chris Wray",
        "role": "Commercial Director",
        "email": "chris.wray@bkstructures.co.uk"
      },
      {
        "name": "Daniel Green",
        "role": "Quantity Surveyor",
        "email": "daniel.green@bkstructures.co.uk"
      }
    ]
  },
  {
    "id": 77,
    "name": "B & K Structures Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Aaron McAleese",
        "role": "Project Co-ordinator",
        "email": "a.mcaleese@bkstructures.co.uk"
      },
      {
        "name": "Alex Brock",
        "role": "Pre Construction Manager",
        "email": "a.brock@bkstructures.co.uk",
        "phone": "07387 532664"
      },
      {
        "name": "Andrew Henstock",
        "role": "Contracts Manager",
        "email": "andrew.henstock@bkstructures.co.uk"
      },
      {
        "name": "Dean Linthwaite",
        "role": "Project Officer",
        "email": "d.linthwaite@bkstructures.co.uk"
      },
      {
        "name": "Ian Bromley",
        "role": "Project Coordinator",
        "email": "i.bromley@bkstructures.co.uk"
      },
      {
        "name": "James Brentnall",
        "role": "Project Co-ordinator",
        "email": "j.brentnall@bkstructures.co.uk"
      },
      {
        "name": "Mark Gration",
        "role": "Commercial Director",
        "email": "m.gration@bkstructures.co.uk"
      },
      {
        "name": "Paul Hayes",
        "role": "Project Manager",
        "email": "p.hayes@bkstructures.co.uk",
        "phone": "07788 124245"
      },
      {
        "name": "Perry Marriot-Lane",
        "role": "Project Manager",
        "email": "p.marriotlane@bkstructures.co.uk"
      },
      {
        "name": "Robert McGann",
        "role": "Contracts Manager",
        "email": "robert.mcgann@bkstructures.co.uk",
        "phone": "07901 748604"
      },
      {
        "name": "Ryan Roberts",
        "role": "Project Co-ordinator",
        "email": "ryan.roberts@bkstructures.co.uk"
      },
      {
        "name": "Sally White",
        "role": "Quantity Surveyor",
        "email": "sally.white@bkstructures.co.uk"
      },
      {
        "name": "Sam Waterall",
        "role": "Project Coordinator",
        "email": "s.waterall@bkstructures.co.uk"
      }
    ]
  },
  {
    "id": 78,
    "name": "B&G Contractors",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Algirdas Bucas",
        "role": "Director",
        "email": "algirdas.bucas@bgcontractors.co.uk",
        "phone": "07801 704150"
      },
      {
        "name": "Donatas Raugalas",
        "role": "Site Supervisor",
        "email": "donatas.raugalas@bgcontractors.co.uk",
        "phone": "07476 703803"
      },
      {
        "name": "Julius Cenkus",
        "role": "Site Manager",
        "email": "julius.cenkus@bgcontractors.co.uk",
        "phone": "07927 748549"
      }
    ]
  },
  {
    "id": 79,
    "name": "Baily Garner",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adam Pannell",
        "role": "Associate Partner",
        "email": "adam.pannell@bailygarner.co.uk"
      },
      {
        "name": "Allan Smith",
        "role": "Programme Manager",
        "email": "allan.smith@bailygarner.co.uk"
      },
      {
        "name": "Andy Tookey",
        "role": "Managing Partner",
        "email": "andy.tookey@bailygarner.co.uk"
      },
      {
        "name": "Ben Brewster",
        "role": "Project Manager",
        "email": "ben.brewster@bailygarner.co.uk"
      },
      {
        "name": "Ben Nixon",
        "role": "Associate Partner",
        "email": "ben.nixon@bailygarner.co.uk"
      },
      {
        "name": "Chloe Lewis",
        "role": "Partner",
        "email": "chloe.lewis@bailygarner.co.uk"
      },
      {
        "name": "Dan Bridgewater",
        "role": "Partner",
        "email": "dan.bridgewater@bailygarner.co.uk"
      },
      {
        "name": "Derek Ambrose",
        "role": "Project Manager",
        "email": "derek.ambrose@bailygarner.co.uk"
      },
      {
        "name": "Duncan Cameron",
        "role": "Quantity Surveyor",
        "email": "duncan.cameron@bailygarner.co.uk",
        "phone": "07957 860207"
      },
      {
        "name": "Graeme Sargood",
        "role": "Associate Partner",
        "email": "graeme.sargood@bailygarner.co.uk"
      },
      {
        "name": "Ian Maun",
        "role": "Partner",
        "email": "ian.maun@bailygarner.co.uk"
      },
      {
        "name": "Jeremy Vinson",
        "role": "Quantity Surveyor",
        "email": "jeremy.vinson@bailygarner.co.uk"
      },
      {
        "name": "Joanne York",
        "role": "Senior Project Manager",
        "email": "joanne.york@bailygarner.co.uk"
      },
      {
        "name": "Joe Jackson",
        "role": "Partner",
        "email": "joe.jackson@bailygarner.co.uk"
      },
      {
        "name": "Johann Cote",
        "role": "Project Manager",
        "email": "johann.cote@bailygarner.co.uk"
      },
      {
        "name": "John Milner",
        "role": "Partner",
        "email": "john.milner@bailygarner.co.uk"
      },
      {
        "name": "Laura O'Donovan",
        "role": "Associate Partner",
        "email": "laura.o'donovan@bailygarner.co.uk"
      },
      {
        "name": "Louise Green",
        "role": "Project Manager",
        "email": "louise.green@bailygarner.co.uk"
      },
      {
        "name": "Marie Carpenter",
        "role": "Associate Partner",
        "email": "marie.carpenter@bailygarner.co.uk"
      },
      {
        "name": "Matt Hornsby",
        "role": "Partner",
        "email": "matt.hornsby@bailygarner.co.uk"
      },
      {
        "name": "Neil Hope",
        "role": "Joint Managing Director",
        "email": "neil.hope@bailygarner.co.uk"
      },
      {
        "name": "Os Kamil",
        "role": "Associate Partner",
        "email": "os.kamil@bailygarner.co.uk"
      },
      {
        "name": "Richard Baker",
        "role": "Group Operations Director",
        "email": "richard.baker@bailygarner.co.uk"
      },
      {
        "name": "Robert Ireland",
        "role": "Partner",
        "email": "robert.ireland@bailygarner.co.uk"
      },
      {
        "name": "Stuart Wigley",
        "role": "Partner",
        "email": "stuart.wigley@bailygarner.co.uk"
      },
      {
        "name": "Will Gregory",
        "role": "Associate Partner",
        "email": "will.gregory@bailygarner.co.uk"
      }
    ]
  },
  {
    "id": 80,
    "name": "Bakers of Danbury",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Dean Harvey",
        "role": "Contracts Manager",
        "email": "dean.harvey@bakersofdanbury.co.uk",
        "phone": "07970 805428"
      },
      {
        "name": "Mark Holland",
        "role": "Director",
        "email": "mark.holland@bakersofdanbury.co.uk",
        "phone": "07970 805426"
      },
      {
        "name": "Mark Howlett",
        "role": "Surveying Manager",
        "email": "mark.howlett@bakersofdanbury.co.uk"
      },
      {
        "name": "Simon Springett",
        "role": "Site Manager",
        "email": "simon.springett@bakersofdanbury.co.uk"
      }
    ]
  },
  {
    "id": 81,
    "name": "Bakers of Danbury Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Dean Harvey",
        "role": "Contracts Manager",
        "email": "dean.harvey@bakersofdanbury.co.uk",
        "phone": "07970 805428"
      },
      {
        "name": "Mark Holland",
        "role": "Director",
        "email": "mark.holland@bakersofdanbury.co.uk",
        "phone": "07970 805426"
      },
      {
        "name": "Mark Howlett",
        "role": "Surveying Manager",
        "email": "mark.howlett@bakersofdanbury.co.uk"
      },
      {
        "name": "Simon Springett",
        "role": "Site Manager",
        "email": "simon.springett@bakersofdanbury.co.uk"
      }
    ]
  },
  {
    "id": 82,
    "name": "Balfour Beatty Group Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Ahmed Shareef",
        "role": "Site Engineer",
        "email": "ashareef@balfourbeatty.com"
      },
      {
        "name": "Aiden Goggins",
        "role": "Construction Director",
        "email": "aiden.goggins@balfourbeatty.com"
      },
      {
        "name": "Andrew Bonnie",
        "role": "Site Manager",
        "email": "andrew.bonnie@balfourbeatty.com"
      },
      {
        "name": "Antje Budge",
        "role": "antje.budge@balfourbeatty.com"
      },
      {
        "name": "Beatrix Klein",
        "role": "Project Controls Manager",
        "email": "beatrix.klein@balfourbeatty.com"
      },
      {
        "name": "Ben Stone",
        "role": "Managing Quantity Surveyor",
        "email": "bstone@balfourbeatty.com"
      },
      {
        "name": "Callum Thomson",
        "role": "Project Manager",
        "email": "callum.thomson@balfourbeatty.com",
        "phone": "7716090420.0"
      },
      {
        "name": "Charlie White",
        "role": "Assistant Quantity Surveyor",
        "email": "charlie.white@balfourbeatty.com"
      },
      {
        "name": "Charlotte White",
        "role": "Project Administrator",
        "email": "cwhite@balfourbeatty.com"
      },
      {
        "name": "Chris Hall",
        "role": "Portfolio Director",
        "email": "chris.hall@balfourbeatty.com"
      },
      {
        "name": "Chris Jukes",
        "role": "Works Manager",
        "email": "cjukes@balfourbeatty.com"
      },
      {
        "name": "Chris Kennedy",
        "role": "Engineering Manager",
        "email": "ckennedy@balfourbeatty.com"
      },
      {
        "name": "Cliff Francis",
        "role": "Project Manager",
        "email": "cliff.francis@balfourbeatty.com"
      },
      {
        "name": "Conor Taggart",
        "role": "Site Manager",
        "email": "conor.taggart@balfourbeatty.com"
      },
      {
        "name": "Dan Fawcett",
        "role": "Innovation Manager",
        "email": "dan.fawcett@balfourbeatty.com"
      },
      {
        "name": "Daniel Stocker",
        "role": "Environmental Assessor",
        "email": "dstocker@balfourbeatty.com",
        "phone": "7513710321.0"
      },
      {
        "name": "Dave Cranston",
        "role": "Project Manager",
        "email": "dave.cranston@balfourbeatty.com"
      },
      {
        "name": "David Isichei",
        "role": "Project Manager",
        "email": "david.isichei@balfourbeatty.com"
      },
      {
        "name": "David Robert",
        "role": "Senior Construction Manager",
        "email": "david.robert@balfourbeatty.com"
      },
      {
        "name": "Ed Jowett",
        "role": "Project Manager",
        "email": "ed.jowett@balfourbeatty.com"
      },
      {
        "name": "Eddie Lundon",
        "role": "Area Director",
        "email": "eddie.lundon@balfourbeatty.com"
      },
      {
        "name": "Eileen Longworth",
        "role": "Project Director",
        "email": "elongworth@balfourbeatty.com"
      },
      {
        "name": "Ellie Hossack",
        "role": "Senior Project Manager",
        "email": "ehossack@balfourbeatty.com"
      },
      {
        "name": "Farah Liaqat",
        "role": "Project Engineer",
        "email": "fliaqat@balfourbeatty.com",
        "phone": "7933516494.0"
      },
      {
        "name": "Harriet Buffery",
        "role": "Commercial Manager",
        "email": "harriet.buffery@balfourbeatty.com"
      },
      {
        "name": "Hector MacAulay",
        "role": "Managing Director",
        "email": "hector.macaulay@balfourbeatty.com"
      },
      {
        "name": "Howard Williams",
        "role": "Project Director",
        "email": "hwilliams@balfourbeatty.com"
      },
      {
        "name": "Ian Rowell",
        "role": "Project Manager",
        "email": "ian.rowell@balfourbeatty.com"
      },
      {
        "name": "Ion Appuhany",
        "role": "Managing Director",
        "email": "iappuhany@balfourbeatty.com"
      },
      {
        "name": "James Powell",
        "role": "Project Manager",
        "email": "james.powell@balfourbeatty.com"
      },
      {
        "name": "Jeffrey Kibue",
        "role": "Site Engineer",
        "email": "jkibue@balfourbeatty.com"
      },
      {
        "name": "Jenni Gooch",
        "role": "Quantity Surveyor",
        "email": "jenni.gooch@balfourbeatty.com"
      },
      {
        "name": "Jim Tregartha",
        "role": "Quantity Surveyor",
        "email": "jtregartha@balfourbeatty.com"
      },
      {
        "name": "Jon Cartwright",
        "role": "Project Manager",
        "email": "jon.cartwright@balfourbeatty.com"
      },
      {
        "name": "Jon Kiteley",
        "role": "Area Director",
        "email": "jkiteley@balfourbeatty.com"
      },
      {
        "name": "Jon Muff",
        "role": "Project Manager",
        "email": "jon.muff@balfourbeatty.com"
      },
      {
        "name": "Kay Slade",
        "role": "Managing Director",
        "email": "kay.slade@balfourbeatty.com"
      },
      {
        "name": "Kim Denning",
        "role": "Project Manager",
        "email": "kim.denning@balfourbeatty.com"
      },
      {
        "name": "Lauren Jones",
        "role": "Quantity Surveyor",
        "email": "ljones@balfourbeatty.com"
      },
      {
        "name": "Lee Meredith",
        "role": "Health & Safety Manager",
        "email": "lmeredith@balfourbeatty.com",
        "phone": "780174528.0"
      },
      {
        "name": "Leo Quinn",
        "role": "Chief Executive",
        "email": "leo.quinn@balfourbeatty.com"
      },
      {
        "name": "Lindsay McGibbon",
        "role": "Managing Director",
        "email": "lmcgibbon@balfourbeatty.com"
      },
      {
        "name": "Luke Bowyer",
        "role": "Commercial Manager",
        "email": "lbowyer@balfourbeatty.com"
      },
      {
        "name": "Malcolm Masters",
        "role": "Project Manager",
        "email": "mmasters@balfourbeatty.com"
      },
      {
        "name": "Manish Tailor",
        "role": "Supply Chain Manager",
        "email": "manish.tailor@bbsjv.com",
        "phone": "7738982498.0"
      },
      {
        "name": "Mark Barltrop",
        "role": "mark.barltrop@balfourbeatty.com"
      },
      {
        "name": "Mark Bullock",
        "role": "Director",
        "email": "mark.bullock@balfourbeatty.com"
      },
      {
        "name": "Mark Giltsoff",
        "role": "Project Director",
        "email": "mark.giltsoff@balfourbeatty.com"
      },
      {
        "name": "Matt Bird",
        "role": "Project Manager",
        "email": "matt.bird@balfourbeatty.com"
      },
      {
        "name": "Matt Kent",
        "role": "Project Manager",
        "email": "mkent@balfourbeatty.com"
      },
      {
        "name": "Matthew Law",
        "role": "Project Engineer",
        "email": "mlaw@balfourbeatty.com"
      },
      {
        "name": "Matthew Steele",
        "role": "Managing Director",
        "email": "matthew.steele@balfourbeatty.com"
      },
      {
        "name": "Murray Bush",
        "role": "Project Manager",
        "email": "murray.bush@balfourbeatty.com"
      },
      {
        "name": "Neil Patterson",
        "role": "Project Manager",
        "email": "neil.patterson@balfourbeatty.com"
      },
      {
        "name": "Nicholas James",
        "role": "Project Manager",
        "email": "njames@balfourbeatty.com"
      },
      {
        "name": "Nicola Clarkson",
        "role": "Project Support Officer",
        "email": "nicola.clarkson@balfourbeatty.com"
      },
      {
        "name": "Nicolas Gallone",
        "role": "nicolas.gallone@balfourbeatty.com"
      },
      {
        "name": "Paul Holgate",
        "role": "Quantity Surveyor",
        "email": "paul.holgate@balfourbeatty.com"
      },
      {
        "name": "Paul Rasmussen",
        "role": "Director of Operations",
        "email": "paul.rasmussen@bbvsjv.com"
      },
      {
        "name": "Paul Shaw",
        "role": "Project Director",
        "email": "pshaw@balfourbeatty.com",
        "phone": "7704685013.0"
      },
      {
        "name": "Peter Mumford",
        "role": "Managing Director",
        "email": "pmumford@balfourbeatty.com"
      },
      {
        "name": "Phil Morgan",
        "role": "Area Director",
        "email": "phil.morgan@balfourbeatty.com"
      },
      {
        "name": "Philip Mundy",
        "role": "Project Manager",
        "email": "philip.mundy@balfourbeatty.com"
      },
      {
        "name": "Pooven Padayachee",
        "role": "Project Manager",
        "email": "ppadayachee@balfourbeatty.com"
      },
      {
        "name": "Ragumayuran Sarvananthan",
        "role": "Engineer",
        "email": "rsarvananthan@balfourbeatty.com"
      },
      {
        "name": "Richard Djan",
        "role": "Project Manager",
        "email": "richard.djan@balfourbeatty.com"
      },
      {
        "name": "Richard Morgan",
        "role": "richard.morgan@balfourbeatty.com"
      },
      {
        "name": "Richard Pope",
        "role": "Project Manager",
        "email": "richard.pope@balfourbeatty.com",
        "phone": "7753776315.0"
      },
      {
        "name": "Rob Burgwin",
        "role": "Commercial Director",
        "email": "rburgwin@balfourbeatty.com"
      },
      {
        "name": "Robert Hassell",
        "role": "Major Projects Manager",
        "email": "rhassell@balfourbeatty.com"
      },
      {
        "name": "Sam Johnston",
        "role": "Project Manager",
        "email": "sjohnston@balfourbeatty.com",
        "phone": "7701231210.0"
      },
      {
        "name": "Scott Dalton",
        "role": "Project Manager",
        "email": "sdalton@balfourbeatty.com"
      },
      {
        "name": "Shane Tyler",
        "role": "Senior Engineer",
        "email": "shane.tyler@balfourbeatty.com"
      },
      {
        "name": "Stephen Clark",
        "role": "Quantity Surveyor",
        "email": "stephen.clark@balfourbeatty.com",
        "phone": "7729601114.0"
      },
      {
        "name": "Stephen Tarr",
        "role": "Managing Director",
        "email": "stephen.tarr@balfourbeatty.com"
      },
      {
        "name": "Stephen Taylor",
        "role": "Project Manager",
        "email": "stephen.taylor@balfourbeatty.com"
      },
      {
        "name": "Steve Barnett",
        "role": "Quantity Surveyor",
        "email": "steve.barnett@balfourbeatty.com"
      },
      {
        "name": "Steven Doolan",
        "role": "Public Liaison Officer",
        "email": "steven.doolan@balfourbeatty.com",
        "phone": "7708487463.0"
      },
      {
        "name": "Thomas Bell",
        "role": "Project Director",
        "email": "thomas.bell@balfourbeatty.com"
      },
      {
        "name": "Toby Fitch",
        "role": "Project Manager",
        "email": "toby.fitch@balfourbeatty.com"
      },
      {
        "name": "Tom Cooke",
        "role": "Operations Manager",
        "email": "tom.cooke@balfourbeatty.com"
      },
      {
        "name": "Tom Emanuel",
        "role": "Programme Manager",
        "email": "tom.emanuel@balfourbeatty.com"
      },
      {
        "name": "Tom Farley",
        "role": "Project Manager",
        "email": "tom.farley@balfourbeatty.com"
      },
      {
        "name": "Tony Wilson",
        "role": "Managing Director",
        "email": "twilson@balfourbeatty.com"
      },
      {
        "name": "Troy Andrews",
        "role": "Project Commercial Director",
        "email": "troy.andrews@balfourbeatty.com"
      },
      {
        "name": "William Naismith",
        "role": "Delivery Director",
        "email": "william.naismith@balfourbeatty.com"
      },
      {
        "name": "Xavier Stanford",
        "role": "xavier.stanford@balfourbeatty.com"
      }
    ]
  },
  {
    "id": 83,
    "name": "BAM Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alan Newland",
        "role": "Safety Improvement Manager",
        "email": "anewland@bam.co.uk",
        "phone": "07764 234806"
      },
      {
        "name": "Alexandra Airey",
        "role": "Sustainability Manager",
        "email": "aairey@bam.com",
        "phone": "07747 767067"
      },
      {
        "name": "Andy Lock",
        "role": "Construction Manager",
        "email": "alock@bam.com",
        "phone": "07771 387146"
      },
      {
        "name": "Austin Lowe",
        "role": "Quantity Surveyor",
        "email": "alowe@bam.com",
        "phone": "07785 696899"
      },
      {
        "name": "Colin Westpfel",
        "role": "Regional Design Manager",
        "email": "cwestpfel@bam.com"
      },
      {
        "name": "Daniel Bowles",
        "role": "Contracts Manager",
        "email": "dbowles@bam.co.uk"
      },
      {
        "name": "Daniel Brenchley",
        "role": "Construction Director",
        "email": "dbrenchley@bam.co.uk",
        "phone": "07920 136305"
      },
      {
        "name": "Danny Hine",
        "role": "Site Manager",
        "email": "dhine@bam.com",
        "phone": "07825 115778"
      },
      {
        "name": "Danny Wridgway",
        "role": "Commercial Manager",
        "email": "dwridgway@bam.com",
        "phone": "07795 010747"
      },
      {
        "name": "Dave Egan",
        "role": "Building Services Manager",
        "email": "degan@bam.com"
      },
      {
        "name": "David Packham",
        "role": "Construction Manager",
        "email": "dpackham@bam.co.uk"
      },
      {
        "name": "Ewen Hunter",
        "role": "Construction Director",
        "email": "ehunter@bam.co.uk"
      },
      {
        "name": "George Blade",
        "role": "Trainee Quantity Surveyor",
        "email": "georgeblade@bam.com"
      },
      {
        "name": "Harvey Preston",
        "role": "Quantity Surveyor",
        "email": "hpreston@bam.com",
        "phone": "07850 296524"
      },
      {
        "name": "Jack MacDonald",
        "role": "Quantity Surveyor",
        "email": "jmacdonald@bam.co.uk",
        "phone": "07553 055217"
      },
      {
        "name": "James Buckley",
        "role": "Managing Surveyor",
        "email": "jbuckley2@bam.co.uk"
      },
      {
        "name": "James Gray",
        "role": "Project Manager",
        "email": "jgray@bam.co.uk",
        "phone": "07920 726279"
      },
      {
        "name": "Jason Willis",
        "role": "Project Manager",
        "email": "jwillis@bam.co.uk",
        "phone": "07825 903 309"
      },
      {
        "name": "Kim Sides",
        "role": "Executive Director",
        "email": "ksides@bam.co.uk"
      },
      {
        "name": "Kitwe Pelekamoyo",
        "role": "Estimator",
        "email": "kpelekamoyo@bam.com"
      },
      {
        "name": "Lee Kilcoyne",
        "role": "Quantity Surveyor",
        "email": "lkilcoyne@bam.co.uk"
      },
      {
        "name": "Mark Lockwood",
        "role": "Health & Safety Consultant",
        "email": "mlockwood@bam.com"
      },
      {
        "name": "Martin O'Brien",
        "role": "Site Manager",
        "email": "mobrien@bam.co.uk",
        "phone": "07771 341333"
      },
      {
        "name": "Matt Brogan",
        "role": "Commercial Manager",
        "email": "mbrogan@bam.co.uk"
      },
      {
        "name": "Matt Tomlin",
        "role": "Quantity Surveyor",
        "email": "mtomlin@bam.com",
        "phone": "07920 273447"
      },
      {
        "name": "Peter Adjei",
        "role": "Site Manager",
        "email": "padjei@bam.com"
      },
      {
        "name": "Rob Biddle",
        "role": "Project Manager",
        "email": "rbiddle@bam.com"
      },
      {
        "name": "Rob Nash",
        "role": "Quantity Surveyor",
        "email": "rnash@bam.com",
        "phone": "07725 335929"
      },
      {
        "name": "Rowan Williams",
        "role": "Project Surveyor",
        "email": "rwilliams@bam.com"
      },
      {
        "name": "Sarah Rose",
        "role": "PA",
        "email": "srose@bam.com",
        "phone": "7824176281.0"
      },
      {
        "name": "Simon Barrett",
        "role": "Managing Surveyor",
        "email": "sbarrett@bam.com",
        "phone": "07917 474856"
      },
      {
        "name": "Steve Gaskell",
        "role": "Commercial Manager",
        "email": "sgaskell@bam.com"
      },
      {
        "name": "Steve McInnes",
        "role": "Health and Safety Manager",
        "email": "smcinnes@bam.co.uk",
        "phone": "07342 966495"
      },
      {
        "name": "Thomas Lovegrove",
        "role": "Site Manager",
        "email": "tlovegrove@bam.com"
      }
    ]
  },
  {
    "id": 84,
    "name": "Barconn Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Laurence Brooks",
        "role": "Commercial Manager",
        "email": "laurence.brooks@barconnlimited.co.uk"
      },
      {
        "name": "Lee Mansfield",
        "role": "Director",
        "email": "lee.mansfield@barconnlimited.co.uk"
      },
      {
        "name": "Steve Robinson",
        "role": "Senior Buyer",
        "email": "steve.robinson@barconnlimited.co.uk"
      },
      {
        "name": "Andy Burden",
        "role": "Quantity Surveyor",
        "email": "andy.burden@barconnlimited.co.uk"
      },
      {
        "name": "James Quinton",
        "role": "Site Manager",
        "email": "james.quinton@barconnlimited.co.uk"
      },
      {
        "name": "Michael Andrews",
        "role": "Quantity Surveyor",
        "email": "michael.andrews@barconnlimited.co.uk"
      },
      {
        "name": "Ronan Malfy",
        "role": "Contracts Manager",
        "email": "ronan.malfy@barconnlimited.co.uk"
      },
      {
        "name": "Andy Burden",
        "role": "Quantity Surveyor",
        "email": "enquiries@barconnlimited.co.uk"
      }
    ]
  },
  {
    "id": 85,
    "name": "Barnwood Construction",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adam Welland",
        "role": "Contracts Manager",
        "email": "adamwelland@barnwoodconstruction.com",
        "phone": "7966567617.0"
      },
      {
        "name": "Chris Markey",
        "role": "Contracts Manager",
        "email": "chrismarkey@barnwood.co.uk",
        "phone": "07966 567676"
      },
      {
        "name": "Corrie Homes",
        "role": "Buyer",
        "email": "corriehomes@barnwoodconstruction.co.uk"
      },
      {
        "name": "Dave Johnson",
        "role": "Site Manager",
        "email": "dave.johnson@barnwood.co.uk"
      },
      {
        "name": "Dave Piper",
        "role": "Managing Director",
        "email": "davepiper@barnwood.co.uk",
        "phone": "07966 567660"
      },
      {
        "name": "Dave Radburn",
        "role": "Site Manager",
        "email": "dave.radburn@barnwood.co.uk",
        "phone": "07966 567 581"
      },
      {
        "name": "David Chatfield",
        "role": "Senior Quantity Surveyor",
        "email": "david.chatfield@barnwood.co.uk"
      },
      {
        "name": "Deborah Price",
        "email": "deborahprice@barnwood.co.uk"
      },
      {
        "name": "Graeme Blake",
        "role": "Quantity Surveyor",
        "email": "graemeblake@barnwood.co.uk"
      },
      {
        "name": "Gus McKenna",
        "role": "Quantity Surveyor",
        "email": "gusmckenna@barnwood.co.uk"
      },
      {
        "name": "Guy Cooke",
        "role": "Project Surveyor",
        "email": "guycook@barnwood.co.uk"
      },
      {
        "name": "Jack Tyrer",
        "role": "Quantity Surveyor",
        "email": "jack.tyrer@barnwood.co.uk"
      },
      {
        "name": "Jeremy Mann",
        "role": "Contract Manager",
        "email": "jeremy.mann@barnwood.co.uk"
      },
      {
        "name": "Jim Hawkins",
        "role": "Quantity Surveyor",
        "email": "jim.hawkins@barnwood.co.uk"
      },
      {
        "name": "John Young",
        "role": "Quantity Surveyor",
        "email": "johnyoung@barnwoodconstruction.com"
      },
      {
        "name": "Josh Hodgetts",
        "role": "Quantity Surveyor",
        "email": "joshhodgetts@barnwood.co.uk"
      },
      {
        "name": "Joshua Hodgett",
        "role": "QS / Contracts Manager",
        "email": "joshua.hodgett@barnwood.co.uk"
      },
      {
        "name": "Laura Jewell",
        "email": "laura.jewell@barnwood.co.uk"
      },
      {
        "name": "Luke Limbrick",
        "role": "Site Manager",
        "email": "luke.limbrick@barnwood.co.uk",
        "phone": "07876 817982"
      },
      {
        "name": "Luke Preece",
        "role": "Site Manager",
        "email": "lukepreece@barnwood.co.uk",
        "phone": "07436 123196"
      },
      {
        "name": "Mark Dixon",
        "role": "Site Manager",
        "email": "mark.dixon@barnwood.co.uk"
      },
      {
        "name": "Martin Boyle",
        "role": "Contracts Manager",
        "email": "martin.boyle@barnwood.co.uk"
      },
      {
        "name": "Matt Carr",
        "role": "Contracts Manager",
        "email": "mattcarr@barnwood.co.uk",
        "phone": "07966 567618"
      },
      {
        "name": "Michael Arlott",
        "role": "Quantity Surveyor",
        "email": "mikearlott@barnwood.co.uk",
        "phone": "7966567629.0"
      },
      {
        "name": "Morgan Jack",
        "role": "Buyer",
        "email": "morganjack@barnwood.co.uk"
      },
      {
        "name": "Neil Crowther",
        "role": "Contracts Manager",
        "email": "neilcrowther@barnwood.co.uk"
      },
      {
        "name": "Nick Peacey",
        "role": "Quantity Surveyor",
        "email": "nick.peacey@barnwood.co.uk"
      },
      {
        "name": "Nick Preece",
        "role": "Quantity Surveyor",
        "email": "nick.preece@barnwood.co.uk"
      },
      {
        "name": "Paul Fowles",
        "role": "Contracts Manager",
        "email": "paul.fowles@barnwoodconstruction.com"
      },
      {
        "name": "Paul Mare",
        "role": "Quantity Surveyor",
        "email": "paulmare@barnwoodconstruction.com"
      },
      {
        "name": "Paul Tier",
        "role": "Quantity Surveyor",
        "email": "paultier@barnwood.co.uk"
      },
      {
        "name": "Paul Warren",
        "role": "Planner",
        "email": "paulwarren@barnwood.co.uk"
      },
      {
        "name": "Phocus Lwando",
        "role": "Quantity Surveyor",
        "email": "phocus.lwando@barnwood.co.uk"
      },
      {
        "name": "Quinton Kernot",
        "role": "Quantity Surveyor",
        "email": "quinton.kernot@barnwood.co.uk"
      },
      {
        "name": "Richard Allsop",
        "role": "Contracts Manager",
        "email": "richardallsop@barnwoodconstruction.com",
        "phone": "07767 274691"
      },
      {
        "name": "Richard Baker",
        "role": "Contracts Manager",
        "email": "richard.baker@barnwood.co.uk"
      },
      {
        "name": "Rob Clarke",
        "role": "Contract Manager",
        "email": "rob.clarke@barnwood.co.uk"
      },
      {
        "name": "Rob Frost",
        "role": "Contracts Manager",
        "email": "rob.frost@barnwood.co.uk"
      },
      {
        "name": "Scott Dee",
        "role": "Commercial Manager",
        "email": "scottdee@barnwood.co.uk"
      },
      {
        "name": "Steve Dixon",
        "role": "Site Manager",
        "email": "steve.dixon@barnwood.co.uk"
      },
      {
        "name": "Stuart Pearce",
        "role": "Contracts Manager",
        "email": "stuartpearce@barnwoodconstruction.com",
        "phone": "07966 567604"
      },
      {
        "name": "Stuart Shimmin",
        "role": "Contracts Manager",
        "email": "stuartshimmin@barnwoodconstruction.com"
      },
      {
        "name": "Vince Peraz",
        "role": "Contracts Manager",
        "email": "vinceperez@barnwood.co.uk"
      },
      {
        "name": "Will Steel",
        "role": "Quantity Surveyor",
        "email": "willsteel@barnwood.co.uk",
        "phone": "7823343855.0"
      }
    ]
  },
  {
    "id": 86,
    "name": "Barnwood Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adam Welland",
        "role": "Contracts Manager",
        "email": "adamwelland@barnwoodconstruction.com",
        "phone": "07966 567617"
      },
      {
        "name": "Chris Markey",
        "role": "Contracts Manager",
        "email": "chrismarkey@barnwood.co.uk",
        "phone": "07966 567676"
      },
      {
        "name": "Corrie Homes",
        "role": "Buyer",
        "email": "corriehomes@barnwoodconstruction.co.uk"
      },
      {
        "name": "Dave Piper",
        "role": "Managing Director",
        "email": "davepiper@barnwood.co.uk",
        "phone": "07966 567660"
      },
      {
        "name": "Deborah Price",
        "email": "deborahprice@barnwood.co.uk"
      },
      {
        "name": "Graeme Blake",
        "role": "Quantity Surveyor",
        "email": "graemeblake@barnwood.co.uk"
      },
      {
        "name": "Gus McKenna",
        "role": "Quantity Surveyor",
        "email": "gusmckenna@barnwood.co.uk"
      },
      {
        "name": "Guy Cooke",
        "role": "Project Surveyor",
        "email": "guycook@barnwood.co.uk"
      },
      {
        "name": "John Young",
        "role": "Quantity Surveyor",
        "email": "johnyoung@barnwoodconstruction.com"
      },
      {
        "name": "Josh Hodgetts",
        "role": "Quantity Surveyor",
        "email": "joshhodgetts@barnwood.co.uk"
      },
      {
        "name": "Luke Preece",
        "role": "Site Manager",
        "email": "lukepreece@barnwood.co.uk",
        "phone": "07436 123196"
      },
      {
        "name": "Matt Carr",
        "role": "Contracts Manager",
        "email": "mattcarr@barnwood.co.uk",
        "phone": "07966 567618"
      },
      {
        "name": "Michael Arlott",
        "role": "Quantity Surveyor",
        "email": "mikearlott@barnwood.co.uk",
        "phone": "07966 567629"
      },
      {
        "name": "Morgan Jack",
        "role": "Buyer",
        "email": "morganjack@barnwood.co.uk"
      },
      {
        "name": "Neil Crowther",
        "role": "Contracts Manager",
        "email": "neilcrowther@barnwood.co.uk"
      },
      {
        "name": "Paul Fowles",
        "role": "Contracts Manager",
        "email": "paul.fowles@barnwoodconstruction.com"
      },
      {
        "name": "Paul Mare",
        "role": "Quantity Surveyor",
        "email": "paulmare@barnwoodconstruction.com"
      },
      {
        "name": "Paul Tier",
        "role": "Quantity Surveyor",
        "email": "paultier@barnwood.co.uk"
      },
      {
        "name": "Paul Warren",
        "role": "Planner",
        "email": "paulwarren@barnwood.co.uk"
      },
      {
        "name": "Richard Allsop",
        "role": "Contracts Manager",
        "email": "richardallsop@barnwoodconstruction.com",
        "phone": "07767 274691"
      },
      {
        "name": "Scott Dee",
        "role": "Commercial Manager",
        "email": "scottdee@barnwood.co.uk"
      },
      {
        "name": "Stuart Pearce",
        "role": "Contracts Manager",
        "email": "stuartpearce@barnwoodconstruction.com",
        "phone": "07966 567604"
      },
      {
        "name": "Stuart Shimmin",
        "role": "Contracts Manager",
        "email": "stuartshimmin@barnwoodconstruction.com"
      },
      {
        "name": "Vince Perez",
        "role": "Contracts Manager",
        "email": "vinceperez@barnwood.co.uk"
      },
      {
        "name": "Will Steel",
        "role": "Quantity Surveyor",
        "email": "willsteel@barnwood.co.uk",
        "phone": "07823 343855"
      },
      {
        "name": "Dave Johnson",
        "role": "Site Manager",
        "email": "dave.johnson@barnwood.co.uk"
      },
      {
        "name": "Dave Radburn",
        "role": "Site Manager",
        "email": "dave.radburn@barnwood.co.uk",
        "phone": "07966 567581"
      },
      {
        "name": "David Chatfield",
        "role": "Senior Quantity Surveyor",
        "email": "david.chatfield@barnwood.co.uk"
      },
      {
        "name": "Jack Tyrer",
        "role": "Quantity Surveyor",
        "email": "jack.tyrer@barnwood.co.uk"
      },
      {
        "name": "Jeremy Mann",
        "role": "Contract Manager",
        "email": "jeremy.mann@barnwood.co.uk"
      },
      {
        "name": "Jim Hawkins",
        "role": "Quantity Surveyor",
        "email": "jim.hawkins@barnwood.co.uk"
      },
      {
        "name": "Joshua Hodgett",
        "role": "QS / Contracts Manager",
        "email": "joshua.hodgett@barnwood.co.uk"
      },
      {
        "name": "Laura Jewell",
        "email": "laura.jewell@barnwood.co.uk"
      },
      {
        "name": "Luke Limbrick",
        "role": "Site Manager",
        "email": "luke.limbrick@barnwood.co.uk",
        "phone": "07876 817982"
      },
      {
        "name": "Mark Dixon",
        "role": "Site Manager",
        "email": "mark.dixon@barnwood.co.uk"
      },
      {
        "name": "Martin Boyle",
        "role": "Contracts Manager",
        "email": "martin.boyle@barnwood.co.uk"
      },
      {
        "name": "Nick Peacey",
        "role": "Quantity Surveyor",
        "email": "nick.peacey@barnwood.co.uk"
      },
      {
        "name": "Nick Preece",
        "role": "Quantity Surveyor",
        "email": "nick.preece@barnwood.co.uk"
      },
      {
        "name": "Phocus Lwando",
        "role": "Quantity Surveyor",
        "email": "phocus.lwando@barnwood.co.uk"
      },
      {
        "name": "Quinton Kernot",
        "role": "Quantity Surveyor",
        "email": "quinton.kernot@barnwood.co.uk"
      },
      {
        "name": "Richard Baker",
        "role": "Contracts Manager",
        "email": "richard.baker@barnwood.co.uk"
      },
      {
        "name": "Rob Clarke",
        "role": "Contract Manager",
        "email": "rob.clarke@barnwood.co.uk"
      },
      {
        "name": "Rob Frost",
        "role": "Contracts Manager",
        "email": "rob.frost@barnwood.co.uk"
      },
      {
        "name": "Steve Dixon",
        "role": "Site Manager",
        "email": "steve.dixon@barnwood.co.uk"
      }
    ]
  },
  {
    "id": 87,
    "name": "Barrie Beard",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Carl Best",
        "role": "Contracts Manager",
        "email": "carl.best@barriebeard.co.uk"
      },
      {
        "name": "Darren Stokes",
        "role": "Contracts Manager",
        "email": "darrens@barriebeard.co.uk"
      },
      {
        "name": "Jordan Beard",
        "role": "Associate Director",
        "email": "jordan.beard@barriebeard.co.uk"
      },
      {
        "name": "Lyndon Beard",
        "role": "Contracts Manager",
        "email": "lyndon@barriebeard.co.uk"
      },
      {
        "name": "Mark Smith",
        "role": "Contracts Manager",
        "email": "mark@barriebeard.co.uk"
      },
      {
        "name": "Matt Chance",
        "role": "Associate Director",
        "email": "matt@barriebeard.co.uk"
      },
      {
        "name": "Russell Beard",
        "role": "Contracts Director",
        "email": "russell@barriebeard.co.uk"
      },
      {
        "name": "Warren Beard",
        "role": "Contracts Director",
        "email": "warren@barriebeard.co.uk"
      }
    ]
  },
  {
    "id": 88,
    "name": "Barwin Roofing & Construction Services",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Gary Clay",
        "role": "Managing Director",
        "email": "gary@barwin-rcs.co.uk"
      }
    ]
  },
  {
    "id": 89,
    "name": "Barwin Roofing & Construction Services Limited",
    "disciplines": [
      "Roofing"
    ],
    "contacts": [
      {
        "name": "Gary Clay",
        "role": "Managing Director",
        "email": "gary@barwin-rcs.co.uk"
      }
    ]
  },
  {
    "id": 90,
    "name": "Bath Demolition Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Gemma Calvey",
        "role": "Business Development",
        "email": "gemma.calvey@bath-demolition.co.uk"
      },
      {
        "name": "James Robinson",
        "role": "Contracts Manager",
        "email": "james.robinson@bath-demolition.co.uk"
      },
      {
        "name": "Matthew Hinds",
        "role": "Operations Director",
        "email": "matthew.hinds@bath-demolition.co.uk"
      },
      {
        "name": "Nick Shepherd",
        "role": "Contracts Manager",
        "email": "nick.shepherd@bath-demolition.co.uk"
      },
      {
        "name": "Paul Ealey",
        "role": "Managing Director",
        "email": "paul@bath-demolition.co.uk"
      },
      {
        "name": "Will Ealey",
        "role": "Contract Manager",
        "email": "will.ealey@bath-demolition.co.uk"
      },
      {
        "name": "Gemma Calvey",
        "role": "Business Development"
      },
      {
        "name": "Nick Shepherd",
        "role": "Contracts Manager"
      }
    ]
  },
  {
    "id": 91,
    "name": "Bauder Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andre Jarvis",
        "role": "Area Manager",
        "email": "a.jarvis@bauder.co.uk",
        "phone": "07525 224393"
      },
      {
        "name": "Andrew Leggett",
        "role": "Technical Manager",
        "email": "a.leggett@bauder.co.uk",
        "phone": "07881 245022"
      },
      {
        "name": "Catherine Scott",
        "role": "Area Manager",
        "email": "c.scott@bauder.co.uk",
        "phone": "07880 315835"
      },
      {
        "name": "Chris Langton",
        "role": "Technical Sales Manager",
        "email": "c.langton@bauder.co.uk",
        "phone": "07553 827556"
      },
      {
        "name": "Darren Steward",
        "role": "Technical Manager",
        "email": "d.steward@bauder.co.uk",
        "phone": "07912 379411"
      },
      {
        "name": "Hayden Davies",
        "role": "Technical Manager",
        "email": "h.davies@bauder.co.uk",
        "phone": "07834 340087"
      },
      {
        "name": "James Utting",
        "role": "Technical Consultant",
        "email": "j.utting@bauder.co.uk"
      },
      {
        "name": "Joe Davenport",
        "role": "Project Leader",
        "email": "j.davenport@bauder.co.uk",
        "phone": "07545 205555"
      },
      {
        "name": "John Wilkinson",
        "role": "Area Manager",
        "email": "j.wilkinson@bauder.co.uk",
        "phone": "07802 464685"
      },
      {
        "name": "Lee Townend",
        "role": "Area Manager",
        "email": "l.townend@bauder.co.uk",
        "phone": "07590 774142"
      },
      {
        "name": "Liam Rose",
        "role": "Project Manager",
        "email": "l.rose@bauder.co.uk",
        "phone": "07771 666200"
      },
      {
        "name": "Nigel Blacklock",
        "role": "Technical Director",
        "email": "nigel.blacklock@bauder.co.uk"
      },
      {
        "name": "Pete Rowlinson",
        "role": "Technical Manager",
        "email": "p.rowlinson@bauder.co.uk",
        "phone": "07545 642308"
      },
      {
        "name": "Sean Reeder",
        "role": "Architectural Assistant",
        "email": "s.reeder@bauder.co.uk"
      },
      {
        "name": "Simon King",
        "role": "Technical Manager",
        "email": "s.king@bauder.co.uk"
      },
      {
        "name": "Stuart Parrett",
        "role": "Director",
        "email": "stuart.parrett@bauder.co.uk"
      },
      {
        "name": "Tom White",
        "role": "Area Manager",
        "email": "t.white@bauder.co.uk",
        "phone": "07500 448630"
      }
    ]
  },
  {
    "id": 92,
    "name": "Bauer Technologies",
    "disciplines": [
      "Piling"
    ],
    "contacts": [
      {
        "name": "James Lowe",
        "role": "Quantity Surveyor",
        "email": "james.lowe@bauertech.co.uk",
        "phone": "07534 747010"
      },
      {
        "name": "John Theos",
        "role": "Managing Director",
        "email": "john.theos@bauertech.co.uk"
      },
      {
        "name": "Michael Jones",
        "role": "Managing Director",
        "email": "michael.jones@bauertech.co.uk"
      },
      {
        "name": "Oje Unuigbe",
        "role": "Project Manager",
        "email": "oje.unuigbe@bauertech.co.uk"
      },
      {
        "name": "Paul Doyle",
        "role": "Project Director",
        "email": "paul.doyle@bauertech.co.uk"
      },
      {
        "name": "Steven Owen",
        "role": "Project Manager",
        "email": "steven.owen@bauertech.co.uk"
      }
    ]
  },
  {
    "id": 93,
    "name": "Baxall Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alek Georgiou",
        "role": "Design Manager",
        "email": "ageorgiou@baxallconstruction.co.uk"
      },
      {
        "name": "Andrew Baldwin",
        "role": "Pre Construction Manager",
        "email": "abaldwin@baxallconstruction.co.uk"
      },
      {
        "name": "Christopher Tompsett",
        "role": "Contracts Director",
        "email": "ctompsett@baxallconstruction.co.uk",
        "phone": "7880552351.0"
      },
      {
        "name": "Doug Medhurst",
        "role": "Assistant Site Manager",
        "email": "dmedhurst@baxallconstruction.co.uk"
      },
      {
        "name": "Graham Tuthill",
        "role": "Contracts Manager",
        "email": "gtuthill@baxallconstruction.co.uk"
      },
      {
        "name": "James Beasley",
        "role": "Project Manager",
        "email": "jbeasley@baxallconstruction.co.uk"
      },
      {
        "name": "Lukman Olasunkanmi",
        "role": "Construction Site Manager",
        "email": "lolasunkanmi@baxallconstruction.co.uk"
      },
      {
        "name": "Marc McGovern",
        "role": "Site Manager",
        "email": "mmcgovern@baxallconstruction.co.uk"
      },
      {
        "name": "Matt Fothergill",
        "role": "Project Manager",
        "email": "mfothergill@baxallconstruction.co.uk",
        "phone": "7702561817.0"
      },
      {
        "name": "Max Lee",
        "role": "Site Manager",
        "email": "mlee@baxallconstruction.co.uk",
        "phone": "7749629102.0"
      },
      {
        "name": "N Pyemont",
        "role": "Unknown",
        "email": "npyemont@baxallconstruction.co.uk"
      },
      {
        "name": "Robert Solman",
        "role": "Quantity Surveyor",
        "email": "rsolman@baxallconstruction.co.uk"
      },
      {
        "name": "Sirat Hussain",
        "role": "Quantity Surveyor",
        "email": "shussain@baxallconstruction.co.uk"
      },
      {
        "name": "Steve Smith",
        "role": "Quantity Surveyor",
        "email": "sjsmith@baxallconstruction.co.uk"
      },
      {
        "name": "Stuart Heath",
        "role": "Buyer",
        "email": "sheath@baxallconstruction.co.uk"
      },
      {
        "name": "Troy Cooper",
        "role": "Contract Manager",
        "email": "tcooper@baxallconstruction.co.uk",
        "phone": "7834034787.0"
      },
      {
        "name": "Wendy Bass",
        "role": "Buyer",
        "email": "wbass@baxallconstruction.co.uk"
      },
      {
        "name": "Chris Keep",
        "role": "Site Manager",
        "email": "info@baxallconstruction.co.uk",
        "phone": "07595 528576"
      }
    ]
  },
  {
    "id": 94,
    "name": "BDL Dry Lining",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Chris Zindilis",
        "role": "Quantity Surveyor",
        "email": "chris.zindilis@bdl-group.co.uk"
      },
      {
        "name": "Lee Ryan",
        "role": "Quantity Surveyor",
        "email": "lee.ryan@bdl-group.co.uk"
      },
      {
        "name": "Matt Jauncey",
        "role": "Project Manager",
        "email": "matt.jauncey@bdl-group.co.uk",
        "phone": "07917 530094"
      },
      {
        "name": "Ravi Braich",
        "role": "Buyer",
        "email": "ravi.braich@bdl-group.co.uk"
      },
      {
        "name": "Simon Greaves",
        "role": "Site Manager",
        "email": "simon.greaves@bdl-group.co.uk",
        "phone": "07710 083495"
      },
      {
        "name": "Steve Bryant",
        "role": "Quantity Surveyor",
        "email": "steve.bryant@bdl-group.co.uk"
      }
    ]
  },
  {
    "id": 95,
    "name": "BDM Construction",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Dean Corrigan",
        "role": "Contracts Manager",
        "email": "dcorrigan@bdmconstruction.co.uk"
      },
      {
        "name": "Joe Bonner",
        "role": "Director",
        "email": "jbonner@bdmconstruction.co.uk"
      },
      {
        "name": "John Duffy",
        "role": "Commercial Manager",
        "email": "jduffy@bdmconstruction.co.uk",
        "phone": "07745 708961"
      },
      {
        "name": "Paul McDevitt",
        "role": "Director",
        "email": "pmcdevitt@bdmconstruction.co.uk",
        "phone": "07817 205770"
      },
      {
        "name": "Steve Woodford",
        "role": "Health & Safety Advisor",
        "email": "swoodford@bdmconstruction.co.uk",
        "phone": "07947 528780"
      },
      {
        "name": "Vasile Vizitiu",
        "role": "Site Manager",
        "email": "vvizitiu@bdmconstruction.co.uk"
      },
      {
        "name": "Paul McDevitt",
        "role": "Director",
        "email": "pmccdevitt@bdmconstruction.co.uk",
        "phone": "07817 205770"
      }
    ]
  },
  {
    "id": 96,
    "name": "BE Construction",
    "disciplines": [
      "Groundworks"
    ],
    "contacts": [
      {
        "name": "Arunan Sivalingam",
        "role": "Commercial Manager",
        "email": "arunan@beconstruction.co.uk",
        "phone": "07491 379579"
      },
      {
        "name": "Brisild Ismailanji",
        "role": "Director",
        "email": "brisild@beconstruction.co.uk",
        "phone": "07528 688521"
      },
      {
        "name": "Davrin Ismailanji",
        "role": "Contracts Manager",
        "email": "davrin@beconstruction.co.uk"
      },
      {
        "name": "Erion Ismailanji",
        "role": "Managing Director",
        "email": "erion@beconstruction.co.uk",
        "phone": "07747 286616"
      },
      {
        "name": "Lewis Evans",
        "role": "Contracts Manager",
        "email": "lewis@beconstruction.co.uk"
      }
    ]
  },
  {
    "id": 97,
    "name": "Beecroft Demolition",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Mark Jack",
        "role": "Managing Director",
        "email": "mark.jack@beecroftdemolition.co.uk",
        "phone": "07368 105769"
      }
    ]
  },
  {
    "id": 98,
    "name": "Beecroft Demolition Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Mark Jack",
        "role": "Managing Director",
        "email": "mark.jack@beecroftdemolition.co.uk",
        "phone": "07368 105769"
      }
    ]
  },
  {
    "id": 99,
    "name": "Bellmoor Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Barry Lynch",
        "role": "Contracts Manager",
        "email": "barry.lynch@bellmoor.co.uk"
      }
    ]
  },
  {
    "id": 100,
    "name": "Bellwood Interiors",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Ben Lewis",
        "role": "Quantity Surveyor",
        "email": "ben.lewis@bellwoodinteriors.com"
      },
      {
        "name": "Colin Bourne",
        "role": "Project Manager",
        "email": "colin.bourne@bellwoodinteriors.com"
      },
      {
        "name": "George Foster",
        "role": "Buyer",
        "email": "george.foster@bellwoodinteriors.com"
      },
      {
        "name": "Hayden Topps",
        "role": "Senior Site Manager",
        "email": "hayden.topps@bellwoodinteriors.com"
      },
      {
        "name": "John Woods",
        "role": "Contracts Director",
        "email": "john.woods@bellwoodinteriors.com"
      },
      {
        "name": "Mark Bellchambers",
        "role": "Director",
        "email": "mark.bellchambers@bellwoodinteriors.com"
      },
      {
        "name": "Mark Nixon",
        "role": "Director",
        "email": "mark.nixon@bellwoodinteriors.com"
      },
      {
        "name": "Oliver Phillips",
        "role": "Contracts Manager",
        "email": "oliver.phillips@bellwoodinteriors.com"
      },
      {
        "name": "Paul Anstey",
        "role": "Project Manager",
        "email": "paul.anstey@bellwoodinteriors.com"
      },
      {
        "name": "Richard Woolston",
        "role": "Commercial Manager",
        "email": "richard.woolston@bellwoodinteriors.com"
      }
    ]
  },
  {
    "id": 101,
    "name": "Benchmark Scaffolding",
    "disciplines": [
      "Scaffolding"
    ],
    "contacts": [
      {
        "name": "Barry Lane",
        "role": "Contracts Manager",
        "email": "b.lane@benchmarkscaffolding.com"
      },
      {
        "name": "Darren Redgrave",
        "role": "Site Manager",
        "email": "d.redgrave@benchmarkscaffolding.com",
        "phone": "07919 478491"
      },
      {
        "name": "Eamonn Golledge",
        "role": "Contract Manager",
        "email": "e.golledge@benchmarkscaffolding.com"
      },
      {
        "name": "Staurt Didd",
        "role": "Contracts Manager",
        "email": "staurt.didd@benchmarkscaffolding.com"
      }
    ]
  },
  {
    "id": 102,
    "name": "Benx Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Abul Khair",
        "role": "Regional Sales Manager",
        "email": "abul.khair@benx.co.uk"
      },
      {
        "name": "Ian Quinton",
        "role": "Director",
        "email": "ian.quinton@benx.co.uk"
      },
      {
        "name": "Jake Winwood",
        "role": "Regional Sales Manager",
        "email": "jake.winwood@benx.co.uk"
      },
      {
        "name": "Kevin Ruane",
        "role": "CEO",
        "email": "kevin.ruane@benx.co.uk"
      }
    ]
  },
  {
    "id": 103,
    "name": "BibbEgan Demolition and Strip Out",
    "disciplines": [
      "Demolition"
    ],
    "contacts": [
      {
        "name": "Dave Hodgkins",
        "role": "Project Manager",
        "email": "dave.hodgkins@towerdemolition.co.uk",
        "phone": "07973 373159"
      },
      {
        "name": "Ian Turner",
        "role": "Managing Director",
        "email": "ian.turner@bibbegan.co.uk"
      },
      {
        "name": "James Bibbey",
        "role": "Director",
        "email": "james.bibbey@towerdemolition.co.uk"
      },
      {
        "name": "John Egan",
        "role": "Commercial Director",
        "email": "john.egan@towerdemolition.co.uk"
      },
      {
        "name": "Rob Unwin",
        "role": "Contracts Manager",
        "email": "rob.unwin@towerdemolition.co.uk"
      }
    ]
  },
  {
    "id": 104,
    "name": "Blackheath Demolition & Trading",
    "disciplines": [
      "Demolition"
    ],
    "contacts": [
      {
        "name": "Terry Apps",
        "role": "Director",
        "email": "blackheathdemolition@gmail.com"
      },
      {
        "name": "Blaze Neon Limited"
      }
    ]
  },
  {
    "id": 105,
    "name": "Blakedown",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andy Harris",
        "role": "Contracts Manager",
        "email": "andy.harris@blakedownse.co.uk"
      },
      {
        "name": "Chris Knight",
        "role": "Projects Manager",
        "email": "chris.knight@blakedown.co.uk",
        "phone": "07810 223923"
      },
      {
        "name": "Chris Wellbelove",
        "role": "Director",
        "email": "chris.wellbelove@blakedownse.co.uk"
      },
      {
        "name": "David Leed",
        "role": "Director",
        "email": "david.leed@blakedownse.co.uk"
      },
      {
        "name": "Jack Skinner",
        "role": "Senior Contracts Manager",
        "email": "jack.skinner@blakedown.co.uk",
        "phone": "07715 750353"
      },
      {
        "name": "Malcolm Buckingham",
        "role": "Quantity Surveyor",
        "email": "malcolm.buckingham@blakedownse.co.uk",
        "phone": "07956 553383"
      },
      {
        "name": "Martin Wiles",
        "role": "Senior Contracts Manager",
        "email": "martin.wiles@blakedownse.co.uk"
      },
      {
        "name": "Nathaniel Leney",
        "role": "Business Development",
        "email": "nathaniel.leney@sportandplay.co.uk"
      },
      {
        "name": "Nick Hunter",
        "role": "Senior Contracts Manager",
        "email": "nick.hunter@blakedownse.co.uk"
      },
      {
        "name": "Paul Hook",
        "role": "Director",
        "email": "paul.hook@blakedownse.co.uk",
        "phone": "07860 358554"
      },
      {
        "name": "Stephen Buckingham",
        "role": "Managing Director",
        "email": "steve.buckingham@blakedownse.co.uk"
      }
    ]
  },
  {
    "id": 106,
    "name": "Blakedown Landscapes Limited",
    "disciplines": [
      "Landscaping"
    ],
    "contacts": [
      {
        "name": "Adam Turner",
        "role": "Contracts Manager",
        "email": "adam.turner@blakedown.co.uk"
      },
      {
        "name": "Andrew Blakemore",
        "role": "Managing Director",
        "email": "andrew.blakemore@blakedown.co.uk"
      },
      {
        "name": "Chris Davies",
        "role": "Project Manager",
        "email": "chris.davies@blakedown.co.uk"
      },
      {
        "name": "Daniel Jones",
        "role": "Quantity Surveyor",
        "email": "daniel.jones@blakedown.co.uk"
      },
      {
        "name": "Mark Evans",
        "role": "Commercial Manager",
        "email": "mark.evans@blakedown.co.uk"
      }
    ]
  },
  {
    "id": 107,
    "name": "Blaze Neon Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Amy Conetta",
        "email": "amyc@blazesigns.co.uk"
      },
      {
        "name": "Ella Wood",
        "email": "ella.wood@blazesigns.co.uk"
      },
      {
        "name": "Jessica Dennis",
        "email": "jessicad@blazesigns.co.uk"
      },
      {
        "name": "Jon Daniels",
        "role": "Business Development Manager",
        "email": "jond@blazesigns.co.uk"
      }
    ]
  },
  {
    "id": 108,
    "name": "Bliss Brickwork & Scaffolding",
    "disciplines": [
      "Brickwork",
      "Scaffolding"
    ],
    "contacts": [
      {
        "name": "Ben Prickett",
        "role": "Director",
        "email": "ben@blissbrickwork.co.uk"
      },
      {
        "name": "Darren Ring",
        "role": "Contract Manager",
        "email": "darren@blissbrickwork.co.uk"
      },
      {
        "name": "Keith Thompson",
        "role": "Contracts Manager",
        "email": "keith.thompson@blissbrickwork.co.uk"
      },
      {
        "name": "Keri Burton",
        "role": "Director",
        "email": "keri@blissbrickwork.co.uk"
      },
      {
        "name": "Richard Male",
        "role": "Quantity Surveyor",
        "email": "richard@blissbrickwork.co.uk"
      }
    ]
  },
  {
    "id": 109,
    "name": "Blue Sky Building",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Chantel Revelard",
        "role": "Project Manager",
        "email": "chantel.revelard@blueskybuilding.com"
      },
      {
        "name": "Chris Putney",
        "role": "Project Manager",
        "email": "chris.putney@blueskybuilding.com",
        "phone": "07414 778739"
      },
      {
        "name": "David Singer",
        "role": "Project Director",
        "email": "davidsinger@blueskybuilding.com",
        "phone": "07841 392361"
      },
      {
        "name": "Gavin Bertie",
        "role": "Quantity Surveyor",
        "email": "gavinbertie@blueskybuilding.com",
        "phone": "07841 782 660"
      },
      {
        "name": "Graeme Tait",
        "role": "Project Manager",
        "email": "graemetait@blueskybuilding.com",
        "phone": "07770 914 572"
      },
      {
        "name": "Jason Daniel",
        "role": "Finance Manager",
        "email": "jason.daniel@blueskybuilding.com"
      },
      {
        "name": "John Jones",
        "role": "Construction Manager",
        "email": "johnjones@blueskybuilding.com",
        "phone": "07590 038520"
      },
      {
        "name": "John Mendelsohn",
        "role": "Project Manager",
        "email": "john.mendelsohn@blueskybuilding.com",
        "phone": "07841 011239"
      },
      {
        "name": "Julian Daniel",
        "role": "Director",
        "email": "juliandaniel@blueskybuilding.com"
      },
      {
        "name": "Nicholas Daniel",
        "role": "Project Manager",
        "email": "nicholasdaniel@blueskybuilding.com"
      },
      {
        "name": "Samantha Larden",
        "role": "Project Co-ordinator",
        "email": "samantha.larden@blueskybuilding.com"
      },
      {
        "name": "Tim Cole",
        "role": "Pre Construction Manager",
        "email": "timcole@blueskybuilding.com",
        "phone": "07801 593247"
      }
    ]
  },
  {
    "id": 110,
    "name": "Boom Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Jack Hughes",
        "role": "Senior Surveyor",
        "email": "jhughes@boomconstruction.co.uk"
      },
      {
        "name": "Joe Sharp",
        "role": "Operations Director",
        "email": "jsharp@boomconstruction.co.uk"
      },
      {
        "name": "Mark Quinn",
        "role": "Development Director",
        "email": "mquinn@boomconstruction.co.uk"
      },
      {
        "name": "Ruairi O'Neill",
        "role": "Project Manager",
        "email": "ro'neill@boomconstruction.co.uk"
      },
      {
        "name": "Ryann Peterson",
        "role": "Pre Construction Director",
        "email": "rpeterson@boomconstruction.co.uk"
      }
    ]
  },
  {
    "id": 111,
    "name": "Borough Engineering Services",
    "disciplines": [
      "RC Frame"
    ],
    "contacts": [
      {
        "name": "Luke Donegan",
        "role": "Project Manager",
        "email": "l.donegan@borough-es.co.uk",
        "phone": "07758 961054"
      },
      {
        "name": "Mike Broad",
        "role": "Managing Director",
        "email": "m.broad@boroughengineeringservices.co.uk",
        "phone": "07928 935258"
      },
      {
        "name": "Sean Curtin",
        "role": "Project Manager",
        "email": "sean.curtin@borough-es.co.uk"
      },
      {
        "name": "Commercial Team",
        "email": "info@boroughengineering.co.uk"
      }
    ]
  },
  {
    "id": 112,
    "name": "Boundary Fencing",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Chris Moriarty",
        "role": "Managing Director",
        "email": "chris@boundary-fencing.co.uk"
      },
      {
        "name": "Tom O'Connell",
        "role": "Operations Director",
        "email": "tom@boundary-fencing.co.uk"
      },
      {
        "name": "Tom Powell",
        "role": "Contracts Manager",
        "email": "tom.powell@boundary-fencing.co.uk"
      }
    ]
  },
  {
    "id": 113,
    "name": "Bourne Group",
    "disciplines": [
      "Civil Engineering"
    ],
    "contacts": [
      {
        "name": "Clive Hardy",
        "role": "Quantity Surveyor",
        "email": "clive.hardy@bournegroup.eu"
      },
      {
        "name": "Craig Galway",
        "role": "Director",
        "email": "craig.galway@bournegroup.eu"
      },
      {
        "name": "Curzon Graham",
        "role": "Director",
        "email": "curzon.graham@bournegroup.eu"
      },
      {
        "name": "James Bichard",
        "role": "Technical Director",
        "email": "james.bichard@bournegroup.eu"
      },
      {
        "name": "James Sturgeon",
        "role": "james.sturgeon@bournegroup.ltd"
      },
      {
        "name": "John Ganderton",
        "role": "Commercial Manager",
        "email": "john.ganderton@bournegroup.eu"
      },
      {
        "name": "Sam Hargreaves",
        "role": "Site Manager",
        "email": "sam.hargreaves@bournegroup.eu"
      },
      {
        "name": "Alan Green",
        "role": "Contracts Director",
        "email": "alan.green@bournegroup.com"
      },
      {
        "name": "Chris Bourne",
        "role": "Managing Director",
        "email": "chris.bourne@bournegroup.com"
      },
      {
        "name": "Darren James",
        "role": "Project Director",
        "email": "darren.james@bournegroup.com"
      },
      {
        "name": "James Morgan",
        "role": "Commercial Manager",
        "email": "james.morgan@bournegroup.com"
      }
    ]
  },
  {
    "id": 114,
    "name": "Bourne Group Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Clive Hardy",
        "role": "Quantity Surveyor",
        "email": "clive.hardy@bournegroup.eu"
      },
      {
        "name": "Craig Galway",
        "role": "Director",
        "email": "craig.galway@bournegroup.eu"
      },
      {
        "name": "Curzon Graham",
        "role": "Director",
        "email": "curzon.graham@bournegroup.eu"
      },
      {
        "name": "James Bichard",
        "role": "Technical Director",
        "email": "james.bichard@bournegroup.eu"
      },
      {
        "name": "James Sturgeon",
        "email": "james.sturgeon@bournegroup.ltd"
      },
      {
        "name": "John Ganderton",
        "role": "Commercial Manager",
        "email": "john.ganderton@bournegroup.eu"
      },
      {
        "name": "Sam Hargreaves",
        "role": "Site Manager",
        "email": "sam.hargreaves@bournegroup.eu"
      }
    ]
  },
  {
    "id": 115,
    "name": "Bouygues UK Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Amine Azidine",
        "role": "Projects Director",
        "email": "aazidine@bouygues-uk.com"
      },
      {
        "name": "Andrew Halls",
        "role": "Senior Surveyor",
        "email": "andrew.halls@bouygues-uk.com",
        "phone": "7908436967.0"
      },
      {
        "name": "Anthony Boden",
        "role": "Preconstruction Director",
        "email": "aboden@bouygues-uk.com",
        "phone": "7530582383.0"
      },
      {
        "name": "Ben Rouge",
        "role": "Building Projects Manager",
        "email": "brouge@bouygues-uk.com"
      },
      {
        "name": "Bertrand Burtschell",
        "role": "Managing Director",
        "email": "bburtschell@bouygues-uk.com"
      },
      {
        "name": "Brian Wright",
        "role": "Commercial Manager",
        "email": "brian.wright@bouygues-uk.com"
      },
      {
        "name": "Clive Jones",
        "role": "Unknown",
        "email": "cjones@bouygues-uk.com"
      },
      {
        "name": "Hemendra Kothari",
        "role": "Design Manager",
        "email": "hkothari@bouygues-uk.com"
      },
      {
        "name": "Janet Rist",
        "role": "Development Assistant",
        "email": "janet.rist@linkcity.com"
      },
      {
        "name": "Julien Martina",
        "role": "Project Director",
        "email": "jmartina@bouygues-uk.com",
        "phone": "7534008650.0"
      },
      {
        "name": "Kat Morris",
        "role": "Operations Manager",
        "email": "kmorris@bouygues-uk.com"
      },
      {
        "name": "Keith Burke",
        "role": "M&E Utilities Manager",
        "email": "kburke@bouygues-uk.com"
      },
      {
        "name": "Manon Smits",
        "role": "Development Manager",
        "email": "m.smits@bouygues-uk.com"
      },
      {
        "name": "Mark Cesenek",
        "role": "Managing Director",
        "email": "mcesenek@bouygues-uk.com"
      },
      {
        "name": "Mathias Talpaert",
        "role": "Operations Director",
        "email": "mtalpaert@bouygues-uk.com",
        "phone": "7961733149.0"
      },
      {
        "name": "Mathieu Mondy",
        "role": "Methods Manager",
        "email": "m.mondy@bouygues-uk.com"
      },
      {
        "name": "Minesh Chudasama",
        "role": "Structural Engineer",
        "email": "m.chudasama@bouygues-uk.com"
      },
      {
        "name": "Nick Argyle",
        "role": "Commercial Lead",
        "email": "nargyle@bouygues-uk.com"
      },
      {
        "name": "Oliver Campbell",
        "role": "Managing Director",
        "email": "ocampbell@bouygues-uk.com"
      },
      {
        "name": "Peter Doherty",
        "role": "Commercial Manager",
        "email": "peter.doherty@bouygues-uk.com",
        "phone": "7770582958.0"
      },
      {
        "name": "Philippe Bernard",
        "role": "CEO",
        "email": "pbernard@bouygues-uk.com"
      },
      {
        "name": "Phillippa Prongue",
        "role": "Managing Director",
        "email": "phillippa.prongue@bouygues-uk.com"
      },
      {
        "name": "Simon Hazel",
        "role": "Environmental Manager",
        "email": "shazel@bouygues-uk.com",
        "phone": "7880466390.0"
      },
      {
        "name": "Simon Saul",
        "role": "Design Manager",
        "email": "ssaul@bouygues-uk.com"
      }
    ]
  },
  {
    "id": 116,
    "name": "Bowmer & Kirkland Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adam Blackmore",
        "role": "Site Manager",
        "email": "a.blackmore@bandk.co.uk",
        "phone": "7880394411.0"
      },
      {
        "name": "Adam Dibbo",
        "role": "Quantity Surveyor",
        "email": "a.dibbo@bandk.co.uk",
        "phone": "07464 521961"
      },
      {
        "name": "Adam Finlay",
        "role": "Quantity Surveyor",
        "email": "a.finlay@bandk.co.uk",
        "phone": "07786 747123"
      },
      {
        "name": "Alan O'Brian",
        "role": "Site Manager",
        "email": "a.obrian@bandk.co.uk"
      },
      {
        "name": "Alex Malley",
        "role": "Senior Site Manager",
        "email": "a.malley@bandk.co.uk",
        "phone": "07909 964909"
      },
      {
        "name": "Alex Reynolds",
        "role": "Regional Manager",
        "email": "alex.reynolds@bandk.co.uk",
        "phone": "7825061266.0"
      },
      {
        "name": "Alex Symington",
        "role": "Quantity Surveyor",
        "email": "a.symington@bandk.co.uk",
        "phone": "07867 181759"
      },
      {
        "name": "Alex Wilkinson",
        "role": "Quantity Surveyor",
        "email": "a.wilkinson@bandk.co.uk",
        "phone": "7353105596.0"
      },
      {
        "name": "Alice Maclennan",
        "role": "Quantity Surveyor",
        "email": "a.maclennan@bandk.co.uk",
        "phone": "07586 518445"
      },
      {
        "name": "Alison Shearing",
        "role": "Quantity Surveyor",
        "email": "a.shearing@bandk.co.uk",
        "phone": "07920 493632"
      },
      {
        "name": "Alistair Nicholls",
        "role": "Project Manager",
        "email": "a.nicholls@bandk.co.uk",
        "phone": "07880 473554"
      },
      {
        "name": "Andrew Jeffrey",
        "role": "Quantity Surveyor",
        "email": "a.jeffery@bandk.co.uk",
        "phone": "7584618297.0"
      },
      {
        "name": "Andy Clayton",
        "role": "Senior Site Manager",
        "email": "a.clayton@bandk.co.uk",
        "phone": "07768 905926"
      },
      {
        "name": "Andy Lomas",
        "role": "Contracts Manager",
        "email": "a.lomas@bandk.co.uk",
        "phone": "7825122929.0"
      },
      {
        "name": "Ben Crookes",
        "role": "Design Manager",
        "email": "b.crookes@bandk.co.uk",
        "phone": "07919 618264"
      },
      {
        "name": "Ben Fleming",
        "role": "Project Manager",
        "email": "b.fleming@bandk.co.uk"
      },
      {
        "name": "Ben Gill",
        "role": "Quantity Surveyor",
        "email": "b.gill@bandk.co.uk",
        "phone": "07500 765653"
      },
      {
        "name": "Ben Howard",
        "role": "Site Manager",
        "email": "b.howard@bandk.co.uk",
        "phone": "07766 498308"
      },
      {
        "name": "Ben Tomlinson",
        "role": "Managing Quantity Surveyor",
        "email": "b.tomlinson@bandk.co.uk",
        "phone": "07826 512847"
      },
      {
        "name": "Ben Williams",
        "role": "Engineer",
        "email": "b.williams@bandk.co.uk",
        "phone": "07824 692614"
      },
      {
        "name": "Brett Gibbons",
        "role": "Senior Quantity Surveyor",
        "email": "b.gibbons@bandk.co.uk",
        "phone": "07585 127388"
      },
      {
        "name": "Brian Bideau",
        "role": "Site Manager",
        "email": "b.bideau@bandk.co.uk",
        "phone": "07721 115227"
      },
      {
        "name": "Carl Henderson",
        "role": "Project Manager",
        "email": "c.henderson@bandk.co.uk"
      },
      {
        "name": "Carl Jackson",
        "role": "Senior Quantity Surveyor",
        "email": "c.jackson@bandk.co.uk"
      },
      {
        "name": "Carl Ward",
        "role": "Construction Director",
        "email": "c.ward@bandk.co.uk"
      },
      {
        "name": "Carl Wooley",
        "role": "Site Manager",
        "email": "c.wooley@bandk.co.uk",
        "phone": "07920 714099"
      },
      {
        "name": "Carlos Goudie",
        "role": "Design Manager",
        "email": "c.goudie@bandk.co.uk",
        "phone": "07990 356018"
      },
      {
        "name": "Carly Beat",
        "role": "Quantity Surveyor",
        "email": "c.beat@bandk.co.uk",
        "phone": "07342 079566"
      },
      {
        "name": "Charlie Faulkingham",
        "role": "Site Manager",
        "email": "c.faulkingham@bandk.co.uk"
      },
      {
        "name": "Charlotte Bolton",
        "role": "Quantity Surveyor",
        "email": "c.bolton@bandk.co.uk"
      },
      {
        "name": "Chris Allen",
        "role": "Pre Construction Manager",
        "email": "c.allen@bandk.co.uk"
      },
      {
        "name": "Chris Fletcher",
        "role": "Site Manager",
        "email": "c.fletcher@bandk.co.uk",
        "phone": "7471514349.0"
      },
      {
        "name": "Chris Iliffe",
        "role": "Quantity Surveyor",
        "email": "c.iliffe@bandk.co.uk",
        "phone": "7771960354.0"
      },
      {
        "name": "Chris Shaw",
        "role": "Quantity Surveyor",
        "email": "c.shaw@bandk.co.uk"
      },
      {
        "name": "Chris Trim",
        "role": "Surveyor",
        "email": "c.trim@bandk.co.uk",
        "phone": "7340511129.0"
      },
      {
        "name": "Chris Wright",
        "role": "Quantity Surveyor",
        "email": "c.wright@bandk.co.uk",
        "phone": "07721 493079"
      },
      {
        "name": "Christian Parnell",
        "role": "Regional Director",
        "email": "c.parnell@bandk.co.uk",
        "phone": "07825 247357"
      },
      {
        "name": "Clark Clarkson",
        "role": "Quantity Surveyor",
        "email": "c.clarkson@bandk.co.uk"
      },
      {
        "name": "Clark Hemstalk",
        "role": "Quantity Surveyor",
        "email": "c.hemstalk@bandk.co.uk",
        "phone": "7787252033.0"
      },
      {
        "name": "Clive Brooks",
        "role": "Senior Design Manager",
        "email": "c.brooks@bandk.co.uk",
        "phone": "07990 503614"
      },
      {
        "name": "Colin Fowler",
        "role": "Site Manager",
        "email": "c.fowler@bandk.co.uk",
        "phone": "07825 204753"
      },
      {
        "name": "Dan Spendlove",
        "role": "Project Manager",
        "email": "d.spendlove@bandk.co.uk",
        "phone": "07557 079323"
      },
      {
        "name": "Daniel Nicholls",
        "role": "Quantity Surveyor",
        "email": "d.nicholls@bandk.co.uk",
        "phone": "7917072930.0"
      },
      {
        "name": "Daniel Rackham",
        "role": "Pre Construction Manager",
        "email": "d.rackman@bandk.co.uk",
        "phone": "07771 773927"
      },
      {
        "name": "Darren Barker",
        "role": "Project Manager",
        "email": "d.barker@bandk.co.uk",
        "phone": "7741235741.0"
      },
      {
        "name": "Darren Buckley",
        "role": "Senior Site Manager",
        "email": "d.buckley@bandk.co.uk",
        "phone": "07887 651191"
      },
      {
        "name": "Darren Stoker",
        "role": "Construction Director",
        "email": "d.stoker@bandk.co.uk",
        "phone": "07827 357022"
      },
      {
        "name": "Dave Boustead",
        "role": "Contracts Manager",
        "email": "d.boustead@bandk.co.uk",
        "phone": "07824 328226"
      },
      {
        "name": "Dave Holbrook",
        "role": "Construction Contracts Manager",
        "email": "d.holbrook@bandk.co.uk",
        "phone": "07717 731248"
      },
      {
        "name": "Dave Platt",
        "role": "Project Manager",
        "email": "d.platt@bandk.co.uk",
        "phone": "07880 773816"
      },
      {
        "name": "David Merrick",
        "role": "Project Manager",
        "email": "d.merrick@bandk.co.uk",
        "phone": "07767 886324"
      },
      {
        "name": "David Sheppard",
        "role": "Project Manager",
        "email": "d.sheppard@bandk.co.uk",
        "phone": "07385 466478"
      },
      {
        "name": "David Twizell",
        "role": "Site Manager",
        "email": "d.twizell@bandk.co.uk",
        "phone": "07353 103318"
      },
      {
        "name": "Dean Short",
        "role": "Contracts Manager",
        "email": "d.short@bandk.co.uk"
      },
      {
        "name": "Dejan Stojsavljevic",
        "role": "Project Manager",
        "email": "d.stojsavljevic@bandk.co.uk",
        "phone": "07584 445035"
      },
      {
        "name": "Dominic Medforth",
        "role": "Quantity Surveyor",
        "email": "d.medforth@bandk.co.uk",
        "phone": "7867409955.0"
      },
      {
        "name": "Donny Nicholson",
        "role": "Quantity Surveyor",
        "email": "d.nicholson@bandk.co.uk",
        "phone": "7880463135.0"
      },
      {
        "name": "Duncan Wilson",
        "role": "Quantity Surveyor",
        "email": "d.wilson@bandk.co.uk",
        "phone": "07824 846026"
      },
      {
        "name": "Ed Sutton",
        "role": "Pre Construction Director",
        "email": "e.sutton@bandk.co.uk",
        "phone": "07770 975269"
      }
    ]
  },
  {
    "id": 117,
    "name": "Brandclad Limited",
    "disciplines": [
      "Facades & Cladding"
    ],
    "contacts": [
      {
        "name": "Daniel Laughton-Zimmerman",
        "role": "Contracts Director",
        "email": "daniel@brandclad.co.uk"
      }
    ]
  },
  {
    "id": 118,
    "name": "Brebur Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Chris France",
        "role": "Quantity Surveyor",
        "email": "cfrance@breburltd.co.uk"
      },
      {
        "name": "Craig Ham",
        "role": "Contract Manager",
        "email": "cham@breburltd.co.uk"
      },
      {
        "name": "Darrel Proctor",
        "role": "Commercial Manager",
        "email": "dproctor@breburltd.co.uk"
      },
      {
        "name": "Dec Brumby",
        "role": "Contracts Manager",
        "email": "dbrumby@breburltd.co.uk"
      },
      {
        "name": "Jamie Brenton",
        "role": "Contracts Manager",
        "email": "jbrenton@breburltd.co.uk"
      },
      {
        "name": "Jordan Agnew",
        "role": "Contract Manager",
        "email": "jagnew@breburltd.co.uk",
        "phone": "07533 733387"
      },
      {
        "name": "Liam Heathcote",
        "role": "Contracts Manager",
        "email": "lheathcote@breburltd.co.uk",
        "phone": "07825 703516"
      },
      {
        "name": "Nicholas Roffey",
        "role": "Commercial Manager",
        "email": "nicholas.roffey@breburltd.co.uk"
      },
      {
        "name": "Peter Priest",
        "role": "Contract Manager",
        "email": "ppriest@breburltd.co.uk",
        "phone": "07855 332562"
      },
      {
        "name": "Sam Jackson",
        "role": "Quantity Surveyor",
        "email": "sjackson@breburltd.co.uk"
      }
    ]
  },
  {
    "id": 119,
    "name": "Breedon Group",
    "disciplines": [
      "Civil Engineering"
    ],
    "contacts": [
      {
        "name": "Andy Yould",
        "role": "Supervisor",
        "email": "andy.yould@breedongroup.com"
      },
      {
        "name": "Darren Hughes",
        "role": "Sales Manager",
        "email": "darren.hughes@breedongroup.com"
      },
      {
        "name": "Ed Thompson",
        "role": "General Manager",
        "email": "ed.thompson@breedongroup.com"
      },
      {
        "name": "Hayden Lister",
        "role": "Managing Quantity Surveyor",
        "email": "hayden.lister@breedongroup.com"
      },
      {
        "name": "John Roberts",
        "role": "Sales Manager",
        "email": "john.roberts@breedongroup.com"
      },
      {
        "name": "Adam Binns",
        "role": "Contracts Manager",
        "email": "adam.binns@breedongroup.com"
      },
      {
        "name": "Chris Duff",
        "role": "Project Manager",
        "email": "chris.duff@breedongroup.com"
      },
      {
        "name": "Darren Hall",
        "role": "Regional Director",
        "email": "darren.hall@breedongroup.com"
      },
      {
        "name": "James Brotherton",
        "role": "Commercial Manager",
        "email": "james.brotherton@breedongroup.com"
      },
      {
        "name": "Paul Beeton",
        "role": "Managing Director",
        "email": "paul.beeton@breedongroup.com"
      }
    ]
  },
  {
    "id": 120,
    "name": "Briggs & Forrester",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adam Burton",
        "role": "Quantity Surveyor",
        "email": "adam.burton@briggs.uk.com"
      },
      {
        "name": "Adam Penketh",
        "role": "Project Manager",
        "email": "adam.penketh@briggs.uk.com",
        "phone": "07739 630583"
      },
      {
        "name": "Adam Raine",
        "role": "Contract Manager",
        "email": "adam.raine@briggs.uk.com"
      },
      {
        "name": "Adrian Nichols",
        "role": "Regional Director",
        "email": "adrian.nicols@briggs.uk.com"
      },
      {
        "name": "Alan Bunday",
        "role": "Contracts Manager",
        "email": "alan.bunday@briggs.uk.com"
      },
      {
        "name": "Alan Freeland",
        "role": "Contract Manager",
        "email": "alan.freeland@briggs.uk.com"
      },
      {
        "name": "Andrew Bennett",
        "role": "Quantity Surveyor",
        "email": "andrew.bennett@briggs.uk.com"
      },
      {
        "name": "Aswathy Prabhakaran",
        "role": "Quantity Surveyor",
        "email": "aswathy.prabhakaran@briggs.uk.com"
      },
      {
        "name": "Bill Teasdale",
        "role": "Director",
        "email": "bill.teasdale@briggs.uk.com"
      },
      {
        "name": "Brendon Pedley",
        "role": "Projects Director",
        "email": "brendon.pedley@briggs.uk.com"
      },
      {
        "name": "Chris Carter",
        "role": "Contracts Director",
        "email": "chris.carter@briggs.uk.com"
      },
      {
        "name": "David Cowell",
        "role": "Senior Quantity Surveyor",
        "email": "david.cowell@briggs.uk.com",
        "phone": "07734 962721"
      },
      {
        "name": "Ian Barfield",
        "role": "Contracts Manager",
        "email": "ian.barfield@briggs.uk.com"
      },
      {
        "name": "Ian MacKenzie",
        "role": "Construction Manager",
        "email": "ian.mackenzie@briggs.uk.com",
        "phone": "07824 591140"
      },
      {
        "name": "Ian Peake",
        "role": "Contracts Manager",
        "email": "ian.peake@briggs.uk.com"
      },
      {
        "name": "Jeff Wood",
        "role": "Project Director",
        "email": "jeff.wood@briggs.uk.com"
      },
      {
        "name": "Joel Copus",
        "role": "Commercial Director",
        "email": "joel.copus@briggs.uk.com"
      },
      {
        "name": "Justin Davies",
        "role": "Project Manager",
        "email": "justin.davies@briggs.uk.com"
      },
      {
        "name": "Justin Van-Walwyk",
        "role": "Contracts Manager",
        "email": "justin.van-walwyk@briggs.uk.com"
      },
      {
        "name": "Kevin Dunn",
        "role": "Contracts Manager",
        "email": "kevin.dunn@briggs.uk.com"
      },
      {
        "name": "Kieran Copus",
        "role": "Project Manager",
        "email": "kieran.copus@briggs.uk.com",
        "phone": "07717 731392"
      },
      {
        "name": "Lee Gregson",
        "role": "Contract Manager",
        "email": "lee.gregson@briggs.uk.com",
        "phone": "07715 961636"
      },
      {
        "name": "Mark Watts",
        "role": "Contract Manager",
        "email": "mark.watts@briggs.uk.com",
        "phone": "07734 962685"
      },
      {
        "name": "Mark Whittaker",
        "role": "Quantity Surveyor",
        "email": "mark.whittaker@briggs.uk.com",
        "phone": "07733 300374"
      },
      {
        "name": "Martin Petts",
        "role": "Contract Manager",
        "email": "martin.petts@briggs.uk.com",
        "phone": "07734 962549"
      },
      {
        "name": "Martin Saulters",
        "role": "Contracts Manager",
        "email": "martin.saulters@briggs.uk.com"
      },
      {
        "name": "Matthew Lambert",
        "role": "Quantity Surveyor",
        "email": "matthew.lambert@briggs.uk.com"
      },
      {
        "name": "Mike Terry",
        "role": "Commercial Manager",
        "email": "mike.terry@briggs.uk.com"
      },
      {
        "name": "Neil Wyatt",
        "role": "Contracts Manager",
        "email": "neil.wyatt@briggs.uk.com"
      },
      {
        "name": "Paul Harris",
        "role": "Commercial Manager",
        "email": "paul_r.harris@briggs.uk.com"
      },
      {
        "name": "Paul Sambridge",
        "role": "Contract Manager",
        "email": "paul.sambridge@briggs.uk.com",
        "phone": "07733 300381"
      },
      {
        "name": "Richard Sawyer",
        "role": "Quantity Surveyor",
        "email": "richard.sawyer@briggs.uk.com"
      },
      {
        "name": "Ryan Burn",
        "role": "Contracts Manager",
        "email": "ryan.burn@briggs.uk.com",
        "phone": "07739 630589"
      },
      {
        "name": "Sam Edwards",
        "role": "Construction Manager",
        "email": "sam.edwards@briggs.uk.com"
      },
      {
        "name": "Sam McCallum",
        "role": "Regional Director",
        "email": "sam.mccallum@briggs.uk.com"
      },
      {
        "name": "Tim Cunningham",
        "role": "Managing Director",
        "email": "tim.cunningham@briggs.uk.com"
      },
      {
        "name": "Toby Bavester",
        "role": "Contract Manager",
        "email": "toby.bavester@briggs.uk.com"
      }
    ]
  },
  {
    "id": 121,
    "name": "Briggs & Forrester Engineering Services",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Lee Grayson",
        "role": "Project Manager",
        "email": "lee.grayson@briggs.uk.com",
        "phone": "7715961636.0"
      },
      {
        "name": "Martin Petts",
        "role": "Contracts Manager",
        "email": "martin.petts@briggs.uk.com",
        "phone": "7734962549.0"
      },
      {
        "name": "Rob Johnston",
        "role": "Project Manager",
        "email": "rob.johnston@briggs.uk.com",
        "phone": "07733 300374"
      },
      {
        "name": "Steve McGraph",
        "role": "Senior Quantity Surveyor",
        "phone": "7715961647.0"
      }
    ]
  },
  {
    "id": 122,
    "name": "Briggs & Forrester Group Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adam Penketh",
        "role": "Project Manager",
        "email": "adam.penketh@briggs.uk.com",
        "phone": "07739 630583"
      },
      {
        "name": "Alan Martin",
        "role": "Contracts Manager",
        "phone": "07702 102781"
      },
      {
        "name": "Craig Leather",
        "role": "Project Manager",
        "phone": "07733 300352"
      },
      {
        "name": "Dan Bryan",
        "role": "Project Manager",
        "email": "dan.bryan@briggs.uk.com",
        "phone": "07734 962536"
      },
      {
        "name": "David Cowell",
        "role": "Senior Quantity Surveyor",
        "email": "david.cowell@briggs.uk.com",
        "phone": "07734 962721"
      },
      {
        "name": "Ian MacKenzie",
        "role": "Construction Manager",
        "email": "ian.mackenzie@briggs.uk.com",
        "phone": "7824591140.0"
      },
      {
        "name": "Kieran Copus",
        "role": "Project Manager",
        "email": "kieran.copus@briggs.uk.com",
        "phone": "07717 731392"
      },
      {
        "name": "Lee Gregson",
        "role": "Contract Manager",
        "email": "lee.gregson@briggs.uk.com",
        "phone": "07715 961636"
      },
      {
        "name": "Mark Watts",
        "role": "Contract Manager",
        "email": "mark.watts@briggs.uk.com",
        "phone": "07734 962685"
      },
      {
        "name": "Mark Whittaker",
        "role": "Quantity Surveyor",
        "email": "mark.whittaker@briggs.uk.com",
        "phone": "07733 300374"
      },
      {
        "name": "Martin Petts",
        "role": "Contract Manager",
        "email": "martin.petts@briggs.uk.com",
        "phone": "07734 962549"
      },
      {
        "name": "Matthew Orme",
        "role": "Project Manager",
        "email": "matthew.orme@briggs.uk.com",
        "phone": "07733 300318"
      },
      {
        "name": "Michael Price",
        "role": "Project Manager",
        "email": "michael.price@briggs.uk.com",
        "phone": "07557 743169"
      },
      {
        "name": "Nick Davies",
        "role": "Project Manager",
        "phone": "07733 300301"
      },
      {
        "name": "Paul Hall",
        "role": "Project Manager",
        "phone": "07734 961907"
      },
      {
        "name": "Paul Sambridge",
        "role": "Contract Manager",
        "email": "paul.sambridge@briggs.uk.com",
        "phone": "7733300381.0"
      },
      {
        "name": "Paul York",
        "role": "Site Manager",
        "email": "paul.york@briggs.uk.com",
        "phone": "07714 559511"
      },
      {
        "name": "Ryan Burn",
        "role": "Contracts Manager",
        "email": "ryan.burn@briggs.uk.com",
        "phone": "7739630589.0"
      },
      {
        "name": "Sean O'Reilly",
        "role": "Mechanical Project Manager",
        "email": "sean.o'reilly@briggs.uk.com",
        "phone": "07734 962694"
      },
      {
        "name": "Steve McGrath",
        "role": "Senior Quantity Surveyor",
        "phone": "07715 961647"
      },
      {
        "name": "Steve Perry",
        "role": "Site Manager",
        "email": "steve.perry@briggs.uk.com",
        "phone": "07703 889560"
      },
      {
        "name": "Tom Freeman",
        "role": "Senior Project Engineer",
        "email": "tom.freeman@briggs.uk.com",
        "phone": "7881502780.0"
      }
    ]
  },
  {
    "id": 123,
    "name": "Briggs Amasco Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Antonio Perez Valero",
        "role": "Contracts Manager",
        "email": "antonio.perezvalero@briggsamasco.co.uk"
      },
      {
        "name": "Archie Melling",
        "role": "Designer",
        "email": "archie.melling@briggsamasco.co.uk"
      },
      {
        "name": "Carly Reddington",
        "role": "Quantity Surveyor",
        "email": "carly.reddington@briggsamasco.co.uk"
      },
      {
        "name": "Chris Brentnell",
        "role": "Quantity Surveyor",
        "email": "chris.brentnell@briggsamasco.co.uk"
      },
      {
        "name": "Darren Wearing",
        "role": "Project Manager",
        "email": "darren.wearing@briggsamasco.co.uk"
      },
      {
        "name": "Gary Lennon",
        "role": "Contract Manager",
        "email": "glennon@briggsamasco.co.uk",
        "phone": "07803 076845"
      },
      {
        "name": "John Adam",
        "role": "Pre Construction Manager",
        "email": "john.adam@briggsamasco.co.uk"
      },
      {
        "name": "Kevin Hammond",
        "role": "Contract Manager",
        "email": "kevin.hammond@briggsamasco.co.uk",
        "phone": "07904 268258"
      },
      {
        "name": "Kristian Bradley",
        "email": "kristian.bradley@briggsamasco.co.uk",
        "phone": "07803 076899"
      },
      {
        "name": "Neil Turner",
        "role": "Quantity Surveyor",
        "email": "nturner@briggsamasco.co.uk"
      },
      {
        "name": "Troy Harris",
        "role": "Quantity Surveyor",
        "email": "troy.harris@briggsamasco.co.uk"
      }
    ]
  },
  {
    "id": 124,
    "name": "British Gypsum Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adam Wellstead",
        "role": "Regional Sales Director",
        "email": "adam.wellstead@saint-gobain.com"
      },
      {
        "name": "Carlo D'Ambrosio",
        "email": "giancarlo.d'ambrosio@saint-gobain.com",
        "phone": "07971 661078"
      },
      {
        "name": "Daniel Hedley-Ward",
        "role": "Area Sales Manager",
        "email": "daniel.hedley-ward@saint-gobain.com",
        "phone": "07717 702118"
      },
      {
        "name": "Dean Wilson",
        "role": "Area Sales Manager",
        "email": "dean.wilson@saint-gobain.com"
      },
      {
        "name": "Glen Clark",
        "email": "glen.clark@saint-gobain.com"
      },
      {
        "name": "Hannah O'Donoghue",
        "email": "hannah.o'donoghue@saint-gobain.com"
      },
      {
        "name": "James Lucas",
        "role": "Manager",
        "email": "james.lucas@saint-gobain.com"
      },
      {
        "name": "Jeremy Elvins",
        "email": "jeremy.elvins@saint-gobain.com"
      },
      {
        "name": "Julian Stone",
        "role": "Site Manager",
        "email": "julian.stone@saint-gobain.com"
      },
      {
        "name": "Leah Holland",
        "role": "Area Sales Manager",
        "email": "leah.holland@saint-gobain.com"
      },
      {
        "name": "Luke Morgan",
        "role": "Sales Manager",
        "email": "luke.morgan@saint-gobain.com"
      },
      {
        "name": "Paul Bugg",
        "role": "Area Sales Manager",
        "email": "paul.bugg@saint-gobain.com",
        "phone": "07870 160409"
      },
      {
        "name": "Steve Tait",
        "role": "Project Manager",
        "email": "steve.tait@saint-gobain.com"
      },
      {
        "name": "Wayne Harris-Marsh",
        "role": "Technical Consultant",
        "email": "wayne.harris-marsh@saint-gobain.com"
      }
    ]
  },
  {
    "id": 125,
    "name": "Broadsword Group",
    "disciplines": [
      "Civil Engineering"
    ],
    "contacts": [
      {
        "name": "Chloe Wren",
        "role": "Quantity Surveyor",
        "email": "chloe.wren@broadswordprojects.co.uk"
      },
      {
        "name": "Elvin Pearce",
        "role": "Project Manager",
        "email": "elvin.pearce@broadswordprojects.co.uk"
      },
      {
        "name": "Jake Allen",
        "role": "Project Manager",
        "email": "jake.allen@broadswordprojects.co.uk"
      },
      {
        "name": "James Sykes",
        "role": "Project Manager",
        "email": "james.sykes@broadswordprojects.co.uk"
      },
      {
        "name": "Jamie Crocker",
        "role": "Contracts Manager",
        "email": "jamie@broadswordprojects.co.uk",
        "phone": "07940 059934"
      },
      {
        "name": "Jon Langford",
        "role": "Contract Manager",
        "email": "jon@broadswordprojects.co.uk",
        "phone": "07592 410922"
      },
      {
        "name": "Mark Snellgrove",
        "role": "Contracts Manager",
        "email": "mark.snellgrove@broadswordprojects.co.uk"
      },
      {
        "name": "Paul Harris",
        "role": "Contracts Manager",
        "email": "paul@broadswordprojects.co.uk",
        "phone": "07967 230682"
      },
      {
        "name": "Stewart Smith",
        "role": "Contracts Manager",
        "email": "stewart@broadsword-group.co.uk",
        "phone": "07707 278638"
      },
      {
        "name": "Tom Howse",
        "role": "Managing Director",
        "email": "tom@broadswordprojects.co.uk"
      },
      {
        "name": "Andrew Roberts",
        "role": "Operations Director",
        "email": "andrew.roberts@broadswordgroup.com"
      },
      {
        "name": "Darren Kelly",
        "role": "Contracts Manager",
        "email": "darren.kelly@broadswordgroup.com"
      },
      {
        "name": "Gary Smith",
        "role": "Commercial Manager",
        "email": "gary.smith@broadswordgroup.com"
      },
      {
        "name": "James Broadsword",
        "role": "Managing Director",
        "email": "james.broadsword@broadswordgroup.com"
      }
    ]
  },
  {
    "id": 126,
    "name": "Brogan Group",
    "disciplines": [
      "Scaffolding"
    ],
    "contacts": [
      {
        "name": "Ady Payne",
        "role": "Contracts Manager",
        "email": "ady.payne@brogangroup.com"
      },
      {
        "name": "Dave Morris",
        "role": "Contracts Manager",
        "email": "dave.morris@brogangroup.com"
      }
    ]
  },
  {
    "id": 127,
    "name": "Brooks & Wood Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andrew Spurling",
        "role": "Quantity Surveyor",
        "email": "aspurling@brooksandwood.co.uk",
        "phone": "07734 556921"
      },
      {
        "name": "Darren Fellows",
        "role": "Project Manager",
        "email": "darren.fellows@brooksandwood.co.uk"
      },
      {
        "name": "Darren Houghton",
        "role": "Contracts Manager",
        "email": "darren.houghton@brooksandwood.co.uk"
      },
      {
        "name": "David Mason",
        "role": "Quantity Surveyor",
        "email": "dmason@brooksandwood.co.uk"
      }
    ]
  },
  {
    "id": 128,
    "name": "Bulgroup",
    "disciplines": [
      "RC Frame"
    ],
    "contacts": [
      {
        "name": "Dimitar Palozov",
        "role": "Financial Director",
        "email": "dimitar.palozov@bulgroup.co.uk",
        "phone": "07921 768779"
      },
      {
        "name": "Mariyan Hristov",
        "role": "Construction Director",
        "email": "mh@bulgroup.co.uk",
        "phone": "07747 720325"
      },
      {
        "name": "Atanas Atanasov",
        "role": "Managing Director",
        "email": "atanas@bulgroup.co.uk"
      },
      {
        "name": "Ivan Ivanov",
        "role": "Contracts Manager",
        "email": "ivan@bulgroup.co.uk"
      },
      {
        "name": "Martin Petrov",
        "role": "Project Manager",
        "email": "martin@bulgroup.co.uk"
      }
    ]
  },
  {
    "id": 129,
    "name": "Bulgroup Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Dimitar Palozov",
        "role": "Financial Director",
        "phone": "07921 768779"
      },
      {
        "name": "Mariyan Hristov",
        "role": "Construction Director",
        "email": "mh@bulgroup.co.uk",
        "phone": "07747 720325"
      }
    ]
  },
  {
    "id": 130,
    "name": "Burnt Orange Construction",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Piers Reed",
        "role": "Director",
        "email": "piers@burntorange.construction",
        "phone": "07920 584975"
      }
    ]
  },
  {
    "id": 131,
    "name": "Burras Ground Works",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Mike Burras",
        "role": "Director",
        "email": "mike@burras.com",
        "phone": "07768 275122"
      },
      {
        "name": "Sam Upton",
        "role": "Director",
        "email": "sam@burras.com",
        "phone": "07716 889994"
      }
    ]
  },
  {
    "id": 132,
    "name": "Buxted Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Doug Ruthven",
        "role": "Contract Manager",
        "email": "doug.ruthven@buxtedconstruction.co.uk"
      },
      {
        "name": "Paul Dennison",
        "role": "Director",
        "email": "paul@buxtedconstruction.co.uk"
      }
    ]
  },
  {
    "id": 133,
    "name": "Byrne Brothers Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andrew Oliver",
        "role": "Quantity Surveyor",
        "email": "andrew.oliver@byrne-bros.co.uk"
      },
      {
        "name": "Andy Byrne",
        "role": "Construction Manager",
        "email": "andy.byrne@byrne-bros.co.uk"
      },
      {
        "name": "Ben Griffiths",
        "role": "Quantity Surveyor",
        "email": "ben.griffiths@byrne-bros.co.uk"
      },
      {
        "name": "Brady Hartell",
        "role": "Contracts Director",
        "email": "brady.hartell@byrne-bros.co.uk"
      },
      {
        "name": "Eamon Hannigan",
        "role": "Quantity Surveyor",
        "email": "eamon.hannigan@byrne-bros.co.uk"
      },
      {
        "name": "Joe Tinnelly",
        "role": "Project Manager",
        "email": "joseph.tinnelly@byrne-bros.co.uk"
      },
      {
        "name": "Owen Sheehy",
        "role": "Engineer",
        "email": "owen.sheehy@byrne-bros.co.uk"
      },
      {
        "name": "Philip Kendall",
        "role": "Senior Commercial Manager",
        "email": "philip.kendall@byrne-bros.co.uk"
      },
      {
        "name": "Phillip Beausang",
        "role": "Project Manager",
        "email": "philip.beausang@byrne-bros.co.uk"
      },
      {
        "name": "Rob McLaughlin",
        "role": "Project Manager",
        "email": "rob.mclaughlin@byrne-bros.co.uk"
      }
    ]
  },
  {
    "id": 134,
    "name": "C & G Plastering Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Amy Hellewell",
        "role": "Buyer",
        "email": "amy@cgpl.co.uk"
      },
      {
        "name": "Emilian Carban",
        "role": "Project Surveyor",
        "email": "emilian@cgpl.co.uk"
      },
      {
        "name": "James Cunningham",
        "role": "Managing Director",
        "email": "james@cgpl.co.uk"
      },
      {
        "name": "Liam Cecil",
        "role": "Quantity Surveyor",
        "email": "liam@cgpl.co.uk"
      },
      {
        "name": "Sebastian Ghiorghita",
        "role": "Contracts Manager",
        "email": "sebastian@cgpl.co.uk"
      },
      {
        "name": "Stephen Goss",
        "role": "Quantity Surveyor",
        "email": "steveg@cgpl.co.uk"
      }
    ]
  },
  {
    "id": 135,
    "name": "C J Rust",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Ben Flores",
        "role": "Director",
        "email": "ben@cjrust.co.uk"
      },
      {
        "name": "Chris Rust",
        "role": "Director",
        "email": "chris@cjrust.co.uk",
        "phone": "7900813932.0"
      },
      {
        "name": "Darren Heaton",
        "role": "Contracts Manager",
        "email": "darren@cjrust.co.uk"
      },
      {
        "name": "Roger Bowers",
        "role": "Pre Construction Manager",
        "email": "roger@cjrust.co.uk"
      }
    ]
  },
  {
    "id": 136,
    "name": "C Jackson & Son (Bedford) Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Bob Jackson",
        "role": "Joint Director",
        "email": "info@cjacksonandsons.co.uk"
      }
    ]
  },
  {
    "id": 137,
    "name": "CA Group Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adam Sullivan",
        "role": "Design Co-ordinator",
        "email": "adam.sullivan@cagroup.ltd.uk"
      },
      {
        "name": "Des Webster",
        "role": "Managing Director",
        "email": "des.webster@cagroup.ltd.uk"
      },
      {
        "name": "Garry Clevedon",
        "role": "Contracts Manager",
        "email": "garry.clevedon@cagroup.com"
      },
      {
        "name": "Gary McDonald",
        "role": "Quantity Surveyor",
        "email": "gary.mcdonald@cagroup.ltd.uk"
      },
      {
        "name": "James Cooper",
        "role": "Contract Manager",
        "email": "james.cooper@cagroup.com"
      },
      {
        "name": "James Woodgate",
        "role": "Quantity Surveyor",
        "email": "james.woodgate@cagroup.ltd.uk"
      },
      {
        "name": "Jeff Spratt",
        "role": "Contract Manager",
        "email": "jeff.spratt@cagroup.ltd.uk"
      },
      {
        "name": "Joe Shortland",
        "role": "Quantity Surveyor",
        "email": "joe.shortland@cagroup.ltd.uk"
      },
      {
        "name": "John Door",
        "role": "Development Manager",
        "email": "john.door@cagroup.ltd.uk"
      },
      {
        "name": "Jonathan Hedley",
        "role": "National Sales Manager",
        "email": "jonathan.hedley@cagroup.ltd.uk"
      },
      {
        "name": "Keith Robertson",
        "role": "Quantity Surveyor",
        "email": "keith.robertson@cagroup.ltd.uk"
      },
      {
        "name": "Neil Roberts",
        "role": "Contracts Manager",
        "email": "neil.roberts@cagroup.ltd.uk"
      },
      {
        "name": "Simon Butler",
        "role": "Contracts Manager",
        "email": "simon.butler@cagroup.ltd.uk"
      },
      {
        "name": "Stuart Brown",
        "role": "Development Director",
        "email": "stuart.brown@cagroup.co.uk"
      },
      {
        "name": "Stuart Gibbon",
        "role": "Quantity Surveyor",
        "email": "stuart.gibbon@cagroup.ltd.uk"
      },
      {
        "name": "Stuart McConnell",
        "role": "Quantity Surveyor",
        "email": "stuart.mcconnell@cagroup.ltd.uk"
      }
    ]
  },
  {
    "id": 138,
    "name": "Cablesheer Asbestos Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Hazel Long",
        "role": "Project Administrator",
        "email": "hazel.long@cablesheergroup.co.uk"
      }
    ]
  },
  {
    "id": 139,
    "name": "Cadman Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Ed Lewis",
        "role": "Site Manager"
      },
      {
        "name": "Matt Shore",
        "role": "Quantity Surveyor",
        "email": "shorem@cadmangroup.co.uk"
      },
      {
        "name": "Warren Doo",
        "role": "Director",
        "email": "doow@cadmangroup.co.uk"
      },
      {
        "name": "Ed Lewis",
        "role": "Site Manager",
        "email": "construction@cadmangroup.co.uk",
        "phone": "7767614185.0"
      }
    ]
  },
  {
    "id": 140,
    "name": "Cahill Structures",
    "disciplines": [
      "RC Frame"
    ],
    "contacts": [
      {
        "name": "Colin Grant",
        "role": "Quantity Surveyor",
        "email": "colin@cahillwelding.com",
        "phone": "07768 738331"
      },
      {
        "name": "Dave Cahill",
        "role": "Director",
        "email": "dave@cahillwelding.com"
      },
      {
        "name": "Dave Kenyon",
        "role": "Contracts Manager",
        "email": "dave.kenyon@cahillwelding.com"
      },
      {
        "name": "Ian Cahill",
        "role": "Director",
        "email": "ian@cahillwelding.com"
      },
      {
        "name": "Neil Senior",
        "role": "Contracts Manager",
        "email": "neil.senior@cahillwelding.com"
      },
      {
        "name": "Paul Chalke",
        "role": "Operations Manager",
        "email": "paul@cahillwelding.com"
      },
      {
        "name": "Rav Grewal",
        "role": "Contracts Manager",
        "email": "rav.grewal@cahillwelding.com"
      },
      {
        "name": "Rob Burgess",
        "role": "Contract Manager",
        "email": "rob@cahillwelding.com"
      },
      {
        "name": "Rory O'Loughlin",
        "role": "Contracts Manager",
        "email": "rory@cahillwelding.com"
      },
      {
        "name": "Ryan Dow",
        "role": "Drawing Office Manager",
        "email": "ryan@cahillwelding.com"
      },
      {
        "name": "William Lorimer",
        "role": "Buyer",
        "email": "will@cahillwelding.com"
      },
      {
        "name": "Barry Cahill",
        "role": "Managing Director",
        "email": "barry.cahill@cahillgroup.com"
      },
      {
        "name": "Chris Martin",
        "role": "Contracts Manager",
        "email": "chris.martin@cahillgroup.com"
      },
      {
        "name": "Darren Cahill",
        "role": "Director",
        "email": "darren.cahill@cahillgroup.com"
      },
      {
        "name": "James O'Reilly",
        "role": "Project Manager",
        "email": "james.oreilly@cahillgroup.com"
      },
      {
        "name": "Mark Byrne",
        "role": "Commercial Manager",
        "email": "mark.byrne@cahillgroup.com"
      }
    ]
  },
  {
    "id": 141,
    "name": "Cahill Structures Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Colin Grant",
        "role": "Quantity Surveyor",
        "email": "colin@cahillwelding.com",
        "phone": "07768 738331"
      },
      {
        "name": "Dave Cahill",
        "role": "Director",
        "email": "dave@cahillwelding.com"
      },
      {
        "name": "Dave Kenyon",
        "role": "Contracts Manager",
        "email": "dave.kenyon@cahillwelding.com"
      },
      {
        "name": "Ian Cahill",
        "role": "Director",
        "email": "ian@cahillwelding.com"
      },
      {
        "name": "Neil Senior",
        "role": "Contracts Manager",
        "email": "neil.senior@cahillwelding.com"
      },
      {
        "name": "Paul Chalke",
        "role": "Operations Manager",
        "email": "paul@cahillwelding.com"
      },
      {
        "name": "Rav Grewal",
        "role": "Contracts Manager",
        "email": "rav.grewal@cahillwelding.com"
      },
      {
        "name": "Rob Burgess",
        "role": "Contract Manager",
        "email": "rob@cahillwelding.com"
      },
      {
        "name": "Rory O'Loughlin",
        "role": "Contracts Manager",
        "email": "rory@cahillwelding.com"
      },
      {
        "name": "Ryan Dow",
        "role": "Drawing Office Manager",
        "email": "ryan@cahillwelding.com"
      },
      {
        "name": "William Lorimer",
        "role": "Buyer",
        "email": "will@cahillwelding.com"
      }
    ]
  },
  {
    "id": 142,
    "name": "Callaghan Brickwork Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andy Howard",
        "role": "Contracts Manager",
        "email": "callaghanbrickwork@googlemail.com",
        "phone": "07904 995870"
      }
    ]
  },
  {
    "id": 143,
    "name": "Callan Construction",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Steve Brown",
        "role": "Contract Manager",
        "email": "steve@callanconstruction.com",
        "phone": "07841 458753"
      },
      {
        "name": "Steve Martin",
        "role": "Site Manager",
        "email": "info@callanconstruction.com",
        "phone": "07719 917820"
      }
    ]
  },
  {
    "id": 144,
    "name": "Camfaud Concrete Pumps",
    "disciplines": [
      "Civil Engineering"
    ],
    "contacts": [
      {
        "name": "Alfie Hill",
        "role": "Regional Commercial Manager",
        "email": "alfie.hill@camfaud.co.uk",
        "phone": "07826 984986"
      },
      {
        "name": "Brendan Murphy",
        "role": "Contracts Manager",
        "email": "brendan.murphy@camfaud.co.uk"
      },
      {
        "name": "David Mann",
        "role": "Contract Manager",
        "email": "david.mann@camfaud.co.uk"
      },
      {
        "name": "James George",
        "role": "Area Manager",
        "email": "james.george@camfaud.co.uk",
        "phone": "07779 797687"
      },
      {
        "name": "John McKenzie",
        "role": "Director",
        "email": "john.mckenzie@camfaud.co.uk"
      },
      {
        "name": "Kevin Foster",
        "role": "Contracts Manager",
        "email": "kevin.foster@camfaud.co.uk",
        "phone": "07920 744003"
      },
      {
        "name": "Kurt Slater",
        "role": "Special Projects Manager",
        "email": "kurt.slater@camfaud.co.uk",
        "phone": "07436 831544"
      },
      {
        "name": "Sean Tilling",
        "role": "Contracts Manager",
        "email": "sean.tilling@camfaud.co.uk"
      },
      {
        "name": "Andy Faud",
        "role": "Managing Director",
        "email": "andy@camfaud.co.uk"
      },
      {
        "name": "Darren Wells",
        "role": "Operations Manager",
        "email": "darren.wells@camfaud.co.uk"
      },
      {
        "name": "James Faud",
        "role": "Director",
        "email": "james@camfaud.co.uk"
      },
      {
        "name": "Mark Green",
        "role": "Contracts Manager",
        "email": "mark.green@camfaud.co.uk"
      }
    ]
  },
  {
    "id": 145,
    "name": "Canary Wharf Group PLC",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Ahmed El-Zahar",
        "role": "Head of Planning",
        "email": "ahmed.elzahar@cwcontractors.com"
      },
      {
        "name": "Alec Vallintine",
        "role": "Managing Director",
        "email": "avallintine@hotmail.com",
        "phone": "#ERROR!"
      },
      {
        "name": "Charmaine Perpie",
        "role": "PA",
        "email": "charmaine.perpie@cwcontractors.com"
      },
      {
        "name": "Charmaine Waite",
        "role": "Office Manager",
        "email": "charmaine.waite@canarywharf.com"
      },
      {
        "name": "David Johnson",
        "role": "Construction Manager",
        "email": "david.johnson@cwcontractors.com"
      },
      {
        "name": "John Garwood",
        "role": "PR Manager",
        "email": "john.garwood@canarywharf.com"
      },
      {
        "name": "Matt Robinson",
        "role": "Associate Director",
        "email": "matt.robinson@canarywharf.com"
      },
      {
        "name": "Momin Zaman",
        "role": "Procurement Manager",
        "email": "mzaman@canarywharf.com"
      },
      {
        "name": "Nick Humbles",
        "role": "Contract Manager",
        "email": "nick.humbles@canarywharf.com"
      },
      {
        "name": "Scott Fraser",
        "role": "Project Manager",
        "email": "scott.fraser@cwcontractors.com"
      },
      {
        "name": "Simon Walters",
        "role": "simonwalters@canarywharf.com"
      }
    ]
  },
  {
    "id": 146,
    "name": "Cannon Piling",
    "disciplines": [
      "Piling",
      "RC Frame"
    ],
    "contacts": [
      {
        "name": "Anthony O'Connor",
        "role": "Director",
        "email": "anthony.oconnor@cannonpiling.com",
        "phone": "07971 285194"
      },
      {
        "name": "Duncan Penning",
        "role": "Quantity Surveyor",
        "email": "duncanpenning@aarsleff.co.uk"
      },
      {
        "name": "Geoff Newton",
        "role": "Contracts Manager",
        "email": "geoff@cannonpiling.com"
      },
      {
        "name": "George Newton",
        "role": "Contracts Manager",
        "email": "george@cannonpiling.com",
        "phone": "07899 918617"
      },
      {
        "name": "Jamie Wickham",
        "role": "Project Manager",
        "email": "jamie.wickham@cannonpiling.com",
        "phone": "07710 625833"
      },
      {
        "name": "Sarah Cooper",
        "role": "Contracts Engineer",
        "email": "sarahcooper@cannonpiling.com",
        "phone": "07825 815929"
      },
      {
        "name": "Shaun Prill",
        "role": "Contracts Manager",
        "email": "shaun@cannonpiling.com",
        "phone": "07514 206390"
      },
      {
        "name": "Stuart Thornton",
        "role": "Contracts Manager",
        "email": "stuartthornton@cannonpiling.com"
      },
      {
        "name": "Tom Goodchild",
        "role": "Project Manager",
        "email": "tom@cannonpiling.com"
      },
      {
        "name": "Commercial Team",
        "email": "info@cannonpiling.co.uk"
      }
    ]
  },
  {
    "id": 147,
    "name": "Cantillon",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Chris Toseland",
        "role": "Project Manager",
        "email": "chris.toseland@cantillon.co.uk"
      },
      {
        "name": "Fernando Vinagre",
        "role": "Project Manager",
        "email": "fernando.vinagre@cantillon.co.uk"
      },
      {
        "name": "Gary Miller",
        "role": "Site Manager",
        "email": "gary.miller@cantillon.co.uk",
        "phone": "07930 398099"
      },
      {
        "name": "Jim McCowan",
        "role": "Project Manager",
        "email": "jim.mccowan@cantillon.co.uk"
      },
      {
        "name": "Matt Radley",
        "role": "Project Manager",
        "email": "matt.radley@cantillon.co.uk",
        "phone": "07741 311657"
      },
      {
        "name": "Paul Cluskey",
        "role": "Managing Director",
        "email": "paul.cluskey@cantillon.co.uk"
      },
      {
        "name": "Matt Radley",
        "role": "Project Manager",
        "phone": "07741 311657"
      }
    ]
  },
  {
    "id": 148,
    "name": "Capital Sky Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Martin Maloney",
        "role": "Managing Director",
        "email": "martin.maloney@capitalsky.uk",
        "phone": "07769 676167"
      },
      {
        "name": "Shane Gavin",
        "role": "Senior Buyer",
        "email": "shane.gavin@capitalsky.uk"
      }
    ]
  },
  {
    "id": 149,
    "name": "Carey London Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Ardit Mici",
        "role": "Contracts Manager",
        "email": "amici@careylondonltd.co.uk"
      },
      {
        "name": "Dominik Ignaczak",
        "role": "Project Manager",
        "email": "dignaczak@careylondonltd.co.uk"
      },
      {
        "name": "Enda Cosgrove",
        "role": "Director",
        "email": "enda.cosgrove@careylondonltd.co.uk"
      },
      {
        "name": "Joe Carey",
        "role": "Contracts Manager",
        "email": "jcarey@careylondonltd.co.uk"
      },
      {
        "name": "Kevin Lyden",
        "role": "Project Manager",
        "email": "lkyden@careylondonltd.co.uk"
      },
      {
        "name": "Martin Carey",
        "role": "Director",
        "email": "mcarey@careylondonltd.co.uk"
      },
      {
        "name": "Martin Hughes",
        "role": "Project Manager",
        "email": "mhughes@careylondonltd.co.uk"
      },
      {
        "name": "Paul Bradley",
        "role": "Contracts Manager",
        "email": "paul.bradley@careylondonltd.co.uk"
      },
      {
        "name": "Steve Smith",
        "role": "Quantity Surveyor",
        "email": "steve.smith@careylondonltd.co.uk"
      },
      {
        "name": "Surja Teau",
        "role": "Contract Manager",
        "email": "steau@careylondonltd.co.uk",
        "phone": "7859072635.0"
      },
      {
        "name": "Paul Bradley",
        "role": "Contracts Manager",
        "email": "pbradley@careylondonltd.co.uk"
      },
      {
        "name": "Steve Smith",
        "role": "Quantity Surveyor",
        "email": "ssmith@careylondonltd.co.uk"
      }
    ]
  },
  {
    "id": 150,
    "name": "Carty Forde Construction & Engineering",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alexandru Panfil",
        "role": "Construction Manager",
        "email": "alexandrupanfil@cartyforde.co.uk"
      },
      {
        "name": "Cian Daly",
        "role": "Contracts Manager",
        "email": "ciandaly@cartyforde.co.uk",
        "phone": "07907 574695"
      },
      {
        "name": "Joe Chalmers",
        "role": "Project Manager",
        "email": "joe.chalmers@cartyforde.co.uk"
      },
      {
        "name": "Ray Forde",
        "role": "Director",
        "email": "rayforde@cartyforde.co.uk"
      },
      {
        "name": "William Reilly",
        "role": "Project Manager",
        "email": "williamreilly@cartyforde.co.uk"
      }
    ]
  },
  {
    "id": 151,
    "name": "Carty Forde Construction & Engineering Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alexandru Panfil",
        "role": "Construction Manager",
        "email": "alexandrupanfil@cartyforde.co.uk"
      },
      {
        "name": "Cian Daly",
        "role": "Contracts Manager",
        "email": "ciandaly@cartyforde.co.uk",
        "phone": "7907574695.0"
      },
      {
        "name": "Joe Chalmers",
        "role": "Project Manager",
        "email": "joe.chalmers@cartyforde.co.uk"
      },
      {
        "name": "Ray Forde",
        "role": "Director",
        "email": "rayforde@cartyforde.co.uk"
      },
      {
        "name": "William Reilly",
        "role": "Project Manager",
        "email": "williamreilly@cartyforde.co.uk"
      }
    ]
  },
  {
    "id": 152,
    "name": "Carver Engineering Services",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Nick Dewa",
        "role": "Project Manager",
        "email": "nick@carverengineering.com"
      },
      {
        "name": "Timothy Sheppard",
        "role": "Managing Director",
        "email": "timothy.sheppard@carverengineering.com"
      }
    ]
  },
  {
    "id": 153,
    "name": "Cawarden",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alex O'Brien",
        "role": "Quantity Surveyor",
        "email": "alex.obrien@cawarden.com"
      },
      {
        "name": "Andrew Pickering",
        "role": "Commercial Manager",
        "email": "a.pickering@cawarden.com",
        "phone": "07497 090249"
      },
      {
        "name": "Ashley Barlow",
        "role": "Demolition Manager",
        "email": "a.barlow@cawarden.com"
      },
      {
        "name": "Danny Walsh",
        "role": "Director",
        "email": "d.walsh@cawarden.com"
      },
      {
        "name": "Jack Lunn",
        "role": "Site Manager",
        "email": "j.lunn@cawarden.com"
      },
      {
        "name": "Jay Sutherland",
        "role": "Site Manager",
        "email": "j.sutherland@cawarden.com"
      },
      {
        "name": "Katie Wilson",
        "email": "katie.wilson@cawarden.com"
      },
      {
        "name": "Kyle Forster",
        "role": "Assistant Quantity Surveyor",
        "email": "k.forster@cawarden.com"
      },
      {
        "name": "Malc Whitehead",
        "role": "Contract Manager",
        "email": "m.whitehead@cawarden.com"
      },
      {
        "name": "Malcolm Lowes",
        "role": "Demolition Manager",
        "email": "m.lowes@cawarden.co.uk",
        "phone": "07768 991999"
      },
      {
        "name": "Matt Mowat",
        "role": "Manager",
        "email": "m.mowat@cawarden.com"
      },
      {
        "name": "Mitch Townsend",
        "role": "Project Manager",
        "email": "m.townsend@cawarden.com"
      },
      {
        "name": "Oliver Crooks",
        "role": "Commercial Director",
        "email": "o.crooks@cawarden.com",
        "phone": "07975 586976"
      },
      {
        "name": "Ryan Lowes",
        "role": "Operations Manager",
        "email": "r.lowes@cawarden.com",
        "phone": "07379 941411"
      },
      {
        "name": "Sam Crooks",
        "role": "Contracts Director",
        "email": "s.crooks@cawarden.com",
        "phone": "07973 320720"
      },
      {
        "name": "William Crooks",
        "role": "Managing Director",
        "email": "william.crooks1@btconnect.com"
      }
    ]
  },
  {
    "id": 154,
    "name": "Caxton Builders (Midlands) Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adrian Gough",
        "role": "Site Manager",
        "email": "adrian@caxtonbuilders.com",
        "phone": "07557 682615"
      },
      {
        "name": "Andy Evans",
        "role": "Contract Manager",
        "email": "info@caxtonmande.com",
        "phone": "07741 406520"
      },
      {
        "name": "Andy Townshend",
        "role": "Commercial Director",
        "email": "andyt@caxtonbuilders.com"
      },
      {
        "name": "Carl Mousley",
        "role": "Contracts Manager",
        "email": "carl@caxtonbuilder.com",
        "phone": "7968991217.0"
      },
      {
        "name": "Chris Bellamy",
        "role": "Director",
        "email": "chris@caxton-group.co.uk"
      },
      {
        "name": "Chris Hall",
        "role": "Project Manager",
        "email": "chris@caxtonbuilders.com"
      },
      {
        "name": "Gareth Williamson",
        "role": "Contracts Manager",
        "email": "gareth@caxtonbuilders.com",
        "phone": "07985 275233"
      },
      {
        "name": "Ian Knight",
        "role": "Managing Director",
        "email": "iank@caxtonbuilders.com",
        "phone": "07884 537566"
      },
      {
        "name": "Ivan Sharpe",
        "role": "Contracts Manager",
        "email": "ivan@caxtonbuilders.com",
        "phone": "07968 999770"
      },
      {
        "name": "John Flynn",
        "role": "Construction Director",
        "email": "johnflynn@caxtonbuilders.com",
        "phone": "7515363157.0"
      },
      {
        "name": "Kevin Grocott",
        "role": "Site Manager",
        "email": "kevin@caxtonbuilders.com"
      },
      {
        "name": "Matt Prime",
        "email": "matt@caxtonbuilders.com"
      },
      {
        "name": "Mike Walton",
        "role": "Contracts Manager",
        "email": "mike.walton@caxtonbuilders.com",
        "phone": "07956 616950"
      },
      {
        "name": "Nigel Lynch",
        "role": "Senior Building Manager",
        "email": "nigel.lynch@caxtonbuilders.com"
      },
      {
        "name": "Sam Selby",
        "role": "Quantity Surveyor",
        "email": "sam@caxtonfacades.com",
        "phone": "07795 384437"
      },
      {
        "name": "Scott Millington",
        "role": "Operations Director",
        "email": "scott@caxtonbuilders.com"
      },
      {
        "name": "Steve Hadley",
        "role": "Quantity Surveyor",
        "email": "steve@caxtonbuilders.com",
        "phone": "07968 991215"
      },
      {
        "name": "Tiffany Hardwick",
        "role": "Quantity Surveyor",
        "email": "tiffany@caxtonbuilders.com",
        "phone": "07385 313830"
      },
      {
        "name": "Tom Prince",
        "role": "Contracts Manager"
      }
    ]
  },
  {
    "id": 155,
    "name": "CB Groundworks & Construction",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Kevin Johnson",
        "role": "Director",
        "email": "cbgroundworks@yahoo.com",
        "phone": "07791 625279"
      }
    ]
  },
  {
    "id": 156,
    "name": "CCL Interiors",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Danielle Greer",
        "role": "Manager",
        "email": "danielle@ccl-interiors.com",
        "phone": "07547 185398"
      },
      {
        "name": "Evan Ferrier",
        "role": "Quantity Surveyor",
        "email": "evan@ccl-interiors.com"
      },
      {
        "name": "Gary Duffy",
        "role": "Contracts Manager",
        "email": "gary@ccl-interiors.com"
      },
      {
        "name": "James Larmour",
        "role": "Senior Quantity Surveyor",
        "email": "james.larmour@ccl-interiors.com",
        "phone": "07717 606061"
      },
      {
        "name": "John Hill",
        "role": "Site Manager",
        "email": "john.hill@ccl-interiors.com"
      },
      {
        "name": "John Kang",
        "role": "Site Manager",
        "email": "john@ccl-interiors.com"
      },
      {
        "name": "Mark Whiteford",
        "role": "Quantity Surveyor",
        "email": "mark@ccl-interiors.com"
      },
      {
        "name": "Philip Cullen",
        "role": "Contract Manager",
        "email": "philip.cullen@ccl-interiors.com"
      },
      {
        "name": "Ronny Graham",
        "role": "Contracts Manager",
        "email": "ronny.graham@ccl-interiors.com",
        "phone": "07788 210071"
      },
      {
        "name": "Ross McDonaghall",
        "role": "Contract Manager",
        "email": "ross.mcdonaghall@ccl-interiors.com",
        "phone": "07388 949824"
      },
      {
        "name": "Ross McGonigle",
        "role": "Director",
        "email": "ross@ccl-interiors.com"
      }
    ]
  },
  {
    "id": 157,
    "name": "CCL Interiors Limited",
    "disciplines": [
      "Dry Lining & Ceilings",
      "Fit-Out & Interiors"
    ],
    "contacts": [
      {
        "name": "Aidan Byrne",
        "role": "Site Supervisor",
        "email": "aidan@ccl-interiors.com"
      },
      {
        "name": "Chris Kelly",
        "role": "Site Supervisor",
        "email": "chris.kelly@ccl-interiors.com",
        "phone": "07384 353246"
      },
      {
        "name": "Danielle Greer",
        "role": "Manager",
        "email": "danielle@ccl-interiors.com",
        "phone": "07547 185398"
      },
      {
        "name": "Evan Ferrier",
        "role": "Quantity Surveyor",
        "email": "evan@ccl-interiors.com"
      },
      {
        "name": "Gary Duffy",
        "role": "Contracts Manager",
        "email": "gary@ccl-interiors.com"
      },
      {
        "name": "Hayley Reilly",
        "role": "Office Manager",
        "email": "hayley@ccl-interiors.com"
      },
      {
        "name": "James Larmour",
        "role": "Senior Quantity Surveyor",
        "email": "james.larmour@ccl-interiors.com",
        "phone": "07717 606061"
      },
      {
        "name": "John Hill",
        "role": "Site Manager",
        "email": "john.hill@ccl-interiors.com"
      },
      {
        "name": "John Kang",
        "role": "Site Manager",
        "email": "john@ccl-interiors.com"
      },
      {
        "name": "John Tang",
        "role": "Contract Manager",
        "email": "john.tang@ccl-interiors.com"
      },
      {
        "name": "Mark Whiteford",
        "role": "Quantity Surveyor",
        "email": "mark@ccl-interiors.com"
      },
      {
        "name": "Philip Cullen",
        "role": "Contract Manager",
        "email": "philip.cullen@ccl-interiors.com"
      },
      {
        "name": "Ronny Graham",
        "role": "Contracts Manager",
        "email": "ronny.graham@ccl-interiors.com",
        "phone": "07788 210071"
      },
      {
        "name": "Ross McDonaghall",
        "role": "Contract Manager",
        "email": "ross.mcdonaghall@ccl-interiors.com",
        "phone": "07388 949824"
      },
      {
        "name": "Ross McGonigle",
        "role": "Director",
        "email": "ross@ccl-interiors.com"
      },
      {
        "name": "Chris Kelly",
        "role": "Site Supervisor",
        "phone": "07384 353246"
      },
      {
        "name": "James Larmour",
        "role": "Senior Quantity Surveyor",
        "phone": "7717606061.0"
      },
      {
        "name": "Ronny Graham",
        "role": "Contracts Manager",
        "phone": "07788 210071"
      },
      {
        "name": "Ross McDonaghall",
        "role": "Contract Manager",
        "phone": "07388 949824"
      }
    ]
  },
  {
    "id": 158,
    "name": "CCS Facades",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Chris Dewar",
        "role": "Quantity Surveyor",
        "email": "chrisd@ccsbuilding.co.uk"
      },
      {
        "name": "Ian Sessions",
        "role": "Contract Manager",
        "email": "ians@ccsbuilding.co.uk"
      },
      {
        "name": "Laurence Ingram",
        "role": "Contracts Manager",
        "email": "laurencei@ccsbuilding.co.uk"
      },
      {
        "name": "Phil Chorlton",
        "role": "Director",
        "email": "philc@ccsbuilding.co.uk",
        "phone": "07736 619035"
      },
      {
        "name": "Ryan O'Kane",
        "role": "Senior Quantity Surveyor",
        "email": "ryano@ccsbuilding.co.uk"
      }
    ]
  },
  {
    "id": 159,
    "name": "CCS Facades Limited",
    "disciplines": [
      "Facades & Cladding"
    ],
    "contacts": [
      {
        "name": "Chris Dewar",
        "role": "Quantity Surveyor",
        "email": "chris.dewar@ccsbuilding.co.uk"
      },
      {
        "name": "Ian Sessions",
        "role": "Contract Manager",
        "email": "ians@ccsbuilding.co.uk"
      },
      {
        "name": "Laurence Ingram",
        "role": "Contracts Manager",
        "email": "laurencei@ccsbuilding.co.uk"
      },
      {
        "name": "Phil Chorlton",
        "role": "Director",
        "email": "phil.chorlton@ccsbuilding.co.uk",
        "phone": "07736 619035"
      },
      {
        "name": "Ryan O'Kane",
        "role": "Senior Quantity Surveyor",
        "email": "ryano@ccsbuilding.co.uk"
      }
    ]
  },
  {
    "id": 160,
    "name": "CCS Groundworks",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Bill Sander",
        "role": "Contracts Manager",
        "email": "bill.sander@ccscontracts.co.uk"
      },
      {
        "name": "Dan O'Dell",
        "role": "Buyer",
        "email": "dan@ccscontracts.co.uk"
      },
      {
        "name": "Gary Tunnicliffe",
        "role": "Contract Manager",
        "email": "gary@ccscontracts.co.uk"
      },
      {
        "name": "James Rimmer",
        "role": "Senior Quantity Surveyor",
        "email": "james.rimmer@ccscontracts.co.uk"
      },
      {
        "name": "Jim Rogers",
        "role": "Director",
        "email": "jim.rogers@ccscontracts.co.uk"
      }
    ]
  },
  {
    "id": 161,
    "name": "CDL Limited",
    "disciplines": [
      "Dry Lining & Ceilings",
      "Fit-Out & Interiors"
    ],
    "contacts": [
      {
        "name": "Mark Hoey",
        "role": "Contracts Manager",
        "email": "mark@cdl-ltd.co.uk",
        "phone": "7772343761.0"
      },
      {
        "name": "Sean O'Halloran",
        "role": "Senior Commercial Manager",
        "email": "sean@cdl-ltd.co.uk",
        "phone": "7595655251.0"
      },
      {
        "name": "Thomas O'Hallaron",
        "role": "Contracts Manager",
        "email": "thomas@cdl-ltd.co.uk",
        "phone": "0777 3336974"
      }
    ]
  },
  {
    "id": 162,
    "name": "Central Essex Interiors Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adrian Smith",
        "role": "Site Supervisor",
        "email": "adrian.smith@central-essex-interiors.co.uk"
      },
      {
        "name": "Fraser Keep",
        "role": "Commercial Director",
        "email": "fraserkeep@central-essex-interiors.co.uk",
        "phone": "07585 806973"
      }
    ]
  },
  {
    "id": 163,
    "name": "Central Piling Limited",
    "disciplines": [
      "Piling"
    ],
    "contacts": [
      {
        "name": "Ashley Drew",
        "role": "Buyer",
        "email": "ashley.drew@centralpiling.com"
      },
      {
        "name": "Colette Garmony",
        "role": "Buyer",
        "email": "collettegarmory@centralpiling.com",
        "phone": "7354864526.0"
      },
      {
        "name": "Colin Newman",
        "role": "Operations Manager",
        "email": "colinnewman@centralpiling.com",
        "phone": "07976 219209"
      },
      {
        "name": "Ian Todd",
        "role": "Site Supervisor",
        "email": "iantodd@centralpiling.com",
        "phone": "07976 219218"
      },
      {
        "name": "Lee Durrant",
        "role": "Operations Manager",
        "email": "lee.durrant@centralpiling.com"
      },
      {
        "name": "Leia Amos",
        "role": "Administrator",
        "email": "leiaamos@centralpiling.com",
        "phone": "07966 401595"
      },
      {
        "name": "Paige Fullgrave",
        "role": "Buyer",
        "email": "paigefullgrave@centralpiling.com"
      },
      {
        "name": "Roger Cox",
        "role": "Contracts Director",
        "email": "rogercox@centralpiling.com"
      },
      {
        "name": "Sam Cabbani",
        "role": "Estimating Director",
        "email": "samcabbani@centralpiling.com",
        "phone": "7772305608.0"
      },
      {
        "name": "Sam Nichol",
        "role": "Contract Manager",
        "email": "sam.nichol@centralpiling.com"
      },
      {
        "name": "Steve Hadley",
        "role": "Managing Director",
        "email": "stevehadley@centralpiling.com",
        "phone": "07976 214621"
      }
    ]
  },
  {
    "id": 164,
    "name": "Century Facades",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Mark Harris",
        "role": "Business Development Manager",
        "email": "mark.harris@centuryfacades.co.uk",
        "phone": "07841 494520"
      },
      {
        "name": "Nigel Richards",
        "role": "Senior Project Manager",
        "email": "nigel.richards@centuryfacades.co.uk"
      },
      {
        "name": "Tim Lovell",
        "role": "Operations Director",
        "email": "tim.lovell@centuryfacades.co.uk",
        "phone": "07885 826519"
      }
    ]
  },
  {
    "id": 165,
    "name": "Century Facades Limited",
    "disciplines": [
      "Facades & Cladding"
    ],
    "contacts": [
      {
        "name": "Graham Hackley",
        "role": "Director",
        "email": "graham.hackley@centuryfacades.co.uk",
        "phone": "07811 531427"
      },
      {
        "name": "Luke Davies",
        "role": "Contracts Manager",
        "email": "luke.davies@centuryfacades.co.uk",
        "phone": "07703 473658"
      },
      {
        "name": "Mark Harris",
        "role": "Business Development Manager",
        "email": "mark.harris@centuryfacades.co.uk",
        "phone": "7841494520.0"
      },
      {
        "name": "Nigel Richards",
        "role": "Senior Project Manager",
        "phone": "07889 567453"
      },
      {
        "name": "Noah Bickle",
        "role": "Assistant Site Manager",
        "email": "noah.bickle@centryfacades.co.uk",
        "phone": "07736 998695"
      },
      {
        "name": "Raja Youchaa",
        "role": "Project Manager",
        "email": "raja.youchaa@centuryfacades.co.uk",
        "phone": "7805556159.0"
      },
      {
        "name": "Sue Aldrich",
        "role": "Group Finance Director",
        "email": "sue.aldrich@centryfacades.co.uk",
        "phone": "07967 981063"
      },
      {
        "name": "Tim Lovell",
        "role": "Operations Director",
        "phone": "07885 826519"
      },
      {
        "name": "Tomasz Jurewicz",
        "role": "Project Manager",
        "email": "tomasz.jurewicz@centuryfacades.co.uk",
        "phone": "07841 467095"
      }
    ]
  },
  {
    "id": 166,
    "name": "CG Reynolds Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Chris Reynolds",
        "role": "Director",
        "email": "chris.reynolds@cgreynolds.co.uk"
      },
      {
        "name": "Craig Griffiths",
        "role": "Project Manager",
        "email": "craig.griffiths@cgreynolds.co.uk"
      },
      {
        "name": "Gareth Fletcher",
        "role": "Pre Construction Manager",
        "email": "gareth.fletcher@cgreynolds.co.uk"
      },
      {
        "name": "Janette Bowram",
        "role": "Administrator",
        "email": "janette@cgreynolds.co.uk"
      },
      {
        "name": "John Reynolds",
        "role": "Site Manager",
        "email": "john.reynolds@cgreynolds.co.uk"
      },
      {
        "name": "Joshua Subhan",
        "role": "Site Manager",
        "email": "joshua.subhan@cgreynolds.co.uk"
      },
      {
        "name": "Keith Burton",
        "role": "Quantity Surveyor",
        "email": "keith.burton@cgreynolds.co.uk"
      },
      {
        "name": "Kieran Boxwell",
        "role": "Managing Director",
        "email": "kieran.boxwell@cgreynolds.co.uk",
        "phone": "07817 966768"
      },
      {
        "name": "Leigh Reading",
        "role": "Quantity Surveyor",
        "email": "leigh.reading@cgreynolds.co.uk"
      },
      {
        "name": "Peter Tooze",
        "role": "Senior Quantity Surveyor",
        "email": "peter.tooze@cgreynolds.co.uk"
      },
      {
        "name": "Simon Creed",
        "role": "Contracts Manager",
        "email": "simon.creed@cgreynolds.co.uk"
      },
      {
        "name": "Steven Upton",
        "role": "Contracts Manager",
        "email": "steven.upton@cgreynolds.co.uk"
      }
    ]
  },
  {
    "id": 167,
    "name": "CGM Brickwork",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Chris Walling",
        "role": "Director",
        "email": "chris.walling@cgmbrickworkltd.co.uk"
      }
    ]
  },
  {
    "id": 168,
    "name": "CGM Brickwork Limited",
    "disciplines": [
      "Brickwork"
    ],
    "contacts": [
      {
        "name": "Chris Walling",
        "role": "Director",
        "email": "chris.walling@cgmbrickworkltd.co.uk"
      }
    ]
  },
  {
    "id": 169,
    "name": "Chine Brickwork & Development",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alex Samoila",
        "role": "Project Manager",
        "email": "alex.samoila@chinebrickwork.co.uk"
      },
      {
        "name": "Gheorge Pitu",
        "role": "Site Manager",
        "email": "gheorge.pitu@chinebrickwork.co.uk"
      },
      {
        "name": "Jinal Shah",
        "role": "Senior Quantity Surveyor",
        "email": "jinal.shah@chinebrickwork.co.uk"
      },
      {
        "name": "Phil Watson",
        "role": "Managing Director",
        "email": "phil.watson@chinebrickwork.co.uk",
        "phone": "07966 131578"
      },
      {
        "name": "Richard Wilson",
        "role": "Contracts Manager",
        "email": "richard.wilson@chinebrickwork.co.uk"
      },
      {
        "name": "Tim Chase",
        "role": "Commercial Director",
        "email": "tim.chase@chinebrickwork.co.uk"
      }
    ]
  },
  {
    "id": 170,
    "name": "Chine Brickwork & Development Limited",
    "disciplines": [
      "Brickwork"
    ],
    "contacts": [
      {
        "name": "Alex Samoila",
        "role": "Project Manager",
        "email": "alex.samoila@chinebrickwork.co.uk"
      },
      {
        "name": "Chris Hills",
        "role": "Supervisor",
        "email": "chris.hills@chinebrickwork.co.uk"
      },
      {
        "name": "Gheorge Pitu",
        "role": "Site Manager",
        "email": "gheorge.pitu@chinebrickwork.co.uk"
      },
      {
        "name": "Jinal Shah",
        "role": "Senior Quantity Surveyor",
        "email": "jinal.shah@chinebrickwork.co.uk"
      },
      {
        "name": "Phil Watson",
        "role": "Managing Director",
        "email": "phil.watson@chinebrickwork.co.uk",
        "phone": "07966 131578"
      },
      {
        "name": "Richard Wilson",
        "role": "Contracts Manager",
        "email": "richard.wilson@chinebrickwork.co.uk"
      },
      {
        "name": "Simon Franzofi",
        "role": "Site Foreman",
        "email": "simon.franzofi@chinebrickwork.co.uk"
      },
      {
        "name": "Tim Chase",
        "role": "Commercial Director",
        "email": "tim.chase@chinebrickwork.co.uk"
      },
      {
        "name": "Tom Willis",
        "role": "tom.willis@chinebrickwork.co.uk"
      },
      {
        "name": "Tom Willis",
        "email": "tom.willis@chinebrickwork.co.uk"
      }
    ]
  },
  {
    "id": 171,
    "name": "City Brickwork",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andrea Leocata",
        "role": "Contracts Manager",
        "email": "andrea.leocata@citybrickwork.co.uk"
      },
      {
        "name": "Brennan McDonnell",
        "role": "Quality Manager",
        "email": "brennan.mcdonnell@citybrickwork.co.uk",
        "phone": "07984 354460"
      },
      {
        "name": "Charlie Wilmond",
        "role": "Commercial Director",
        "email": "charlie.wilmond@citybrickwork.co.uk",
        "phone": "07790 002745"
      },
      {
        "name": "Gary Williams",
        "role": "Contract Manager",
        "email": "gary.williams@citybrickwork.co.uk"
      },
      {
        "name": "Jason Bedford",
        "role": "Contract Manager",
        "email": "jason.bedford@citybrickwork.co.uk"
      },
      {
        "name": "Mark McDonnell",
        "role": "Contracts Manager",
        "email": "mark.mcdonnell@citybrickwork.co.uk",
        "phone": "07852 463433"
      },
      {
        "name": "Neil Hatsell",
        "role": "Director",
        "email": "neil.hatsell@citybrickwork.co.uk"
      },
      {
        "name": "Tom Murphy",
        "role": "Contracts Manager",
        "email": "tom.murphy@citybrickwork.co.uk",
        "phone": "07983 018724"
      }
    ]
  },
  {
    "id": 172,
    "name": "City Brickwork (UK) Limited",
    "disciplines": [
      "Brickwork"
    ],
    "contacts": [
      {
        "name": "Andrea Leocata",
        "role": "Contracts Manager",
        "email": "andrea.leocata@citybrickwork.co.uk"
      },
      {
        "name": "Brennan McDonnell",
        "role": "Quality Manager",
        "email": "brennan.mcdonnell@citybrickwork.co.uk",
        "phone": "07984 354460"
      },
      {
        "name": "Charlie Wilmond",
        "role": "Commercial Director",
        "email": "charlie.wilmond@citybrickwork.co.uk",
        "phone": "07790 002745"
      },
      {
        "name": "Gary Williams",
        "role": "Contract Manager",
        "email": "gary.williams@citybrickwork.co.uk"
      },
      {
        "name": "Jason Bedford",
        "role": "Contract Manager",
        "email": "jason.bedford@citybrickwork.co.uk"
      },
      {
        "name": "Mark McDonnell",
        "role": "Contracts Manager",
        "email": "mark.mcdonnell@citybrickwork.co.uk",
        "phone": "07852 463433"
      },
      {
        "name": "Neil Hatsell",
        "role": "Director",
        "email": "neil.hatsell@citybrickwork.co.uk"
      },
      {
        "name": "Tom Murphy",
        "email": "tom.murphy@citybrickwork.co.uk",
        "phone": "07983 018724"
      }
    ]
  },
  {
    "id": 173,
    "name": "City Demolition Contractors (Birmingham) Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andy Lester",
        "role": "Contract Manager",
        "email": "andy.lester@citydemolition.co.uk",
        "phone": "07587 430760"
      },
      {
        "name": "Dan Highfield",
        "role": "Quantity Surveyor",
        "email": "dan.highfield@citydemolition.co.uk",
        "phone": "07788 442231"
      },
      {
        "name": "Darren Grainger",
        "role": "Site Foreman",
        "email": "darren.grainger@citydemolition.co.uk"
      },
      {
        "name": "Darren Lynch",
        "role": "Site Manager",
        "email": "darren.lynch@citydemolition.co.uk",
        "phone": "07788 442236"
      },
      {
        "name": "Mark Doyle",
        "role": "Managing Director",
        "email": "mark.doyle@citydemolition.co.uk",
        "phone": "07788 442230"
      },
      {
        "name": "Martin Kettle",
        "role": "Health and Safety Advisor",
        "email": "martin.kettle@citydemolition.co.uk"
      },
      {
        "name": "Paul Macrae",
        "role": "Associate Director",
        "email": "paul.macrae@citydemolition.co.uk",
        "phone": "07741 292855"
      },
      {
        "name": "Richard Jonas",
        "role": "Commercial Director",
        "email": "richard.jonas@citydemolition.co.uk",
        "phone": "07979 083061"
      },
      {
        "name": "Russell Tonks",
        "role": "Site Manager",
        "email": "russell.tonks@citydemolition.co.uk"
      },
      {
        "name": "Stuart Grainger",
        "role": "Site Manager",
        "email": "stuart.grainger@citydemolition.co.uk",
        "phone": "07788 442226"
      },
      {
        "name": "Thomas Doyle",
        "role": "Health and Safety Manager",
        "email": "thomas.doyle@citydemolition.co.uk",
        "phone": "07557 005522"
      }
    ]
  },
  {
    "id": 174,
    "name": "City Grey Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Liam Panico",
        "role": "Buyer",
        "email": "liam.panico@citygrey.co.uk"
      }
    ]
  },
  {
    "id": 175,
    "name": "City Lifting",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Bob Jones",
        "role": "Director",
        "email": "bob.jones@citylifting.co.uk",
        "phone": "07976 927091"
      },
      {
        "name": "Sam Jepson",
        "role": "Senior Development Director",
        "email": "samjepson@citylifting.co.uk"
      },
      {
        "name": "Sam Thompson",
        "role": "Contracts Manager",
        "email": "samthompson@citylifting.co.uk"
      },
      {
        "name": "Simon Courtney",
        "role": "Contracts Manager",
        "email": "simon.courtney@citylifting.co.uk"
      },
      {
        "name": "Trevor Jepson",
        "role": "Managing Director",
        "email": "trevor.jepson@citylifting.co.uk"
      }
    ]
  },
  {
    "id": 176,
    "name": "CJ O'Shea Group Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Barry O'Shea",
        "role": "Contracts Manager",
        "email": "barry.oshea@oshea.co.uk",
        "phone": "07970 246819"
      },
      {
        "name": "Conor Hart",
        "role": "Quantity Surveyor",
        "email": "conor.hart@oshea.co.uk"
      },
      {
        "name": "Dhiresh Chhabhadiya",
        "role": "Quantity Surveyor",
        "email": "dhiresh.chhabhadiya@oshea.co.uk"
      },
      {
        "name": "Fintan Hallihan",
        "role": "Project Manager",
        "email": "fintan.hallihan@oshea.co.uk",
        "phone": "07970 246924"
      },
      {
        "name": "John McGregor",
        "role": "Buyer",
        "email": "john.mcgregor@oshea.co.uk"
      },
      {
        "name": "Leo Hallihan",
        "role": "Site Manager",
        "email": "leo.hallihan@oshea.co.uk",
        "phone": "07912 651091"
      },
      {
        "name": "Mark King",
        "role": "Quantity Surveyor",
        "email": "mark.king@oshea.co.uk"
      },
      {
        "name": "Michael Riley",
        "role": "Site Manager",
        "email": "michael.riley@oshea.co.uk"
      },
      {
        "name": "Michael Robinson",
        "role": "Quantity Surveyor",
        "email": "michael.robinson@oshea.co.uk",
        "phone": "7731791692.0"
      },
      {
        "name": "Patrick O'Sullivan",
        "role": "Project Manager",
        "email": "patrick.osullivan@oshea.co.uk"
      },
      {
        "name": "Sam Mizen",
        "role": "Site Manager",
        "email": "sam.mizen@oshea.co.uk",
        "phone": "7788781770.0"
      },
      {
        "name": "Sean Harvey",
        "role": "Quantity Surveyor",
        "email": "sean.harvey@oshea.co.uk",
        "phone": "7970246424.0"
      },
      {
        "name": "Alan Coleman",
        "role": "Project Manager",
        "email": "alan.coleman@oshea.co.uk"
      },
      {
        "name": "Harry Sidhu",
        "role": "Commercial Manager",
        "email": "harry.sidhu@oshea.co.uk",
        "phone": "07970 246834"
      },
      {
        "name": "Melis Shamoon",
        "role": "Site Manager",
        "email": "melis.shamoon@oshea.co.uk"
      },
      {
        "name": "Vasilieos Maligkos",
        "role": "Site Manager",
        "email": "vasilieos.maligkos@oshea.co.uk"
      }
    ]
  },
  {
    "id": 177,
    "name": "Clarke Facades",
    "disciplines": [
      "Facades & Cladding"
    ],
    "contacts": [
      {
        "name": "Ian Higgins",
        "role": "Head of Commercial",
        "email": "i.higgins@mclarke.co.uk"
      },
      {
        "name": "Jordan Anderson",
        "role": "Projects Manager",
        "email": "j.anderson@mclarke.co.uk"
      }
    ]
  },
  {
    "id": 178,
    "name": "Clean Slate Demolition",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Nick Harvey",
        "role": "Managing Director",
        "email": "nick.harvey@cleanslatedemolition.co.uk"
      },
      {
        "name": "Paul Beck",
        "role": "Contracts Manager",
        "email": "paul@cleanslatedemolition.co.uk",
        "phone": "07970 810558"
      }
    ]
  },
  {
    "id": 179,
    "name": "Cleveland Steel & Tubes Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Roy Fishwick",
        "role": "Director",
        "email": "roy.fishwick@cleveland-steel.com"
      }
    ]
  },
  {
    "id": 180,
    "name": "Clifford Devlin",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Abbas Kefayati",
        "role": "Quantity Surveyor",
        "email": "abbas.kefayati@clifford-devlin.co.uk",
        "phone": "07717 867922"
      },
      {
        "name": "Alex Deysell",
        "role": "Contracts Manager",
        "email": "alex.deysell@clifford-devlin.co.uk",
        "phone": "07917 895497"
      },
      {
        "name": "Courtney Howe",
        "role": "Contracts Manager",
        "email": "courtney.howe@clifford-devlin.co.uk"
      },
      {
        "name": "Derek Aslett",
        "role": "Commercial Director",
        "email": "derek.aslett@clifford-devlin.co.uk"
      },
      {
        "name": "Ian O'Connor",
        "role": "Health and Safety Manager",
        "email": "ian.oconnor@clifford-devlin.co.uk",
        "phone": "07880 794381"
      },
      {
        "name": "Jason Sparrow",
        "role": "Senior Quantity Surveyor",
        "email": "jason.sparrow@clifford-devlin.co.uk",
        "phone": "07933 886892"
      },
      {
        "name": "Les Rose",
        "role": "Operations Director",
        "email": "lpr@clifford-devlin.co.uk",
        "phone": "07836 554041"
      },
      {
        "name": "Liam Hennessey",
        "role": "Head of Operations",
        "email": "liam.hennessey@clifford-devlin.co.uk",
        "phone": "07720 680422"
      },
      {
        "name": "Mark Collins",
        "role": "Contracts Manager",
        "email": "mark.collins@clifford-devlin.co.uk"
      },
      {
        "name": "Nick Atkinson",
        "role": "Quantity Surveyor",
        "email": "nick.atkinson@clifford-devlin.co.uk"
      },
      {
        "name": "Sebastian Kiszkis",
        "role": "Demolition Manager",
        "email": "sebastian.kiszkis@clifford-devlin.co.uk",
        "phone": "07808 798789"
      },
      {
        "name": "Tim Clifford",
        "role": "Managing Director",
        "email": "tpc@clifford-devlin.co.uk",
        "phone": "07831 569529"
      }
    ]
  },
  {
    "id": 181,
    "name": "Clifford Devlin Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Abbas Kefayati",
        "role": "Quantity Surveyor",
        "email": "abbas.kefayati@clifford-devlin.co.uk",
        "phone": "07717 867922"
      },
      {
        "name": "Alex Deysell",
        "role": "Contracts Manager",
        "email": "alex.deysell@clifford-devlin.co.uk",
        "phone": "07917 895497"
      },
      {
        "name": "Courtney Howe",
        "role": "Contracts Manager",
        "email": "courtney.howe@clifford-devlin.co.uk"
      },
      {
        "name": "Derek Aslett",
        "role": "Commercial Director",
        "email": "derek.aslett@clifford-devlin.co.uk"
      },
      {
        "name": "Ian O'Connor",
        "role": "Health and Safety Manager",
        "email": "ian.oconnor@clifford-devlin.co.uk",
        "phone": "07880 794381"
      },
      {
        "name": "Jason Sparrow",
        "role": "Senior Quantity Surveyor",
        "email": "jason.sparrow@clifford-devlin.co.uk",
        "phone": "07933 886892"
      },
      {
        "name": "John Dempsey",
        "role": "Supervisor",
        "email": "john.dempsey@clifford-devlin.co.uk",
        "phone": "07557 372229"
      },
      {
        "name": "Les Rose",
        "role": "Operations Director",
        "email": "lpr@clifford-devlin.co.uk",
        "phone": "07836 554041"
      },
      {
        "name": "Liam Hennessey",
        "role": "Head of Operations",
        "email": "liam.hennessey@clifford-devlin.co.uk",
        "phone": "07720 680422"
      },
      {
        "name": "Mark Collins",
        "role": "Contracts Manager",
        "email": "mark.collins@clifford-devlin.co.uk"
      },
      {
        "name": "Nick Atkinson",
        "role": "Quantity Surveyor",
        "email": "nick.atkinson@clifford-devlin.co.uk"
      },
      {
        "name": "Sebastian Kiszkis",
        "role": "Demolition Manager",
        "email": "sebastian.kiszkis@clifford-devlin.co.uk",
        "phone": "07808 798789"
      },
      {
        "name": "Tim Clifford",
        "role": "Managing Director",
        "email": "tpc@clifford-devlin.co.uk",
        "phone": "07831 569529"
      }
    ]
  },
  {
    "id": 182,
    "name": "Cognition Land & Water Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andy O'Dea",
        "role": "Technical Director",
        "email": "andy.odea@cognitionlandandwater.com"
      },
      {
        "name": "Carl Sharman",
        "role": "Project Manager",
        "email": "carl.sharman@cognitionlandandwater.com"
      },
      {
        "name": "Charlie Jarvis",
        "role": "Site Manager",
        "email": "charlie.jarvis@cognitionlandandwater.com"
      },
      {
        "name": "David Skinner",
        "role": "Contracts Manager",
        "email": "david.skinner@cognitionlandandwater.com"
      },
      {
        "name": "Jon Goddard",
        "role": "Technical Director",
        "email": "jon.goddard@cognitionlandandwater.com"
      },
      {
        "name": "Rick Willemse",
        "role": "Project Manager",
        "email": "rick.willemse@cognitionlandandwater.com"
      },
      {
        "name": "Rob Fox",
        "role": "Project Director",
        "email": "robert.fox@cognitionltd.com",
        "phone": "07786 968278"
      }
    ]
  },
  {
    "id": 183,
    "name": "Coinford Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Aisling Folan",
        "role": "Quantity Surveyor",
        "email": "aislingfolan@coinford.co.uk"
      },
      {
        "name": "Alan McGrady",
        "role": "Project Manager",
        "email": "alanmcgrady@coinford.co.uk"
      },
      {
        "name": "Alex Scott",
        "role": "Site Manager",
        "email": "alexscott@coinford.co.uk"
      },
      {
        "name": "Fergal O'Connor",
        "role": "Contracts Manager",
        "email": "fergaloconnor@coinford.co.uk"
      },
      {
        "name": "Jack Todd",
        "role": "General Foreman",
        "email": "jacktodd@coinford.co.uk"
      },
      {
        "name": "James Robinson",
        "role": "Site Manager",
        "email": "jamesrobinson@coinford.co.uk"
      },
      {
        "name": "Jamie Knox",
        "role": "Quantity Surveyor",
        "email": "jamieknox@coinford.co.uk"
      },
      {
        "name": "Lauren Hutchinson",
        "role": "Buyer",
        "email": "laurenhutchinson@coinford.co.uk"
      },
      {
        "name": "Louie Corne",
        "role": "Site Engineer",
        "email": "louiecorne@coinford.co.uk"
      },
      {
        "name": "Lutfi Dauti",
        "role": "Site Manager",
        "email": "lutfidauti@coinford.co.uk"
      },
      {
        "name": "Martin Coleen",
        "role": "Surveyor",
        "email": "martincoleen@coinford.co.uk"
      },
      {
        "name": "Matt Hilton",
        "role": "Site Manager",
        "email": "matthilton@coinford.co.uk"
      },
      {
        "name": "Mike Harrison",
        "role": "Contracts Manager",
        "email": "mikeharrison@coinford.co.uk"
      },
      {
        "name": "Mike Hickey",
        "role": "Director",
        "email": "mikehickey@coinford.co.uk"
      },
      {
        "name": "Nevis Dubrava",
        "role": "Site Supervisor",
        "email": "nevisdubrava@coinford.co.uk"
      },
      {
        "name": "Oliver Bartram",
        "role": "Commercial Manager",
        "email": "oliverbartram@coinford.co.uk"
      },
      {
        "name": "Oscar Usher",
        "role": "Junior Engineer",
        "email": "oscarusher@coinford.co.uk"
      },
      {
        "name": "Paddy Barrett",
        "role": "Contracts Manager",
        "email": "paddybarrett@coinford.co.uk"
      },
      {
        "name": "Panos Panayiotou",
        "role": "Construction Director",
        "email": "panospanayiotou@coinford.co.uk",
        "phone": "7909976384.0"
      },
      {
        "name": "Pat English",
        "role": "Site Manager",
        "email": "patenglish@coinford.co.uk",
        "phone": "7818621090.0"
      },
      {
        "name": "Paul Dean",
        "role": "Site Manager",
        "email": "pauldean@coinford.co.uk"
      },
      {
        "name": "Paul McGuinn",
        "role": "Quantity Surveyor",
        "email": "paulmcguinn@coinford.co.uk"
      },
      {
        "name": "Paul Timlin",
        "role": "Group Managing Director",
        "email": "paultimlin@coinford.co.uk"
      },
      {
        "name": "Peter Mulgrew",
        "role": "Project Manager",
        "email": "petermulgrew@coinford.co.uk",
        "phone": "07880 713642"
      },
      {
        "name": "Scott Lisle",
        "role": "Project Manager",
        "email": "scottlisle@coinford.co.uk"
      },
      {
        "name": "Sean McCarthy",
        "role": "Quantity Surveyor",
        "email": "seanmccarthy@coinford.co.uk"
      },
      {
        "name": "Stef Clough",
        "role": "Contracts Manager",
        "email": "stefclough@coinford.co.uk"
      },
      {
        "name": "Steph Clough",
        "role": "Contracts Manager",
        "email": "stephclough@coinford.co.uk"
      },
      {
        "name": "Steve Hughes",
        "role": "Quantity Surveyor",
        "email": "stevehughes@coinford.co.uk"
      },
      {
        "name": "Tim Scrivens",
        "role": "Buyer",
        "email": "timscrivens@coinford.co.uk"
      }
    ]
  },
  {
    "id": 184,
    "name": "Cold Clad Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Ben Nash",
        "role": "Project Manager",
        "email": "ben.nash@coldclad.com"
      },
      {
        "name": "Gareth Pitman",
        "role": "Contracts Manager",
        "email": "gareth@coldclad.com",
        "phone": "07766 901621"
      },
      {
        "name": "George Brown",
        "email": "george.brown@coldclad.com",
        "phone": "07799 058968"
      },
      {
        "name": "Jon Pitman",
        "role": "Managing Director",
        "email": "jon@coldclad.com"
      },
      {
        "name": "Richard Cooke",
        "role": "Contracts Manager",
        "email": "richard.cooke@coldclad.com"
      },
      {
        "name": "Sean McGregor",
        "role": "Roofing Manager",
        "email": "sean@coldclad.com",
        "phone": "07425 356902"
      },
      {
        "name": "Simon Ray",
        "role": "Contracts Manager",
        "email": "simon@coldclad.com"
      },
      {
        "name": "Steven Darlington",
        "role": "Contracts Manager",
        "email": "steven.darlington@coldclad.com",
        "phone": "07909 077766"
      }
    ]
  },
  {
    "id": 185,
    "name": "Coleman & Company Specialist Cutting Services Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andy Crawford",
        "role": "Project Manager",
        "email": "andy.crawford@coleman-co.com",
        "phone": "7817263134.0"
      },
      {
        "name": "Anthony Christou",
        "role": "Project Manager",
        "email": "anthony.christou@coleman-co.com"
      },
      {
        "name": "Anthony Hoareau",
        "role": "Site Manager",
        "email": "anthony.hoareau@coleman-co.com",
        "phone": "7789965986.0"
      },
      {
        "name": "Bryan Bradshaw",
        "role": "Director",
        "email": "bryan.bradshaw@coleman-co.com",
        "phone": "7815054536.0"
      },
      {
        "name": "Christy O'Connor",
        "role": "Health & Safety Director",
        "email": "christy.oconnor@coleman-co.com",
        "phone": "7377532406.0"
      },
      {
        "name": "Danny Jones",
        "role": "Site Manager",
        "email": "danny.jones@coleman-co.com"
      },
      {
        "name": "Gareth Rowe",
        "role": "Operations Director",
        "email": "gareth.rowe@coleman-co.com"
      },
      {
        "name": "Gary Bracebridge",
        "role": "Site Manager",
        "email": "gary.bracebridge@coleman-co.com"
      },
      {
        "name": "James Doherty",
        "role": "Project Manager",
        "email": "james.doherty@coleman-group.co.uk"
      },
      {
        "name": "Josh Scriven",
        "role": "Contracts Manager",
        "email": "josh.scriven@coleman-co.com"
      },
      {
        "name": "Mark Carless",
        "role": "Contracts Manager",
        "email": "mark.carless@coleman-co.com",
        "phone": "7967047044.0"
      },
      {
        "name": "Peter Allen",
        "role": "Site Manager",
        "email": "peter.allen@coleman-co.com",
        "phone": "7738846332.0"
      }
    ]
  },
  {
    "id": 186,
    "name": "Collard Group",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adam Murnieks",
        "role": "Director",
        "email": "adam.murnieks@rcollard.com"
      },
      {
        "name": "Anthony Harris",
        "role": "Business Development Manager",
        "email": "anthony.harris@rcollard.com",
        "phone": "07585 601196"
      },
      {
        "name": "Chris Gear",
        "role": "Contracts Manager",
        "email": "chris@rcollard.com",
        "phone": "07733 758880"
      },
      {
        "name": "Chris Walsh",
        "role": "Health & Safety Director",
        "email": "chris.walsh@rcollard.com"
      },
      {
        "name": "Cian Hynes",
        "role": "Senior Quantity Surveyor",
        "email": "cian.hynes@rcollard.com"
      },
      {
        "name": "Cristian Radu",
        "role": "Project Manager",
        "email": "cristian.radu@rcollard.com",
        "phone": "07984 869526"
      },
      {
        "name": "Dean Pedrick",
        "role": "Site Manager",
        "email": "dean.pedrick@rcollard.com"
      },
      {
        "name": "Gerry Marchant",
        "role": "Health & Safety Manager",
        "email": "gerry.marchant@rcollard.com"
      },
      {
        "name": "James Chillery",
        "role": "Commercial Manager",
        "email": "james@rcollard.com",
        "phone": "07802 833375"
      },
      {
        "name": "Joe Rumbol",
        "role": "Contracts Manager",
        "email": "joe.rumbol@rcollard.com"
      },
      {
        "name": "Lee Phelan",
        "role": "Director",
        "email": "lee.phelan@rcollard.com"
      },
      {
        "name": "Mark Stenning",
        "role": "Operations Director",
        "email": "mark@rcollard.com"
      },
      {
        "name": "Phil East",
        "role": "Contracts Manager",
        "email": "phil@rcollardltd.co.uk"
      },
      {
        "name": "Phil Shelley",
        "role": "Contracts Manager",
        "email": "phil.shelley@rcollard.com",
        "phone": "07824 998885"
      },
      {
        "name": "Richard Harris",
        "role": "Project Manager",
        "email": "richard.harris@rcollard.com"
      },
      {
        "name": "Robert Collard",
        "role": "Managing Director",
        "email": "robert.collard@rcollard.com"
      },
      {
        "name": "Sam Tunnicliff",
        "role": "Project Manager",
        "email": "sam.tunnicliff@rcollard.com",
        "phone": "07384 545219"
      },
      {
        "name": "Sean Farrell",
        "role": "Quantity Surveyor",
        "email": "sean.farrell@rcollard.com"
      },
      {
        "name": "Simon King",
        "role": "Contract Manager",
        "email": "simon.king@rcollard.com"
      },
      {
        "name": "Sonny Barter",
        "role": "Health and Safety Advisor",
        "email": "sonny@rcollard.com",
        "phone": "07990 374097"
      }
    ]
  },
  {
    "id": 187,
    "name": "Collins Construction",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alex Brawn",
        "role": "Senior Project Manager",
        "email": "a.brawn@collinsconstruction.co.uk",
        "phone": "07879 328663"
      },
      {
        "name": "Alex Weaver",
        "role": "Quantity Surveyor",
        "email": "alex.weaver@collins-construction.com"
      },
      {
        "name": "Chris Margiotta",
        "role": "Commercial Director",
        "email": "chris.margiotta@collins-construction.com",
        "phone": "07879 330727"
      },
      {
        "name": "Chris McGrath",
        "role": "Project Director",
        "email": "c.mcgrath@collins-construction.com",
        "phone": "07956 746859"
      },
      {
        "name": "Daniel Lane",
        "role": "Project Manager",
        "email": "d.lane@collins-construction.com"
      },
      {
        "name": "David Balandin",
        "role": "Quantity Surveyor",
        "email": "d.balandin@collins-construction.com"
      },
      {
        "name": "Dick Humphreys",
        "role": "Construction Manager",
        "email": "dick.humphreys@collins-construction.com"
      },
      {
        "name": "Duncan Redman",
        "role": "Project Director",
        "email": "d.redman@collins-construction.com"
      },
      {
        "name": "Geoff Hall",
        "role": "Project Director",
        "email": "g.hall@collins-construction.com"
      },
      {
        "name": "George Hammon",
        "role": "Quantity Surveyor",
        "email": "g.hammon@collins-construction.com",
        "phone": "07387 418720"
      },
      {
        "name": "George Rowley",
        "role": "Quantity Surveyor",
        "email": "g.rowley@collins-construction.com"
      },
      {
        "name": "George Zarnescu",
        "role": "Site Manager",
        "email": "g.zarnescu@collins-construction.com",
        "phone": "07507 222162"
      },
      {
        "name": "Graham Horwood",
        "role": "Senior Project Manager",
        "email": "graham.horwood@collins-construction.com"
      },
      {
        "name": "Hannah Willis",
        "role": "Quantity Surveyor",
        "email": "hannah.willis@collins-construction.com"
      },
      {
        "name": "Joe Squire",
        "role": "Quantity Surveyor",
        "email": "joe.squire@collins-construction.com"
      },
      {
        "name": "Jonathan Moore",
        "role": "Quantity Surveyor",
        "email": "jonathan.moore@collins-construction.com"
      },
      {
        "name": "Josh Mason",
        "role": "Senior Quantity Surveyor",
        "email": "josh.mason@collins-construction.com",
        "phone": "07557 001278"
      },
      {
        "name": "Mark Sargent",
        "role": "Project Director",
        "email": "mark.sargent@collins-construction.com"
      },
      {
        "name": "Max Bartram",
        "role": "Quantity Surveyor",
        "email": "m.bartram@collins-construction.com",
        "phone": "07384 890357"
      },
      {
        "name": "Michael Goate",
        "role": "Senior Project Manager",
        "email": "m.goate@collins-construction.com",
        "phone": "07384 831730"
      },
      {
        "name": "Muhammed Ammen",
        "role": "Quantity Surveyor",
        "email": "muhammed.ammen@collins-construction.com"
      },
      {
        "name": "Nick Walsh",
        "role": "Quantity Surveyor",
        "email": "nick.walsh@collins-construction.com"
      },
      {
        "name": "Paul Chandler",
        "role": "Commercial Manager",
        "email": "paul.chandler@collins-construction.com"
      },
      {
        "name": "Ryan Cleanthi",
        "role": "Project Director",
        "email": "r.cleanthi@collins-construction.com"
      },
      {
        "name": "Sam Knapp",
        "role": "Senior Quantity Surveyor",
        "email": "sam.knapp@collins-construction.com"
      },
      {
        "name": "Scott Bannan",
        "role": "Project Manager",
        "email": "scott.bannan@collins-construction.com",
        "phone": "07584 500037"
      },
      {
        "name": "Scott Bannon",
        "role": "Divisional Director",
        "email": "scott.bannon@collins-construction.com"
      },
      {
        "name": "Stuart Johnson",
        "role": "Director",
        "email": "stuart.johnson@collins-construction.com"
      },
      {
        "name": "Tom Steliou",
        "role": "Quantity Surveyor",
        "email": "t.steliou@collins-construction.com"
      },
      {
        "name": "Vilius Sakalauskas",
        "role": "Project Manager",
        "email": "v.sakalauskas@collins-construction.com"
      }
    ]
  },
  {
    "id": 188,
    "name": "Collins Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alex Brawn",
        "role": "Senior Project Manager",
        "email": "a.brawn@collinsconstruction.co.uk",
        "phone": "07879 328663"
      },
      {
        "name": "Alex Weaver",
        "role": "Quantity Surveyor",
        "email": "a.weaver@collins-construction.com"
      },
      {
        "name": "Chris Margiotta",
        "role": "Commercial Director",
        "email": "c.margiotta@collins-construction.com",
        "phone": "07879 330727"
      },
      {
        "name": "Chris McGrath",
        "role": "Project Director",
        "email": "c.mcgrath@collins-construction.com",
        "phone": "07956 746859"
      },
      {
        "name": "Daniel Lane",
        "role": "Project Manager",
        "email": "d.lane@collins-construction.com"
      },
      {
        "name": "Danny Brooks",
        "role": "Site Manager",
        "email": "d.brooks@collins-construction.com"
      },
      {
        "name": "David Balandin",
        "role": "Quantity Surveyor",
        "email": "d.balandin@collins-construction.com"
      },
      {
        "name": "Dick Humphreys",
        "role": "Construction Manager",
        "email": "d.humphreys@collins-construction.com"
      },
      {
        "name": "Duncan Redman",
        "role": "Project Director",
        "email": "d.redman@collins-construction.com"
      },
      {
        "name": "Geoff Hall",
        "role": "Project Director",
        "email": "g.hall@collins-construction.com"
      },
      {
        "name": "George Hammon",
        "role": "Quantity Surveyor",
        "email": "g.hammon@collins-construction.com",
        "phone": "07387 418720"
      },
      {
        "name": "George Rowley",
        "role": "Quantity Surveyor",
        "email": "g.rowley@collins-construction.com"
      },
      {
        "name": "George Zarnescu",
        "role": "Site Manager",
        "email": "g.zarnescu@collins-construction.com",
        "phone": "07507 222162"
      },
      {
        "name": "Graham Horwood",
        "role": "Senior Project Manager",
        "email": "g.horwood@collins-construction.com"
      },
      {
        "name": "Hannah Willis",
        "role": "Quantity Surveyor",
        "email": "h.willis@collins-construction.com"
      },
      {
        "name": "Joe Squire",
        "role": "Quantity Surveyor",
        "email": "j.squire@collins-construction.com"
      },
      {
        "name": "Jonathan Moore",
        "role": "Quantity Surveyor",
        "email": "j.moore@collins-construction.com"
      },
      {
        "name": "Joseph Raymond",
        "role": "Assistant Quantity Surveyor",
        "email": "j.raymond@collins-construction.com"
      },
      {
        "name": "Josh Mason",
        "role": "Senior Quantity Surveyor",
        "email": "j.mason@collins-construction.com",
        "phone": "07557 001278"
      },
      {
        "name": "Mark Sargent",
        "role": "Project Director",
        "email": "m.sargent@collins-construction.com"
      },
      {
        "name": "Max Bartram",
        "role": "Quantity Surveyor",
        "email": "m.bartram@collins-construction.com",
        "phone": "07384 890357"
      },
      {
        "name": "Michael Goate",
        "role": "Senior Project Manager",
        "email": "m.goate@collins-construction.com",
        "phone": "07384 831730"
      },
      {
        "name": "Muhammed Ammen",
        "role": "Quantity Surveyor",
        "email": "m.ammen@collins-construction.com"
      },
      {
        "name": "Nick Walsh",
        "role": "Quantity Surveyor",
        "email": "n.walsh@collins-construction.com"
      },
      {
        "name": "Paul Chandler",
        "role": "Commercial Manager",
        "email": "p.chandler@collins-construction.com"
      },
      {
        "name": "Richard Harrison",
        "role": "Site Manager",
        "email": "r.harrison@collins-construction.com",
        "phone": "07469 147700"
      },
      {
        "name": "Ryan Cleanthi",
        "role": "Project Director",
        "email": "r.cleanthi@collins-construction.com"
      },
      {
        "name": "Sam Knapp",
        "role": "Senior Quantity Surveyor",
        "email": "s.knapp@collins-construction.com"
      },
      {
        "name": "Scott Bannan",
        "role": "Project Manager",
        "email": "s.bannan@collins-construction.com",
        "phone": "07584 500037"
      },
      {
        "name": "Scott Bannon",
        "role": "Divisional Director",
        "email": "s.bannon@collins-construction.com"
      },
      {
        "name": "Stuart Johnson",
        "role": "Director",
        "email": "s.johnson@collins-construction.com"
      },
      {
        "name": "Tom Steliou",
        "role": "Quantity Surveyor",
        "email": "t.steliou@collins-construction.com"
      },
      {
        "name": "Vilius Sakalauskas",
        "role": "Project Manager",
        "email": "v.sakalauskas@collins-construction.com"
      }
    ]
  },
  {
    "id": 189,
    "name": "Collins Earthworks Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adam Green",
        "role": "Pre Construction Manager",
        "email": "adamg@collinsearthworks.co.uk"
      },
      {
        "name": "Alan McConnell",
        "role": "Site Foreman",
        "email": "alan.mcconnell@collinsearthworks.co.uk"
      },
      {
        "name": "Amanda Kay",
        "role": "Health & Safety Director",
        "email": "amanda@collinsearthworks.co.uk",
        "phone": "07712 524461"
      },
      {
        "name": "Andrew Lea",
        "role": "Health & Safety Director",
        "email": "andrew@collinsearthworks.co.uk",
        "phone": "07763 569446"
      },
      {
        "name": "Bruce Wisternoff",
        "role": "Senior Engineer",
        "email": "bruce.wisternoff@collinsearthworks.co.uk"
      },
      {
        "name": "Dave Murphy",
        "role": "Contracts Manager",
        "email": "dave@collinsearthworks.co.uk",
        "phone": "07591 385449"
      },
      {
        "name": "David Collins",
        "role": "Director",
        "email": "david.collins@collinsearthworks.co.uk"
      },
      {
        "name": "Gill Goodwin",
        "role": "Financial Director",
        "email": "gill.goodwin@collinsearthworks.co.uk"
      },
      {
        "name": "Iain Bateman",
        "role": "Operations Manager",
        "email": "iain.bateman@collinsearthworks.co.uk",
        "phone": "07394 800384"
      },
      {
        "name": "Jack Cave",
        "role": "Site Manager",
        "email": "jack@collinsearthworks.co.uk"
      },
      {
        "name": "Jamie Dobson",
        "role": "Contract Manager",
        "email": "jamie@collinsearthworks.co.uk"
      },
      {
        "name": "Kev Wharmby",
        "role": "Contracts Manager",
        "email": "kev.wharmby@collinsearthworks.co.uk"
      },
      {
        "name": "Lee Naylor",
        "email": "lee.naylor@collinsearthworks.co.uk",
        "phone": "7525816005.0"
      },
      {
        "name": "Neil Randle",
        "email": "neil.randle@collinsearthworks.co.uk"
      },
      {
        "name": "Pat Gaffney",
        "role": "Director",
        "email": "pat.gaffney@collinsearthworks.co.uk",
        "phone": "07989 569 808"
      },
      {
        "name": "Scott Craddock",
        "role": "Director",
        "email": "scott@collinsearthworks.co.uk",
        "phone": "07546 121142"
      },
      {
        "name": "Stuart Gordon",
        "role": "Site Manager",
        "email": "stuart.gordon@collinsearthworks.co.uk"
      },
      {
        "name": "Sufyan Mulla",
        "role": "Quantity Surveyor",
        "email": "sufyan.mulla@collinsearthworks.co.uk"
      },
      {
        "name": "Tom Collins",
        "email": "tom.collins@collinsearthworks.co.uk"
      },
      {
        "name": "Wayne Naylor",
        "role": "Contracts Manager",
        "email": "wayne.naylor@collinsearthworks.co.uk"
      }
    ]
  },
  {
    "id": 190,
    "name": "Colne Valley Group",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Aaron Ratcliffe",
        "role": "Construction Director",
        "email": "aaron.ratcliffe@cve.uk.com",
        "phone": "07584 686668"
      },
      {
        "name": "Chris Syron",
        "role": "Project Director",
        "email": "chris.syron@cvg.uk.com"
      },
      {
        "name": "James Nurse",
        "role": "Contracts Manager",
        "email": "james.nurse@cve.uk.com"
      },
      {
        "name": "Kevin Barber",
        "role": "Managing Director",
        "email": "kevin.barber@cbe.uk.com"
      },
      {
        "name": "Mark Barber",
        "role": "Commercial Director",
        "email": "mark.barber@cve.uk.com"
      },
      {
        "name": "Paul Brint",
        "role": "Director",
        "email": "paul.brint@cve.uk.com"
      },
      {
        "name": "Paul McDermott",
        "role": "Contract Manager",
        "email": "paul.mcdermott@cbe.uk.com"
      },
      {
        "name": "Rob Surface",
        "role": "Quantity Surveyor",
        "email": "rob.surface@cve.uk.com"
      },
      {
        "name": "Tony Cuddy",
        "role": "Mechanical Contracts Manager",
        "email": "tony.cuddy@cbe.uk.com"
      }
    ]
  },
  {
    "id": 191,
    "name": "Compass Engineering Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andrew Hibbins",
        "role": "Director",
        "email": "andrew.hibbins@compass-eng.co.uk"
      },
      {
        "name": "Graham Fawcett",
        "role": "Contract Manager",
        "email": "graham.fawcett@compass-eng.co.uk"
      },
      {
        "name": "Luke Brooks",
        "role": "Project Manager",
        "email": "luke.brooks@compass-eng.co.uk"
      },
      {
        "name": "Rob Brooke",
        "role": "Construction Manager",
        "email": "rob.brooke@compass-eng.co.uk"
      },
      {
        "name": "Sam Metcalfe",
        "role": "Contracts Manager",
        "email": "sam.metcalfe@compass-eng.co.uk"
      },
      {
        "name": "Simon Walker",
        "role": "Commercial Director",
        "email": "simon.walker@compass-eng.co.uk",
        "phone": "07718 521282"
      }
    ]
  },
  {
    "id": 192,
    "name": "Concast Precast Group",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Des Quinn",
        "role": "Business Development Manager",
        "email": "des@concastprecast.co.uk"
      },
      {
        "name": "Julie Stephens",
        "role": "Buyer",
        "email": "julie@concastprecast.co.uk"
      },
      {
        "name": "William Nelson",
        "role": "Project Manager",
        "email": "william@concastprecast.co.uk"
      }
    ]
  },
  {
    "id": 193,
    "name": "Concept Engineering Consultants Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Ana Davila",
        "role": "Project Co-ordinator",
        "email": "ana@conceptsi.co.uk"
      },
      {
        "name": "Ian Ison",
        "role": "HSEQ Manager",
        "email": "ii@safetyservices.co.uk"
      },
      {
        "name": "Ivo Penchev",
        "role": "Project Director",
        "email": "ivo.penchev@conceptsi.co.uk"
      },
      {
        "name": "Sean Weight",
        "role": "Civils Manager",
        "email": "sean.weight@conceptsi.co.uk",
        "phone": "07917 903128"
      }
    ]
  },
  {
    "id": 194,
    "name": "Configured Platforms Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Carter Lumb",
        "role": "Design Consultant",
        "email": "carter@configuredplatforms.co.uk"
      },
      {
        "name": "Jason Elkins",
        "role": "Sales Director",
        "email": "jason.elkins@configuredplatforms.co.uk",
        "phone": "07876 226571"
      },
      {
        "name": "Tony Stutterheim",
        "role": "Senior Design Engineer",
        "email": "tony.stutterheim@configuredplatforms.co.uk"
      }
    ]
  },
  {
    "id": 195,
    "name": "Connect Scaffolding Limited",
    "disciplines": [
      "Scaffolding"
    ],
    "contacts": [
      {
        "name": "Ash Kennedy",
        "role": "Site Manager",
        "email": "ash.kennedy@connectscaffolding.co.uk"
      },
      {
        "name": "Ben Watling",
        "role": "Contracts Manager",
        "email": "ben.watling@connectscaffolding.co.uk"
      },
      {
        "name": "Craig Almond",
        "role": "Contract Manager",
        "email": "craig.almond@connectscaffolding.co.uk"
      },
      {
        "name": "Danny Hodgson",
        "role": "Surveyor",
        "email": "surveying@connectscaffolding.co.uk"
      },
      {
        "name": "Diane Spicer",
        "role": "Surveyor",
        "email": "surveyor@connectscaffolding.co.uk"
      },
      {
        "name": "Danny Hodgson",
        "role": "Surveyor",
        "email": "danny.hodgson@connectscaffolding.co.uk"
      },
      {
        "name": "Diane Spicer",
        "role": "Surveyor",
        "email": "diane.spicer@connectscaffolding.co.uk"
      }
    ]
  },
  {
    "id": 196,
    "name": "Conneely Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alan OHara",
        "role": "Quantity Surveyor",
        "email": "alan@conneelyconstruction.com"
      },
      {
        "name": "Barry Wims",
        "role": "Contract Manager",
        "email": "barry@conneelyconstruction.com"
      },
      {
        "name": "Paul Conneely",
        "role": "Director",
        "email": "paul@conneelyconstruction.com"
      },
      {
        "name": "Seamus Haggarty",
        "role": "Contracts Manager",
        "email": "seamus.haggarty@conneelyconstruction.com"
      },
      {
        "name": "Lucas Araksi",
        "role": "Contracts Manager",
        "email": "lucas@conneelyconstruction.com"
      },
      {
        "name": "Martin Hughes",
        "role": "Project Manager",
        "email": "martin@conneelyconstruction.com"
      }
    ]
  },
  {
    "id": 197,
    "name": "Conneely Drylining Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Aiden McNicholas",
        "role": "Contracts Manager",
        "email": "aiden@cdl-ltd.co.uk"
      },
      {
        "name": "Brandon Kite",
        "role": "Quantity Surveyor",
        "email": "brandon.kite@conneely.group"
      },
      {
        "name": "Brett Mason",
        "role": "Quantity Surveyor",
        "email": "brett@cdl-ltd.co.uk"
      },
      {
        "name": "Dean Phillips",
        "role": "Contracts Manager",
        "email": "dean@cd"
      }
    ]
  },
  {
    "id": 198,
    "name": "Construct-It Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andrew Roberston",
        "role": "Project Manager",
        "email": "andrew.roberston@construct-itltd.com",
        "phone": "07775 251117"
      },
      {
        "name": "Scott Jones",
        "role": "Director",
        "email": "scott.jones@construct-itltd.com"
      }
    ]
  },
  {
    "id": 199,
    "name": "Constructional Timber (Manufacturers) Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andrew Newton",
        "role": "Project Manager",
        "email": "a.newton@constructionaltimber.com"
      },
      {
        "name": "Andy Fletcher",
        "role": "Contracts Manager",
        "email": "a.fletcher@constructionaltimber.com"
      },
      {
        "name": "Paul Tracey",
        "role": "Construction Manager",
        "email": "p.tracey@constructionaltimber.com"
      },
      {
        "name": "William Daws",
        "role": "Project Manager",
        "email": "w.daws@constructionaltimber.com",
        "phone": "07584 164653"
      }
    ]
  },
  {
    "id": 200,
    "name": "Contemporary Design Solutions",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Chi Tang",
        "role": "Associate Director",
        "email": "chi@hallmarkestates.com",
        "phone": "07711 308035"
      },
      {
        "name": "Felex Lau",
        "role": "Architect",
        "email": "felex@codeso.net"
      },
      {
        "name": "Livio Venturi",
        "email": "livio.venturi@codeso.net"
      },
      {
        "name": "Simon Hikmet",
        "role": "Site Manager",
        "email": "simon@hallmarkestates.com",
        "phone": "7788780677.0"
      },
      {
        "name": "Suky Ouyang",
        "role": "Architect",
        "email": "suky.ouyang@codeso.net"
      }
    ]
  },
  {
    "id": 201,
    "name": "Corbyn Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Aaron Ledger",
        "role": "Contracts Manager",
        "email": "aaron.ledger@corbynltd.com"
      },
      {
        "name": "Adam Richardson",
        "role": "Senior Quantity Surveyor",
        "email": "adam.richardson@corbynltd.com"
      },
      {
        "name": "Ben Eyers",
        "role": "Senior Buyer",
        "email": "beyers@corbynltd.com"
      },
      {
        "name": "Bill Griffiths",
        "role": "Contracts Manager",
        "email": "bgriffiths@corbynltd.com",
        "phone": "07941 048992"
      },
      {
        "name": "Cian Daly",
        "role": "Contract Manager",
        "email": "cian.daly@corbynltd.com",
        "phone": "07950 726652"
      },
      {
        "name": "Dave Lewis",
        "role": "Contracts Manager",
        "email": "dave.lewis@corbynltd.com"
      },
      {
        "name": "Jack Childs",
        "role": "Site Manager",
        "email": "jchilds@corbynltd.com",
        "phone": "7506666092.0"
      },
      {
        "name": "James Duggan",
        "role": "Quantity Surveyor",
        "email": "jduggan@corbynltd.com"
      },
      {
        "name": "Michael Cusack",
        "role": "Director",
        "email": "michael.cusack@corbynltd.com"
      },
      {
        "name": "Steve Marsh",
        "role": "Quantity Surveyor",
        "email": "steve.marsh@corbynltd.com"
      },
      {
        "name": "Wayne Edey",
        "role": "Commercial Manager",
        "email": "wayne.edey@corbynltd.com"
      }
    ]
  },
  {
    "id": 202,
    "name": "Core Construction Solution Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andy Jones",
        "role": "Machine Driver",
        "email": "andy.jones@coreconstructionsolution.com"
      },
      {
        "name": "Jake Szmodics",
        "role": "Quantity Surveyor",
        "email": "jake@coreconstructionsolution.com"
      },
      {
        "name": "James Szmodics",
        "role": "Quantity Surveyor",
        "email": "james.szmodics@coreconstructionsolution.com"
      },
      {
        "name": "Liam Hendry",
        "role": "Quantity Surveyor",
        "email": "liam.hendry@coreconstructionsolution.com"
      },
      {
        "name": "Robertas Juknevicius",
        "role": "Groundworker",
        "email": "robertas.juknevicius@coreconstructionsolution.com"
      },
      {
        "name": "Tom Thwaite",
        "role": "Contracts Manager",
        "email": "tom@coreconstructionsolution.com"
      }
    ]
  },
  {
    "id": 203,
    "name": "Cottier Contracting",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Jake Shersby",
        "role": "Project Manager",
        "email": "jakeshersby@cottiercontracting.com",
        "phone": "07432 687988"
      },
      {
        "name": "Luke Jewell",
        "role": "Commercial Manager",
        "email": "lukejewell@cottiercontracting.com"
      },
      {
        "name": "Paul Bolesworth",
        "role": "Project Manager",
        "email": "paulbolesworth@cottiercontracting.com"
      },
      {
        "name": "Ryan Metton",
        "role": "Project Manager",
        "email": "ryan.metton@cottiercontracting.com"
      },
      {
        "name": "Ryan Metton",
        "role": "Project Manager",
        "email": "ryanmetton@cottiercontracting.com"
      }
    ]
  },
  {
    "id": 204,
    "name": "County Roofing (Gloucester) Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Bryan Russell",
        "role": "Contracts Manager",
        "email": "bryan@county-group.co.uk"
      },
      {
        "name": "Jason Perkins",
        "role": "Quantity Surveyor",
        "email": "jason@county-group.co.uk"
      },
      {
        "name": "Mike Macleod",
        "role": "Contracts Manager",
        "email": "mike@county-group.co.uk"
      },
      {
        "name": "Phil Wood",
        "role": "Managing Director",
        "email": "phil@county-group.co.uk"
      },
      {
        "name": "Tim Deeks",
        "role": "Buyer",
        "email": "tim@county-group.co.uk"
      }
    ]
  },
  {
    "id": 205,
    "name": "CPC Interiors",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Clive Wood",
        "role": "Director",
        "email": "clive@cpcinteriors.com"
      },
      {
        "name": "Dimitru Ceban",
        "role": "Contract Manager",
        "email": "dimitru@cpcinteriors.com"
      },
      {
        "name": "Iain Mitchell",
        "role": "Quantity Surveyor",
        "email": "iain.mitchell@cpcinteriors.com",
        "phone": "07411 992811"
      },
      {
        "name": "James Lear",
        "role": "Buyer",
        "email": "james@cpcinteriors.com"
      },
      {
        "name": "Nigel Fuller",
        "role": "Contracts Manager",
        "email": "nigel@cpcinteriors.com"
      },
      {
        "name": "Ricky Kennywell",
        "role": "Project Manager",
        "email": "ricky.kennywell@cpcinteriors.com"
      },
      {
        "name": "Tom Miller",
        "role": "Quantity Surveyor",
        "email": "tom.miller@cpcinteriors.com"
      }
    ]
  },
  {
    "id": 206,
    "name": "Craft Interior Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andrew Reet",
        "role": "Project Manager",
        "email": "andrew.reet@craft-interior.co.uk",
        "phone": "07525 775563"
      },
      {
        "name": "Graham Chadwick",
        "role": "Director",
        "email": "g.chadwick@craft-interior.co.uk"
      },
      {
        "name": "Konrad Masternak",
        "role": "Project Manager",
        "email": "konrad.masternak@craft-interior.co.uk"
      },
      {
        "name": "Piotr Zambrzycki",
        "role": "Director",
        "email": "p.zambrzycki@craft-interior.co.uk",
        "phone": "07837 941619"
      },
      {
        "name": "Radoslav Prodanov",
        "role": "Operations Director",
        "email": "r.prodanov@craft-interior.co.uk"
      },
      {
        "name": "Rob Freegard",
        "role": "Development Manager",
        "email": "r.freegard@craft-interior.co.uk",
        "phone": "07833 195499"
      },
      {
        "name": "Wasim Khan",
        "role": "Quantity Surveyor",
        "email": "w.khan@craft-interior.co.uk"
      },
      {
        "name": "Yulian Katadzhov",
        "role": "Consultant",
        "email": "y.katadzhov@craft-interior.co.uk"
      },
      {
        "name": "Adam Rozycki",
        "role": "Quantity Surveyor",
        "email": "adam.rozycki@craft-interior.co.uk"
      },
      {
        "name": "Liam Roberts",
        "role": "Contracts Manager",
        "email": "liam.roberts@craft-interior.co.uk"
      },
      {
        "name": "Paul Gray",
        "role": "Contracts Manager",
        "email": "paul.gray@craft-interior.co.uk"
      }
    ]
  },
  {
    "id": 207,
    "name": "Creagh Concrete Products Ltd",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andrew Day",
        "role": "Sales Administrator",
        "email": "aday@creaghconcrete.com"
      },
      {
        "name": "Andy Bradley",
        "role": "Contracts Manager",
        "email": "andrewbradley@creaghconcrete.com",
        "phone": "07502 871268"
      },
      {
        "name": "Bernard Graham",
        "role": "Sales & Estimating Manager",
        "email": "bgraham@creaghconcrete.com"
      },
      {
        "name": "Brendan Diamond",
        "role": "Contracts Manager",
        "email": "bdiamond@creaghconcrete.com"
      },
      {
        "name": "Brendan McGlone",
        "role": "Director",
        "email": "bmcglone@creaghconcrete.com",
        "phone": "07753 890551"
      },
      {
        "name": "Caitlin McCann",
        "role": "Planner",
        "email": "caitlinmccann@creaghconcrete.com"
      },
      {
        "name": "Catherine Keenan",
        "email": "catherine.keenan@creaghconcrete.com"
      },
      {
        "name": "Dan Underhill",
        "role": "Projects Manager",
        "email": "dunderhill@creaghconcrete.com"
      },
      {
        "name": "Eddie Campbell",
        "role": "Contracts Manager",
        "email": "ecampbell@creaghconcrete.com",
        "phone": "07435 783918"
      },
      {
        "name": "Eunan O'Donnell",
        "role": "Project Manager / Estimator",
        "email": "eodonnell@creaghconcrete.com"
      },
      {
        "name": "Eunan Rafferty",
        "role": "Contracts Manager",
        "email": "eunan@creaghconcrete.com"
      },
      {
        "name": "Gareth King",
        "role": "Contracts Manager",
        "email": "gking@creaghconcrete.com",
        "phone": "07540 252015"
      },
      {
        "name": "Gerard McKeague",
        "email": "gmckeague@creaghconcrete.com"
      },
      {
        "name": "Ian Brogan",
        "role": "Contracts Manager",
        "email": "ibrogan@creaghconcrete.com"
      },
      {
        "name": "Marc Moore",
        "role": "Project Manager",
        "email": "mmoore@creaghconcrete.com",
        "phone": "07825 726124"
      },
      {
        "name": "Mark Gilliland",
        "role": "Director",
        "email": "mark@creaghconcrete.com"
      },
      {
        "name": "Martin McIvor",
        "role": "Buyer",
        "email": "mmcivor@creaghconcrete.com"
      },
      {
        "name": "Matthew Hickey",
        "role": "Project Manager",
        "email": "mhickey@creaghconcrete.com"
      },
      {
        "name": "Nial Murry",
        "role": "Contracts Manager",
        "email": "nmurry@creaghconcrete.com"
      },
      {
        "name": "Paul McKenzie",
        "role": "Project Manager",
        "email": "pmckenzie@creaghconcrete.com"
      },
      {
        "name": "Phillip West",
        "role": "Contract Manager",
        "email": "pwest@creaghconcrete.com",
        "phone": "07342 036770"
      },
      {
        "name": "Ryan McNabb",
        "role": "Contracts Manager",
        "email": "rmcnabb@creaghconcrete.com"
      },
      {
        "name": "Seamus McKeague",
        "email": "smckeague@creaghconcrete.com"
      },
      {
        "name": "Sean Rocks",
        "role": "Contracts Manager",
        "email": "sean@creaghconcrete.com"
      },
      {
        "name": "Shane Dooey",
        "role": "Project Manager",
        "email": "sdooey@creaghconcrete.com"
      },
      {
        "name": "Tom Jenkins",
        "email": "tjenkins@creaghconcrete.com"
      }
    ]
  },
  {
    "id": 208,
    "name": "Crofton Engineering Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Glen Godfrey",
        "role": "Director",
        "email": "glen@crofton-eng.co.uk"
      },
      {
        "name": "Ian McAlpine",
        "role": "Construction Manager",
        "email": "ian@crofton-eng.co.uk"
      },
      {
        "name": "Jesse Turner",
        "role": "Project Manager",
        "email": "jesse@crofton-eng.co.uk"
      }
    ]
  },
  {
    "id": 209,
    "name": "Croudace Homes Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adrian Watts",
        "role": "Commercial Director",
        "email": "adrian.watts@croudace.co.uk"
      },
      {
        "name": "Ben Yallop",
        "role": "Unknown",
        "email": "ben.yallop@croudace.co.uk"
      },
      {
        "name": "Christopher Evans",
        "role": "Architectural Assistant",
        "email": "christopher.evans@croudace.co.uk"
      },
      {
        "name": "Nicole Norman",
        "role": "Strategic Land Planner",
        "email": "nicole.norman@croudace.co.uk"
      },
      {
        "name": "Richard Kelly",
        "role": "Strategic Land Planner",
        "email": "richard.kelly@croudace.co.uk"
      },
      {
        "name": "Ruaridh Barnes",
        "role": "Unknown",
        "email": "ruaridh.barnes@croudace.co.uk"
      },
      {
        "name": "Vicki Etheridge",
        "role": "Quantity Surveyor",
        "email": "vicki.etheridge@croudace.co.uk"
      },
      {
        "name": "Zoe Wainwright",
        "role": "Architect",
        "email": "zoe.wainwright@croudace.co.uk"
      }
    ]
  },
  {
    "id": 210,
    "name": "Curryhills Construction",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Jim Dowling",
        "role": "Managing Director",
        "email": "jimdowling@curryhillsconstruction.co.uk"
      }
    ]
  },
  {
    "id": 211,
    "name": "D & G Contracting",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alex Gardiner",
        "role": "Director",
        "email": "alex.gardiner@dandgcontracting.co.uk"
      },
      {
        "name": "Gintaras Subacius",
        "role": "Site Supervisor",
        "email": "gintaras.subacius@dandgcontracting.co.uk"
      },
      {
        "name": "Kris Churchley",
        "role": "Contracts Manager",
        "email": "kris.churchley@dandgcontracting.co.uk"
      },
      {
        "name": "Simon Hanting",
        "role": "Project Manager",
        "email": "simon.hanting@dandgcontracting.co.uk"
      }
    ]
  },
  {
    "id": 212,
    "name": "D&G Contracting Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alex Gardiner",
        "role": "Director",
        "email": "alex@dandgceilings.co.uk"
      },
      {
        "name": "Chris Slater",
        "role": "Contract Manager",
        "email": "chris.slater@dandgcontracting.co.uk"
      },
      {
        "name": "David Gardiner",
        "role": "Director",
        "email": "david@dandgceilings.co.uk",
        "phone": "07968 859739"
      },
      {
        "name": "Dean Burns",
        "role": "Contract Manager",
        "email": "deanburns644@gmail.com",
        "phone": "07462 090247"
      },
      {
        "name": "Mel Kinge",
        "role": "Contracts Manager",
        "email": "mel.kinge@dandgcontracting.co.uk"
      }
    ]
  },
  {
    "id": 213,
    "name": "Daleraven Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Frank Hall",
        "role": "Managing Director",
        "email": "frankhall@daleraven.co.uk"
      },
      {
        "name": "Kevin Garrett",
        "role": "Contracts Manager",
        "email": "kevingarrett@daleraven.co.uk"
      },
      {
        "name": "Peter Bottomley",
        "role": "Buyer",
        "email": "peterbottomley@daleraven.co.uk"
      },
      {
        "name": "Stephen Connolly",
        "role": "Commercial Manager",
        "email": "stephenconnolly@daleraven.co.uk"
      }
    ]
  },
  {
    "id": 214,
    "name": "Dales Fabrications Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Colin Dales",
        "role": "Sales Manager",
        "email": "colin.dales@dales-eaves.co.uk",
        "phone": "07970 281349"
      },
      {
        "name": "Mike Dales",
        "role": "National Sales Manager",
        "email": "mikep@dales-eaves.co.uk"
      },
      {
        "name": "Sam Frost",
        "role": "Project Manager",
        "email": "samf@dales-eaves.co.uk"
      }
    ]
  },
  {
    "id": 215,
    "name": "Danion Brickwork",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Ion Bivol",
        "role": "Director",
        "email": "ion.bivol@danionbrickwork.co.uk"
      }
    ]
  },
  {
    "id": 216,
    "name": "Datum Group Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Aidan Poole",
        "role": "Project Manager",
        "email": "apoole@datumgroupltd.com"
      },
      {
        "name": "Ben Lewis",
        "role": "Quantity Surveyor",
        "email": "blewis@datumgroupltd.com"
      },
      {
        "name": "Glen Linnane",
        "role": "Divisional Director",
        "email": "glinnane@datumgroupltd.com",
        "phone": "07751 793170"
      },
      {
        "name": "Glen Welburn",
        "role": "Contracts Manager",
        "email": "gwelburn@datumgroupltd.com"
      },
      {
        "name": "Kierin Oliver",
        "role": "Senior Contracts Manager",
        "email": "koliver@datumgroupltd.com"
      },
      {
        "name": "Louise Lloyd",
        "role": "Contracts Manager",
        "email": "llloyd@datumgroupltd.com"
      },
      {
        "name": "Richard Thomas",
        "role": "Supervisor",
        "email": "rthomas@datumgroupltd.com"
      },
      {
        "name": "Robert Brooks",
        "role": "Director",
        "email": "rbrooks@datumgroupltd.com",
        "phone": "07919 464376"
      }
    ]
  },
  {
    "id": 217,
    "name": "DCK Construction",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alex Newman",
        "role": "Project Manager",
        "email": "alex.newman@thedck.com"
      },
      {
        "name": "Oscar Markhaalid",
        "role": "Contracts Manager",
        "email": "oscar.markhaalid@thedck.com"
      },
      {
        "name": "Tom Sessions",
        "role": "Quantity Surveyor",
        "email": "tom.sessions@thedck.com"
      }
    ]
  },
  {
    "id": 218,
    "name": "DCK Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alex Newman",
        "role": "Project Manager",
        "email": "alex.newman@thedck.com"
      },
      {
        "name": "Oscar Markhaalid",
        "role": "Contracts Manager",
        "email": "oscar.markhaalid@thedck.com"
      },
      {
        "name": "Tom Sessions",
        "role": "Quantity Surveyor",
        "email": "tom.sessions@thedck.com"
      }
    ]
  },
  {
    "id": 219,
    "name": "DCS Roofing Limited",
    "disciplines": [
      "Roofing"
    ],
    "contacts": [
      {
        "name": "Deborah Smith",
        "role": "Director",
        "email": "d.smith@dcsroofingltd.co.uk"
      }
    ]
  },
  {
    "id": 220,
    "name": "DDS Demolition",
    "disciplines": [
      "Demolition"
    ],
    "contacts": [
      {
        "name": "Charlie Knight",
        "role": "Quantity Surveyor",
        "email": "charlie.knight@dds-demolition.co.uk"
      },
      {
        "name": "Dylan Lovelock",
        "role": "Contract Manager",
        "email": "dlovelock@dds-demolition.co.uk",
        "phone": "07534 436048"
      },
      {
        "name": "Eric Rosay",
        "role": "Contracts Manager",
        "email": "erosay@dds-demolition.co.uk"
      },
      {
        "name": "James Paterson",
        "email": "james.paterson@dds-demolition.co.uk"
      },
      {
        "name": "John Read",
        "role": "Contracts Manager",
        "email": "john.read@dds-demolition.co.uk"
      },
      {
        "name": "Karol Zloty",
        "role": "Contracts Manager",
        "email": "kzloty@dds-demolition.co.uk"
      },
      {
        "name": "Matthew Brickland",
        "role": "Managing Surveyor",
        "email": "matthew.brickland@dds-demolition.co.uk"
      },
      {
        "name": "Michael Hennessy",
        "role": "Project Director",
        "email": "mhennessy@dds-demolition.co.uk",
        "phone": "07921 223271"
      },
      {
        "name": "Michael Moore",
        "role": "Site Manager",
        "email": "mmoore@dds-demolition.co.uk"
      },
      {
        "name": "Spencer Ray",
        "email": "spencer.ray@dds-demolition.co.uk"
      },
      {
        "name": "Tom Worrall",
        "role": "Commercial Manager",
        "email": "tworrall@dds-demolition.co.uk"
      },
      {
        "name": "Wesley Ray",
        "role": "Managing Director",
        "email": "wesley.ray@dds-demolition.co.uk"
      }
    ]
  },
  {
    "id": 221,
    "name": "DDS Group",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adam Denby",
        "role": "Contract Manager",
        "email": "adam.denby@dds-demolition.co.uk"
      },
      {
        "name": "Charlie Knight",
        "role": "Quantity Surveyor",
        "email": "charlie.knight@dds-demolition.co.uk"
      },
      {
        "name": "Dylan Lovelock",
        "role": "Contract Manager",
        "email": "dlovelock@dds-demolition.co.uk",
        "phone": "07534 436048"
      },
      {
        "name": "Eric Rosay",
        "role": "Contracts Manager",
        "email": "erosay@dds-demolition.co.uk"
      },
      {
        "name": "James Paterson",
        "email": "james.paterson@dds-demolition.co.uk"
      },
      {
        "name": "John Read",
        "role": "Contracts Manager",
        "email": "john.read@dds-demolition.co.uk"
      },
      {
        "name": "Karol Zloty",
        "role": "Contracts Manager",
        "email": "kzloty@dds-demolition.co.uk"
      },
      {
        "name": "Matthew Brickland",
        "role": "Managing Surveyor",
        "email": "matthew.brickland@dds-demolition.co.uk"
      },
      {
        "name": "Michael Hennessy",
        "role": "Project Director",
        "email": "mhennessy@dds-demolition.co.uk",
        "phone": "07921 223271"
      },
      {
        "name": "Michael Moore",
        "role": "Site Manager",
        "email": "mmoore@dds-demolition.co.uk"
      },
      {
        "name": "Spencer Ray",
        "email": "spencer.ray@dds-demolition.co.uk"
      },
      {
        "name": "Tom Worrall",
        "role": "Commercial Manager",
        "email": "tworrall@dds-demolition.co.uk"
      },
      {
        "name": "Wesley Ray",
        "role": "Managing Director",
        "email": "wesley.ray@dds-demolition.co.uk"
      }
    ]
  },
  {
    "id": 222,
    "name": "De-Ath Bros Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Bjorn Murphy",
        "role": "Contracts Manager",
        "email": "bjorn.murphy@de-athbros.com"
      },
      {
        "name": "Dan Foster",
        "role": "Site Supervisor",
        "email": "dan.foster@de-athbros.com"
      },
      {
        "name": "Jamie Jackson",
        "role": "Site Manager",
        "email": "jamie.mcauley@de-athbros.com",
        "phone": "07930 848470"
      },
      {
        "name": "Jamie McAuley",
        "role": "Project Manager",
        "email": "jamie@de-athbros.com"
      },
      {
        "name": "Jed Stemp",
        "role": "Managing Director",
        "email": "jed@de-athbros.com"
      },
      {
        "name": "Liam Leggett",
        "role": "Project Manager",
        "email": "liam@de-athbros.com"
      },
      {
        "name": "Neil De'Ath",
        "role": "Director",
        "email": "neil.death@de-athbros.com"
      },
      {
        "name": "Neil Moffatt",
        "role": "Quantity Surveyor",
        "email": "neil.moffatt@de-athbros.com"
      },
      {
        "name": "Paul Collins",
        "role": "Contracts Manager",
        "email": "paul@de-athbros.com"
      },
      {
        "name": "Ross Kensett",
        "role": "Site Manager",
        "email": "ross.kensett@de-athbros.com",
        "phone": "07861 953416"
      },
      {
        "name": "Tom Hunter",
        "role": "Contracts Manager",
        "email": "tom.hunter@de-athbros.com"
      },
      {
        "name": "Jamie Jackson",
        "role": "Site Manager",
        "email": "jamie.jackson@de-athbros.com",
        "phone": "07930 848470"
      }
    ]
  },
  {
    "id": 223,
    "name": "Deane Roofing & Cladding Limited",
    "disciplines": [
      "Facades & Cladding",
      "Roofing"
    ],
    "contacts": [
      {
        "name": "Alistair Bailey",
        "role": "Contracts Manager",
        "email": "alistair@deaneroofing.com"
      },
      {
        "name": "David Bennett",
        "role": "Contracts Manager",
        "email": "david.bennett@deaneroofing.com"
      },
      {
        "name": "Noel Deane",
        "role": "Buyer",
        "email": "noel@deaneroofing.com"
      },
      {
        "name": "Philip Verghese",
        "role": "Quantity Surveyor",
        "email": "philip@deaneroofing.com"
      },
      {
        "name": "Sean Masterman",
        "email": "sean.masterman@deaneroofing.com",
        "phone": "07398 437118"
      },
      {
        "name": "Steven Bennett",
        "email": "steven.bennett@deaneroofing.com",
        "phone": "07983 123689"
      }
    ]
  },
  {
    "id": 224,
    "name": "Deconstruct (UK) Limited t/a The De Group UK Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adam O'Callaghan",
        "role": "Quantity Surveyor",
        "email": "adam.ocallaghan@deconstructuk.com"
      },
      {
        "name": "Adrian Kennedy",
        "role": "Contracts Manager",
        "email": "adrian.kennedy@deconstructuk.com"
      },
      {
        "name": "Anibal Fernandez",
        "role": "Project Manager",
        "email": "anibal.fernandez@deconstruct.com",
        "phone": "7802726663.0"
      },
      {
        "name": "Billy Saunders",
        "role": "Quantity Surveyor",
        "email": "billy.saunders@deconstructuk.com"
      },
      {
        "name": "Charlie Merrifield",
        "role": "Project Manager",
        "email": "charlie.merrifield@deconstructuk.com"
      },
      {
        "name": "Charlie Murrayfield",
        "role": "Project Manager",
        "email": "charlie.murrayfield@deconstructuk.com",
        "phone": "7810827373.0"
      },
      {
        "name": "Gary Walsh",
        "role": "Project Manager",
        "email": "gary.walsh@deconstructuk.com"
      },
      {
        "name": "George Bower",
        "role": "Quantity Surveyor",
        "email": "george.bower@deconstructuk.com",
        "phone": "7485304497.0"
      },
      {
        "name": "Iain Lawrence",
        "role": "iain.lawrence@deconstructuk.com"
      },
      {
        "name": "Ian Brennan",
        "role": "Site Manager",
        "email": "ian.brennan@deconstructuk.com"
      },
      {
        "name": "Jack Martin",
        "role": "Traffic Manager",
        "email": "jack.martin@deconstructuk.com"
      },
      {
        "name": "James Tolgher",
        "role": "Quantity Surveyor",
        "email": "james.tolgher@deconstructuk.com"
      },
      {
        "name": "Jim McKeown",
        "role": "Project Manager",
        "email": "jim.mckeown@deconstructuk.com",
        "phone": "7725822582.0"
      },
      {
        "name": "Luke Turvey",
        "role": "Site Manager",
        "email": "luke.turvey@deconstructuk.com",
        "phone": "7969058175.0"
      },
      {
        "name": "Michael Barnes",
        "role": "Project Manager",
        "email": "michael.barnes@deconstructuk.com",
        "phone": "7483099477.0"
      },
      {
        "name": "Mick Durie",
        "role": "Director",
        "email": "mick.durie@deconstructuk.com",
        "phone": "7534183222.0"
      },
      {
        "name": "Pat Pearson",
        "role": "Project Manager",
        "email": "pat.pearson@deconstructuk.com",
        "phone": "7900788087.0"
      },
      {
        "name": "Paul Ford",
        "role": "Managing Director",
        "email": "paul.ford@deconstructuk.com"
      },
      {
        "name": "Paul Lloyd",
        "role": "Contract Manager",
        "email": "paul.lloyd@deconstructuk.com"
      },
      {
        "name": "Richard Hayman-Joyce",
        "role": "Piling Manager",
        "email": "richard.haymanjoyce@deconstructuk.com",
        "phone": "7748106071.0"
      },
      {
        "name": "Richard Millard",
        "role": "Managing Director",
        "email": "richard.millard@deconstructuk.com"
      },
      {
        "name": "Richard Taylor",
        "role": "Regional Project Director",
        "email": "richard.taylor@deconstructuk.com"
      },
      {
        "name": "Sam Maguire",
        "role": "Project Manager",
        "email": "sam.maguire@deconstructuk.com",
        "phone": "7715090664.0"
      },
      {
        "name": "Sam Peck",
        "role": "Contracts Manager",
        "email": "sam.peck@deconstructuk.com",
        "phone": "7904120886.0"
      },
      {
        "name": "Steve Blenkinsop",
        "role": "Director",
        "email": "steve.blenkinsop@deconstructuk.com"
      },
      {
        "name": "Steve Gillam",
        "role": "Project Manager",
        "email": "steve.gillam@deconstructuk.com",
        "phone": "7930545969.0"
      },
      {
        "name": "Steve Jones",
        "role": "Project Manager",
        "email": "steve.jones@deconstructuk.com"
      },
      {
        "name": "Zack O'Sullivan",
        "role": "Quantity Surveyor",
        "email": "zack.osullivan@deconstructuk.com"
      },
      {
        "name": "Iain Lawrence",
        "email": "iain.lawrence@deconstructuk.com"
      }
    ]
  },
  {
    "id": 225,
    "name": "Deconstruct UK",
    "disciplines": [
      "Demolition"
    ],
    "contacts": [
      {
        "name": "Adam O'Callaghan",
        "role": "Quantity Surveyor",
        "email": "adam.ocallaghan@deconstructuk.com"
      },
      {
        "name": "Adrian Kennedy",
        "role": "Contracts Manager",
        "email": "adrian.kennedy@deconstructuk.com"
      },
      {
        "name": "Anibal Fernandez",
        "role": "Project Manager",
        "email": "anibal.fernandez@deconstruct.com",
        "phone": "07802 726663"
      },
      {
        "name": "Billy Saunders",
        "role": "Quantity Surveyor",
        "email": "billy.saunders@deconstructuk.com"
      },
      {
        "name": "Charlie Merrifield",
        "role": "Project Manager",
        "email": "charlie.merrifield@deconstructuk.com"
      },
      {
        "name": "Charlie Murrayfield",
        "role": "Project Manager",
        "email": "charlie.murrayfield@deconstructuk.com",
        "phone": "07810 827373"
      },
      {
        "name": "Gary Walsh",
        "role": "Project Manager",
        "email": "gary.walsh@deconstructuk.com"
      },
      {
        "name": "George Bower",
        "role": "Quantity Surveyor",
        "email": "george.bower@deconstructuk.com",
        "phone": "07485 304497"
      },
      {
        "name": "James Tolgher",
        "role": "Quantity Surveyor",
        "email": "james.tolgher@deconstructuk.com"
      },
      {
        "name": "Jim McKeown",
        "role": "Project Manager",
        "email": "jim.mckeown@deconstructuk.com",
        "phone": "07725 822582"
      },
      {
        "name": "Michael Barnes",
        "role": "Project Manager",
        "email": "michael.barnes@deconstructuk.com",
        "phone": "07483 099477"
      },
      {
        "name": "Mick Durie",
        "role": "Director",
        "email": "mick.durie@deconstructuk.com",
        "phone": "07534 183222"
      },
      {
        "name": "Pat Pearson",
        "role": "Project Manager",
        "email": "pat.pearson@deconstructuk.com",
        "phone": "07900 788087"
      },
      {
        "name": "Paul Ford",
        "role": "Managing Director",
        "email": "paul.ford@deconstructuk.com"
      },
      {
        "name": "Paul Lloyd",
        "role": "Contract Manager",
        "email": "paul.lloyd@deconstructuk.com"
      },
      {
        "name": "Richard Hayman-Joyce",
        "role": "Piling Manager",
        "email": "richard.haymanjoyce@deconstructuk.com",
        "phone": "07748 106071"
      },
      {
        "name": "Richard Millard",
        "role": "Managing Director",
        "email": "richard.millard@deconstructuk.com"
      },
      {
        "name": "Richard Taylor",
        "role": "Regional Project Director",
        "email": "richard.taylor@deconstructuk.com"
      },
      {
        "name": "Sam Maguire",
        "role": "Project Manager",
        "email": "sam.maguire@deconstructuk.com",
        "phone": "07715 090664"
      },
      {
        "name": "Sam Peck",
        "role": "Contracts Manager",
        "email": "sam.peck@deconstructuk.com",
        "phone": "07904 120886"
      },
      {
        "name": "Steve Blenkinsop",
        "role": "Director",
        "email": "steve.blenkinsop@deconstructuk.com"
      },
      {
        "name": "Steve Gillam",
        "role": "Project Manager",
        "email": "steve.gillam@deconstructuk.com",
        "phone": "07930 545969"
      },
      {
        "name": "Steve Jones",
        "role": "Project Manager",
        "email": "steve.jones@deconstructuk.com"
      },
      {
        "name": "Zack O'Sullivan",
        "role": "Quantity Surveyor",
        "email": "zack.osullivan@deconstructuk.com"
      }
    ]
  },
  {
    "id": 226,
    "name": "Deep Group Contractors Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adrian Pasquale",
        "role": "Scaffolding Manager",
        "email": "adrian@deepcontractors.com",
        "phone": "07887 508 904"
      },
      {
        "name": "Charlie Barker",
        "role": "Quantity Surveyor",
        "email": "charlie.b@deepcontractors.co.uk"
      },
      {
        "name": "Dan Sparks",
        "role": "Contracts Manager",
        "email": "dan@deepcontractors.com"
      },
      {
        "name": "Darren King",
        "role": "Health & Safety Director",
        "email": "darren@deepcontractors.com"
      },
      {
        "name": "Deep Parthipan",
        "role": "Director",
        "email": "deep@deepgrouplondon.com"
      },
      {
        "name": "Grant Viviers",
        "role": "Site Manager",
        "email": "grant.viviers@deepcontractors.com"
      },
      {
        "name": "Jeff Bowers",
        "role": "Project Manager",
        "email": "jeff@dandkcontractors.co.uk"
      },
      {
        "name": "Marc Bugden",
        "role": "Managing Director",
        "email": "marc.bugden@deepcontractors.com"
      },
      {
        "name": "Mark Wogan",
        "role": "Site Manager",
        "email": "mark.w@deepcontractors.com",
        "phone": "07956 437661"
      },
      {
        "name": "Nikil Parmar",
        "email": "nikil.parmar@deepcontractors.com"
      },
      {
        "name": "Paul Rattigan",
        "role": "Site Manager",
        "email": "paul@deepcontractors.com",
        "phone": "07388 578 871"
      },
      {
        "name": "Paulo Alves",
        "role": "Site Manager",
        "email": "paulo@deepcontractors.com"
      }
    ]
  },
  {
    "id": 227,
    "name": "Delomac Roofing Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Brendan McNulty",
        "role": "Operations Director",
        "email": "brendan@delomac.com"
      }
    ]
  },
  {
    "id": 228,
    "name": "Demcom",
    "disciplines": [
      "Demolition"
    ],
    "contacts": [
      {
        "name": "Chris Winfield",
        "role": "Demolition Manager",
        "email": "chris@demcom.co.uk",
        "phone": "07568 115703"
      },
      {
        "name": "Dan Meads",
        "role": "Managing Director",
        "email": "dan@demcom.co.uk",
        "phone": "07919 097379"
      },
      {
        "name": "Laura Johnson",
        "role": "Contracts Manager",
        "email": "laura@demcom.co.uk",
        "phone": "07511 209060"
      },
      {
        "name": "Lee McEwen",
        "role": "Manager",
        "email": "lee@demcom.co.uk"
      },
      {
        "name": "Matt Nowak",
        "role": "Remediation Director",
        "email": "matt@demcom.co.uk"
      },
      {
        "name": "Rob Meads",
        "role": "Operations Director",
        "email": "rob.meads@demcom.co.uk"
      }
    ]
  },
  {
    "id": 229,
    "name": "DF Roofing",
    "disciplines": [
      "Roofing"
    ],
    "contacts": [
      {
        "name": "Chris Jacobs",
        "role": "Contracts Manager",
        "email": "chris.jacobs@dfroofing.com"
      },
      {
        "name": "Gabriel Paduraru",
        "role": "Contracts Manager",
        "email": "gabriel@dfroofing.com"
      },
      {
        "name": "Jay Curran",
        "role": "Director",
        "email": "jay@dfroofing.com"
      },
      {
        "name": "Liam Dennis",
        "role": "Contract Manager",
        "email": "liam@dfroofing.com"
      },
      {
        "name": "Nick O'Mara",
        "role": "Senior Commercial Manager",
        "email": "nick@dfroofing.com"
      },
      {
        "name": "Taric Connery",
        "role": "Contracts Manager",
        "email": "taric.connery@dfroofing.com"
      }
    ]
  },
  {
    "id": 230,
    "name": "Diamond Build",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "David Lott",
        "role": "Contract Manager",
        "email": "davidlott@diamond-build.com"
      },
      {
        "name": "Neil Mason",
        "role": "Site Manager",
        "email": "neilmason@diamondbuildgroup.com",
        "phone": "07403 871632"
      }
    ]
  },
  {
    "id": 231,
    "name": "DJ Civils",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Aiden James",
        "role": "Site Manager",
        "email": "aiden.james@djcivils.com"
      },
      {
        "name": "Dan Heath",
        "role": "Quantity Surveyor",
        "email": "info@djcivils.com"
      }
    ]
  },
  {
    "id": 232,
    "name": "Dockerill Groundworks Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Lloyd Dockerill",
        "role": "Director",
        "email": "lloyd@dockerillgroup.com"
      }
    ]
  },
  {
    "id": 233,
    "name": "Downwell Enabling Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alan Knight",
        "role": "Marketing & Bid Manager",
        "email": "alan.knight@downwell.co.uk"
      },
      {
        "name": "Alan Nagle",
        "role": "Contracts Manager",
        "email": "alan@downwell.co.uk"
      },
      {
        "name": "Andy McClafferty",
        "role": "Managing Director",
        "email": "andy@downwell.co.uk"
      },
      {
        "name": "Andy Moore",
        "role": "Contract Manager",
        "email": "andy.moore@downwell.co.uk"
      },
      {
        "name": "Bradley Challis",
        "role": "Contract Manager",
        "email": "brad.challis@downwell.co.uk"
      },
      {
        "name": "Chris Young",
        "role": "Contracts Director",
        "email": "chris@downwell.co.uk",
        "phone": "07795 847004"
      },
      {
        "name": "Christopher Young",
        "role": "Contracts Manager",
        "email": "christopher@downwell.co.uk"
      },
      {
        "name": "Craig White",
        "role": "Contracts Manager",
        "email": "craig.white@downwell.co.uk"
      },
      {
        "name": "Dave Flack",
        "role": "Demolition Manager",
        "email": "dave@downwell.co.uk",
        "phone": "07342 990510"
      },
      {
        "name": "Ed Grundon",
        "role": "Head of Marketing & Business Development",
        "email": "ed@downwell.co.uk"
      },
      {
        "name": "Ian Munn",
        "role": "Contract Manager",
        "email": "ian@downwell.co.uk",
        "phone": "7557110862.0"
      },
      {
        "name": "Lewis Turnbull",
        "role": "Contracts Manager",
        "email": "lewis@downwell.co.uk"
      },
      {
        "name": "Mark Roberts",
        "role": "Business Development Director",
        "email": "mark.roberts@downwell.co.uk",
        "phone": "07392 871283"
      },
      {
        "name": "Matt Phillips",
        "role": "Director",
        "email": "matt@downwell.co.uk"
      },
      {
        "name": "Rob Young",
        "role": "Development Director",
        "email": "rob.young@downwell.co.uk",
        "phone": "07392 871283"
      },
      {
        "name": "Taylor-Roy Pitman",
        "role": "Quantity Surveyor",
        "email": "taylor-roy@downwell.co.uk"
      },
      {
        "name": "Shane Chambers",
        "role": "Site Manager",
        "email": "shane.chambers@downwell.co.uk"
      },
      {
        "name": "Shane Fountain",
        "role": "Health and Safety Manager",
        "email": "shane.fountain@downwell.co.uk"
      },
      {
        "name": "Tony Richardson",
        "role": "Contract Manager",
        "email": "tony.richardson@downwell.co.uk"
      }
    ]
  },
  {
    "id": 234,
    "name": "Drain Technology UK Limited (TTM Division)",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Dan Miller",
        "role": "Head of Traffic Management",
        "email": "dan.miller@draintechnology.co.uk"
      }
    ]
  },
  {
    "id": 235,
    "name": "Drytech Construction",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Stephen Deane",
        "role": "Director",
        "email": "stephen.deane@drywalltech.co.uk"
      }
    ]
  },
  {
    "id": 236,
    "name": "Drywall Contracts",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adam Simkins",
        "role": "Quantity Surveyor",
        "email": "adam@drywallcontracts.co.uk"
      },
      {
        "name": "Gareth Saunders",
        "role": "Manager",
        "email": "gareth.saunders@drywallcontracts.co.uk"
      },
      {
        "name": "Jon Jacznik",
        "role": "Director",
        "email": "jon@drywallcontracts.co.uk"
      },
      {
        "name": "Lee Barker",
        "role": "Contract Manager",
        "email": "lee@drywallcontracts.co.uk",
        "phone": "07496 034690"
      },
      {
        "name": "Mike Jacznik",
        "role": "Contracts Manager",
        "email": "mike.jacznik@drywallcontracts.co.uk"
      },
      {
        "name": "Scott Jacznik",
        "role": "Contract Manager",
        "email": "scott@drywallcontracts.co.uk"
      },
      {
        "name": "Steve Biddulph",
        "role": "Operations Manager",
        "email": "steve@drywallcontracts.co.uk",
        "phone": "07522 733980"
      },
      {
        "name": "Tom Parish",
        "role": "Quantity Surveyor",
        "email": "tom@drywallcontracts.co.uk"
      }
    ]
  },
  {
    "id": 237,
    "name": "Drywall Contracts Limited",
    "disciplines": [
      "Dry Lining & Ceilings"
    ],
    "contacts": [
      {
        "name": "Adam Simkins",
        "role": "Quantity Surveyor",
        "email": "adam@drywallcontracts.co.uk"
      },
      {
        "name": "Anthony Reynolds",
        "role": "Site Manager",
        "email": "anthony@drywallcontracts.co.uk"
      },
      {
        "name": "Gareth Saunders",
        "role": "Manager",
        "email": "gareth@drywallcontracts.co.uk"
      },
      {
        "name": "Jon Jacznik",
        "role": "Director",
        "email": "jon@drywallcontracts.co.uk"
      },
      {
        "name": "Lee Barker",
        "role": "Contract Manager",
        "email": "lee@drywallcontracts.co.uk",
        "phone": "07496 034690"
      },
      {
        "name": "Mike Jacznik",
        "role": "Contracts Manager",
        "email": "mike@drywallcontracts.co.uk"
      },
      {
        "name": "Scott Jacznik",
        "role": "Contract Manager",
        "email": "scott@drywallcontracts.co.uk"
      },
      {
        "name": "Steve Biddulph",
        "role": "Operations Manager",
        "email": "steve@drywallcontracts.co.uk",
        "phone": "07522 733980"
      },
      {
        "name": "Tom Parish",
        "role": "Quantity Surveyor",
        "email": "tom@drywallcontracts.co.uk"
      }
    ]
  },
  {
    "id": 238,
    "name": "Drywall Solutions",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alex Vlad",
        "role": "Contracts Manager",
        "email": "alex.vlad@drywallsolutions.net"
      },
      {
        "name": "Emilio Meola",
        "role": "Director",
        "email": "emeola@drywallsolutions.net"
      },
      {
        "name": "Graham Anderson",
        "role": "Buyer",
        "email": "g.anderson@drywallsolutions.net"
      },
      {
        "name": "Igor Rusu",
        "role": "Production Manager",
        "email": "igor.rusu@drywallsolutions.net"
      },
      {
        "name": "John Phillips",
        "role": "Contracts Manager",
        "email": "john.phillips@drywallsolutions.net",
        "phone": "07487 777317"
      },
      {
        "name": "Tony Harris",
        "role": "Operations Director",
        "email": "tony.harris@drywallsolutions.net"
      }
    ]
  },
  {
    "id": 239,
    "name": "Drywall Solutions UK Limited",
    "disciplines": [
      "Dry Lining & Ceilings"
    ],
    "contacts": [
      {
        "name": "Alex Vlad",
        "role": "Contracts Manager",
        "email": "alex.vlad@drywallsolutions.net"
      },
      {
        "name": "Alin Chitoran",
        "role": "Site Manager",
        "email": "alin.chitoran@drywallsolutions.net"
      },
      {
        "name": "Emilio Meola",
        "role": "Director",
        "email": "emeola@drywallsolutions.net"
      },
      {
        "name": "Graham Anderson",
        "role": "Buyer",
        "email": "g.anderson@drywallsolutions.net"
      },
      {
        "name": "Igor Rusu",
        "role": "Production Manager",
        "email": "igor.rusu@drywallsolutions.net"
      },
      {
        "name": "John Phillips",
        "role": "Contracts Manager",
        "email": "john.phillips@drywallsolutions.net",
        "phone": "07487 777317"
      },
      {
        "name": "Malcolm McGregor",
        "role": "Site Manager",
        "email": "malcolm.mcgregor@drywallsolutions.net"
      },
      {
        "name": "Tony Harris",
        "role": "Operations Director",
        "email": "tony.harris@drywallsolutions.net"
      }
    ]
  },
  {
    "id": 240,
    "name": "DSM Demolition",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andrew Fletcher",
        "role": "Managing Director",
        "email": "andrewfletcher@dsmgroup.info",
        "phone": "07818 403441"
      },
      {
        "name": "Billy Young",
        "role": "Technical Director",
        "email": "billy.young@dsmgroup.info",
        "phone": "07751 638058"
      },
      {
        "name": "Billy Young",
        "role": "Contracts Manager",
        "email": "billyy@dsmgroup.info"
      },
      {
        "name": "Colin Burford",
        "role": "Earthworks Manager",
        "email": "colin@dsmgroup.info",
        "phone": "07920 004795"
      },
      {
        "name": "Daniel Kelly",
        "role": "Contracts Manager",
        "email": "daniel@dsmgroup.info"
      },
      {
        "name": "Des Kelly",
        "role": "Contracts Manager",
        "email": "des@dsmgroup.info",
        "phone": "07774 941081"
      },
      {
        "name": "Keiron Jones",
        "role": "Project Manager",
        "email": "keiron.jones@dsmgroup.info"
      },
      {
        "name": "Kieran Madden",
        "role": "Contracts Director",
        "email": "kieran.madden@dsmgroup.info",
        "phone": "07876 250492"
      },
      {
        "name": "Mathew Sprayson",
        "role": "Operations Director",
        "email": "mathew@dsmgroup.info",
        "phone": "07771 576859"
      },
      {
        "name": "Michael Meenagahan",
        "role": "Quantity Surveyor",
        "email": "michael@dsmgroup.info"
      },
      {
        "name": "Oliver Smith",
        "role": "Estimating Manager",
        "email": "oliver.smith@dsmgroup.info"
      },
      {
        "name": "Pat Swift",
        "role": "Project Manager",
        "email": "pat.swift@dsmgroup.info"
      },
      {
        "name": "Robert Cooke",
        "role": "Environmental Manager",
        "email": "robert@dsmgroup.info",
        "phone": "07795 267961"
      },
      {
        "name": "Stephen Young",
        "role": "Health and Safety Manager",
        "email": "stephen.young@dsmgroup.info",
        "phone": "07979 664477"
      },
      {
        "name": "Tim Coppin",
        "role": "Contract Manager",
        "email": "tim.coppin@dsmgroup.info"
      },
      {
        "name": "Tony McGovern",
        "role": "Commercial Manager",
        "email": "tony.mcgovern@dsmgroup.info"
      },
      {
        "name": "Will Scriven",
        "role": "Project Manager",
        "email": "will.scriven@dsmgroup.info"
      }
    ]
  },
  {
    "id": 241,
    "name": "DSM Demolition Limited",
    "disciplines": [
      "Demolition"
    ],
    "contacts": [
      {
        "name": "Andrew Fletcher",
        "role": "Managing Director",
        "email": "andrewfletcher@dsmgroup.info",
        "phone": "07818 403441"
      },
      {
        "name": "Billy Young",
        "role": "Technical Director",
        "email": "billy.young@dsmgroup.info",
        "phone": "07751 638058"
      },
      {
        "name": "Billy Young",
        "role": "Contracts Manager",
        "email": "billyy@dsmgroup.info"
      },
      {
        "name": "Bryon Young",
        "role": "Site Manager",
        "email": "bryon@dsmgroup.info",
        "phone": "07590 297932"
      },
      {
        "name": "Colin Burford",
        "role": "Earthworks Manager",
        "email": "colin@dsmgroup.info",
        "phone": "07920 004795"
      },
      {
        "name": "Daniel Kelly",
        "role": "Contracts Manager",
        "email": "daniel@dsmgroup.info"
      },
      {
        "name": "Des Kelly",
        "role": "Contracts Manager",
        "email": "des@dsmgroup.info",
        "phone": "07774 941081"
      },
      {
        "name": "Issac Scriven",
        "role": "Site Supervisor",
        "email": "issac.scriven@dsmgroup.info"
      },
      {
        "name": "Jim Kelly",
        "email": "jim.kelly@dsmgroup.info"
      },
      {
        "name": "Keiron Jones",
        "role": "Project Manager",
        "email": "keiron.jones@dsmgroup.info"
      },
      {
        "name": "Kieran Madden",
        "role": "Contracts Director",
        "email": "kieran.madden@dsmgroup.info",
        "phone": "07876 250492"
      },
      {
        "name": "Mathew Sprayson",
        "role": "Operations Director",
        "email": "mathew@dsmgroup.info",
        "phone": "07771 576859"
      },
      {
        "name": "Matthew Sprason",
        "role": "Operations Director",
        "email": "matthew.sprason@dsmgroup.info"
      },
      {
        "name": "Michael Meenagahan",
        "role": "Quantity Surveyor",
        "email": "michael@dsmgroup.info"
      },
      {
        "name": "Oliver Smith",
        "role": "Estimating Manager",
        "email": "oliver.smith@dsmgroup.info"
      },
      {
        "name": "Pat Swift",
        "role": "Project Manager",
        "email": "pat.swift@dsmgroup.info"
      },
      {
        "name": "Robert Cooke",
        "role": "Environmental Manager",
        "email": "robert@dsmgroup.info",
        "phone": "07795 267961"
      },
      {
        "name": "Stephen Young",
        "role": "Health and Safety Manager",
        "email": "stephen.young@dsmgroup.info",
        "phone": "07979 664477"
      },
      {
        "name": "Tim Coppin",
        "role": "Contract Manager",
        "email": "tim.coppin@dsmgroup.info"
      },
      {
        "name": "Tony McGovern",
        "role": "Commercial Manager",
        "email": "tony.mcgovern@dsmgroup.info"
      },
      {
        "name": "Will Scriven",
        "role": "Project Manager",
        "email": "will.scriven@dsmgroup.info"
      }
    ]
  },
  {
    "id": 242,
    "name": "Ductclean (UK) Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Becky Mayfield",
        "role": "Business Development Director",
        "email": "becky.mayfield@dcukfm.com",
        "phone": "07935 057695"
      }
    ]
  },
  {
    "id": 243,
    "name": "Duffy Group Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Dave Walker",
        "role": "Contracts Manager",
        "email": "david.walker@duffy.co.uk"
      },
      {
        "name": "Donal Corbett",
        "role": "Managing Director",
        "email": "donalcorbett@duffy.co.uk"
      },
      {
        "name": "Gary Wynne",
        "role": "Commercial Manager",
        "email": "garywynne@duffys.co.uk"
      },
      {
        "name": "Kate Callaghan",
        "role": "Project Manager",
        "email": "kate.callaghan@duffy.co.uk"
      },
      {
        "name": "Richard Walker",
        "role": "Contracts Manager",
        "email": "r.walker@duffys.co.uk"
      }
    ]
  },
  {
    "id": 244,
    "name": "Dunton Environmental Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Anton Nel",
        "role": "Regional Director",
        "email": "anton.nel@duntonenvironmental.co.uk"
      },
      {
        "name": "Benjamin Hicklin",
        "role": "Technical Manager",
        "email": "benjamin.hicklin@duntonenvironmental.co.uk"
      },
      {
        "name": "Dannyjo Cox",
        "role": "Operations Officer",
        "email": "dannyjo.cox@duntonenvironmental.co.uk"
      },
      {
        "name": "Derek Wilson",
        "role": "Site Manager",
        "email": "derek.wilson@duntonenvironmental.co.uk"
      },
      {
        "name": "Jon Lloyd",
        "role": "Contract Manager",
        "email": "jon.lloyd@duntonenvironmental.co.uk",
        "phone": "7721129829.0"
      },
      {
        "name": "Michael Chibukwa",
        "role": "Senior Site Manager",
        "email": "michael.chibukwa@duntonenvironmental.co.uk"
      },
      {
        "name": "Mike Bailey",
        "role": "Bid Manager",
        "email": "mike.bailey@duntonenvironmental.co.uk",
        "phone": "07841 069184"
      },
      {
        "name": "Neil Roe",
        "role": "Managing Director",
        "email": "neil.roe@duntonenvironmental.co.uk"
      },
      {
        "name": "Nick Brews",
        "role": "Contracts Manager",
        "email": "nick.brews@duntonenvironmental.co.uk"
      },
      {
        "name": "Nicklaus Lee-Brews",
        "role": "Contracts Manager",
        "email": "nicklaus.lee-brews@duntonenvironmental.co.uk"
      },
      {
        "name": "Simon Serovla",
        "role": "Contract Manager",
        "email": "simon.serovla@duntonenvironmental.co.uk"
      },
      {
        "name": "Steve England",
        "email": "steve.england@duntonenvironmental.co.uk"
      },
      {
        "name": "Tim Darby",
        "role": "Contracts Manager",
        "email": "tim.darby@duntonenvironmental.co.uk"
      }
    ]
  },
  {
    "id": 245,
    "name": "Durman & Stearn (Civil Engineering) Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Allan Stearn",
        "role": "Contracts Director",
        "email": "astearn@durmanstearn.co.uk"
      },
      {
        "name": "Marcus Till",
        "role": "Contracts Manager",
        "email": "mtill@durmanstearn.co.uk"
      },
      {
        "name": "Mark Boyle",
        "role": "Managing Director",
        "email": "mboyle@durmanstearn.co.uk"
      },
      {
        "name": "Paul Pinner",
        "role": "Contracts Manager",
        "email": "paul.pinner@durmanstearn.co.uk"
      }
    ]
  },
  {
    "id": 246,
    "name": "DVM Global Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "João Vidal",
        "role": "Project Manager",
        "email": "joão.vidal@dvmglobal.co.uk"
      },
      {
        "name": "Pedro Pinto",
        "role": "Project Manager",
        "email": "pedro.pinto@dvmglobal.co.uk",
        "phone": "07498 572336"
      },
      {
        "name": "Rui Macedo",
        "role": "Senior Project Manager",
        "email": "rui.macedo@dvmglobal.co.uk"
      }
    ]
  },
  {
    "id": 247,
    "name": "Dwyer Engineering Services Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Ben Phillips",
        "role": "Contracts Manager",
        "email": "info@dwyereng.co.uk"
      },
      {
        "name": "Frank Dwyer",
        "role": "Managing Director",
        "email": "frankdwyer@dwyereng.co.uk"
      },
      {
        "name": "Ben Phillips",
        "role": "Contracts Manager",
        "email": "ben.phillips@dwyereng.co.uk"
      },
      {
        "name": "Ben Phillips",
        "role": "Contracts Manager"
      }
    ]
  },
  {
    "id": 248,
    "name": "Dynamic Ground Solutions",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andrew Armstrong",
        "role": "Director",
        "email": "andrew.armstrong@dgs.co.uk"
      },
      {
        "name": "Dan Hampton",
        "role": "Quantity Surveyor",
        "email": "dan.hampton@dgs.co.uk"
      },
      {
        "name": "Jim Davies",
        "role": "Contracts Manager",
        "email": "jim.davies@dgs.co.uk"
      },
      {
        "name": "Simon Day",
        "role": "Manager",
        "email": "admin@dgs.co.uk",
        "phone": "07855 472333"
      }
    ]
  },
  {
    "id": 249,
    "name": "Dynamic Ground Solutions Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andrew Armstrong",
        "role": "Director",
        "email": "admin@dgs.co.uk",
        "phone": "08456 430100"
      }
    ]
  },
  {
    "id": 250,
    "name": "E & D Drywall Limited",
    "disciplines": [
      "Dry Lining & Ceilings"
    ],
    "contacts": [
      {
        "name": "Damien Meenan",
        "role": "Project Manager",
        "email": "damien.meenan@eandddrywallltd.co.uk"
      },
      {
        "name": "Laurence Strain",
        "role": "Quantity Surveyor",
        "email": "laurence.strain@eandddrywallltd.co.uk"
      }
    ]
  },
  {
    "id": 251,
    "name": "E Corr Plant Hire",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Brendan Corr",
        "role": "Managing Director",
        "email": "brendan@lplcs.com",
        "phone": "07798 676194"
      },
      {
        "name": "Paul Stubbings",
        "role": "Site Manager",
        "email": "paul.stubbings@lplcs.com",
        "phone": "07766 698519"
      },
      {
        "name": "Rachel Corr",
        "role": "Director",
        "email": "rachael@lplcs.com"
      }
    ]
  },
  {
    "id": 252,
    "name": "E Terry Groundworks Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Dan Tudge",
        "role": "Buyer",
        "email": "dan@etgcivilengineering.co.uk"
      },
      {
        "name": "Dave College",
        "role": "Quantity Surveyor",
        "email": "dave.college@etgcivilengineering.co.uk"
      },
      {
        "name": "Dave Lambert",
        "role": "Contracts Manager",
        "email": "dave.lambert@etgcivilengineering.co.uk",
        "phone": "07798 860342"
      },
      {
        "name": "Declan O'Connolly",
        "role": "Contract Manager",
        "email": "declan.oconnolly@etgcivilengineering.co.uk"
      },
      {
        "name": "Edward Terry",
        "role": "Contracts Manager",
        "email": "edward@etgcivilengineering.co.uk",
        "phone": "07977 146840"
      },
      {
        "name": "Edward Towey",
        "email": "edward.towey@etgcivilengineering.co.uk"
      },
      {
        "name": "Graham Cooper",
        "role": "Quantity Surveyor",
        "email": "graham@etgcivilengineering.co.uk"
      },
      {
        "name": "Illy Pisargiac",
        "role": "Contracts Manager",
        "email": "illy.pisargiac@etgcivilengineering.co.uk"
      },
      {
        "name": "John Donoher",
        "role": "Quantity Surveyor",
        "email": "john@etgcivilengineering.co.uk",
        "phone": "07792 492635"
      },
      {
        "name": "Keiran Kelly",
        "role": "Contract Manager",
        "email": "keiran.kelly@etgcivilengineering.co.uk"
      },
      {
        "name": "Nickie Thompson",
        "role": "Buyer",
        "email": "nicola@etgcivilengineering.co.uk"
      },
      {
        "name": "Ryan Bunton",
        "role": "Quantity Surveyor",
        "email": "ryan.bunton@etgcivilengineering.co.uk",
        "phone": "07456 809557"
      },
      {
        "name": "Sam Rudd",
        "role": "Contracts Manager",
        "email": "sam.rudd@etgcivilengineering.co.uk"
      }
    ]
  },
  {
    "id": 253,
    "name": "E.A.C Group Of Companies Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alex Fortune",
        "role": "Contracts Manager",
        "email": "alex@eacgroup.net"
      },
      {
        "name": "Derek Clark",
        "role": "Contracts Manager",
        "email": "derek@eacgroup.net"
      },
      {
        "name": "Mark Lappage",
        "role": "Project Manager",
        "email": "mark@eacgroup.net"
      }
    ]
  },
  {
    "id": 254,
    "name": "ECL Groundworks & Civil Engineering",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "David Fil",
        "role": "Contracts Manager",
        "email": "david.fil@eclcivils.co.uk",
        "phone": "7970678053.0"
      },
      {
        "name": "Jordan Mongey",
        "role": "Quantity Surveyor",
        "email": "jordan.mongey@eclcivils.co.uk"
      },
      {
        "name": "Michael Button",
        "role": "Quantity Surveyor",
        "email": "michael.button@eclcilvils.co.uk"
      },
      {
        "name": "Patrick O'Loughlin",
        "role": "Site Manager",
        "email": "patrick.oloughlin@eclcivils.co.uk",
        "phone": "7936368618.0"
      },
      {
        "name": "Shawn O'Malley",
        "email": "shawn.omalley@eclcivils.co.uk",
        "phone": "7453588909.0"
      },
      {
        "name": "Steve Harper",
        "role": "Operations Director",
        "email": "steve.harper@eclcivils.co.uk"
      },
      {
        "name": "Vulie Major",
        "role": "Project Manager",
        "email": "vulie.major@eclcivils.co.uk"
      },
      {
        "name": "Michael Button",
        "role": "Quantity Surveyor",
        "email": "michael.button@eclcivils.co.uk"
      }
    ]
  },
  {
    "id": 255,
    "name": "Eco Green Roofs Limited",
    "disciplines": [
      "Roofing"
    ],
    "contacts": [
      {
        "name": "Aidan Lane",
        "role": "Manager",
        "email": "a.lane@egr.co.uk",
        "phone": "07591 954884"
      },
      {
        "name": "Jeff Thackeray",
        "role": "Operations Director",
        "email": "jeff.thackeray@egr.co.uk",
        "phone": "07999 028421"
      },
      {
        "name": "Paul Jennings",
        "role": "Project Manager",
        "email": "paul.jennings@egr.co.uk",
        "phone": "07821 683010"
      }
    ]
  },
  {
    "id": 256,
    "name": "EE Structures",
    "disciplines": [
      "RC Frame"
    ],
    "contacts": [
      {
        "name": "Tim Mantranxhi",
        "role": "Director",
        "email": "tim.mantranxhi@eestructures.co.uk",
        "phone": "075 7726 9338"
      },
      {
        "name": "Contracts Team",
        "email": "info@eestructures.co.uk"
      }
    ]
  },
  {
    "id": 257,
    "name": "Eire Contracts Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Sean Maguire",
        "role": "Manager",
        "email": "sean@eirecontracts.com",
        "phone": "07385 108877"
      }
    ]
  },
  {
    "id": 258,
    "name": "EJ Roberts Roofing Limited",
    "disciplines": [
      "Roofing"
    ],
    "contacts": [
      {
        "name": "Charlie Pardoe",
        "role": "Estimator",
        "email": "charlie@robertsroofing.co.uk"
      },
      {
        "name": "Dean Skipper",
        "role": "Contracts Manager",
        "email": "dean@robertsroofing.co.uk"
      },
      {
        "name": "Emerson Bennett",
        "role": "Contracts Manager",
        "email": "emerson@robertsroofing.co.uk",
        "phone": "07793 777281"
      }
    ]
  },
  {
    "id": 259,
    "name": "EJ Taylor & Sons Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "David Taylor",
        "email": "dtaylor@ejtaylor.co.uk"
      },
      {
        "name": "Gary Fenner",
        "role": "Quantity Surveyor",
        "email": "gfenner@ejtaylor.co.uk"
      },
      {
        "name": "Lawson Brooks",
        "role": "Design Manager",
        "email": "lawson.brooks@ejtaylor.co.uk"
      },
      {
        "name": "Phil Brown",
        "role": "Head of Construction",
        "email": "pbrown@ejtconstruction.co.uk",
        "phone": "07803 187614"
      }
    ]
  },
  {
    "id": 260,
    "name": "Elements Europe Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Kevin Arthur",
        "role": "Head of Sales",
        "email": "kevin.arthur@elements-europe.com",
        "phone": "7736921652.0"
      },
      {
        "name": "Mark Saunders",
        "role": "Project Manager",
        "email": "mark.saunders@elements-europe.com"
      },
      {
        "name": "Kevin Arthur",
        "role": "Head of Sales",
        "email": "info@elements-europe.com",
        "phone": "7736921652.0"
      }
    ]
  },
  {
    "id": 261,
    "name": "Elite Landscapes Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Bruce Quigley",
        "role": "Manager",
        "email": "bruce.quigley@elitelandscapes.co.uk"
      },
      {
        "name": "Claudiu Pisica",
        "role": "Project Manager",
        "email": "claudiu.pisica@elitelandscapes.co.uk",
        "phone": "07508 830397"
      },
      {
        "name": "Dave Twist",
        "role": "Managing Director",
        "email": "dave@elitelandscapes.co.uk",
        "phone": "07879 405616"
      },
      {
        "name": "Iulan",
        "role": "Project Manager",
        "email": "iulan@elitelandscapes.co.uk",
        "phone": "07860 121278"
      },
      {
        "name": "Luke Powley",
        "role": "Project Manager",
        "email": "luke.powley@elitelandscapes.co.uk",
        "phone": "07867 492010"
      },
      {
        "name": "Marius Doroftei",
        "role": "Site Manager",
        "email": "marius.doroftei@elitelandscapes.co.uk",
        "phone": "07462 797179"
      },
      {
        "name": "Mark Robinson",
        "role": "Senior Commercial Manager",
        "email": "mark.robinson@elitelandscapes.co.uk"
      },
      {
        "name": "Mark Unwin",
        "role": "Project Director",
        "email": "markunwin@elitelandscapes.co.uk",
        "phone": "07487 226496"
      },
      {
        "name": "Oscar Sorabjee",
        "role": "Director",
        "email": "oscar.sorabjee@elitelandscapes.co.uk",
        "phone": "07494 598953"
      },
      {
        "name": "Paolo Tortorelli",
        "role": "Project Manager",
        "email": "paolo.tortorelli@elitelandscapes.co.uk"
      },
      {
        "name": "Petre Perdescu",
        "role": "Contracts Manager",
        "email": "petre.perdescu@elitelandscapes.co.uk",
        "phone": "07466 728794"
      },
      {
        "name": "Scott Hawkes",
        "role": "Director",
        "email": "scott.hawkes@elitelandscapes.co.uk",
        "phone": "07799 760575"
      }
    ]
  },
  {
    "id": 262,
    "name": "Elite Linings Limited",
    "disciplines": [
      "Dry Lining & Ceilings"
    ],
    "contacts": [
      {
        "name": "Amber Shemwell",
        "role": "Site Services",
        "email": "amber@elitelinings.co.uk",
        "phone": "07592 528375"
      },
      {
        "name": "Ian Shemwell",
        "role": "Managing Director",
        "email": "ian@elitelinings.co.uk"
      }
    ]
  },
  {
    "id": 263,
    "name": "Elite Metalcraft Company Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "John Martin",
        "role": "Contracts Manager",
        "email": "john.martin@elitemetalcraft.co.uk"
      },
      {
        "name": "Peyman Jahanbakhsh",
        "role": "Civil Engineer",
        "email": "peyman@elitemetalcraft.co.uk"
      },
      {
        "name": "Sande Gutierez",
        "role": "Surveyor",
        "email": "sande@vaughansf.co.uk"
      },
      {
        "name": "Tom Gallagher",
        "role": "Managing Director",
        "email": "tom@elitemetalcraft.co.uk"
      }
    ]
  },
  {
    "id": 264,
    "name": "Elite Project Services",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Martin Dunne",
        "role": "Director",
        "email": "martin.dunne@eliteprojectservices.com"
      }
    ]
  },
  {
    "id": 265,
    "name": "Elland Steel Structures Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andrew Sutcliffe",
        "role": "Contracts Director / Project Manager",
        "email": "a.sutcliffe@ellandsteel.com"
      },
      {
        "name": "Jeremy Shorrocks",
        "role": "Commercial Manager",
        "email": "j.shorrocks@ellandsteel.com"
      },
      {
        "name": "Karl Haslam",
        "role": "Project Manager",
        "email": "k.haslam@ellandsteel.com",
        "phone": "07850 746063"
      },
      {
        "name": "Kelvin Wroe",
        "role": "Contract Manager",
        "email": "k.wroe@ellandsteel.com",
        "phone": "07866 414790"
      },
      {
        "name": "Kevin Nelson",
        "role": "Contract Manager",
        "email": "kevin.nelson@ellandsteel.com"
      },
      {
        "name": "Lynn Rudkin",
        "role": "Contract Administrator",
        "email": "l.rudkin@ellandsteel.com"
      },
      {
        "name": "Mark Wingrove",
        "role": "Contracts Manager",
        "email": "m.wingrove@ellandsteel.com"
      },
      {
        "name": "Paul Kitching",
        "role": "Managing Director",
        "email": "paul.kitching@ellandsteel.com"
      },
      {
        "name": "Simon Darley",
        "role": "Project Manager",
        "email": "s.darley@ellandsteel.com",
        "phone": "07841 910812"
      }
    ]
  },
  {
    "id": 266,
    "name": "Elm Contractors",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Stephen Ian Abbis",
        "role": "Director",
        "email": "steve@elmcontractorsltd.co.uk"
      }
    ]
  },
  {
    "id": 267,
    "name": "Elm Contractors Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Stephen Ian Abbis",
        "role": "Director",
        "email": "steve@elmcontractorsltd.co.uk"
      }
    ]
  },
  {
    "id": 268,
    "name": "Elm Site Services Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Michael Steel",
        "role": "Director",
        "email": "msteel@elmsiteservices.com"
      }
    ]
  },
  {
    "id": 269,
    "name": "Elmcroft Construction",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Colin Barnes",
        "role": "Managing Director",
        "email": "colin.barnes@elmcroftconstruction.co.uk",
        "phone": "07825 944821"
      },
      {
        "name": "Barnaby Stedman",
        "role": "Operations Manager",
        "email": "barnaby.stedman@elmcroftconstruction.co.uk"
      },
      {
        "name": "Damien Oliver",
        "role": "Contracts Manager",
        "email": "damien.oliver@elmcroftconstruction.co.uk"
      },
      {
        "name": "George Reed",
        "role": "Contracts Manager",
        "email": "george.reed@elmcroftconstruction.co.uk"
      },
      {
        "name": "Issam Al-Jammal",
        "role": "Project Manager",
        "email": "issam.al-jammal@elmcroftconstruction.co.uk"
      },
      {
        "name": "Mircea Mereuta",
        "role": "Construction Manager",
        "email": "mircea.mereuta@elmcroftconstruction.co.uk"
      }
    ]
  },
  {
    "id": 270,
    "name": "Elson Group (Construction) Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Rod Fisher",
        "role": "Contracts Manager",
        "email": "rod@elsongroup.co.uk"
      },
      {
        "name": "Sam Lewis",
        "role": "Managing Director",
        "email": "sam@elsongroup.co.uk",
        "phone": "07812 335246"
      }
    ]
  },
  {
    "id": 271,
    "name": "Embassy Demolition Contractors",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Chris Langton",
        "role": "Contracts Manager",
        "email": "chris@embassydemo.co.uk"
      },
      {
        "name": "Sean O'Doherty",
        "role": "Project Director",
        "email": "sean@embassydemo.co.uk"
      }
    ]
  },
  {
    "id": 272,
    "name": "Embassy Demolition Contractors Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Chris Langton",
        "role": "Contracts Manager",
        "email": "chris@embassydemo.co.uk"
      },
      {
        "name": "Kim Harris",
        "email": "kim@embassydemo.co.uk"
      },
      {
        "name": "Sean O'Doherty",
        "role": "Project Director",
        "email": "sean@embassydemo.co.uk"
      }
    ]
  },
  {
    "id": 273,
    "name": "End Systems",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Dale Kenyon",
        "role": "BDM",
        "email": "dale.kenyon@endsystems.co.uk",
        "phone": "07515 973713"
      },
      {
        "name": "Gary Swindells",
        "role": "Contracts Manager",
        "email": "gary.swindells@endsystems.co.uk"
      },
      {
        "name": "Nick Boardman",
        "role": "Commissioning Manager",
        "email": "nick.boardman@endsystems.co.uk",
        "phone": "07921 687754"
      },
      {
        "name": "Rob Cleworth",
        "role": "Project Manager",
        "email": "rob.cleworth@endsystems.co.uk"
      },
      {
        "name": "Steve Kelly",
        "role": "Project Director",
        "email": "steve.kelly@endsystems.co.uk",
        "phone": "07836 370174"
      }
    ]
  },
  {
    "id": 274,
    "name": "End Systems Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Dale Kenyon",
        "role": "BDM",
        "email": "dale.kenyon@endsystems.co.uk",
        "phone": "07515 973713"
      },
      {
        "name": "Gary Swindells",
        "role": "Contracts Manager",
        "email": "gary.swindells@endsystems.co.uk"
      },
      {
        "name": "Nick Boardman",
        "role": "Commissioning Manager",
        "email": "nick.boardman@endsystems.co.uk",
        "phone": "07921 687754"
      },
      {
        "name": "Rob Cleworth",
        "role": "Project Manager",
        "email": "rob.cleworth@endsystems.co.uk"
      },
      {
        "name": "Steve Kelly",
        "role": "Project Director",
        "email": "steve.kelly@endsystems.co.uk",
        "phone": "07836 370174"
      }
    ]
  },
  {
    "id": 275,
    "name": "Energ-Eyes Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Daniel Dunn",
        "role": "Business Development Manager",
        "email": "daniel@energeyes.me",
        "phone": "07523 029558"
      }
    ]
  },
  {
    "id": 276,
    "name": "Engcon Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Gabriel Mihai",
        "role": "Senior Site Manager",
        "email": "gmihai@engconcl.co.uk",
        "phone": "07775 672207"
      },
      {
        "name": "Gary Dann",
        "role": "Director",
        "email": "gdann@engconcl.co.uk",
        "phone": "07803 598065"
      },
      {
        "name": "Mike English",
        "role": "Managing Director",
        "email": "menglish@engconcl.co.uk"
      }
    ]
  },
  {
    "id": 277,
    "name": "Entex Projects Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alex Dica",
        "role": "Contracts Manager",
        "email": "alex@entexprojects.co.uk"
      },
      {
        "name": "Ben Jackson",
        "role": "Buyer",
        "email": "bjackson@entexprojects.co.uk"
      },
      {
        "name": "Bernice Lovett",
        "role": "Manager",
        "email": "blovett@entexprojects.co.uk"
      },
      {
        "name": "Darren Walsh",
        "role": "Director",
        "email": "dwalsh@entexprojects.co.uk",
        "phone": "7792609148.0"
      },
      {
        "name": "Mark Bermingham",
        "role": "Contracts Manager",
        "email": "mbermingham@entexprojects.co.uk",
        "phone": "7718773142.0"
      },
      {
        "name": "Nicole Carey",
        "role": "Office Manager",
        "email": "ncarey@entexprojects.co.uk"
      },
      {
        "name": "Nistor Juravle",
        "role": "Site Manager",
        "email": "njuravle@entexprojects.co.uk"
      },
      {
        "name": "Noel Murphy",
        "role": "Site Manager",
        "email": "noel.murphy@entexprojects.co.uk"
      },
      {
        "name": "Paul Griffin",
        "role": "Buyer",
        "email": "paul.griffin@entexprojects.co.uk"
      },
      {
        "name": "Shane Mangan",
        "role": "Director of Operations",
        "email": "smangan@entexprojects.co.uk"
      },
      {
        "name": "Shane Walsh",
        "role": "Director",
        "email": "swalsh@entexprojects.co.uk",
        "phone": "7974208280.0"
      }
    ]
  },
  {
    "id": 278,
    "name": "EP Masonry",
    "disciplines": [
      "Brickwork"
    ],
    "contacts": [
      {
        "name": "Gavin Flynn",
        "role": "Director",
        "email": "gflynn@ep-masonry.com"
      }
    ]
  },
  {
    "id": 279,
    "name": "EQB Groundworks & Civil Engineering",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Daniel Burton",
        "role": "Contracts Manager",
        "email": "daniel.burton@eqbc.co.uk"
      },
      {
        "name": "Harry Burton",
        "role": "Contracts Manager",
        "email": "harry.burton@eqbc.co.uk"
      }
    ]
  },
  {
    "id": 280,
    "name": "EQB Groundworks & Civil Engineering Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Daniel Burton",
        "role": "Contracts Manager",
        "email": "daniel.burton@eqbc.co.uk"
      },
      {
        "name": "Harry Burton",
        "role": "Contracts Manager",
        "email": "harry.burton@eqbc.co.uk"
      },
      {
        "name": "Mark Chamberlain",
        "role": "Site Supervisor",
        "email": "mark.chamberlain@eqbc.co.uk"
      }
    ]
  },
  {
    "id": 281,
    "name": "Equans",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andrew Bate",
        "role": "Project Manager",
        "email": "andrew.bate@equans.com",
        "phone": "07816 092340"
      },
      {
        "name": "Brian Stern",
        "role": "Divisional Manager",
        "email": "brian.stern@equans.com"
      },
      {
        "name": "Daniel Morris",
        "role": "Planner",
        "email": "daniel.morris1@equans.com",
        "phone": "07850 841131"
      },
      {
        "name": "David Midgley",
        "email": "david.midgley@equans.com"
      },
      {
        "name": "Ethan Young",
        "role": "Site Engineer",
        "email": "ethan.young@equans.com"
      },
      {
        "name": "Graeme McClurg",
        "role": "Design Coordinator",
        "email": "graeme.mcclurg@equans.com",
        "phone": "07944 514577"
      },
      {
        "name": "Ivan Osburn",
        "email": "ivan.osburn@equans.com"
      },
      {
        "name": "Jack Ovens",
        "role": "Quantity Surveyor",
        "email": "jack.ovens@equans.com"
      },
      {
        "name": "James Cousins",
        "role": "Regeneration Director",
        "email": "james.cousins@equans.com"
      },
      {
        "name": "James Hegarty",
        "role": "Senior Quantity Surveyor",
        "email": "james.hegarty@equans.com"
      },
      {
        "name": "James Mack",
        "role": "Project Manager",
        "email": "james.mack@equans.com"
      },
      {
        "name": "Jane Flower",
        "role": "Office Manager",
        "email": "jane.flower@equans.com"
      },
      {
        "name": "Liam Bailey",
        "role": "Divisional Director",
        "email": "liam.bailey@equans.com"
      },
      {
        "name": "Makhmud Mamadjanov",
        "role": "Site Manager",
        "email": "makhmud.mamadjanov@equans.com"
      },
      {
        "name": "Matthew Littman",
        "role": "Site Manager",
        "email": "matthew.littman@equans.com"
      },
      {
        "name": "Mohammed Patel",
        "role": "Quantity Surveyor",
        "email": "mohammed.patel@equans.com"
      },
      {
        "name": "Owen O'Neal",
        "role": "Contracts Manager",
        "email": "owen.oneal@equans.com"
      },
      {
        "name": "Patrick Warren",
        "role": "Social Value Co-Ordinator",
        "email": "patrick.warren@equans.com"
      },
      {
        "name": "Paul Bingham",
        "role": "Regional Director",
        "email": "paul.bingham@equans.com"
      },
      {
        "name": "Peter Banks",
        "email": "peter.banks@equans.com"
      },
      {
        "name": "Rob Young",
        "role": "Managing Director",
        "email": "rob.young@equans.com"
      },
      {
        "name": "Thomas Elliott",
        "role": "Quantity Surveyor",
        "email": "thomas.elliott@equans.com"
      },
      {
        "name": "Tom Cookman",
        "role": "Cost Planner",
        "email": "tom.cookman@equans.com"
      },
      {
        "name": "Vince Callari",
        "role": "Regional Commercial Manager",
        "email": "vince.callari@equans.com"
      },
      {
        "name": "William MacInnes",
        "role": "Quantity Surveyor",
        "email": "william.macinnes@equans.com"
      },
      {
        "name": "Andrew Millard",
        "role": "Quantity Surveyor",
        "email": "andrew.millard@equans.com"
      }
    ]
  },
  {
    "id": 282,
    "name": "Equibuild UK Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Dan Burton",
        "role": "Quantity Surveyor",
        "email": "dan.burton@equibuild-construction.co.uk"
      },
      {
        "name": "Dan Read",
        "role": "Unknown",
        "email": "dan.read@equibuild-construction.co.uk"
      },
      {
        "name": "Robert Davis",
        "role": "Account Manager",
        "email": "enquiries@eqbc.co.uk"
      },
      {
        "name": "Vas Mile",
        "role": "Contracts Manager",
        "email": "v.mile@eqbc.co.uk"
      }
    ]
  },
  {
    "id": 283,
    "name": "Erith Group",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Aaron Porter",
        "role": "Project Manager",
        "email": "aaron.porter@erith.com"
      },
      {
        "name": "Allan Manning",
        "role": "SHEQ Manager",
        "email": "allan.manning@erith.com"
      },
      {
        "name": "Amy Townsend",
        "role": "PA/Office Manager",
        "email": "amy.townsend@erith.com"
      },
      {
        "name": "Andrew Waldren",
        "role": "Contracts Manager",
        "email": "andrew.waldren@erith.com"
      },
      {
        "name": "Andy Craig",
        "role": "Sustainability Leader",
        "email": "andy.craig@erith.com"
      },
      {
        "name": "Andy Dyson",
        "role": "Operations Director",
        "email": "andy.dyson@erith.com"
      },
      {
        "name": "Ashley Notman",
        "role": "Project Manager",
        "email": "ashley.notman@erith.com"
      },
      {
        "name": "Barry Fisher",
        "role": "Project Leader",
        "email": "bfisher@erith.com"
      },
      {
        "name": "Ben Staples",
        "role": "Contracts Manager",
        "email": "ben.staples@erith.com",
        "phone": "07785 455333"
      },
      {
        "name": "Brian Moore",
        "role": "Site Manager",
        "email": "brian.moore@erith.com",
        "phone": "07950 938534"
      },
      {
        "name": "Carl Timblin",
        "role": "Site Manager",
        "email": "carl.timblin@erith.com"
      },
      {
        "name": "Charlie Pearmaine",
        "role": "Project Manager",
        "email": "charlie.pearmaine@erith.com"
      },
      {
        "name": "Cherrie O'Kane",
        "role": "Community Manager",
        "email": "co'kane@erith.com",
        "phone": "07894 259321"
      },
      {
        "name": "Chris Turok-Hallam",
        "role": "Health & Safety Manager",
        "email": "chris.turok-hallam@erith.com"
      },
      {
        "name": "Craig Jackson",
        "role": "Project Manager",
        "email": "craig.jackson@erith.com"
      },
      {
        "name": "Daniel Marchant",
        "role": "Project Manager",
        "email": "dmarchant@erith.com",
        "phone": "07471 904166"
      },
      {
        "name": "Danny Mercer",
        "role": "Senior Site Manager",
        "email": "dmercer@erith.com"
      },
      {
        "name": "Darryl Allen",
        "role": "Project Manager",
        "email": "darryl.allen@erith.com",
        "phone": "07824 665247"
      },
      {
        "name": "David Moylan",
        "role": "Pre Construction Director",
        "email": "david.moylan@erith.com"
      },
      {
        "name": "Edward Hier",
        "role": "Project Manager",
        "email": "ehier@erith.com",
        "phone": "07542 622938"
      },
      {
        "name": "Fiona Ireland",
        "role": "Liaison Officer",
        "email": "fiona.ireland@erith.com",
        "phone": "07407 813683"
      },
      {
        "name": "Grant Styles",
        "role": "Contracts Manager",
        "email": "grant.styles@erith.com",
        "phone": "07912 120819"
      },
      {
        "name": "Gus Manley-Clarke",
        "role": "Project Manager",
        "email": "gus.manley-clarke@erith.com"
      },
      {
        "name": "James Williams",
        "role": "Contracts Manager",
        "email": "james.williams@erith.com"
      },
      {
        "name": "Kali Hagenstede",
        "role": "Project Manager",
        "email": "kali.hagenstede@erith.com",
        "phone": "07884 588737"
      },
      {
        "name": "Lee Perks",
        "role": "Purchasing Manager",
        "email": "lee.perks@erith.com"
      },
      {
        "name": "Mark Jack",
        "role": "Regional Operations Manager",
        "email": "mark.jack@erith.com",
        "phone": "07818 592539"
      },
      {
        "name": "Mark Lancaster",
        "role": "Site Manager",
        "email": "mark.lancaster@erith.com"
      },
      {
        "name": "Matt Balson",
        "role": "Senior Project Manager",
        "email": "matt.balson@erith.com"
      },
      {
        "name": "Oliver Dowling",
        "email": "oliver.dowling@erith.com"
      },
      {
        "name": "Owain Davey",
        "role": "Project Manager",
        "email": "owain.davey@erith.com"
      },
      {
        "name": "Pete Lilburn",
        "role": "Project Manager",
        "email": "plilburn@erith.com"
      },
      {
        "name": "Phil Roe",
        "role": "Contract Manager",
        "email": "phil.roe@erith.com",
        "phone": "07468 694842"
      },
      {
        "name": "Richard Turner",
        "role": "Site Manager",
        "email": "richard.turner@erith.com",
        "phone": "07785 455356"
      },
      {
        "name": "Roberto Timanti",
        "role": "Project Manager",
        "email": "roberto.timanti@erith.com",
        "phone": "07823 555697"
      },
      {
        "name": "Roisin Benfield",
        "role": "Project Manager",
        "email": "roisin.benfield@erith.com"
      },
      {
        "name": "Roisin Flynn",
        "role": "Project Manager",
        "email": "roisin.flynn@erith.com",
        "phone": "07775 383255"
      },
      {
        "name": "Roy Pitchford",
        "role": "Project Manager",
        "email": "roy.pitchford@erith.com"
      },
      {
        "name": "Scott Dawson",
        "role": "Contracts Manager",
        "email": "scott.dawson@erith.com",
        "phone": "07824 151570"
      },
      {
        "name": "Scott Lardner",
        "role": "Project Manager / Contracts Manager",
        "email": "slardner@erith.com",
        "phone": "07833 465357"
      },
      {
        "name": "Sean Morris",
        "role": "Site Manager",
        "email": "sean.morris@erith.com",
        "phone": "07802 799570"
      },
      {
        "name": "Shane Lake",
        "role": "Project Manager",
        "email": "slake@erith.com"
      },
      {
        "name": "Stan Smyth",
        "role": "Site Manager",
        "email": "stan.smyth@erith.com"
      },
      {
        "name": "Steven Gilliam",
        "role": "Project Manager",
        "email": "sgilliam@erith.com",
        "phone": "07930 545969"
      },
      {
        "name": "Stuart Accleton",
        "role": "Director",
        "email": "stuart.accleton@erith.com",
        "phone": "07770 943474"
      },
      {
        "name": "Stuart Davis",
        "role": "Contracts Assistant",
        "email": "stuart.davis@erith.com",
        "phone": "07881 093088"
      },
      {
        "name": "Terry Madden",
        "role": "Operations Director",
        "email": "terry.madden@erith.com"
      },
      {
        "name": "Tracy Eden",
        "role": "Business Development Manager",
        "email": "teden@erith.com"
      }
    ]
  },
  {
    "id": 284,
    "name": "Errigal Contracts",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alan Birdy",
        "role": "Quantity Surveyor",
        "email": "alanbirdy@errigalcontracts.com"
      },
      {
        "name": "Alan Broderick",
        "role": "Project Manager",
        "email": "alanbroderick@errigalcontracts.com",
        "phone": "07714 290509"
      },
      {
        "name": "Anthony Murray",
        "role": "Senior Project Manager",
        "email": "anthony.murray@errigalcontracts.com"
      },
      {
        "name": "Eamonn Laverty",
        "role": "Project Director",
        "email": "eamonnlaverty@errigalcontracts.com",
        "phone": "07469 358648"
      },
      {
        "name": "Enda McGarrity",
        "role": "Contracts Director",
        "email": "enda.mcgarrity@errigalcontracts.com"
      },
      {
        "name": "Fla Oltean",
        "role": "Senior Project Manager",
        "email": "fla.oltean@errigalcontracts.com",
        "phone": "07718 565653"
      },
      {
        "name": "James O'Kane",
        "role": "Commercial Manager",
        "email": "james.okane@errigalcontracts.com"
      },
      {
        "name": "John Canavan",
        "role": "Commercial Lead",
        "email": "jc@errigalcontracts.com",
        "phone": "07730 563262"
      },
      {
        "name": "Mark Landers",
        "role": "Quantity Surveyor",
        "email": "marklanders@errigalgroup.ie"
      },
      {
        "name": "Michael McGuinness",
        "role": "Project Manager",
        "email": "michaelmcguinness@errigalcontracts.com"
      },
      {
        "name": "Orlaith McCloskey",
        "role": "Quantity Surveyor",
        "email": "orlaith.mccloskey@errigalcontracts.com"
      },
      {
        "name": "Patrick McClusky",
        "role": "Quantity Surveyor",
        "email": "patrick.mcclusky@errigalcontracts.com"
      },
      {
        "name": "Peter McCloskey",
        "role": "Contract Manager",
        "email": "peter.mccloskey@errigalcontracts.com"
      },
      {
        "name": "Scott Templeton",
        "role": "Head of Design",
        "email": "scott.templeton@errigalcontracts.com"
      },
      {
        "name": "Shane Hughes",
        "role": "Contracts Manager",
        "email": "shanehughes@errigalcontracts.com"
      },
      {
        "name": "Shauneen Harris",
        "role": "Procurement Manager",
        "email": "shauneen.harris@errigalcontracts.com"
      },
      {
        "name": "Stuart Hodgkinson",
        "role": "Contracts Manager",
        "email": "stuart.hodgkinson@errigalcontracts.com"
      }
    ]
  },
  {
    "id": 285,
    "name": "Errigal Group",
    "disciplines": [
      "Dry Lining & Ceilings"
    ],
    "contacts": [
      {
        "name": "Alan Birdy",
        "role": "Quantity Surveyor",
        "email": "alanbirdy@errigalcontracts.com"
      },
      {
        "name": "Alan Broderick",
        "role": "Project Manager",
        "email": "alanbroderick@errigalcontracts.com",
        "phone": "07714 290509"
      },
      {
        "name": "Alan Kelly",
        "role": "Buyer",
        "email": "alankelly@errigalcontracts.com"
      },
      {
        "name": "Anthony Murray",
        "role": "Senior Project Manager",
        "email": "anthonymurray@errigalcontracts.com"
      },
      {
        "name": "Arturas Nrvikas",
        "role": "Site Manager",
        "email": "arturasnrvikas@errigalcontracts.com"
      },
      {
        "name": "Connor Smith",
        "role": "Site Manager",
        "email": "connorsmith@errigalcontracts.com"
      },
      {
        "name": "Eamonn Laverty",
        "role": "Project Director",
        "email": "eamonnlaverty@errigalcontracts.com",
        "phone": "07469 358648"
      },
      {
        "name": "Enda McGarrity",
        "role": "Contracts Director",
        "email": "endamcgarrity@errigalcontracts.com"
      },
      {
        "name": "Fla Oltean",
        "role": "Senior Project Manager",
        "email": "flaoltean@errigalcontracts.com",
        "phone": "07718 565653"
      },
      {
        "name": "James O'Kane",
        "role": "Commercial Manager",
        "email": "jamesokane@errigalcontracts.com"
      },
      {
        "name": "Joanne Bell",
        "role": "Buyer",
        "email": "joannebell@errigalcontracts.com"
      },
      {
        "name": "John Canavan",
        "role": "Commercial Lead",
        "email": "jc@errigalcontracts.com",
        "phone": "07730 563262"
      },
      {
        "name": "Mark Landers",
        "role": "Quantity Surveyor",
        "email": "marklanders@errigalgroup.ie"
      },
      {
        "name": "Michael McGuinness",
        "role": "Project Manager",
        "email": "michaelmcguinness@errigalcontracts.com"
      },
      {
        "name": "Orlaith McCloskey",
        "role": "Quantity Surveyor",
        "email": "orlaithmccloskey@errigalcontracts.com"
      },
      {
        "name": "Patrick McClusky",
        "role": "Quantity Surveyor",
        "email": "patrickmcclusky@errigalcontracts.com"
      },
      {
        "name": "Peter McCloskey",
        "role": "Contract Manager",
        "email": "petermccloskey@errigalcontracts.com"
      },
      {
        "name": "Scott Templeton",
        "role": "Head of Design",
        "email": "scotttempleton@errigalcontracts.com"
      },
      {
        "name": "Shane Hughes",
        "role": "Contracts Manager",
        "email": "shanehughes@errigalcontracts.com"
      },
      {
        "name": "Shauneen Harris",
        "role": "Procurement Manager",
        "email": "shauneenharris@errigalcontracts.com"
      },
      {
        "name": "Stuart Hodgkinson",
        "role": "Contracts Manager",
        "email": "stuarthodgkinson@errigalcontracts.com"
      },
      {
        "name": "Tadas Jaksaitis",
        "role": "Logistics Manager",
        "email": "tadasjaksaitis@errigalcontracts.com"
      },
      {
        "name": "Fla Oltean",
        "role": "Senior Project Manager",
        "phone": "07718 565653"
      }
    ]
  },
  {
    "id": 286,
    "name": "Euro Brickwork",
    "disciplines": [
      "Brickwork"
    ],
    "contacts": [
      {
        "name": "Andy Emery",
        "role": "Managing Director",
        "email": "andy.emery@eurobrickwork.co.uk",
        "phone": "07719 594104"
      },
      {
        "name": "Bailey Long",
        "role": "Contracts Manager",
        "email": "bailey.long@eurobrickwork.co.uk"
      },
      {
        "name": "Lee England",
        "role": "Operations Director",
        "email": "lee.england@eurobrickwork.co.uk",
        "phone": "07704 013696"
      },
      {
        "name": "Luke Emery",
        "role": "Commercial Director",
        "email": "luke.emery@eurobrickwork.co.uk"
      },
      {
        "name": "Paul Eaglestone",
        "role": "Contracts Manager",
        "email": "paul.eaglestone@eurobrickwork.co.uk",
        "phone": "07498 427108"
      }
    ]
  },
  {
    "id": 287,
    "name": "Euro Building & Maintenance Contractors Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andy Emery",
        "role": "Managing Director / Construction Manager",
        "email": "andy.emery@eurobrickwork.co.uk",
        "phone": "07719 594104"
      },
      {
        "name": "Bailey Long",
        "role": "Contracts Manager",
        "email": "bailey.long@eurobrickwork.co.uk"
      },
      {
        "name": "Lee England",
        "role": "Operations Director",
        "email": "lee.england@eurobrickwork.co.uk",
        "phone": "07704 013696"
      },
      {
        "name": "Luke Emery",
        "role": "Commercial Director",
        "email": "luke.emery@eurobrickwork.co.uk"
      },
      {
        "name": "Paul Eaglestone",
        "role": "Contracts Manager",
        "email": "paul.eaglestone@eurobrickwork.co.uk",
        "phone": "07498 427108"
      }
    ]
  },
  {
    "id": 288,
    "name": "Euro City Group Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Arthur Urbanski",
        "role": "Contract Manager",
        "email": "arthur.urbanski@euro-city.co.uk",
        "phone": "07510 592636"
      },
      {
        "name": "Karen Ballinger",
        "role": "Buyer",
        "email": "karen.ballinger@euro-city.co.uk"
      },
      {
        "name": "Ryan Oehme",
        "role": "Contracts Manager",
        "email": "ryan.oehme@euro-city.co.uk",
        "phone": "07557 760275"
      },
      {
        "name": "Steve Mann",
        "role": "Contracts Manager",
        "email": "steve.mann@euro-city.co.uk",
        "phone": "07791 542018"
      },
      {
        "name": "Tom Bowen",
        "role": "Quantity Surveyor",
        "email": "thomas.bowen@euro-city.co.uk",
        "phone": "07872 502520"
      }
    ]
  },
  {
    "id": 289,
    "name": "Euroclad Group",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Mark Walsh",
        "role": "Building Development Manager",
        "email": "mark.walsh@euroclad.co.uk"
      },
      {
        "name": "Ray Bussey",
        "role": "Sales Manager",
        "email": "raymond.bussey@eurocladgroup.com"
      }
    ]
  },
  {
    "id": 290,
    "name": "Euroclad Group Limited",
    "disciplines": [
      "Facades & Cladding"
    ],
    "contacts": [
      {
        "name": "Mark Walsh",
        "role": "Building Development Manager",
        "email": "mark.walsh@euroclad.co.uk"
      },
      {
        "name": "Ray Bussey",
        "role": "Sales Manager",
        "email": "raymond.bussey@eurocladgroup.com"
      }
    ]
  },
  {
    "id": 291,
    "name": "Evolution Contracts",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Aaron Chapman",
        "role": "Director",
        "email": "aaron.chapman@evolutioncontracts.co.uk"
      }
    ]
  },
  {
    "id": 292,
    "name": "Evolution Contracts Ltd",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Aaron Chapman",
        "role": "Director",
        "email": "aaron.chapman@evolutioncontracts.co.uk"
      }
    ]
  },
  {
    "id": 293,
    "name": "Excel Carpentry Contractors",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "David Kazakas",
        "role": "Project Manager",
        "email": "david.kazakas@exccl.co.uk"
      },
      {
        "name": "Karl Jordan",
        "role": "Contracts Manager",
        "email": "karl.jordan@exccl.co.uk"
      },
      {
        "name": "Nick Burrows",
        "role": "Director",
        "email": "nick.burrows@exccl.co.uk"
      },
      {
        "name": "Richard Nicklin-Hall",
        "role": "Quantity Surveyor",
        "email": "richard.nicklin-hall@exccl.co.uk"
      }
    ]
  },
  {
    "id": 294,
    "name": "Expanded Limited (Laing O'Rourke)",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "David Lakes",
        "role": "Contracts Manager",
        "email": "dlakes@laingorourke.com"
      },
      {
        "name": "David Nolan",
        "role": "Project Manager",
        "email": "david.nolan@laingorourke.com"
      },
      {
        "name": "Patrick Townsend",
        "role": "Quantity Surveyor",
        "email": "ptownsend@laingorourke.com"
      },
      {
        "name": "Steve Paskins",
        "role": "Construction Manager",
        "email": "steve.paskins@laingorourke.com"
      },
      {
        "name": "Thomas Bond",
        "role": "Quantity Surveyor",
        "email": "thomas.bond@laingorourke.com"
      }
    ]
  },
  {
    "id": 295,
    "name": "Express Group Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Sam Duffell",
        "role": "Contracts Manager",
        "email": "sam.duffell@expressgroupltd.co.uk"
      },
      {
        "name": "Tim Daci",
        "role": "Director",
        "email": "tim.daci@expressgroupltd.co.uk",
        "phone": "07944 968460"
      }
    ]
  },
  {
    "id": 296,
    "name": "External Facade Solutions",
    "disciplines": [
      "Facades & Cladding"
    ],
    "contacts": [
      {
        "name": "Rafal Mackowiak",
        "role": "Director",
        "email": "rafal@efs-limited.co.uk",
        "phone": "07305 970750"
      }
    ]
  },
  {
    "id": 297,
    "name": "F&I Groundwork Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Aldi Molla",
        "role": "Operations Manager",
        "email": "aldi@figroundwork.co.uk"
      },
      {
        "name": "Fitim Imeraj",
        "role": "Director",
        "email": "fitim@figroundwork.co.uk",
        "phone": "07984 144413"
      },
      {
        "name": "Jetnor Mytaraj",
        "role": "Contracts Manager",
        "email": "jetnor@figroundwork.co.uk"
      },
      {
        "name": "Miri Mesuli",
        "role": "Contracts Manager",
        "email": "miri@figroundwork.co.uk",
        "phone": "07919 537870"
      }
    ]
  },
  {
    "id": 298,
    "name": "F&I Groundworks",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Aldi Molla",
        "role": "Operations Manager",
        "email": "aldi@figroundwork.co.uk"
      },
      {
        "name": "Fitim Imeraj",
        "role": "Director",
        "email": "fitim@figroundwork.co.uk",
        "phone": "07984 144413"
      },
      {
        "name": "Jetnor Mytaraj",
        "role": "Contracts Manager",
        "email": "jetnor@figroundwork.co.uk"
      },
      {
        "name": "Miri Mesuli",
        "role": "Contracts Manager",
        "email": "miri@figroundwork.co.uk",
        "phone": "07919 537870"
      }
    ]
  },
  {
    "id": 299,
    "name": "Face Brickwork",
    "disciplines": [
      "Brickwork"
    ],
    "contacts": [
      {
        "name": "Ionut Bordeus",
        "role": "Project Manager",
        "email": "ionut.bordeus@facebrickwork.com"
      },
      {
        "name": "Joel Riley",
        "role": "Managing Director",
        "email": "joel@facebrickwork.com"
      },
      {
        "name": "Kier Dixon",
        "role": "Director",
        "email": "keir@facebrickwork.com"
      },
      {
        "name": "Mark Fletcher",
        "role": "Buyer",
        "email": "mark@facebrickwork.com"
      },
      {
        "name": "Nik Smith",
        "role": "Estimator",
        "email": "nik.smith@facebrickwork.com"
      },
      {
        "name": "Trevor Knowlson",
        "role": "Contracts Manager",
        "email": "trevor@facebrickwork.com"
      },
      {
        "name": "Ionel Farauanu",
        "role": "Bricklayer",
        "email": "ionel.farauanu@facebrickwork.com"
      },
      {
        "name": "Ivan Busuioc",
        "role": "Supervisor",
        "email": "ivan.busuioc@facebrickwork.com"
      },
      {
        "name": "Mark Woodgate",
        "role": "Project Manager",
        "email": "mark.woodgate@facebrickwork.com"
      },
      {
        "name": "Pavel Budau",
        "role": "Bricklayer",
        "email": "pavel.budau@facebrickwork.com"
      }
    ]
  },
  {
    "id": 300,
    "name": "Faircloth Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andy Mcginty",
        "role": "Site Manager",
        "email": "andy@faircloth.co.uk",
        "phone": "07848 918927"
      },
      {
        "name": "Andy Walters",
        "role": "Contract Manager",
        "email": "andyw@faircloth.co.uk",
        "phone": "07584 428 842"
      },
      {
        "name": "Ben Whitewood",
        "role": "Director of Construction",
        "email": "ben@faircloth.co.uk",
        "phone": "07754 207529"
      },
      {
        "name": "Bob Moorland",
        "role": "Site Manager",
        "email": "bob@faircloth.co.uk",
        "phone": "07747 690326"
      },
      {
        "name": "Brian Funga",
        "role": "Contracts Manager",
        "email": "brian.funga@faircloth.co.uk"
      },
      {
        "name": "Chris Unsworth",
        "role": "Contracts Manager",
        "email": "chris@faircloth.co.uk"
      },
      {
        "name": "Daisy Willett",
        "role": "Office Manager",
        "email": "daisy@faircloth.co.uk"
      },
      {
        "name": "Darren Faircloth",
        "role": "Director",
        "email": "darren@faircloth.co.uk",
        "phone": "07836 656 195"
      },
      {
        "name": "Elliot Macey Wood",
        "role": "Quantity Surveyor",
        "email": "elliot.maceywood@faircloth.co.uk",
        "phone": "7385475396.0"
      },
      {
        "name": "Gary Mcgovern",
        "role": "Contracts Manager",
        "email": "gary@faircloth.co.uk",
        "phone": "7833476858.0"
      },
      {
        "name": "George Harvey-Hendly",
        "role": "Contracts Manager",
        "email": "george@faircloth.co.uk",
        "phone": "07353 125445"
      },
      {
        "name": "Glenn Page",
        "role": "Site Manager",
        "email": "glenn@faircloth.co.uk",
        "phone": "07572 438 761"
      },
      {
        "name": "Grant Lemon",
        "role": "Contracts Manager",
        "email": "grant@faircloth.co.uk"
      },
      {
        "name": "Jason Uden",
        "role": "Quantity Surveyor",
        "email": "jason@faircloth.co.uk",
        "phone": "07769 184648"
      },
      {
        "name": "Joe Collinson",
        "role": "Contracts Manager",
        "email": "joe@faircloth.co.uk",
        "phone": "07572 760370"
      },
      {
        "name": "Jon Hamer",
        "role": "Health and Safety Manager",
        "email": "jon@faircloth.co.uk"
      },
      {
        "name": "Katy Weller",
        "role": "Secretary",
        "email": "secretary@faircloth.co.uk"
      },
      {
        "name": "Luke Dunne",
        "role": "Quantity Surveyor",
        "email": "luke@faircloth.co.uk",
        "phone": "07386 975406"
      },
      {
        "name": "Matthew Shave",
        "role": "Quantity Surveyor",
        "email": "matthew.shave@faircloth.co.uk"
      },
      {
        "name": "Nick Babbage",
        "role": "Site Manager",
        "email": "nick@faircloth.co.uk",
        "phone": "07721 449939"
      },
      {
        "name": "Rob Evans",
        "role": "Contracts Manager",
        "email": "rob@faircloth.co.uk",
        "phone": "7561716596.0"
      },
      {
        "name": "Sam Dutton",
        "role": "Health and Safety Manager",
        "email": "sam@faircloth.co.uk"
      },
      {
        "name": "Sonia Lopes",
        "email": "sonia.lopes@faircloth.co.uk"
      },
      {
        "name": "Steve Webber",
        "role": "Director",
        "email": "steve@faircloth.co.uk",
        "phone": "07786 390415"
      },
      {
        "name": "Terry Malloy",
        "role": "Site Manager",
        "email": "terry@faircloth.co.uk",
        "phone": "07353 133459"
      },
      {
        "name": "Thomas Janusas",
        "role": "Site Manager",
        "email": "thomas@faircloth.co.uk",
        "phone": "07725 900 719"
      },
      {
        "name": "Toby Walters",
        "role": "Quantity Surveyor",
        "email": "toby@faircloth.co.uk",
        "phone": "07586 088507"
      },
      {
        "name": "Tom Wesely",
        "role": "Design Developer",
        "email": "tom@faircloth.co.uk",
        "phone": "07826 757872"
      },
      {
        "name": "Will Dean",
        "role": "Quantity Surveyor",
        "email": "will.dean@faircloth.co.uk"
      }
    ]
  },
  {
    "id": 301,
    "name": "Falconwood Solutions Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Julija Sokolenko",
        "role": "Director",
        "email": "julija.sokolenko@falconwood.uk"
      }
    ]
  },
  {
    "id": 302,
    "name": "Farrans (Construction) Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Aaron Griffiths",
        "role": "Buyer",
        "email": "aaron.griffiths@farrans.com"
      },
      {
        "name": "Brody Harrison",
        "role": "Quantity Surveyor",
        "email": "brody.harrison@farrans.com"
      },
      {
        "name": "Clare Taylor",
        "role": "Contracts Manager",
        "email": "c.taylor@farrans.com"
      },
      {
        "name": "Derek Little",
        "email": "derek.little@farrans.com"
      },
      {
        "name": "Gerard Fennell",
        "role": "Project Manager",
        "email": "gerard.fennell@farrans.com"
      },
      {
        "name": "Gerard McNamee",
        "role": "Project Manager",
        "email": "gmcnamee@farrans.com",
        "phone": "7885268525.0"
      },
      {
        "name": "Jamie Coyle",
        "role": "Quantity Surveyor",
        "email": "jamie.coyle@farrans.com",
        "phone": "07713 075586"
      },
      {
        "name": "Jerome Curran",
        "role": "Contracts Manager",
        "email": "jerome.curran@farrans.com",
        "phone": "7766758693.0"
      },
      {
        "name": "John Casey",
        "role": "Senior Engineer",
        "email": "john.casey@farrans.com"
      },
      {
        "name": "Jonny Kerr",
        "role": "Operations Director",
        "email": "jonny.kerr@farrans.com"
      },
      {
        "name": "Kevin McGarvey",
        "email": "kevin.mcgarvey@farrans.com"
      },
      {
        "name": "Liam McKane",
        "role": "Quantity Surveyor",
        "email": "liam.mckane@farrans.com"
      },
      {
        "name": "Luke Rea",
        "role": "Project Manager",
        "email": "luke.rea@farrans.com"
      },
      {
        "name": "Mel McMahon",
        "role": "Site Agent",
        "email": "mmcmahon@farrans.com",
        "phone": "07795 498 129"
      },
      {
        "name": "Nathan Wilson",
        "role": "Buyer",
        "email": "nwilson@farrans.com"
      },
      {
        "name": "Neil Fullerton",
        "role": "Project Manager",
        "email": "nfullerton@farrans.com"
      },
      {
        "name": "Neil Rogers",
        "role": "Project Director",
        "email": "neil.rogers@farrans.com"
      },
      {
        "name": "Nigel Payne",
        "email": "nigel.payne@farrans.com"
      },
      {
        "name": "Olivia Bennett",
        "role": "Quantity Surveyor",
        "email": "olivia.bennett@farrans.com"
      },
      {
        "name": "Oscar Moyes",
        "role": "Buyer",
        "email": "omoyes@farrans.com"
      },
      {
        "name": "Rachel Smith",
        "role": "Bid Manager",
        "email": "r.smith@farrans.com"
      },
      {
        "name": "Ray Gambell",
        "role": "Contracts Manager",
        "email": "rgambell@farrans.com"
      },
      {
        "name": "Rhys Gentle",
        "role": "Trainee Estimator",
        "email": "rgentle@farrans.com"
      },
      {
        "name": "Richard Bell",
        "role": "Site Manager",
        "email": "rbell@farrans.com",
        "phone": "7917735743.0"
      },
      {
        "name": "Richard Weir",
        "role": "Contracts Manager",
        "email": "rweir@farrans.com"
      },
      {
        "name": "Ronald Sullivan",
        "email": "ronald.sullivan@farrans.com"
      },
      {
        "name": "Stefan McFarlane",
        "email": "stefan.mcfarlane@farrans.com"
      },
      {
        "name": "Steve Haviland",
        "role": "Contract Manager",
        "email": "shaviland@farrans.com",
        "phone": "07384 916212"
      }
    ]
  },
  {
    "id": 303,
    "name": "Farrans Construction",
    "disciplines": [
      "Civil Engineering"
    ],
    "contacts": [
      {
        "name": "Alan Davidson",
        "role": "Contracts Manager",
        "email": "alan.davidson@farrans.com"
      },
      {
        "name": "Barry McBride",
        "role": "Project Manager",
        "email": "barry.mcbride@farrans.com"
      },
      {
        "name": "David Kerr",
        "role": "Operations Director",
        "email": "david.kerr@farrans.com"
      },
      {
        "name": "Gareth Wilson",
        "role": "Commercial Manager",
        "email": "gareth.wilson@farrans.com"
      },
      {
        "name": "Jonathan Lyons",
        "role": "Managing Director",
        "email": "jonathan.lyons@farrans.com"
      },
      {
        "name": "Mark Thompson",
        "role": "Quantity Surveyor",
        "email": "mark.thompson@farrans.com"
      },
      {
        "name": "Paul McClean",
        "role": "Contracts Manager",
        "email": "paul.mcclean@farrans.com"
      }
    ]
  },
  {
    "id": 304,
    "name": "FCS Facades",
    "disciplines": [
      "Facades & Cladding"
    ],
    "contacts": [
      {
        "name": "Piotr Murawski",
        "role": "Project Director",
        "email": "piotr.murawski@fcsfacades.com",
        "phone": "07471 273458"
      },
      {
        "name": "Piotr Murawski",
        "role": "Project Director",
        "phone": "07471 273458"
      }
    ]
  },
  {
    "id": 305,
    "name": "Fenland Flat Roofing",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "David Dean",
        "role": "Contract Manager",
        "email": "david.dean@ffrltd.co.uk"
      },
      {
        "name": "Stuart Fellgate",
        "role": "Quantity Surveyor",
        "email": "stuart@ffrltd.co.uk"
      }
    ]
  },
  {
    "id": 306,
    "name": "Fenland Flat Roofing Limited",
    "disciplines": [
      "Roofing"
    ],
    "contacts": [
      {
        "name": "David Dean",
        "role": "Contract Manager",
        "email": "david.dean@ffrltd.co.uk"
      },
      {
        "name": "Stuart Fellgate",
        "role": "Quantity Surveyor",
        "email": "stuart@ffrltd.co.uk"
      }
    ]
  },
  {
    "id": 307,
    "name": "Firma",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Jeremy Hynd",
        "role": "Project Manager",
        "email": "jeremy.hynd@firma.co.uk"
      },
      {
        "name": "Josh Bone",
        "role": "Project Co-ordinator",
        "email": "josh.bone@firma.co.uk"
      },
      {
        "name": "Mitchell Hynd",
        "role": "Head of Business Development",
        "email": "mitchell.hynd@firma.co.uk"
      }
    ]
  },
  {
    "id": 308,
    "name": "Fitzgerald Contractors Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alex Fish",
        "role": "Operations Director",
        "email": "alex.fish@fitzgerald-uk.com"
      },
      {
        "name": "Jack Fletcher",
        "role": "Quantity Surveyor",
        "email": "jack.fletcher@fitzgerald-uk.com"
      },
      {
        "name": "Nick Coley",
        "role": "Managing Director",
        "email": "nick.coley@fitzgerald-uk.com",
        "phone": "7970047493.0"
      },
      {
        "name": "Paul Cartwright",
        "role": "Quantity Surveyor",
        "email": "paul.cartwright@fitzgerald-uk.com"
      },
      {
        "name": "Paul Lycett",
        "role": "Surveying Director",
        "email": "paul.lycett@fitzgerald-uk.com"
      },
      {
        "name": "Chris Webber",
        "role": "Quantity Surveyor",
        "email": "chris.webber@fitzgerald-uk.com",
        "phone": "07978 454171"
      },
      {
        "name": "Morgan Courtney",
        "role": "Site Manager",
        "email": "morgan.courtney@fitzgerald-uk.com"
      }
    ]
  },
  {
    "id": 309,
    "name": "Flatley Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andriy Onyshchuk",
        "role": "Construction Manager",
        "email": "andriyonyshchuk@flatleyconstruction.co.uk"
      },
      {
        "name": "Andy Velautham",
        "role": "Site Manager",
        "email": "andyvelautham@flatleyconstruction.co.uk",
        "phone": "7772518610.0"
      },
      {
        "name": "Daniel O'Brian",
        "role": "Project Manager",
        "email": "danielobrian@flatleyconstruction.co.uk"
      },
      {
        "name": "Florin Isac",
        "role": "Project Manager",
        "email": "florinisac@flatleyconstruction.co.uk"
      },
      {
        "name": "Jamie McAuley",
        "role": "Project Manager",
        "email": "jamiemcauley@flatleyconstruction.co.uk"
      },
      {
        "name": "John Flatley",
        "role": "Managing Director",
        "email": "johnflatley@flatleyconstruction.co.uk"
      },
      {
        "name": "Kian Weaver",
        "role": "Quantity Surveyor",
        "email": "kianweaver@flatleyconstruction.co.uk"
      },
      {
        "name": "Luke Flatley",
        "role": "Director",
        "email": "lukeflatley@flatleyconstruction.co.uk",
        "phone": "7957757707.0"
      },
      {
        "name": "Meb",
        "role": "Contract Manager",
        "email": "meb@flatleyconstruction.co.uk"
      },
      {
        "name": "Paul Collins",
        "role": "Contracts Manager",
        "email": "paulcollins@flatleyconstruction.co.uk"
      },
      {
        "name": "Phil McBride",
        "role": "Contracts Manager",
        "email": "philmcbride@flatleyconstruction.co.uk",
        "phone": "07970 138822"
      }
    ]
  },
  {
    "id": 310,
    "name": "Flori Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Florenx Kullani",
        "role": "Director",
        "email": "info@floriconstructionltd.com",
        "phone": "07882 923621"
      },
      {
        "name": "Julian Kullani",
        "role": "Site Manager",
        "email": "julian@floriconstructionltd.com"
      }
    ]
  },
  {
    "id": 311,
    "name": "Flynn Interiors",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alisdair Hoon",
        "role": "Project Manager",
        "email": "alisdair.hoon@flynninteriors.co.uk"
      },
      {
        "name": "Andrius Jadenkus",
        "role": "Project Manager",
        "email": "andrius.jadenkus@flynninteriors.co.uk"
      },
      {
        "name": "Danny Bruce",
        "role": "Construction Director",
        "email": "danny.bruce@flynninteriors.co.uk"
      },
      {
        "name": "Jim Flynn",
        "role": "Managing Director",
        "email": "jim.flynn@flynninteriors.co.uk"
      },
      {
        "name": "Marc Halladay",
        "role": "Estimating Manager",
        "email": "marc.halladay@flynninteriors.co.uk",
        "phone": "07888 324444"
      },
      {
        "name": "Rob Laffan",
        "role": "Project Manager",
        "email": "rob.laffan@flynninteriors.co.uk"
      },
      {
        "name": "Rory Mullane",
        "role": "Project Manager",
        "email": "rory.mullane@flynninteriors.co.uk"
      },
      {
        "name": "Rosen Georgiev",
        "role": "Project Manager",
        "email": "rosen.georgiev@flynninteriors.co.uk"
      },
      {
        "name": "Sam Roe-Barnett",
        "role": "Commercial Director",
        "email": "sam.roe-barnett@flynninteriors.co.uk"
      },
      {
        "name": "Scott Holland",
        "role": "Project Leader",
        "email": "scott.holland@flynninteriors.co.uk"
      }
    ]
  },
  {
    "id": 312,
    "name": "Flynn Interiors Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alisdair Hoon",
        "role": "Project Manager",
        "email": "alisdair.hoon@flynninteriors.co.uk"
      },
      {
        "name": "Andrius Jadenkus",
        "role": "Project Manager",
        "email": "andrius.jadenkus@flynninteriors.co.uk"
      },
      {
        "name": "Danny Bruce",
        "role": "Construction Director",
        "email": "danny.bruce@flynninteriors.co.uk"
      },
      {
        "name": "Jim Flynn",
        "role": "Managing Director",
        "email": "jim.flynn@flynninteriors.co.uk"
      },
      {
        "name": "Marc Halladay",
        "role": "Estimating Manager",
        "email": "marc.halladay@flynninteriors.co.uk",
        "phone": "07888 324444"
      },
      {
        "name": "Rob Laffan",
        "role": "Project Manager",
        "email": "rob.laffan@flynninteriors.co.uk"
      },
      {
        "name": "Rory Mullane",
        "role": "Project Manager",
        "email": "rory.mullane@flynninteriors.co.uk"
      },
      {
        "name": "Rosen Georgiev",
        "role": "Project Manager",
        "email": "rosen.georgiev@flynninteriors.co.uk"
      },
      {
        "name": "Sam Roe-Barnett",
        "role": "Commercial Director",
        "email": "sam.roe-barnett@flynninteriors.co.uk"
      },
      {
        "name": "Scott Holland",
        "role": "Project Leader",
        "email": "scott.holland@flynninteriors.co.uk"
      }
    ]
  },
  {
    "id": 313,
    "name": "Flynn James Properties Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Finley Hawkins",
        "role": "Contract Manager",
        "email": "finley.hawkins@flynnjames.com"
      },
      {
        "name": "Harry Ward",
        "role": "Quantity Surveyor",
        "email": "harry.ward@flynnjames.com"
      },
      {
        "name": "James Gill",
        "email": "james.gill@flynnjames.com"
      }
    ]
  },
  {
    "id": 314,
    "name": "FM Conway",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andrew Tunna",
        "role": "Contracts Manager",
        "email": "andrew.tunna@fmconway.co.uk"
      },
      {
        "name": "Craig Mason",
        "role": "Contracts Manager",
        "email": "craig.mason@fmconway.co.uk"
      },
      {
        "name": "Dave Otter",
        "role": "Contract Manager",
        "email": "dave.otter@fmconway.co.uk",
        "phone": "07795 665949"
      },
      {
        "name": "Graham Cartledge",
        "role": "Lighting Director",
        "email": "graham.cartledge@fmconway.co.uk"
      },
      {
        "name": "Joe Barratt",
        "role": "Lambeth Contracts Manager",
        "email": "joe.barratt@fmconway.co.uk",
        "phone": "07917 518545"
      },
      {
        "name": "Joe Jarvis",
        "role": "Project Manager",
        "email": "joe.jarvis@fmconway.co.uk",
        "phone": "07919 493007"
      },
      {
        "name": "Larry Kyam",
        "role": "Contracts Manager",
        "email": "larry.kyam@fmconway.co.uk"
      },
      {
        "name": "Liam McGoldrick",
        "role": "Contracts Manager",
        "email": "liam.mcgoldrick@fmconway.co.uk"
      },
      {
        "name": "Mark Cason",
        "role": "Project Manager",
        "email": "marc.cason@fmconway.com"
      },
      {
        "name": "Mark Tooley",
        "role": "Project Manager",
        "email": "mark.tooley@fmconway.co.uk"
      },
      {
        "name": "Matt Smith",
        "role": "Project Manager - Bexley",
        "email": "matt.smith@fmconway.co.uk"
      },
      {
        "name": "Matthew Cerrone",
        "role": "Project Manager",
        "email": "matthew.cerrone@fmconway.co.uk"
      },
      {
        "name": "Peter Moore",
        "role": "Contracts Manager",
        "email": "peter.moore@fmconway.co.uk"
      },
      {
        "name": "Ricardas Grabauskas",
        "role": "Contract Manager",
        "email": "ricardas.grabauskas@fmconway.co.uk"
      },
      {
        "name": "Terry Gough",
        "role": "Contract Manager",
        "email": "terry.gough@fmconway.co.uk",
        "phone": "07766 310857"
      },
      {
        "name": "Toby Allen",
        "role": "Project Manager",
        "email": "toby.allen@fmconway.co.uk",
        "phone": "07768 724989"
      }
    ]
  },
  {
    "id": 315,
    "name": "FM Conway Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andrew Tunna",
        "role": "Contracts Manager",
        "email": "andrew.tunna@fmconway.co.uk"
      },
      {
        "name": "Craig Mason",
        "role": "Contracts Manager",
        "email": "craig.mason@fmconway.co.uk"
      },
      {
        "name": "Dave Otter",
        "role": "Contract Manager",
        "email": "dave.otter@fmconway.co.uk",
        "phone": "07795 665949"
      },
      {
        "name": "Graham Cartledge",
        "role": "Lighting Director",
        "email": "graham.cartledge@fmconway.co.uk"
      },
      {
        "name": "Jason Clark",
        "role": "Site Agent",
        "email": "jason.clark@fmconway.co.uk"
      },
      {
        "name": "Joe Barratt",
        "role": "Lambeth Contracts Manager",
        "email": "joe.barratt@fmconway.co.uk",
        "phone": "07917 518545"
      },
      {
        "name": "Joe Jarvis",
        "role": "Project Manager",
        "email": "joe.jarvis@fmconway.co.uk",
        "phone": "07919 493007"
      },
      {
        "name": "Larry Kyam",
        "role": "Contracts Manager",
        "email": "larry.kyam@fmconway.co.uk"
      },
      {
        "name": "Liam McGoldrick",
        "role": "Contracts Manager",
        "email": "liam.mcgoldrick@fmconway.co.uk"
      },
      {
        "name": "Marc Cason",
        "role": "Project Manager",
        "email": "marc.cason@fmconway.com"
      },
      {
        "name": "Mark Tooley",
        "role": "Project Manager",
        "email": "mark.tooley@fmconway.co.uk"
      },
      {
        "name": "Matt Smith",
        "role": "Project Manager - Bexley",
        "email": "matt.smith@fmconway.co.uk"
      },
      {
        "name": "Matthew Cerrone",
        "role": "Project Manager",
        "email": "matthew.cerrone@fmconway.co.uk"
      },
      {
        "name": "Peter Moore",
        "email": "peter.moore@fmconway.co.uk"
      },
      {
        "name": "Rachel Masters",
        "role": "Proposals Manager",
        "email": "rachel.masters@fmconway.co.uk"
      },
      {
        "name": "Ricardas Grabauskas",
        "role": "Contract Manager",
        "email": "ricardas.grabauskas@fmconway.co.uk"
      },
      {
        "name": "Terry Gough",
        "role": "Contract Manager",
        "email": "terry.gough@fmconway.co.uk",
        "phone": "07766 310857"
      },
      {
        "name": "Toby Allen",
        "role": "Project Manager",
        "email": "toby.allen@fmconway.co.uk",
        "phone": "07768 724989"
      }
    ]
  },
  {
    "id": 316,
    "name": "Foran Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Gavin Fox",
        "role": "Contract Manager",
        "email": "gavin.fox@foranconstruction.co.uk"
      },
      {
        "name": "Niall O'Malley",
        "role": "Quantity Surveyor",
        "email": "niall.omalley@foranconstruction.co.uk"
      },
      {
        "name": "Paul Lavelle",
        "role": "Director",
        "email": "p.lavelle@foranconstruction.co.uk",
        "phone": "7793148793.0"
      },
      {
        "name": "Peter Moss",
        "role": "Quantity Surveyor",
        "email": "peter.moss@foranconstruction.co.uk"
      },
      {
        "name": "Thomas Quaid",
        "role": "Director",
        "email": "thomas.quaid@foranconstruction.co.uk"
      }
    ]
  },
  {
    "id": 317,
    "name": "Foundation Developments Limited",
    "disciplines": [
      "Groundworks"
    ],
    "contacts": [
      {
        "name": "Aaron Holder",
        "role": "Quantity Surveyor",
        "email": "aaron.holder@foundation-dev.com"
      },
      {
        "name": "Arul Thangavelautham",
        "role": "Site Manager",
        "email": "arul.thangavelautham@foundation-dev.com"
      },
      {
        "name": "Bill Boyle",
        "role": "Buyer",
        "email": "bill.boyle@foundation-dev.com"
      },
      {
        "name": "Connor McStravick",
        "role": "Site Manager",
        "email": "cmctravick@foundation-dev.com"
      },
      {
        "name": "Craig Dean",
        "role": "Buyer",
        "email": "cdean@foundation-dev.com"
      },
      {
        "name": "Dan Voicu",
        "role": "Contracts Manager",
        "email": "dan.voicu@foundation-dev.com"
      },
      {
        "name": "Dave Penfold",
        "role": "Contracts Manager",
        "email": "dave.penfold@foundation-dev.com"
      },
      {
        "name": "Gavin Hunt",
        "role": "Site Manager",
        "email": "ghunt@foundation-dev.com"
      },
      {
        "name": "Graham Harrington",
        "role": "Site Manager",
        "email": "gharrington@foundation-dev.com"
      },
      {
        "name": "James Hickey",
        "role": "Buyer",
        "email": "jhickey@foundation-dev.com"
      },
      {
        "name": "Pat Hickey",
        "role": "Managing Director",
        "email": "phickey@foundation-dev.com"
      },
      {
        "name": "Shane Nicholson",
        "role": "Construction Director",
        "email": "snicholson@foundation-dev.com"
      },
      {
        "name": "Stewart Adcock",
        "role": "Pre Construction Director",
        "email": "stewart.adcock@foundation-dev.com"
      },
      {
        "name": "Tony Moore",
        "role": "Quantity Surveyor",
        "email": "tmoore@foundation-dev.com"
      },
      {
        "name": "Wesley Henry",
        "role": "Project Manager",
        "email": "whenry@foundation-dev.com"
      }
    ]
  },
  {
    "id": 318,
    "name": "FP McCann",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andy O'Donoghue",
        "role": "Contracts Manager",
        "email": "andy.odonoghue@fpmccann.co.uk"
      },
      {
        "name": "Craig Smeadon",
        "role": "Contract Manager",
        "email": "craig.smeadon@fpmccann.co.uk",
        "phone": "07850 574248"
      },
      {
        "name": "Gavin Lowe",
        "role": "Structures Manager",
        "email": "gavin.lowe@fpmccann.co.uk",
        "phone": "07976 206521"
      },
      {
        "name": "Mark McCann",
        "role": "Director",
        "email": "mark.mccann@fpmccann.co.uk"
      },
      {
        "name": "Michael Whitehead",
        "role": "Contract Manager",
        "email": "mwhitehead@fpmccann.co.uk"
      },
      {
        "name": "Richard Baker",
        "role": "Quality Manager",
        "email": "rbaker@fpmccann.co.uk"
      },
      {
        "name": "Ryan Millican",
        "role": "Project Manager",
        "email": "rmillican@fpmccann.co.uk"
      },
      {
        "name": "Sam Jones",
        "role": "Sales Manager",
        "email": "sjones@fpmccann.co.uk"
      },
      {
        "name": "Simon Smith",
        "role": "Estimator",
        "email": "simon.smith@fpmccann.co.uk"
      }
    ]
  },
  {
    "id": 319,
    "name": "FP McCann Ltd",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Aaron Devlin",
        "email": "aaron.devlin@fpmccann.co.uk"
      },
      {
        "name": "Anthony McGuckin",
        "email": "anthony.mcguckin@fpmccann.co.uk"
      },
      {
        "name": "Brian Hubbard",
        "role": "Commercial Manager",
        "email": "bhubbard@fpmccann.co.uk"
      },
      {
        "name": "Craig Toon",
        "role": "Commercial Manager",
        "email": "c.toon@fpmccann.co.uk"
      },
      {
        "name": "Dalene Young",
        "role": "Business Development Manager",
        "email": "dalene.young@fpmccann.co.uk"
      },
      {
        "name": "Gavin Lowe",
        "role": "Structural Associate",
        "email": "g.lowe@fpmccann.co.uk"
      },
      {
        "name": "Jonathan Pratt",
        "role": "Head of Sales",
        "email": "jonathan.pratt@fpmccann.co.uk"
      },
      {
        "name": "Leigh Clarke",
        "role": "Design Coordinator",
        "email": "l.clarke@fpmccann.co.uk"
      },
      {
        "name": "Nat Fryer",
        "role": "Project Manager",
        "email": "nat.fryer@fpmccann.co.uk"
      },
      {
        "name": "Neil Badger",
        "email": "neil.badger@fpmccann.co.uk"
      },
      {
        "name": "Paul Hamill",
        "role": "Estates Manager",
        "email": "phamill@fpmccann.co.uk",
        "phone": "07341 790988"
      },
      {
        "name": "Sam Jones",
        "role": "Sales & Estimating Manager",
        "email": "sam.jones@fpmccann.co.uk"
      },
      {
        "name": "Taylor Nutt",
        "role": "Senior Quantity Surveyor",
        "email": "t.nutt@fpmccann.co.uk"
      }
    ]
  },
  {
    "id": 320,
    "name": "Franki Foundations UK Limited",
    "disciplines": [
      "Piling"
    ],
    "contacts": [
      {
        "name": "Will Quartly",
        "role": "Contract Manager",
        "email": "will.quartly@frankifoundations.co.uk"
      }
    ]
  },
  {
    "id": 321,
    "name": "Frosts Landscape Construction Limited",
    "disciplines": [
      "Landscaping"
    ],
    "contacts": [
      {
        "name": "Andrew Marshall",
        "role": "Contracts Manager",
        "email": "andrew.marshall@frosts.co.uk"
      },
      {
        "name": "Chris Frost",
        "role": "Managing Director",
        "email": "chris.frost@frosts.co.uk"
      },
      {
        "name": "Daniel Reeve",
        "role": "Project Manager",
        "email": "daniel.reeve@frosts.co.uk"
      },
      {
        "name": "Gary Hobbs",
        "role": "Commercial Manager",
        "email": "gary.hobbs@frosts.co.uk"
      },
      {
        "name": "James Frost",
        "role": "Director",
        "email": "james.frost@frosts.co.uk"
      },
      {
        "name": "Mark Lawrence",
        "role": "Quantity Surveyor",
        "email": "mark.lawrence@frosts.co.uk"
      },
      {
        "name": "Paul Edwards",
        "role": "Contracts Manager",
        "email": "paul.edwards@frosts.co.uk"
      }
    ]
  },
  {
    "id": 322,
    "name": "FSJ Interiors Limited",
    "disciplines": [
      "Dry Lining & Ceilings",
      "Fit-Out & Interiors"
    ],
    "contacts": [
      {
        "name": "Frankie Jones",
        "role": "Director",
        "email": "frankie@fsjinteriors.co.uk",
        "phone": "07710 547998"
      },
      {
        "name": "Michael Munson",
        "role": "Commercial Director",
        "email": "michael@fsjinteriors.co.uk"
      },
      {
        "name": "Sonny Jones",
        "role": "Director",
        "email": "sonny@fsjinteriors.co.uk",
        "phone": "07720 980117"
      }
    ]
  },
  {
    "id": 323,
    "name": "Fuller & Son Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "John Nevin",
        "role": "Site Manager",
        "email": "john.nevin@fullersbuilders.co.uk"
      },
      {
        "name": "Laine Manoli",
        "role": "Quantity Surveyor",
        "email": "laine@fullersbuilders.co.uk"
      },
      {
        "name": "William Fuller",
        "role": "Director",
        "email": "william@fullersbuilders.co.uk"
      }
    ]
  },
  {
    "id": 324,
    "name": "G & K Groundworks Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Glenn Smith",
        "role": "Director"
      },
      {
        "name": "Nicola Smith",
        "role": "Secretary",
        "email": "nicolasmith@gandkgroundworks.ltd.uk"
      },
      {
        "name": "Warren Smith",
        "role": "Director"
      }
    ]
  },
  {
    "id": 325,
    "name": "G S Moore Roofing Contractors Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Garry Moore",
        "role": "Managing Director",
        "email": "garry.moore@gsmooreroofing.co.uk"
      },
      {
        "name": "Sarah Mawbey-Abbott",
        "role": "Operations Director",
        "email": "sarah.mawbey-abbott@gsmooreroofing.co.uk"
      }
    ]
  },
  {
    "id": 326,
    "name": "GA Interiors Limited",
    "disciplines": [
      "Dry Lining & Ceilings",
      "Fit-Out & Interiors"
    ],
    "contacts": [
      {
        "name": "Arnas Antanavicius",
        "role": "Site Manager",
        "email": "arnas@gainteriorsltd.com"
      },
      {
        "name": "Billy Yates",
        "role": "Quantity Surveyor",
        "email": "billy.yates@gainteriorsltd.com"
      },
      {
        "name": "Daniel Melmoth",
        "email": "daniel@gainteriorsltd.com"
      },
      {
        "name": "Donatas Miglinas",
        "role": "Quantity Surveyor",
        "email": "donatas@gainteriorsltd.com"
      },
      {
        "name": "Ieva Usavic",
        "role": "Marketing",
        "email": "ieva@gainteriorsltd.com"
      },
      {
        "name": "Mihail Untila",
        "role": "Site Manager",
        "email": "mihail@gainteriorsltd.com"
      },
      {
        "name": "Sam Gibson",
        "role": "Quantity Surveyor",
        "email": "samuel@gainteriorsltd.com"
      },
      {
        "name": "Tadas Chlostauskas",
        "role": "Contracts Manager",
        "email": "tadas@gainteriorsltd.com"
      },
      {
        "name": "Vytas Kalesnikas",
        "role": "Quantity Surveyor",
        "email": "vytas@gainteriorsltd.com"
      }
    ]
  },
  {
    "id": 327,
    "name": "Gallagher Aggregates",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adrian Harris",
        "role": "Quantity Surveyor",
        "email": "adrian.harris@gallagher-group.co.uk"
      },
      {
        "name": "Bill Lindsay",
        "role": "Commercial Director",
        "email": "bill.lindsay@gallagher-group.co.uk"
      },
      {
        "name": "Colin Osman",
        "role": "Project Manager",
        "email": "colin.osman@gallagher-group.co.uk"
      },
      {
        "name": "Dan Overal",
        "role": "Quantity Surveyor",
        "email": "dan.overal@gallagher-group.co.uk"
      },
      {
        "name": "James Mutton",
        "role": "Contract Manager",
        "email": "james.mutton@gallagher-group.co.uk"
      },
      {
        "name": "Jason Lilley",
        "role": "Contracts Manager",
        "email": "jason.lilley@gallagher-group.co.uk"
      },
      {
        "name": "Jerome Stephens",
        "role": "Contract Manager",
        "email": "jerome.stephens@gallagher-group.co.uk"
      },
      {
        "name": "Joe Heathfield",
        "role": "Property Development Manager",
        "email": "joe.heathfield@gallagher-group.co.uk"
      },
      {
        "name": "Justin Halls",
        "role": "Quantity Surveyor",
        "email": "justin.halls@gallagher-group.co.uk"
      },
      {
        "name": "Nick Harris",
        "role": "Contracts Manager",
        "email": "nick.harris@gallagher-group.co.uk"
      },
      {
        "name": "Richard Asbury",
        "role": "Estimator",
        "email": "richard.asbury@gallagher-group.co.uk"
      },
      {
        "name": "Russell Hockley",
        "role": "Quantity Surveyor",
        "email": "russell.hockley@gallagher-group.co.uk"
      },
      {
        "name": "Tom Asher",
        "role": "Quantity Surveyor",
        "email": "tom.asher@gallagher-group.co.uk"
      }
    ]
  },
  {
    "id": 328,
    "name": "Gallagher Aggregates Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adrian Harris",
        "role": "Quantity Surveyor",
        "email": "adrian.harris@gallagher-group.co.uk"
      },
      {
        "name": "Bill Lindsay",
        "role": "Commercial Director",
        "email": "bill.lindsay@gallagher-group.co.uk"
      },
      {
        "name": "Colin Osman",
        "role": "Project Manager",
        "email": "colin.osman@gallagher-group.co.uk"
      },
      {
        "name": "Dan Overal",
        "role": "Quantity Surveyor",
        "email": "dan.overal@gallagher-group.co.uk"
      },
      {
        "name": "James Mutton",
        "role": "Contract Manager",
        "email": "james.mutton@gallagher-group.co.uk"
      },
      {
        "name": "Jason Lilley",
        "role": "Contracts Manager",
        "email": "jason.lilley@gallagher-group.co.uk"
      },
      {
        "name": "Jerome Stephens",
        "role": "Contract Manager",
        "email": "jerome.stephens@gallagher-group.co.uk"
      },
      {
        "name": "Joe Heathfield",
        "role": "Property Development Manager",
        "email": "joe.heathfield@gallagher-group.co.uk"
      },
      {
        "name": "Justin Halls",
        "role": "Quantity Surveyor",
        "email": "justin.halls@gallagher-group.co.uk"
      },
      {
        "name": "Nick Harris",
        "role": "Contracts Manager",
        "email": "nick.harris@gallagher-group.co.uk"
      },
      {
        "name": "Richard Asbury",
        "role": "Estimator",
        "email": "richard.asbury@gallagher-group.co.uk"
      },
      {
        "name": "Russell Hockley",
        "role": "Quantity Surveyor",
        "email": "russell.hockley@gallagher-group.co.uk"
      }
    ]
  },
  {
    "id": 329,
    "name": "Galldris Group Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andrei Zugravu",
        "role": "Site Manager",
        "email": "andrei@galldris.co.uk",
        "phone": "7973676527.0"
      },
      {
        "name": "Andrew Poiner",
        "role": "Works Manager",
        "email": "andrew@galldris.co.uk"
      },
      {
        "name": "Andrew Summers",
        "role": "Senior Planner",
        "email": "andrew.summers@galldris.co.uk"
      },
      {
        "name": "Andy Gaunt",
        "role": "Contracts Manager",
        "email": "andy@galldris.co.uk"
      },
      {
        "name": "Ashok Hirani",
        "role": "Quantity Surveyor",
        "email": "ashok.hirani@galldris.co.uk"
      },
      {
        "name": "Belul Mesfin",
        "role": "Assistant Construction Manager",
        "email": "belul.mesfin@galldris.co.uk"
      },
      {
        "name": "Bill Smith",
        "role": "Project Manager",
        "email": "billsmith@galldris.co.uk",
        "phone": "7971660193.0"
      },
      {
        "name": "Ciaran Guthrie",
        "role": "Site Manager",
        "email": "ciaran.guthrie@galldris.co.uk"
      },
      {
        "name": "Clive Fenwick",
        "role": "Project Director",
        "email": "clivefenwick@galldris.co.uk"
      },
      {
        "name": "David Holmes",
        "role": "Quantity Surveyor",
        "email": "david.holmes@galldris.co.uk"
      },
      {
        "name": "Elida Ceka",
        "role": "Quality Assurance Consultant",
        "email": "elida@galldris.co.uk"
      },
      {
        "name": "Erjon Mucaj",
        "role": "Project Manager",
        "email": "erjon.mucaj@galldris.co.uk",
        "phone": "7837214899.0"
      },
      {
        "name": "Fionn O'Brien",
        "role": "Assistant Quantity Surveyor",
        "email": "fionn@galldris.co.uk"
      },
      {
        "name": "Garrett Priestley",
        "role": "Contracts Director",
        "email": "garrett.priestley@galldris.co.uk"
      },
      {
        "name": "Gerry Darby",
        "role": "Contracts Manager",
        "email": "gerrydarby@galldris.co.uk"
      },
      {
        "name": "Ibrahim Arshad",
        "role": "Project Manager",
        "email": "ibrahimarshad@galldris.co.uk"
      },
      {
        "name": "Isa Reibeiro",
        "role": "Project Manager",
        "email": "isareibeiro@galldris.co.uk",
        "phone": "7794338079.0"
      },
      {
        "name": "James Wibberley",
        "role": "Project Manager",
        "email": "james@galldris.co.uk"
      },
      {
        "name": "John Urry",
        "role": "Technical Manager",
        "email": "john@galldris.co.uk"
      },
      {
        "name": "Kim Robinson",
        "role": "kim@galldris.co.uk",
        "email": "7791353342.0"
      },
      {
        "name": "Luke Syms",
        "role": "Senior Quantity Surveyor",
        "email": "lukesyms@galldris.co.uk"
      },
      {
        "name": "Mark Ling",
        "role": "Projects Manager",
        "email": "markling@galldris.co.uk",
        "phone": "7817762006.0"
      },
      {
        "name": "Mxolisi Dean Maphosa",
        "role": "Senior Quantity Surveyor",
        "email": "mxolisi@galldris.co.uk"
      },
      {
        "name": "Owen Sweeney",
        "role": "Project Manager",
        "email": "owen@galldris.co.uk",
        "phone": "7817167964.0"
      },
      {
        "name": "Paul Skudder",
        "role": "Site Manager",
        "email": "paulskudder@galldris.co.uk"
      },
      {
        "name": "Renato Periera",
        "role": "Project Manager",
        "email": "renato.periera@galldris.co.uk",
        "phone": "7805051748.0"
      },
      {
        "name": "Richard Watkins",
        "role": "Regional Director",
        "email": "richard@galldris.co.uk"
      },
      {
        "name": "Robert James",
        "role": "Managing Quantity Surveyor",
        "email": "robert@galldris.co.uk"
      },
      {
        "name": "Shane Keohane",
        "role": "Project Director",
        "email": "shane.keohane@galldris.co.uk",
        "phone": "7971660143.0"
      },
      {
        "name": "Sumair Ghani",
        "role": "Project Engineer",
        "email": "sumair@galldris.co.uk"
      },
      {
        "name": "Tupan Pratherpan",
        "role": "Contracts Manager",
        "email": "tupanprathenpan@galldris.co.uk"
      }
    ]
  },
  {
    "id": 330,
    "name": "Galostar Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Colin Thompson",
        "role": "Contracts Manager",
        "email": "cthompson@galostar.co.uk",
        "phone": "07720 372757"
      },
      {
        "name": "Ian Sanford",
        "role": "Site Manager",
        "email": "ian@galostar.co.uk",
        "phone": "07870 668950"
      },
      {
        "name": "Joel Riley",
        "role": "Contracts Manager",
        "email": "joel@galostar.co.uk"
      },
      {
        "name": "Kevin Boyer",
        "role": "Project Manager",
        "email": "kevin@galostar.co.uk"
      },
      {
        "name": "Paul Barnard",
        "role": "Surveyor",
        "email": "pbarnard@galostar.co.uk"
      },
      {
        "name": "Tony Beach",
        "email": "tony@galostar.co.uk",
        "phone": "07900 522808"
      }
    ]
  },
  {
    "id": 331,
    "name": "Gavin Jones Limited",
    "disciplines": [
      "Landscaping"
    ],
    "contacts": [
      {
        "name": "Andrew Gibbons",
        "role": "Contracts Manager",
        "email": "andrew.gibbons@gavinjones.co.uk"
      },
      {
        "name": "Ben Roberts",
        "role": "Project Manager",
        "email": "ben.roberts@gavinjones.co.uk"
      },
      {
        "name": "Chris Jones",
        "role": "Managing Director",
        "email": "chris.jones@gavinjones.co.uk"
      },
      {
        "name": "Darren White",
        "role": "Commercial Manager",
        "email": "darren.white@gavinjones.co.uk"
      },
      {
        "name": "Jason Smith",
        "role": "Quantity Surveyor",
        "email": "jason.smith@gavinjones.co.uk"
      }
    ]
  },
  {
    "id": 332,
    "name": "GBM Demolition and Earthworks",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adrian Corrigan",
        "role": "Contracts Director",
        "email": "a.corrigan@gbmuk.com",
        "phone": "07747 115984"
      },
      {
        "name": "Amber Freeman",
        "role": "Contract Manager",
        "email": "amber.freeman@gbmuk.com"
      },
      {
        "name": "Andy Harris",
        "role": "Contracts Manager",
        "email": "a.harris@gbmuk.com",
        "phone": "07585 901878"
      },
      {
        "name": "Justin Organ",
        "role": "Site Manager",
        "email": "j.organ@gbmuk.com",
        "phone": "07802 755900"
      },
      {
        "name": "Sean Taylor",
        "role": "Contract Manager",
        "email": "sean.taylor@gbmuk.com",
        "phone": "07922 272898"
      },
      {
        "name": "Simon Grantham",
        "role": "Managing Director",
        "email": "s.grantham@gbmuk.com",
        "phone": "07747 115984"
      }
    ]
  },
  {
    "id": 333,
    "name": "GBM UK",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adrian Corrigan",
        "role": "Contracts Director",
        "email": "a.corrigan@gbmuk.com",
        "phone": "07747 115984"
      },
      {
        "name": "Amber Freeman",
        "role": "Contract Manager",
        "email": "amber.freeman@gbmuk.com"
      },
      {
        "name": "Andy Harris",
        "role": "Contracts Manager",
        "email": "a.harris@gbmuk.com",
        "phone": "07585 901878"
      },
      {
        "name": "Sean Taylor",
        "role": "Contract Manager",
        "email": "sean.taylor@gbmuk.com",
        "phone": "07922 272898"
      },
      {
        "name": "Simon Grantham",
        "role": "Managing Director",
        "email": "s.grantham@gbmuk.com",
        "phone": "07747 115984"
      }
    ]
  },
  {
    "id": 334,
    "name": "GDL Drylining",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "James Gartlan",
        "role": "Director",
        "email": "jamesgartlan@gartlandrylining.com",
        "phone": "07737 148971"
      }
    ]
  },
  {
    "id": 335,
    "name": "GDL Drylining Limited",
    "disciplines": [
      "Dry Lining & Ceilings"
    ],
    "contacts": [
      {
        "name": "James Gartlan",
        "role": "Director",
        "email": "jamesgartlan@gartlandrylining.com",
        "phone": "07737 148971"
      }
    ]
  },
  {
    "id": 336,
    "name": "GeoRoof",
    "disciplines": [
      "Roofing"
    ],
    "contacts": [
      {
        "name": "Chris Burgess",
        "role": "Director",
        "email": "chris@georoof.uk",
        "phone": "07951 760951"
      },
      {
        "name": "Gavin Harriman",
        "role": "Commercial Director",
        "email": "gavin@georoof.uk",
        "phone": "07753 245102"
      },
      {
        "name": "Lewis Hett",
        "role": "Operations Director",
        "email": "lewis.hett@georoof.uk",
        "phone": "07912 892485"
      },
      {
        "name": "Chris Nunn",
        "role": "Quantity Surveyor",
        "email": "chris.nunn@georoof.uk"
      },
      {
        "name": "Darryl O'Rourke",
        "role": "Project Manager",
        "email": "darryl.orourke@georoof.uk"
      },
      {
        "name": "Jason Potter",
        "role": "Project Manager",
        "email": "jason@georoof.uk"
      },
      {
        "name": "Joe Judd",
        "role": "Project Manager",
        "email": "joe.judd@georoof.uk"
      }
    ]
  },
  {
    "id": 337,
    "name": "GeoRoof Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Chris Burgess",
        "role": "Director / Technical Director",
        "email": "chris@georoof.uk",
        "phone": "07951 760951"
      },
      {
        "name": "Chris Nunn",
        "role": "Quantity Surveyor",
        "email": "chris.nunn@georoof.uk",
        "phone": "07951 760951"
      },
      {
        "name": "Darryl O'Rourke",
        "role": "Project Manager",
        "email": "darryl.orourke@georoof.uk"
      },
      {
        "name": "Gavin Harriman",
        "role": "Commercial Director",
        "email": "gavin@georoof.uk",
        "phone": "07753 245102"
      },
      {
        "name": "Jason Potter",
        "role": "Project Manager",
        "email": "jason@georoof.uk"
      },
      {
        "name": "Joe Judd",
        "role": "Project Manager",
        "email": "joe.judd@georoof.uk"
      },
      {
        "name": "Lewis Hett",
        "role": "Operations Director",
        "email": "lewis.hett@georoof.uk",
        "phone": "07912 892485"
      }
    ]
  },
  {
    "id": 338,
    "name": "Gercon",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Martin Coleman",
        "role": "Director",
        "email": "martin.coleman@example.com",
        "phone": "07437 918308"
      }
    ]
  },
  {
    "id": 339,
    "name": "GHD Contracting",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Dan Cox",
        "role": "Foreman",
        "email": "dan.cox@ghduk.co.uk",
        "phone": "07969 977137"
      },
      {
        "name": "George Hewitt",
        "role": "Director",
        "email": "george.hewitt@ghduk.co.uk"
      }
    ]
  },
  {
    "id": 340,
    "name": "GIG Facaden GmbH",
    "disciplines": [
      "Facades & Cladding"
    ],
    "contacts": [
      {
        "name": "Razvan Chis",
        "role": "Site Manager",
        "email": "razvan.chis@gig.uk.com"
      },
      {
        "name": "Robert Druga",
        "role": "Installation Manager",
        "email": "robert.druga@gig.uk.com",
        "phone": "07939 032155"
      }
    ]
  },
  {
    "id": 341,
    "name": "Gill UK Construction",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Kulbir Gill",
        "role": "Director",
        "email": "kulbir@gillukconstruction.co.uk",
        "phone": "07834 175255"
      }
    ]
  },
  {
    "id": 342,
    "name": "Gill UK Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Kulbir Gill",
        "role": "Director",
        "email": "kulbir@gillukconstruction.co.uk",
        "phone": "7834175255.0"
      }
    ]
  },
  {
    "id": 343,
    "name": "Globe Group",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Brian Cottage",
        "email": "brian.cottage@theglobegroup.co.uk"
      },
      {
        "name": "Jamie Samson",
        "role": "Contracts Manager",
        "email": "jamie.samson@theglobegroup.co.uk",
        "phone": "07850 475966"
      },
      {
        "name": "Louis Forbes",
        "role": "Director",
        "email": "louis.forbes@theglobegroup.co.uk",
        "phone": "07867 388148"
      },
      {
        "name": "Neil Thacker",
        "role": "Quantity Surveyor",
        "email": "neil@areascaffolding.co.uk"
      }
    ]
  },
  {
    "id": 344,
    "name": "Glympton Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "David Smith",
        "role": "Project Manager",
        "email": "david.smith@glymptonconstruction.co.uk"
      },
      {
        "name": "Mark Wright",
        "role": "Buyer",
        "email": "mark.wright@glymptonconstruction.co.uk"
      },
      {
        "name": "Mitch Culpin",
        "role": "Commercial Director",
        "email": "mitch.culpin@glymptonconstruction.co.uk"
      },
      {
        "name": "Sam Harding",
        "role": "Managing Director",
        "email": "sam.harding@glymptonconstruction.co.uk"
      }
    ]
  },
  {
    "id": 345,
    "name": "Goldcrest Roofing",
    "disciplines": [
      "Roofing"
    ],
    "contacts": [
      {
        "name": "Danny Adams",
        "role": "Contracts Manager",
        "email": "danny@goldcrestroofing.co.uk"
      },
      {
        "name": "Danny Murphy",
        "role": "Contract Manager",
        "email": "danny.murphy@goldcrestroofing.co.uk"
      }
    ]
  },
  {
    "id": 346,
    "name": "Goldcrest Roofing Services Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Danny Adams",
        "role": "Contracts Manager",
        "email": "danny@goldcrestroofing.co.uk"
      }
    ]
  },
  {
    "id": 347,
    "name": "Gorge Fabrications Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Mark Coxill",
        "role": "Director",
        "email": "markcoxill@gorgefabs.co.uk"
      },
      {
        "name": "Mick Foster",
        "role": "Contract Manager",
        "email": "mickfoster@gorgefabs.co.uk"
      },
      {
        "name": "Steve Mintchev",
        "role": "Director",
        "email": "steve.mintchev@gorgefabs.co.uk",
        "phone": "07957 245722"
      }
    ]
  },
  {
    "id": 348,
    "name": "Graffic Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Campbell Black",
        "role": "Contracts Manager",
        "email": "campbell@grafficltd.com"
      },
      {
        "name": "Chris May",
        "role": "Buyer",
        "email": "chris@grafficltd.com"
      },
      {
        "name": "Pat Sheridan",
        "role": "Site Manager",
        "email": "pat@grafficltd.com"
      },
      {
        "name": "Spencer Lacey",
        "role": "Director",
        "email": "spencer@grafficltd.com",
        "phone": "07900 430263"
      }
    ]
  },
  {
    "id": 349,
    "name": "Graham Construction",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Amy Boyd",
        "role": "Design Co-ordinator",
        "email": "amy.boyd2@graham.co.uk"
      },
      {
        "name": "Andrew Henry",
        "role": "Contracts Director",
        "email": "andrew.henry@graham.co.uk"
      },
      {
        "name": "Berry Graham",
        "role": "Quantity Surveyor",
        "email": "berry.graham@graham.co.uk",
        "phone": "07827 278290"
      },
      {
        "name": "Charlie Smith",
        "role": "Quantity Surveyor",
        "email": "charlie.smith@graham.co.uk"
      },
      {
        "name": "Chris McCallion",
        "role": "Quantity Surveyor",
        "email": "chris.mccallion@graham.co.uk"
      },
      {
        "name": "Des Creelman",
        "role": "Contracts Manager",
        "email": "des.creelman@graham.co.uk"
      },
      {
        "name": "Enda Lyons",
        "role": "Quantity Surveyor",
        "email": "enda.lyons@graham.co.uk",
        "phone": "07584 700779"
      },
      {
        "name": "Ivor Brown",
        "role": "Project Manager",
        "email": "ivor.brown@graham.co.uk",
        "phone": "07875 005553"
      },
      {
        "name": "Jack Harrington",
        "role": "Construction Director",
        "email": "jack.harrington@graham.co.uk"
      },
      {
        "name": "James Donovan",
        "role": "Quantity Surveyor",
        "email": "james.donovan@graham.co.uk"
      },
      {
        "name": "Jonathon Newall",
        "role": "Quantity Surveyor",
        "email": "jonathon.newall@graham.co.uk"
      },
      {
        "name": "Lars Bjart",
        "role": "Project Manager",
        "email": "lars.bjart@graham.co.uk",
        "phone": "07384 244 245"
      },
      {
        "name": "Lee Wrycraft",
        "role": "Quantity Surveyor",
        "email": "lee.wrycraft@graham.co.uk"
      },
      {
        "name": "Liam Turley",
        "role": "Quantity Surveyor",
        "email": "liam.turley@graham.co.uk",
        "phone": "07392 105 783"
      },
      {
        "name": "Marios Pheodoropoulous",
        "role": "Quantity Surveyor",
        "email": "marios.pheodoropoulous@graham.co.uk"
      },
      {
        "name": "Mark White",
        "role": "Construction Director",
        "email": "mark.white@graham.co.uk",
        "phone": "07799 476651"
      },
      {
        "name": "Paul Kelly",
        "role": "Senior Quantity Surveyor",
        "email": "paul.kelly@graham.co.uk"
      },
      {
        "name": "Phil Gallagher",
        "role": "Senior Project Manager",
        "email": "phil.gallagher@graham.co.uk"
      },
      {
        "name": "Ricky Johnston",
        "role": "Site Manager",
        "email": "ricky.johnston@graham.co.uk",
        "phone": "07584 700799"
      },
      {
        "name": "Rob Joyce",
        "role": "Development Director",
        "email": "rob.joyce@graham.co.uk",
        "phone": "07801 460653"
      },
      {
        "name": "Sean Lavery",
        "role": "Quantity Surveyor",
        "email": "sean.lavery@graham.co.uk",
        "phone": "07350 417900"
      },
      {
        "name": "Steven Foster",
        "role": "Quantity Surveyor",
        "email": "steven.foster@graham.co.uk"
      },
      {
        "name": "Adrian McShane",
        "role": "Contract Manager",
        "email": "adrian.mcshane@graham.co.uk"
      },
      {
        "name": "David O'Hagan",
        "role": "Contract Manager",
        "email": "david.ohagan@graham.co.uk"
      },
      {
        "name": "Gavin Wilcox",
        "role": "Quantity Surveyor",
        "email": "gavin.wilcox@graham.co.uk"
      },
      {
        "name": "Keith McCahon",
        "role": "Project Manager",
        "email": "keith.mccahon@graham.co.uk",
        "phone": "7966203849.0"
      }
    ]
  },
  {
    "id": 350,
    "name": "Graham Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alex Gibbon",
        "role": "Procurement Officer",
        "email": "alex.gibbon@graham.co.uk",
        "phone": "07384 878920"
      },
      {
        "name": "Andrew Bill",
        "role": "CEO",
        "email": "andrew.bill@graham.co.uk"
      },
      {
        "name": "Andrew Henry",
        "role": "Contracts Director",
        "email": "andrew.henry@graham.co.uk",
        "phone": "07827 278288"
      },
      {
        "name": "Andrew Matthews",
        "role": "Site Manager",
        "email": "andrew.matthews@graham.co.uk",
        "phone": "07385 038721"
      },
      {
        "name": "Bob McGregor",
        "role": "Project Manager",
        "email": "bob.mcgregor@graham.co.uk"
      },
      {
        "name": "Chris Brannigan",
        "role": "Quantity Surveyor",
        "email": "chris.brannigan@graham.co.uk"
      },
      {
        "name": "Chris Donnelly",
        "role": "Pre Construction Manager",
        "email": "chris.donnelly@graham.co.uk"
      },
      {
        "name": "Colin Ferguson",
        "role": "Managing Quantity Surveyor",
        "email": "colin.ferguson@graham.co.uk"
      },
      {
        "name": "Dan Packman",
        "role": "Quantity Surveyor",
        "email": "dan.packman@graham.co.uk",
        "phone": "07880 406112"
      },
      {
        "name": "Dave Allcock",
        "role": "Site Manager",
        "email": "dave.allcock@graham.co.uk"
      },
      {
        "name": "Dave Brown",
        "role": "Highways Director",
        "email": "dave.brown@graham.co.uk",
        "phone": "07584 700770"
      },
      {
        "name": "David McKeag",
        "role": "Quantity Surveyor",
        "email": "david.mckeag@graham.co.uk",
        "phone": "07791 782232"
      },
      {
        "name": "David Slevin",
        "role": "Contracts Manager",
        "email": "david.slevin@graham.co.uk",
        "phone": "07500 787961"
      },
      {
        "name": "Edward Bill",
        "role": "Contracts Manager",
        "email": "edward.bill@graham.co.uk",
        "phone": "07968 894704"
      },
      {
        "name": "Enda Lyons",
        "role": "Quantity Surveyor",
        "email": "enda.lyons@graham.co.uk",
        "phone": "07584 700779"
      },
      {
        "name": "Euan Glenn",
        "role": "Trainee Estimator",
        "email": "euan.glenn@graham.co.uk",
        "phone": "07385 494889"
      },
      {
        "name": "Gareth Long",
        "role": "Quantity Surveyor",
        "email": "gareth.long@graham.co.uk",
        "phone": "07881 340737"
      },
      {
        "name": "Gareth McLaverty",
        "role": "Project Director",
        "email": "gareth.mclaverty@graham.co.uk"
      },
      {
        "name": "Gareth Scott",
        "role": "Quantity Surveyor",
        "email": "gareth.scott@graham.co.uk"
      },
      {
        "name": "Gerard Fitzpatrick",
        "role": "Quantity Surveyor",
        "email": "gerard.fitzpatrick@graham.co.uk"
      },
      {
        "name": "Glynis Herron",
        "role": "Office Manager",
        "email": "glynisherron@graham.co.uk"
      },
      {
        "name": "Graeme Moffat",
        "role": "Contracts Director",
        "email": "graeme.moffat@graham.co.uk",
        "phone": "7468712170.0"
      },
      {
        "name": "Guy Salazar-Lewis",
        "role": "Construction Director",
        "email": "guy.salazar-lewis@graham.co.uk"
      },
      {
        "name": "Hugh McNally",
        "role": "Project Manager",
        "email": "hugh.mcnally@graham.co.uk"
      },
      {
        "name": "Ivor Brown",
        "role": "Project Manager",
        "email": "ivor.brown@graham.co.uk"
      },
      {
        "name": "Jack Clarke",
        "role": "Project Manager",
        "email": "jack.clarke@graham.co.uk"
      },
      {
        "name": "James Ashcroft",
        "role": "Project Manager",
        "email": "james.ashcroft@graham.co.uk",
        "phone": "7385979636.0"
      },
      {
        "name": "James Donovan",
        "role": "Quantity Surveyor",
        "email": "james.donovan@graham.co.uk"
      },
      {
        "name": "James Rine",
        "role": "Quantity Surveyor",
        "email": "james.rine@graham.co.uk",
        "phone": "07384 527576"
      },
      {
        "name": "James Shannon",
        "role": "Project Manager",
        "email": "jamesshannon@graham.co.uk",
        "phone": "07385 422438"
      },
      {
        "name": "James Stevenson",
        "role": "Project Manager",
        "email": "james.stevenson@graham.co.uk"
      },
      {
        "name": "Jim Armour",
        "role": "Contract Manager",
        "email": "jim.armour@graham.co.uk",
        "phone": "7976325587.0"
      },
      {
        "name": "Jim Flannery",
        "role": "Senior Project Manager",
        "email": "jim.flannery3@graham.co.uk",
        "phone": "07385 038787"
      },
      {
        "name": "Joe Knaggs",
        "role": "Quantity Surveyor",
        "email": "joeknaggs@graham.co.uk",
        "phone": "07386 664940"
      },
      {
        "name": "John-Paul Hickey",
        "role": "Senior Project Manager",
        "email": "johnpaul.hickey@graham.co.uk"
      },
      {
        "name": "John Maguire",
        "role": "Business Development Director",
        "email": "john.maguire@graham.co.uk"
      },
      {
        "name": "Jonathan Hall",
        "role": "Procurement Director",
        "email": "jonathan.hall@graham.co.uk"
      },
      {
        "name": "Jonathon Newell",
        "role": "Commercial Manager",
        "email": "jonathonnewell@graham.co.uk"
      },
      {
        "name": "Julian Donnelly",
        "role": "Project Manager",
        "email": "julian.donnelly@graham.co.uk"
      },
      {
        "name": "Kenny Newland",
        "role": "Project Manager",
        "email": "kenny.newland@graham.co.uk",
        "phone": "07584 700059"
      },
      {
        "name": "Lee Wrycraft",
        "role": "Senior Quantity Surveyor",
        "email": "lee.wrycraft@graham.co.uk",
        "phone": "07881 092399"
      },
      {
        "name": "Liam Turley",
        "role": "Site Manager",
        "email": "liam.turley@graham.co.uk"
      },
      {
        "name": "Marios Theodoropoulos",
        "role": "Quantity Surveyor",
        "email": "marios.theodoropoulos@graham.co.uk"
      },
      {
        "name": "Mark Hyland",
        "role": "Project Manager",
        "email": "markhyland@graham.co.uk"
      },
      {
        "name": "Michael Croston",
        "role": "Quantity Surveyor",
        "email": "michael.croston@graham.co.uk"
      },
      {
        "name": "Neil McFarlane",
        "role": "Contracts Manager",
        "email": "neil.mcfarlane@graham.co.uk"
      },
      {
        "name": "Pat O'Hare",
        "role": "Regional Director",
        "email": "pat.ohare2@graham.co.uk"
      },
      {
        "name": "Paul Kelly",
        "role": "Quantity Surveyor",
        "email": "paul.kelly@graham.co.uk",
        "phone": "07813 573950"
      },
      {
        "name": "Paul Scott",
        "role": "Contracts Director",
        "email": "paul.scott@graham.co.uk",
        "phone": "07966 068995"
      },
      {
        "name": "Peter Reavey",
        "role": "Regional Director",
        "email": "peter.reavey@graham.co.uk"
      },
      {
        "name": "Richard Hand",
        "role": "Site Manager",
        "email": "richard.hand@graham.co.uk",
        "phone": "07385 522053"
      },
      {
        "name": "Rob Joyce",
        "role": "Development Director",
        "email": "rob.joyce@graham.co.uk",
        "phone": "07801 460653"
      },
      {
        "name": "Robert Laverty",
        "role": "Quantity Surveyor",
        "email": "robert.laverty@graham.co.uk"
      },
      {
        "name": "Ronan McRory",
        "role": "Quantity Surveyor",
        "email": "ronan.mcrory@graham.co.uk"
      },
      {
        "name": "Rosie Barnett",
        "role": "Environmental Manager",
        "email": "rosie.barnett@graham.co.uk"
      },
      {
        "name": "Simon Cotton",
        "role": "Quantity Surveyor",
        "email": "simon.cotton@graham.co.uk",
        "phone": "7385538279.0"
      },
      {
        "name": "Simon Walton",
        "role": "Project Manager",
        "email": "simon.walton@graham.co.uk",
        "phone": "7384439908.0"
      },
      {
        "name": "Stephen Van Den Hoek",
        "role": "Regional Director",
        "email": "stephen.vandenhoek@graham.co.uk"
      },
      {
        "name": "Stephen McFall",
        "email": "stephen.mcfall@graham.co.uk",
        "phone": "07967 039682"
      },
      {
        "name": "Steve Deakin",
        "role": "Site Manager",
        "email": "steve.deakin@graham.co.uk",
        "phone": "07385 377463"
      },
      {
        "name": "Steven Foster",
        "role": "Senior Quantity Surveyor",
        "email": "steven.foster@graham.co.uk",
        "phone": "07392 124322"
      },
      {
        "name": "Tommy Craven",
        "role": "Contract Manager",
        "email": "thomas.craven@graham.co.uk",
        "phone": "07968 894708"
      },
      {
        "name": "Will Lawler",
        "role": "Project Manager",
        "email": "william.lawler@graham.co.uk",
        "phone": "7384916357.0"
      }
    ]
  },
  {
    "id": 351,
    "name": "Grangewood Brickwork",
    "disciplines": [
      "Brickwork"
    ],
    "contacts": [
      {
        "name": "Adam Baskett",
        "role": "Contract Manager",
        "email": "adam.baskett@grangewoodbrickwork.co.uk",
        "phone": "07970 124785"
      },
      {
        "name": "Billy Merle",
        "role": "Project Manager",
        "email": "billy.merle@grangewoodbrickwork.co.uk"
      },
      {
        "name": "Chris Hanford",
        "role": "Director",
        "email": "chrishanford@grange-wood.co.uk"
      },
      {
        "name": "John Elliott",
        "role": "Site Manager",
        "email": "john.elliott@grangewoodbrickwork.co.uk"
      },
      {
        "name": "Paul Goddard",
        "role": "Commercial Director",
        "email": "paul.goddard@grangewoodbrickwork.co.uk"
      },
      {
        "name": "Reece Reynolds",
        "role": "Senior Contracts Manager",
        "email": "reecereynolds@grange-wood.co.uk"
      },
      {
        "name": "Sam Jones",
        "role": "Quantity Surveyor",
        "email": "samjones@grange-wood.co.uk",
        "phone": "07875 124518"
      },
      {
        "name": "Steve Dye",
        "role": "Contracts Manager",
        "email": "stevedye@grange-wood.co.uk",
        "phone": "07970 124774"
      },
      {
        "name": "Tom McGuire",
        "role": "Managing Director",
        "email": "tommcguire@grangewoodbrickwork.co.uk"
      },
      {
        "name": "Barry O'Mahony",
        "role": "Contracts Manager",
        "email": "barry.omahony@grangewoodbrickwork.co.uk"
      },
      {
        "name": "Chris Nash",
        "role": "Commercial Director",
        "email": "chris.nash@grangewoodbrickwork.co.uk"
      },
      {
        "name": "Daniel Hearn",
        "role": "Quantity Surveyor",
        "email": "daniel.hearn@grangewoodbrickwork.co.uk"
      },
      {
        "name": "Darren Dyer",
        "role": "Contracts Manager",
        "email": "darren.dyer@grangewoodbrickwork.co.uk"
      },
      {
        "name": "Gary O'Connor",
        "role": "Managing Director",
        "email": "gary.oconnor@grangewoodbrickwork.co.uk"
      },
      {
        "name": "James Murphy",
        "role": "Project Manager",
        "email": "james.murphy@grangewoodbrickwork.co.uk"
      },
      {
        "name": "Lee O'Mahony",
        "role": "Director",
        "email": "lee.omahony@grangewoodbrickwork.co.uk"
      },
      {
        "name": "Paul O'Mahony",
        "role": "Director",
        "email": "paul.omahony@grangewoodbrickwork.co.uk"
      }
    ]
  },
  {
    "id": 352,
    "name": "Grangewood Builders",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adam Baskett",
        "role": "Contract Manager",
        "email": "adam.baskett@grange-wood.co.uk",
        "phone": "07970 124785"
      },
      {
        "name": "Billy Merle",
        "role": "Project Manager",
        "email": "billy.merle@grange-wood.co.uk"
      },
      {
        "name": "Chris Hanford",
        "role": "Director",
        "email": "chrishanford@grange-wood.co.uk"
      },
      {
        "name": "Paul Goddard",
        "role": "Commercial Director",
        "email": "paul.goddard@grange-wood.co.uk"
      },
      {
        "name": "Reece Reynolds",
        "role": "Senior Contracts Manager",
        "email": "reecereynolds@grange-wood.co.uk"
      },
      {
        "name": "Sam Jones",
        "role": "Quantity Surveyor",
        "email": "samjones@grange-wood.co.uk",
        "phone": "07875 124518"
      },
      {
        "name": "Steve Dye",
        "role": "Contracts Manager",
        "email": "stevedye@grange-wood.co.uk",
        "phone": "07970 124774"
      },
      {
        "name": "Tom McGuire",
        "role": "Managing Director",
        "email": "tommcguire@grangewoodbrickwork.co.uk"
      }
    ]
  },
  {
    "id": 353,
    "name": "Grayson (GB) Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Helen Gibson",
        "role": "Account Manager",
        "email": "helen.gibson@grayson-gb.com"
      },
      {
        "name": "James Elgey",
        "role": "Account Manager",
        "email": "jamese@grayson-gb.com"
      }
    ]
  },
  {
    "id": 354,
    "name": "GRM Roofing Company Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Ben Scholes",
        "role": "Estimator",
        "email": "ben.scholes@grmroofing.co.uk"
      },
      {
        "name": "Craig Whiting",
        "role": "Contracts Manager",
        "email": "craig@grmroofing.co.uk",
        "phone": "07768 178634"
      },
      {
        "name": "Matthew Reed",
        "role": "Contracts Manager",
        "email": "matthew@grmroofing.co.uk"
      }
    ]
  },
  {
    "id": 355,
    "name": "Ground Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Cornel Horbenco",
        "role": "Project Manager",
        "email": "cornelhorbenco@groundconstruction.com"
      },
      {
        "name": "Darren Flanagan",
        "role": "Project Manager",
        "email": "darren.flanagan@groundconstruction.com"
      },
      {
        "name": "Fergus Currie",
        "role": "Quantity Surveyor",
        "email": "ferguscurrie@groundconstruction.com"
      },
      {
        "name": "James Connelly",
        "role": "Quantity Surveyor",
        "email": "jamesconnelly@groundconstruction.com"
      },
      {
        "name": "Jamie Cunningham",
        "role": "Quantity Surveyor",
        "email": "jamiecunningham@groundconstruction.com"
      },
      {
        "name": "John Diviney",
        "role": "Commercial Director",
        "email": "johndiviney@groundconstruction.com"
      },
      {
        "name": "Mark Grogan",
        "role": "Buyer",
        "email": "markgrogan@groundconstruction.com"
      },
      {
        "name": "Michael Greene",
        "role": "Projects Manager",
        "email": "michaelgreen@groundconstruction.com",
        "phone": "7971198757.0"
      },
      {
        "name": "Paul Ruth",
        "role": "Project Director",
        "email": "paulruth@groundconstruction.com"
      },
      {
        "name": "Phil Griffiths",
        "role": "Site Supervisor",
        "email": "philgriffiths@groundconstruction.com"
      },
      {
        "name": "Sean Conroy",
        "role": "Buyer",
        "email": "seanconroy@groundconstruction.com"
      },
      {
        "name": "Steve Edwards",
        "role": "Quantity Surveyor",
        "email": "steveedwards@groundconstruction.com"
      },
      {
        "name": "Trevor Diviney",
        "role": "Managing Director",
        "email": "trevordiviney@groundconstruction.com"
      }
    ]
  },
  {
    "id": 356,
    "name": "Ground Control Limited",
    "disciplines": [
      "Landscaping"
    ],
    "contacts": [
      {
        "name": "Adam Young",
        "role": "Contracts Manager",
        "email": "adam.young@ground-control.co.uk"
      },
      {
        "name": "Ben Clarke",
        "role": "Project Manager",
        "email": "ben.clarke@ground-control.co.uk"
      },
      {
        "name": "Darren Foster",
        "role": "Commercial Manager",
        "email": "darren.foster@ground-control.co.uk"
      },
      {
        "name": "James Allen",
        "role": "Managing Director",
        "email": "james.allen@ground-control.co.uk"
      },
      {
        "name": "Luke Roberts",
        "role": "Quantity Surveyor",
        "email": "luke.roberts@ground-control.co.uk"
      }
    ]
  },
  {
    "id": 357,
    "name": "Groundforce Shorco",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Darren Boo",
        "role": "Sales Manager",
        "email": "darren.boo@groundforce.com"
      },
      {
        "name": "Mark Hussein",
        "role": "Area Manager",
        "email": "mark.hussein@groundforce.com",
        "phone": "07711 958002"
      }
    ]
  },
  {
    "id": 358,
    "name": "Groundwork East",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Julia Watts",
        "role": "Landscape Architect",
        "email": "julia.watts@groundwork.org.uk"
      },
      {
        "name": "Tony Perry",
        "email": "hertfordshire@groundwork.org.uk"
      }
    ]
  },
  {
    "id": 359,
    "name": "Groundwork North London",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Jane Everitt",
        "email": "jane.everitt@groundwork.org.uk"
      },
      {
        "name": "Stuart Taylor",
        "role": "Senior Landscape Architect",
        "email": "stuart.taylor@groundwork.org.uk"
      }
    ]
  },
  {
    "id": 360,
    "name": "Groundwork Services (Durham) Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Anna Southwick",
        "role": "Quantity Surveyor",
        "email": "asouthwick@gwsdurham.co.uk"
      },
      {
        "name": "Anth Heslop",
        "role": "Site Manager",
        "email": "aheslop@gwsdurham.co.uk"
      },
      {
        "name": "Ben Johnson",
        "role": "Contracts Manager",
        "email": "info@gwsdurham.co.uk",
        "phone": "7807687305.0"
      },
      {
        "name": "Chris Snowball",
        "role": "Quantity Surveyor",
        "email": "csnowball@gwsdurham.co.uk"
      },
      {
        "name": "Gordon Clough",
        "role": "Quantity Surveyor",
        "email": "gclough@gwsdurham.co.uk"
      },
      {
        "name": "Jon Barron",
        "role": "Contracts Manager",
        "email": "jbarron@gwsdurham.co.uk",
        "phone": "07801 545405"
      },
      {
        "name": "Karl Thompson",
        "role": "Contracts Manager",
        "email": "kthompson@gwsdurham.co.uk",
        "phone": "7535744160.0"
      },
      {
        "name": "Michael Barron",
        "role": "Contract Manager",
        "email": "mbarron@gwsdurham.co.uk",
        "phone": "07971 115665"
      },
      {
        "name": "Nigel Walker",
        "role": "Site Manager",
        "email": "nwalker@gwsdurham.co.uk"
      },
      {
        "name": "Paul Barton",
        "role": "Project Manager",
        "email": "pbarton@northeastearthworks.co.uk"
      },
      {
        "name": "Scott Backlin",
        "role": "Plant Manager",
        "email": "scottbacklin@gwsdurham.co.uk",
        "phone": "07903 036157"
      }
    ]
  },
  {
    "id": 361,
    "name": "GRT Builders Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Anthony Jones",
        "role": "Contracts Manager",
        "email": "anthony.jones@grtgroup.co.uk"
      },
      {
        "name": "Graham Paxton",
        "role": "Quantity Surveyor",
        "email": "graham@grtgroup.co.uk",
        "phone": "07969 037374"
      },
      {
        "name": "Karl Willard",
        "role": "Scaffolding Manager",
        "email": "karl@grtgroup.co.uk"
      },
      {
        "name": "Lee Elliot",
        "role": "Project Manager",
        "email": "lee@grtgroup.co.uk"
      },
      {
        "name": "Lloyd Potterill",
        "role": "Contracts Manager",
        "email": "lloyd.potterill@grtgroup.co.uk",
        "phone": "07872 465559"
      },
      {
        "name": "Paul Kent",
        "role": "Contracts Manager",
        "email": "paul.kent@grtgroup.co.uk"
      },
      {
        "name": "Robert Dickens",
        "role": "Director",
        "email": "robert.dickens@grtgroup.co.uk"
      },
      {
        "name": "Russell Edwards",
        "role": "Contracts Manager",
        "email": "russell@grtgroup.co.uk"
      },
      {
        "name": "Stuart Cameron",
        "role": "Contracts Manager",
        "email": "stuart@grtgroup.co.uk",
        "phone": "07535 994053"
      }
    ]
  },
  {
    "id": 362,
    "name": "GSE Group",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andy Poole",
        "role": "Buyer",
        "email": "andy.poole@gse-group.com"
      },
      {
        "name": "Darrell Healey",
        "role": "Managing Director",
        "email": "darrell.healey@gse-group.com"
      },
      {
        "name": "Darren Heavey",
        "email": "darren.heavey@gse-group.com"
      },
      {
        "name": "Elizabeth Coppen",
        "role": "Quantity Surveyor",
        "email": "elizabeth.coppen@gsegroup.com"
      },
      {
        "name": "Josh Healey",
        "role": "Director of Development",
        "email": "josh.healey@gse-group.com"
      },
      {
        "name": "Lee Williams",
        "role": "Site Manager",
        "email": "lee.williams@gse-group.com"
      },
      {
        "name": "Luke Mullaney",
        "role": "Development Manager",
        "email": "luke.mullaney@gse-group.com"
      },
      {
        "name": "Matthew Parsler",
        "role": "Commercial Lead",
        "email": "matthew.parsler@gse-group.com"
      },
      {
        "name": "Nick Gauntlett",
        "role": "Executive Director",
        "email": "nick.gauntlett@gse-group.com"
      },
      {
        "name": "Shaun Burgin",
        "role": "Contracts Manager",
        "email": "shaun.burgin@gse-group.com"
      },
      {
        "name": "Steve Perrin",
        "role": "Contract Manager",
        "email": "steve.perrin@gse-group.com"
      },
      {
        "name": "Stewart Law",
        "role": "Contracts Manager",
        "email": "stewart.law@gse-group.com"
      },
      {
        "name": "Stuart Law",
        "role": "Contract Manager",
        "email": "stuart.law@gse-group.com",
        "phone": "07795 288733"
      },
      {
        "name": "Tony Bowles",
        "role": "Contracts Manager",
        "email": "tony.bowles@gse-group.com"
      },
      {
        "name": "Trevor Parker",
        "role": "Quantity Surveyor",
        "email": "trevor.parker@gse-group.com"
      }
    ]
  },
  {
    "id": 363,
    "name": "GSL Groundwork Solution Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Clinton Hastie",
        "role": "Director",
        "email": "clinton.hastie@gsl-ltd.co.uk"
      },
      {
        "name": "John Taylor",
        "role": "Contracts Manager",
        "email": "john.taylor@gsl-ltd.co.uk",
        "phone": "07920 098639"
      },
      {
        "name": "Rob Mann",
        "role": "Director",
        "email": "rob.mann@gsl-ltd.co.uk",
        "phone": "07580 694420"
      },
      {
        "name": "Tarnia Pitts-Webster",
        "role": "Quantity Surveyor",
        "email": "tarnia@gsl-ltd.co.uk"
      }
    ]
  },
  {
    "id": 364,
    "name": "GSQ Brickwork",
    "disciplines": [
      "Brickwork"
    ],
    "contacts": [
      {
        "name": "Garry Staines",
        "role": "Director",
        "email": "garry@gsqbrickwork.co.uk",
        "phone": "07792 528312"
      },
      {
        "name": "Alex Staines",
        "role": "Quantity Surveyor",
        "email": "alex@gsqbrickwork.co.uk"
      },
      {
        "name": "Andy Debnam",
        "role": "Contracts Manager",
        "email": "andy.debnam@gsqbrickwork.co.uk"
      },
      {
        "name": "Jim Hallybone",
        "role": "Contracts Manager",
        "email": "jim.hallybone@gsqbrickwork.co.uk"
      },
      {
        "name": "Richard Green",
        "role": "Contracts Manager",
        "email": "richard@gsqbrickwork.co.uk",
        "phone": "07901 663663"
      }
    ]
  },
  {
    "id": 365,
    "name": "GSS Piling Limited",
    "disciplines": [
      "Piling"
    ],
    "contacts": [
      {
        "name": "Felix Hyde",
        "role": "Project Manager",
        "email": "felix@gsspiling.co.uk"
      },
      {
        "name": "Paul Burr",
        "role": "Operations Director",
        "email": "paul@gsspiling.co.uk",
        "phone": "7973399252.0"
      }
    ]
  },
  {
    "id": 366,
    "name": "GTEK Group",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andy Harrison",
        "role": "Contracts Manager",
        "email": "andi.harrison@gtekltd.co.uk",
        "phone": "07973 141653"
      },
      {
        "name": "Charles Shaw",
        "role": "Contracts Manager",
        "email": "charles.shaw@gtekltd.co.uk",
        "phone": "07849 984188"
      },
      {
        "name": "Ciaran Keith",
        "role": "Quantity Surveyor",
        "email": "ciaran.keith@gtekltd.co.uk"
      },
      {
        "name": "Jim Howe",
        "role": "Business Development Manager",
        "email": "jim.howe@gtekltd.co.uk"
      },
      {
        "name": "Sam Wedlock",
        "role": "Site Manager",
        "email": "sam.wedlock@gtekltd.co.uk"
      },
      {
        "name": "Stuart Keith",
        "role": "Commercial Director",
        "email": "stuart.keith@gtekltd.co.uk"
      }
    ]
  },
  {
    "id": 367,
    "name": "H Young Structures",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Ian Peachment",
        "role": "Managing Director",
        "email": "ian.peachment@hyoungstructures.co.uk"
      },
      {
        "name": "Peter Smith",
        "role": "Project Director",
        "email": "peter.smith@hyoungstructures.co.uk"
      },
      {
        "name": "Ian Hale",
        "role": "Contracts Manager",
        "email": "ian.hale@hyoungstructures.co.uk"
      },
      {
        "name": "Mike Colman",
        "role": "Contracts Manager",
        "email": "mike.colman@hyoungstructures.co.uk"
      }
    ]
  },
  {
    "id": 368,
    "name": "H Young Structures Limited",
    "disciplines": [
      "RC Frame"
    ],
    "contacts": [
      {
        "name": "Ian Hale",
        "role": "Contracts Manager",
        "email": "ian.hale@hyoungstructures.co.uk"
      },
      {
        "name": "Ian Peachment",
        "role": "Managing Director",
        "email": "ian.peachment@hyoungstructures.co.uk"
      },
      {
        "name": "Mike Colman",
        "role": "Contracts Manager",
        "email": "mike.colman@hyoungstructures.co.uk"
      },
      {
        "name": "Peter Smith",
        "role": "Project Director",
        "email": "peter.smith@hyoungstructures.co.uk"
      },
      {
        "name": "Andrew Young",
        "role": "Director",
        "email": "andrew@hyoungstructures.co.uk"
      }
    ]
  },
  {
    "id": 369,
    "name": "Hadley Group",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andrew Waddell",
        "role": "Project Manager",
        "email": "awaddell@hadleysteelframing.com"
      },
      {
        "name": "Gavin Jaggard",
        "role": "Regional Sales Manager",
        "email": "gjaggard@hadleysteelframing.com"
      },
      {
        "name": "Tibor Nagy",
        "role": "Design Manager",
        "email": "tibor.nagy@hadleysteelframing.com"
      }
    ]
  },
  {
    "id": 370,
    "name": "Haggar Construction",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Dean Haggar",
        "role": "Director",
        "email": "dean@haggarconstruction.co.uk",
        "phone": "07845 077214"
      }
    ]
  },
  {
    "id": 371,
    "name": "Halsion",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Les Becker",
        "role": "Contracts Director",
        "email": "les.becker@halsion.com"
      },
      {
        "name": "Mike Morris",
        "role": "Commercial Director",
        "email": "mike.morris@halsion.com"
      },
      {
        "name": "Andrew Dray",
        "role": "Contracts Manager",
        "email": "andrew.dray@halsion.com"
      },
      {
        "name": "Andy Ranger",
        "role": "Mechanical Contracts Manager",
        "email": "andy.ranger@halsion.com",
        "phone": "07711 015665"
      },
      {
        "name": "Charlie Boulding",
        "role": "Contracts Manager",
        "email": "charlie.boulding@halsion.com"
      },
      {
        "name": "Chris Robinson",
        "role": "Mechanical Contracts Manager",
        "email": "chris.robinson@halsion.com",
        "phone": "07775 511991"
      },
      {
        "name": "Daniel Fleet",
        "role": "Contracts Manager",
        "email": "dan.fleet@halsion.com",
        "phone": "07704 675197"
      },
      {
        "name": "David Bowman",
        "role": "Quantity Surveyor",
        "email": "david.bowman@halsion.com"
      },
      {
        "name": "Gary Becker",
        "role": "Contract Manager",
        "email": "gary.becker@halsion.com"
      },
      {
        "name": "Ian Hossick",
        "role": "Contract Manager",
        "email": "ian.hossick@halsion.com"
      },
      {
        "name": "James Klosek",
        "role": "Electrical Contracts Manager",
        "email": "james.klosek@halsion.com"
      },
      {
        "name": "Josh Johnson",
        "role": "Electrical Project Manager",
        "email": "josh.johnson@halsion.com"
      },
      {
        "name": "Kevin Cambridge",
        "role": "Design Manager",
        "email": "kevin.cambridge@halsion.com"
      },
      {
        "name": "Lee Robson",
        "role": "Mechanical Contracts Manager",
        "email": "lee.robson@halsion.com"
      },
      {
        "name": "Mark Wells",
        "role": "Electrical Manager",
        "email": "mark.wells@halsion.com"
      },
      {
        "name": "Ollie Banks",
        "role": "Contracts Manager",
        "email": "ollie.banks@halsion.com"
      },
      {
        "name": "Piers Hammond",
        "role": "Electrical Contracts Manager",
        "email": "piers.hammond@halsion.com"
      },
      {
        "name": "Richard Lester",
        "role": "Mechanical Contracts Manager",
        "email": "richard.lester@halsion.com"
      },
      {
        "name": "Sam Williams",
        "role": "Mechanical Project Manager",
        "email": "sam.williams@halsion.com"
      },
      {
        "name": "Steve Larkins",
        "role": "Engineering Manager",
        "email": "steve.larkins@halsion.com"
      },
      {
        "name": "Tom Bull",
        "role": "Electrical Contracts Manager",
        "email": "tom.bull@halsion.com",
        "phone": "07557 097315"
      }
    ]
  },
  {
    "id": 372,
    "name": "Hambleton Steel",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Colin Watson",
        "role": "Managing Director",
        "email": "colin.watson@hambletonsteel.co.uk"
      },
      {
        "name": "Andrew Fixter",
        "role": "Contracts Director",
        "email": "andrew.fixter@hambletonsteel.co.uk"
      },
      {
        "name": "Charlie Fixter",
        "role": "Quantity Surveyor",
        "email": "fixterc@hambletonsteel.co.uk"
      },
      {
        "name": "Doug Willis",
        "role": "Contracts Manager",
        "email": "doug.willis@hambletonsteel.co.uk"
      },
      {
        "name": "Lee Shardha",
        "role": "Contracts Manager",
        "email": "lee.shardha@hambletonsteel.co.uk"
      },
      {
        "name": "Martyn Wilson",
        "role": "Contract Manager",
        "email": "martyn.wilson@hambletonsteel.co.uk"
      },
      {
        "name": "Mike Wilkinson",
        "role": "Quantity Surveyor",
        "email": "mike.wilkinson@hambletonsteel.co.uk"
      },
      {
        "name": "Paul Millard",
        "role": "Contracts Manager",
        "email": "paul.millard@hambletonsteel.co.uk"
      },
      {
        "name": "Tony McKenna",
        "role": "Contracts Manager",
        "email": "tony.mckenna@hambletonsteel.co.uk"
      },
      {
        "name": "Darren Cowton",
        "role": "Works Manager",
        "email": "darren.cowton@hambletonsteel.co.uk"
      }
    ]
  },
  {
    "id": 373,
    "name": "Hambleton Steel Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andrew Fixter",
        "role": "Contracts Director",
        "email": "andrew.fixter@hambletonsteel.co.uk"
      },
      {
        "name": "Andy Brookes",
        "role": "Site Manager",
        "email": "andy.brookes@hambletonsteel.co.uk"
      },
      {
        "name": "Charlie Fixter",
        "role": "Quantity Surveyor",
        "email": "fixterc@hambletonsteel.co.uk"
      },
      {
        "name": "Colin Watson",
        "role": "Managing Director",
        "email": "colin.watson@hambletonsteel.co.uk"
      },
      {
        "name": "Darren Cowton",
        "role": "Works Manager",
        "email": "darren.cowton@hambletonsteel.co.uk"
      },
      {
        "name": "Doug Willis",
        "role": "Contracts Manager",
        "email": "doug.willis@hambletonsteel.co.uk"
      },
      {
        "name": "Lee Shardha",
        "role": "Contracts Manager",
        "email": "lee.shardha@hambletonsteel.co.uk"
      },
      {
        "name": "Martyn Wilson",
        "role": "Contract Manager",
        "email": "martyn.wilson@hambletonsteel.co.uk"
      },
      {
        "name": "Mike Wilkinson",
        "role": "Quantity Surveyor",
        "email": "mike.wilkinson@hambletonsteel.co.uk"
      },
      {
        "name": "Paul Millard",
        "role": "Contracts Manager",
        "email": "paul.millard@hambletonsteel.co.uk"
      },
      {
        "name": "Rachel Rae",
        "role": "Buyer",
        "email": "rachel.rae@hambletonsteel.co.uk"
      },
      {
        "name": "Tony McKenna",
        "role": "Contracts Manager",
        "email": "tony.mckenna@hambletonsteel.co.uk"
      }
    ]
  },
  {
    "id": 374,
    "name": "Hampshire Demolition & Recycling",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Dan Cox",
        "role": "Quantity Surveyor",
        "email": "dan.cox@hdr-group.co.uk",
        "phone": "07809 900590"
      },
      {
        "name": "Mark Parrott",
        "role": "Contracts Manager",
        "email": "mark.parrott@hdr-group.co.uk",
        "phone": "07494 496191"
      }
    ]
  },
  {
    "id": 375,
    "name": "Hampshire Demolition and Recycling Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Dan Cox",
        "role": "Quantity Surveyor",
        "email": "dan.cox@hdr-group.co.uk",
        "phone": "7809900590.0"
      },
      {
        "name": "Mark Parrott",
        "role": "Contracts Manager",
        "email": "mark.parrott@hdr-group.co.uk",
        "phone": "7494496191.0"
      }
    ]
  },
  {
    "id": 376,
    "name": "Hanover Building Services",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Charlie Weeden",
        "role": "Managing Director",
        "email": "cweeden@hanoverelectrical.com"
      },
      {
        "name": "Dominique Franzmann",
        "role": "Construction Director",
        "email": "dfranzmann@hanoverelectrical.com"
      },
      {
        "name": "Marc Campbell",
        "role": "Operations Manager",
        "email": "m.campbell@hanoverbuilding.com"
      },
      {
        "name": "Dean Saunders",
        "role": "Contracts Manager",
        "email": "dsaunders@hanoverbuildingservices.com"
      },
      {
        "name": "Saul Poel",
        "role": "Contract Manager",
        "email": "office@hanoverbuildingservices.com",
        "phone": "07957 744467"
      },
      {
        "name": "Jo Bowen",
        "role": "Buying Manager",
        "email": "jbowen@hanoverbuildingservices.com"
      }
    ]
  },
  {
    "id": 377,
    "name": "Hanover Building Services Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Saul Poel",
        "role": "Contract Manager",
        "phone": "7957744467.0"
      }
    ]
  },
  {
    "id": 378,
    "name": "Hardy Sherwood",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Simon Bensley",
        "role": "Contract Manager",
        "email": "simon.bensley@hardysherwood.com"
      }
    ]
  },
  {
    "id": 379,
    "name": "Harkmac",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Francis Harkin",
        "role": "Director",
        "email": "francis.harkin@harkmac.com"
      },
      {
        "name": "Luke Trautner",
        "role": "Project Manager",
        "email": "luke.trautner@harkmac.com"
      },
      {
        "name": "Mark Curry",
        "role": "Quantity Surveyor",
        "email": "mark.curry@harkmac.com"
      }
    ]
  },
  {
    "id": 380,
    "name": "Harmonix Construction",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "John Farragher",
        "role": "Managing Director",
        "email": "john@harmonixconstruction.com",
        "phone": "07739 954082"
      },
      {
        "name": "Shane McLoughlin",
        "role": "Commercial Director",
        "email": "shane@harmonixconstruction.com",
        "phone": "07824 480976"
      },
      {
        "name": "Gearoid Keane",
        "role": "Project Director",
        "email": "gearoid@harmonixconstruction.com",
        "phone": "07825 142862"
      },
      {
        "name": "Darren McQuibban",
        "role": "Contracts Manager",
        "email": "darren@harmonixconstruction.com",
        "phone": "07920 721730"
      },
      {
        "name": "Owain Power",
        "role": "Contracts Manager",
        "email": "owen@harmonixconstruction.com",
        "phone": "07989 168321"
      },
      {
        "name": "Hugh Tearle",
        "role": "Quantity Surveyor",
        "email": "hugh@harmonixconstruction.com",
        "phone": "07824 844429"
      },
      {
        "name": "Jonathan Hague",
        "role": "Quantity Surveyor",
        "email": "jonathan@harmonixconstruction.com",
        "phone": "07824 844428"
      },
      {
        "name": "Travis Oxley",
        "role": "Quantity Surveyor",
        "email": "travis@harmonixconstruction.com"
      },
      {
        "name": "Hugh Pheral",
        "role": "Quantity Surveyor",
        "email": "hugh.pheral@harmonixconstruction.com"
      },
      {
        "name": "Nikolay Kosherov",
        "role": "Quantity Surveyor",
        "email": "nikolay.kosherov@harmonixconstruction.com"
      },
      {
        "name": "Luke White",
        "role": "Buyer",
        "email": "luke@harmonixconstruction.com",
        "phone": "07377 586493"
      },
      {
        "name": "Chris Dixon",
        "role": "Buyer",
        "email": "chris.dixon@harmonixconstruction.com"
      }
    ]
  },
  {
    "id": 381,
    "name": "Harringtons Builders Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Chetan Patel",
        "role": "Quantity Surveyor",
        "email": "chetan.patel@harringtonsplc.co.uk"
      },
      {
        "name": "Chris Ward",
        "role": "Site Manager",
        "email": "chris.ward@harringtonsplc.co.uk"
      },
      {
        "name": "Damian Grant",
        "role": "Project Manager",
        "email": "damian.grant@harringtonsplc.co.uk"
      },
      {
        "name": "Dan Howlin",
        "role": "Contract Manager",
        "email": "dan.howlin@harringtonsplc.co.uk"
      },
      {
        "name": "Dave Barker",
        "role": "Contracts Manager",
        "email": "dave.barker@harringtonsplc.co.uk"
      },
      {
        "name": "Eduard Fartade",
        "role": "Project Manager",
        "email": "eduard.fartade@harringtonsplc.co.uk"
      },
      {
        "name": "Gary Fagg",
        "role": "Quantity Surveyor",
        "email": "gary.fagg@harringtonsplc.co.uk"
      },
      {
        "name": "Giuseppe Filotto",
        "role": "Quantity Surveyor",
        "email": "giuseppe.filotto@harringtonsplc.co.uk"
      },
      {
        "name": "Hudson Holt",
        "role": "Contracts Manager",
        "email": "hudson.holt@harringtonsplc.co.uk",
        "phone": "7467516296.0"
      },
      {
        "name": "James Minihan",
        "role": "Quantity Surveyor",
        "email": "james.minihan@harringtonsplc.co.uk",
        "phone": "7799234058.0"
      },
      {
        "name": "Jim Kavanagh",
        "role": "Contracts Manager",
        "email": "jim.kavanagh@harringtonsplc.co.uk",
        "phone": "7775948715.0"
      },
      {
        "name": "JJ Meintjes",
        "role": "Project Manager",
        "email": "jj.meintjes@harringtonsplc.co.uk"
      },
      {
        "name": "John Reidy",
        "role": "Project Manager",
        "email": "john.reidy@harringtonsplc.co.uk"
      },
      {
        "name": "John Voiasciuc",
        "role": "Contracts Manager",
        "email": "john.voiasciuc@harringtonsplc.co.uk",
        "phone": "7807062052.0"
      },
      {
        "name": "Jordan Clancy",
        "role": "Buyer",
        "email": "jordan.clancy@harringtonsplc.co.uk"
      },
      {
        "name": "Lily Roberts",
        "role": "Buyer",
        "email": "lily.roberts@harringtonsplc.co.uk"
      },
      {
        "name": "Mark Swift",
        "role": "Quantity Surveyor",
        "email": "mark.swift@harringtonsplc.co.uk"
      },
      {
        "name": "Michael Corin",
        "role": "Project Manager",
        "email": "michael.corin@harringtonsplc.co.uk"
      },
      {
        "name": "Mick Walsh",
        "role": "Contracts Manager",
        "email": "mick.walsh@harringtonsplc.co.uk"
      },
      {
        "name": "Neil McNamara",
        "role": "Quantity Surveyor",
        "email": "neil.mcnamara@harringtonsplc.co.uk",
        "phone": "7585933281.0"
      },
      {
        "name": "Owen Doherty",
        "role": "Contracts Manager",
        "email": "owen.doherty@harringtonsplc.co.uk",
        "phone": "7969563135.0"
      },
      {
        "name": "Paddy Cronin",
        "role": "Contracts Manager",
        "email": "paddy.cronin@harringtonsplc.co.uk"
      },
      {
        "name": "Paul Burton",
        "role": "Project Manager",
        "email": "paul.burton@harringtonsplc.co.uk",
        "phone": "7808760077.0"
      },
      {
        "name": "Paul Dunne",
        "role": "Quantity Surveyor",
        "email": "paul.dunne@harringtonsplc.co.uk"
      },
      {
        "name": "Paul Dutton",
        "role": "Contracts Manager",
        "email": "paul.dutton@harringtonsplc.co.uk"
      },
      {
        "name": "Ronan O'Flaherty",
        "role": "Contracts Manager",
        "email": "ronan.oflaherty@harringtonsplc.co.uk",
        "phone": "7789752159.0"
      },
      {
        "name": "Sean Horn",
        "role": "Quantity Surveyor",
        "email": "sean.horn@harringtonsplc.co.uk"
      },
      {
        "name": "Steve Partridge",
        "role": "Project Manager",
        "email": "steve.partridge@harringtonsplc.co.uk"
      },
      {
        "name": "Tony Harrington",
        "role": "Managing Director",
        "email": "tony.harrington@harringtonsplc.co.uk"
      },
      {
        "name": "Will Burkett",
        "role": "Quantity Surveyor",
        "email": "will.burkett@harringtonsplc.co.uk"
      }
    ]
  },
  {
    "id": 382,
    "name": "Hartcrown Builders Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Graham Brown",
        "role": "Commercial Manager",
        "email": "graham.brown@hartcrownltd.co.uk",
        "phone": "07535 795 872"
      },
      {
        "name": "Paul Folan",
        "role": "Contract Manager",
        "email": "paul.folan@hartcrownltd.co.uk"
      },
      {
        "name": "Thomas Creighton",
        "role": "Contracts Director",
        "email": "thomas.creighton@hartcrownltd.co.uk"
      }
    ]
  },
  {
    "id": 383,
    "name": "HBE Services",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Hugh Bramley",
        "role": "Director",
        "email": "sales@hbeservices.co.uk",
        "phone": "07814 442348"
      },
      {
        "name": "Luke Sharples",
        "role": "Project Manager",
        "email": "luke@hbeservices.co.uk"
      },
      {
        "name": "Stuart Ellis",
        "role": "Contracts Manager",
        "email": "stuart.ellis@hbeservices.co.uk"
      }
    ]
  },
  {
    "id": 384,
    "name": "HBE Services Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Hugh Bramley",
        "role": "Director",
        "email": "hugh.bramley@hbeservices.co.uk",
        "phone": "07814 442348"
      },
      {
        "name": "Luke Sharples",
        "role": "Project Manager",
        "email": "luke@hbeservices.co.uk"
      },
      {
        "name": "Stuart Ellis",
        "role": "Contracts Manager",
        "email": "stuart.ellis@hbeservices.co.uk"
      },
      {
        "name": "Hugh Bramley",
        "role": "Director",
        "phone": "07814 442348"
      }
    ]
  },
  {
    "id": 385,
    "name": "Henderson & Taylor Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alan Tuck",
        "role": "Project Manager",
        "email": "atuck@henderson-taylor.co.uk",
        "phone": "07970 836 008"
      },
      {
        "name": "Chey Chan",
        "role": "Quantity Surveyor",
        "email": "chey.chan@henderson-taylor.co.uk",
        "phone": "07949 826 990"
      },
      {
        "name": "David Lyons",
        "role": "Quantity Surveyor",
        "email": "david.lyons@henderson-taylor.co.uk",
        "phone": "07949 827368"
      },
      {
        "name": "Lestor Cardoso",
        "role": "Project Manager",
        "email": "lestor@henderson-taylor.co.uk",
        "phone": "07960 428222"
      },
      {
        "name": "Mark Pink",
        "role": "Contract Manager",
        "email": "mark.pink@henderson-taylor.co.uk"
      },
      {
        "name": "Matthew Lynch",
        "role": "Director",
        "email": "matthew@henderson-taylor.co.uk",
        "phone": "07813 326 343"
      },
      {
        "name": "Mike McTeaque",
        "role": "Contracts Manager",
        "email": "mike.mcteaque@henderson-taylor.co.uk"
      },
      {
        "name": "Roland Gibbins",
        "role": "General Manager",
        "email": "roland@henderson-taylor.co.uk",
        "phone": "07960 728 157"
      },
      {
        "name": "Shaun Gibbins",
        "role": "Quantity Surveyor",
        "email": "shaun.gibbins@henderson-taylor.co.uk"
      }
    ]
  },
  {
    "id": 386,
    "name": "Hennigan Building And Civil Engineering Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Angie Boylan",
        "role": "Contract Manager",
        "email": "angie.boylan@hennigans.com"
      },
      {
        "name": "Bobby Houghton",
        "role": "Director",
        "email": "bhoughton@hennigans.com",
        "phone": "7769263384.0"
      },
      {
        "name": "Gareth Reeves",
        "role": "Quantity Surveyor",
        "email": "gareth.reeves@hennigans.com"
      },
      {
        "name": "Ian Mcnulty",
        "role": "Contracts Manager",
        "email": "ian.mcnulty@hennigans.com"
      },
      {
        "name": "Jamie Gulliver",
        "role": "Contracts Manager",
        "email": "jamie.gulliver@hennigans.com"
      },
      {
        "name": "Jason Fairbrother",
        "role": "Senior Project Manager",
        "email": "jfairbrother@hennigans.com"
      },
      {
        "name": "Lee Whiter",
        "role": "Contracts Manager",
        "email": "lwhiter@hennigans.com"
      },
      {
        "name": "Leon Brightman",
        "role": "Commercial Manager",
        "email": "lbrightman@hennigans.com"
      },
      {
        "name": "Liam Conway",
        "role": "Site Manager",
        "email": "liam.conway@hennigans.com"
      },
      {
        "name": "Mark Tomalin",
        "role": "Commercial Director",
        "email": "mark@hennigans.com"
      },
      {
        "name": "Scott Drummond",
        "role": "Contracts Manager",
        "email": "scott.drummond@hennigans.com"
      },
      {
        "name": "Simon Hennigan",
        "role": "Managing Director",
        "email": "simon@hennigans.com"
      },
      {
        "name": "Steve Baggaley",
        "role": "Quantity Surveyor",
        "email": "steve.baggaley@hennigans.com"
      }
    ]
  },
  {
    "id": 387,
    "name": "Henry Construction Projects Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "John Duffy",
        "role": "Commercial Manager",
        "email": "jduffy@henryconstruction.co.uk"
      },
      {
        "name": "Mick Walsh",
        "role": "Contracts Manager",
        "email": "mwalsh@henryconstruction.co.uk",
        "phone": "7825854724.0"
      },
      {
        "name": "Paul McDevitt",
        "role": "Contract Manager",
        "email": "pmcdevitt@henryconstruction.co.uk"
      },
      {
        "name": "Stephen Kelleher",
        "role": "Commercial Director",
        "email": "skelleher@henryconstruction.co.uk"
      },
      {
        "name": "Wayne Downey",
        "role": "Project Manager",
        "email": "wdowney@henryconstruction.co.uk"
      }
    ]
  },
  {
    "id": 388,
    "name": "Hewlett & Sons",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Chris Rimmer",
        "role": "Contracts Manager",
        "email": "chris@hewlettandsons.co.uk"
      },
      {
        "name": "John Hewlett",
        "role": "Director",
        "email": "john@hewlettandsons.co.uk",
        "phone": "07850 853037"
      },
      {
        "name": "Roger Pennyfold",
        "role": "Quantity Surveyor",
        "email": "roger@hewlettandsons.co.uk"
      }
    ]
  },
  {
    "id": 389,
    "name": "HG Construction",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adam James",
        "role": "Project Manager",
        "email": "adamjames@hgconstruction.co.uk"
      },
      {
        "name": "Adam Quinn",
        "role": "Chief Executive",
        "email": "adamquinn@hgconstruction.co.uk"
      },
      {
        "name": "Alec Kitchener",
        "role": "Quantity Surveyor",
        "email": "aleckitchener@hgconstruction.co.uk",
        "phone": "07759 839962"
      },
      {
        "name": "Alex Grainger",
        "role": "Project Manager",
        "email": "alexgrainger@hgconstruction.co.uk"
      },
      {
        "name": "Andrew Carrington",
        "role": "Project Director",
        "email": "andrewcarrington@hgconstruction.co.uk",
        "phone": "07928 570 628"
      },
      {
        "name": "Brett Von Buddenbrock",
        "role": "Site Manager",
        "email": "brettvonbuddenbrock@hgconstruction.co.uk"
      },
      {
        "name": "Chris Martin",
        "role": "Quantity Surveyor",
        "email": "chrismartin@hgconstruction.co.uk",
        "phone": "07580 948157"
      },
      {
        "name": "Chris Mundt",
        "role": "Project Director",
        "email": "chrismundt@hgconstruction.co.uk",
        "phone": "07561 710197"
      },
      {
        "name": "Chris Yates",
        "role": "Estimating Director",
        "email": "chrisyates@hgconstruction.co.uk"
      },
      {
        "name": "Christopher Benham",
        "role": "Director",
        "email": "christopherbenham@hgconstruction.co.uk"
      },
      {
        "name": "Ciaran Mossey",
        "role": "Quantity Surveyor",
        "email": "ciaranmossey@ghconstruction.co.uk",
        "phone": "07935 756996"
      },
      {
        "name": "Colin Nunn",
        "role": "Compliance Manager",
        "email": "colinnunn@hgconstruction.co.uk"
      },
      {
        "name": "Connor Rice",
        "role": "Managing Director",
        "email": "connorrice@hgconstruction.co.uk"
      },
      {
        "name": "Craig Lewis",
        "role": "Contract Manager",
        "email": "craiglewis@hgconstruction.co.uk"
      },
      {
        "name": "Craig McPhail",
        "role": "Director",
        "email": "craigmcphail@hgconstruction.co.uk"
      },
      {
        "name": "Dan Bryant",
        "email": "danbryant@hgconstruction.co.uk",
        "phone": "07514 496 415"
      },
      {
        "name": "Dan Limrick",
        "role": "Quantity Surveyor",
        "email": "danlimrick@hgconstruction.co.uk"
      },
      {
        "name": "Danny Barrett",
        "role": "Project Director",
        "email": "dannybarrett@hgconstruction.co.uk"
      },
      {
        "name": "Darren Son",
        "role": "Project Manager",
        "email": "darrenson@hgconstruction.co.uk"
      },
      {
        "name": "David Harrington",
        "role": "Surveyor",
        "email": "davidharrington@hgconstruction.co.uk",
        "phone": "7976707173.0"
      },
      {
        "name": "David Munce",
        "role": "Quantity Surveyor",
        "email": "davidmunce@hgconstruction.co.uk",
        "phone": "07514 495479"
      },
      {
        "name": "David Prout",
        "role": "Site Manager",
        "email": "davidprout@hgconstruction.co.uk",
        "phone": "07842 230569"
      },
      {
        "name": "Declan Martin",
        "role": "Project Manager",
        "email": "declanmartin@hgconstruction.co.uk",
        "phone": "07773 197 757"
      },
      {
        "name": "Florin Lichentanu",
        "role": "Senior Site Manager",
        "email": "florinlichentanu@hgconstruction.co.uk"
      },
      {
        "name": "Glyn Ellis",
        "role": "Project Manager",
        "email": "glynellis@hgconstruction.co.uk",
        "phone": "7702943478.0"
      },
      {
        "name": "Graham Fisher",
        "role": "Project Manager",
        "email": "grahamfisher@hgconstruct.co.uk",
        "phone": "07972 136505"
      },
      {
        "name": "Greg Freeman",
        "role": "Project Leader",
        "email": "gregfreeman@hgconstruction.co.uk",
        "phone": "07970 711 290"
      },
      {
        "name": "Hayley Weller",
        "role": "Design Manager",
        "email": "hayleyweller@hgconstruction.co.uk"
      },
      {
        "name": "Jayden Geronimo",
        "role": "Construction Manager",
        "email": "jaydengeronimo@hgconstruction.co.uk"
      },
      {
        "name": "Joe Winslow",
        "role": "Trainee Quantity Surveyor",
        "email": "joewinslow@hgconstruction.co.uk"
      },
      {
        "name": "Jonathan Owen",
        "role": "Project Director",
        "email": "jonathanowen@hgconstruction.co.uk"
      },
      {
        "name": "Jordan O'Neil",
        "role": "Senior Quantity Surveyor",
        "email": "jordanoneil@hgconstruction.co.uk",
        "phone": "07547 416200"
      },
      {
        "name": "Joseph Hanks",
        "role": "Project Manager",
        "email": "josephhanks@hgconstruction.co.uk"
      },
      {
        "name": "Keith Holt",
        "role": "Project Team Leader",
        "email": "keithholt@hgconstruction.co.uk",
        "phone": "07514 496 703"
      },
      {
        "name": "Kevin Roodt",
        "role": "Site Manager",
        "email": "kevinroodt@hgconstruction.co.uk"
      },
      {
        "name": "Luis Rizzo",
        "role": "Assistant Quantity Surveyor",
        "email": "luisrizzo@hgconstruction.co.uk"
      },
      {
        "name": "Martin Leahy",
        "role": "Project Manager",
        "email": "martinleahy@hgconstruction.co.uk"
      },
      {
        "name": "Matthew Gilbert",
        "role": "Project Director",
        "email": "matthewgilbert@hgconstruction.co.uk"
      },
      {
        "name": "Max Evans",
        "role": "Contract Manager",
        "email": "maxevans@hgconstruct.co.uk"
      },
      {
        "name": "Neil Carter",
        "role": "Pre Construction Manager",
        "email": "neilcarter@hgconstruction.co.uk"
      },
      {
        "name": "Nick Campfield",
        "role": "Project Manager",
        "email": "nickcampfield@hgconstruct.co.uk",
        "phone": "07968 102995"
      },
      {
        "name": "Nick Lewis",
        "role": "Quantity Surveyor",
        "email": "nicklewis@hgconstruct.co.uk",
        "phone": "7783516697.0"
      },
      {
        "name": "Nicky Haddon",
        "role": "Project Manager",
        "email": "nickyhaddon@hgconstruction.co.uk",
        "phone": "7935006058.0"
      },
      {
        "name": "Oliver Sheehy",
        "role": "Project Manager",
        "email": "oliversheehy@hgconstruction.co.uk"
      },
      {
        "name": "Oliver Wright",
        "role": "Quantity Surveyor",
        "email": "oliverwright@hgconstruction.co.uk"
      },
      {
        "name": "Richard Woolmore",
        "role": "Project Director",
        "email": "richardwoolmore@hgconstruction.co.uk"
      },
      {
        "name": "Richie Budgen",
        "role": "Project Manager",
        "email": "richiebudgen@hgconstruction.co.uk",
        "phone": "07872 843345"
      },
      {
        "name": "Roger Cullen",
        "role": "Contract Manager",
        "email": "rogercullen@hgconstruct.co.uk"
      },
      {
        "name": "Russell Groves",
        "role": "Project Manager",
        "email": "russellgroves@hgconstruction.co.uk"
      },
      {
        "name": "Scott Girling",
        "role": "Fire Engineer",
        "email": "scottgirling@hgconstruction.co.uk",
        "phone": "07402 305539"
      },
      {
        "name": "Shaun Atkinson",
        "role": "Project Director",
        "email": "shaunatkinson@hgconstruction.co.uk"
      },
      {
        "name": "Steve Melford",
        "role": "Site Manager",
        "email": "stevemelford@hgconstruction.co.uk"
      },
      {
        "name": "Stuart Murphy",
        "role": "Site Manager",
        "email": "stuartmurphy@hgconstruction.co.uk"
      },
      {
        "name": "Will Dean",
        "role": "Project Director",
        "email": "willdean@hgconstruction.co.uk"
      }
    ]
  },
  {
    "id": 390,
    "name": "HG M&E",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Darren Smith",
        "role": "Operations Manager",
        "email": "darrensmith@hgmande.co.uk",
        "phone": "07800 514302"
      },
      {
        "name": "Derek Culver",
        "role": "Senior MEP Project Manager",
        "email": "derekculver@hgmande.co.uk"
      },
      {
        "name": "Adam James",
        "role": "Project Manager",
        "email": "adamjames@hgconstruction.co.uk"
      },
      {
        "name": "Martyn Finch",
        "role": "Mechanical Engineer",
        "email": "martynfinch@hgmande.co.uk",
        "phone": "07773 197770"
      }
    ]
  },
  {
    "id": 391,
    "name": "Hill Partnerships Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adam Capel",
        "role": "Project Manager",
        "email": "adamcapel@hill.co.uk"
      },
      {
        "name": "Adam Jarvis",
        "role": "Quantity Surveyor",
        "email": "adamjarvis@hill.co.uk"
      },
      {
        "name": "Adam Johnson",
        "role": "Quantity Surveyor",
        "email": "adamjohnson@hill.co.uk"
      },
      {
        "name": "Ahsim Raza",
        "role": "Senior Quantity Surveyor",
        "email": "ahsimraza@hill.co.uk"
      },
      {
        "name": "AJ O'Neil",
        "role": "Contract Manager",
        "email": "ajoneil@hill.co.uk"
      },
      {
        "name": "Alex Robinson",
        "email": "alexrobinson@hill.co.uk"
      },
      {
        "name": "Alfie McDonald",
        "role": "Quantity Surveyor",
        "email": "alfiemcdonald@hill.co.uk"
      },
      {
        "name": "Allan O'Brien",
        "role": "Quantity Surveyor",
        "email": "allanobrien@hill.co.uk",
        "phone": "07966 312165"
      },
      {
        "name": "Amelia Robertson",
        "role": "Contract Surveyor",
        "email": "ameliarobertson@hill.co.uk"
      },
      {
        "name": "Amy Barnett",
        "role": "Estimator",
        "email": "amybarnett@hill.co.uk"
      },
      {
        "name": "Andrew Hill",
        "role": "Director",
        "email": "andrewhill@hill.co.uk"
      },
      {
        "name": "Andrew Owens",
        "role": "Quantity Surveyor",
        "email": "andrewowens@hill.co.uk",
        "phone": "07720 086 865"
      },
      {
        "name": "Andy Fancy",
        "role": "Regional Managing Director",
        "email": "andyfancy@hill.co.uk"
      },
      {
        "name": "Andy Hill",
        "role": "Chief Executive",
        "email": "andyhill@hill.co.uk"
      },
      {
        "name": "Annie Solen",
        "role": "Manager",
        "email": "anniesolen@hill.co.uk",
        "phone": "7837583683.0"
      },
      {
        "name": "Anthony Toleman",
        "role": "Quantity Surveyor",
        "email": "anthonytoleman@hill.co.uk"
      },
      {
        "name": "Aoife Coakley",
        "role": "Senior Development Surveyor",
        "email": "aoifecoakley@hill.co.uk"
      },
      {
        "name": "Barry Comber",
        "role": "Senior Estimator",
        "email": "barrycoomber@hill.co.uk"
      },
      {
        "name": "Ben Brown",
        "role": "Quantity Surveyor",
        "email": "ben.brown@hill.co.uk"
      },
      {
        "name": "Ben Clarke",
        "role": "Senior Technical Coordinator",
        "email": "benclarke@hill.co.uk"
      },
      {
        "name": "Ben Hart",
        "role": "Quantity Surveyor",
        "email": "benhart@hill.co.uk",
        "phone": "07966 121229"
      },
      {
        "name": "Ben Page",
        "role": "Contracts Manager",
        "email": "benpage@hill.co.uk"
      },
      {
        "name": "Ben Stone",
        "role": "Commercial Director",
        "email": "benstone@hill.co.uk",
        "phone": "07966 121178"
      },
      {
        "name": "Benjamin Fry",
        "role": "Contract Surveyor",
        "email": "benjaminfry@hill.co.uk"
      },
      {
        "name": "Bilaal Riaz",
        "role": "Quantity Surveyor",
        "email": "bilaalriaz@hill.co.uk"
      },
      {
        "name": "Billy Phillips-Biggons",
        "role": "Quantity Surveyor",
        "email": "billyphillips-biggons@hill.co.uk"
      },
      {
        "name": "Brian Long",
        "role": "Quantity Surveyor",
        "email": "brianlong@hill.co.uk"
      },
      {
        "name": "Cain Peters",
        "role": "Regional Director",
        "email": "cainpeters@hill.co.uk",
        "phone": "07966 121168"
      },
      {
        "name": "Calum Moore",
        "role": "Development Manager",
        "email": "calummoore@hill.co.uk"
      },
      {
        "name": "Carl Stanko",
        "role": "Surveyor",
        "email": "carlstanko@hill.co.uk"
      },
      {
        "name": "Carl Streddar",
        "role": "Senior Technical Coordinator",
        "email": "carlstreddar@hill.co.uk"
      },
      {
        "name": "Charlie Shanks",
        "role": "Contracts Manager",
        "email": "charlieshanks@hill.co.uk",
        "phone": "7731021654.0"
      },
      {
        "name": "Charlotte Kurobasa",
        "role": "Senior Development Manager",
        "email": "charlottekurobasa@hill.co.uk"
      },
      {
        "name": "Chloe Houston",
        "role": "Development Manager",
        "email": "chloehouston@hill.co.uk"
      },
      {
        "name": "Chloe Sawtell",
        "role": "Quantity Surveyor",
        "email": "chloesawtell@hill.co.uk"
      },
      {
        "name": "Chris O'Dowd",
        "role": "Site Agent",
        "email": "chrisodowd@hill.co.uk",
        "phone": "07966 312 151"
      },
      {
        "name": "Chris Santer",
        "role": "Land Manager",
        "email": "chrissanter@hill.co.uk"
      },
      {
        "name": "Chris Thomas",
        "role": "Technical Coordinator",
        "email": "christhomas@hill.co.uk"
      },
      {
        "name": "Christopher Engelbach",
        "role": "Contract Manager",
        "email": "christopher.engelbach@hill.co.uk"
      },
      {
        "name": "Damon Willicombe",
        "role": "Project Manager",
        "email": "damonwillicombe@hill.co.uk"
      },
      {
        "name": "Dan Brown",
        "role": "Commercial Manager",
        "email": "danbrown@hill.co.uk"
      },
      {
        "name": "Daniel Groves",
        "role": "Assistant Quantity Surveyor",
        "email": "danielgroves@hill.co.uk",
        "phone": "07841 340302"
      },
      {
        "name": "Daniel Palman",
        "role": "Senior Development Manager",
        "email": "danielpalman@hill.co.uk"
      },
      {
        "name": "Daniel Turner",
        "role": "Quantity Surveyor",
        "email": "danielturner@hill.co.uk"
      },
      {
        "name": "Danny Man",
        "role": "Project Manager",
        "email": "dannyman@hill.co.uk",
        "phone": "07803 415115"
      },
      {
        "name": "Darren Mulhare",
        "role": "Technical Manager",
        "email": "darrenmulhare@hill.co.uk"
      },
      {
        "name": "Dean Godden",
        "role": "Project Manager",
        "email": "deangodden@hill.co.uk"
      },
      {
        "name": "Dean Miller",
        "role": "Site Manager",
        "email": "deanmiller@hill.co.uk"
      },
      {
        "name": "Dipesh Pindoria",
        "role": "Site Manager",
        "email": "dipeshpindoria@hill.co.uk"
      },
      {
        "name": "Doug Wood",
        "role": "Contracts Manager",
        "email": "dougwood@hill.co.uk"
      },
      {
        "name": "Edward Andrews",
        "role": "Site Manager",
        "email": "edward.andrews@hill.co.uk"
      },
      {
        "name": "Elliott Walker",
        "email": "elliottwalker@hill.co.uk"
      },
      {
        "name": "Ellis Moore",
        "role": "Trainee Site Manager",
        "email": "ellismoore@hill.co.uk"
      },
      {
        "name": "Evan Waters",
        "role": "Quantity Surveyor",
        "email": "evanwaters@hill.co.uk"
      },
      {
        "name": "Fahad Ahmed",
        "role": "Quantity Surveyor",
        "email": "fahadahmed@hill.co.uk"
      },
      {
        "name": "Frank Maurer",
        "role": "Technical Manager",
        "email": "frankmaurer@hill.co.uk"
      },
      {
        "name": "Gary Brinkman",
        "role": "Project Manager",
        "email": "gary.brinkman@hill.co.uk"
      },
      {
        "name": "Gary Neal",
        "role": "Project Manager",
        "email": "gary.neal@hill.co.uk",
        "phone": "07761 637676"
      },
      {
        "name": "Gavin Penfold",
        "role": "Technical Manager",
        "email": "gavinpenfold@hill.co.uk"
      },
      {
        "name": "George Martin",
        "role": "Contract Director",
        "email": "georgemartin@hill.co.uk",
        "phone": "7934299239.0"
      },
      {
        "name": "Giles Burton",
        "role": "Technical Coordinator",
        "email": "gilesburton@hill.co.uk"
      },
      {
        "name": "Gregory Hill",
        "role": "Deputy Chief Executive",
        "email": "gregoryhill@hill.co.uk"
      },
      {
        "name": "Guy Siragher",
        "role": "Architect",
        "email": "guysiragher@hill.co.uk"
      },
      {
        "name": "Harry Smith",
        "role": "Quantity Surveyor",
        "email": "harrysmith@hill.co.uk"
      },
      {
        "name": "Harvey Dhami",
        "role": "Regional Director",
        "email": "harveydhami@hill.co.uk"
      },
      {
        "name": "Henry James",
        "role": "Project Manager",
        "email": "henryjames@hill.co.uk"
      },
      {
        "name": "Henry Wilson",
        "role": "Assistant Site Manager",
        "email": "henry.wilson@hill.co.uk"
      },
      {
        "name": "Ian Miller",
        "role": "Project Manager",
        "email": "ianmiller@hill.co.uk"
      },
      {
        "name": "Ian Utley",
        "role": "Technical Manager",
        "email": "ianutley@hill.co.uk"
      },
      {
        "name": "Jake Miller",
        "role": "Contract Surveyor",
        "email": "jakemiller@hill.co.uk"
      },
      {
        "name": "James Caulfield",
        "role": "Senior Quantity Surveyor",
        "email": "jamescaulfield@hill.co.uk",
        "phone": "07966 121198"
      },
      {
        "name": "James Fisk",
        "role": "Quantity Surveyor",
        "email": "jamesfisk@hill.co.uk"
      },
      {
        "name": "James Nelson",
        "role": "Development Surveyor",
        "email": "jamesnelson@hill.co.uk"
      },
      {
        "name": "James Simpson",
        "role": "Development Manager",
        "email": "jamessimpson@hill.co.uk",
        "phone": "7955313696.0"
      },
      {
        "name": "James Sisk",
        "role": "Community Manager",
        "email": "jamessisk@hill.co.uk"
      },
      {
        "name": "Jamie Dobkin",
        "role": "Contract Manager",
        "email": "jamiedobkin@hill.co.uk"
      },
      {
        "name": "Jamie Hunter",
        "role": "Development Director",
        "email": "jamiehunter@hill.co.uk"
      },
      {
        "name": "Jamie Robberts",
        "role": "Senior Site Manager",
        "email": "jamierobberts@hill.co.uk",
        "phone": "7966115075.0"
      },
      {
        "name": "Jim Brown",
        "role": "Site Manager",
        "email": "jimbrown@hill.co.uk",
        "phone": "07966 312179"
      },
      {
        "name": "Joanna Harding",
        "role": "Project Designer",
        "email": "joannaharding@hill.co.uk"
      },
      {
        "name": "Joe Clancy",
        "role": "Contract Manager",
        "email": "joeclancy@hill.co.uk",
        "phone": "07966 121231"
      },
      {
        "name": "Joe Hatwell",
        "role": "Senior Site Manager",
        "email": "joe.hatwell@hill.co.uk"
      },
      {
        "name": "Joe Mallett",
        "role": "Assistant Quantity Surveyor",
        "email": "joe.mallet@hill.co.uk"
      },
      {
        "name": "Joe Massingham",
        "role": "Quantity Surveyor",
        "email": "joemassingham@hill.co.uk"
      },
      {
        "name": "Joe Mulhare",
        "role": "Senior Technical Coordinator",
        "email": "joe.mulhare@hill.co.uk"
      },
      {
        "name": "John Matthews",
        "role": "Site Manager",
        "email": "johnmatthews@hill.co.uk"
      },
      {
        "name": "John Maynard",
        "role": "Site Manager",
        "email": "johnmaynard@hill.co.uk",
        "phone": "7966312141.0"
      },
      {
        "name": "John Thornton",
        "role": "Contract Surveyor",
        "email": "johnthornton@hill.co.uk"
      },
      {
        "name": "Joseph O'Brian",
        "role": "Contract Surveyor",
        "email": "josephobrian@hill.co.uk"
      },
      {
        "name": "Justin Brown",
        "role": "Contracts Manager",
        "email": "justinbrown@hill.co.uk"
      },
      {
        "name": "Kane Harvey",
        "role": "Technical Coordinator",
        "email": "kaneharvey@hill.co.uk",
        "phone": "07860 853202"
      },
      {
        "name": "Kasey Buisson",
        "role": "Quantity Surveyor",
        "email": "kasey.buisson@hill.co.uk"
      },
      {
        "name": "Kevin Geraghty",
        "role": "Contracts Manager",
        "email": "kevingeragthy@hill.co.uk",
        "phone": "7761510768.0"
      },
      {
        "name": "Kieran Redfern",
        "role": "Technical Coordinator",
        "email": "kieranredfern@hill.co.uk"
      },
      {
        "name": "Kirsty Chivers",
        "role": "Administrative Support Manager",
        "email": "kirstychivers@hill.co.uk"
      },
      {
        "name": "Lewis Scarfe",
        "role": "Trainee Technical Coordinator",
        "email": "lewisscarfe@hill.co.uk"
      },
      {
        "name": "Liam Kelly",
        "role": "Project Manager",
        "email": "liamkelly@hill.co.uk"
      },
      {
        "name": "Louis Dzimati",
        "role": "Project Manager",
        "email": "louisdzimati@hill.co.uk"
      },
      {
        "name": "Lucinda Matthams",
        "role": "Quantity Surveyor",
        "email": "lucindamatthams@hill.co.uk"
      },
      {
        "name": "Lucy Ann-Wallace",
        "role": "Assistant Site Manager",
        "email": "lucyann-wallace@hill.co.uk"
      },
      {
        "name": "Mark Hawkey",
        "role": "Project Manager",
        "email": "markhawkey@hill.co.uk"
      },
      {
        "name": "Mark Lewis",
        "role": "Commercial Manager",
        "email": "marklewis@hill.co.uk"
      },
      {
        "name": "Mark McNeilage",
        "role": "Project Manager",
        "email": "markmcneilage@hill.co.uk"
      },
      {
        "name": "Matt Crawley",
        "role": "Assistant Site Manager",
        "email": "mattcrawley@hill.co.uk"
      },
      {
        "name": "Matt Tunley",
        "role": "Strategic Land Director",
        "email": "matttunley@hill.co.uk"
      },
      {
        "name": "Matt Yeoman",
        "role": "Senior Project Manager",
        "email": "matt.yeoman@hill.co.uk"
      },
      {
        "name": "Matthew Bricknell",
        "role": "Quantity Surveyor",
        "email": "matthewbricknell@hill.co.uk"
      },
      {
        "name": "Matthew Wilson",
        "role": "Project Manager",
        "email": "matthewwilson@hill.co.uk"
      },
      {
        "name": "Matthew Wright",
        "role": "Quantity Surveyor",
        "email": "matthewwright@hill.co.uk"
      },
      {
        "name": "Max Sampey",
        "role": "Senior Contracts Surveyor",
        "email": "maxsampey@hill.co.uk"
      },
      {
        "name": "Max Welfare",
        "role": "Quantity Surveyor",
        "email": "maxwelfare@hill.co.uk"
      },
      {
        "name": "Mervyn Stevens",
        "role": "Contracts Manager",
        "email": "mervynstevens@hill.co.uk",
        "phone": "07966 115082"
      },
      {
        "name": "Michael Turner",
        "role": "Commercial Director",
        "email": "michaelturner@hill.co.uk",
        "phone": "07966 121175"
      },
      {
        "name": "Michelle Johnson",
        "role": "Buyer",
        "email": "michellejohnson@hill.co.uk"
      },
      {
        "name": "Neil Cresswell",
        "role": "Technical Coordinator",
        "email": "neilcresswell@hill.co.uk"
      },
      {
        "name": "Oliver Mealey",
        "role": "Development Manager",
        "email": "olivermealey@hill.co.uk"
      },
      {
        "name": "Ollie Myrants-Wilson",
        "role": "Land Director",
        "email": "olliemyrants-wilson@hill.co.uk"
      },
      {
        "name": "Paddy Sheehy",
        "role": "Contract Manager",
        "email": "paddysheehy@hill.co.uk"
      },
      {
        "name": "Patrick Connolly",
        "role": "Contract Manager",
        "email": "patrickconnolly@hill.co.uk"
      },
      {
        "name": "Patrick Gough",
        "email": "patrickgough@hill.co.uk"
      },
      {
        "name": "Patrick Vullo",
        "role": "Quantity Surveyor",
        "email": "patrickvullo@hill.co.uk"
      },
      {
        "name": "Paul Ansell",
        "role": "Project Director",
        "email": "paulansell@hill.co.uk"
      },
      {
        "name": "Paul Cable",
        "role": "Surveyor",
        "email": "paulcable@hill.co.uk",
        "phone": "07710 305969"
      },
      {
        "name": "Paul Marshall",
        "role": "Site Manager",
        "email": "paulmarshall@hill.co.uk",
        "phone": "07525 592848"
      },
      {
        "name": "Paul Stewart",
        "role": "Project Manager",
        "email": "paulstewart@hill.co.uk",
        "phone": "07955 315174"
      },
      {
        "name": "Perry Brockwell",
        "role": "Senior Site Manager",
        "email": "perrybrockwell@hill.co.uk"
      },
      {
        "name": "Phil Andrews",
        "role": "Quantity Surveyor",
        "email": "phillipandrews@hill.co.uk",
        "phone": "07889 811 925"
      },
      {
        "name": "Rhys Jones",
        "role": "Senior Construction Manager",
        "email": "rhysjones@hill.co.uk"
      },
      {
        "name": "Richard Chalmers",
        "role": "Production Manager",
        "email": "richardchalmers@hill.co.uk",
        "phone": "7966121245.0"
      },
      {
        "name": "Richard Dunmore",
        "role": "Contracts Manager",
        "email": "richard.dunmore@hill.co.uk"
      },
      {
        "name": "Richard Wilkins",
        "role": "Site Manager",
        "email": "richardwilkins@hill.co.uk",
        "phone": "07525 592849"
      },
      {
        "name": "Rob Jack",
        "role": "Director",
        "email": "robjack@hill.co.uk"
      },
      {
        "name": "Robert Jack",
        "role": "Quantity Surveyor",
        "email": "robertjack@hill.co.uk"
      },
      {
        "name": "Roisin Mayfield",
        "role": "Manager",
        "email": "roisinmayfield@hill.co.uk"
      },
      {
        "name": "Ross Williams",
        "role": "Development Manager",
        "email": "ross.williams@hill.co.uk"
      },
      {
        "name": "Ruslan Khisamutdinov",
        "role": "Project Manager",
        "email": "ruslankhisamutdinov@hill.co.uk"
      },
      {
        "name": "Sam Faraday",
        "role": "Senior Technical Coordinator",
        "email": "samfaraday@hill.co.uk"
      },
      {
        "name": "Scott Lovett",
        "role": "Quantity Surveyor",
        "email": "scottlovett@hill.co.uk"
      },
      {
        "name": "Sean Berry",
        "role": "Quantity Surveyor",
        "email": "seanberry@hill.co.uk"
      },
      {
        "name": "Seb Smith",
        "email": "sebsmith@hill.co.uk"
      },
      {
        "name": "Shaun Perry",
        "role": "Contracts Manager",
        "email": "shaunperry@hill.co.uk"
      },
      {
        "name": "Simon Redgrave",
        "role": "Site Manager",
        "email": "simonredgrave@hill.co.uk"
      },
      {
        "name": "Simon Trice",
        "role": "Managing Director",
        "email": "simontrice@hill.co.uk"
      },
      {
        "name": "Simone Marsberg",
        "role": "Senior Development Manager",
        "email": "simonemarsberg@hill.co.uk"
      },
      {
        "name": "Stephen Fretwell",
        "role": "Quantity Surveyor",
        "email": "stephenfretwell@hill.co.uk",
        "phone": "7966312189.0"
      },
      {
        "name": "Stuart Bale",
        "role": "Project Director",
        "email": "stuartbale@hill.co.uk"
      },
      {
        "name": "Terry Gamble",
        "role": "Development Manager",
        "email": "terrygamble@hill.co.uk"
      },
      {
        "name": "Tilly Kingsley",
        "role": "Technical Coordinator",
        "email": "tillykingsley@hill.co.uk"
      },
      {
        "name": "Tim Humphreys",
        "role": "Technical Manager",
        "email": "timhumphreys@hill.co.uk",
        "phone": "07966 312168"
      },
      {
        "name": "Tom Hill",
        "role": "Executive Director",
        "email": "tomhill@hill.co.uk"
      },
      {
        "name": "Tom West",
        "role": "Quantity Surveyor",
        "email": "tomwest@hill.co.uk"
      },
      {
        "name": "Tony Parker",
        "role": "Finance Director",
        "email": "tonyparker@hill.co.uk",
        "phone": "7966115078.0"
      },
      {
        "name": "Will Fairhead",
        "role": "Assistant Planner",
        "email": "willfairhead@hill.co.uk"
      },
      {
        "name": "Zoe Clark",
        "role": "Quantity Surveyor",
        "email": "zoeclark@hill.co.uk",
        "phone": "07966 121187"
      }
    ]
  },
  {
    "id": 392,
    "name": "Hiretest Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "J Woodley",
        "role": "Commercial Director",
        "email": "jim.woodley@hiretest.co.uk"
      },
      {
        "name": "John Mcginty",
        "role": "Contracts Manager",
        "email": "john.mcginty@hiretest.co.uk"
      },
      {
        "name": "Paul Smith",
        "role": "Buyer",
        "email": "paul.smith@hiretest.co.uk"
      }
    ]
  },
  {
    "id": 393,
    "name": "Historic Property Restoration Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Colin Buckley",
        "role": "Contracts Manager",
        "email": "colin@hprltd.co.uk"
      },
      {
        "name": "Steve Upton",
        "role": "Commercial Director",
        "email": "mail@hprltd.co.uk"
      }
    ]
  },
  {
    "id": 394,
    "name": "HK Fire",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Dave Mills",
        "role": "Project Director",
        "email": "david.mills@hkfire.co.uk",
        "phone": "07970 449033"
      },
      {
        "name": "Paul Cross",
        "role": "Contracts Manager",
        "email": "paul.cross@hkfire.co.uk"
      },
      {
        "name": "Lee Saunders",
        "role": "Operations Manager",
        "email": "ascot@hkfire.co.uk",
        "phone": "07825 571776"
      }
    ]
  },
  {
    "id": 395,
    "name": "HOB Mechanical",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Dean Osborne",
        "role": "Director",
        "email": "dean.osborne@hobmech.co.uk"
      },
      {
        "name": "Kenneth Hornby",
        "role": "Director",
        "email": "ken@hobmech.co.uk"
      },
      {
        "name": "Tony Ofenton",
        "role": "Director",
        "email": "tony@hobmech.co.uk",
        "phone": "07931 807275"
      },
      {
        "name": "Sandie Hornby",
        "role": "Operations Manager",
        "email": "sandie@hobmech.co.uk"
      },
      {
        "name": "Jay Page",
        "role": "Contract Manager",
        "email": "jay@hobmech.co.uk"
      },
      {
        "name": "Mark Sanger",
        "role": "Contracts Manager",
        "email": "mark@hobmech.co.uk"
      },
      {
        "name": "Martin McGuinness",
        "role": "Contracts Manager",
        "email": "martin.mcguinness@hobmech.co.uk"
      },
      {
        "name": "Luke Edwards",
        "role": "Project Manager",
        "email": "luke.edwards@hobmech.co.uk"
      }
    ]
  },
  {
    "id": 396,
    "name": "HOB Mechanical Services",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Dean Osborne",
        "role": "Director",
        "email": "dean.osborne@hobmech.co.uk"
      },
      {
        "name": "Jay Page",
        "role": "Contract Manager",
        "email": "jay@hobmech.co.uk"
      },
      {
        "name": "Kenneth Hornby",
        "role": "Director",
        "email": "ken@hobmech.co.uk"
      },
      {
        "name": "Luke Edwards",
        "role": "Project Manager",
        "email": "luke.edwards@hobmech.co.uk"
      },
      {
        "name": "Mark Sanger",
        "role": "Contracts Manager",
        "email": "mark@hobmech.co.uk"
      },
      {
        "name": "Martin McGuinness",
        "role": "Contracts Manager"
      },
      {
        "name": "Sandie Hornby",
        "role": "Operations Manager",
        "email": "sandie@hobmech.co.uk"
      },
      {
        "name": "Tony Ofenton",
        "role": "Director",
        "email": "tony@hobmech.co.uk",
        "phone": "07931 807275"
      }
    ]
  },
  {
    "id": 397,
    "name": "Hopkins Construction (Oxford) Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Aaron Hyatt",
        "role": "Contract Manager",
        "email": "aaron@hopkinsconstruction.co.uk"
      },
      {
        "name": "David Hopkins",
        "role": "Managing Director",
        "email": "david@hopkinsconstruction.co.uk",
        "phone": "7775841087.0"
      },
      {
        "name": "Dominic",
        "role": "Buyer",
        "email": "dominic@hopkinsconstruction.co.uk"
      },
      {
        "name": "Lewis Owen",
        "role": "Quantity Surveyor",
        "email": "lewis@hopkinsconstruction.co.uk"
      },
      {
        "name": "Russell Horton",
        "role": "Quantity Surveyor",
        "email": "russell@hopkinsconstruction.co.uk"
      },
      {
        "name": "Ryan Farrell",
        "role": "Contracts Manager",
        "email": "ryan@hopkinsconstruction.co.uk"
      }
    ]
  },
  {
    "id": 398,
    "name": "Horizon Construction London Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Dmitrijus Mickevicius",
        "role": "Project Manager",
        "email": "d.mickevicius@horizonconstruction.london"
      },
      {
        "name": "Dylan Hughes",
        "role": "Quantity Surveyor",
        "email": "d.hughes@horizonconstruction.london",
        "phone": "7840851694.0"
      },
      {
        "name": "Mitchell Fletcher",
        "role": "Site Manager",
        "email": "m.fletcher@horizonconstruction.london"
      },
      {
        "name": "Paul Dunn",
        "role": "Site Manager",
        "email": "p.dunn@horizonconstruction.london"
      },
      {
        "name": "Steven Tilley",
        "role": "Director",
        "email": "steven.tilley@horizonconstruction.london"
      }
    ]
  },
  {
    "id": 399,
    "name": "Houlihan & Company (Excavations) Limited",
    "disciplines": [
      "Groundworks"
    ],
    "contacts": [
      {
        "name": "Chris Murphy",
        "role": "Buyer",
        "email": "chris.murphy@houlihans.co.uk"
      },
      {
        "name": "Darren Smoker",
        "role": "Director",
        "email": "darren.smoker@houlihans.co.uk"
      },
      {
        "name": "Emmet Fogarty",
        "role": "Project Manager",
        "email": "emmet.fogarty@houlihans.co.uk"
      },
      {
        "name": "James Brydon",
        "role": "Site Supervisor",
        "email": "james.brydon@houlihans.co.uk"
      },
      {
        "name": "Richard Carroll",
        "role": "Construction Director",
        "email": "richard.carroll@houlihans.co.uk"
      },
      {
        "name": "Tom Hunt",
        "role": "Commercial Director",
        "email": "tom.hunt@houlihans.co.uk",
        "phone": "07827 295 491"
      },
      {
        "name": "Tom Keyes",
        "role": "Contracts Manager",
        "email": "tom.keyes@houlihans.co.uk"
      },
      {
        "name": "Tony Luccini",
        "role": "Contracts Manager",
        "email": "tony.luccini@houlihans.co.uk"
      }
    ]
  },
  {
    "id": 400,
    "name": "Igne Group Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Carl Davenport",
        "email": "carl.davenport@safelaneglobal.com"
      },
      {
        "name": "Lucie Tiverrier",
        "role": "General Manager",
        "email": "lucie.tiverrier@safelaneglobal.com"
      }
    ]
  },
  {
    "id": 401,
    "name": "IMS Building Solutions",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alan Flutter",
        "role": "Contracts Manager",
        "email": "aflutter@imsbuildingsolutions.co.uk"
      },
      {
        "name": "Michael Fahey",
        "role": "Quantity Surveyor",
        "email": "mfahey@imsbuildingsolutions.co.uk"
      }
    ]
  },
  {
    "id": 402,
    "name": "ISC Contracting",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Ben Cheeseman",
        "role": "Buyer",
        "email": "ben.cheeseman@isccontracting.co.uk"
      },
      {
        "name": "Dan Donoghoe",
        "role": "Contracts Manager",
        "email": "dand@swalsh.com",
        "phone": "07775 697175"
      },
      {
        "name": "Darren Quinton",
        "role": "Director",
        "email": "darren.quinton@isccontracting.co.uk",
        "phone": "07817 739879"
      },
      {
        "name": "Darren Smith",
        "role": "Commercial Manager",
        "email": "darren.smith@isccontracting.co.uk"
      },
      {
        "name": "James Beale",
        "role": "Construction Manager",
        "email": "james.beale@isccontracting.co.uk",
        "phone": "07770 851765"
      },
      {
        "name": "John Barnett",
        "role": "Contracts Manager",
        "email": "john.barnett@swalsh.com",
        "phone": "7817371711.0"
      },
      {
        "name": "Kitt Townshed",
        "role": "Project Manager",
        "email": "kitt.townshed@isccontracting.co.uk"
      },
      {
        "name": "Mick Joyce",
        "role": "Project Manager",
        "email": "mick.joyce@isccontracting.co.uk"
      },
      {
        "name": "Richard Morrison",
        "role": "Commercial Director",
        "email": "richard@swalsh.com"
      },
      {
        "name": "Wesley Flaherty",
        "role": "Senior Buyer",
        "email": "wesley.flaherty@isccontracting.co.uk",
        "phone": "07507 572775"
      },
      {
        "name": "Darren Quinton",
        "role": "Director",
        "email": "hello@iscontracting.co.uk",
        "phone": "7817739879.0"
      },
      {
        "name": "Wesley Flaherty",
        "role": "Senior Buyer",
        "email": "wesley.flaherty@iscontracting.co.uk",
        "phone": "7507572775.0"
      }
    ]
  },
  {
    "id": 403,
    "name": "J Coffey Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Brian Gilligan",
        "role": "Contracts Manager",
        "email": "brian.gilligan@jcoffey.co.uk"
      },
      {
        "name": "Danny Newland",
        "role": "Site Manager",
        "email": "danny.newland@jcoffey.co.uk"
      },
      {
        "name": "John Senkbeil",
        "role": "Project Manager",
        "email": "jsenkbeil@jcoffey.co.uk"
      },
      {
        "name": "Lionel Marcelline",
        "email": "lionel.marcelline@jcoffey.co.uk",
        "phone": "7960565019.0"
      },
      {
        "name": "Thomas Mitchell",
        "role": "Operations Manager",
        "email": "tmitchell@jcoffey.co.uk"
      }
    ]
  },
  {
    "id": 404,
    "name": "J. Murphy & Sons Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andrew Roberts",
        "role": "Commercial Director",
        "email": "andrewroberts@murphygroup.co.uk"
      },
      {
        "name": "Beth Jackson",
        "role": "Quantity Surveyor",
        "email": "bethjackson@murphygroup.co.uk"
      },
      {
        "name": "Cathal Nevin",
        "role": "Contracts Manager",
        "email": "cathal.nevin@murphygroup.co.uk"
      },
      {
        "name": "Chris Cayton",
        "role": "Managing Director",
        "email": "chriscayton@murphygroup.co.uk"
      },
      {
        "name": "Chris Marskell",
        "role": "Managing Quantity Surveyor",
        "email": "chris.marskell@murphygroup.co.uk"
      },
      {
        "name": "Christos Mamaloudis",
        "role": "Project Manager",
        "email": "christos.mamaloudis@murphygroup.co.uk"
      },
      {
        "name": "Colin Mackie",
        "role": "Project Controls Manager",
        "email": "colin.mackie@murphygroup.co.uk"
      },
      {
        "name": "David Martin",
        "role": "Project Manager",
        "email": "dmartin@murphygroup.co.uk"
      },
      {
        "name": "Harsha Gayan",
        "role": "Site Engineer",
        "email": "harsha.gayan@murphygroup.co.uk"
      },
      {
        "name": "Jack Seddon",
        "role": "Project Manager",
        "email": "jseddon@murphygroup.co.uk"
      },
      {
        "name": "James Walker",
        "role": "Procurement Manager",
        "email": "jwalker@murphygroup.co.uk"
      },
      {
        "name": "Jason Chadwick",
        "email": "jasonchadwick@murphygroup.co.uk"
      },
      {
        "name": "Jason Fernandes",
        "role": "Project Leader",
        "email": "jason.fernandes@murphygroup.co.uk"
      },
      {
        "name": "Joe Kennedy",
        "role": "Project Director",
        "email": "jkennedy@murphygroup.co.uk"
      },
      {
        "name": "John Scannell",
        "role": "Construction Manager",
        "email": "jscannell@murphygroup.co.uk"
      },
      {
        "name": "Jonathan Hollingshead",
        "role": "Development Manager",
        "email": "jonathan.hollingshead@murphygroup.co.uk",
        "phone": "07704 768258"
      },
      {
        "name": "Kevin Boyle",
        "role": "Project Manager",
        "email": "kevinboyle@murphygroup.co.uk"
      },
      {
        "name": "Liam Bousfield",
        "role": "Senior Quantity Surveyor",
        "email": "liambousfield@murphygroup.co.uk"
      },
      {
        "name": "Liam Corr",
        "role": "Managing Director",
        "email": "liamcorr@murphygroup.co.uk"
      },
      {
        "name": "Liam O'Connor",
        "role": "Director",
        "email": "liam.o'connor@murphygroup.co.uk"
      },
      {
        "name": "Louise Appleton",
        "email": "louise.appleton@murphygroup.co.uk"
      },
      {
        "name": "Michael Keating",
        "role": "Project Manager",
        "email": "mkeating@murphygroup.com"
      },
      {
        "name": "Michael McCourt",
        "role": "Engineering Manager",
        "email": "michaelmccourt@murphygroup.co.uk"
      },
      {
        "name": "Mike Neary",
        "role": "Property Manager",
        "email": "mike.neary@murphygroup.co.uk",
        "phone": "7703471886.0"
      },
      {
        "name": "Miles Cobley",
        "role": "Managing Director",
        "email": "miles.cobley@murphygroup.co.uk"
      },
      {
        "name": "Nick Fletcher",
        "role": "Managing Director",
        "email": "nickfletcher@murphygroup.co.uk"
      },
      {
        "name": "Paul Giddings",
        "role": "Commercial Manager",
        "email": "pgiddings@murphygroup.co.uk"
      },
      {
        "name": "Paul Hart",
        "role": "Project Manager",
        "email": "paulhart@murphygroup.co.uk"
      },
      {
        "name": "Paul Williams",
        "role": "Senior Engineering Manager",
        "email": "pwilliams@murphygroup.co.uk"
      },
      {
        "name": "Richard Brook",
        "role": "Project Manager",
        "email": "richardbrook@murphygroup.co.uk",
        "phone": "7590002583.0"
      },
      {
        "name": "Richard Mullaney",
        "role": "Project Manager",
        "email": "richardmullaney@murphygroup.co.uk"
      },
      {
        "name": "Robert Burgess",
        "role": "Project Director",
        "email": "robert.burgess@murphygroup.com"
      },
      {
        "name": "Robert Gray",
        "role": "Contracts Manager",
        "email": "robertgray@murphygroup.co.uk"
      },
      {
        "name": "Roberto Theran",
        "role": "Senior Engineer",
        "email": "roberto.theran@murphygroup.co.uk"
      },
      {
        "name": "Sam Carter",
        "role": "Senior Site Manager",
        "email": "samcarter@murphygroup.co.uk"
      },
      {
        "name": "Stephen Harnett",
        "role": "Project Manager",
        "email": "sharnett@murphygroup.co.uk"
      },
      {
        "name": "Steve Faber",
        "role": "Property Director",
        "email": "steve.faber@murphygroup.co.uk"
      },
      {
        "name": "William Ross",
        "role": "Senior Project Manager",
        "email": "william.ross@murphygroup.co.uk"
      }
    ]
  },
  {
    "id": 405,
    "name": "JB Construction 1 Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alistair Drake",
        "role": "Commercial Manager",
        "email": "alistair.drake@jbconstruction1.co.uk"
      },
      {
        "name": "Bill Smeeth",
        "role": "Project Manager",
        "email": "bill@jbconstruction1.co.uk"
      },
      {
        "name": "Billy Singh",
        "email": "billy.singh@jbconstruction1.co.uk"
      },
      {
        "name": "Brandon Hobden",
        "role": "Project Manager",
        "email": "brandon@jbconstruction1.co.uk"
      },
      {
        "name": "Charles Lawton",
        "role": "Construction Director",
        "email": "charles.lawton@jbconstruction1.co.uk",
        "phone": "07399 548816"
      },
      {
        "name": "Daniel Virgo",
        "role": "Contracts Manager",
        "email": "daniel.virgo@jbconstruction1.co.uk",
        "phone": "7415324206.0"
      },
      {
        "name": "Gary Gibbons",
        "role": "Quantity Surveyor",
        "email": "gary.gibbons@jbconstruction1.co.uk"
      },
      {
        "name": "Ida Gouveia",
        "email": "ida.gouveia@jbconstruction1.co.uk"
      },
      {
        "name": "Jaskaran Singh",
        "role": "CEO",
        "email": "jaskaran@jbconstruction1.co.uk"
      },
      {
        "name": "Kobus De Villiers",
        "role": "Site Manager",
        "email": "kobus.devilliers@jbconstruction1.co.uk"
      },
      {
        "name": "Manni Sekhon",
        "role": "Buyer",
        "email": "manni@jbconstruction1.co.uk"
      },
      {
        "name": "Manny Singh",
        "role": "Office Manager",
        "email": "manny.singh@jbconstruction1.co.uk"
      },
      {
        "name": "Matthew Springs",
        "role": "Contract Manager",
        "email": "matthew.springs@jbconstruction1.co.uk"
      },
      {
        "name": "Neil Benjamin",
        "role": "Contracts Manager",
        "email": "neil@jbconstruction1.co.uk",
        "phone": "07507 658023"
      },
      {
        "name": "Ninder AASandhu",
        "role": "Buyer",
        "email": "ninder@jbconstruction1.co.uk"
      },
      {
        "name": "Ross Lane",
        "role": "Buyer",
        "email": "ross.lane@jbconstruction1.co.uk"
      },
      {
        "name": "Sahib Singh",
        "role": "Commercial Director",
        "email": "sahib.singh@jbconstruction1.co.uk",
        "phone": "7944873288.0"
      },
      {
        "name": "Sib Singh",
        "role": "Contracts Manager",
        "email": "sib.singh@jbconstruction1.co.uk"
      },
      {
        "name": "Sonnu Chahal",
        "email": "sonnu.chahal@jbconstruction1.co.uk"
      },
      {
        "name": "Stefan Bekker",
        "role": "Contracts Manager",
        "email": "stefan.bekker@jbconstruction1.co.uk"
      },
      {
        "name": "Billy Singh",
        "email": "billy@jbconstruction1.co.uk"
      },
      {
        "name": "Manny Singh",
        "role": "Office Manager",
        "email": "manny@jbconstruction1.co.uk"
      },
      {
        "name": "Sahib Singh",
        "role": "Commercial Director",
        "email": "sahib@jbconstruction1.co.uk",
        "phone": "7944873288.0"
      },
      {
        "name": "Sib Singh",
        "role": "Contracts Manager",
        "email": "sib@jbconstruction1.co.uk"
      },
      {
        "name": "Sonnu Chahal",
        "email": "sonnu@jbconstruction1.co.uk"
      }
    ]
  },
  {
    "id": 406,
    "name": "JB Structures Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andrew O'Keeffe",
        "role": "Senior Quantity Surveyor",
        "email": "andrew.o'keeffe@jbstructures.co.uk"
      },
      {
        "name": "Ben Coleman",
        "role": "Quantity Surveyor",
        "email": "ben.coleman@jbstructures.co.uk"
      },
      {
        "name": "Ben Hopkins",
        "role": "Site Engineer",
        "email": "ben.hopkins@jbstructures.co.uk"
      },
      {
        "name": "Besurim Uta",
        "role": "Contracts Manager",
        "email": "besurim.uta@jbstructures.co.uk"
      },
      {
        "name": "Brendan Barrett",
        "role": "Director",
        "email": "brendan.barrett@jbstructures.co.uk",
        "phone": "7946531006.0"
      },
      {
        "name": "Brian Watson",
        "role": "Quantity Surveyor",
        "email": "brian.watson@jbstructures.co.uk"
      },
      {
        "name": "Cezar Burlui",
        "role": "Construction Manager",
        "email": "cezar.burlui@jbstructures.co.uk",
        "phone": "7903124937.0"
      },
      {
        "name": "Craig Scott",
        "role": "Contracts Manager",
        "email": "craig.scott@jbstructures.co.uk"
      },
      {
        "name": "Damian Horan",
        "role": "Contracts Manager",
        "email": "damian.horan@jbstructures.co.uk",
        "phone": "7944139664.0"
      },
      {
        "name": "Eamonn Hannigan",
        "role": "Quantity Surveyor",
        "email": "eamonn.hannigan@jbstructures.co.uk"
      },
      {
        "name": "James O'Beirne",
        "role": "Senior Buyer",
        "email": "james.o'beirne@jbstructures.co.uk"
      },
      {
        "name": "Joe Maloney",
        "role": "Head of Estimating",
        "email": "joe.maloney@jbstructures.co.uk"
      },
      {
        "name": "Jordan O'Connor",
        "role": "Site Manager",
        "email": "jordan.o'connor@jbstructures.co.uk"
      },
      {
        "name": "Justin Barrett",
        "role": "Contract Manager",
        "email": "justin.barrett@jbstructures.co.uk"
      },
      {
        "name": "Liam Massey",
        "role": "liam.massey@jbstructures.co.uk"
      },
      {
        "name": "Miles Wright",
        "role": "Quantity Surveyor",
        "email": "miles.wright@jbstructures.co.uk"
      },
      {
        "name": "Nakkeeran Shanmugam",
        "role": "Project Manager",
        "email": "nakkeeran.shanmugam@jbstructures.co.uk"
      },
      {
        "name": "Parthi Ahil",
        "role": "Project Manager",
        "email": "parthi.ahil@jbstructures.co.uk",
        "phone": "7703415894.0"
      },
      {
        "name": "Peter Mulgrew",
        "role": "Project Manager",
        "email": "peter.mulgrew@jbstructures.co.uk"
      },
      {
        "name": "Stefan Miruntaska",
        "role": "Project Manager",
        "email": "stefan.miruntaska@jbstructures.co.uk"
      },
      {
        "name": "Stephen Kearney",
        "role": "Quantity Surveyor",
        "email": "stephen.kearney@jbstructures.co.uk"
      },
      {
        "name": "Tarek Bazzouni",
        "role": "Project Manager",
        "email": "tarek.bazzouni@jbstructures.co.uk"
      }
    ]
  },
  {
    "id": 407,
    "name": "JC Balls & Sons",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Chris Balls",
        "role": "Director",
        "email": "chris@jcballs.co.uk"
      },
      {
        "name": "Dane Potts",
        "role": "Contracts Manager",
        "email": "dane@jcballs.co.uk"
      },
      {
        "name": "Ian Bunting",
        "role": "Contracts Manager",
        "email": "ian@jcballs.co.uk"
      },
      {
        "name": "John Flint",
        "role": "Site Manager",
        "email": "john@jcballs.co.uk"
      }
    ]
  },
  {
    "id": 408,
    "name": "Jerram Falkus Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Anthony Crosby",
        "email": "anthony.crosby@jerramfalkus.com",
        "phone": "07799 901397"
      },
      {
        "name": "Daniel Childs",
        "role": "Quantity Surveyor",
        "email": "daniel.childs@jerramfalkus.co.uk",
        "phone": "07714 159 878"
      },
      {
        "name": "Ellen Connor",
        "role": "Administrator",
        "email": "ellen.connor@jerramfalkus.co.uk",
        "phone": "07860 204155"
      },
      {
        "name": "Jack Connelly",
        "role": "Contracts Manager",
        "email": "jack.connelly@jerramfalkus.com",
        "phone": "07453 059705"
      },
      {
        "name": "James Bailey",
        "role": "Commercial Manager",
        "email": "james.bailey@jerramfalkus.co.uk",
        "phone": "7814736839.0"
      },
      {
        "name": "Jamie McFaull",
        "role": "Construction Manager",
        "email": "jamie.mcfaull@jerramfalkus.co.uk"
      },
      {
        "name": "Karen White",
        "role": "Buyer",
        "email": "karen.white@jerramfalkus.com"
      },
      {
        "name": "Keith Decosta",
        "role": "Quantity Surveyor",
        "email": "keith.decosta@jerramfalkus.com"
      },
      {
        "name": "Mark Dougard",
        "role": "Site Manager",
        "email": "mark.dougard@jerramfalkus.com"
      },
      {
        "name": "Mark Glock",
        "role": "Project Manager",
        "email": "mark.glock@jerramfalkus.com",
        "phone": "7860204274.0"
      },
      {
        "name": "Mike Nevins",
        "role": "Project Manager",
        "email": "michael.nevins@jerramfalkus.co.uk",
        "phone": "7834747957.0"
      },
      {
        "name": "Paul Shadbolt",
        "role": "Project Leader",
        "email": "paul.shadbolt@jerramfalkus.com",
        "phone": "07449 407 844"
      },
      {
        "name": "Peter Adams",
        "role": "Project Leader",
        "email": "peter.adams@jerramfalkus.com",
        "phone": "07730 048906"
      },
      {
        "name": "Rachel Rodrigues",
        "email": "rachel.rodrigues@jerramfalkus.com",
        "phone": "07788 311668"
      },
      {
        "name": "Robbie Bridge",
        "role": "Contracts Manager",
        "email": "robbie.bridge@jerramfalkus.com",
        "phone": "07740 732 778"
      },
      {
        "name": "Ross Bennett",
        "role": "Quantity Surveyor",
        "email": "ross.bennett@jerramfalkus.com",
        "phone": "07788 311661"
      },
      {
        "name": "Saeed Adam",
        "role": "Commercial Manager",
        "email": "saeed.adam@jerramfalkus.co.uk",
        "phone": "7449421913.0"
      },
      {
        "name": "Steve McNally",
        "role": "Project Manager",
        "email": "steve.mcnally@jerramfalkus.com",
        "phone": "07453 017564"
      },
      {
        "name": "Tom Kelly",
        "role": "Contracts Manager",
        "email": "tom.kelly@jerramfalkus.com",
        "phone": "07860 340976"
      },
      {
        "name": "Tom O'Toole",
        "role": "Contracts Manager",
        "email": "tom.otoole@jerramfalkus.com"
      }
    ]
  },
  {
    "id": 409,
    "name": "JM Piling",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Ian McNulty",
        "role": "Manager",
        "email": "ianmcnulty@murphygroup.co.uk"
      }
    ]
  },
  {
    "id": 410,
    "name": "JM Piling Company Limited",
    "disciplines": [
      "Piling"
    ],
    "contacts": [
      {
        "name": "Ian McNulty",
        "role": "Manager",
        "email": "ianmcnulty@murphygroup.co.uk"
      }
    ]
  },
  {
    "id": 411,
    "name": "John F Hunt",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Glen Clark",
        "role": "Managing Director",
        "email": "glen.clark@johnfhunt.co.uk"
      },
      {
        "name": "Saul Disbury",
        "role": "Operations Director",
        "email": "saul.disbury@johnfhunt.co.uk"
      },
      {
        "name": "Scott Excell",
        "role": "Operations Director",
        "email": "scott.exell@johnfhunt.co.uk",
        "phone": "07890 917520"
      },
      {
        "name": "Tony Fenwick",
        "role": "Operations Director",
        "email": "tony.fenwick@johnfhunt.co.uk",
        "phone": "07773 004758"
      },
      {
        "name": "Troy Robertson",
        "role": "Operations Director",
        "email": "troy.robertson@johnfhunt.co.uk",
        "phone": "07974 036863"
      },
      {
        "name": "Steve Johnson",
        "role": "Pre Construction Director",
        "email": "steve.johnson@johnfhunt.co.uk"
      },
      {
        "name": "Kate Kizalas",
        "role": "Remediation Director",
        "email": "kate.kizalas@johnfhunt.co.uk"
      },
      {
        "name": "Ian Skillings",
        "role": "Projects Director",
        "email": "ian.skillings@johnfhunt.co.uk"
      },
      {
        "name": "Irfan Ahmed Quraishi",
        "role": "Project Director",
        "email": "irfan.quraishi@johnfhunt.co.uk"
      },
      {
        "name": "Bill Unwin",
        "role": "Contracts Manager",
        "email": "bill.unwin@johnfhunt.co.uk"
      },
      {
        "name": "Iulian Dianconu",
        "role": "Contracts Manager",
        "email": "iulian.dianconu@johnfhunt.co.uk",
        "phone": "07973 762834"
      },
      {
        "name": "Lesley Ager",
        "role": "Contracts Manager",
        "email": "lesley.ager@johnfhunt.co.uk"
      },
      {
        "name": "Nick Ward",
        "role": "Contracts Manager",
        "email": "nick.ward@johnfhunt.co.uk",
        "phone": "07973 801774"
      },
      {
        "name": "Tom O'Connell",
        "role": "Contract Manager",
        "email": "tom.o'connell@johnfhunt.co.uk"
      },
      {
        "name": "Jon Stones",
        "role": "Contract Manager",
        "email": "jon.stones@johnfhunt.co.uk"
      },
      {
        "name": "Craig Forster",
        "role": "Quantity Surveyor",
        "email": "craig.forster@johnfhunt.co.uk"
      },
      {
        "name": "Lance Wimble",
        "role": "Head of Civil Structures",
        "email": "lance.wimble@johnfhunt.co.uk"
      },
      {
        "name": "Patricia McEnroe",
        "role": "Business Development Manager",
        "email": "patricia.mcenroe@johnfhunt.co.uk"
      }
    ]
  },
  {
    "id": 412,
    "name": "John F Hunt Group",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adam Dodds",
        "role": "Site Supervisor",
        "email": "adam.dodds@johnfhunt.co.uk"
      },
      {
        "name": "Irfan Ahmed Quraishi",
        "role": "Project Director",
        "email": "irfan.quraishi@johnfhunt.co.uk"
      },
      {
        "name": "Bill Unwin",
        "role": "Contracts Manager",
        "email": "bill.unwin@johnfhunt.co.uk"
      },
      {
        "name": "Cameron Enticott",
        "role": "Site Manager",
        "email": "cameron.enticott@johnfhunt.co.uk"
      },
      {
        "name": "Craig Forster",
        "role": "Quantity Surveyor",
        "email": "craig.forster@johnfhunt.co.uk"
      },
      {
        "name": "Davinder Reehal",
        "role": "Project Manager",
        "email": "davinder.reehal@johnfhunt.co.uk"
      },
      {
        "name": "Gabriel Stetco",
        "role": "Project Manager",
        "email": "gabriel.stetco@johnfhunt.co.uk",
        "phone": "7773628380.0"
      },
      {
        "name": "Glen Clark",
        "role": "Managing Director",
        "email": "glen.clark@johnfhunt.co.uk"
      },
      {
        "name": "Glen Friel",
        "role": "Project Manager",
        "email": "glen.friel@johnfhunt.co.uk"
      },
      {
        "name": "Ian Skillings",
        "role": "Projects Director",
        "email": "ian.skillings@johnfhunt.co.uk"
      },
      {
        "name": "Iulian Dianconu",
        "role": "Contracts Manager",
        "email": "iulian.dianconu@johnfhunt.co.uk",
        "phone": "7973762834.0"
      },
      {
        "name": "Jack Thompson",
        "role": "Project Manager",
        "email": "jack.thompson@johnfhunt.co.uk"
      },
      {
        "name": "Jamie Fitzpatrick",
        "role": "Project Manager",
        "email": "jamie.fitzpatrick@johnfhunt.co.uk"
      },
      {
        "name": "Jon Stones",
        "role": "Contract Manager",
        "email": "jon.stones@johnfhunt.co.uk"
      },
      {
        "name": "Kate Kizalas",
        "role": "Remediation Director",
        "email": "kate.kizalas@johnfhunt.co.uk"
      },
      {
        "name": "Kevin O'Malley",
        "role": "Project Manager",
        "email": "kevin.o'malley@johnfhunt.co.uk"
      },
      {
        "name": "Lance Wimble",
        "role": "Head of Civil Structures",
        "email": "lance.wimble@johnfhunt.co.uk"
      },
      {
        "name": "Lesley Ager",
        "role": "Contracts Manager",
        "email": "lesley.ager@johnfhunt.co.uk"
      },
      {
        "name": "Mark Hadley",
        "role": "Project Manager",
        "email": "mark.hadley@johnfhunt.co.uk",
        "phone": "7970939571.0"
      },
      {
        "name": "Michael Frisby",
        "role": "Project Manager",
        "email": "michael.frisby@johnfhunt.co.uk"
      },
      {
        "name": "Nick Ward",
        "role": "Contracts Manager",
        "email": "nick.ward@johnfhunt.co.uk",
        "phone": "7973801774.0"
      },
      {
        "name": "Patricia McEnroe",
        "role": "Business Development Manager",
        "email": "patricia.mcenroe@johnfhunt.co.uk"
      },
      {
        "name": "Patrick O'Connor",
        "role": "Project Manager",
        "email": "patrick.oconnor@johnfhunt.co.uk",
        "phone": "7525888493.0"
      },
      {
        "name": "Paul Wightman",
        "role": "Health & Safety Consultant",
        "email": "paul.wightman@johnfhunt.co.uk"
      },
      {
        "name": "Richard Sanders",
        "role": "Health & Safety Director",
        "email": "richard.sanders@johnfhunt.co.uk"
      },
      {
        "name": "Saul Disbury",
        "role": "Operations Director",
        "email": "saul.disbury@johnfhunt.co.uk"
      },
      {
        "name": "Scott Excell",
        "role": "Operations Director",
        "email": "scott.exell@johnfhunt.co.uk",
        "phone": "7890917520.0"
      },
      {
        "name": "Stephen Pallister",
        "role": "Project Manager",
        "email": "stephen.pallister@johnfhunt.co.uk",
        "phone": "7970418807.0"
      },
      {
        "name": "Steve Johnson",
        "role": "Pre Construction Director",
        "email": "steve.johnson@johnfhunt.co.uk"
      },
      {
        "name": "Tom O'Connell",
        "role": "Contract Manager",
        "email": "tom.o'connell@johnfhunt.co.uk"
      },
      {
        "name": "Tom Seath",
        "role": "Community Liaison Officer",
        "email": "tom.seath@johnfhunt.co.uk"
      },
      {
        "name": "Tony Fenwick",
        "role": "Operations Director",
        "email": "tony.fenwick@johnfhunt.co.uk",
        "phone": "7773004758.0"
      },
      {
        "name": "Troy Robertson",
        "role": "Operations Director",
        "email": "troy.robertson@johnfhunt.co.uk",
        "phone": "7974036863.0"
      }
    ]
  },
  {
    "id": 413,
    "name": "John Sisk & Son Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Abishek Gowda Ramachandra",
        "role": "Site Engineer",
        "email": "a.gowdaramachandra@sisk.co.uk"
      },
      {
        "name": "Aidan King",
        "role": "Operations Director",
        "email": "aidanking@sisk.co.uk"
      },
      {
        "name": "Aiden King",
        "role": "Site Engineer",
        "email": "aidenking@sisk.co.uk"
      },
      {
        "name": "Ajaz Shafi",
        "role": "Director",
        "email": "ajazshafi@sisk.co.uk"
      },
      {
        "name": "Alan Rodger",
        "email": "alanrodger@sisk.co.uk"
      },
      {
        "name": "Alex Rooney",
        "role": "Quantity Surveyor",
        "email": "alexrooney@sisk.co.uk"
      },
      {
        "name": "Andrew Curry",
        "role": "HSEQ Manager",
        "email": "andrewcurry@sisk.co.uk"
      },
      {
        "name": "Andrew O'Kane",
        "role": "Project Director",
        "email": "andrewo'kane@sisk.co.uk"
      },
      {
        "name": "Barry Roe",
        "role": "Site Manager",
        "email": "barryroe@sisk.co.uk"
      },
      {
        "name": "Bradley Wallis",
        "role": "Senior Civil Engineer",
        "email": "bradleywallis@sisk.co.uk"
      },
      {
        "name": "Brian Corridan",
        "role": "Project Manager",
        "email": "briancorridan@sisk.co.uk"
      },
      {
        "name": "Brian Foody",
        "role": "Quantity Surveyor",
        "email": "brianfoody@sisk.co.uk"
      },
      {
        "name": "Ciaran Walsh",
        "role": "Senior Quantity Surveyor",
        "email": "ciaranwalsh@sisk.co.uk",
        "phone": "07785 654105"
      },
      {
        "name": "Conor Moynihan",
        "role": "Senior Engineer",
        "email": "c.moynihan@sisk.co.uk"
      },
      {
        "name": "Daniel Mackell",
        "role": "Project Manager",
        "email": "danielmackell@sisk.co.uk"
      },
      {
        "name": "Daniel Warren",
        "role": "Senior Project Manager",
        "email": "danielwarren@sisk.co.uk"
      },
      {
        "name": "Danut Bojian",
        "role": "Senior Site Manager",
        "email": "danutbojian@sisk.co.uk"
      },
      {
        "name": "Darragh Nunan",
        "role": "Senior Project Manager",
        "email": "darraghnunan@sisk.co.uk"
      },
      {
        "name": "David Bailey",
        "role": "Commercial Manager",
        "email": "davidbailey@sisk.co.uk"
      },
      {
        "name": "Donal McCarthy",
        "role": "Chief Operating Officer",
        "email": "donalmccarthy@sisk.co.uk"
      },
      {
        "name": "Florian Capatan",
        "role": "Site Supervisor",
        "email": "floriancapatan@sisk.co.uk"
      },
      {
        "name": "Ger Hayes",
        "role": "Project Director",
        "email": "gerhayes@sisk.co.uk"
      },
      {
        "name": "Grant McConachie",
        "email": "grantmcconachie@sisk.co.uk"
      },
      {
        "name": "Harry Nahum",
        "role": "Project Manager",
        "email": "harrynahum@sisk.co.uk"
      },
      {
        "name": "Hassann Hanif",
        "role": "Quantity Surveyor",
        "email": "hassaanhanif@sisk.co.uk",
        "phone": "7824350947.0"
      },
      {
        "name": "James Brown",
        "email": "jamesbrown@sisk.co.uk"
      },
      {
        "name": "James Crosse",
        "role": "Regional Design Manager",
        "email": "jamescrosse@sisk.co.uk"
      },
      {
        "name": "Joanna Roy",
        "role": "Quantity Surveyor",
        "email": "joannaroy@sisk.co.uk"
      },
      {
        "name": "Justin Lowe",
        "role": "Operations Director",
        "email": "justinlowe@sisk.co.uk"
      },
      {
        "name": "Kevin Grogan",
        "role": "Procurement Manager",
        "email": "kevingrogan@sisk.co.uk"
      },
      {
        "name": "Kevin Vickery",
        "role": "Project Manager",
        "email": "kevinvickery@sisk.co.uk"
      },
      {
        "name": "Massimiliano Crea",
        "role": "Operations Director",
        "email": "mcrea@sisk.co.uk"
      },
      {
        "name": "Matthew Phillips",
        "role": "Contract Manager",
        "email": "matthewphillips@sisk.co.uk"
      },
      {
        "name": "Michael Dunne",
        "role": "Project Director",
        "email": "michaeldunne@sisk.co.uk"
      },
      {
        "name": "Michael McNasser",
        "role": "Site Engineer",
        "email": "michaelmcnasser@sisk.co.uk"
      },
      {
        "name": "Mike Brosnan",
        "role": "Project Manager",
        "email": "mikebrosnan@sisk.co.uk"
      },
      {
        "name": "Mohamed Yazor",
        "role": "Quantity Surveyor",
        "email": "mohamedyazor@sisk.co.uk"
      },
      {
        "name": "Niall Hickey",
        "role": "Project Manager",
        "email": "niallhickey@sisk.co.uk"
      },
      {
        "name": "Nick Fitzgerald",
        "role": "Site Manager",
        "email": "nickfitzgerald@sisk.co.uk"
      },
      {
        "name": "Nipuna Fernando",
        "role": "Senior Quantity Surveyor",
        "email": "nipunafernando@sisk.co.uk"
      },
      {
        "name": "Pat Gillam",
        "role": "Project Director",
        "email": "patgillam@sisk.co.uk"
      },
      {
        "name": "Paul Brown",
        "role": "Chief Operating Officer",
        "email": "paulbrown@sisk.co.uk"
      },
      {
        "name": "Philip Keen",
        "role": "Commercial Manager",
        "email": "philipkeen@sisk.co.uk"
      },
      {
        "name": "Pooja Godhania",
        "role": "Project Manager",
        "email": "poojagodhania@sisk.co.uk"
      },
      {
        "name": "Ragulan Vijayanayagam",
        "role": "Project Manager",
        "email": "ragulanvijayanayagam@sisk.co.uk"
      },
      {
        "name": "Raluca Ursu",
        "role": "Assistant Project Manager",
        "email": "ralucausu@sisk.co.uk"
      },
      {
        "name": "Shane Carty",
        "role": "Senior Quantity Surveyor",
        "email": "shanecarty@sisk.co.uk"
      },
      {
        "name": "Steve Eldergill",
        "email": "s.eldergill@sisk.co.uk"
      },
      {
        "name": "Steven McGee",
        "role": "Chief Operating Officer",
        "email": "stevenmcgee@sisk.co.uk"
      },
      {
        "name": "Thomas Scanlon",
        "role": "Commercial Manager",
        "email": "thomasscanlon@sisk.co.uk",
        "phone": "7900138564.0"
      },
      {
        "name": "Tom Byrne",
        "role": "Head of Communications",
        "email": "t.byrne@sisk.ir"
      },
      {
        "name": "Tom Duggan",
        "role": "Commercial Manager",
        "email": "tomduggan@sisk.co.uk"
      },
      {
        "name": "Tom Lewis",
        "role": "Project Manager",
        "email": "t.lewis@sisk.co.uk"
      }
    ]
  },
  {
    "id": 414,
    "name": "Joseph Gallagher Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Claire Gallagher",
        "role": "Quantity Surveyor",
        "email": "claire.gallagher@josephgallagher.co.uk"
      },
      {
        "name": "Gary Dann",
        "role": "Pre Construction Director",
        "email": "gary.dann@josephgallagher.co.uk",
        "phone": "07803 598 065"
      },
      {
        "name": "Greg Catton",
        "email": "greg.catton@josephgallagher.co.uk"
      },
      {
        "name": "Mark McGeady",
        "role": "Contracts Manager",
        "email": "mark.mcgeady@josephgallagher.co.uk"
      },
      {
        "name": "Patrick Anning",
        "role": "Contracts Manager",
        "email": "patrick.anning@josephgallagher.co.uk"
      },
      {
        "name": "Paul Gallagher",
        "role": "Contracts Manager",
        "email": "paul.gallagher@josephgallagher.co.uk"
      },
      {
        "name": "Terry Martin",
        "role": "Commercial Manager",
        "email": "terry.martin@josephgallagher.co.uk"
      }
    ]
  },
  {
    "id": 415,
    "name": "JP Dunn Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Aaron Sergent",
        "role": "Plant Manager",
        "email": "asergent@jpdunnconstruction.co.uk"
      },
      {
        "name": "Alistair Gray",
        "role": "Quantity Surveyor",
        "email": "alistair.gray@jpdunnconstruction.co.uk"
      },
      {
        "name": "Andrius Banenas",
        "role": "Site Manager",
        "email": "abanenas@jpdunnconstruction.co.uk"
      },
      {
        "name": "Chris Allan",
        "role": "Contracts Director",
        "email": "cdunn@jpdunnconstruction.co.uk"
      },
      {
        "name": "Conrad Sidebottom",
        "role": "Site Manager",
        "email": "conrad.sidebottom@jpdunnconstruction.co.uk"
      },
      {
        "name": "Emilian Juravale",
        "role": "Project Manager",
        "email": "ejuravale@jpdunnconstruction.co.uk"
      },
      {
        "name": "Gideon Ogunkinle",
        "role": "Site Manager",
        "email": "gideon.ogunkinle@jpdunnconstruction.co.uk"
      },
      {
        "name": "Greg Illingworth",
        "role": "Quantity Surveyor",
        "email": "gillingworth@jpdunnconstruction.co.uk"
      },
      {
        "name": "James Galloway",
        "role": "Buyer",
        "email": "buying@jpdconstruction.co.uk"
      },
      {
        "name": "Jonathan Dunn",
        "role": "Director",
        "email": "jdunn@jpdunnconstruction.co.uk"
      },
      {
        "name": "Kevin McSweeney",
        "role": "Contracts Manager",
        "email": "kmcsweeney@jpdunnconstruction.co.uk"
      },
      {
        "name": "Kevin Sweeney",
        "role": "Contracts Manager",
        "email": "kevin.sweeney@jpdunnconstruction.co.uk"
      },
      {
        "name": "Kieran McMahon",
        "role": "Contracts Manager",
        "email": "kieran.mcmahon@jpdunnconstruction.co.uk"
      },
      {
        "name": "Nick Jacks",
        "role": "Pre Construction Manager",
        "email": "njacks@jpdunnconstruction.co.uk"
      },
      {
        "name": "Nick White",
        "role": "Project Manager",
        "email": "nwhite@jpdunnconstruction.co.uk",
        "phone": "7741655750.0"
      },
      {
        "name": "Obi Gracinaru",
        "role": "Contract Manager",
        "email": "obi.gracinaru@jpdunnconstruction.co.uk"
      },
      {
        "name": "Owen Holland",
        "role": "Estimator",
        "email": "oholland@jpdunnconstruction.co.uk"
      },
      {
        "name": "Paige Sandfort",
        "role": "Senior Buyer",
        "email": "psandfort@jpdunnconstruction.co.uk"
      },
      {
        "name": "Pat English",
        "role": "Contracts Manager",
        "email": "penglish@jpdunnconstruction.co.uk"
      },
      {
        "name": "Sean Burke",
        "role": "Contracts Manager",
        "email": "sburke@jpdunnconstruction.co.uk"
      },
      {
        "name": "Steven Cashin",
        "role": "Contracts Manager",
        "email": "scashin@jpdunnconstruction.co.uk"
      },
      {
        "name": "Thomas Schroll",
        "role": "Contracts Manager",
        "email": "tschroll@jpdunnconstruction.co.uk"
      },
      {
        "name": "Vas Arumugam",
        "role": "Project Manager",
        "email": "vas.arumugam@jpdunnconstruction.co.uk",
        "phone": "7975602256.0"
      },
      {
        "name": "Yllka Uruci",
        "role": "Quantity Surveyor",
        "email": "yuruci@jpdunnconstruction.co.uk"
      }
    ]
  },
  {
    "id": 416,
    "name": "JRL Midgard Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alex Bleach",
        "role": "Commercial Manager",
        "email": "alex.bleach@midgard.ltd.uk"
      },
      {
        "name": "Andre Martins",
        "role": "Commercial Director",
        "email": "andre.martins@midgard.ltd.uk"
      },
      {
        "name": "Craig Rowen",
        "role": "Senior Project Manager",
        "email": "craig.rowen@midgard.ltd.uk"
      },
      {
        "name": "Efka Zjawin",
        "role": "Design Manager",
        "email": "efka.zjawin@midgard.ltd.uk"
      },
      {
        "name": "Graham Ardley",
        "role": "Operations Director",
        "email": "graham.ardley@midgard.ltd.uk",
        "phone": "07764 354097"
      },
      {
        "name": "Ian Campbell",
        "role": "Engineer",
        "email": "ian.campbell@midgard.ltd.uk"
      },
      {
        "name": "Jason Knowles",
        "role": "Project Manager",
        "email": "jason.knowles@midgard.ltd.uk"
      },
      {
        "name": "John Moroney",
        "role": "Site Manager",
        "email": "john.moroney@midgard.ltd.uk"
      },
      {
        "name": "Joshua Boddy",
        "role": "Quantity Surveyor",
        "email": "joshua.boddy@midgard.ltd.uk"
      },
      {
        "name": "Kevin Keegan",
        "role": "Director",
        "email": "kevin.keegan@midgard.ltd.uk"
      },
      {
        "name": "Laura Cabeza Escobar",
        "role": "Environmental Manager",
        "email": "laura.escobar@midgard.ltd.uk"
      },
      {
        "name": "Lee Bircumshaw",
        "role": "Project Director",
        "email": "lee.bircumshaw@midgard.ltd.uk"
      },
      {
        "name": "Matthew Beech",
        "role": "Development Director",
        "email": "matthew.beech@midgard.ltd.uk"
      },
      {
        "name": "Patrick O'Callaghan",
        "role": "Quantity Surveyor",
        "email": "patrick.ocallaghan@midgard.ltd.uk",
        "phone": "7795115816.0"
      },
      {
        "name": "Paul Cummins",
        "role": "Development Director",
        "email": "paul.cummins@jrlgroup.co.uk"
      },
      {
        "name": "Paul Mitchell",
        "role": "Operations Director",
        "email": "paul.mitchell@midgard.ltd.uk"
      },
      {
        "name": "Sergio Domingos",
        "role": "Operations Director",
        "email": "sergio.domingos@midgard.ltd.uk"
      },
      {
        "name": "Vas Chiotis",
        "role": "Project Director",
        "email": "vas.chiotis@midgard.ltd.uk"
      }
    ]
  },
  {
    "id": 417,
    "name": "K K B Group",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Colin Basi",
        "role": "Owner",
        "email": "colin.basi@kkbgroup.co.uk"
      },
      {
        "name": "Craig Hoare",
        "role": "Director",
        "email": "craig.hoare@kkbgroup.co.uk"
      },
      {
        "name": "Sukhi Singh",
        "role": "Quality Manager",
        "email": "sukhi.singh@kkbgroup.co.uk"
      },
      {
        "name": "Usama Babar",
        "role": "Quantity Surveyor",
        "email": "usama.babar@kkbgroup.co.uk"
      }
    ]
  },
  {
    "id": 418,
    "name": "K M Developers UK Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Kevin March",
        "role": "Director",
        "email": "k.march@kmdevelopersuk.co.uk"
      }
    ]
  },
  {
    "id": 419,
    "name": "Kegel Ltd",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alex Mihnukevics",
        "role": "Director",
        "email": "alex@kegelgroup.co.uk",
        "phone": "7365522989.0"
      }
    ]
  },
  {
    "id": 420,
    "name": "Keith Cook Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "John Cook",
        "role": "Partner",
        "email": "john.cook@keithcookconstructionltd.com"
      },
      {
        "name": "Keith Cook",
        "role": "Director",
        "email": "keith.cook@keithcookconstructionltd.com"
      }
    ]
  },
  {
    "id": 421,
    "name": "Kejsi Contractors Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Bilbil Kasemi",
        "role": "Director",
        "email": "bilbil.kasemi@kejsicontractors.co.uk"
      },
      {
        "name": "Ylber Kasamaj",
        "role": "Managing Director",
        "email": "ylber.kasamaj@kejsicontractors.co.uk"
      }
    ]
  },
  {
    "id": 422,
    "name": "Keller Group PLC",
    "disciplines": [
      "Piling"
    ],
    "contacts": [
      {
        "name": "Andrew Davison",
        "role": "Contracts Manager",
        "email": "andrew.davison@keller.co.uk"
      },
      {
        "name": "David Hartwell",
        "role": "Project Manager",
        "email": "david.hartwell@keller.co.uk"
      },
      {
        "name": "Geoff Fitzhugh",
        "role": "Senior Project Manager",
        "email": "geoff.fitzhugh@keller.co.uk"
      },
      {
        "name": "Conor Adams",
        "role": "Project Manager",
        "email": "conor.adams@keller.co.uk",
        "phone": "07884 754134"
      },
      {
        "name": "David Cooke",
        "role": "Project Manager",
        "email": "david.cooke@keller.co.uk",
        "phone": "07833 200396"
      },
      {
        "name": "David Cousins",
        "role": "Construction Manager",
        "email": "david.cousins@keller.co.uk",
        "phone": "07867 342748"
      },
      {
        "name": "David Harnwell",
        "role": "Contracts Engineer",
        "email": "david.harnwell@keller.co.uk"
      },
      {
        "name": "Edward Collis",
        "role": "Operations Manager",
        "email": "edward.collis@keller.co.uk",
        "phone": "07834 461618"
      },
      {
        "name": "Gary Bately",
        "role": "Supervisor",
        "email": "gary.bately@keller.co.uk"
      },
      {
        "name": "Gurmukh Gidda",
        "role": "Quantity Surveyor",
        "email": "gurmukh.gidda@keller.co.uk"
      },
      {
        "name": "Justin Greatorex",
        "role": "HSEQ Manager",
        "email": "justin.greatorex@keller.co.uk"
      },
      {
        "name": "Mark Bragg",
        "role": "Construction Manager",
        "email": "mark.bragg@keller.co.uk",
        "phone": "07770 801974"
      },
      {
        "name": "Rebecca Masters",
        "role": "Buyer",
        "email": "rebecca.masters@keller.co.uk"
      },
      {
        "name": "Sam Cawthorne",
        "role": "Contracts Manager",
        "email": "sam.cawthorne@keller.co.uk",
        "phone": "07825 931255"
      }
    ]
  },
  {
    "id": 423,
    "name": "Kelly Formwork Group",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Rod Watson",
        "role": "Operations Director",
        "email": "rod.watson@kellyformwork.co.uk"
      },
      {
        "name": "Brian Kelly",
        "role": "Commercial Manager",
        "email": "brian.kelly@kellyformwork.co.uk"
      },
      {
        "name": "Greg Goldman",
        "role": "Project Manager",
        "email": "greg.goldman@kellyformwork.co.uk"
      },
      {
        "name": "Eric Karman",
        "role": "Contracts Manager",
        "email": "eric.karman@kellyformwork.co.uk"
      }
    ]
  },
  {
    "id": 424,
    "name": "Keltbray Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Aaron Donovan",
        "role": "Project Manager",
        "email": "aaron.donovan@keltbray.com"
      },
      {
        "name": "Adam Steel",
        "email": "adam.steel@keltbray.com"
      },
      {
        "name": "Adrian Buch",
        "role": "Project Manager",
        "email": "adrian.buch@keltbray.com",
        "phone": "7902437389.0"
      },
      {
        "name": "Aisling Reynolds",
        "role": "Environmental Assessor",
        "email": "aisling@keltbray.com",
        "phone": "7778365650.0"
      },
      {
        "name": "Amelia Greef",
        "role": "Commercial Manager",
        "email": "amelia.greef@keltbray.com"
      },
      {
        "name": "Andrew Burnside",
        "role": "Development Manager",
        "email": "andrew.burnside@keltbray.com"
      },
      {
        "name": "Andrew Hall",
        "role": "Senior Project Manager",
        "email": "andrew.hall@keltbray.com",
        "phone": "7880007685.0"
      },
      {
        "name": "Andrew Lloyd",
        "role": "Project Manager",
        "email": "andrew.lloyd@keltbray.com"
      },
      {
        "name": "Asha Panchal",
        "role": "Technical Manager",
        "email": "asha.panchal@keltbray.com",
        "phone": "7395792300.0"
      },
      {
        "name": "Aura Gheaburcu",
        "role": "Project Co-Ordinator",
        "email": "aura.gheaburcu@keltbray.com"
      },
      {
        "name": "Barry Woodman",
        "role": "Project Director",
        "email": "barry.woodman@keltbray.com",
        "phone": "7808300996.0"
      },
      {
        "name": "Bill Miller",
        "role": "Contracts Manager",
        "email": "william.miller@keltbray.com",
        "phone": "7789514147.0"
      },
      {
        "name": "Bobby Gannon",
        "role": "Site Manager",
        "email": "bobby.gannon@keltbray.com",
        "phone": "7890279307.0"
      },
      {
        "name": "Caitlin Braudtesett",
        "role": "Project Manager",
        "email": "caitlin@keltbray.com"
      },
      {
        "name": "Caitlin Weston",
        "role": "Pre Construction Co-Ordinator",
        "email": "caitlin.weston@keltbray.com"
      },
      {
        "name": "Carlos Fernandez",
        "email": "carlos.fernandez@keltbray.com",
        "phone": "7736277731.0"
      },
      {
        "name": "Carlos Hernandez",
        "role": "Site Manager",
        "email": "carlos.hernandez@keltbray.com",
        "phone": "7736236731.0"
      },
      {
        "name": "Christopher Moore",
        "role": "Contracts Director",
        "email": "christopher.moore@keltbray.com"
      },
      {
        "name": "Christy Gallagher",
        "role": "Operations Manager (Infrastructure)",
        "email": "christy.gallagher@keltbray.com",
        "phone": "7850271260.0"
      },
      {
        "name": "Costin Mindruta",
        "role": "Supervisor",
        "email": "costin.mindruta@keltbray.com"
      },
      {
        "name": "Craig Brown",
        "role": "Commercial Manager",
        "email": "craig.brown@keltbray.com",
        "phone": "7736891574.0"
      },
      {
        "name": "Craig Tait",
        "role": "Operations Manager",
        "email": "craig.tait@keltbray.com"
      },
      {
        "name": "Daniel Thomas",
        "role": "Project Manager",
        "email": "daniel.thomas@keltbray.com",
        "phone": "7523519194.0"
      },
      {
        "name": "Danny Bates",
        "role": "Commercial Manager",
        "email": "danny.bates@keltbray.com",
        "phone": "7843300983.0"
      },
      {
        "name": "Darren James",
        "role": "CEO",
        "email": "darren.james@keltbray.com"
      },
      {
        "name": "Elliot Broad",
        "role": "Senior Contracts Manager",
        "email": "elliot.broad@keltbray.com",
        "phone": "7523519195.0"
      },
      {
        "name": "Gareth Acres",
        "role": "Senior Project Manager",
        "email": "gareth.acres@keltbray.com",
        "phone": "7590861880.0"
      },
      {
        "name": "Gavin Lawless",
        "role": "Contracts Manager",
        "email": "gavin.lawless@keltbray.com",
        "phone": "7825602923.0"
      },
      {
        "name": "Geremy OCallaughan",
        "role": "Commercial Manager",
        "email": "geremy-ocallaughan@keltbray.com",
        "phone": "7590880840.0"
      },
      {
        "name": "Graham Smith",
        "role": "Project Manager",
        "email": "graham.smith@keltbray.com",
        "phone": "7800960024.0"
      },
      {
        "name": "Harvey White",
        "email": "harvey.white@keltbray.com"
      },
      {
        "name": "Henry Essam",
        "role": "Project Manager",
        "email": "henry.essam@keltbray.com",
        "phone": "7590861869.0"
      },
      {
        "name": "Holly Price",
        "role": "Director",
        "email": "holly.price@keltbray.com"
      },
      {
        "name": "Jack Walters",
        "role": "Project Manager",
        "email": "jack.walters@keltbray.com",
        "phone": "7824436239.0"
      },
      {
        "name": "Jake Hargreaves",
        "role": "Site Manager",
        "email": "jake.hargreaves@keltbray.com"
      },
      {
        "name": "James Barratt",
        "role": "Project Manager",
        "email": "james.barratt@keltbray.com",
        "phone": "7889809507.0"
      },
      {
        "name": "Jason Ward",
        "role": "Project Manager",
        "email": "jason.ward@keltbray.com"
      },
      {
        "name": "Joe Boulcott",
        "role": "Project Manager",
        "email": "joe.boulcott@keltbray.com",
        "phone": "7710708331.0"
      },
      {
        "name": "Joe Darcy",
        "role": "Site Manager",
        "email": "joe.darcy@keltbray.com",
        "phone": "7711898620.0"
      },
      {
        "name": "John McClafferty",
        "role": "Contracts Manager",
        "email": "john.mcclafferty@keltbray.com",
        "phone": "7957492166.0"
      },
      {
        "name": "John O'Sullivan",
        "role": "Project Manager",
        "email": "john.osullivan@keltbray.com",
        "phone": "7741249559.0"
      },
      {
        "name": "Kaisor Miah",
        "role": "Quantity Surveyor",
        "email": "kaisor.miah@keltbray.com",
        "phone": "7710094033.0"
      },
      {
        "name": "Karen Van Roosen",
        "role": "Contract Manager",
        "email": "karen@keltbray.com"
      },
      {
        "name": "Kevin Murray",
        "role": "Project Manager",
        "email": "kevin.murray@keltbray.com"
      },
      {
        "name": "Kyle Jefferies",
        "role": "Quantity Surveyor",
        "email": "kyle.jefferies@keltbray.com",
        "phone": "7741249470.0"
      },
      {
        "name": "Lee Cain",
        "role": "Quantity Surveyor",
        "email": "lee.cain@keltbray.com"
      },
      {
        "name": "Lee Cusworth",
        "role": "Project Manager",
        "email": "lee.cusworth@keltbray.com"
      },
      {
        "name": "Lloyd Graham",
        "role": "Community Engagement Officer",
        "email": "lloyd.graham@keltbray.com",
        "phone": "7718478285.0"
      },
      {
        "name": "Louise Pavitt",
        "role": "Projects Director",
        "email": "louise.pavitt@keltbray.com",
        "phone": "7485336423.0"
      },
      {
        "name": "Lucas Castelan",
        "role": "Project Coordinator",
        "email": "lucas.castelan@keltbray.com",
        "phone": "7568109724.0"
      },
      {
        "name": "Marius Greef",
        "role": "Contracts Manager",
        "email": "marius.greef@keltbray.com",
        "phone": "7917774593.0"
      },
      {
        "name": "Mark Nairn",
        "role": "Operations",
        "email": "mark.nairn@keltbray.com"
      },
      {
        "name": "Martin Burke",
        "role": "Projects Manager",
        "email": "martin.burke@keltbray.com",
        "phone": "7889809502.0"
      },
      {
        "name": "Martin Webb",
        "role": "Project Manager",
        "email": "martin.webb@keltbray.com",
        "phone": "7711898627.0"
      },
      {
        "name": "Mick Kelly",
        "role": "Contracts Manager",
        "email": "mick.kelly@keltbray.com",
        "phone": "7740069898.0"
      },
      {
        "name": "Nabil Soliman",
        "role": "Projects Manager",
        "email": "nabil.soliman@keltbray.com"
      },
      {
        "name": "Neil Murdoch",
        "role": "Senior Project Manager",
        "email": "neil.murdoch@keltbray.com",
        "phone": "7824461016.0"
      },
      {
        "name": "Niall Drayne",
        "role": "Project Manager",
        "email": "niall.drayne@keltbray.com",
        "phone": "7837319647.0"
      },
      {
        "name": "Nick Riches",
        "role": "Site Manager",
        "email": "nick.riches@keltbray.com",
        "phone": "7841343872.0"
      },
      {
        "name": "Nicola Hodges",
        "role": "Senior Project Manager",
        "email": "nicola.hodges@keltbray.com",
        "phone": "7702954626.0"
      }
    ]
  },
  {
    "id": 425,
    "name": "Kier Eastern Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Katie Allen",
        "email": "katie.allen@kier.co.uk"
      },
      {
        "name": "Kurtis Lee",
        "role": "Quantity Surveyor",
        "email": "kurtis.lee@kier.co.uk"
      },
      {
        "name": "Lizeth Florez",
        "role": "Architectural Designer",
        "email": "lizeth.florez@kier.co.uk"
      },
      {
        "name": "Marc Read",
        "role": "Quantity Surveyor",
        "email": "marc.read@kier.co.uk",
        "phone": "07813 365931"
      },
      {
        "name": "Mark Dady",
        "role": "Regional Manager",
        "email": "mark.dady@kier.co.uk"
      },
      {
        "name": "Nicola Piercy",
        "email": "nicola.piercy@kier.co.uk"
      },
      {
        "name": "Simon Mower",
        "role": "Contracts Manager",
        "email": "simon.mower@kier.co.uk"
      },
      {
        "name": "Thomas Parker",
        "role": "Commercial Manager",
        "email": "thomas.parker@kier.co.uk"
      },
      {
        "name": "Tom Holroyd",
        "role": "Project Manager",
        "email": "tom.holroyd@kier.co.uk"
      },
      {
        "name": "Wayne Bennison",
        "role": "Quantity Surveyor",
        "email": "wayne.bennison@kier.co.uk",
        "phone": "07805 300559"
      }
    ]
  },
  {
    "id": 426,
    "name": "Kier London Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adam Grimmond",
        "role": "Quantity Surveyor",
        "email": "adam.grimmond@kier.co.uk",
        "phone": "7791714889.0"
      },
      {
        "name": "Adrian Fennesey",
        "role": "Operations Director",
        "email": "adrian.fennesey@kier.co.uk"
      },
      {
        "name": "Ainsley Patter",
        "role": "Project Manager",
        "email": "ainslay.patter@kier.co.uk",
        "phone": "07791 719 084"
      },
      {
        "name": "Alistair St. Claire-Smith",
        "role": "Contracts Manager",
        "email": "alistair.st.claire-smith@kier.co.uk"
      },
      {
        "name": "Alistair Sinclair-Smith",
        "role": "Contract Manager",
        "email": "alistair.sinclair-smith@kier.co.uk"
      },
      {
        "name": "Allen Lewis - Williams",
        "role": "Quantity Surveyor",
        "email": "allen.lewis-williams@kier.co.uk",
        "phone": "07815 497 140"
      },
      {
        "name": "Andrea Thompson",
        "email": "andrea.thompson@kier.co.uk"
      },
      {
        "name": "Ashley Hughes",
        "role": "Mechanical Engineer",
        "email": "ashley.hughes@kier.co.uk"
      },
      {
        "name": "Chris Woods",
        "role": "Head of Operations",
        "email": "chris.woods@kier.co.uk"
      },
      {
        "name": "Colm McCabe",
        "role": "Project Manager",
        "email": "colm.mccabe@kier.co.uk",
        "phone": "07548 770083"
      },
      {
        "name": "Danny Millbury",
        "role": "Quantity Surveyor",
        "email": "danny.millbury@kier.co.uk",
        "phone": "7545052991.0"
      },
      {
        "name": "Danny Worboys",
        "role": "Electrical Engineer",
        "email": "danny.worboys@kier.co.uk"
      },
      {
        "name": "Darren Bonfield",
        "role": "Pre Construction Manager",
        "email": "darren.bonfield@kier.co.uk",
        "phone": "07748 961130"
      },
      {
        "name": "Dave Bass",
        "role": "Site Manager",
        "email": "dave.bass@kier.co.uk"
      },
      {
        "name": "David Rowsell",
        "role": "Managing Director",
        "email": "david.rowsell@kier.co.uk"
      },
      {
        "name": "Dean Probert",
        "role": "Site Manager",
        "email": "dean.probert@kier.co.uk",
        "phone": "07791 719080"
      },
      {
        "name": "Ed Dwight",
        "role": "Project Manager",
        "email": "ed.dwight@kier.co.uk",
        "phone": "7800893513.0"
      },
      {
        "name": "Elaine Ferrao",
        "role": "Site Manager",
        "email": "elaine.ferrao@kier.co.uk"
      },
      {
        "name": "Ernest Ako",
        "role": "Project Manager",
        "email": "ernest.ako@kier.co.uk",
        "phone": "7783152762.0"
      },
      {
        "name": "Ewan Hudson",
        "role": "Project Manager",
        "email": "ewan.hudson@kier.co.uk"
      },
      {
        "name": "Fred Joyce",
        "role": "Site Manager",
        "email": "fred.joyce@kier.co.uk"
      },
      {
        "name": "Gary Cutland",
        "role": "Quantity Surveyor",
        "email": "gary.cutland@kier.co.uk",
        "phone": "07850 955880"
      },
      {
        "name": "Graham Potts",
        "role": "Operations Director",
        "email": "graham.potts@kier.co.uk",
        "phone": "7980913087.0"
      },
      {
        "name": "Ivor Allcock",
        "role": "Project Manager",
        "email": "ivor.allcock@kier.co.uk",
        "phone": "07805 304948"
      },
      {
        "name": "Justin Wilson",
        "role": "Project Manager",
        "email": "justin.wilson@kier.co.uk",
        "phone": "07767 310 654"
      },
      {
        "name": "Katherine Farrell",
        "role": "Design Manager",
        "email": "katherine.farrell@kier.co.uk"
      },
      {
        "name": "Loredana Salavastru",
        "email": "loredana.salavastru@kier.co.uk"
      },
      {
        "name": "Magnus Roth",
        "role": "Site Manager",
        "email": "magnus.roth@kier.co.uk",
        "phone": "07544 163970"
      },
      {
        "name": "Marcelo Carlstrom",
        "role": "Site Manager",
        "email": "marcelo.carlstrom1@kier.co.uk",
        "phone": "07548 097806"
      },
      {
        "name": "Mark Passfield",
        "role": "Senior Project Manager",
        "email": "mark.passfield@kier.co.uk",
        "phone": "07545 057866"
      },
      {
        "name": "Matt Davis",
        "role": "Senior Project Manager",
        "email": "matt.davis@kier.co.uk",
        "phone": "07970 654983"
      },
      {
        "name": "Nick Jones",
        "role": "Construction Manager",
        "email": "nick.jones@kier.co.uk"
      },
      {
        "name": "Oliver Hind",
        "role": "Quantity Surveyor",
        "email": "oliver.hind@kier.co.uk",
        "phone": "7115242725.0"
      },
      {
        "name": "Patrick Worth",
        "role": "Quantity Surveyor",
        "email": "patrick.worth@kier.co.uk",
        "phone": "07703 150267"
      },
      {
        "name": "Paul Dennis",
        "role": "Quantity Surveyor",
        "email": "paul.dennis@kier.co.uk",
        "phone": "07813 013146"
      },
      {
        "name": "Pearse Hamilton",
        "role": "Site Manager",
        "email": "pearse.hamilton@kier.co.uk",
        "phone": "07751 746571"
      },
      {
        "name": "Peter McStay",
        "role": "Project Manager",
        "email": "peter.mcstay@kier.co.uk",
        "phone": "07768 556 280"
      },
      {
        "name": "Reece Imbert",
        "role": "Quantity Surveyor",
        "email": "reece.imbert@kier.co.uk"
      },
      {
        "name": "Richard Edge",
        "role": "Site Manager",
        "email": "richard.edge@kier.co.uk",
        "phone": "07791 719068"
      },
      {
        "name": "Richard Fisher",
        "role": "Senior Project Manager",
        "email": "richard.fisher@kier.co.uk",
        "phone": "07773 155190"
      },
      {
        "name": "Richard Lines",
        "role": "Quantity Surveyor",
        "email": "richard.lines@kier.co.uk",
        "phone": "07939 582360"
      },
      {
        "name": "Rob Walsh",
        "role": "Project Manager",
        "email": "rob.walsh@kier.co.uk"
      },
      {
        "name": "Rory McCormick",
        "role": "Design Manager",
        "email": "rory.mccormick@kier.co.uk",
        "phone": "07711 772663"
      },
      {
        "name": "Sam Lloyd",
        "role": "Quantity Surveyor",
        "email": "sam.lloyd@kier.co.uk",
        "phone": "07732 070473"
      },
      {
        "name": "Scott Cooper",
        "role": "Director",
        "email": "scott.cooper@kier.co.uk"
      },
      {
        "name": "Shaun Connlley",
        "role": "Site Manager",
        "email": "shaun.connlley@kier.co.uk"
      },
      {
        "name": "Shaun Owen",
        "role": "Senior Quantity Surveyor",
        "email": "shaun.owen@kier.co.uk",
        "phone": "07773 597663"
      },
      {
        "name": "Stephen Carey",
        "role": "Quantity Surveyor",
        "email": "stephen.carey@kier.co.uk",
        "phone": "07580 938708"
      },
      {
        "name": "Steve Herrald",
        "role": "Health and Safety Manager",
        "email": "steve.herrald@kier.co.uk"
      },
      {
        "name": "Steve Watts",
        "role": "Quantity Surveyor",
        "email": "steve.watts@kier.co.uk",
        "phone": "07724 725520"
      },
      {
        "name": "Steven Brownfield",
        "role": "Site Manager",
        "email": "steven.brownfield@kier.co.uk",
        "phone": "07711 776 056"
      },
      {
        "name": "Steven Musson",
        "role": "Project Manager",
        "email": "steven.musson@kier.co.uk",
        "phone": "07711 772668"
      },
      {
        "name": "Steven Parker",
        "role": "Senior Site Manager",
        "email": "steven.parker@kier.co.uk"
      },
      {
        "name": "Tom O'Reily",
        "role": "Contracts Manager",
        "email": "tom.oreily@kier.co.uk",
        "phone": "07514 728 159"
      },
      {
        "name": "Tom Watton",
        "role": "Senior Quantity Surveyor",
        "email": "tom.watton@kier.co.uk"
      },
      {
        "name": "Tony Shenton",
        "role": "Regional Director",
        "email": "tony.shenton@kier.co.uk"
      },
      {
        "name": "Zain Ahmed",
        "role": "Senior Site Manager",
        "email": "zain.ahmed@kier.co.uk"
      }
    ]
  },
  {
    "id": 427,
    "name": "Kilhan Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alan Smith",
        "role": "Construction Director",
        "email": "alan.smith@kilhan-construction.co.uk"
      },
      {
        "name": "Declan Kilcoyne",
        "role": "Contract Manager",
        "email": "declan@kilhan-construction.co.uk"
      },
      {
        "name": "Michael Kilcoyne",
        "role": "Director",
        "email": "michael.kilcoyne@kilhan-construction.co.uk"
      },
      {
        "name": "Michael McNamara",
        "role": "Commercial Director",
        "email": "michael.mcnamara@kilhan-construction.co.uk"
      },
      {
        "name": "Peter Conway",
        "role": "Commercial Manager",
        "email": "peter.conway@kilhan-construction.co.uk"
      },
      {
        "name": "Tom Rigley",
        "role": "Project Manager",
        "email": "tom.rigley@kilhan-construction.co.uk"
      }
    ]
  },
  {
    "id": 428,
    "name": "Kilnbridge Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Abi Fashina",
        "role": "Construction Project Manager",
        "email": "abi.fashina@kilnbridge.com"
      },
      {
        "name": "Arunas Racas",
        "role": "Project Manager",
        "email": "arunas.racas@kilnbridge.com"
      },
      {
        "name": "Clare Llewellyn",
        "email": "clare.llewellyn@kilnbridge.com"
      },
      {
        "name": "John McDaid",
        "role": "Senior Project Manager",
        "email": "john.mcdaid@kilnbridge.com"
      },
      {
        "name": "Richard Molloy",
        "role": "Project Manager",
        "email": "richard.molloy@kilnbridge.com"
      },
      {
        "name": "Jamie O'Donnell",
        "role": "Site Manager",
        "email": "jamie.odonnell@kilnbridge.com"
      }
    ]
  },
  {
    "id": 429,
    "name": "KKMG Systems Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Constantin Galba",
        "role": "Quantity Surveyor",
        "email": "constantin.galba@kkmgsystems.co.uk"
      },
      {
        "name": "Constintin Catana",
        "role": "Contracts Manager",
        "email": "constintin.catana@kkmgsystems.co.uk"
      }
    ]
  },
  {
    "id": 430,
    "name": "Knight Build Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adrian Faherty",
        "role": "Quantity Surveyor",
        "email": "adrian.faherty@knightbuild.co.uk",
        "phone": "07916 020290"
      },
      {
        "name": "Andrena Law",
        "role": "Social Value Co-Ordinator",
        "email": "andrena.law@knightbuild.co.uk"
      },
      {
        "name": "Brad Pearse",
        "role": "Quantity Surveyor",
        "email": "bradp@knightbuild.co.uk"
      },
      {
        "name": "Dominick Gallagher",
        "role": "Health and Safety Manager",
        "email": "dominick.gallagher@knightbuild.co.uk"
      },
      {
        "name": "Edward Daize",
        "role": "Director",
        "email": "edward.daize@knightbuild.co.uk"
      },
      {
        "name": "Gabriel Knight",
        "role": "Project Manager",
        "email": "gabriel.knight@knightbuild.co.uk"
      },
      {
        "name": "James Chalmers",
        "role": "Technical Director",
        "email": "james.chalmers@knightbuild.co.uk",
        "phone": "07939 015994"
      },
      {
        "name": "Mary Lynch",
        "role": "Training Manager",
        "email": "mary.lynch@knightbuild.co.uk"
      },
      {
        "name": "Neil Ross",
        "role": "Site Manager",
        "email": "neilr@knightbuild.co.uk",
        "phone": "7950235477.0"
      },
      {
        "name": "Oke Dauda",
        "role": "Quantity Surveyor",
        "email": "oke.dauda@knightbuild.co.uk",
        "phone": "7497562593.0"
      },
      {
        "name": "Oli Anthony",
        "role": "Quantity Surveyor",
        "email": "oliver.anthony@knightbuild.co.uk"
      },
      {
        "name": "Paul O'Byrne",
        "role": "Health & Safety Director",
        "email": "paul.obyrne@knightbuild.co.uk"
      },
      {
        "name": "James Chalmers",
        "role": "Technical Director",
        "email": "enquiries@knightbuild.co.uk",
        "phone": "07939 015994"
      }
    ]
  },
  {
    "id": 431,
    "name": "Konform (UK) Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alin Ababei",
        "role": "Project Manager",
        "email": "alin@konform.co.uk",
        "phone": "7472258221.0"
      },
      {
        "name": "Anthony O'Connor",
        "role": "Director",
        "email": "anthony@konform.co.uk",
        "phone": "7971285194.0"
      },
      {
        "name": "Leon O'Regan",
        "role": "Contracts Manager",
        "email": "leon@konform.co.uk"
      },
      {
        "name": "Monika Nowacka",
        "role": "Head of Finance",
        "email": "monika@konform.co.uk",
        "phone": "7753251430.0"
      },
      {
        "name": "Muhammad Farhan",
        "role": "Senior Buyer",
        "email": "buying@konform.co.uk"
      },
      {
        "name": "Paul Collins",
        "role": "Project Manager",
        "email": "paul@konform.co.uk"
      },
      {
        "name": "Reece Dangerford",
        "role": "Senior Buyer",
        "email": "reece@konform.co.uk"
      },
      {
        "name": "Sergio Roturu",
        "role": "Contracts Manager",
        "email": "sergio.roturu@konform.co.uk",
        "phone": "7859072635.0"
      },
      {
        "name": "Simon Lambourne",
        "role": "Quantity Surveyor",
        "email": "simon@konform.co.uk"
      }
    ]
  },
  {
    "id": 432,
    "name": "KRK Projects",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Joseph O'Neill",
        "role": "Director",
        "email": "joseph.oneill@krkprojects.com"
      }
    ]
  },
  {
    "id": 433,
    "name": "Laing O'Rourke Delivery Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Abir Acharjee",
        "role": "Design Manager",
        "email": "aacharjee@laingorourke.com"
      },
      {
        "name": "Adam Rigg",
        "role": "arigg@laingorourke.com"
      },
      {
        "name": "Alan Bowyer",
        "role": "Contracts Manager",
        "email": "alan.bowyer@laingorourke.com"
      },
      {
        "name": "Alex Warrington",
        "role": "Delivery Director",
        "email": "awarrington@laingorourke.com"
      },
      {
        "name": "Allan Cameron",
        "role": "Contracts Manager",
        "email": "allan.cameron@laingorourke.com"
      },
      {
        "name": "Allister Offiler",
        "role": "Project Manager",
        "email": "allister.offiler@laingorourke.com"
      },
      {
        "name": "Amy Billingham",
        "role": "Environmental Engineer",
        "email": "abillingham@laingorourke.com"
      },
      {
        "name": "Amy Latham",
        "role": "Civil Engineer",
        "email": "alatham@laingorourke.com"
      },
      {
        "name": "Anna Canetti",
        "role": "Senior Project Manager",
        "email": "acanetti@laingorourke.com"
      },
      {
        "name": "Cameron Corsby",
        "role": "Technical Lead",
        "email": "ccorsby@laingorourke.com"
      },
      {
        "name": "Charlotte Aindow",
        "role": "Quantity Surveyor",
        "email": "caindow@laingorourke.com"
      },
      {
        "name": "Conor Considine",
        "role": "Project Manager",
        "email": "cconsidine@laingorourke.com"
      },
      {
        "name": "Céire O'Rourke",
        "role": "Director",
        "email": "corourke@laingorourke.com"
      },
      {
        "name": "David Nolan",
        "role": "Commercial Manager",
        "email": "dnolan@laingorourke.com"
      },
      {
        "name": "Eddy O'Shea",
        "role": "Construction Manager",
        "email": "eoshea@laingorourke.com"
      },
      {
        "name": "Fionnuala McGowan",
        "role": "Quantity Surveyor",
        "email": "fmcgowan@laingorourke.com"
      },
      {
        "name": "Gavin Body",
        "role": "Project Leader",
        "email": "gavin.body@laingorourke.com"
      },
      {
        "name": "J Povey",
        "email": "jpovey@laingorourke.com"
      },
      {
        "name": "Jack Zickrow",
        "role": "Quantity Surveyor",
        "email": "jzickrow@laingorourke.com"
      },
      {
        "name": "James Elford",
        "role": "Project Leader",
        "email": "jelford@laingorourke.com"
      },
      {
        "name": "James Swales",
        "role": "Project Leader",
        "email": "jswales@laingorourke.com"
      },
      {
        "name": "John O'Connor",
        "role": "Director",
        "email": "joconnor@laingorourke.com"
      },
      {
        "name": "John Woodburn",
        "role": "Project Manager",
        "email": "jwoodburn@laingorourke.com"
      },
      {
        "name": "Johnathan Wake",
        "role": "Quantity Surveyor",
        "email": "jwake@laingorourke.com",
        "phone": "7471144324.0"
      },
      {
        "name": "Karen Hicks",
        "role": "Projects Manager",
        "email": "khicks@laingorourke.com"
      },
      {
        "name": "Litha Socala",
        "role": "Senior Commercial Manager",
        "email": "lsocala@laingorourke.com"
      },
      {
        "name": "Luke Carberry",
        "role": "Quantity Surveyor",
        "email": "lcarberry@laingorourke.com"
      },
      {
        "name": "Marco Ilievski",
        "role": "Project Manager",
        "email": "milievski@laingorourke.com",
        "phone": "7384457116.0"
      },
      {
        "name": "Mark Mulholland",
        "role": "Senior Project Leader",
        "email": "mmulholland@laingorourke.com",
        "phone": "7918360724.0"
      },
      {
        "name": "Mark Richardson",
        "role": "Human Resource Director",
        "email": "mrichardson@laingorourke.com"
      },
      {
        "name": "Mark Savage",
        "email": "msavage@laingorourke.com"
      },
      {
        "name": "Martin Staehr",
        "role": "Business Unit Manager",
        "email": "mstaehr@laingorourke.com"
      }
    ]
  },
  {
    "id": 434,
    "name": "Landform Consultants Limited",
    "disciplines": [
      "Landscaping"
    ],
    "contacts": [
      {
        "name": "Andrew Hicks",
        "role": "Managing Director",
        "email": "andrew.hicks@landformconsultants.co.uk"
      },
      {
        "name": "Daniel Clarke",
        "role": "Contracts Manager",
        "email": "daniel.clarke@landformconsultants.co.uk"
      },
      {
        "name": "James Carter",
        "role": "Project Manager",
        "email": "james.carter@landformconsultants.co.uk"
      },
      {
        "name": "Mark Foster",
        "role": "Commercial Manager",
        "email": "mark.foster@landformconsultants.co.uk"
      }
    ]
  },
  {
    "id": 435,
    "name": "Landmark Brickwork",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "John Vincent",
        "role": "Contracts Director",
        "email": "john.vincent@landmarkbrickwork.co.uk"
      },
      {
        "name": "Jason Bates",
        "role": "Commercial Manager",
        "email": "jason.bates@landmarkbrickwork.co.uk"
      },
      {
        "name": "Geoff Seaforth",
        "role": "Contracts Manager",
        "email": "geoff.seaforth@landmarkbrickwork.co.uk"
      },
      {
        "name": "John Doherty",
        "role": "Contracts Manager",
        "email": "john.doherty@landmarkbrickwork.co.uk",
        "phone": "07860 140380"
      },
      {
        "name": "Ryan Ward",
        "role": "Project Manager",
        "email": "ryan.ward@landmarkbrickwork.co.uk"
      }
    ]
  },
  {
    "id": 436,
    "name": "Landmark Brickwork Limited",
    "disciplines": [
      "Brickwork"
    ],
    "contacts": [
      {
        "name": "Christopher Cockram",
        "role": "Supervisor",
        "email": "christopher.cockram@landmarkbrickwork.co.uk"
      },
      {
        "name": "Geoff Seaforth",
        "role": "Contracts Manager",
        "email": "geoff.seaforth@landmarkbrickwork.co.uk"
      },
      {
        "name": "Jason Bates",
        "role": "Commercial Manager",
        "email": "jason.bates@landmarkbrickwork.co.uk"
      },
      {
        "name": "John Doherty",
        "role": "Contracts Manager",
        "email": "john.doherty@landmarkbrickwork.co.uk",
        "phone": "07860 140380"
      },
      {
        "name": "John Lawler",
        "role": "Site Supervisor",
        "email": "john.lawler@landmarkbrickwork.co.uk"
      },
      {
        "name": "John Vincent",
        "role": "Contracts Director",
        "email": "john.vincent@landmarkbrickwork.co.uk"
      },
      {
        "name": "Ryan Ward",
        "role": "Project Manager",
        "email": "ryan.ward@landmarkbrickwork.co.uk"
      }
    ]
  },
  {
    "id": 437,
    "name": "LBT Brick & Facades Limited",
    "disciplines": [
      "Facades & Cladding"
    ],
    "contacts": [
      {
        "name": "Christian Ferguson",
        "email": "sales@lbtfacades.co.uk",
        "phone": "07824 698543"
      },
      {
        "name": "Eva Benesova",
        "role": "Business Development Associate",
        "email": "eva.benesova@lbtfacades.com"
      },
      {
        "name": "Ian Shard",
        "role": "Managing Director",
        "email": "ian.shard@lbtfacades.com"
      },
      {
        "name": "Saleem Hussain",
        "role": "Sales Executive",
        "email": "saleem.hussain@lbtfacades.com"
      },
      {
        "name": "Steven Leggott",
        "role": "Commercial Manager",
        "email": "steven.leggott@lbtfacades.com",
        "phone": "07947 838394"
      }
    ]
  },
  {
    "id": 438,
    "name": "Lee Marley",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Dan Clarkson",
        "role": "Managing Director",
        "email": "dan@leemarley.com",
        "phone": "07976 763922"
      },
      {
        "name": "Lee Marley",
        "role": "Managing Director",
        "email": "lee@leemarley.com"
      },
      {
        "name": "Arthur Cunningham",
        "role": "Contracts Director",
        "email": "arthur.cunningham@leemarley.com",
        "phone": "07809 412183"
      },
      {
        "name": "Nick Boulton",
        "role": "Associate Director",
        "email": "nick@leemarley.com"
      },
      {
        "name": "Craig Irwan",
        "role": "Contracts Manager",
        "email": "craig@leemarley.com"
      },
      {
        "name": "Duncan Marley",
        "role": "Contracts Manager",
        "email": "duncan@leemarley.com"
      },
      {
        "name": "Dave Wheelan",
        "role": "Contract Manager",
        "email": "dave.wheelan@leemarley.com",
        "phone": "07961 279931"
      },
      {
        "name": "Josh Dearlove",
        "role": "Contracts Manager",
        "email": "josh.dearlove@leemarley.com",
        "phone": "07711 558488"
      },
      {
        "name": "Liam Corbet",
        "role": "Contract Manager",
        "email": "liam.corbet@leemarley.com"
      },
      {
        "name": "Shawn Richardson",
        "role": "Contract Manager",
        "email": "shawn.richardson@leemarley.com",
        "phone": "07860 175998"
      },
      {
        "name": "Tom Jeffcott",
        "role": "Contracts Manager",
        "email": "tom.jeffcott@leemarley.com",
        "phone": "07775 788648"
      },
      {
        "name": "Ben Adams",
        "role": "Quantity Surveyor",
        "email": "ben@leemarley.com"
      },
      {
        "name": "Daniela Fetcu",
        "role": "Quantity Surveyor",
        "email": "daniela@leemarley.com"
      },
      {
        "name": "Jamie Shaw",
        "role": "Quantity Surveyor",
        "email": "jamie@leemarley.com",
        "phone": "07725 630038"
      },
      {
        "name": "Matthew Ducatel",
        "role": "Quantity Surveyor",
        "email": "matthew.ducatel@leemarley.com"
      },
      {
        "name": "Tanya Hamilton",
        "role": "Quantity Surveyor",
        "email": "tanya.hamilton@leemarley.com"
      }
    ]
  },
  {
    "id": 439,
    "name": "Lee Marley Brickwork Limited",
    "disciplines": [
      "Brickwork"
    ],
    "contacts": [
      {
        "name": "Arthur Cunningham",
        "role": "Contracts Director",
        "email": "arthur.cunningham@leemarley.com",
        "phone": "07809 412183"
      },
      {
        "name": "Ben Adams",
        "role": "Quantity Surveyor",
        "email": "ben@leemarley.com"
      },
      {
        "name": "Chris Raymond",
        "role": "Site Supervisor",
        "email": "chris@leemarley.com"
      },
      {
        "name": "Chris Rotchell",
        "role": "Project Manager",
        "email": "chris.rotchell@leemarley.com"
      },
      {
        "name": "Craig Irwan",
        "role": "Contracts Manager",
        "email": "craig@leemarley.com"
      },
      {
        "name": "Craig Livingston",
        "role": "Contracts Manager",
        "email": "craig.livingston@leemarley.com"
      },
      {
        "name": "Dan Clarkson",
        "role": "Managing Director",
        "email": "dan@leemarley.com",
        "phone": "07976 763922"
      },
      {
        "name": "Daniela Fetcu",
        "role": "Quantity Surveyor",
        "email": "daniela@leemarley.com"
      },
      {
        "name": "Daniella Percioga",
        "role": "Quantity Surveyor",
        "email": "daniella.percioga@leemarley.com"
      },
      {
        "name": "Dave Whealan",
        "role": "Contract Manager",
        "email": "dave.wheelan@leemarley.com",
        "phone": "07961 279931"
      },
      {
        "name": "Duncan Marley",
        "role": "Contracts Manager",
        "email": "duncan@leemarley.com"
      },
      {
        "name": "James Frost",
        "role": "Assistant Quantity Surveyor",
        "email": "james.frost@leemarley.com"
      },
      {
        "name": "Jamie Shaw",
        "role": "Quantity Surveyor",
        "email": "jamie@leemarley.com",
        "phone": "07725 630038"
      },
      {
        "name": "Josh Dearlove",
        "role": "Contracts Manager",
        "email": "josh.dearlove@leemarley.com",
        "phone": "07711 558488"
      },
      {
        "name": "Lee Marley",
        "role": "Managing Director",
        "email": "lee@leemarley.com"
      },
      {
        "name": "Liam Corbet",
        "role": "Contract Manager",
        "email": "liam.corbet@leemarley.com"
      },
      {
        "name": "Matthew Ducatel",
        "role": "Quantity Surveyor",
        "email": "matthew.ducatel@leemarley.com"
      },
      {
        "name": "Nick Boulton",
        "role": "Associate Director",
        "email": "nick@leemarley.com"
      },
      {
        "name": "Paul Pearston",
        "role": "Supervisor",
        "email": "paul.pearston@leemarley.com"
      },
      {
        "name": "Robert Bertram",
        "role": "Site Manager",
        "email": "robert.bertram@leemarley.com",
        "phone": "07477 096415"
      },
      {
        "name": "Sam Styles",
        "role": "Site Manager",
        "email": "sam.styles@leemarley.com",
        "phone": "07548 351378"
      },
      {
        "name": "Shawn Richardson",
        "role": "Contract Manager",
        "email": "shawn.richardson@leemarley.com",
        "phone": "07860 175998"
      },
      {
        "name": "Stevie White",
        "role": "Site Manager",
        "email": "stevie.white@leemarley.com"
      },
      {
        "name": "Tanya Hamilton",
        "role": "Quantity Surveyor",
        "email": "tanya.hamilton@leemarley.com"
      },
      {
        "name": "Tom Jeffcott",
        "role": "Contracts Manager",
        "email": "tom.jeffcott@leemarley.com",
        "phone": "07775 788648"
      },
      {
        "name": "Ben Plumridge",
        "role": "Commercial Manager",
        "email": "ben.plumridge@leemarley.com"
      },
      {
        "name": "Chris Hall",
        "role": "Contracts Manager",
        "email": "chris.hall@leemarley.com"
      },
      {
        "name": "Daniel Ryan",
        "role": "Project Manager",
        "email": "daniel.ryan@leemarley.com"
      },
      {
        "name": "Darren Maguire",
        "role": "Commercial Director",
        "email": "darren.maguire@leemarley.com"
      },
      {
        "name": "Gavin Barry",
        "role": "Contracts Manager",
        "email": "gavin.barry@leemarley.com"
      },
      {
        "name": "Jamie Gorman",
        "role": "Quantity Surveyor",
        "email": "jamie.gorman@leemarley.com"
      },
      {
        "name": "John Daly",
        "role": "Project Director",
        "email": "john.daly@leemarley.com"
      },
      {
        "name": "Mark Lacey",
        "role": "Contracts Manager",
        "email": "mark.lacey@leemarley.com"
      },
      {
        "name": "Paul Morrissey",
        "role": "Managing Director",
        "email": "paul.morrissey@leemarley.com"
      },
      {
        "name": "Sean O'Brien",
        "role": "Commercial Manager",
        "email": "sean.obrien@leemarley.com"
      },
      {
        "name": "Stephen Burke",
        "role": "Quantity Surveyor",
        "email": "stephen.burke@leemarley.com"
      }
    ]
  },
  {
    "id": 440,
    "name": "Leidon Civil Engineering Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adrian Dima",
        "role": "Site Foreman",
        "email": "adrian.dima@leidon.co.uk"
      },
      {
        "name": "David Manlone",
        "role": "Contracts Manager",
        "email": "david.manlone@leidon.co.uk"
      },
      {
        "name": "Julian Bulubenchi",
        "role": "Site Manager",
        "email": "julian.bulubenchi@leidon.co.uk"
      },
      {
        "name": "Mark Langham",
        "role": "Quantity Surveyor",
        "email": "mark.langham@leidon.co.uk"
      },
      {
        "name": "Michael Healey",
        "role": "Project Manager",
        "email": "michael.healey@leidon.co.uk"
      },
      {
        "name": "Pauric Kerrigan",
        "role": "Director",
        "email": "pauric.kerrigan@leidon.co.uk",
        "phone": "7572689100.0"
      },
      {
        "name": "Tony Woodley",
        "role": "Project Manager",
        "email": "tony.woodley@leidon.co.uk",
        "phone": "7976686730.0"
      },
      {
        "name": "Adrian Dima",
        "role": "Site Foreman",
        "email": "info@leidon.co.uk"
      },
      {
        "name": "Pauric Kerrigan",
        "role": "Director",
        "email": "pauric.kerrigan@hotmail.com",
        "phone": "07572 689100"
      }
    ]
  },
  {
    "id": 441,
    "name": "Lemon Groundwork Supplies",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Neil Fuller",
        "role": "Project Manager",
        "email": "neil.fuller@lemon-gs.co.uk"
      }
    ]
  },
  {
    "id": 442,
    "name": "Levismar Formwork & Groundwork Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Marius Astefanoaie",
        "role": "Operations Director",
        "email": "marius.p@levismar.co.uk",
        "phone": "7388653019.0"
      },
      {
        "name": "Marius Avram",
        "role": "Director",
        "email": "marius@levismar.co.uk",
        "phone": "7576245230.0"
      }
    ]
  },
  {
    "id": 443,
    "name": "LIFE Build Solutions Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alan Vaux",
        "role": "Construction Director",
        "email": "alan.vaux@lifebuild.co.uk"
      },
      {
        "name": "Alex Wilde",
        "role": "Quantity Surveyor",
        "email": "alex.wilde@lifebuild.co.uk",
        "phone": "7570387028.0"
      },
      {
        "name": "Andrew Gullet",
        "role": "Project Manager",
        "email": "andrew.gullet@lifebuild.co.uk"
      },
      {
        "name": "Antony Raine",
        "role": "Quantity Surveyor",
        "email": "antony.raine@lifebuild.co.uk",
        "phone": "7792137417.0"
      },
      {
        "name": "Bill Prosser",
        "role": "Project Manager",
        "email": "bill.prosser@lifebuild.co.uk"
      },
      {
        "name": "Chris Lane",
        "role": "Quantity Surveyor",
        "email": "chris.lane@lifebuild.co.uk"
      },
      {
        "name": "Dave Waters",
        "role": "Project Manager",
        "email": "dave.waters@lifebuild.co.uk"
      },
      {
        "name": "David Harper",
        "role": "Project Manager",
        "email": "david.harper@lifebuild.co.uk"
      },
      {
        "name": "David Moran",
        "email": "david.moran@lifebuild.co.uk",
        "phone": "7917903314.0"
      },
      {
        "name": "Edward Nolan",
        "role": "Estimator",
        "email": "edward.nolan@lifebuild.co.uk"
      },
      {
        "name": "Ian Carpenter",
        "role": "Quantity Surveyor",
        "email": "ian.carpenter@lifebuild.co.uk",
        "phone": "7920072896.0"
      },
      {
        "name": "James Cole",
        "role": "Quantity Surveyor",
        "email": "james.cole@lifebuild.co.uk"
      },
      {
        "name": "John Gregorowski",
        "role": "Site Manager",
        "email": "john.gregorowski@lifebuild.co.uk"
      },
      {
        "name": "John Stevens",
        "role": "Contracts Manager",
        "email": "john.stevens@lifebuild.co.uk"
      },
      {
        "name": "Jonathan Sacree",
        "role": "Contract Manager",
        "email": "jonathan.sacree@lifebuild.co.uk"
      },
      {
        "name": "Kevin Barnes",
        "role": "Buyer",
        "email": "kevin.barnes@lifebuild.co.uk"
      },
      {
        "name": "Kevin Edge",
        "role": "Quantity Surveyor",
        "email": "kevin.edge@lifebuild.co.uk"
      },
      {
        "name": "Martin Brackpool",
        "role": "Development Director",
        "email": "martin.brackpool@lifebuild.co.uk",
        "phone": "7808920293.0"
      },
      {
        "name": "Michael Wilde",
        "role": "Operations Director",
        "email": "mike.wilde@lifebuild.co.uk"
      },
      {
        "name": "Paul Bartholomew",
        "role": "Contract Manager",
        "email": "paul.bartholomew@lifebuild.co.uk"
      },
      {
        "name": "Paul Hubbins",
        "role": "Quantity Surveyor",
        "email": "paul.hubbins@lifebuild.co.uk"
      },
      {
        "name": "Peter Vinter",
        "role": "Design Manager",
        "email": "peter.vinter@lifebuild.co.uk"
      },
      {
        "name": "Ric Thornhill",
        "role": "Contracts Manager",
        "email": "ric.thornhill@lifebuild.co.uk"
      },
      {
        "name": "Richard Johnson",
        "email": "richard.johnson@lifebuild.co.uk"
      },
      {
        "name": "Rob Sweeney",
        "role": "Quantity Surveyor",
        "email": "rob.sweeney@lifebuild.co.uk"
      },
      {
        "name": "Simon Jewell",
        "role": "Operations Director",
        "email": "simon.jewell@lifebuild.co.uk"
      },
      {
        "name": "Steve Cutler",
        "role": "Contracts Manager",
        "email": "steve.cutler@lifebuild.co.uk"
      },
      {
        "name": "Steven Jarvis",
        "role": "Estimator",
        "email": "steven.jarvis@lifebuild.co.uk",
        "phone": "7774421228.0"
      },
      {
        "name": "William McCausland",
        "role": "Quantity Surveyor",
        "email": "william.mccausland@lifebuild.co.uk"
      }
    ]
  },
  {
    "id": 444,
    "name": "Lindner Prater Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Aaron Hill",
        "role": "Contracts Manager",
        "email": "aaron.hill@prater.co.uk"
      },
      {
        "name": "Alfie Higgins",
        "role": "Project Manager",
        "email": "ahiggins@prater.co.uk"
      },
      {
        "name": "Chris Roberts",
        "role": "Commercial Director",
        "email": "croberts@prater.co.uk"
      },
      {
        "name": "David Hawkins",
        "role": "Quantity Surveyor",
        "email": "david.hawkins@prater.co.uk"
      },
      {
        "name": "Duncan Hankins",
        "role": "Project Manager",
        "email": "duncan.hankins@prater.co.uk"
      },
      {
        "name": "Emma Stephenson",
        "role": "Buyer",
        "email": "emma.stephenson@prater.co.uk"
      },
      {
        "name": "Eugen Kassier",
        "role": "Contracts Manager",
        "email": "eugen.kassier@prater.co.uk"
      },
      {
        "name": "Gavin Hamblett",
        "role": "Pre Construction Director",
        "email": "ghamblett@prater.co.uk",
        "phone": "07976 350905"
      },
      {
        "name": "Gavin Swanson",
        "role": "Project Manager",
        "email": "gavin.swanson@prater.co.uk"
      },
      {
        "name": "Gerry Millen",
        "role": "Contracts Manager",
        "email": "gerry.millen@prater.co.uk"
      },
      {
        "name": "James Finlason",
        "role": "Project Director",
        "email": "james.finlason@prater.co.uk"
      },
      {
        "name": "Jayne Smith",
        "role": "Operations",
        "email": "jsmith@prater.co.uk"
      },
      {
        "name": "Kevin Nicholson",
        "role": "Commercial Manager",
        "email": "kevin.nicholson@prater.co.uk"
      },
      {
        "name": "Kevin Smith",
        "role": "Associate Director",
        "email": "ksmith@prater.co.uk",
        "phone": "7899657902.0"
      },
      {
        "name": "Laura Pole",
        "role": "Administrator",
        "email": "lpole@prater.co.uk"
      },
      {
        "name": "Leyton Morris",
        "role": "Project Manager",
        "email": "leyton.morris@prater.co.uk"
      },
      {
        "name": "Luis Teixeira",
        "role": "Project Manager",
        "email": "luis.teixeira@prater.co.uk"
      },
      {
        "name": "Marcus Frost",
        "role": "Quantity Surveyor",
        "email": "marcus.frost@prater.co.uk"
      },
      {
        "name": "Mark Donoghue",
        "role": "Project Manager",
        "email": "mark.donoghue@prater.co.uk"
      },
      {
        "name": "Mark Porton",
        "role": "Project Manager",
        "email": "mark.porton@prater.co.uk"
      },
      {
        "name": "Martin Bond",
        "role": "Contracts Manager",
        "email": "mbond@prater.co.uk"
      },
      {
        "name": "Mike Drumgoole",
        "role": "Commercial Director",
        "email": "mdrumgoole@prater.co.uk"
      },
      {
        "name": "Mike Goddard",
        "role": "Pre Contracts Manager",
        "email": "mike.goddard@prater.co.uk"
      },
      {
        "name": "Nathan Atkins",
        "role": "Buyer",
        "email": "nathan.atkins@prater.co.uk"
      },
      {
        "name": "Paul Finch",
        "role": "Project Manager",
        "email": "paul.finch@prater.co.uk"
      },
      {
        "name": "Paul Nelson",
        "role": "Project Manager",
        "email": "pnelson@prater.co.uk",
        "phone": "07748 335161"
      },
      {
        "name": "Steve Glasgow",
        "role": "Site Construction Manager",
        "email": "sglasgow@prater.co.uk"
      },
      {
        "name": "Tony Bruce",
        "role": "Project Manager",
        "email": "tony.bruce@prater.co.uk"
      },
      {
        "name": "Duncan Hankins",
        "role": "duncan.hankins@prater.co.uk"
      },
      {
        "name": "Gavin Swanson",
        "role": "gavin.swanson@prater.co.uk"
      },
      {
        "name": "Mark Porton",
        "role": "mark.porton@prater.co.uk"
      },
      {
        "name": "Tony Bruce",
        "role": "tony.bruce@prater.co.uk"
      },
      {
        "name": "Aaron Hill",
        "role": "Contracts Manager",
        "email": "enquiries@lindner-group.com"
      }
    ]
  },
  {
    "id": 445,
    "name": "Lit Construction",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Laimonas Sirmenis",
        "role": "Director",
        "email": "l.sirmenis@litconstructiongroup.co.uk",
        "phone": "07769 896229"
      }
    ]
  },
  {
    "id": 446,
    "name": "LIT Construction Group",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Laimonas Sirmenis",
        "role": "Director",
        "email": "l.sirmenis@litconstructiongroup.co.uk",
        "phone": "07769 896229"
      }
    ]
  },
  {
    "id": 447,
    "name": "LMH Civil Engineering Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "John Elmer",
        "role": "Quantity Surveyor",
        "email": "john@lmhcivil.co.uk"
      },
      {
        "name": "Martin McHugh",
        "role": "Quantity Surveyor",
        "email": "martin@lmhcivil.co.uk"
      },
      {
        "name": "Matthew Bass",
        "role": "Project Manager",
        "email": "matthew@lmhcivil.co.uk"
      }
    ]
  },
  {
    "id": 448,
    "name": "LNT Care Developments Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adeel Bashir",
        "email": "adeel.bashir@lntcaredevelopments.co.uk"
      },
      {
        "name": "Alex Robinson",
        "role": "Planner",
        "email": "alex.robinson@lntconstruction.co.uk"
      },
      {
        "name": "Alistair Wood",
        "role": "Managing Director",
        "email": "alistair.wood@lntconstruction.co.uk"
      },
      {
        "name": "Andrew Taylor",
        "role": "Mechanical & Electrical Manager",
        "email": "andrew.taylor@lntcaredevelopments.co.uk"
      },
      {
        "name": "Anthony Thompson",
        "role": "Commercial Manager",
        "email": "anthony.thompson@lntconstruction.co.uk",
        "phone": "7971375117.0"
      },
      {
        "name": "Brandon Hall",
        "role": "Senior Land Manager",
        "email": "brandon.hall@lntcaredevelopments.co.uk"
      },
      {
        "name": "Brian Diamond",
        "role": "Planner",
        "email": "brian.diamond@lntcaredevelopments.co.uk"
      },
      {
        "name": "Charlie Gray",
        "role": "Commercial Director",
        "email": "charlie.gray@lntcaredevelopments.co.uk"
      },
      {
        "name": "Charlie Newton",
        "role": "Senior Land Manager",
        "email": "charlie.newton@lntcaredevelopments.co.uk"
      },
      {
        "name": "Chris Appleton-Wood",
        "role": "Land Director",
        "email": "chris.appleton@lntcaredevelopments.co.uk"
      },
      {
        "name": "Chris Murphy",
        "role": "Site Manager",
        "email": "chris.murphy@lntconstruction.co.uk"
      },
      {
        "name": "Claire Howes",
        "role": "Senior Planning Manager",
        "email": "claire.howes@lntconstruction.co.uk",
        "phone": "7976397819.0"
      },
      {
        "name": "Daniel Banks",
        "role": "Site Manager",
        "email": "daniel.banks@lntconstruction.co.uk",
        "phone": "7516029515.0"
      },
      {
        "name": "Daniel Dennis",
        "role": "Site Manager",
        "email": "daniel.dennis@lntcaredevelopments.co.uk",
        "phone": "7808187178.0"
      },
      {
        "name": "David Brewster",
        "role": "Planner",
        "email": "david.brewster@lntcaredevelopments.co.uk"
      },
      {
        "name": "Emily Collard",
        "role": "Land Acquisitions Assistant",
        "email": "emily.collard@lntcaredevelopments.co.uk"
      },
      {
        "name": "Gary Little",
        "role": "Head of Pre-Construction",
        "email": "gary.little@lntconstruction.co.uk"
      },
      {
        "name": "George Cockford",
        "role": "Construction Director",
        "email": "george.cockford@lntcaredevelopments.co.uk",
        "phone": "7880230558.0"
      },
      {
        "name": "Gerry Bark",
        "role": "Pre Construction Manager",
        "email": "gerry@lntconstruction.co.uk"
      },
      {
        "name": "Graham Booth",
        "role": "Architect",
        "email": "graham.booth@lntgroup.co.uk"
      },
      {
        "name": "Graham Frost",
        "role": "Site Manager",
        "email": "graham.frost@lntcaredevelopments.co.uk"
      },
      {
        "name": "Hannah Robinson",
        "role": "Land Director",
        "email": "hannah.robinson@lntcaredevelopments.co.uk"
      },
      {
        "name": "Harry Hepple",
        "role": "Land Director",
        "email": "harry.hepple@lntcaredevelopments.co.uk"
      },
      {
        "name": "Heidi Boot",
        "role": "Planner",
        "email": "heidi.boot@lntcaredevelopments.co.uk"
      },
      {
        "name": "James Flynn",
        "role": "Planner",
        "email": "james.flynn@lntcaredevelopments.co.uk"
      },
      {
        "name": "James Hare",
        "role": "Land Director",
        "email": "james.hare@lntcaredevelopments.co.uk"
      },
      {
        "name": "James Tates",
        "role": "Contracts Manager",
        "email": "james.tates@lntcaredevelopments.co.uk"
      },
      {
        "name": "Jessica Green",
        "role": "Land Buyer",
        "email": "jessica.green@lntcaredevelopments.co.uk"
      },
      {
        "name": "Jessica Stoors",
        "role": "Architectural Technician",
        "email": "jessica@lntconstruction.co.uk"
      },
      {
        "name": "Jo Kemp",
        "role": "Planning Manager",
        "email": "jo.kemp@lntconstruction.co.uk"
      },
      {
        "name": "Keeley Sharp",
        "role": "Strategic Land Director",
        "email": "keeley.sharp@lntcaredevelopments.co.uk"
      },
      {
        "name": "Levi Chambers",
        "role": "Site Manager",
        "email": "levi.chambers@lntcaredevelopments.co.uk",
        "phone": "7516029510.0"
      },
      {
        "name": "Louise Hayden",
        "email": "louise.hayden@lntcaredevelopments.co.uk",
        "phone": "7541688533.0"
      },
      {
        "name": "Luke Thorpe",
        "role": "Planning Manager",
        "email": "luke.thorpe@lntconstruction.co.uk"
      },
      {
        "name": "Mark Speight",
        "role": "Construction Director",
        "email": "mark.speight@lntconstruction.co.uk",
        "phone": "7792920350.0"
      },
      {
        "name": "Nick Broadbent",
        "role": "Development Director",
        "email": "nick.broadbent@lntgroup.co.uk",
        "phone": "7515587364.0"
      },
      {
        "name": "Peter Mortimer",
        "role": "Construction Director",
        "email": "peter.mortimer@lntconstruction.co.uk"
      },
      {
        "name": "Philip Raven",
        "role": "Director",
        "email": "philip.raven@lntcaredevelopments.co.uk"
      },
      {
        "name": "Samuel Finlay",
        "role": "Planning Manager",
        "email": "samuel.finlay@lntconstruction.co.uk",
        "phone": "7547105176.0"
      },
      {
        "name": "Thomas Davidson",
        "role": "Planner",
        "email": "thomas@lntconstruction.co.uk"
      },
      {
        "name": "Tracey Kay",
        "role": "Planner",
        "email": "tracey.kay@lntconstruction.co.uk"
      },
      {
        "name": "Tracey Spencer",
        "role": "Senior Planning Manager",
        "email": "tracey.spencer@lntcaredevelopments.co.uk"
      },
      {
        "name": "Zeb Massey",
        "role": "Site Manager",
        "email": "zeb.massey@lntconstruction.co.uk"
      }
    ]
  },
  {
    "id": 449,
    "name": "London Diamond Drilling",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Brendan Charnley",
        "role": "Technician",
        "email": "brendan@lddgroup.co.uk"
      },
      {
        "name": "Paul Turner",
        "role": "Contracts Manager",
        "email": "paul@lddgroup.co.uk"
      },
      {
        "name": "Trevor Meierhofer",
        "role": "Owner",
        "email": "trevor@lddgroup.co.uk"
      }
    ]
  },
  {
    "id": 450,
    "name": "LPL Construction Services",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Brendan Corr",
        "role": "Managing Director",
        "email": "brendan@lplcs.com"
      },
      {
        "name": "Chris Curk",
        "role": "Director",
        "email": "chris.curk@lplcs.com"
      },
      {
        "name": "Elizabeth Venville",
        "role": "Buyer",
        "email": "elizabeth@lplcs.com"
      },
      {
        "name": "Frank Jarvis",
        "role": "Construction Manager",
        "email": "frank@lplcs.com"
      },
      {
        "name": "Jake Chapman",
        "role": "Quantity Surveyor",
        "email": "jakec@lplcs.com",
        "phone": "7920524307.0"
      },
      {
        "name": "Mark Lipman",
        "role": "Procurement Manager",
        "email": "mark.lipman@lplcs.com"
      }
    ]
  },
  {
    "id": 451,
    "name": "Lyons & Annoot Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Nito Morelli",
        "role": "Managing Director",
        "email": "nito@lyonsannoot.co.uk"
      },
      {
        "name": "Rokas Sakalas",
        "role": "Senior Project Manager",
        "email": "build@lyonsannoot.co.uk"
      },
      {
        "name": "Simon Shipley",
        "role": "Buyer",
        "email": "simon@lyonsannoot.co.uk"
      },
      {
        "name": "Ziggy Vaughan",
        "role": "Project Manager",
        "email": "ziggy@lyonsannoot.co.uk"
      }
    ]
  },
  {
    "id": 452,
    "name": "M & J Evans Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adam Dagnall",
        "role": "Contracts Manager",
        "email": "adam.dagnall@mjevansconstruction.co.uk"
      },
      {
        "name": "Adam Walker",
        "role": "Director",
        "email": "adam.walker@mjevansconstruction.co.uk"
      },
      {
        "name": "Adrian Norman",
        "role": "Director",
        "email": "adrian@mjevansconstruction.co.uk"
      },
      {
        "name": "Alan Coales",
        "role": "Contracts Manager",
        "email": "alan.coales@mjevansconstruction.co.uk"
      },
      {
        "name": "Alex Clack",
        "role": "Commercial Director",
        "email": "alex.clack@mjevansconstruction.co.uk"
      },
      {
        "name": "Andy Stockford",
        "role": "Contracts Director",
        "email": "andy.stockford@mjevansconstruction.co.uk"
      },
      {
        "name": "Ashley Ellis",
        "role": "Buyer",
        "email": "ashley.ellis@mjevansconstruction.co.uk"
      },
      {
        "name": "Bethany Collins",
        "role": "Buyer",
        "email": "bethany.collins@mjevansconstruction.co.uk"
      },
      {
        "name": "Brendan Ryan",
        "role": "Site Manager",
        "email": "brendan@mjevansconstruction.co.uk",
        "phone": "07929 669529"
      },
      {
        "name": "Callum Winn",
        "role": "Quantity Surveyor",
        "email": "callum.winn@mjevansconstruction.co.uk"
      },
      {
        "name": "Chris Gillen",
        "role": "Quantity Surveyor",
        "email": "chris.gillen@mjevansconstruction.co.uk",
        "phone": "07929 850 301"
      },
      {
        "name": "Cormac Flanagan",
        "role": "Quantity Surveyor",
        "email": "cormac.flanagan@mjevansconstruction.co.uk"
      },
      {
        "name": "Damien Boyle",
        "role": "Managing Director",
        "email": "damien.boyle@mjevansconstruction.co.uk",
        "phone": "07866 987 633"
      },
      {
        "name": "Danny Walker",
        "role": "Contracts Director",
        "email": "danny.walker@mjevansconstruction.co.uk"
      },
      {
        "name": "David Coales",
        "role": "Contracts Director",
        "email": "david.coales@mjevansconstruction.co.uk"
      },
      {
        "name": "Ethan Melia",
        "role": "Quantity Surveyor",
        "email": "ethan.melia@mjevansconstruction.co.uk"
      },
      {
        "name": "Gerard O'Brien",
        "role": "Contracts Manager",
        "email": "gerard@mjevansconstruction.co.uk",
        "phone": "7971101281.0"
      },
      {
        "name": "Joe McPartlan",
        "role": "Construction Director",
        "email": "joe.mcpartlan@mjevansconstruction.co.uk"
      },
      {
        "name": "Kevin Hoyland",
        "role": "Contracts Manager",
        "email": "kevin.hoyland@mjevansconstruction.co.uk"
      },
      {
        "name": "Lee Kelly",
        "role": "Commercial Director",
        "email": "lee.kelly@mjevansconstruction.co.uk"
      },
      {
        "name": "Louie Barley",
        "role": "Estimating Manager",
        "email": "louie.barley@mjevansconstruction.co.uk"
      },
      {
        "name": "Luke Eagle",
        "role": "Quantity Surveyor",
        "email": "luke.eagle@mjevansconstruction.co.uk"
      },
      {
        "name": "Luke Harris",
        "role": "Site Foreman",
        "email": "luke.harris@mjevansconstruction.co.uk"
      },
      {
        "name": "Mark Goulding",
        "role": "Contract Manager",
        "email": "mark@mjevansconstruction.co.uk",
        "phone": "07971 064 576"
      },
      {
        "name": "Matt Goodwin",
        "role": "Contracts Manager",
        "email": "matt.goodwin@mjevansconstruction.co.uk"
      },
      {
        "name": "Matt Jenkinson",
        "role": "Buyer",
        "email": "matt.jenkinson@mjevansconstruction.co.uk"
      },
      {
        "name": "Matt Smith",
        "role": "Project Manager",
        "email": "matt.smith@mjevansconstruction.co.uk"
      },
      {
        "name": "Steve Crawford",
        "role": "Contracts Manager",
        "email": "steve@mjevansconstruction.co.uk"
      },
      {
        "name": "Thomas Sandals",
        "role": "Contracts Manager",
        "email": "thomas.sandals@mjevansconstruction.co.uk"
      },
      {
        "name": "Tim Mason",
        "role": "Managing Director",
        "email": "tim.mason@mjevansconstruction.co.uk"
      },
      {
        "name": "Tom Brabazon",
        "role": "Commercial Director",
        "email": "tom.brabazon@mjevansconstruction.co.uk"
      },
      {
        "name": "Alan Coales",
        "role": "Contracts Manager",
        "email": "sales@mjevansconstruction.co.uk",
        "phone": "07866 987633"
      }
    ]
  },
  {
    "id": 453,
    "name": "M Group (Services) Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adam Watts",
        "role": "Manager",
        "email": "adam.watts@milestoneinfra.co.uk"
      },
      {
        "name": "Angus Clow",
        "role": "Principal Engineer",
        "email": "angus.clow@milestoneinfra.co.uk",
        "phone": "07881 341791"
      },
      {
        "name": "Anne Roberts",
        "role": "Business Director",
        "email": "anne.roberts@milestoneinfra.co.uk"
      },
      {
        "name": "Anthony Brown",
        "role": "Regional Director",
        "email": "anthony.brown@milestoneinfra.co.uk"
      },
      {
        "name": "Ben Dodds",
        "role": "Principal Engineer",
        "email": "ben.dodds@milestoneinfra.co.uk"
      },
      {
        "name": "Damian MacDonald",
        "role": "Health and Safety Advisor",
        "email": "damian.macdonald@milestoneinfra.co.uk",
        "phone": "7912642578.0"
      },
      {
        "name": "Gary Davies",
        "email": "gary.davies@milestoneinfra.co.uk"
      },
      {
        "name": "Gohar Hayat",
        "role": "Contracts Director",
        "email": "gohar.hayat@milestoneinfra.co.uk"
      },
      {
        "name": "James Poole",
        "role": "Quantity Surveyor",
        "email": "james.poole@milestoneinfra.co.uk"
      },
      {
        "name": "Jorge Barbosa",
        "role": "Site Manager",
        "email": "jorge.barbosa@milestoneinfra.co.uk"
      },
      {
        "name": "Kieran Beausire",
        "role": "Engineer",
        "email": "kieran.beausire@milestoneinfra.co.uk"
      },
      {
        "name": "Lewis Cowley",
        "role": "Regional Director",
        "email": "lewis.cowley@milestoneinfra.co.uk"
      },
      {
        "name": "Matthew Riches",
        "role": "Operations Director",
        "email": "matthew.riches@milestoneinfra.co.uk"
      },
      {
        "name": "Mike Evans",
        "role": "Managing Director",
        "email": "mike.evans@milestoneinfra.co.uk"
      },
      {
        "name": "Phillip Raven",
        "role": "Head of Technical",
        "email": "phillip.raven@milestoneinfra.co.uk"
      },
      {
        "name": "Richard Jones",
        "email": "richard.jones@milestoneinfra.co.uk"
      },
      {
        "name": "Richard Lovewell",
        "role": "Business Director",
        "email": "richard.lovewell@milestoneinfra.co.uk"
      },
      {
        "name": "Richard Stonehouse",
        "role": "Contracts Manager",
        "email": "richard.stonehouse@milestoneinfra.co.uk",
        "phone": "7464488658.0"
      },
      {
        "name": "Ryan Calleja",
        "role": "Design Engineer",
        "email": "ryan.calleja@milestoneinfra.co.uk"
      },
      {
        "name": "Scott Blackburn",
        "role": "Senior Project Manager",
        "email": "scott.blackburn@milestoneinfra.co.uk"
      },
      {
        "name": "Sean Murphy",
        "role": "Regional Director",
        "email": "sean.murphy@milestoneinfra.co.uk"
      },
      {
        "name": "Simon Woodford",
        "role": "Business Director",
        "email": "simon.woodford@milestoneinfra.co.uk"
      },
      {
        "name": "Thomas Morris",
        "role": "Project Manager",
        "email": "thomas.morris@milestoneinfra.co.uk",
        "phone": "07720 736 136"
      },
      {
        "name": "William Horwood",
        "role": "Sub Agent",
        "email": "william.horwood@milestoneinfra.co.uk"
      }
    ]
  },
  {
    "id": 454,
    "name": "M Group Services",
    "disciplines": [
      "Civil Engineering"
    ],
    "contacts": [
      {
        "name": "Adam Brown",
        "role": "Project Manager",
        "email": "adam.brown@mgroupservices.com"
      },
      {
        "name": "Chris Jackson",
        "role": "Contracts Manager",
        "email": "chris.jackson@mgroupservices.com"
      },
      {
        "name": "Darren Collins",
        "role": "Commercial Manager",
        "email": "darren.collins@mgroupservices.com"
      },
      {
        "name": "Gary Smith",
        "role": "Operations Director",
        "email": "gary.smith@mgroupservices.com"
      },
      {
        "name": "James Wilson",
        "role": "Managing Director",
        "email": "james.wilson@mgroupservices.com"
      }
    ]
  },
  {
    "id": 455,
    "name": "M&J Group (Construction and Roofing) Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Barry Pirrie",
        "role": "Senior Estimator",
        "email": "barry.pirrie@mjconstructiongroup.co.uk"
      },
      {
        "name": "Dan Goddard",
        "role": "Project Manager",
        "email": "dan.goddard@mjconstructiongroup.co.uk"
      },
      {
        "name": "James Field",
        "role": "Senior Project Manager",
        "email": "james@mjconstructiongroup.co.uk"
      },
      {
        "name": "Joff Norris",
        "role": "Director",
        "email": "joff.norris@mjconstructiongroup.co.uk"
      },
      {
        "name": "Jordan Darvall",
        "role": "Business Development Manager",
        "email": "jordan@mjconstructiongroup.co.uk",
        "phone": "07802 339059"
      },
      {
        "name": "Martin Moore",
        "role": "Commercial Manager",
        "email": "martinmoore@mjconstructiongroup.co.uk"
      },
      {
        "name": "Ryan Kalla",
        "role": "Construction Manager",
        "email": "ryan@mjconstructiongroup.co.uk",
        "phone": "07708 392842"
      },
      {
        "name": "Shane Bigg",
        "role": "Construction Manager",
        "email": "shane.bigg@mjconstructiongroup.co.uk"
      },
      {
        "name": "Simon Harding",
        "role": "Project Manager",
        "email": "simon.harding@mjconstructiongroup.co.uk"
      },
      {
        "name": "Steve Roach",
        "role": "Contract Manager",
        "email": "steve.roach@mjconstructiongroup.co.uk"
      },
      {
        "name": "Tim Gibbs",
        "role": "Managing Director",
        "email": "timgibbs@mjroofing.com"
      },
      {
        "name": "Will Skingsley",
        "role": "Project Manager",
        "email": "will.skingsley@mjconstructiongroup.co.uk"
      }
    ]
  },
  {
    "id": 456,
    "name": "MA Divane Contractors Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Brian Barron",
        "role": "Director",
        "email": "brian.barron@madivane.co.uk",
        "phone": "7593130577.0"
      }
    ]
  },
  {
    "id": 457,
    "name": "Mace Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Abed Shad",
        "role": "Architectural Manager",
        "email": "ashad@macegroup.com"
      },
      {
        "name": "Adam Charlton",
        "role": "Commercial Manager",
        "email": "adam.charlton@macegroup.com"
      },
      {
        "name": "Adam Whitchurch",
        "role": "Senior Commercial Manager",
        "email": "adam.whitchurch@macegroup.com"
      },
      {
        "name": "Adrian Varona",
        "role": "Designer",
        "email": "adrian.varona@macegroup.com"
      },
      {
        "name": "Alex Pirie",
        "role": "Associate Director",
        "email": "alex.pirie@macegroup.com"
      },
      {
        "name": "Alex Reeves",
        "role": "Architectural Manager",
        "email": "areeves@macegroup.com"
      },
      {
        "name": "Alex Tooley",
        "role": "Project Manager",
        "email": "alex.tooley@macegroup.com"
      },
      {
        "name": "Altaf Abbas",
        "role": "Pre Construction Manager",
        "email": "altaf.abbas@macegroup.com"
      },
      {
        "name": "Amolak Dhanjal",
        "role": "Architect",
        "email": "amolak.dhanjal@macegroup.com",
        "phone": "07551 477128"
      },
      {
        "name": "Anastasia Langlais",
        "role": "Architectural Manager",
        "email": "alanglais@macegroup.com"
      },
      {
        "name": "Andrew Sweeney",
        "role": "Operations Director",
        "email": "andrew.sweeney@macegroup.com"
      },
      {
        "name": "Andy Jones",
        "role": "Managing Director for Major Projects",
        "email": "andy.jones@macegroup.com"
      },
      {
        "name": "Andy Norton",
        "role": "Project Manager",
        "email": "andy.norton@macegroup.com"
      },
      {
        "name": "Andy Summerscales",
        "role": "Project Manager",
        "email": "asummerscales@macegroup.com"
      },
      {
        "name": "Antonio Conterato",
        "role": "Project Manager",
        "email": "antonio.conterato@macegroup.com"
      },
      {
        "name": "Armand Terrulli",
        "role": "Senior Project Manager",
        "email": "armand.terrulli@macegroup.com"
      },
      {
        "name": "Banji Adegunju",
        "role": "Senior Project Manager",
        "email": "banji.adegunju@macegroup.com",
        "phone": "7741272939.0"
      },
      {
        "name": "Becky Burgess",
        "role": "Project Manager",
        "email": "bburgess@macegroup.com"
      },
      {
        "name": "Cam Hummerston",
        "role": "Operations Director",
        "email": "cam.hummerston@macegroup.com"
      },
      {
        "name": "Carl Dainter",
        "role": "Project Manager",
        "email": "carl.dainter@macegroup.com"
      },
      {
        "name": "Carol Comins",
        "role": "Senior Project Manager",
        "email": "ccomins@macegroup.com"
      },
      {
        "name": "Carolina Pisica",
        "role": "Procurement Officer",
        "email": "carolina.pisica@macegroup.com"
      },
      {
        "name": "Caroline Fazakerley",
        "email": "caroline.fazakerley@macegroup.com"
      },
      {
        "name": "Charles Flood",
        "role": "Principal Architect",
        "email": "charles.flood@macegroup.com",
        "phone": "07876 035796"
      },
      {
        "name": "Charles Gee",
        "role": "Construction Manager",
        "email": "charles.gee@macegroup.com"
      },
      {
        "name": "Claire Jones",
        "role": "Group Procurement Director",
        "email": "cjones@macegroup.com"
      },
      {
        "name": "Claire Roberts",
        "role": "Architectural Manager",
        "email": "claire.roberts@macegroup.com"
      },
      {
        "name": "Clarissa Agazzi",
        "role": "Architect",
        "email": "clarissa.agazzi@macegroup.com",
        "phone": "07770 909 323"
      },
      {
        "name": "Daniel Hosein",
        "email": "daniel.hosein@macegroup.com"
      },
      {
        "name": "Daniel Jagessar",
        "role": "Quantity Surveyor",
        "email": "daniel.jagessar@macegroup.com"
      },
      {
        "name": "Darren Buckley",
        "role": "Associate Director",
        "email": "darren.buckley@macegroup.com"
      },
      {
        "name": "Dave Joyce",
        "role": "Construction Manager",
        "email": "dave.joyce@macegroup.com"
      },
      {
        "name": "Dave Smith",
        "role": "Engineer",
        "email": "dave.smith@macegroup.com"
      },
      {
        "name": "David Bee",
        "email": "david.bee@macegroup.com"
      },
      {
        "name": "David Chambers",
        "role": "Project Manager",
        "email": "david.chambers@mace.co.uk"
      },
      {
        "name": "David Hanmer",
        "role": "Project Director",
        "email": "david.hanmer@macegroup.com"
      },
      {
        "name": "David Madders",
        "role": "Senior Construction Manager",
        "email": "david.madders@macegroup.com"
      },
      {
        "name": "David Osborne",
        "role": "Project Manager",
        "email": "david.osborne@macegroup.com"
      },
      {
        "name": "David Potts",
        "role": "Commercial Lead",
        "email": "david.potts@macegroup.com"
      },
      {
        "name": "David Vinton",
        "role": "Project Manager",
        "email": "david.vinton@macegroup.com"
      },
      {
        "name": "Dean Emblin",
        "role": "Operations Director",
        "email": "dean.emblin@macegroup.com"
      },
      {
        "name": "Dilys White",
        "role": "Construction Manager",
        "email": "dilys.white@macegroup.com"
      },
      {
        "name": "Ellie Irving",
        "role": "Information Manager",
        "email": "ellie.irving@macegroup.com"
      },
      {
        "name": "Elliot Pycroft",
        "role": "Project Director",
        "email": "elliot.pycroft@macegroup.com"
      },
      {
        "name": "Emil Elhert",
        "role": "Project Manager",
        "email": "emil.elhert@macegroup.com"
      },
      {
        "name": "Eoin Lynch",
        "role": "Design Manager",
        "email": "eoin.lynch@macegroup.com"
      },
      {
        "name": "Fin O'Sullivan",
        "role": "Senior Construction Manager",
        "email": "fin.osullivan@macegroup.com"
      },
      {
        "name": "Fiona McWilliams",
        "role": "Associate Director",
        "email": "fiona.mcwilliams@macegroup.com"
      },
      {
        "name": "Frank Connolly",
        "role": "Quantity Surveyor",
        "email": "frank.connolly@macegroup.com"
      },
      {
        "name": "Gareth Lewis",
        "role": "CEO",
        "email": "glewis@macegroup.com"
      },
      {
        "name": "Gary Mudge",
        "role": "Project Manager",
        "email": "gary.mudge@macegroup.com",
        "phone": "07881 953781"
      },
      {
        "name": "Gavin Seager",
        "role": "Business Director",
        "email": "gavin.seager@macegroup.com"
      },
      {
        "name": "Ged Simmonds",
        "role": "Managing Director",
        "email": "ged.simmonds@macegroup.com"
      },
      {
        "name": "Graeme White",
        "role": "Regional Operations Director",
        "email": "gwhite@macegroup.com"
      },
      {
        "name": "Graham Barter",
        "email": "graham.barter@macegroup.com",
        "phone": "07801 214 022"
      },
      {
        "name": "Graham Murphy",
        "role": "Project Manager",
        "email": "graham.murphy@macegroup.com"
      },
      {
        "name": "Graham Seage",
        "role": "Director",
        "email": "gseage@macegroup.com"
      },
      {
        "name": "Greg Cairns",
        "role": "Associate Director",
        "email": "greg.cairns@macegroup.com"
      },
      {
        "name": "Guy Fowler",
        "role": "Director of Operations",
        "email": "guy.fowler@macegroup.com"
      },
      {
        "name": "Hanna Khan",
        "role": "Commercial Manager",
        "email": "hanna.khan@macegroup.com"
      },
      {
        "name": "Harry Eade",
        "role": "Assistant Commercial Manager",
        "email": "harry.eade@macegroup.com",
        "phone": "07786 556 740"
      },
      {
        "name": "Helen Aspinall",
        "role": "Project Manager",
        "email": "helen.aspinall@macegroup.com"
      },
      {
        "name": "Howard Thompson",
        "role": "Project Manager",
        "email": "howard.thompson@macegroup.com",
        "phone": "07824 313879"
      },
      {
        "name": "Hugh Muirhead",
        "role": "Project Manager",
        "email": "hugh.muirhead@macegroup.com"
      },
      {
        "name": "Ian Mason",
        "role": "Construction Director",
        "email": "imason@macegroup.com"
      },
      {
        "name": "Ian Nicholls",
        "role": "Senior Construction Manager",
        "email": "ian.nicholls@macegroup.com",
        "phone": "07795 311315"
      },
      {
        "name": "Ionut Istrati",
        "role": "Senior Project Manager",
        "email": "ionut.istrati@macegroup.com",
        "phone": "7552695064.0"
      },
      {
        "name": "Isaac Speight",
        "role": "Construction Manager",
        "email": "isaac.speight@macegroup.com"
      },
      {
        "name": "Jack Gedge",
        "role": "Associate Director",
        "email": "jack.gedge@macegroup.com"
      },
      {
        "name": "Jacques Mein",
        "role": "Project Leader",
        "email": "jacques.mein@macegroup.com"
      },
      {
        "name": "Jamal Lea",
        "role": "Manager",
        "email": "jlea@macegroup.com"
      },
      {
        "name": "James Williams",
        "email": "james.williams@macegroup.com"
      },
      {
        "name": "Jason Millet",
        "role": "Chief Executive Officer",
        "email": "jmillet@macegroup.com"
      },
      {
        "name": "Jessica Drew",
        "role": "Project Manager",
        "email": "jessica.drew@macegroup.com"
      },
      {
        "name": "John Allen",
        "role": "Operations Director",
        "email": "john.allen@macegroup.com",
        "phone": "7881092502.0"
      },
      {
        "name": "John Hilton",
        "role": "Project Director",
        "email": "john.hilton@macegroup.com"
      },
      {
        "name": "John Kennedy",
        "role": "Operations Director",
        "email": "john.kennedy@macegroup.com"
      },
      {
        "name": "John Kiruthi",
        "role": "Construction Director",
        "email": "john.kiruthi@macegroup.com"
      },
      {
        "name": "Jon Kill",
        "email": "jon.kill@macegroup.com"
      },
      {
        "name": "Jon Lingard",
        "role": "Design Manager",
        "email": "jon.lingard@macegroup.com"
      },
      {
        "name": "Jon Mingard",
        "role": "Project Manager",
        "email": "jon.mingard@macegroup.com"
      },
      {
        "name": "Jonathan Foster",
        "role": "Project Director",
        "email": "jonathan.foster@macegroup.com"
      },
      {
        "name": "Jonathan Richards",
        "role": "Project Manager",
        "email": "jonathan.richards@macegroup.com"
      },
      {
        "name": "Joshua Smith",
        "role": "Mechanical & Electrical Manager",
        "email": "joshua.smith@macegroup.com"
      },
      {
        "name": "Karl Allcoat",
        "role": "Senior Project Manager",
        "email": "karl.allcoat@macegroup.com",
        "phone": "07825 752374"
      },
      {
        "name": "Katerina Smyrniotaki",
        "role": "Project Manager",
        "email": "katerina.smyrniotaki@macegroup.com"
      },
      {
        "name": "Katherine Heney",
        "role": "Project Secretary",
        "email": "kheney@macegroup.com"
      },
      {
        "name": "Kathy Beadle",
        "role": "Strategic Planning Manager",
        "email": "kathy.beadle@macegroup.com"
      },
      {
        "name": "Kier White",
        "role": "Senior Project Manager",
        "email": "kier.white@macegroup.com",
        "phone": "7825893635.0"
      },
      {
        "name": "Kirsten White",
        "role": "Finance Director",
        "email": "kirsten.white@macegroup.com"
      },
      {
        "name": "Laura Thomas",
        "role": "Senior Project Manager",
        "email": "laura.thomas@macegroup.com"
      },
      {
        "name": "Lee Mepstead",
        "role": "Construction Manager",
        "email": "lee.mepstead@macegroup.com"
      },
      {
        "name": "Lee Rich",
        "role": "Commercial Manager",
        "email": "lee.rich@macegroup.com"
      },
      {
        "name": "Lesha Chetty",
        "email": "lchetty@macegroup.com"
      },
      {
        "name": "Liam Haywood",
        "role": "Project Manager",
        "email": "liam.haywood@macegroup.com"
      },
      {
        "name": "Lisa Byron",
        "role": "Project Manager",
        "email": "lisa.byron@macegroup.com"
      },
      {
        "name": "Lucas Whitworth",
        "role": "Senior Project Manager",
        "email": "lwhitworth@macegroup.com",
        "phone": "07467 861758"
      },
      {
        "name": "Luke Simpson",
        "role": "Construction Manager",
        "email": "luke.simpson@macegroup.com"
      },
      {
        "name": "Marc Jelly",
        "role": "Operations Director",
        "email": "marc.jelly@macegroup.com"
      },
      {
        "name": "Marelize De Rocco",
        "role": "Associate Director",
        "email": "maralize.derocco@mace-interiors.com"
      },
      {
        "name": "Mark Hampton",
        "role": "Cost Consultant",
        "email": "mark.hampton@macegroup.com"
      },
      {
        "name": "Martin Botha",
        "email": "martin.botha@macegroup.com"
      },
      {
        "name": "Martin Jones",
        "role": "Operations Director",
        "email": "martin.jones@macegroup.com"
      },
      {
        "name": "Matt Burley",
        "role": "Senior Project Manager",
        "email": "matt.burley@macegroup.com",
        "phone": "7884171048.0"
      },
      {
        "name": "Matt Fowler",
        "role": "Operations Director",
        "email": "mfowler@macegroup.com"
      },
      {
        "name": "Mick Stephens",
        "role": "Construction Manager",
        "email": "mstephens@macegroup.com"
      },
      {
        "name": "Mike Barford",
        "role": "Project Director",
        "email": "mbarford@macegroup.com"
      },
      {
        "name": "Mike Barlow",
        "email": "mike.barlow@macegroup.com"
      },
      {
        "name": "Neil Hutchison",
        "role": "Project Manager",
        "email": "neil.hutchison@macegroup.com",
        "phone": "07887 502115"
      },
      {
        "name": "Neil McLeod",
        "role": "Associate Director",
        "email": "neil.mcleod@macegroup.com",
        "phone": "07918 628135"
      },
      {
        "name": "Nick Chaplin",
        "role": "Senior Development Manager",
        "email": "nick.chaplin@macegroup.com"
      },
      {
        "name": "Nick Hoffman",
        "role": "Contracts Manager",
        "email": "nick.hoffman@macegroup.com"
      },
      {
        "name": "Nigel Maynard",
        "role": "Project Manager",
        "email": "nigel.maynard@macegroup.com"
      },
      {
        "name": "Oliver North",
        "role": "Operations Director",
        "email": "oliver.north@macegroup.com"
      },
      {
        "name": "Olly Clarke",
        "role": "Construction Director",
        "email": "oclarke@macegroup.com"
      },
      {
        "name": "Pasqualina Puglisi",
        "role": "Technical Advisor",
        "email": "pasqualina.puglisi@macegroup.com"
      },
      {
        "name": "Patrick Smith",
        "role": "Sustainability Manager",
        "email": "patrick.smith@macegroup.com"
      },
      {
        "name": "Paul Bushnell",
        "role": "Operations Director",
        "email": "paul.bushnell@macegroup.com"
      },
      {
        "name": "Paul Cluskey",
        "role": "Project Manager",
        "email": "paul.cluskey@macegroup.com",
        "phone": "07776 233974"
      },
      {
        "name": "Paul Thomas",
        "role": "Construction Director",
        "email": "paul.thomas@macegroup.com"
      },
      {
        "name": "Paulo Costa",
        "role": "Senior Architect",
        "email": "paulo.costa@macegroup.com"
      },
      {
        "name": "Peter Boote",
        "role": "Director",
        "email": "peter.boote@macegroup.com"
      },
      {
        "name": "Peter Millar",
        "role": "Senior Project Manager",
        "email": "peter.millar@macegroup.com"
      },
      {
        "name": "Philip Davie",
        "role": "Programme Manager",
        "email": "pdavie@macegroup.com"
      },
      {
        "name": "Philippa Keys",
        "role": "Sustainability Consultant",
        "email": "philippa.keys@macegroup.com"
      },
      {
        "name": "Pippa Hill",
        "role": "Graduate Construction Manager",
        "email": "pippa.hill@macegroup.com"
      },
      {
        "name": "Priya Martin",
        "role": "Senior Architect",
        "email": "priya.martin@macegroup.com"
      },
      {
        "name": "Rachel Gillott",
        "role": "Assistant Project Manager",
        "email": "rachel.gillott@macegroup.com",
        "phone": "07799 903 676"
      },
      {
        "name": "Rajitha Mahendran",
        "email": "rajitha.mahendran@macegroup.com"
      },
      {
        "name": "Rebecca Chim",
        "role": "Architect",
        "email": "rebecca.chim@macegroup.com"
      },
      {
        "name": "Richard Swallow",
        "role": "Construction Director",
        "email": "richard.swallow@macegroup.com"
      },
      {
        "name": "Rob Allen",
        "role": "Project Manager",
        "email": "rallen@macegroup.com"
      },
      {
        "name": "Rob Lemming",
        "role": "Managing Director",
        "email": "robert.lemming@macegroup.com"
      },
      {
        "name": "Robert Cocks",
        "role": "Associate Director",
        "email": "robert.cocks@macegroup.com"
      },
      {
        "name": "Robert Dudley",
        "role": "Project Director",
        "email": "robert.dudley@macegroup.com",
        "phone": "07801 621702"
      },
      {
        "name": "Ruby El-Kanzi",
        "role": "Senior Design Manager",
        "email": "ruby.el-kanzi@macegroup.com"
      },
      {
        "name": "Russell Hill",
        "role": "Director",
        "email": "rhill@macegroup.com"
      },
      {
        "name": "Salvatore Capotosto",
        "role": "Project Director",
        "email": "salvatore.capotosto@macegroup.com"
      },
      {
        "name": "Sam Williams",
        "role": "Construction Manager",
        "email": "sam.williams@macegroup.com"
      },
      {
        "name": "Scott Williams",
        "role": "Quantity Surveyor",
        "email": "scott.williams@macegroup.com"
      },
      {
        "name": "Sean Gray",
        "role": "Director of Transport Technology",
        "email": "sean.gray@macegroup.com"
      },
      {
        "name": "Shivam Dheir",
        "role": "Senior Development Manager",
        "email": "shivam.dheir@macegroup.com"
      },
      {
        "name": "Sophie Patterson",
        "role": "Construction Manager",
        "email": "sophie.patterson@macegroup.com"
      },
      {
        "name": "Stefania Mangano",
        "role": "Project Manager",
        "email": "stefania.mangano@macegroup.com",
        "phone": "7468699156.0"
      },
      {
        "name": "Stefania Solomos",
        "role": "Architect",
        "email": "stefania.solomos@macegroup.com"
      },
      {
        "name": "Steve Anderson",
        "role": "Site Agent",
        "email": "steve.anderson@macegroup.com"
      },
      {
        "name": "Steve Hawthorne",
        "role": "Construction Director",
        "email": "steve.hawthorne@macegroup.com"
      },
      {
        "name": "Steve Pyman",
        "role": "Project Manager",
        "email": "steve.pyman@macegroup.com"
      },
      {
        "name": "Steven Stavrou",
        "role": "Operations Director",
        "email": "steven.stavrou@macegroup.com"
      },
      {
        "name": "Stewart Ward",
        "role": "Business Unit Director",
        "email": "stewart.ward@macegroup.com"
      },
      {
        "name": "Sue Hardy",
        "role": "Head of Social Value",
        "email": "suzanne.hardy@macegroup.com",
        "phone": "7794247622.0"
      },
      {
        "name": "Terry Spraggett",
        "role": "Managing Director",
        "email": "terry.spraggett@macegroup.com",
        "phone": "07711 072723"
      },
      {
        "name": "Tim Barton",
        "role": "Associate Director",
        "email": "tim.barton@macegroup.com"
      },
      {
        "name": "Tom Burrows",
        "role": "Project Manager",
        "email": "tom.burrows@macegroup.com",
        "phone": "07778 757717"
      },
      {
        "name": "Tom Walton",
        "role": "Construction Director",
        "email": "thomas.walton@macegroup.com",
        "phone": "7881091368.0"
      },
      {
        "name": "Tony Brown",
        "role": "Senior Design Manager",
        "email": "anthony.brown@macegroup.com"
      },
      {
        "name": "Tony Gale",
        "role": "Project Manager",
        "email": "tony.gale@macegroup.com"
      },
      {
        "name": "Treyano Hanson",
        "role": "Construction Manager",
        "email": "treyano.hanson@macegroup.com"
      }
    ]
  },
  {
    "id": 458,
    "name": "Major Commercial Property Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Sam Sinniah",
        "role": "Operations Director",
        "email": "sam@majorcommercial.com"
      },
      {
        "name": "Sandeep Singh",
        "role": "Director",
        "email": "sandeep@majorcommercial.uk"
      },
      {
        "name": "Usman Abbasi",
        "role": "Technical Coordinator",
        "email": "usman@majorcommercial.com"
      }
    ]
  },
  {
    "id": 459,
    "name": "Marlborough Highways",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Matthew Revell",
        "role": "Managing Director",
        "email": "matthew.revell@marlboroughhighways.co.uk"
      },
      {
        "name": "Wayne Knight",
        "role": "Contracts Director",
        "email": "wayne.knight@marlboroughhighways.co.uk"
      }
    ]
  },
  {
    "id": 460,
    "name": "Marldon Construction",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Anthony Bartlett",
        "role": "Partner",
        "email": "anthony.bartlett@marldon.net"
      },
      {
        "name": "Bhimji Vora",
        "role": "Site Agent",
        "email": "bvora@marldon.net",
        "phone": "7966210631.0"
      },
      {
        "name": "Brian Jones",
        "role": "Project Manager",
        "email": "brian.jones@marldon.net",
        "phone": "7779350307.0"
      },
      {
        "name": "Guy Carney",
        "role": "Site Manager",
        "email": "gcarney@marldon.net",
        "phone": "7977989963.0"
      },
      {
        "name": "Henry Bartlett",
        "role": "Project Manager",
        "email": "hrbartlett@marldon.net",
        "phone": "7875051039.0"
      }
    ]
  },
  {
    "id": 461,
    "name": "Marney Construction",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Neil Marney",
        "role": "Director",
        "email": "neilmarney@marneyconstruction.co.uk",
        "phone": "07776 843830"
      },
      {
        "name": "Eamonn Hannigan",
        "role": "Commercial Director",
        "email": "eamonnhannigan@marneyconstruction.co.uk",
        "phone": "07989 062772"
      },
      {
        "name": "Marius-Adrian Novac",
        "role": "Contracts Manager",
        "email": "marius.novac@marneyconstruction.co.uk"
      }
    ]
  },
  {
    "id": 462,
    "name": "Marron Civil Engineering Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Colin Marron",
        "role": "Contracts Manager",
        "email": "colin@marronce.co.uk"
      },
      {
        "name": "John Marron",
        "role": "Director",
        "email": "john@marronce.co.uk"
      }
    ]
  },
  {
    "id": 463,
    "name": "Mason Brickwork (London) Limited",
    "disciplines": [
      "Brickwork"
    ],
    "contacts": [
      {
        "name": "Lee Gilroy",
        "role": "Managing Director",
        "phone": "07598 106 025"
      },
      {
        "name": "Anthony Mason",
        "role": "Managing Director",
        "email": "anthony@masonbrickwork.co.uk"
      },
      {
        "name": "Daniel Mason",
        "role": "Director",
        "email": "daniel@masonbrickwork.co.uk"
      },
      {
        "name": "Jason Mason",
        "role": "Contracts Director",
        "email": "jason@masonbrickwork.co.uk"
      },
      {
        "name": "Luke Mason",
        "role": "Contracts Manager",
        "email": "luke@masonbrickwork.co.uk"
      },
      {
        "name": "Paul Mason",
        "role": "Commercial Manager",
        "email": "paul@masonbrickwork.co.uk"
      }
    ]
  },
  {
    "id": 464,
    "name": "Matranxhi Construction",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Veli Matranxhi",
        "role": "Director",
        "email": "info@matranxhi.com"
      }
    ]
  },
  {
    "id": 465,
    "name": "Max Frank Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Daniel Rogers",
        "role": "Development Manager",
        "email": "d.rogers@maxfrank.co.uk",
        "phone": "7990049300.0"
      },
      {
        "name": "John Hills",
        "role": "Sales Manager",
        "email": "john.hills@maxfrank.co.uk",
        "phone": "7921697185.0"
      }
    ]
  },
  {
    "id": 466,
    "name": "Maylim Limited",
    "disciplines": [
      "Landscaping"
    ],
    "contacts": [
      {
        "name": "Ben Bellinger",
        "role": "Contracts Manager",
        "email": "ben.bellinger@maylim.co.uk",
        "phone": "7711044989.0"
      },
      {
        "name": "Ben Corkhill",
        "role": "Project Manager",
        "email": "ben.corkhill@maylim.co.uk",
        "phone": "7508017384.0"
      },
      {
        "name": "Declan Kelly",
        "role": "Quantity Surveyor",
        "email": "declan.kelly@maylim.co.uk"
      },
      {
        "name": "Frankie Patman",
        "role": "Business Development Manager",
        "email": "frankie.patman@maylim.co.uk"
      },
      {
        "name": "Gareth Kinsella",
        "role": "Senior Project Manager",
        "email": "gareth.kinsella@maylim.co.uk",
        "phone": "7508017382.0"
      },
      {
        "name": "Gary Ryan",
        "role": "Project Manager",
        "email": "gary.ryan@maylim.co.uk"
      },
      {
        "name": "Mairead McLaughlan",
        "role": "Buyer",
        "email": "mairead.mclaughlan@maylim.co.uk"
      },
      {
        "name": "Matt Wincott",
        "role": "Pre Construction Director",
        "email": "matt.wincott@maylim.co.uk"
      },
      {
        "name": "Samutharathnam Senthuran",
        "role": "Project Manager",
        "email": "sam.senthuran@maylim.co.uk"
      },
      {
        "name": "Thomas O'Mahony",
        "role": "Managing Director",
        "email": "thomas.omahony@maylim.co.uk",
        "phone": "7774671878.0"
      },
      {
        "name": "Alex May",
        "role": "Project Manager",
        "email": "alex.may@maylim.co.uk"
      },
      {
        "name": "Darren May",
        "role": "Managing Director",
        "email": "darren.may@maylim.co.uk"
      },
      {
        "name": "James May",
        "role": "Contracts Manager",
        "email": "james.may@maylim.co.uk"
      },
      {
        "name": "Luke Roberts",
        "role": "Commercial Manager",
        "email": "luke.roberts@maylim.co.uk"
      },
      {
        "name": "Ryan Carter",
        "role": "Quantity Surveyor",
        "email": "ryan.carter@maylim.co.uk"
      }
    ]
  },
  {
    "id": 467,
    "name": "McAleer & Rushe",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Aidan McCarron",
        "role": "Project Manager",
        "email": "aidan.mccarron@mcaleer-rushe.co.uk"
      },
      {
        "name": "Angus Monteith",
        "role": "Development Director",
        "email": "angus.monteith@mcaleer-rushe.co.uk"
      },
      {
        "name": "Ben MacPhee",
        "role": "Property Development Manager",
        "email": "ben.macphee@mcaleer-rushe.co.uk"
      },
      {
        "name": "Charlene Millen",
        "role": "Quality Manager",
        "email": "charlene.millen@mcaleer-rushe.co.uk"
      },
      {
        "name": "Claire Duffy",
        "role": "Commercial Manager",
        "email": "claire.duffy@mcaleer-rushe.co.uk",
        "phone": "07436 584404"
      },
      {
        "name": "Connor Graham",
        "role": "Buyer",
        "email": "connor.graham@mcaleer-rushe.co.uk"
      },
      {
        "name": "Conor Kennedy",
        "role": "Quantity Surveyor",
        "email": "conor.kennedy@mcaleer-rushe.co.uk",
        "phone": "7976172828.0"
      },
      {
        "name": "Cormac Hannigan",
        "role": "Quantity Surveyor",
        "email": "cormac.hannigan@mcaleer-rushe.co.uk",
        "phone": "07423 470 998"
      },
      {
        "name": "Dominic Devine",
        "role": "Project Manager",
        "email": "dominic.devine@mcaleer-rushe.co.uk"
      },
      {
        "name": "Gary Conway",
        "role": "Quantity Surveyor",
        "email": "gary.conway@mcaleer-rushe.co.uk",
        "phone": "07436 794 870"
      },
      {
        "name": "Ian Taylor",
        "role": "Quantity Surveyor",
        "email": "ian.taylor@mcaleer-rushe.co.uk",
        "phone": "07850 455732"
      },
      {
        "name": "Joe Kellett",
        "role": "Site Manager",
        "email": "joe.kellett@mcaleer-rushe.co.uk"
      },
      {
        "name": "Josh Grimes",
        "role": "Development Surveyor",
        "email": "josh.grimes@mrp.co.uk"
      },
      {
        "name": "Julie Mcguigan",
        "role": "Project Manager",
        "email": "julie.mcguigan@mcaleer-rushe.co.uk"
      },
      {
        "name": "Justin McWilliams",
        "role": "Contract Manager",
        "email": "justin.mcwilliams@mcaleer-rushe.co.uk"
      },
      {
        "name": "Mark Diamond",
        "role": "Senior Director",
        "email": "mark.diamond@mcaleer-rushe.co.uk"
      },
      {
        "name": "Mark McCormack",
        "role": "Project Manager",
        "email": "mark.mccormack@mcaleer-rushe.co.uk"
      },
      {
        "name": "Michael Lynn",
        "role": "Quantity Surveyor",
        "email": "michael.lynn@mcaleer-rushe.co.uk"
      },
      {
        "name": "Niall Adams",
        "role": "Project Manager",
        "email": "niall.adams@mcaleer-rushe.co.uk",
        "phone": "07542 942548"
      },
      {
        "name": "Oisin Milne",
        "role": "Commercial Manager",
        "email": "oisin.milne@mcaleer-rushe.co.uk",
        "phone": "07989 345894"
      },
      {
        "name": "Paddy Connolly",
        "role": "Project Manager",
        "email": "paddy.connolly@mcaleer-rushe.co.uk"
      },
      {
        "name": "Paul Donnelly",
        "email": "paul.donnelly@mcaleer-rushe.co.uk"
      },
      {
        "name": "Paul Marlow",
        "role": "Contracts Director",
        "email": "paul.marlow@mcaleer-rushe.co.uk"
      },
      {
        "name": "Paul Murray",
        "role": "Project Manager",
        "email": "paul.murray@mcaleer-rushe.co.uk"
      },
      {
        "name": "Ronan Currie",
        "role": "Quantity Surveyor",
        "email": "ronan.currie@mcaleer-rushe.co.uk",
        "phone": "07973 829 448"
      },
      {
        "name": "Ronan McRory",
        "role": "Quantity Surveyor",
        "email": "ronan.mcrory@mcaleer-rushe.co.uk",
        "phone": "7436273783.0"
      },
      {
        "name": "Suzanne McCabe",
        "role": "Assistant Project Manager",
        "email": "suzanne.mccabe@mcaleer-rushe.co.uk"
      },
      {
        "name": "Tara Keogh",
        "role": "Project Manager",
        "email": "tara.keogh@mcaleer-rushe.co.uk",
        "phone": "7826494932.0"
      },
      {
        "name": "Terrance Brizzell",
        "role": "Quantity Surveyor",
        "email": "terrance.brizzell@mcaleer-rushe.co.uk"
      }
    ]
  },
  {
    "id": 468,
    "name": "McAleer & Rushe Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adam Toal",
        "role": "Project Manager",
        "email": "adam.toal@mcaleer-rushe.co.uk",
        "phone": "7543081626.0"
      },
      {
        "name": "Antoin McMullen",
        "role": "Quantity Surveyor",
        "email": "antoin@mcaleer-rushe.co.uk",
        "phone": "07742 021 252"
      },
      {
        "name": "Brad Ellis",
        "role": "Project Manager",
        "email": "brad.ellis@mcaleer-rushe.co.uk",
        "phone": "07483 981 521"
      },
      {
        "name": "Brendan Ward",
        "role": "Project Manager",
        "email": "brendan.ward@mcaleer-rushe.co.uk",
        "phone": "07442 502 928"
      },
      {
        "name": "Carl McAllister",
        "role": "Commercial Manager",
        "email": "carl.mcallister@mcaleer-rushe.co.uk",
        "phone": "07886 613167"
      },
      {
        "name": "Charlotte Walsh",
        "role": "Quantity Surveyor",
        "email": "charlotte@mcaleer-rushe.co.uk",
        "phone": "07966 277 958"
      },
      {
        "name": "Connor Graham",
        "role": "Head of Procurement",
        "email": "connor.graham@mcaleer-rushe.co.uk"
      },
      {
        "name": "Connor McMahon",
        "role": "Project Manager",
        "email": "connor.mcmahon@mcaleer-rushe.co.uk",
        "phone": "07976 667121"
      },
      {
        "name": "Conor Feeney",
        "role": "Project Manager",
        "email": "conor.feeney@mcaleer-rushe.co.uk",
        "phone": "07436 796 840"
      },
      {
        "name": "Cormac Hannigan",
        "role": "Quantity Surveyor",
        "email": "cormac.hannigan@mcaleer-rushe.co.uk",
        "phone": "7423470998.0"
      },
      {
        "name": "Daisy Butterworth",
        "role": "Assistant Project Manager",
        "email": "daisy.butterworth@mcaleer-rushe.co.uk"
      },
      {
        "name": "Damien Murray",
        "role": "Contracts Manager",
        "email": "damien.murray@mcaleer-rushe.co.uk",
        "phone": "07436 830775"
      },
      {
        "name": "Daragh McVey",
        "role": "Quantity Surveyor",
        "email": "daragh.mcvey@mcaleer-rushe.co.uk",
        "phone": "07855 086555"
      },
      {
        "name": "Dean Bonner",
        "role": "Project Manager",
        "email": "dean.bonner@mcaleer-rushe.co.uk",
        "phone": "7445601682.0"
      },
      {
        "name": "Declan Coll",
        "role": "Site Engineer",
        "email": "declan.coll@mcaleer-rushe.co.uk",
        "phone": "07929 669 321"
      },
      {
        "name": "Donal McOscar",
        "role": "Project Manager",
        "email": "donal.mcoscar@mcaleer-rushe.co.uk",
        "phone": "07850 442053"
      },
      {
        "name": "Donna Teague",
        "role": "Site Manager",
        "email": "donna@mcaleer-rushe.co.uk"
      },
      {
        "name": "Eamonn Laverty",
        "role": "Managing Director",
        "email": "eamonn.laverty@mcaleer-rushe.co.uk"
      },
      {
        "name": "Edward Laverty",
        "role": "Director",
        "email": "edward.laverty@mcaleer-rushe.co.uk"
      },
      {
        "name": "Eimear Doyle",
        "role": "Project Manager",
        "email": "eimear.doyle@mcaleer-rushe.co.uk"
      },
      {
        "name": "Emmet McGinley",
        "role": "Commercial Director",
        "email": "emmet@mcaleer-rushe.co.uk"
      },
      {
        "name": "Emmett McGinley",
        "role": "Project Manager",
        "email": "emmett@mcaleer-rushe.co.uk"
      },
      {
        "name": "Eoin Gormley",
        "role": "Project Director",
        "email": "eoin@mcaleer-rushe.co.uk",
        "phone": "07436 812 217"
      },
      {
        "name": "Gavin Devir",
        "email": "gavin.devir@mcaleer-rushe.co.uk",
        "phone": "07545 652 380"
      },
      {
        "name": "Gerry McGlone",
        "role": "Buyer",
        "email": "gerry.mcglone@mcaleer-rushe.co.uk"
      },
      {
        "name": "John Canavan",
        "role": "Quantity Surveyor",
        "email": "john.canavan@mcaleer-rushe.co.uk",
        "phone": "07587 778 165"
      },
      {
        "name": "John Carron",
        "role": "Quantity Surveyor",
        "email": "john.carron@mcaleer-rushe.co.uk",
        "phone": "07581 233 441"
      },
      {
        "name": "Jonathan O'Neill",
        "role": "Contracts Director",
        "email": "jonathan@mcaleer-rushe.co.uk",
        "phone": "07912 046630"
      },
      {
        "name": "Josh McFarland",
        "role": "Quantity Surveyor",
        "email": "josh.mcfarland@mcaleer-rushe.co.uk",
        "phone": "07976 668730"
      },
      {
        "name": "Justin McWilliams",
        "role": "Commercial Manager",
        "email": "justin.mcwilliams@mcaleer-rushe.co.uk"
      },
      {
        "name": "Justin Williams",
        "role": "Commercial Manager",
        "email": "justin.williams@mcaleer-rushe.co.uk",
        "phone": "7525771531.0"
      },
      {
        "name": "Kathleen Caines",
        "role": "SHEQ Manager",
        "email": "kathleen.caines@mcaleer-rushe.co.uk"
      },
      {
        "name": "Kevin Callan",
        "role": "Quantity Surveyor",
        "email": "kevin.callan@mcaleer-rushe.co.uk"
      },
      {
        "name": "Louise McCaffrey",
        "role": "Quantity Surveyor",
        "email": "louise.mccaffrey@mcaleer-rushe.co.uk"
      },
      {
        "name": "Mark Brady",
        "role": "Project Manager",
        "email": "mark.brady@mcaleer-rushe.co.uk",
        "phone": "07976 778 834"
      },
      {
        "name": "Mark Diamond",
        "role": "Contracts Director",
        "email": "mark.diamond@mcaleer-rushe.co.uk"
      },
      {
        "name": "Mark Elliott",
        "role": "Contracts Director",
        "email": "mark.elliott@mcaleer-rushe.co.uk"
      },
      {
        "name": "Mark McCormick",
        "role": "Contracts Director",
        "email": "mark.mccormick@mcaleer-rushe.co.uk",
        "phone": "07436 584090"
      },
      {
        "name": "Michael McCallion",
        "role": "Quantity Surveyor",
        "email": "michael.mccallion@mcaleer-rushe.co.uk",
        "phone": "7516121566.0"
      },
      {
        "name": "Michael White",
        "role": "Quantity Surveyor",
        "email": "michael.white@mcaleer-rushe.co.uk"
      },
      {
        "name": "Michael Yohanis",
        "role": "Contracts Director",
        "email": "michael.yohanis@mcaleer-rushe.co.uk",
        "phone": "07442 509091"
      },
      {
        "name": "Michelle Wilson",
        "role": "Buyer",
        "email": "michelle.wilson@mcaleer-rushe.co.uk"
      },
      {
        "name": "Oisin Milne",
        "role": "Commercial Manager",
        "email": "oisin.milne@mcaleer-rushe.co.uk",
        "phone": "07989 345894"
      },
      {
        "name": "Patrick Connolly",
        "role": "Site Manager",
        "email": "paddy.connolly@mcaleer-rushe.co.uk",
        "phone": "07436 588 778"
      },
      {
        "name": "Patrick Coyle",
        "role": "Project Manager",
        "email": "patrick.coyle@mcaleer-rushe.co.uk",
        "phone": "07436 584990"
      },
      {
        "name": "Patrick McNelis",
        "role": "Site Manager",
        "email": "patrick@mcaleer-rushe.co.uk",
        "phone": "07436 812 019"
      },
      {
        "name": "Paul Donnelly",
        "role": "Director of Operations",
        "email": "paul@mcaleer-rushe.co.uk"
      },
      {
        "name": "Paul Marlow",
        "role": "Project Manager",
        "email": "paul.marlow@mcaleer-rushe.co.uk",
        "phone": "07587 775 434"
      },
      {
        "name": "Peter Devlin",
        "role": "Project Manager",
        "email": "peter.devlin@mcaleer-rushe.co.uk",
        "phone": "07710 977331"
      },
      {
        "name": "Peter McCullagh",
        "role": "Quantity Surveyor",
        "email": "peter.mccullagh@mcaleer-rushe.co.uk"
      },
      {
        "name": "Riordan O'Sullivan",
        "role": "Contracts Manager",
        "email": "riordan.osullivan@mcaleer-rushe.co.uk"
      },
      {
        "name": "Roisin Brogan",
        "email": "roisin.brogan@mcaleer-rushe.co.uk"
      },
      {
        "name": "Ross Mabon",
        "role": "Project Manager",
        "email": "ross.mabon@mcaleer-rushe.co.uk",
        "phone": "07909 331 488"
      },
      {
        "name": "Rowan Curry",
        "role": "Quantity Surveyor",
        "email": "rowan.curry@mcaleer-rushe.co.uk"
      },
      {
        "name": "Ryan McShane",
        "role": "Project Manager",
        "email": "ryan.mcshane@mcaleer-rushe.co.uk",
        "phone": "07483 301062"
      },
      {
        "name": "Sean McGowan",
        "role": "Site Manager",
        "email": "sean@mcaleer-rushe.co.uk"
      },
      {
        "name": "Shane McCullagh",
        "role": "Contracts Director",
        "email": "shane.mccullagh@mcaleer-rushe.co.uk",
        "phone": "07876 455982"
      },
      {
        "name": "Shane McCullagh",
        "role": "Director",
        "email": "shane@mcaleer-rushe.co.uk",
        "phone": "07876 455982"
      },
      {
        "name": "Stephen Boyd",
        "role": "Project Manager",
        "email": "stephen.boyd@mcaleer-rushe.co.uk",
        "phone": "07436 588777"
      },
      {
        "name": "Stephen Harrison",
        "role": "Project Director",
        "email": "stephen.harrison@mcaleer-rushe.co.uk",
        "phone": "7921508150.0"
      },
      {
        "name": "Stephen Morrissey",
        "role": "Project Director",
        "email": "stephen@mcaleer-rushe.co.uk"
      },
      {
        "name": "Steve Eyre",
        "role": "Facade Manager",
        "email": "steve.eyre@mcaleer-rushe.co.uk"
      },
      {
        "name": "Steve Morris",
        "role": "Contracts Manager",
        "email": "steve.morris@mcaleer-rushe.co.uk",
        "phone": "07483 982 099"
      },
      {
        "name": "Steven Keady",
        "role": "Site Manager",
        "email": "steven.keady@mcaleer-rushe.co.uk"
      },
      {
        "name": "Steven McGimpsey",
        "role": "Development Manager",
        "email": "steve.mcgimpsey@mrp.co.uk",
        "phone": "07808 715 280"
      },
      {
        "name": "Terence Brizzell",
        "role": "Quantity Surveyor",
        "email": "terence.brizzell@mcaleer-rushe.co.uk",
        "phone": "07423 471294"
      },
      {
        "name": "Thomas McPeake",
        "role": "Buyer",
        "email": "thomas.mcpeake@mcaleer-rushe.co.uk"
      },
      {
        "name": "Tommy Mannion",
        "role": "Senior Construction Manager",
        "email": "tommy@mcaleer-rushe.co.uk"
      },
      {
        "name": "Trent Grant",
        "role": "Quantity Surveyor",
        "email": "trent.grant@mcaleer-rushe.co.uk",
        "phone": "07442 536282"
      },
      {
        "name": "Trevor McClintock",
        "role": "Site Manager",
        "email": "trevor.mcclintock@mcaleer-rushe.co.uk",
        "phone": "07849 787291"
      }
    ]
  },
  {
    "id": 469,
    "name": "McCoy Contractors Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Amy Fullaway",
        "email": "amy.fullaway@mccoycontractors.co.uk",
        "phone": "07809 145481"
      },
      {
        "name": "Austin Keenan",
        "role": "Contract Manager",
        "email": "austin.keenan@mccoycontractors.co.uk"
      },
      {
        "name": "Carl Richards",
        "role": "Commercial Manager",
        "email": "carl.richards@mccoycontractors.co.uk"
      },
      {
        "name": "Chris Haughey",
        "role": "Civil Engineer",
        "email": "chris.haughey@mccoycontractors.co.uk"
      },
      {
        "name": "Declan Tobin",
        "role": "Site Manager",
        "email": "declan.tobin@mccoycontractors.co.uk"
      },
      {
        "name": "Josh Dobson",
        "role": "Contracts Manager",
        "email": "josh.dobson@mccoycontractors.co.uk"
      },
      {
        "name": "Julian Rowles",
        "role": "Commercial Manager",
        "email": "julian.rowles@mccoycontractors.co.uk"
      },
      {
        "name": "Luke Raybone",
        "role": "Assistant Quantity Surveyor",
        "email": "luke.raybone@mccoycontractors.co.uk"
      },
      {
        "name": "Mark Mortiboy",
        "role": "Earthworks Manager",
        "email": "mark.mortiboy@mccoycontractors.co.uk"
      },
      {
        "name": "Paul Jones",
        "role": "Contracts Manager",
        "email": "paul.jones@mccoycontractors.co.uk"
      },
      {
        "name": "Scott Lawson",
        "role": "Project Manager",
        "email": "scott.lawson@mccoycontractors.co.uk"
      },
      {
        "name": "Shaun Sinclair",
        "role": "Contracts Manager",
        "email": "shaun.sinclair@mccoycontractors.co.uk"
      },
      {
        "name": "Simon Childs",
        "role": "Project Manager",
        "email": "simon.childs@mccoycontractors.co.uk"
      },
      {
        "name": "Steve Johnson",
        "role": "Commercial Manager",
        "email": "steve.johnson@mccoycontractors.co.uk",
        "phone": "7950941799.0"
      },
      {
        "name": "Vitor Almeida",
        "role": "Project Manager",
        "email": "vitor.almeida@mccoycontractors.co.uk"
      }
    ]
  },
  {
    "id": 470,
    "name": "McDermotts",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Anthony Moriarty",
        "role": "Contract Manager",
        "email": "anthony.moriarty@mcdermotts.co.uk"
      },
      {
        "name": "Bobby Friel",
        "role": "Projects Manager",
        "email": "bobby.friel@mcdermotts.co.uk"
      },
      {
        "name": "Craig Brittlebank",
        "role": "Project Manager",
        "email": "craig.brittlebank@mcdermotts.co.uk"
      },
      {
        "name": "Damien Gallagher",
        "role": "Contracts Manager",
        "email": "damien.gallagher@mcdermotts.co.uk"
      },
      {
        "name": "Darren Hitchins",
        "role": "Project Manager",
        "email": "darren.hitchins@mcdermotts.co.uk"
      },
      {
        "name": "Edvinas Palubinskas",
        "role": "Quantity Surveyor",
        "email": "edvinas.palubinskas@mcdermotts.co.uk"
      },
      {
        "name": "Farid Abrahimi",
        "role": "Quantity Surveyor",
        "email": "farid.abrahimi@mcdermotts.co.uk"
      },
      {
        "name": "Henry Gilbert",
        "role": "Director",
        "email": "henry.gilbert@mcdermotts.co.uk"
      },
      {
        "name": "Jim Dolan",
        "role": "Contracts Manager",
        "email": "jim.dolan@mcdermotts.co.uk"
      },
      {
        "name": "John Mariatte",
        "role": "Contracts Manager",
        "email": "john.mariatte@mcdermotts.co.uk"
      },
      {
        "name": "John McDermott",
        "role": "Health & Safety Director",
        "email": "john.mcdermott@mcdermotts.co.uk"
      },
      {
        "name": "John Moriarty",
        "role": "Contracts Manager",
        "email": "john.moriarty@mcdermotts.co.uk"
      },
      {
        "name": "Kevin Coles",
        "role": "Quantity Surveyor",
        "email": "kevin.coles@mcdermotts.co.uk"
      },
      {
        "name": "Malcolm McDermott",
        "role": "Managing Director",
        "email": "malcolm.mcdermott@mcderm.co.uk"
      },
      {
        "name": "Mark Dowd",
        "role": "Contracts Manager",
        "email": "mark.dowd@mcdermotts.co.uk"
      },
      {
        "name": "Niamh Jordan",
        "role": "Buyer",
        "email": "niamh.jordan@mcderm.co.uk"
      },
      {
        "name": "Richard Lloyd",
        "role": "Quantity Surveyor",
        "email": "richard.lloyd@mcdermotts.co.uk"
      },
      {
        "name": "Sebastian Cruze",
        "role": "Quantity Surveyor",
        "email": "sebastian.cruze@mcdermotts.co.uk"
      },
      {
        "name": "Simon Monk",
        "role": "Buyer",
        "email": "simon.monk@mcdermotts.co.uk"
      },
      {
        "name": "Stuart Kirby",
        "role": "Contracts Manager",
        "email": "stuart.kirby@mcdermotts.co.uk"
      }
    ]
  },
  {
    "id": 471,
    "name": "McGee Group Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Barry McShane",
        "role": "Assistant Project Manager",
        "email": "barry.mcshane@mcgee.co.uk",
        "phone": "7469085111.0"
      },
      {
        "name": "Brian Haughton",
        "role": "Contracts Manager",
        "email": "brian.haughton@mcgee.co.uk"
      },
      {
        "name": "Brian McGee",
        "role": "Managing Director",
        "email": "brian.mcgee@mcgee.co.uk"
      },
      {
        "name": "Daniel Kelly",
        "role": "Quantity Surveyor",
        "email": "daniel.kelly@mcgee.co.uk",
        "phone": "7500336159.0"
      },
      {
        "name": "Darren Smallman",
        "role": "Operations Manager",
        "email": "darren.smallman@mcgee.co.uk"
      },
      {
        "name": "Dave Chapman",
        "role": "Contract Manager",
        "email": "david.chapman@mcgee.co.uk"
      },
      {
        "name": "David Main",
        "role": "Project Manager",
        "email": "david.main@mcgee.co.uk"
      },
      {
        "name": "Declan Robinson",
        "role": "Site Manager",
        "email": "declan.robinson@mcgee.co.uk"
      },
      {
        "name": "Emma Attwood",
        "role": "Group Marketing Director",
        "email": "emma.attwood@mcgee.co.uk"
      },
      {
        "name": "Filipe Bastos",
        "role": "Project Manager",
        "email": "filipe.bastos@mcgee.co.uk"
      },
      {
        "name": "Harry Sheldrake",
        "role": "Quantity Surveyor",
        "email": "harry.sheldrake@mcgee.co.uk"
      },
      {
        "name": "Jessica McCarthy",
        "role": "Site Administrator",
        "email": "jessica.mccarthy@mcgee.co.uk"
      },
      {
        "name": "Jim Mackey",
        "role": "Managing Director",
        "email": "jim.mackey@mcgee.co.uk",
        "phone": "7984206841.0"
      },
      {
        "name": "Jody Paxman",
        "role": "Contracts Manager",
        "email": "jody.paxman@mcgee.co.uk"
      },
      {
        "name": "John Foley",
        "role": "Project Manager",
        "email": "john.foley@mcgee.co.uk",
        "phone": "7469084875.0"
      },
      {
        "name": "John McGee",
        "role": "Partner",
        "email": "john.mcgee@mcgee.co.uk"
      },
      {
        "name": "Laura Urquhart",
        "role": "Senior Project Coordinator",
        "email": "laura.urquhart@mcgee.co.uk"
      },
      {
        "name": "Liam Howard",
        "role": "Project Manager",
        "email": "liam.howard@mcgee.co.uk"
      },
      {
        "name": "Luke Carolan",
        "role": "Project Manager",
        "email": "luke.carolan@mcgee.co.uk",
        "phone": "7443060243.0"
      },
      {
        "name": "Nick Taylor",
        "role": "Project Manager",
        "email": "nick.taylor@mcgee.co.uk"
      },
      {
        "name": "Oliver Edwards",
        "role": "Quantity Surveyor",
        "email": "oliver.edwards@mcgee.co.uk",
        "phone": "7500040219.0"
      },
      {
        "name": "Paul Maguire",
        "role": "Construction Director",
        "email": "paul.maguire@mcgee.co.uk"
      },
      {
        "name": "Sean Lane",
        "role": "Quantity Surveyor",
        "email": "sean.lane@mcgee.co.uk"
      },
      {
        "name": "Seb Fossey",
        "role": "Managing Director",
        "email": "seb.fossey@mcgee.co.uk"
      },
      {
        "name": "Shane Baker",
        "role": "Head of Piling",
        "email": "shane.baker@mcgee.co.uk"
      },
      {
        "name": "Tamil Uddin",
        "role": "Sustainability Manager",
        "email": "tamil.uddin@mcgee.co.uk"
      },
      {
        "name": "Tony Coppola",
        "role": "Contracts Director",
        "email": "tony.coppola@mcgee.co.uk"
      },
      {
        "name": "Troy Robertson",
        "role": "Contracts Manager",
        "email": "troy.robertson@mcgee.co.uk"
      },
      {
        "name": "Will Jenner",
        "role": "Project Manager",
        "email": "will.jenner@mcgee.co.uk"
      },
      {
        "name": "William James",
        "role": "Project Manager",
        "email": "william.james@mcgee.co.uk",
        "phone": "7810513756.0"
      },
      {
        "name": "William Sutton",
        "role": "Project Manager",
        "email": "william.sutton@mcgee.co.uk"
      },
      {
        "name": "Oliver Edwards",
        "role": "Quantity Surveyor",
        "email": "hello@mcgee.co.uk",
        "phone": "07500 040219"
      }
    ]
  },
  {
    "id": 472,
    "name": "McLaren Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adam Winchester",
        "role": "Senior Quantity Surveyor",
        "email": "adam.winchester@mclarengroup.com"
      },
      {
        "name": "Adrian Fitton",
        "role": "Design Manager",
        "email": "adrian.fitton@mclarengroup.com"
      },
      {
        "name": "Adrian Harte",
        "role": "Quantity Surveyor",
        "email": "adrian.harte@mclarengroup.com"
      },
      {
        "name": "Alex Tinker",
        "role": "Quantity Surveyor",
        "email": "alex.tinker@mclarengroup.com"
      },
      {
        "name": "Andrew Jack",
        "email": "andrew.jack@mclarengroup.com"
      },
      {
        "name": "Andrew Maulden",
        "role": "Project Manager",
        "email": "andrew.maulden@mclarengroup.com"
      },
      {
        "name": "Andy James",
        "role": "Project Director",
        "email": "andy.james@mclarengroup.com"
      },
      {
        "name": "Arkadiusz Adamik",
        "role": "Site Engineer",
        "email": "arkadiusz.adamik@mclarengroup.com"
      },
      {
        "name": "Callum Hadfield",
        "role": "Quantity Surveyor",
        "email": "callum.hadfield@mclarengroup.com"
      },
      {
        "name": "Carl Adams",
        "role": "Project Director",
        "email": "carl.adams@mclarengroup.com"
      },
      {
        "name": "Charlie Harvey",
        "role": "Quantity Surveyor",
        "email": "charlie.harvey@mclarengroup.com"
      },
      {
        "name": "Chris Thorpe",
        "role": "Senior Quantity Surveyor",
        "email": "chris.thorpe@mclarengroup.com"
      },
      {
        "name": "Dan Kirby",
        "role": "Quantity Surveyor",
        "email": "dan.kirby@mclarengroup.com"
      },
      {
        "name": "Daniel Bell",
        "role": "Quantity Surveyor",
        "email": "daniel.bell@mclarengroup.com"
      },
      {
        "name": "Danny Daniels",
        "role": "Quantity Surveyor",
        "email": "danny.daniels@mclarengroup.com"
      },
      {
        "name": "Danny Schafer",
        "role": "Quantity Surveyor",
        "email": "danny.schafer@mclarengroup.com"
      },
      {
        "name": "Darren Gill",
        "role": "Managing Director",
        "email": "darren.gill@mclarengroup.com"
      },
      {
        "name": "Darren Sehmbi",
        "role": "Site Manager",
        "email": "darren.sehmbi@mclarengroup.com"
      },
      {
        "name": "David Gavin",
        "role": "Managing Director",
        "email": "david.gavin@mclarengroup.com"
      },
      {
        "name": "David Harrison",
        "role": "Quantity Surveyor",
        "email": "david.harrison@mclarengroup.com"
      },
      {
        "name": "Frankey Holley",
        "role": "Assistant Quantity Surveyor",
        "email": "frankey.holley@mclarengroup.com"
      },
      {
        "name": "Gal Farkash",
        "role": "Document Controller",
        "email": "gal.farkash@mclarengroup.com"
      },
      {
        "name": "Gavin Turnbull",
        "role": "Projects Manager",
        "email": "gavin.turnbull@mclarengroup.com"
      },
      {
        "name": "George Rae",
        "role": "Project Director",
        "email": "george.rae@mclarengroup.com"
      },
      {
        "name": "Gurpreet Shatra",
        "role": "Quantity Surveyor",
        "email": "gurpreet.shatra@mclarengroup.com"
      },
      {
        "name": "Harry Childs",
        "role": "Quantity Surveyor",
        "email": "harry.childs@mclarengroup.com"
      },
      {
        "name": "Harry Mitchell",
        "role": "Quantity Surveyor",
        "email": "harry.mitchell@mclarengroup.com"
      },
      {
        "name": "Iain Collyer",
        "role": "Commercial Lead",
        "email": "iain.collyer@mclarengroup.com"
      },
      {
        "name": "Iasonas Anastasiou",
        "email": "iasonas.anastasiou@mclarengroup.com"
      },
      {
        "name": "James Preston",
        "role": "Site Manager",
        "email": "james.preston@mclarengroup.com"
      },
      {
        "name": "Jason Howard",
        "role": "Site Manager",
        "email": "jason.howard@mclarengroup.com"
      },
      {
        "name": "Joe Garcia",
        "role": "Senior Project Manager",
        "email": "joe.garcia@mclarengroup.com"
      },
      {
        "name": "Joe Palladino",
        "role": "Operations Director",
        "email": "joe.palladino@mclarengroup.com"
      },
      {
        "name": "John Butten",
        "role": "Regional Director",
        "email": "john.butten@mclarengroup.com"
      },
      {
        "name": "Josh Armstrong-Saunders",
        "role": "Site Manager",
        "email": "josh.armstrong-saunders@mclarengroup.com"
      },
      {
        "name": "Joshua Butterworth",
        "role": "Senior Quantity Surveyor",
        "email": "joshua.butterworth@mclarengroup.com"
      },
      {
        "name": "Juan Alarcon",
        "role": "Senior Quantity Surveyor",
        "email": "juan.alarcon@mclarengroup.com"
      },
      {
        "name": "Lee Bartlett",
        "role": "Project Director",
        "email": "lee.bartlett@mclarengroup.com"
      },
      {
        "name": "Lewis Lee",
        "role": "Project Manager",
        "email": "lewis.lee@mclarengroup.com",
        "phone": "07714 208088"
      },
      {
        "name": "Luis Andoin",
        "role": "Site Manager",
        "email": "luis.andoin@mclarengroup.com"
      },
      {
        "name": "Luke Brennan",
        "role": "Quantity Surveyor",
        "email": "luke.brennan@mclarengroup.com"
      },
      {
        "name": "Luke Dowding",
        "role": "Project Manager",
        "email": "luke.dowding@mclarengroup.com"
      },
      {
        "name": "Mark Watkinson",
        "role": "Technical Director",
        "email": "mark.watkinson@mclarengroup.com"
      },
      {
        "name": "Matt Foster",
        "role": "Senior Design Manager",
        "email": "matt.foster@mclarengroup.com"
      },
      {
        "name": "Matthew Booth",
        "role": "Senior Project Manager",
        "email": "matthew.booth@mclarengroup.com"
      },
      {
        "name": "Michael Butcher",
        "email": "michael.butcher@mclarengroup.com"
      },
      {
        "name": "Neil McBain",
        "role": "Quantity Surveyor",
        "email": "neil.mcbain@mclarengroup.com"
      },
      {
        "name": "Neil Smith",
        "role": "Operations Director",
        "email": "neil.smith@mclarengroup.com"
      },
      {
        "name": "Patrick Murphy",
        "role": "Operational Director",
        "email": "patrick.murphy@mclarengroup.com"
      },
      {
        "name": "Rhiana Mcannalley",
        "role": "Quantity Surveyor",
        "email": "rhiana.mcannalley@mclarengroup.com"
      },
      {
        "name": "Rhys Sibley",
        "role": "Commercial Manager",
        "email": "rhys.sibley@mclarengroup.com"
      },
      {
        "name": "Richard Rowbotham",
        "role": "Commercial Manager",
        "email": "richard.rowbotham@mclarengroup.com"
      },
      {
        "name": "Ryan Miller",
        "email": "ryan.miller@mclarengroup.com"
      },
      {
        "name": "Sean Oregan",
        "role": "Quantity Surveyor",
        "email": "sean.oregan@mclarengroup.com"
      },
      {
        "name": "Simon Le Fevre",
        "role": "Project Director",
        "email": "simon.lefevre@mclarengroup.com"
      },
      {
        "name": "Stephen Petersen",
        "role": "Project Manager",
        "email": "stephen.petersen@mclarengroup.com"
      },
      {
        "name": "Steve Clarke",
        "role": "Site Manager",
        "email": "steve.clarke@mclarengroup.com"
      },
      {
        "name": "Sunny Virk",
        "role": "Quantity Surveyor",
        "email": "sunny.virk@mclarengroup.com"
      },
      {
        "name": "Todd Bennett",
        "role": "Quantity Surveyor",
        "email": "todd.bennett@mclarengroup.com"
      },
      {
        "name": "Tony Quick",
        "role": "Project Director",
        "email": "tony.quick@mclarengroup.com"
      },
      {
        "name": "Tony Whyte",
        "role": "Divisional Director",
        "email": "tony.whyte@mclarengroup.com"
      },
      {
        "name": "William Mackie",
        "role": "Project Manager",
        "email": "william.mackie@mclarengroup.com"
      },
      {
        "name": "William Sloane",
        "role": "Quantity Surveyor",
        "email": "william.sloane@mclarengroup.com"
      },
      {
        "name": "Zak Carroll",
        "role": "Project Director",
        "email": "zak.carroll@mclarengroup.com"
      },
      {
        "name": "Alister Lewis",
        "role": "Director",
        "email": "alister.lewis@mclarengroup.com"
      },
      {
        "name": "Andy Case",
        "role": "Site Manager",
        "email": "andy.case@mclarengroup.com"
      },
      {
        "name": "Barrie Richard",
        "role": "Commercial Director",
        "email": "barrie.richard@mclarengroup.com"
      },
      {
        "name": "Barry Jones",
        "role": "Senior Site Manager",
        "email": "barry.jones@mclarengroup.com"
      },
      {
        "name": "Ben Godfrey",
        "role": "Quantity Surveyor",
        "email": "ben.godfrey@mclarengroup.com"
      },
      {
        "name": "Ben Jones",
        "role": "Commercial Manager",
        "email": "ben.jones@mclarenconstruction.co.uk"
      },
      {
        "name": "Ben Talbot",
        "role": "Project Manager",
        "email": "ben.talbot@mclarengroup.com"
      },
      {
        "name": "Billy Lewis",
        "role": "Quantity Surveyor",
        "email": "billy.lewis@mclarengroup.com"
      },
      {
        "name": "Callum Clay",
        "role": "Estimator",
        "email": "callum.clay@mclarengroup.com"
      },
      {
        "name": "Charlie Nicholls",
        "role": "Business Development Analyst",
        "email": "charlie.nicholls@mclarengroup.com"
      },
      {
        "name": "Charlie Ryder",
        "role": "Contracts Manager",
        "email": "charlie.ryder@mclarenconstruction.co.uk"
      },
      {
        "name": "Chloe Sawyer",
        "role": "Environmental Advisor",
        "email": "chloe.sawyer@mclarengroup.com"
      },
      {
        "name": "Chris Kaneen",
        "role": "Project Manager",
        "email": "chris.kaneen@mclarengroup.com"
      },
      {
        "name": "Clint Mayor",
        "role": "Site Manager",
        "email": "clint.mayor@mclarengroup.com"
      },
      {
        "name": "Cody Murray",
        "role": "Assistant Site Manager",
        "email": "cody.murray@mclarengroup.com"
      },
      {
        "name": "Colton Magnus",
        "role": "Building Services Manager",
        "email": "colton.magnus@mclarengroup.com"
      },
      {
        "name": "Dan Bell",
        "role": "Quantity Surveyor",
        "email": "dan.bell@mclarengroup.com"
      },
      {
        "name": "Dan Kirby",
        "role": "Quantity Surveyor",
        "email": "daniel.kirby@mclarenconstruction.co.uk"
      },
      {
        "name": "Danny Watts",
        "role": "Quantity Surveyor",
        "email": "danny.watts@mclarengroup.com"
      },
      {
        "name": "David Atherton",
        "role": "Development Director",
        "email": "david.atherton@mclarengroup.com"
      },
      {
        "name": "David Gavin",
        "role": "Logistics Director",
        "email": "dave.gavin@mclarengroup.com"
      },
      {
        "name": "David Moorhouse",
        "role": "Project Manager",
        "email": "david.moorhouse@mclarengroup.com"
      },
      {
        "name": "David Savage",
        "role": "Senior Quantity Surveyor",
        "email": "david.savage@mclarengroup.com"
      },
      {
        "name": "Dermot Keane",
        "role": "Project Director",
        "email": "dermot.keane@mclarengroup.com"
      },
      {
        "name": "Dominic Egan",
        "role": "Director",
        "email": "dominic.egan@mclarengroup.com"
      },
      {
        "name": "Duncan Ragg",
        "role": "Quantity Surveyor",
        "email": "duncan.ragg@mclarengroup.com"
      },
      {
        "name": "Edward Bannerman-Adams",
        "role": "Quality Engineer",
        "email": "edward.bannerman-adams@mclarengroup.com"
      },
      {
        "name": "Eike Schwartlander",
        "role": "Senior Project Manager",
        "email": "eike.schwartlander@mclarengroup.com"
      },
      {
        "name": "Elliot Alexander",
        "role": "Project Quantity Surveyor",
        "email": "elliot.alexander@mclarengroup.com"
      },
      {
        "name": "Elliot Comolli",
        "role": "Quantity Surveyor",
        "email": "elliot.comolli@mclarengroup.com"
      },
      {
        "name": "Emilio Garcia",
        "role": "Senior Quantity Surveyor",
        "email": "emilio.garcia@mclarengroup.com"
      },
      {
        "name": "Garry McQueen",
        "role": "Project Director",
        "email": "garry.mcqueen@mclarengroup.com"
      },
      {
        "name": "Gary Cramp",
        "role": "Managing Director",
        "email": "gary.cramp@mclarengroup.com"
      },
      {
        "name": "George Ray",
        "role": "Project Director",
        "email": "george.ray@mclarengroup.com"
      },
      {
        "name": "Gurpreep Shatra",
        "role": "Quantity Surveyor",
        "email": "gurpreep.shatra@mclarengroup.com"
      },
      {
        "name": "Harry Clarke",
        "role": "Project Leader",
        "email": "harry.clarke@mclarengroup.com"
      },
      {
        "name": "Jack Sheehan",
        "role": "Site Manager",
        "email": "jack.sheehan@mclarengroup.com"
      },
      {
        "name": "Jack Thompson",
        "role": "Quantity Surveyor",
        "email": "jack.thompson@mclarengroup.com"
      },
      {
        "name": "James Creevy",
        "role": "Development Director",
        "email": "james.creevy@mclarengroup.com"
      },
      {
        "name": "James Fryer",
        "role": "Project Director",
        "email": "james.fryer@mclarengroup.com"
      },
      {
        "name": "Jamie Mumford",
        "role": "Project Manager",
        "email": "jamie.mumford@mclarengroup.com"
      },
      {
        "name": "Jason Pye",
        "role": "Project Manager",
        "email": "jason.pye@mclarengroup.com"
      },
      {
        "name": "Jason Staal",
        "role": "Site Manager",
        "email": "jason.staal@mclarengroup.com"
      },
      {
        "name": "Jay Newman",
        "role": "Quantity Surveyor",
        "email": "jay.newman@mclarengroup.com"
      },
      {
        "name": "Jeff French",
        "role": "Project Manager",
        "email": "jeff.french@mclarengroup.com"
      },
      {
        "name": "John Maley",
        "role": "Senior Project Manager",
        "email": "john.maley@mclarengroup.com",
        "phone": "7447583728.0"
      },
      {
        "name": "Justin Brown",
        "role": "Project Director",
        "email": "justin.brown@mclarengroup.com",
        "phone": "07985 412555"
      },
      {
        "name": "Khalid Patel",
        "role": "Quantity Surveyor",
        "email": "khalid.patel@mclarengroup.com"
      },
      {
        "name": "Lee Witts",
        "role": "Project Leader",
        "email": "lee.witts@mclarengroup.com"
      },
      {
        "name": "Luke Arnold",
        "role": "Regional Director",
        "email": "luke.arnold@mclarengroup.com"
      },
      {
        "name": "Mark Conlin",
        "role": "Project Manager",
        "email": "mark.conlin@mclarengroup.com"
      },
      {
        "name": "Mark Howe",
        "role": "Senior Quantity Surveyor",
        "email": "mark.howe@mclarengroup.com"
      },
      {
        "name": "Mark Sowerby",
        "role": "Project Director",
        "email": "mark.sowerby@mclarengroup.com"
      },
      {
        "name": "Mick Byrne",
        "role": "Senior Project Manager",
        "email": "mick.byrne@mclarengroup.com"
      },
      {
        "name": "Miguel Machado",
        "role": "Project Manager",
        "email": "miguel.machado@mclarengroup.com"
      },
      {
        "name": "Nick Fox",
        "role": "Business Development Director",
        "email": "nick.fox@mclarengroup.com",
        "phone": "7887833128.0"
      },
      {
        "name": "Patrick Murphy",
        "role": "Regional Director",
        "email": "patrick.murphy@mclarenconstruction.co.uk"
      },
      {
        "name": "Paul Kerry",
        "role": "Senior Project Manager",
        "email": "paul.kerry@mclarengroup.com"
      },
      {
        "name": "Paul Woodhams",
        "role": "Managing Director",
        "email": "paul.woodhams@mclarengroup.com"
      },
      {
        "name": "Peter Boswell",
        "role": "Site Manager",
        "email": "peter.boswell@mclarengroup.com"
      },
      {
        "name": "Peter Jones",
        "role": "Peter Jones",
        "email": "peter.jones@mclarengroup.com",
        "phone": "07595 031197"
      },
      {
        "name": "Phil Gerrard",
        "role": "Quantity Surveyor",
        "email": "phil.gerrard@mclarengroup.com"
      },
      {
        "name": "Prentice Lloyd",
        "role": "Project Leader",
        "email": "prentice.lloyd@mclarengroup.com"
      },
      {
        "name": "Ray Faulks",
        "role": "Project Leader",
        "email": "ray.faulks@mclarengroup.com"
      },
      {
        "name": "Reece Shoobridge",
        "role": "Quantity Surveyor",
        "email": "reece.shoobridge@mclarengroup.com"
      },
      {
        "name": "Richard Eager",
        "role": "Director",
        "email": "richard.eager@mclarengroup.com"
      },
      {
        "name": "Robert Vining",
        "role": "Quantity Surveyor",
        "email": "robert.vining@mclarengroup.com"
      },
      {
        "name": "Sam Trowbridge",
        "role": "Site Manager",
        "email": "sam.trowbridge@mclarengroup.com"
      },
      {
        "name": "Simon Van Raalte",
        "role": "Quantity Surveyor",
        "email": "simon.vanraalte@mclarengroup.com"
      },
      {
        "name": "Steve Randall",
        "role": "Project Director",
        "email": "steve.randall@mclarengroup.com"
      },
      {
        "name": "Steven Boston",
        "role": "Building Control Surveyor",
        "email": "steven.boston@mclarengroup.com"
      },
      {
        "name": "Steven Florence",
        "role": "Project Manager",
        "email": "steven.florence@mclarenconstruction.co.uk"
      },
      {
        "name": "Stuart Potter",
        "role": "Project Director",
        "email": "stuart.potter@mclarengroup.com"
      },
      {
        "name": "Tobe Onyebchi",
        "role": "Quantity Surveyor",
        "email": "tobe.onyebchi@mclarengroup.com"
      },
      {
        "name": "Vince Lydon",
        "role": "Managing Director",
        "email": "vince.lydon@mclarengroup.com"
      },
      {
        "name": "William Camp",
        "role": "Quantity Surveyor",
        "email": "william.camp@mclarengroup.com"
      },
      {
        "name": "William Sloan",
        "role": "Commercial Manager",
        "email": "william.sloan@mclarengroup.com"
      }
    ]
  },
  {
    "id": 473,
    "name": "McLaren Group Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Ian Macdonald",
        "email": "ian.macdonald@mclaren.com"
      },
      {
        "name": "Matthew Biddle",
        "role": "Managing Director",
        "email": "matthew.biddle@mclaren.com"
      },
      {
        "name": "Simon Harvey",
        "role": "Head of Property",
        "email": "simon.harvey@mclaren.com",
        "phone": "07500 552992"
      }
    ]
  },
  {
    "id": 474,
    "name": "McLaughlin & Harvey",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alan Davies",
        "role": "Senior Quantity Surveyor",
        "email": "alan.davies@mclh.co.uk"
      },
      {
        "name": "Andrew Finnegan",
        "role": "Senior Project Manager",
        "email": "andrew.finnegan@mclh.co.uk"
      },
      {
        "name": "Andrew McCallum",
        "role": "Quantity Surveyor",
        "email": "andrew.mccallum@mclh.co.uk"
      },
      {
        "name": "Gareth Brennan",
        "role": "Project Director",
        "email": "gareth.brennan@mclh.co.uk",
        "phone": "7917641854.0"
      },
      {
        "name": "Gerald Brannigan",
        "role": "Contracts Manager",
        "email": "gerald.brannigan@mclh.co.uk",
        "phone": "7909966201.0"
      },
      {
        "name": "John Toal",
        "role": "Senior Quantity Surveyor",
        "email": "john.toal@mclh.co.uk"
      },
      {
        "name": "Jonny Holmes",
        "role": "Senior Quantity Surveyor",
        "email": "jonny.holmes@mclh.co.uk"
      },
      {
        "name": "Josh Egerton",
        "role": "Quantity Surveyor",
        "email": "josh.egerton@mclh.co.uk"
      },
      {
        "name": "Keisha Breen",
        "role": "Senior Quantity Surveyor",
        "email": "keisha.breen@mclh.co.uk",
        "phone": "7825034523.0"
      },
      {
        "name": "Martin Harvey",
        "role": "Commercial Director",
        "email": "martin.harvey@mclh.co.uk",
        "phone": "7817999414.0"
      },
      {
        "name": "Martin McEown",
        "role": "Contracts Manager",
        "email": "martin.mceown@mclh.co.uk"
      },
      {
        "name": "Marvin Garrick",
        "role": "Site Manager",
        "email": "marvin.garrick@mclh.co.uk"
      },
      {
        "name": "Neil Jamieson",
        "role": "Quantity Surveyor",
        "email": "neil.jamieson@mclh.co.uk",
        "phone": "7817999460.0"
      },
      {
        "name": "Niamh Hanna",
        "role": "Quantity Surveyor",
        "email": "niamh.hanna@mclh.co.uk"
      },
      {
        "name": "Rory Magorrian",
        "role": "Senior Project Manager",
        "email": "rory.magorrian@mclh.co.uk"
      },
      {
        "name": "Seamus Devlin",
        "role": "Director",
        "email": "seamus.devlin@mclh.co.uk"
      },
      {
        "name": "Sean McNally",
        "email": "sean.mcnally@mclh.co.uk"
      },
      {
        "name": "Stuart Young",
        "role": "Project Manager",
        "email": "stuart.young@mclh.co.uk"
      },
      {
        "name": "Andrew Ferguson",
        "role": "Project Manager",
        "email": "comms@mclh.co.uk",
        "phone": "07976 340419"
      },
      {
        "name": "Bruce Cunningham",
        "role": "Quantity Surveyor",
        "email": "bruce.cunningham@mclh.co.uk",
        "phone": "07884 354889"
      },
      {
        "name": "Gary McLeary",
        "role": "Project Manager",
        "email": "gary.mcleary@mclh.co.uk",
        "phone": "7817999472.0"
      },
      {
        "name": "John Paul O'Hara",
        "role": "Contracts Manager",
        "email": "john.ohara@mclhc.co.uk",
        "phone": "07825 281123"
      },
      {
        "name": "Kevin McSorley",
        "role": "Site Manager",
        "email": "kevin.mcsorley@mclhc.co.uk",
        "phone": "07976 340524"
      },
      {
        "name": "Kyle Hall",
        "role": "Quantity Surveyor",
        "email": "kyle.hall@mclh.co.uk",
        "phone": "07741 102941"
      },
      {
        "name": "Martin Lane",
        "role": "Quantity Surveyor",
        "email": "martin.lane@mclh.co.uk",
        "phone": "07817 999466"
      },
      {
        "name": "Stephen Barrie",
        "role": "Quantity Surveyor",
        "email": "stephen.barrie@mclh.co.uk",
        "phone": "7817999443.0"
      },
      {
        "name": "Adrian McShane",
        "role": "Site Manager",
        "email": "adrian.mcshane@mclh.co.uk",
        "phone": "07900 980516"
      },
      {
        "name": "Adrian Purcell",
        "role": "Project Manager",
        "email": "adrian.purcell@mclh.co.uk"
      },
      {
        "name": "Alan Ward",
        "role": "Senior Quantity Surveyor",
        "email": "alan.ward@mclh.co.uk"
      },
      {
        "name": "Andrew Donaldson",
        "role": "Quantity Surveyor",
        "email": "mclh@mclh.co.uk",
        "phone": "7823536964.0"
      },
      {
        "name": "Bobby Taggart",
        "role": "Quantity Surveyor",
        "email": "bobby.taggart@mclh.co.uk",
        "phone": "7920723125.0"
      },
      {
        "name": "Bronagh Casey",
        "email": "bronagh.casey@mclh.co.uk"
      },
      {
        "name": "Chris Toner",
        "role": "Quantity Surveyor",
        "email": "chris.toner@mclh.co.uk"
      },
      {
        "name": "Connell Scott",
        "role": "Quantity Surveyor",
        "email": "connell.scott@mclh.co.uk",
        "phone": "07471 027403"
      },
      {
        "name": "Conor McKenna",
        "role": "Site Manager",
        "email": "conor.mckenna@mclh.co.uk",
        "phone": "07920 365920"
      },
      {
        "name": "David Lynch",
        "role": "Senior Quantity Surveyor",
        "email": "david.lynch@mclh.co.uk",
        "phone": "07552 689469"
      },
      {
        "name": "Grant Cunliffe",
        "role": "Contract Manager",
        "email": "grant.cuncliffe@mclh.co.uk",
        "phone": "7976340434.0"
      },
      {
        "name": "Jim Wallace",
        "role": "Senior Project Manager",
        "email": "jim.wallace@mclh.co.uk",
        "phone": "07771 823446"
      },
      {
        "name": "Michael Kieran",
        "role": "Operations Director",
        "email": "michael.kieran@mclh.co.uk",
        "phone": "7798806471.0"
      },
      {
        "name": "Oran Donnelly",
        "role": "Quantity Surveyor",
        "email": "oran.donnelly@mclh.co.uk",
        "phone": "07769 300052"
      },
      {
        "name": "Shane Greer",
        "role": "Project Manager",
        "email": "shane.greer@mclh.co.uk",
        "phone": "07827 307504"
      },
      {
        "name": "William Cunningham",
        "role": "Contracts Manager",
        "email": "williamjohn.cunningham@mclh.co.uk",
        "phone": "07876 647523"
      }
    ]
  },
  {
    "id": 475,
    "name": "McRail Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alf Ferizoli",
        "role": "Contract Manager",
        "email": "alf.ferizoli@rmccivileng.co.uk"
      },
      {
        "name": "Gary Robinson",
        "role": "Quantity Surveyor",
        "email": "gary.robinson@rmccivileng.co.uk"
      },
      {
        "name": "Stephen Griffiths",
        "role": "Project Manager",
        "email": "stephen.griffiths@rmccivileng.co.uk"
      }
    ]
  },
  {
    "id": 476,
    "name": "MDS Civil Engineering Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Danny Piper",
        "role": "Contracts Manager",
        "email": "danny@mds.uk.com",
        "phone": "07787 521 940"
      },
      {
        "name": "Garie Mitchell",
        "role": "Contract Manager",
        "email": "garie@mds.uk.com"
      },
      {
        "name": "Richard Pullen",
        "role": "Construction Director",
        "email": "richard@mds.uk.com",
        "phone": "07917 133 190"
      },
      {
        "name": "Russell Williams",
        "role": "Buyer",
        "email": "russell@mds.uk.com"
      },
      {
        "name": "Ryan Townsend",
        "role": "Buyer",
        "email": "ryan@mds.uk.com"
      }
    ]
  },
  {
    "id": 477,
    "name": "Mead Construction (Cambridge) Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Michael Mead",
        "role": "Director",
        "email": "michael@mead-construction.co.uk"
      }
    ]
  },
  {
    "id": 478,
    "name": "MET Developments",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Metin Susuz",
        "role": "Director",
        "email": "metin@metdevelopment.co.uk"
      },
      {
        "name": "Mihir Upathyaya",
        "role": "Quantity Surveyor",
        "email": "mihir@metdevelopment.co.uk"
      },
      {
        "name": "Ryan Townsend",
        "role": "Buyer",
        "email": "ryan@mds.uk.com"
      }
    ]
  },
  {
    "id": 479,
    "name": "Metro Deconstruction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andy Knight",
        "role": "Procurement Manager",
        "email": "andy@metro.uk.net"
      },
      {
        "name": "Anna Burling",
        "role": "Safety Officer",
        "email": "anna@metro.uk.net"
      },
      {
        "name": "Ben Addison",
        "role": "Site Manager",
        "email": "ben@metro.uk.net",
        "phone": "07432 527059"
      },
      {
        "name": "Chloe Court",
        "role": "Project Controller",
        "email": "chloe@metro.uk.net"
      },
      {
        "name": "Dan Marchant",
        "role": "Contracts Director",
        "phone": "7762891863.0"
      },
      {
        "name": "Jade Rose",
        "role": "Pre Construction Director",
        "email": "jade@metro.uk.net"
      },
      {
        "name": "Jamie Bagge",
        "role": "Site Manager",
        "email": "jamie@metro.uk.net",
        "phone": "07961 201560"
      },
      {
        "name": "Mark Taylor",
        "role": "Managing Director",
        "email": "mark@metro.uk.net",
        "phone": "07966 612909"
      },
      {
        "name": "Paul Bower",
        "role": "Senior Contracts Manager",
        "email": "paul@metro.uk.net",
        "phone": "7880030977.0"
      },
      {
        "name": "Sherlon Elliot",
        "role": "Project Manager",
        "email": "sherlon@metro.uk.net",
        "phone": "7539029828.0"
      },
      {
        "name": "Simon King",
        "role": "Contracts Director",
        "email": "si@metro.uk.net",
        "phone": "07932 359701"
      },
      {
        "name": "Courtney How",
        "role": "Estimating Administrator",
        "email": "courtney@metro.uk.net"
      },
      {
        "name": "Dan Marchant",
        "role": "Contracts Director",
        "email": "dan@metro.uk.net",
        "phone": "7762891863.0"
      },
      {
        "name": "Lewis Davis",
        "role": "Contracts Manager",
        "email": "lewis@metro.uk.net"
      },
      {
        "name": "Simon Barden",
        "role": "Project Manager",
        "email": "simon.barden@metro.uk.net"
      }
    ]
  },
  {
    "id": 480,
    "name": "MetStructures Limited",
    "disciplines": [
      "RC Frame"
    ],
    "contacts": [
      {
        "name": "Alistair Barker",
        "role": "Project Manager",
        "email": "alistair.barker@metstructures.uk.com",
        "phone": "07966 182198"
      },
      {
        "name": "Andrew Martin",
        "role": "Senior Site Manager",
        "email": "andrew.martin@metstructures.uk.com"
      },
      {
        "name": "Gary Donnelly",
        "role": "Operations Director",
        "email": "gary.donnelly@metstructures.uk.com"
      },
      {
        "name": "Graeme Stevenson",
        "email": "graeme.stevenson@metstructures.uk.com",
        "phone": "07508 524117"
      },
      {
        "name": "Keith Wood",
        "role": "Head of Business Development",
        "email": "keith.wood@metstructures.uk.com",
        "phone": "07966 711714"
      },
      {
        "name": "Martin Clyne",
        "role": "Operations Director",
        "email": "martin.clyne@metstructures.uk.com",
        "phone": "07591 834148"
      },
      {
        "name": "Michael Firth",
        "role": "Project Manager",
        "email": "michael.firth@metstructures.uk.com"
      },
      {
        "name": "Paul Morrison",
        "role": "Commercial Manager",
        "email": "paul.morrison@metstructures.uk.com"
      },
      {
        "name": "Phil Rogers",
        "role": "Site Manager",
        "email": "phil.rogers@metstructures.uk.com"
      },
      {
        "name": "Tony Donnelly",
        "role": "Operations Director",
        "email": "tony.donnelly@metstructures.uk.com"
      },
      {
        "name": "Commercial Team",
        "email": "info@metstructures.co.uk"
      }
    ]
  },
  {
    "id": 481,
    "name": "MG Groundworks Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Kevin Little",
        "role": "Commercial Director",
        "email": "kevin.little@mggroundworks.com"
      },
      {
        "name": "Michael Alexander",
        "role": "Director",
        "email": "mick@mggroundworks.com"
      }
    ]
  },
  {
    "id": 482,
    "name": "MGB Contractors Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Marin Gazulli",
        "role": "Director",
        "email": "marin.gazulli@mgbcontractors.co.uk"
      }
    ]
  },
  {
    "id": 483,
    "name": "Michelmersh Brick Holdings PLC",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Mark Wall",
        "role": "Commercial Director",
        "email": "mwall@mbhplc.co.uk"
      },
      {
        "name": "Mick Brophy",
        "email": "mbrophy@mbhplc.co.uk"
      }
    ]
  },
  {
    "id": 484,
    "name": "Mick George Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adrian Hardesty",
        "role": "Operations Manager",
        "email": "adrian.hardesty@mickgeorge.co.uk"
      },
      {
        "name": "Alastair McDermid",
        "role": "Business Development Director",
        "email": "alastair.mcdermid@mickgeorge.co.uk"
      },
      {
        "name": "Andy Girvan",
        "email": "andy@mickgeorge.co.uk"
      },
      {
        "name": "Chris Winfield",
        "role": "Estimator",
        "email": "chris.winfield@mickgeorge.co.uk",
        "phone": "07979 501414"
      },
      {
        "name": "David Walton",
        "role": "Site Supervisor",
        "email": "david@mickgeorge.co.uk"
      },
      {
        "name": "Graham Clark",
        "role": "Contracts Director",
        "email": "graham@mickgeorge.co.uk"
      },
      {
        "name": "Hayley Gent",
        "role": "Quantity Surveyor",
        "email": "hayley.gent@mickgeorge.co.uk"
      },
      {
        "name": "Joe Nelson",
        "role": "Operations Director",
        "email": "joe.nelson@mickgeorge.co.uk",
        "phone": "7824991181.0"
      },
      {
        "name": "John Gough",
        "role": "Project Manager",
        "email": "johng@mickgeorge.co.uk",
        "phone": "07742 621117"
      },
      {
        "name": "Jonathan Stump",
        "role": "Finance Director",
        "email": "jonathan.stump@mickgeorge.co.uk"
      },
      {
        "name": "Kelly Sanderson",
        "role": "Planning Assistant",
        "email": "kelly.sanderson@mickgeorge.co.uk"
      },
      {
        "name": "Lauren Moser",
        "role": "Account Manager",
        "email": "lauren.moser@mickgeorge.co.uk"
      },
      {
        "name": "Lee Boyes",
        "role": "Project Manager",
        "email": "leescott.boyes@mickgeorge.co.uk"
      },
      {
        "name": "Leon Doyne",
        "role": "Senior Quantity Surveyor",
        "email": "leon.doyne@mickgeorge.co.uk"
      },
      {
        "name": "Lewis Davies",
        "role": "Site Manager",
        "email": "lewis.davies@mickgeorge.co.uk"
      },
      {
        "name": "Michael Duppa-Miller",
        "email": "michael.duppa-miller@mickgeorge.co.uk"
      },
      {
        "name": "Paul Hollowell",
        "role": "Contract Manager",
        "email": "paul.hollowell@mickgeorge.co.uk"
      },
      {
        "name": "Sammy Wayne",
        "role": "Contract Manager",
        "email": "sammy.wayne@mickgeorge.co.uk"
      },
      {
        "name": "Shaun Hegarty",
        "role": "Site Manager",
        "email": "shaunh@mickgeorge.co.uk"
      },
      {
        "name": "Stuart Elliott",
        "role": "Commercial Director",
        "email": "stuart.elliott@mickgeorge.co.uk"
      },
      {
        "name": "Wayne Penfold",
        "role": "Operations Director",
        "email": "wayne.penfold@mickgeorge.co.uk"
      }
    ]
  },
  {
    "id": 485,
    "name": "MIDA Civil Engineering",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Fatmir Hafuzi",
        "role": "Senior Contracts Manager",
        "email": "fatmir.hafuzi@midacivils.co.uk"
      },
      {
        "name": "Julian Boeta",
        "role": "Site Manager",
        "email": "julian.boeta@midacivils.co.uk"
      },
      {
        "name": "Julie Lawler",
        "role": "Account Manager",
        "email": "julie.lawler@midacivils.co.uk"
      },
      {
        "name": "Liam Kirk",
        "role": "Site Manager",
        "email": "liam.kirk@midacivils.co.uk"
      },
      {
        "name": "Michael Clorley",
        "role": "Director",
        "email": "michael.clorley@midacivils.co.uk"
      },
      {
        "name": "Steve Moran",
        "role": "Contracts Manager",
        "email": "steve.moran@midacivils.co.uk"
      },
      {
        "name": "Tom Bowerman",
        "role": "Quantity Surveyor",
        "email": "tom.bowerman@midacivils.co.uk"
      }
    ]
  },
  {
    "id": 486,
    "name": "Mitchellson Formwork & Civil Engineering Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Chris Lynch",
        "role": "Buyer",
        "email": "chris.lynch@mitchellson.co.uk"
      },
      {
        "name": "Darren Murphy",
        "role": "Contract Manager",
        "email": "darren.murphy@mitchellson.co.uk"
      },
      {
        "name": "Eddie Meyer",
        "role": "Contracts Manager",
        "email": "eddie.meyer@mitchellson.co.uk"
      },
      {
        "name": "Hossein Shadimehr",
        "role": "Contracts Manager",
        "email": "hossein.shadimehr@mitchellson.co.uk"
      },
      {
        "name": "John Lennon",
        "role": "Quantity Surveyor",
        "email": "john.lennon@mitchellson.co.uk"
      },
      {
        "name": "Martin Masterson",
        "role": "Managing Director",
        "email": "martin.masterson@mitchellson.co.uk",
        "phone": "07973 113318"
      },
      {
        "name": "Michael McGuire",
        "role": "Contracts Manager",
        "email": "michael.mcguire@mitchellson.co.uk"
      },
      {
        "name": "Mike King",
        "role": "Construction Director",
        "email": "mike.king@mitchellson.co.uk"
      },
      {
        "name": "Owen O'Connell",
        "role": "Project Manager",
        "email": "owen.oconnell@mitchellson.co.uk"
      },
      {
        "name": "Ronan Caheny",
        "role": "Contracts Manager",
        "email": "ronan.caheny@mitchellson.co.uk"
      },
      {
        "name": "Rowan Schwartz",
        "role": "Quantity Surveyor",
        "email": "rowan.schwartz@mitchellson.co.uk"
      },
      {
        "name": "Tim Hourigan",
        "role": "Estimating Director",
        "email": "tim.hourigan@mitchellson.co.uk"
      }
    ]
  },
  {
    "id": 487,
    "name": "Mitchelson Plant Hire Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Caron Stephen",
        "role": "Project Manager",
        "email": "caron.stephen@mitchellson.co.uk"
      },
      {
        "name": "Mike King",
        "role": "Construction Director",
        "email": "mike.king@mitchellson.co.uk"
      },
      {
        "name": "Ronan Cahney",
        "role": "Project Director",
        "email": "ronan.cahney@mitchellson.co.uk"
      }
    ]
  },
  {
    "id": 488,
    "name": "MJ Robinson",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Fraser Kirk",
        "role": "Quantity Surveyor",
        "email": "fraser.kirk@mjrobinson.com"
      },
      {
        "name": "Jeff Sims",
        "role": "Buyer",
        "email": "jeff.sims@mjrobinson.com"
      },
      {
        "name": "John Robinson",
        "role": "Contracts Manager",
        "email": "john.robinson@mjrobinson.com"
      },
      {
        "name": "Michael Robinson",
        "role": "Managing Director",
        "email": "mike.robinson@mjrobinson.com"
      },
      {
        "name": "Richard Fry",
        "role": "Sales & Marketing Manager",
        "email": "richard.fry@mjrobinson.com",
        "phone": "07741 306229"
      },
      {
        "name": "Tom Leighton",
        "role": "Contracts Manager",
        "email": "tom.leighton@mjrobinson.com",
        "phone": "07788 340581"
      }
    ]
  },
  {
    "id": 489,
    "name": "MJS Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Antony Clark",
        "role": "Construction Manager",
        "email": "antony.clark@mjsconstruction.co.uk"
      },
      {
        "name": "Ben Faxby",
        "role": "Quantity Surveyor",
        "email": "ben@mjsconstruction.co.uk"
      },
      {
        "name": "Bruce Miller",
        "role": "Site Manager",
        "email": "bruce@mjsconstruction.co.uk"
      },
      {
        "name": "David Henry",
        "role": "Construction Manager",
        "email": "david@mjsconstruction.co.uk",
        "phone": "7718190383.0"
      },
      {
        "name": "James Scothern",
        "role": "Contract Manager",
        "email": "james.scothern@mjsconstruction.co.uk"
      },
      {
        "name": "Mark Bates",
        "role": "Project Manager",
        "email": "mark@mjsconstruction.co.uk",
        "phone": "7776599165.0"
      },
      {
        "name": "Mike Saxby",
        "role": "Managing Director",
        "email": "mike@mjsconstruction.co.uk"
      },
      {
        "name": "Nick Mann",
        "role": "Quantity Surveyor",
        "email": "nick@mjsconstruction.co.uk"
      },
      {
        "name": "Phil Nickolay",
        "role": "Quantity Surveyor",
        "email": "philip.nickolay@mjsconstruction.co.uk"
      },
      {
        "name": "Sean Saxby",
        "role": "Contracts Manager",
        "email": "sean.saxby@mjsconstruction.co.uk",
        "phone": "7977227315.0"
      },
      {
        "name": "Stuart Cave",
        "role": "Contracts Manager",
        "email": "stuart.cave@mjsconstruction.co.uk"
      },
      {
        "name": "Adam Sutton",
        "email": "adam.sutton@mjsconstruction.co.uk"
      },
      {
        "name": "James Govern",
        "role": "Contracts Manager",
        "email": "james.govern@mjsconstruction.co.uk"
      },
      {
        "name": "Lee Wymer",
        "role": "Project Manager",
        "email": "lee.wymer@mjsconstruction.co.uk"
      },
      {
        "name": "Mark Sayer",
        "role": "Project Manager",
        "email": "mark.sayer@mjsconstruction.co.uk",
        "phone": "7872543874.0"
      },
      {
        "name": "Matthew Bower",
        "role": "Quantity Surveyor",
        "email": "matthew.bower@mjsconstruction.co.uk"
      },
      {
        "name": "Matthew Sparkes",
        "role": "Project Manager",
        "email": "matthew.sparkes@mjsconstruction.co.uk"
      },
      {
        "name": "Ross Cooper",
        "role": "Quantity Surveyor",
        "email": "ross.cooper@mjsconstruction.co.uk"
      }
    ]
  },
  {
    "id": 490,
    "name": "MKR Construction Projects Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Danny Merrills",
        "role": "Contracts Manager",
        "email": "dmerrills@mkrconstruction.co.uk"
      }
    ]
  },
  {
    "id": 491,
    "name": "Modebest Builders",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Albert Dravins",
        "role": "Director",
        "email": "albert.dravins@modebest.co.uk"
      },
      {
        "name": "Don Kelly",
        "role": "Construction Director",
        "email": "don.kelly@modebest.co.uk"
      },
      {
        "name": "Sean Kelly",
        "role": "Commercial Director",
        "email": "sean.kelly@modebest.co.uk"
      },
      {
        "name": "Daniel Kelly",
        "role": "Contracts Manager",
        "email": "daniel.kelly@modebest.co.uk"
      },
      {
        "name": "Graham Heneghan",
        "role": "Contracts Manager",
        "email": "graham.heneghan@modebest.co.uk",
        "phone": "07402 208276"
      },
      {
        "name": "Jim Morrissey",
        "role": "Contracts Manager",
        "email": "jim.morrissey@modebest.co.uk"
      },
      {
        "name": "Owen Doherty",
        "role": "Contracts Manager",
        "email": "owen.doherty@modebest.co.uk",
        "phone": "07384 895258"
      },
      {
        "name": "Stephen Guerin",
        "role": "Contracts Manager",
        "email": "stephen.guerin@modebest.co.uk"
      },
      {
        "name": "Barry Lineham",
        "role": "Contract Manager",
        "email": "barry.lineham@modebest.co.uk"
      },
      {
        "name": "Keelan Connor",
        "role": "Contract Manager",
        "email": "keelan.connor@modebest.co.uk"
      },
      {
        "name": "Ray Carty",
        "role": "Contract Manager",
        "email": "ray.carty@modebest.co.uk"
      },
      {
        "name": "Alex Beaumont",
        "role": "Quantity Surveyor",
        "email": "alex.beaumont@modebest.co.uk"
      },
      {
        "name": "Jamie O'Sullivan",
        "role": "Quantity Surveyor",
        "email": "jamie.sullivan@modebest.co.uk"
      },
      {
        "name": "Niall McHale",
        "role": "Quantity Surveyor",
        "email": "niall.mchale@modebest.co.uk"
      },
      {
        "name": "Rob Clegg",
        "role": "Quantity Surveyor",
        "email": "rob.clegg@modebest.co.uk"
      },
      {
        "name": "Jonathan Neeson",
        "role": "Estimating Manager",
        "email": "jonathan.neeson@modebest.co.uk",
        "phone": "07845 016682"
      }
    ]
  },
  {
    "id": 492,
    "name": "Modebest Builders Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Albert Dravins",
        "role": "Director",
        "email": "albert.dravins@modebest.co.uk"
      },
      {
        "name": "Alex Beaumont",
        "role": "Quantity Surveyor",
        "email": "alex.beaumont@modebest.co.uk"
      },
      {
        "name": "Barry Lineham",
        "role": "Contract Manager",
        "email": "barry.lineham@modebest.co.uk"
      },
      {
        "name": "Colum Dravins",
        "role": "Site Manager",
        "email": "colum.dravins@modebest.co.uk",
        "phone": "7702929811.0"
      },
      {
        "name": "Conor MacDermot",
        "role": "Site Manager",
        "email": "conor.macdermot@modebest.co.uk"
      },
      {
        "name": "Daniel Kelly",
        "role": "Contracts Manager",
        "email": "daniel.kelly@modebest.co.uk"
      },
      {
        "name": "Dargah Quinn",
        "role": "Project Manager",
        "email": "dargah.quinn@modebest.co.uk"
      },
      {
        "name": "Dave Conway",
        "role": "Buyer",
        "email": "dave.conway@modebest.co.uk"
      },
      {
        "name": "Don Kelly",
        "role": "Construction Director",
        "email": "don.kelly@modebest.co.uk"
      },
      {
        "name": "Frank Darmoo",
        "role": "Buyer",
        "email": "frank.darmoo@modebest.co.uk"
      },
      {
        "name": "Graham Heneghan",
        "role": "Contracts Manager",
        "email": "graham.heneghan@modebest.co.uk",
        "phone": "7402208276.0"
      },
      {
        "name": "Haider Karim",
        "role": "Project Manager",
        "email": "haider.karim@modebest.co.uk"
      },
      {
        "name": "Jack Gavin",
        "role": "Assistant Project Manager",
        "email": "jack.gavin@modebest.co.uk"
      },
      {
        "name": "James Heylin",
        "role": "Project Manager",
        "email": "james.heylin@modebest.co.uk"
      },
      {
        "name": "Jamie Osullivan",
        "role": "Quantity Surveyor",
        "email": "jamie.osullivan@modebest.co.uk"
      },
      {
        "name": "Jathugulan Kukanathan",
        "role": "Project Manager",
        "email": "jathugulan.kukanathan@modebest.co.uk"
      },
      {
        "name": "Jim Morrissey",
        "role": "Contracts Manager",
        "email": "jim.morrissey@modebest.co.uk"
      },
      {
        "name": "Jonathan Neeson",
        "role": "Estimating Manager",
        "email": "jonathan.neeson@modebest.co.uk",
        "phone": "7845016682.0"
      },
      {
        "name": "Keelan Connor",
        "role": "Contract Manager",
        "email": "keelan.connor@modebest.co.uk"
      },
      {
        "name": "Kevin Parker",
        "role": "Buyer",
        "email": "kevin.parker@modebest.co.uk"
      },
      {
        "name": "Lucian Juncanariu",
        "role": "Project Manager",
        "email": "lucian.juncanariu@modebest.co.uk"
      },
      {
        "name": "Neil McHale",
        "email": "neil.mchale@modebest.co.uk"
      },
      {
        "name": "Niall McHale",
        "role": "Quantity Surveyor",
        "email": "niall.mchale@modebest.co.uk"
      },
      {
        "name": "Owen Doherty",
        "role": "Contracts Manager",
        "email": "owen.doherty@modebest.co.uk",
        "phone": "7384895258.0"
      },
      {
        "name": "Ray Carty",
        "role": "Contract Manager",
        "email": "ray.carty@modebest.co.uk"
      },
      {
        "name": "Rob Clegg",
        "role": "Quantity Surveyor",
        "email": "rob.clegg@modebest.co.uk"
      },
      {
        "name": "Sean Kelly",
        "role": "Commercial Director",
        "email": "sean.kelly@modebest.co.uk"
      },
      {
        "name": "Sean Togher",
        "role": "Project Manager",
        "email": "sean.togher@modebest.co.uk"
      },
      {
        "name": "Sergui Filip",
        "role": "Site Manager",
        "email": "sergui.filip@modebest.co.uk"
      },
      {
        "name": "Stephen Guerin",
        "role": "Contracts Manager",
        "email": "stephen.guerin@modebest.co.uk"
      },
      {
        "name": "Ultan Hurney",
        "role": "Site Manager",
        "email": "ultan.hurney@modebest.co.uk",
        "phone": "7823526198.0"
      },
      {
        "name": "Valentina Bordeianu",
        "role": "Site Administrator",
        "email": "valentina.bordeianu@modebest.co.uk",
        "phone": "7946514205.0"
      }
    ]
  },
  {
    "id": 493,
    "name": "Morgan Sindall (Construction) Plc",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alister Broadberry",
        "role": "Director",
        "email": "alister.broadberry@morgansindall.com"
      },
      {
        "name": "Allan MacMillan",
        "role": "Site Manager",
        "email": "allan.macmillan@morgansindall.com"
      },
      {
        "name": "Andrew Parker",
        "role": "Project Manager",
        "email": "andrew.parker@morgansindall.com"
      },
      {
        "name": "Andy Witnall",
        "role": "Project Manager",
        "email": "andy.witnall@morgansindall.com"
      },
      {
        "name": "Angela Branch",
        "role": "Project Director",
        "email": "angela.branch@morgansindall.com"
      },
      {
        "name": "Bethan Williams",
        "role": "Quantity Surveyor",
        "email": "bethan.williams@morgansindall.com"
      },
      {
        "name": "Calum Holmes",
        "role": "Senior Quantity Surveyor",
        "email": "calum.holmes@morgansindall.com"
      },
      {
        "name": "Chloe Nicol",
        "role": "Design Manager",
        "email": "chloe.nicol@morgansindall.com",
        "phone": "07501 608506"
      },
      {
        "name": "Clifford Kinch",
        "role": "Area Director",
        "email": "clifford.kinch@morgansindall.com",
        "phone": "07919 113402"
      },
      {
        "name": "Dale Miller",
        "role": "Project Manager",
        "email": "dale.miller@morgansindall.com",
        "phone": "07815 619659"
      },
      {
        "name": "Danny Brennan",
        "role": "Project Manager",
        "email": "danny.brennan@morgansindall.com",
        "phone": "07775 007629"
      },
      {
        "name": "David Sands",
        "role": "Quantity Surveyor",
        "email": "david.sands@morgansindall.com"
      },
      {
        "name": "David Williams",
        "role": "Project Manager",
        "email": "david.williams@morgansindall.com",
        "phone": "07779 417628"
      },
      {
        "name": "Dean Lancaster",
        "role": "Quantity Surveyor",
        "email": "dean.lancaster@morgansindall.com",
        "phone": "07971 655274"
      },
      {
        "name": "Graeme Cole",
        "role": "Project Manager",
        "email": "graeme.cole@morgansindall.com",
        "phone": "07350 379272"
      },
      {
        "name": "Graham Kingdon",
        "role": "Area Director",
        "email": "graham.kingdon@morgansindall.com"
      },
      {
        "name": "Gregor Forsyth",
        "role": "Senior Project Manager",
        "email": "gregor.forsyth@morgansindall.com"
      },
      {
        "name": "Harry Mills",
        "role": "Senior Site Manager",
        "email": "harry.mills@morgansindall.com"
      },
      {
        "name": "Harry White",
        "role": "Project Manager",
        "email": "harry.white@morgansindall.com"
      },
      {
        "name": "Ian Shuffleton",
        "role": "Operations Director",
        "email": "ian.shuffleton@morgansindall.com"
      },
      {
        "name": "James Morey",
        "role": "Managing Surveyor",
        "email": "james.morey@morgansindall.com",
        "phone": "07854 956986"
      },
      {
        "name": "James Powell",
        "role": "Project Manager",
        "email": "james.powell@morgansindall.com",
        "phone": "07919 113402"
      },
      {
        "name": "Karl Butler",
        "email": "karl.butler@morgansindall.com"
      },
      {
        "name": "Kate Nolan",
        "role": "Quantity Surveyor",
        "email": "kate.nolan@morgansindall.com",
        "phone": "07885 732126"
      },
      {
        "name": "Kristian Porcher",
        "role": "Quantity Surveyor",
        "email": "kristian.porcher@morgansindall.com"
      },
      {
        "name": "Lewys Evans",
        "role": "Quantity Surveyor",
        "email": "lewys.evans2@morgansindall.com"
      },
      {
        "name": "Malcolm Davies",
        "role": "Senior Quantity Surveyor",
        "email": "malcolm.davies@morgansindall.com"
      },
      {
        "name": "Martin Nicholl",
        "email": "martin.nicholl@morgansindall.com"
      },
      {
        "name": "Michael Mouragian",
        "role": "Project Manager",
        "email": "michael.mouragian@morgansindall.com"
      },
      {
        "name": "Mike Perera",
        "role": "Senior Project Manager",
        "email": "mike.perera@morgansindall.com"
      },
      {
        "name": "Neil Brennan",
        "role": "Quantity Surveyor",
        "email": "neil.brennan@morgansindall.com",
        "phone": "07970 283198"
      },
      {
        "name": "Nicholas Cole",
        "role": "Area Commercial Manager",
        "email": "nicholas.cole@morgansindall.com"
      },
      {
        "name": "Ric Martin",
        "role": "Senior Design Manager",
        "email": "ric.martin@morgansindall.com"
      },
      {
        "name": "Richard Dobson",
        "role": "Area Director",
        "email": "richard.dobson@morgansindall.com"
      },
      {
        "name": "Richard Sansom",
        "role": "Project Manager",
        "email": "richard.sansom@morgansindall.com"
      },
      {
        "name": "Richard Veale",
        "role": "Senior Design Manager",
        "email": "richard.veale@morgansindall.com",
        "phone": "07570 728512"
      },
      {
        "name": "Rob Hendley",
        "role": "Project Manager",
        "email": "rob.hendley@morgansindall.com"
      },
      {
        "name": "Sam Kemp",
        "role": "Project Manager",
        "email": "sam.kemp@morgansindall.com"
      },
      {
        "name": "Samual Teremetz",
        "role": "Senior Project Manager",
        "email": "samual.teremetz@morgansindall.com",
        "phone": "07773 196729"
      },
      {
        "name": "Simon Smith",
        "email": "simon.smith@morgansindall.com"
      },
      {
        "name": "Steven Gregory",
        "role": "Director",
        "email": "steven.gregory@morgansindall.com"
      },
      {
        "name": "Stuart Parker",
        "role": "Managing Director",
        "email": "stuart.parker@morgansindall.com"
      },
      {
        "name": "Tom Floyd",
        "role": "Quantity Surveyor",
        "email": "tom.floyd@morgansindall.com"
      },
      {
        "name": "Victoria Beale",
        "role": "Site Agent",
        "email": "victoria.beale@morgansindall.com",
        "phone": "7837335371.0"
      },
      {
        "name": "Victoria Yates",
        "role": "Business Development Manager",
        "email": "victoria.yates@morgansindall.com"
      }
    ]
  },
  {
    "id": 494,
    "name": "Morrisroe Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Ali Solki",
        "role": "Project Manager",
        "email": "ali.solki@morrisroe.co.uk"
      },
      {
        "name": "Chris Killoran",
        "role": "Buyer",
        "email": "chris.killoran@morrisroe.co.uk"
      },
      {
        "name": "Dan Bannister",
        "role": "Director",
        "email": "dan@morrisroe.co.uk"
      },
      {
        "name": "Dave House",
        "role": "Quantity Surveyor",
        "email": "david@morrisroe.co.uk"
      },
      {
        "name": "Duncan Wilson",
        "role": "Project Manager",
        "email": "duncan.wilson@morrisroe.co.uk"
      },
      {
        "name": "George Buchan",
        "role": "Project Manager",
        "email": "george.buchan@morrisroe.co.uk"
      },
      {
        "name": "Ian O'Connor",
        "role": "Quantity Surveyor",
        "email": "ian.oconnor@morrisroe.co.uk"
      },
      {
        "name": "James Fitzgerald",
        "role": "Project Manager",
        "email": "james.fitzgerald@morrisroe.co.uk"
      },
      {
        "name": "James Wibberley",
        "role": "Site Manager",
        "email": "james.wibberley@morrisroe.co.uk"
      },
      {
        "name": "John McDald",
        "role": "Contracts Manager",
        "email": "john.mcdald@morrisroe.co.uk"
      },
      {
        "name": "John Shealy",
        "role": "Director",
        "email": "john.shealy@morrisroe.co.uk"
      },
      {
        "name": "Lee Henry",
        "role": "Project Manager",
        "email": "lee@morrisroe.co.uk"
      },
      {
        "name": "Mark Wadsworth",
        "role": "Construction Manager",
        "email": "mark.wadsworth@morrisroe.co.uk"
      },
      {
        "name": "Neil McVicar",
        "role": "Project Manager",
        "email": "neil.mcvicar@morrisroe.co.uk"
      },
      {
        "name": "Sean O'Halloran",
        "role": "Construction Manager",
        "email": "sean@morrisroe.co.uk",
        "phone": "7921062872.0"
      },
      {
        "name": "Selwyn Ferrao",
        "role": "Contracts Manager",
        "email": "selwyn@morrisroe.co.uk",
        "phone": "7769906100.0"
      },
      {
        "name": "Shahin Khazali",
        "role": "Contracts Manager",
        "email": "shahin@morrisroe.co.uk"
      },
      {
        "name": "Tom McDonagh",
        "role": "Quantity Surveyor",
        "email": "tom.mcdonagh@morrisroe.co.uk"
      },
      {
        "name": "Tony O'Connor",
        "role": "Project Manager",
        "email": "tony.oconnor@morrisroe.co.uk"
      }
    ]
  },
  {
    "id": 495,
    "name": "Moss Barrett Construction",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "John Barrett",
        "role": "Managing Director",
        "email": "john@mossbarrett.co.uk"
      }
    ]
  },
  {
    "id": 496,
    "name": "Moss Barrett Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "John Barrett",
        "role": "Managing Director",
        "email": "john@mossbarrett.co.uk"
      }
    ]
  },
  {
    "id": 497,
    "name": "Mostrim Groundworks",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Steve Clarke",
        "role": "Director",
        "email": "steve@mostrimuk.com",
        "phone": "07939 105552"
      },
      {
        "name": "Charlie Wilson",
        "role": "Contracts Manager",
        "email": "charlie.wilson@mostrimuk.com",
        "phone": "07492 940838"
      },
      {
        "name": "Dick Nicholls",
        "role": "Contracts Manager",
        "email": "dick@mostrimuk.com"
      },
      {
        "name": "Colm Keane",
        "role": "Quantity Surveyor",
        "email": "colm@mostrimuk.com"
      },
      {
        "name": "Peter Frame",
        "role": "Quantity Surveyor",
        "email": "peter@mostrimuk.com"
      },
      {
        "name": "Joe Clarke",
        "role": "Surveyor",
        "email": "joe.clarke@mostrimuk.com"
      }
    ]
  },
  {
    "id": 498,
    "name": "MP Brothers",
    "disciplines": [
      "Groundworks",
      "RC Frame"
    ],
    "contacts": [
      {
        "name": "Bhupesh Halai",
        "role": "Quantity Surveyor",
        "email": "bhupeshh@mpbrothers.co.uk"
      },
      {
        "name": "David Jenvey",
        "role": "Principal Designer",
        "email": "djenvey@mpbrothers.co.uk"
      },
      {
        "name": "Dhanji Dungar",
        "role": "Site Manager",
        "email": "ddungar@mpbrothers.co.uk",
        "phone": "07773 245552"
      },
      {
        "name": "Dilan Rabadiya",
        "role": "Project Manager",
        "email": "dilanr@mpbrothers.co.uk"
      },
      {
        "name": "Jadevji Hirani",
        "role": "Director",
        "email": "jadevjih@mpbrothers.co.uk"
      },
      {
        "name": "Pradap Hirani",
        "role": "Development Manager",
        "email": "pradaph@mpbrothers.co.uk"
      },
      {
        "name": "Supal Shah",
        "role": "Quantity Surveyor",
        "email": "supals@mpbrothers.co.uk",
        "phone": "07917 080616"
      }
    ]
  },
  {
    "id": 499,
    "name": "MP Brothers Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Bhupendra Kara",
        "role": "Health & Safety Manager",
        "email": "bhupendra.kara@mpbrothers.co.uk"
      },
      {
        "name": "Bhupesh Halai",
        "role": "Quantity Surveyor",
        "email": "bhupeshh@mpbrothers.co.uk"
      },
      {
        "name": "David Jenvey",
        "role": "Principal Designer",
        "email": "djenvey@mpbrothers.co.uk"
      },
      {
        "name": "Deny Dunga",
        "role": "Site Manager",
        "email": "deny.dunga@mpbrothers.co.uk"
      },
      {
        "name": "Dhanji Dungar",
        "role": "Site Manager",
        "email": "ddungar@mpbrothers.co.uk",
        "phone": "7773245552.0"
      },
      {
        "name": "Dilan Rabadiya",
        "role": "Project Manager",
        "email": "dilanr@mpbrothers.co.uk"
      },
      {
        "name": "Jadevji Hirani",
        "role": "Director",
        "email": "jadevjih@mpbrothers.co.uk"
      },
      {
        "name": "Pradap Hirani",
        "role": "Development Manager",
        "email": "pradaph@mpbrothers.co.uk"
      },
      {
        "name": "Supal Shah",
        "role": "Quantity Surveyor",
        "email": "supals@mpbrothers.co.uk",
        "phone": "7917080616.0"
      }
    ]
  },
  {
    "id": 500,
    "name": "MTX Contracts Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andrew Dearden",
        "role": "Commercial Manager",
        "email": "andrew.dearden@mtx.co.uk"
      },
      {
        "name": "Ben Frost",
        "role": "Site Manager",
        "email": "ben.frost@mtx.co.uk",
        "phone": "7720860248.0"
      },
      {
        "name": "Brandon Forsyth",
        "role": "Site Manager",
        "email": "brandon.forsyth@mtx.co.uk"
      },
      {
        "name": "Brian McGuiness",
        "role": "Site Manager",
        "email": "brian.mcguiness@mtx.co.uk"
      },
      {
        "name": "Chris Dodd",
        "role": "Senior Construction Manager",
        "email": "chris.dodd@mtx.co.uk"
      },
      {
        "name": "Christopher McMurdock",
        "role": "Commercial Manager",
        "email": "chris.mcmurdock@mtx.co.uk"
      },
      {
        "name": "Conor Brogan",
        "role": "Project Manager",
        "email": "conor.brogan@mtx.co.uk"
      },
      {
        "name": "Dan Harrad",
        "role": "Project Manager",
        "email": "dan.harrad@mtx.co.uk"
      },
      {
        "name": "Danielle Jaunieui-Todd",
        "role": "Project Manager",
        "email": "danielle.jaunieui-todd@mtx.co.uk"
      },
      {
        "name": "Danny Baker",
        "role": "Project Manager",
        "email": "danny.baker@mtx.co.uk"
      },
      {
        "name": "Dave Meredith",
        "role": "Project Manager",
        "email": "dave.meredith@mtx.co.uk"
      },
      {
        "name": "Dave Peacock",
        "role": "Contracts Director",
        "email": "david.peacock@mtx.co.uk"
      },
      {
        "name": "David Brown",
        "role": "Construction Manager",
        "email": "david.brown@mtx.co.uk"
      },
      {
        "name": "David Hartley",
        "role": "Managing Director",
        "email": "david.hartley@mtx.co.uk"
      },
      {
        "name": "Gareth Roberts",
        "role": "Project Manager",
        "email": "gareth.roberts@mtx.co.uk",
        "phone": "07792 404 236"
      },
      {
        "name": "Ivan Peredruk",
        "role": "Design Manager",
        "email": "ivan.peredruk@mtx.co.uk"
      },
      {
        "name": "James Fox",
        "role": "Contracts Manager",
        "email": "james.fox@mtx.co.uk"
      },
      {
        "name": "James Henderson",
        "role": "Project Manager",
        "email": "james.henderson@mtx.co.uk",
        "phone": "07715 271 587"
      },
      {
        "name": "Jamie Dearden",
        "role": "Quantity Surveyor",
        "email": "jamie.dearden@mtx.co.uk"
      },
      {
        "name": "Jamie Sutton",
        "role": "Quantity Surveyor",
        "email": "jamie.sutton@mtx.co.uk"
      },
      {
        "name": "John Goodwin",
        "role": "Project Manager",
        "email": "john.goodwin@mtx.co.uk"
      },
      {
        "name": "Katie Wiseman",
        "role": "Trainee Quantity Surveyor",
        "email": "katie.wiseman@mtx.co.uk",
        "phone": "07498 423653"
      },
      {
        "name": "Mark Snowden",
        "role": "Site Manager",
        "email": "mark.snowden@mtx.co.uk"
      },
      {
        "name": "Matt Hanson",
        "role": "Quantity Surveyor",
        "email": "matt.hanson@mtx.co.uk",
        "phone": "07944 697 080"
      },
      {
        "name": "Matthew Hean",
        "role": "Project Leader",
        "email": "matthew.hean@mtx.co.uk",
        "phone": "7902052913.0"
      },
      {
        "name": "Mike Butler",
        "role": "Pre Construction Manager",
        "email": "mike.butler@mtx.co.uk",
        "phone": "07976 043 721"
      },
      {
        "name": "Oliver Beirne",
        "email": "oliver.beirne@mtx.co.uk"
      },
      {
        "name": "Paul Rushton",
        "role": "Architectural Design Consultant",
        "email": "paul.rushton@mtx.co.uk"
      },
      {
        "name": "Paul Williams",
        "role": "Project Manager",
        "email": "paul.williams@mtx.co.uk",
        "phone": "7772802205.0"
      },
      {
        "name": "Ryan Ward",
        "email": "ryan.ward@mtx.co.uk"
      },
      {
        "name": "Sam Royle",
        "role": "Project Leader",
        "email": "sam.royle@mtx.co.uk"
      },
      {
        "name": "Scott McCaskie",
        "role": "Director",
        "email": "scott.mccaskie@mtx.co.uk"
      },
      {
        "name": "Shannon Massey",
        "role": "Pre Construction Manager",
        "email": "shannon.massey@mtx.co.uk"
      },
      {
        "name": "Steven Hartley",
        "role": "Construction Director",
        "email": "steven.hartley@mtx.co.uk",
        "phone": "07870 971205"
      },
      {
        "name": "Steven Wood",
        "role": "Building Services Manager",
        "email": "steven.wood@mtx.co.uk"
      }
    ]
  },
  {
    "id": 501,
    "name": "Mulalley & Company Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Aaron Champion",
        "role": "Quantity Surveyor",
        "email": "aaron.champion@mulalley.co.uk"
      },
      {
        "name": "Adrian Nind",
        "role": "Project Manager",
        "email": "adrian.nind@mulalley.co.uk",
        "phone": "7827884532.0"
      },
      {
        "name": "Agniaiszka Kwiatkowska",
        "role": "Quantity Surveyor",
        "email": "aga.kwiatkowska@mulalley.co.uk"
      },
      {
        "name": "Ann Fan",
        "role": "Architectural Technologist",
        "email": "ann.fan@mulalley.co.uk"
      },
      {
        "name": "Anthony Wickett",
        "email": "anthony.wickett@mulalley.co.uk"
      },
      {
        "name": "Bernard Osei",
        "role": "Quantity Surveyor",
        "email": "bernard.osei@mulalley.co.uk"
      },
      {
        "name": "Christopher Lawlor",
        "role": "Commercial Manager",
        "email": "christopher.lawlor@mulalley.co.uk"
      },
      {
        "name": "Colin Dalton",
        "role": "Managing Quantity Surveyor",
        "email": "colin.dalton@mulalley.co.uk"
      },
      {
        "name": "Conor Mulrennan",
        "role": "Senior Quantity Surveyor",
        "email": "conor.mulrennan@mulalley.co.uk",
        "phone": "07500 062 114"
      },
      {
        "name": "Davinen Mootoosawmy",
        "role": "Senior Quantity Surveyor",
        "email": "davinen.mootoosawmy@mulalley.co.uk"
      },
      {
        "name": "Domantas Lape",
        "role": "Senior Design Co-ordinator",
        "email": "domantas.lape@mulalley.co.uk",
        "phone": "7931350722.0"
      },
      {
        "name": "Eamon O'Malley",
        "role": "Director",
        "email": "eamon.omalley@mulalley.co.uk"
      },
      {
        "name": "Gareth Kings",
        "role": "Quantity Surveyor",
        "email": "gareth.kings@mulalley.co.uk"
      },
      {
        "name": "George Legg",
        "role": "Commercial Manager",
        "email": "george.legg@mulalley.co.uk"
      },
      {
        "name": "Graham Reed",
        "role": "Quantity Surveyor",
        "email": "graham.reed@mulalley.co.uk"
      },
      {
        "name": "Jay Ali",
        "role": "Quantity Surveyor",
        "email": "jay.ali@mulalley.co.uk"
      },
      {
        "name": "John Macdonald",
        "role": "Commercial Manager",
        "email": "john.macdonald@mulalley.co.uk"
      },
      {
        "name": "John Moore",
        "role": "Managing Director",
        "email": "john.moore@mulalley.co.uk"
      },
      {
        "name": "Joshua Joannou",
        "role": "Quantity Surveyor",
        "email": "joshua.joannou@mulalley.co.uk",
        "phone": "07507 641305"
      },
      {
        "name": "Lee Walsh",
        "role": "Construction Director",
        "email": "lee.walsh@mulalley.co.uk"
      },
      {
        "name": "Martin Dayer",
        "role": "Commercial Manager",
        "email": "martin.dayer@mulalley.co.uk"
      },
      {
        "name": "Matthew Gardiner",
        "role": "Estates Director",
        "email": "matthew.gardiner@mulalley.co.uk"
      },
      {
        "name": "Michael Rabess",
        "email": "michael.rabess@mulalley.co.uk"
      },
      {
        "name": "Michael Way",
        "role": "Quantity Surveyor",
        "email": "michael.way@mulalley.co.uk",
        "phone": "7884580849.0"
      },
      {
        "name": "Myrta Fioretto",
        "email": "myrta.fioretto@mulalley.co.uk",
        "phone": "7957302911.0"
      },
      {
        "name": "Nigel Hunter-Jones",
        "role": "Project Manager",
        "email": "nigel.hunter-jones@mulalley.co.uk"
      },
      {
        "name": "Olivia Roche",
        "email": "olivia.roche@mulalley.co.uk"
      },
      {
        "name": "Richard Prince",
        "role": "Project Manager",
        "email": "richard.prince@mulalley.co.uk"
      },
      {
        "name": "Robert Osborne",
        "role": "Assistant Quantity Surveyor",
        "email": "robert.osborne@mulalley.co.uk",
        "phone": "07733 120030"
      },
      {
        "name": "Russell Taylor",
        "role": "Contracts Manager",
        "email": "russell.taylor@mulalley.co.uk",
        "phone": "7733120037.0"
      },
      {
        "name": "Samia Sheikh",
        "role": "Quantity Surveyor",
        "email": "samia.sheikh@mulalley.co.uk"
      },
      {
        "name": "Simon Coveley",
        "role": "Preconstruction Director",
        "email": "simon.coveley@mulalley.co.uk"
      },
      {
        "name": "Simon Rice",
        "role": "Site Manager",
        "email": "simon.rice@mulalley.co.uk",
        "phone": "782788430.0"
      },
      {
        "name": "Stephen Hawkridge",
        "role": "Commercial Director",
        "email": "stephen.hawkridge@mulalley.co.uk"
      },
      {
        "name": "Suzanne Gudgeon",
        "role": "Team Administrator",
        "email": "suzanne.gudgeon@mulalley.co.uk"
      },
      {
        "name": "Zak Hibbert",
        "role": "Quantity Surveyor",
        "email": "zak.hibbert@mulalley.co.uk"
      }
    ]
  },
  {
    "id": 502,
    "name": "MV Kelly Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Colin Darch",
        "role": "Quantity Surveyor",
        "email": "colin.darch@mvkelly.co.uk"
      },
      {
        "name": "George Burlacu",
        "role": "Contracts Manager",
        "email": "george.burlacu@mvkelly.co.uk"
      },
      {
        "name": "Jack Kelly",
        "email": "jack.kelly@mvkelly.co.uk"
      },
      {
        "name": "Jack Kent",
        "role": "Quantity Surveyor",
        "email": "jack.kent@mvkelly.co.uk"
      },
      {
        "name": "John Kelly",
        "role": "Director",
        "email": "john@mvkelly.co.uk"
      },
      {
        "name": "Michael Kelly",
        "role": "Construction Director",
        "email": "michael.kelly@mvkelly.co.uk"
      },
      {
        "name": "Niall Duffy",
        "role": "Contracts Manager",
        "email": "niall.duffy@mvkelly.co.uk"
      },
      {
        "name": "Paul Whelan",
        "role": "Managing Director",
        "email": "paul@mvkelly.co.uk",
        "phone": "7795012160.0"
      }
    ]
  },
  {
    "id": 503,
    "name": "MY Construction and Carpentry Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alex Mehile",
        "role": "Site Manager",
        "email": "alex@mycgroup.co.uk",
        "phone": "07453 289635"
      },
      {
        "name": "Algar Gant",
        "email": "algar.gant@mycgroup.co.uk",
        "phone": "07746 169 105"
      },
      {
        "name": "Boaz Torfstein",
        "role": "Designer",
        "email": "boaz@mycgroup.co.uk"
      },
      {
        "name": "Bob Whitear",
        "email": "bob.whitear@mycgroup.co.uk"
      },
      {
        "name": "Caio Mundez",
        "role": "Quantity Surveyor",
        "email": "caio@mycgroup.co.uk"
      },
      {
        "name": "Gary Thomas",
        "role": "Project Manager",
        "email": "gary@mycgroup.co.uk",
        "phone": "07708 902782"
      },
      {
        "name": "Graham Toote",
        "role": "Contracts Manager",
        "email": "graham.toote@mycgroup.co.uk",
        "phone": "07794 676737"
      },
      {
        "name": "Guy Finkelstein",
        "role": "Contracts Manager",
        "email": "guy@mycgroup.co.uk",
        "phone": "7761690567.0"
      },
      {
        "name": "Joe Mcardle",
        "email": "joe.mcardle@mycgroup.co.uk"
      },
      {
        "name": "John Moles",
        "role": "Project Manager",
        "email": "johnm@mycgroup.co.uk",
        "phone": "07982 871085"
      },
      {
        "name": "Jose Tello",
        "role": "Pre-Construction Coordinator",
        "email": "jose@mycgroup.co.uk"
      },
      {
        "name": "Ketan Velani",
        "role": "Quantity Surveyor",
        "email": "ketan@mycgroup.co.uk"
      },
      {
        "name": "Martin Zubcak",
        "role": "Project Manager",
        "email": "martinz@mycgroup.co.uk",
        "phone": "7891046285.0"
      },
      {
        "name": "Maxwell Redmill",
        "role": "Quantity Surveyor",
        "email": "maxwell.redmill@mycgroup.co.uk",
        "phone": "07591 949487"
      },
      {
        "name": "Michael Johnson",
        "role": "Project Manager",
        "email": "michael@mycgroup.co.uk",
        "phone": "7711956710.0"
      },
      {
        "name": "Oren Tal",
        "email": "oren.tal@mycgroup.co.uk"
      },
      {
        "name": "Petru Negrea",
        "role": "Site Manager",
        "email": "petru@mycgroup.co.uk",
        "phone": "07446 995506"
      },
      {
        "name": "Shani Levy",
        "role": "Property Investor",
        "email": "shani@mycgroup.co.uk",
        "phone": "7798734571.0"
      },
      {
        "name": "Sreejith Koliyot",
        "role": "Site Manager",
        "email": "sreejithk@mycgroup.co.uk",
        "phone": "7495128430.0"
      },
      {
        "name": "Yoav Tal",
        "role": "Managing Director",
        "email": "yoav@mycgroup.co.uk"
      },
      {
        "name": "Yotam Yinhal",
        "role": "Commercial Manager",
        "email": "yotam@mycgroup.co.uk",
        "phone": "7971854349.0"
      }
    ]
  },
  {
    "id": 504,
    "name": "MYCO Contracts Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Aaron Burke",
        "role": "Quantity Surveyor",
        "email": "aaron.burke@mycoltd.co.uk"
      },
      {
        "name": "Adrian Obuchowicz",
        "role": "Quantity Surveyor",
        "email": "adrian.obuchowicz@mycoltd.co.uk",
        "phone": "7548775086.0"
      },
      {
        "name": "Ahmed Awan",
        "role": "Site Manager",
        "email": "ahmed.awan@mycoltd.co.uk"
      },
      {
        "name": "Balu Naidu",
        "role": "Quantity Surveyor",
        "email": "balu.naidu@mycoltd.co.uk"
      },
      {
        "name": "Bernard Mooney",
        "email": "bernard.mooney@mycoltd.co.uk"
      },
      {
        "name": "Ciaran McDonald",
        "role": "Contract Manager",
        "email": "ciaran.mcdonald@mycoltd.co.uk",
        "phone": "07464 416 053"
      },
      {
        "name": "Damian Fitzpatrick",
        "role": "Commercial Manager",
        "email": "damian.fitzpatrick@mycoltd.co.uk",
        "phone": "07900 474977"
      },
      {
        "name": "Damian Obuchowicz",
        "role": "Quantity Surveyor",
        "email": "damian.obuchowicz@mycoltd.co.uk",
        "phone": "7907283782.0"
      },
      {
        "name": "Daniel Graham",
        "role": "Quantity Surveyor",
        "email": "daniel.graham@mycoltd.co.uk",
        "phone": "07769 826524"
      },
      {
        "name": "David Moroney",
        "role": "Project Manager",
        "email": "david.moroney@mycoltd.co.uk",
        "phone": "7748681240.0"
      },
      {
        "name": "Eliska Ostra",
        "role": "Quantity Surveyor",
        "email": "eliska.ostra@mycoltd.co.uk",
        "phone": "7760901213.0"
      },
      {
        "name": "Ishmel Brady",
        "role": "Project Manager",
        "email": "ishmel.brady@mycoltd.co.uk"
      },
      {
        "name": "Kevin Abad",
        "role": "Quantity Surveyor",
        "email": "kevin.abad@mycoltd.co.uk",
        "phone": "07810 123 849"
      },
      {
        "name": "Kevin Coffey",
        "role": "Quantity Surveyor",
        "email": "kevin.coffey@mycoltd.co.uk"
      },
      {
        "name": "Kevin Culhane",
        "role": "Director",
        "email": "kevin.culhane@mycoltd.co.uk"
      },
      {
        "name": "Kunal Bhardwaj",
        "role": "Project Manager",
        "email": "kunal.bhardwaj@mycoltd.co.uk",
        "phone": "07469 884 963"
      },
      {
        "name": "Michael McKessy",
        "role": "Quantity Surveyor",
        "email": "micael.mckessy@mycoltd.co.uk",
        "phone": "07769 010075"
      },
      {
        "name": "Oliver Hammond",
        "role": "Project Manager",
        "email": "oliver.hammond@mycoltd.co.uk",
        "phone": "07388 156 687"
      },
      {
        "name": "Sheldon Kyme",
        "role": "Quantity Surveyor",
        "email": "sheldon.kyme@mycoltd.co.uk",
        "phone": "7436548849.0"
      },
      {
        "name": "Sinead O'Hara",
        "role": "Quantity Surveyor",
        "email": "sinead.ohara@mycoltd.co.uk",
        "phone": "07741 111473"
      },
      {
        "name": "Stephen Byrne",
        "role": "Contracts Manager",
        "email": "stephen.byrne@mycoltd.co.uk"
      },
      {
        "name": "Suraj Singh",
        "role": "Quantity Surveyor",
        "email": "suraj.singh@mycoltd.co.uk"
      },
      {
        "name": "Terry O'Neil",
        "role": "Contracts Manager",
        "email": "terry.oneil@mycoltd.co.uk",
        "phone": "07464 322 066"
      },
      {
        "name": "Thomas Hawkes",
        "role": "Quantity Surveyor",
        "email": "thomas.hawkes@mycoltd.co.uk",
        "phone": "07780 377832"
      }
    ]
  },
  {
    "id": 505,
    "name": "Nationwide Structures",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Des Cullen",
        "role": "Managing Director",
        "email": "dcullen@nwsltd.com",
        "phone": "07876 557960"
      },
      {
        "name": "Mick Pollard",
        "role": "Managing Director",
        "email": "mick.pollard@nwsltd.com"
      },
      {
        "name": "Andy Beckett",
        "role": "Construction Director",
        "email": "abeckett@nwsltd.com"
      },
      {
        "name": "Dan Hoskin",
        "role": "Commercial Manager",
        "email": "dhoskin@nwsltd.com",
        "phone": "07813 580667"
      },
      {
        "name": "Andy Dagnall",
        "role": "Contracts Manager",
        "email": "adagnall@nwsltd.com",
        "phone": "07713 441446"
      },
      {
        "name": "Paul Rushton",
        "role": "Contracts Manager",
        "email": "prushton@nwsltd.com",
        "phone": "07860 942095"
      },
      {
        "name": "Phil Hattfield",
        "role": "Contracts Manager",
        "email": "phattfield@nwsltd.com",
        "phone": "07802 883329"
      },
      {
        "name": "Rob Gray",
        "role": "Contracts Manager",
        "email": "rgray@nwsltd.com"
      },
      {
        "name": "Sam Wright",
        "role": "Contracts Manager",
        "email": "swright@nwsled.com"
      },
      {
        "name": "Warren Dowson",
        "role": "Contracts Manager",
        "email": "wdowson@nwsltd.com",
        "phone": "07394 440616"
      },
      {
        "name": "Stuart Cree",
        "role": "Contract Manager",
        "email": "scree@nwsltd.com",
        "phone": "07983 548068"
      },
      {
        "name": "Glen Read",
        "role": "Contracts Manager",
        "email": "gread@nwsled.com",
        "phone": "07802 883329"
      }
    ]
  },
  {
    "id": 506,
    "name": "Nationwide Structures Limited",
    "disciplines": [
      "RC Frame"
    ],
    "contacts": [
      {
        "name": "Alex Pollard",
        "role": "Commercial Assistant",
        "email": "apollard@nwsltd.com"
      },
      {
        "name": "Andy Beckett",
        "role": "Construction Director",
        "email": "abeckett@nwsltd.com"
      },
      {
        "name": "Andy Dagnell",
        "role": "Contracts Manager",
        "email": "adagnall@nwsltd.com",
        "phone": "07713 441446"
      },
      {
        "name": "Andy Payne",
        "role": "Contract Manager",
        "email": "andy.payne@nwsltd.com",
        "phone": "07809 907445"
      },
      {
        "name": "Dan Hoskin",
        "role": "Commercial Manager",
        "email": "dhoskin@nwsltd.com",
        "phone": "07813 580667"
      },
      {
        "name": "Des Cullen",
        "role": "Managing Director",
        "email": "dcullen@nwsltd.com",
        "phone": "07876 557960"
      },
      {
        "name": "Glen Read",
        "role": "Contracts Manager",
        "email": "gread@nwsled.com",
        "phone": "07802 883329"
      },
      {
        "name": "Jack Hendren",
        "email": "jack.hendren@nwsltd.com"
      },
      {
        "name": "Mick Pollard",
        "role": "Managing Director",
        "email": "mick.pollard@nwsltd.com"
      },
      {
        "name": "Paul Rushton",
        "role": "Contracts Manager",
        "email": "prushton@nwsltd.com",
        "phone": "07860 942095"
      },
      {
        "name": "Phil Hattfield",
        "role": "Contracts Manager",
        "email": "phattfield@nwsltd.com",
        "phone": "07802 883329"
      },
      {
        "name": "Rob Gray",
        "role": "Contracts Manager",
        "email": "rgray@nwsltd.com"
      },
      {
        "name": "Sam Wright",
        "role": "Contracts Manager",
        "email": "swright@nwsled.com"
      },
      {
        "name": "Sarah Dagnall",
        "role": "Buyer",
        "email": "sdagnall@nwsltd.com"
      },
      {
        "name": "Stuart Cree",
        "role": "Contract Manager",
        "email": "scree@nwsltd.com",
        "phone": "07983 548068"
      },
      {
        "name": "Warren Dowson",
        "role": "Contracts Manager",
        "email": "wdowson@nwsltd.com",
        "phone": "07394 440616"
      },
      {
        "name": "Contracts Department",
        "email": "info@nationwidestructures.co.uk"
      }
    ]
  },
  {
    "id": 507,
    "name": "Natta Building Company Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andreea Guriuc",
        "role": "Projects Manager",
        "email": "andreea.guriuc@natta.co.uk"
      },
      {
        "name": "Andrew Scott",
        "role": "Building Director",
        "email": "ascott@natta.co.uk"
      },
      {
        "name": "Andrew Skinner",
        "role": "Quantity Surveyor",
        "email": "askinner@natta.co.uk"
      },
      {
        "name": "Eduard Tinjala",
        "role": "Engineer",
        "email": "etinjala@natta.co.uk"
      },
      {
        "name": "Huw Rees",
        "role": "Director",
        "email": "hrees@natta.co.uk"
      },
      {
        "name": "Jack Rushton",
        "role": "Assistant Quantity Surveyor",
        "email": "jack.rushton@natta.co.uk"
      },
      {
        "name": "James Hibberd",
        "role": "Chief Buyer",
        "email": "jhibberd@natta.co.uk"
      },
      {
        "name": "Jo Whelan",
        "role": "Communications Manager",
        "email": "jwhelan@natta.co.uk"
      },
      {
        "name": "John Dunwoody",
        "role": "Director",
        "email": "jdunwoody@natta.co.uk"
      },
      {
        "name": "Kevin Matthews",
        "role": "Contracts Manager",
        "email": "kmatthews@natta.co.uk"
      },
      {
        "name": "Lauren Steer",
        "role": "Quantity Surveyor",
        "email": "lauren.steer@natta.co.uk"
      },
      {
        "name": "Matt Barham",
        "role": "Contracts Manager",
        "email": "matt.barham@natta.co.uk"
      },
      {
        "name": "Matthew Sainty",
        "role": "Commercial Director",
        "email": "msainty@natta.co.uk"
      },
      {
        "name": "Mike Collins",
        "role": "Site Manager",
        "email": "mike.collins@natta.co.uk"
      },
      {
        "name": "Nick Wyatt",
        "role": "Contracts Manager",
        "email": "nwyatt@natta.co.uk"
      },
      {
        "name": "Simon King",
        "role": "Quantity Surveyor",
        "email": "sking@natta.co.uk"
      },
      {
        "name": "Sorin Caliniuc",
        "role": "Quantity Surveyor",
        "email": "sorin.caliniuc@natta.co.uk"
      },
      {
        "name": "Zoe Hewett",
        "role": "Quantity Surveyor",
        "email": "zhewett@natta.co.uk"
      },
      {
        "name": "Jack Rushton",
        "role": "Assistant Quantity Surveyor",
        "email": "jrushton@natta.co.uk"
      },
      {
        "name": "Lauren Steer",
        "role": "Quantity Surveyor",
        "email": "lsteer@natta.co.uk"
      },
      {
        "name": "Matt Barham",
        "role": "Contracts Manager",
        "email": "mbarham@natta.co.uk"
      },
      {
        "name": "Mike Collins",
        "role": "Site Manager",
        "email": "mcollins@natta.co.uk"
      },
      {
        "name": "Sorin Caliniuc",
        "role": "Quantity Surveyor",
        "email": "scaliniuc@natta.co.uk"
      }
    ]
  },
  {
    "id": 508,
    "name": "Nero Piling & Ground Engineering Limited",
    "disciplines": [
      "Piling"
    ],
    "contacts": [
      {
        "name": "Marc Black",
        "role": "Director",
        "email": "marc.black@neropiling.com",
        "phone": "7799750208.0"
      }
    ]
  },
  {
    "id": 509,
    "name": "Newlands Construction",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Ian Drury",
        "role": "Managing Director",
        "email": "iandrury@newlandsconstructionltd.co.uk",
        "phone": "07842 882823"
      },
      {
        "name": "Paul Farrelly",
        "role": "Director",
        "email": "paul.farrelly@newlandsconstructionltd.co.uk"
      },
      {
        "name": "Connor Tierney",
        "role": "Contracts Manager",
        "email": "connor.tierney@newlandsconstructionltd.co.uk"
      },
      {
        "name": "Upul Akarawita",
        "role": "Contracts Manager",
        "email": "upulakarawita@newlandsconstructionltd.co.uk"
      },
      {
        "name": "Jack Haywood",
        "role": "Quantity Surveyor",
        "email": "jack.haywood@newlandsconstructionltd.co.uk"
      }
    ]
  },
  {
    "id": 510,
    "name": "Newtonstewart Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adam Nicholl",
        "role": "Project Manager",
        "email": "adam.nicholl@newtownstewart.net"
      },
      {
        "name": "Brendan McGarry",
        "role": "Contracts Manager",
        "email": "brendan@newtownstewart.net"
      },
      {
        "name": "Paul Duddy",
        "role": "Quantity Surveyor",
        "email": "pduddy@newtownstewart.co.uk"
      },
      {
        "name": "Seamus Craig",
        "role": "Quantity Surveyor",
        "email": "seamus@newtownstewart.net"
      },
      {
        "name": "Shaun Craig",
        "role": "Owner",
        "email": "shaun.craig@newtownstewart.net"
      }
    ]
  },
  {
    "id": 511,
    "name": "Nexus Utilities",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Conner White",
        "role": "Contract Manager",
        "email": "conner.white@nexusutilities.co.uk"
      },
      {
        "name": "John Gaughan",
        "role": "Director",
        "email": "john.gaughan@nexusutilities.co.uk"
      },
      {
        "name": "Jonathan Cheney",
        "email": "jonathan.cheney@nexusutilities.co.uk"
      },
      {
        "name": "Patrick Gaughan",
        "role": "Commercial Director",
        "email": "patrick.gaughan@nexusutilities.co.uk",
        "phone": "7901160516.0"
      },
      {
        "name": "Jonathan Cheney",
        "email": "info@nexusutilities.co.uk"
      }
    ]
  },
  {
    "id": 512,
    "name": "Northvale Construction",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Kevin Marshall",
        "role": "Construction Director",
        "email": "kevin.marshall@nvc.co.uk"
      },
      {
        "name": "Connor McShane",
        "role": "Contracts Manager",
        "email": "connor.mcshane@nvc.co.uk"
      },
      {
        "name": "Patrick Cronin",
        "role": "Project Manager",
        "email": "patrick.cronin@nvc.co.uk"
      },
      {
        "name": "Phil Harvey",
        "role": "Quantity Surveyor",
        "email": "phil.harvey@nvc.co.uk"
      },
      {
        "name": "Stephen Morrow",
        "role": "Quantity Surveyor",
        "email": "stephen.morrow@nvc.co.uk",
        "phone": "07776 301236"
      }
    ]
  },
  {
    "id": 513,
    "name": "Northvale Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Connor McShane",
        "role": "Contracts Manager",
        "email": "connor.mcshane@nvc.co.uk"
      },
      {
        "name": "Kevin Marshall",
        "role": "Construction Director",
        "email": "kevin.marshall@nvc.co.uk"
      },
      {
        "name": "Liviu Cornel Huiban",
        "role": "Site Manager",
        "email": "liviu.huiban@nvc.co.uk"
      },
      {
        "name": "Patrick Cronin",
        "role": "Project Manager",
        "email": "patrick.cronin@nvc.co.uk"
      },
      {
        "name": "Phil Harvey",
        "role": "Quantity Surveyor",
        "email": "phil.harvey@nvc.co.uk"
      },
      {
        "name": "Stephen Morrow",
        "role": "Quantity Surveyor",
        "email": "info@nvc.co.uk",
        "phone": "07776 301236"
      }
    ]
  },
  {
    "id": 514,
    "name": "O'Brien Contractors",
    "disciplines": [
      "Groundworks"
    ],
    "contacts": [
      {
        "name": "Aaron Stewart",
        "role": "Site Manager",
        "email": "aaron.stewart@obriencontractors.co.uk"
      },
      {
        "name": "Andy Foster",
        "role": "Contracts Manager",
        "email": "andrew.foster@obriencontractors.co.uk",
        "phone": "07891 217129"
      },
      {
        "name": "Anthony Love",
        "role": "Contracts Manager",
        "email": "anthony.love@obriencontractors.co.uk",
        "phone": "07969 018 550"
      },
      {
        "name": "Guy Baker",
        "role": "Project Manager",
        "email": "guy.baker@obriencontractors.co.uk",
        "phone": "07969 018559"
      },
      {
        "name": "Kevin Brennan",
        "role": "Project Manager",
        "email": "kevin.brennan@obriencontractors.co.uk",
        "phone": "07702 128 012"
      },
      {
        "name": "Lance Gudger",
        "role": "Construction Director",
        "email": "lance.gudger@obriencontractors.co.uk"
      },
      {
        "name": "Matt Moore",
        "role": "Senior Buyer",
        "email": "matt.moore@obriencontractors.co.uk"
      },
      {
        "name": "Neels Saayman",
        "role": "Quantity Surveyor",
        "email": "neels.saayman@obriencontractors.co.uk",
        "phone": "07966 004869"
      },
      {
        "name": "Nick Roche",
        "role": "Contracts Manager",
        "email": "nick.roche@obriencontractors.co.uk",
        "phone": "079501 99360"
      },
      {
        "name": "Peter O'Brien",
        "role": "Director",
        "email": "peter.obrien@obriencontractors.co.uk"
      },
      {
        "name": "Simon O'Brien",
        "role": "Owner",
        "email": "simon.obrien@obriencontractors.co.uk"
      },
      {
        "name": "Stuart Chamberlain",
        "role": "Director",
        "email": "stuart.chamberlain@obriencontractors.co.uk",
        "phone": "07866 688 396"
      },
      {
        "name": "Tom O'Brien",
        "role": "Director",
        "email": "tom.obrien@obriencontractors.co.uk"
      },
      {
        "name": "Tony Mitchell",
        "role": "Director",
        "email": "tony.mitchell@obriencontractors.co.uk",
        "phone": "07970 676362"
      },
      {
        "name": "Vicki O'Brien",
        "email": "vicki.obrien@obriencontractors.co.uk"
      }
    ]
  },
  {
    "id": 515,
    "name": "O'Connell Building Contractors Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Colm O'Rouke",
        "role": "Contracts Manager",
        "email": "colm@oconnellcontracting.com",
        "phone": "07955 203850"
      },
      {
        "name": "Declan O'Connell",
        "role": "Director",
        "email": "declan@oconnellbuildingcontractors.com"
      },
      {
        "name": "Emma Wilkins",
        "role": "Business Development Manager",
        "email": "emma.wilkins@oconnellcontracting.com",
        "phone": "07514 319779"
      },
      {
        "name": "Joe Skeats",
        "role": "Site Manager",
        "email": "joe@oconnellcontracting.com",
        "phone": "07900 531668"
      },
      {
        "name": "Kevin Crehan",
        "role": "Contracts Manager",
        "email": "kevin@oconnellcontracting.com",
        "phone": "07394 096512"
      },
      {
        "name": "Paul Dowsett",
        "role": "Commercial Director",
        "email": "paul@oconnellcontracting.com",
        "phone": "07885 049637"
      },
      {
        "name": "Steve Johnson",
        "role": "Health and Safety Manager",
        "email": "steve.johnson@oconnellcontracting.com",
        "phone": "07482 726153"
      }
    ]
  },
  {
    "id": 516,
    "name": "O'Hagan Civils Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Francis O'Hagan",
        "role": "Operations Director",
        "email": "francis@ohagancivils.com",
        "phone": "07787 762528"
      },
      {
        "name": "James Murphy",
        "role": "Commercial Manager",
        "email": "james.murphy@ohagancivils.co.uk",
        "phone": "07895 755699"
      },
      {
        "name": "PJ Meehan",
        "role": "Contracts Manager",
        "email": "pj@ohagancivils.co.uk",
        "phone": "07725 419312"
      },
      {
        "name": "Steve Johnson",
        "role": "Health and Safety Manager",
        "email": "steve.johnson@oconnellcontracting.com",
        "phone": "7482726153.0"
      }
    ]
  },
  {
    "id": 517,
    "name": "O'Halloran & O'Brien Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alan Smith",
        "role": "Quantity Surveyor",
        "email": "alan@ohob.co.uk"
      },
      {
        "name": "Alex Scott",
        "role": "Quantity Surveyor",
        "email": "alex.scott@ohob.co.uk"
      },
      {
        "name": "Andrew Gormley",
        "role": "Quantity Surveyor",
        "email": "andyg@ohob.co.uk"
      },
      {
        "name": "Colm Wynne",
        "role": "Contracts Manager",
        "email": "colm@ohob.co.uk",
        "phone": "07720 968704"
      },
      {
        "name": "Enda Hooks",
        "role": "Quantity Surveyor",
        "email": "enda.hooks@ohob.co.uk"
      },
      {
        "name": "George Fordor",
        "role": "Project Manager",
        "email": "george.fordor@ohob.co.uk"
      },
      {
        "name": "John Hayes",
        "role": "Contracts Manager",
        "email": "johnh@ohob.co.uk"
      },
      {
        "name": "John O'Donoghue",
        "role": "Contracts Manager",
        "email": "johno@ohob.co.uk"
      },
      {
        "name": "Ricky Halpin",
        "role": "Contracts Manager",
        "email": "ricky@ohob.co.uk"
      },
      {
        "name": "Ronan O'Flaherty",
        "role": "Project Manager",
        "email": "ronan.oflaherty@ohob.co.uk"
      },
      {
        "name": "Sean McMullen",
        "role": "Quality Operations Manager",
        "email": "sean.mcmullen@ohob.co.uk"
      },
      {
        "name": "Sean Moran",
        "role": "Buyer",
        "email": "seanm@ohob.co.uk"
      },
      {
        "name": "Tom O'Brien",
        "role": "Managing Director",
        "email": "ohob@ohob.co.uk"
      },
      {
        "name": "AJ Donaghue",
        "role": "Contracts Manager",
        "email": "aj@ohob.co.uk"
      },
      {
        "name": "Andrew Dixon",
        "role": "Quantity Surveyor",
        "email": "andrew.dixon@ohob.co.uk"
      },
      {
        "name": "Andrew Walsham",
        "role": "Chief Buyer",
        "email": "andrew.walsham@ohob.co.uk"
      },
      {
        "name": "Colin Bystram",
        "role": "Site Manager",
        "email": "colin@ohob.co.uk",
        "phone": "7734045224.0"
      },
      {
        "name": "Colin Wynne",
        "role": "Contracts Manager",
        "email": "colin.wynne@ohob.co.uk",
        "phone": "7720968704.0"
      },
      {
        "name": "Cosmin Costin",
        "role": "Construction Manager",
        "email": "cosmin.costin@ohob.co.uk"
      },
      {
        "name": "Dave Walker",
        "role": "Project Manager",
        "email": "dave.walker@ohob.co.uk"
      },
      {
        "name": "Faizaan Khan",
        "role": "Project Manager",
        "email": "faizaan@ohob.co.uk"
      },
      {
        "name": "Gabriel Spinu",
        "role": "Site Manager",
        "email": "gabriel@ohob.co.uk",
        "phone": "7814568123.0"
      },
      {
        "name": "Joe McGlynn",
        "role": "Site Manager",
        "email": "joem@ohob.co.uk",
        "phone": "7873133985.0"
      },
      {
        "name": "John Donaghue",
        "role": "Contracts Manager",
        "email": "john.donaghue@ohob.co.uk",
        "phone": "7720593418.0"
      },
      {
        "name": "Joshua Sackey",
        "role": "Quantity Surveyor",
        "email": "joshua.sackey@ohob.co.uk"
      },
      {
        "name": "Kieran Duggan",
        "role": "Operations Director",
        "email": "kierand@ohob.co.uk",
        "phone": "7734045252.0"
      },
      {
        "name": "Padraic Melvin",
        "role": "Site Manager",
        "email": "padraic.melvin@ohob.co.uk"
      },
      {
        "name": "Paul Webster",
        "role": "Quantity Surveyor",
        "email": "paul.webster@ohob.co.uk"
      },
      {
        "name": "Phil Durant",
        "role": "Site Manager",
        "email": "phil.durant@ohob.co.uk"
      },
      {
        "name": "Robert Deme",
        "role": "robert.deme@ohob.co.uk"
      },
      {
        "name": "Sean McCallum",
        "role": "Quantity Surveyor",
        "email": "sean@ohob.co.uk"
      },
      {
        "name": "Steve Burke",
        "role": "Technical Director",
        "email": "steve@ohob.co.uk"
      },
      {
        "name": "Steve Richards",
        "role": "Commercial Director",
        "email": "stever@ohob.co.uk"
      }
    ]
  },
  {
    "id": 518,
    "name": "O'Keefe Construction",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Patrick O'Keefe",
        "role": "Managing Director",
        "email": "patrick.okeefe@okeefe.co.uk"
      },
      {
        "name": "Adrian Paul",
        "role": "Operations Director",
        "email": "adrian.paul@okeefe.co.uk",
        "phone": "07917 031275"
      },
      {
        "name": "Marc Budgen",
        "role": "Commercial Director",
        "email": "marc.budgen@okeefe.co.uk",
        "phone": "07887 511208"
      },
      {
        "name": "Steve Dunne",
        "role": "Commercial Director",
        "email": "steve.dunne@okeefe.co.uk"
      },
      {
        "name": "Ashley Weaver",
        "role": "Operations Manager",
        "email": "ashley.weaver@okeefe.co.uk",
        "phone": "07824 691360"
      },
      {
        "name": "Ben Gillham",
        "role": "Commercial Manager",
        "email": "ben.gillham@okeefe.co.uk",
        "phone": "07584 701220"
      },
      {
        "name": "Dave Foley",
        "role": "Contracts Manager",
        "email": "dave.foley@okeefe.co.uk",
        "phone": "07917 031274"
      },
      {
        "name": "Ian Munn",
        "role": "Contracts Manager",
        "email": "ian.munn@okeefe.co.uk"
      },
      {
        "name": "Kevin O'Malley",
        "role": "Contract Manager",
        "email": "kevin.omalley@okeefe.co.uk"
      },
      {
        "name": "Camilla Winter",
        "role": "Quantity Surveyor",
        "email": "camilla.winter@okeefe.co.uk",
        "phone": "07919 573158"
      },
      {
        "name": "Derek Gilbert",
        "role": "Quantity Surveyor",
        "email": "derek.gilbert@okeefe.co.uk",
        "phone": "07858 962878"
      },
      {
        "name": "Muiris O'Loingsigh",
        "role": "Quantity Surveyor",
        "email": "muiris.oloingsigh@okeefe.co.uk"
      },
      {
        "name": "Kevin Hartigan",
        "role": "Project Manager",
        "email": "kevin.hartigan@okeefe.co.uk",
        "phone": "07971 569159"
      },
      {
        "name": "Pat Keville",
        "role": "Project Manager",
        "email": "pat.keville@okeefe.co.uk"
      },
      {
        "name": "Rob Waddington",
        "role": "Construction Manager",
        "email": "rob.waddington@okeefe.co.uk",
        "phone": "07779 968240"
      }
    ]
  },
  {
    "id": 519,
    "name": "Oakland Building Services",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Darryl Jones",
        "role": "Quantity Surveyor",
        "email": "darryl.jones@oaklandbuildingservices.co.uk"
      },
      {
        "name": "Declan Sinnott",
        "role": "Quantity Surveyor",
        "email": "declan@oaklandbuildingservices.co.uk",
        "phone": "7970254615.0"
      },
      {
        "name": "John Sinnott",
        "role": "Managing Director",
        "email": "john.sinnott@oaklandbuildingservices.co.uk"
      }
    ]
  },
  {
    "id": 520,
    "name": "OBR Construction",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "C J Padden",
        "role": "Contracts Manager",
        "email": "cjpadden@obrgroup.ie"
      },
      {
        "name": "Chaminda Embuldeniyag",
        "role": "Quantity Surveyor",
        "email": "chaminda@oborconstruction.co.uk"
      },
      {
        "name": "Cian O'Sullivan",
        "role": "Project Manager",
        "email": "cosullivan@obrgroup.ie"
      },
      {
        "name": "Dan O'Brien",
        "role": "Director",
        "email": "danobrien@obrgroup.co.uk"
      },
      {
        "name": "David McPherson",
        "role": "Project Manager",
        "email": "dmcpherson@obrgroup.ie"
      },
      {
        "name": "Gearoid Holland",
        "role": "Contract Manager",
        "email": "gearoid.holland@obrgroup.ie"
      },
      {
        "name": "John Brodrick",
        "role": "Contracts Manager",
        "email": "john@oborconstruction.co.uk"
      },
      {
        "name": "John Paul Lalley",
        "role": "Contracts Manager",
        "email": "johnpaul@oborconstruction.co.uk"
      },
      {
        "name": "Katjen Ratnasingam",
        "role": "Contracts Manager",
        "email": "katjen@obrgroup.ie"
      },
      {
        "name": "Matt Rowden",
        "role": "Project Manager",
        "email": "matt.rowden@obrgroup.ie"
      },
      {
        "name": "Mike O'Sullivan",
        "role": "Contract Manager",
        "email": "mike@obrgroup.ie",
        "phone": "7826546561.0"
      },
      {
        "name": "Stephen Logan",
        "role": "Construction Manager",
        "email": "slogan@obrgroup.ie"
      },
      {
        "name": "Zamir Berisha",
        "role": "Site Manager",
        "email": "zamir@oborconstruction.co.uk"
      },
      {
        "name": "Cian O'Sullivan",
        "role": "cosullivan@obrgroup.ie"
      },
      {
        "name": "Gearoid Holland",
        "role": "Contract Manager",
        "email": "gearoid.holland@obrgroup.co.uk"
      },
      {
        "name": "Matt Rowden",
        "role": "Project Manager",
        "email": "matt.rowden@obrgroup.co.uk"
      }
    ]
  },
  {
    "id": 521,
    "name": "Octavius Infrastructure",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adam Hinge",
        "email": "adam.hinge@octavius.co.uk"
      },
      {
        "name": "Adam Szeremeta",
        "role": "Project Manager",
        "email": "adam.szeremeta@octavius.co.uk"
      },
      {
        "name": "Barry Goss",
        "role": "Project Manager",
        "email": "barry.goss@octavius.co.uk",
        "phone": "07966 302571"
      },
      {
        "name": "Ben Race",
        "role": "Commercial Manager",
        "email": "ben.race@octavius.co.uk"
      },
      {
        "name": "Chris Ellis",
        "role": "Delivery Director",
        "email": "chris.ellis@octavius.co.uk"
      },
      {
        "name": "Chris Hudson",
        "role": "Director",
        "email": "chris.hudson@octavius.co.uk"
      },
      {
        "name": "Darren Griffin",
        "email": "darren.griffin@octavius.co.uk",
        "phone": "7736597139.0"
      },
      {
        "name": "Darren Taylor",
        "role": "Site Manager",
        "email": "darren.taylor1@octavius.co.uk"
      },
      {
        "name": "Gavin Pritchard",
        "role": "Managing Director",
        "email": "gavin.pritchard@octavius.co.uk"
      },
      {
        "name": "Greg Wall",
        "role": "Senior Engineering Manager",
        "email": "greg.wall@octavius.co.uk"
      },
      {
        "name": "Ian Fry",
        "role": "Commercial Manager",
        "email": "ian.fry@octavius.co.uk"
      },
      {
        "name": "Isayas Tecleberhan",
        "role": "Framework Director",
        "email": "isayas.tecleberhan@octavius.co.uk"
      },
      {
        "name": "Jarrod Parkin",
        "role": "Framework Manager",
        "email": "jarrod.parkin@octavius.co.uk"
      },
      {
        "name": "Jonathan Taylor",
        "role": "Senior Site Manager",
        "email": "jonathan.taylor@octavius.co.uk"
      },
      {
        "name": "Julie Jones",
        "role": "Project Manager",
        "email": "julie.jones@octavius.co.uk"
      },
      {
        "name": "Luke Hearmden",
        "role": "Development Manager",
        "email": "luke.hearmden@octavius.co.uk"
      },
      {
        "name": "Luke Stride",
        "role": "Site Manager",
        "email": "luke.stride@octavius.co.uk"
      },
      {
        "name": "Matt Whale",
        "role": "Framework Manager",
        "email": "matt.whale@octavius.co.uk"
      },
      {
        "name": "Matt Wright",
        "email": "matt.wright@octavius.co.uk"
      },
      {
        "name": "Paul Browne",
        "role": "Senior Project Manager",
        "email": "paul.browne@octavius.co.uk"
      },
      {
        "name": "Robert Faulkner",
        "role": "Quantity Surveyor",
        "email": "robert.faulkner@octavius.co.uk"
      },
      {
        "name": "Safia Whitwham",
        "role": "Technical Manager",
        "email": "safia.whitwham@octavius.co.uk"
      },
      {
        "name": "Sam Jarman",
        "role": "Project Manager",
        "email": "sam.jarman@octavius.co.uk"
      },
      {
        "name": "Simon Senyk",
        "role": "Quantity Surveyor",
        "email": "simon.senyk@octavius.co.uk",
        "phone": "07974 642624"
      },
      {
        "name": "Steve Cooper",
        "role": "Project Manager",
        "email": "steve.cooper@octavius.co.uk"
      },
      {
        "name": "Steve Mayley",
        "role": "Project Manager",
        "email": "steve.mayley@octavius.co.uk"
      }
    ]
  },
  {
    "id": 522,
    "name": "Oliver Connell",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "James Connell",
        "role": "Managing Director",
        "email": "jconnell@oliverconnell.com",
        "phone": "07855 375743"
      },
      {
        "name": "Oliver Connell",
        "role": "Managing Director",
        "email": "oconnell@oliverconnell.com",
        "phone": "07976 513552"
      },
      {
        "name": "Greg Connell",
        "role": "Finance Director",
        "email": "gconnell@oliverconnell.com"
      },
      {
        "name": "George Pintilie",
        "role": "Contracts Manager",
        "email": "gpintilie@oliverconnell.com"
      },
      {
        "name": "Tony Lyons",
        "role": "Contracts Manager",
        "email": "tlyons@oliverconnell.com",
        "phone": "07957 290514"
      },
      {
        "name": "Trevor Walsh",
        "role": "Contracts Manager",
        "email": "twalsh@oliverconnell.com",
        "phone": "07483 034261"
      },
      {
        "name": "Tom Connell",
        "role": "Contracts Manager",
        "email": "tconnell@oliverconnell.com"
      },
      {
        "name": "Paul Conneely",
        "role": "Contracts Manager",
        "email": "pconneely@oliverconnell.com"
      },
      {
        "name": "Jim O'Reilly",
        "role": "Contracts Manager",
        "email": "07483 041495"
      },
      {
        "name": "Graham Harrington",
        "role": "Contract Manager",
        "email": "gharrington@oliverconnell.com"
      },
      {
        "name": "Paul McGrath",
        "role": "Contract Manager",
        "email": "pmcgrath@oliverconnell.com"
      },
      {
        "name": "Kevin Reilly",
        "role": "Quantity Surveyor",
        "email": "kreilly@oliverconnell.com"
      },
      {
        "name": "Aisling Nic Aodhain",
        "role": "Quantity Surveyor",
        "email": "anicaodhain@oliverconnell.com"
      },
      {
        "name": "Adam Hunter",
        "role": "Quantity Surveyor",
        "email": "adam.hunter@oliverconnell.com"
      },
      {
        "name": "Andy Watson",
        "role": "Quantity Surveyor",
        "email": "andy.watson@oliverconnell.com"
      },
      {
        "name": "Tony Holland",
        "role": "Quantity Surveyor",
        "email": "tony.holland@oliverconnell.com"
      }
    ]
  },
  {
    "id": 523,
    "name": "Oliver Connell & Son Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adam Hunter",
        "role": "Quantity Surveyor",
        "email": "adam.hunter@oliverconnell.com"
      },
      {
        "name": "Aisling Nic Aodhain",
        "role": "Quantity Surveyor",
        "email": "anicaodhain@oliverconnell.com"
      },
      {
        "name": "Andy Watson",
        "role": "Quantity Surveyor",
        "email": "andy.watson@oliverconnell.com"
      },
      {
        "name": "Chris Cunningham",
        "role": "Project Manager",
        "email": "chris.cunningham@oliverconnell.com",
        "phone": "7920652916.0"
      },
      {
        "name": "Connor Henerghan",
        "role": "Contract Manager",
        "email": "connor.henerghan@oliverconnell.com"
      },
      {
        "name": "Daniel Blanita",
        "role": "Manager",
        "email": "dblanita@oliverconnell.com"
      },
      {
        "name": "Daniel Howlin",
        "role": "Project Manager",
        "email": "daniel.howlin@oliverconnell.com",
        "phone": "7878462780.0"
      },
      {
        "name": "Ed Bourke",
        "role": "Contracts Manager",
        "email": "ed.bourke@oliverconnell.com"
      },
      {
        "name": "Edward Bourke",
        "role": "Contracts Manager",
        "email": "edward.bourke@oliverconnell.com"
      },
      {
        "name": "Enda Reilly",
        "role": "Contracts Manager",
        "email": "enda.reilly@oliverconnell.com"
      },
      {
        "name": "Fergal Rattigan",
        "role": "Project Manager",
        "email": "fergal.rattigan@oliverconnell.com"
      },
      {
        "name": "George Picioraga",
        "role": "Project Manager",
        "email": "george.picioraga@oliverconnell.com",
        "phone": "7543405485.0"
      },
      {
        "name": "George Pintilie",
        "role": "Contracts Manager",
        "email": "gpintilie@oliverconnell.com"
      },
      {
        "name": "Graham Harrington",
        "role": "Contract Manager",
        "email": "gharrington@oliverconnell.com"
      },
      {
        "name": "Greg Connell",
        "role": "Finance Director",
        "email": "gconnell@oliverconnell.com"
      },
      {
        "name": "James Connell",
        "role": "Managing Director",
        "email": "jconnell@oliverconnell.com",
        "phone": "7855375743.0"
      },
      {
        "name": "James Minihan",
        "role": "Contracts Manager",
        "email": "james.minihan@oliverconnell.com"
      },
      {
        "name": "Jim O'Reilly",
        "role": "Contracts Manager",
        "email": "jim.oreilly@oliverconnell.com",
        "phone": "7483041495.0"
      },
      {
        "name": "Kevin Reilly",
        "role": "Quantity Surveyor",
        "email": "kreilly@oliverconnell.com"
      },
      {
        "name": "Martin McGrath",
        "role": "Project Manager",
        "email": "mmcgrath@oliverconnell.com"
      },
      {
        "name": "Michael Diughan",
        "role": "Project Manager",
        "email": "michael.diughan@oliverconnell.com"
      },
      {
        "name": "Oliver Connell",
        "role": "Managing Director",
        "email": "oconnell@oliverconnell.com",
        "phone": "7976513552.0"
      },
      {
        "name": "Ollie Connell",
        "role": "Contracts Manager",
        "email": "ollie.connell@oliverconnell.com"
      },
      {
        "name": "Paul Conneely",
        "role": "Contracts Manager",
        "email": "pconneely@oliverconnell.com"
      },
      {
        "name": "Paul McGrath",
        "role": "Contract Manager",
        "email": "pmcgrath@oliverconnell.com"
      },
      {
        "name": "Rahul Malde",
        "role": "Contracts Manager",
        "email": "rahul.malde@oliverconnell.com"
      },
      {
        "name": "Saleem Oka",
        "role": "Project Manager",
        "email": "saleem.oka@oliverconnell.com"
      },
      {
        "name": "Seamus Daly",
        "role": "Project Manager",
        "email": "seamusdaly@oliverconnell.com",
        "phone": "7483031571.0"
      },
      {
        "name": "Shaun McCarthy",
        "role": "Contracts Manager",
        "email": "shaun.mccarthy@oliverconnell.com"
      },
      {
        "name": "Tom Connell",
        "role": "Contracts Manager",
        "email": "tconnell@oliverconnell.com"
      },
      {
        "name": "Tom Dylan",
        "role": "Buyer",
        "email": "tom.dylan@oliverconnell.com",
        "phone": "7747478282.0"
      },
      {
        "name": "Tony Holland",
        "role": "Quantity Surveyor",
        "email": "tony.holland@oliverconnell.com"
      },
      {
        "name": "Tony Lyons",
        "role": "Contracts Manager",
        "email": "tlyons@oliverconnell.com",
        "phone": "7957290514.0"
      },
      {
        "name": "Trevor Walsh",
        "role": "Contracts Manager",
        "email": "twalsh@oliverconnell.com",
        "phone": "7483034261.0"
      }
    ]
  },
  {
    "id": 524,
    "name": "Oliver Curran Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Michael Kelly",
        "role": "Contract Manager",
        "email": "mkelly@olivercurranconstruction.co.uk",
        "phone": "07789 435003"
      },
      {
        "name": "Oliver Curran",
        "role": "Managing Director",
        "email": "oliver.curran@olivercurranconstruction.co.uk"
      }
    ]
  },
  {
    "id": 525,
    "name": "P Colohan & Company Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "David Colohan",
        "role": "Quantity Surveyor",
        "email": "david@colohan.co.uk"
      },
      {
        "name": "Jack Fitzgerald",
        "role": "Quantity Surveyor",
        "email": "jack@colohan.co.uk"
      },
      {
        "name": "Mac McNulty",
        "role": "Director",
        "email": "mac@colohan.co.uk"
      },
      {
        "name": "Nick Read",
        "role": "Contracts Manager",
        "email": "nick@colohan.co.uk"
      },
      {
        "name": "Pat Colohan",
        "role": "Managing Director",
        "email": "pat@colohan.co.uk"
      },
      {
        "name": "Paul Caulfield",
        "role": "Contracts Manager",
        "email": "paul@colohan.co.uk"
      },
      {
        "name": "Rachel Farr",
        "role": "Director",
        "email": "rachel@colohan.co.uk"
      },
      {
        "name": "Steve Harding",
        "role": "Contract Manager",
        "email": "steve@colohan.co.uk"
      },
      {
        "name": "Vince Sheehan",
        "role": "Buyer",
        "email": "vince@colohan.co.uk"
      }
    ]
  },
  {
    "id": 526,
    "name": "P J Hegarty & Sons (UK) Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Callum Baines",
        "role": "Project Manager",
        "email": "callum.baines@pjhegarty.co.uk"
      },
      {
        "name": "Nigel Warren",
        "role": "Contract Manager",
        "email": "nigel.warren@pjhegarty.co.uk"
      },
      {
        "name": "Richard Sutton",
        "role": "Contracts Manager",
        "email": "richard.sutton@pjhegarty.co.uk",
        "phone": "7716182777.0"
      },
      {
        "name": "Connor Ryan",
        "role": "HSEQ Manager",
        "email": "pjhuk@pjhegarty.co.uk",
        "phone": "07523 685139"
      },
      {
        "name": "David Barr",
        "role": "HSEQ Director",
        "email": "david.barr@pjhegarty.co.uk"
      },
      {
        "name": "Nigel Warren",
        "role": "Director",
        "email": "nigel.warren@pjjhegarty.co.uk",
        "phone": "07753 101528"
      },
      {
        "name": "Samuel Assad",
        "role": "Quantity Surveyor",
        "email": "samuel.assad@pjhegarty.co.uk",
        "phone": "07514 646189"
      },
      {
        "name": "Stuart McLeish",
        "role": "Project Manager",
        "email": "stuart.mcleish@pjjhegarty.co.uk"
      }
    ]
  },
  {
    "id": 527,
    "name": "Phase One Works",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "George Dibas",
        "role": "Project Manager",
        "email": "george.dibas@phaseoneworks.com"
      },
      {
        "name": "Miles Pritchard",
        "role": "Director",
        "email": "miles.pritchard@phaseoneworks.com"
      }
    ]
  },
  {
    "id": 528,
    "name": "Phoenix Brickwork (UK) Limited",
    "disciplines": [
      "Brickwork"
    ],
    "contacts": [
      {
        "name": "Aaron Ryan",
        "role": "Quantity Surveyor",
        "email": "aaron.ryan@phoenixukgroup.com",
        "phone": "07874 877316"
      },
      {
        "name": "Adam Wagstass",
        "role": "Contracts Manager",
        "email": "awagstass@phoenixukgroup.com",
        "phone": "07706 324562"
      },
      {
        "name": "Andrew Doran",
        "role": "Quantity Surveyor",
        "email": "andrew.doran@phoenixukgroup.com"
      },
      {
        "name": "Banny Misra",
        "role": "Quantity Surveyor",
        "email": "bmisra@phoenixukgroup.com"
      },
      {
        "name": "Brett Smith",
        "role": "Buyer",
        "email": "bsmith@phoenixukgroup.com"
      },
      {
        "name": "Carl Taylor",
        "role": "Bid Manager",
        "email": "ctaylor@phoenixbrickwork.com"
      },
      {
        "name": "Christian Watson",
        "role": "Managing Director",
        "email": "cwatson@phoenixbrickwork.com",
        "phone": "07535 609722"
      },
      {
        "name": "Claire Jurkow",
        "role": "Receptionist",
        "email": "cjurkow@phoenixukgroup.com"
      },
      {
        "name": "Dale Joy",
        "role": "Specification Manager",
        "email": "dale@phoenixukgroup.com"
      },
      {
        "name": "Dave Newbold",
        "role": "Quantity Surveyor",
        "email": "dnewbold@phoenixukgroup.com",
        "phone": "07394 565225"
      },
      {
        "name": "Dean Hewitt",
        "role": "Contracts Manager",
        "email": "dhewitt@phoenixukgroup.com",
        "phone": "07530 965912"
      },
      {
        "name": "Dean Roe",
        "role": "Buyer",
        "email": "dean@phoenixukgroup.com"
      },
      {
        "name": "Dylan Tewson",
        "role": "Quantity Surveyor",
        "email": "dylan@phoenixukgroup.com"
      },
      {
        "name": "Ellie Clements",
        "role": "Trainee Quantity Surveyor",
        "email": "ellie@phoenixukgroup.com"
      },
      {
        "name": "Elliot Allan",
        "role": "Site Manager",
        "email": "eallen@phoenixukgroup.com",
        "phone": "07921 758713"
      },
      {
        "name": "Giles Prickett",
        "role": "Contracts Manager",
        "email": "giles@phoenixukgroup.com"
      },
      {
        "name": "Greg Morton",
        "role": "Buyer",
        "email": "greg.morton@phoenixukgroup.com"
      },
      {
        "name": "Ian Artley",
        "role": "Preconstruction Director",
        "email": "iartley@phoenixukgroup.com"
      },
      {
        "name": "Ian Knight",
        "role": "Commercial Manager",
        "email": "ian@phoenixbrickwork.com",
        "phone": "07572 710836"
      },
      {
        "name": "James Doherty",
        "role": "Compliance Manager",
        "email": "james.doherty@phoenixukgroup.com"
      },
      {
        "name": "Jamie Duerden",
        "role": "Contracts Manager",
        "email": "jamie@phoenixbrickwork.com",
        "phone": "07538 945691"
      },
      {
        "name": "Jamie Howard",
        "role": "Contracts Manager",
        "email": "j.howard@phoenixukgroup.com"
      },
      {
        "name": "Jamie Shanahan",
        "role": "Project Manager",
        "email": "jamie.shanahan@phoenixukgroup.com",
        "phone": "07842 314400"
      },
      {
        "name": "Jason Brockett",
        "role": "Contracts Manager",
        "email": "jason.brockett@phoenixukgroup.com"
      },
      {
        "name": "Jason Cordova",
        "role": "Quantity Surveyor",
        "email": "jason@phoenixukgroup.com"
      },
      {
        "name": "Karl Hunt",
        "role": "Site Manager",
        "email": "karl.hunt@phoenixukgroup.com",
        "phone": "07874 858432"
      },
      {
        "name": "Luke Blackburn",
        "role": "Quantity Surveyor",
        "email": "lblackburn@phoenixukgroup.com"
      },
      {
        "name": "Malcolm Hancock",
        "role": "Contracts Manager",
        "email": "malcolm.hancock@phoenixukgroup.com"
      },
      {
        "name": "Mark Warsap",
        "role": "Site Supervisor",
        "email": "mark.warsap@phoenixukgroup.com"
      },
      {
        "name": "Martin Davis",
        "role": "Site Manager",
        "email": "martin@phoenixbrickwork.com",
        "phone": "07706 315223"
      },
      {
        "name": "Matt Brockett",
        "role": "Contract Manager",
        "email": "matt.brockett@phoenixukgroup.com",
        "phone": "07860 851806"
      },
      {
        "name": "Neil Finch",
        "role": "Site Manager",
        "email": "neil@phoenixukgroup.com",
        "phone": "07951 291011"
      },
      {
        "name": "Nina Johnson",
        "role": "Commercial Manager",
        "email": "nina@phoenixukgroup.com"
      },
      {
        "name": "Pav Baines",
        "role": "Quantity Surveyor",
        "email": "pav.baines@phoenixukgroup.com"
      },
      {
        "name": "Pete Watson",
        "role": "Site Manager",
        "email": "pwatson@phoenixbrickwork.com"
      },
      {
        "name": "Rob Forby",
        "role": "Site Manager",
        "email": "rob.forby@phoenixukgroup.com",
        "phone": "07542 801707"
      },
      {
        "name": "Rory Talbot",
        "role": "Contract Manager",
        "email": "rory.talbot@phoenixukgroup.com"
      },
      {
        "name": "Samuel McSpadden",
        "role": "Managing Director",
        "email": "samuel.mcspadden@phoenixukgroup.com"
      },
      {
        "name": "Terry Moore",
        "role": "Site Manager",
        "email": "tmoore@phoenixukgroup.com",
        "phone": "07921 773023"
      },
      {
        "name": "Tiffany Hardwick",
        "role": "Quantity Surveyor",
        "email": "tiffany.hardwick@phoenixukgroup.com"
      },
      {
        "name": "Wayne Addison",
        "role": "Project Manager",
        "email": "waddison@phoenixukgroup.com"
      },
      {
        "name": "Will Blackburn",
        "role": "Quantity Surveyor",
        "email": "will.blackburn@phoenixukgroup.com"
      },
      {
        "name": "Aaron Ryan",
        "role": "Quantity Surveyor",
        "phone": "07874 877316"
      },
      {
        "name": "Jamie Shanahan",
        "role": "Project Manager",
        "phone": "07842 314400"
      },
      {
        "name": "Karl Hunt",
        "role": "Site Manager",
        "phone": "07874 858432"
      },
      {
        "name": "Matt Brockett",
        "role": "Contract Manager",
        "phone": "07860 851806"
      },
      {
        "name": "Rob Forby",
        "role": "Site Manager",
        "phone": "07542 801707"
      },
      {
        "name": "Alex Gibbons",
        "role": "Contracts Manager",
        "email": "alex.gibbons@phoenixbrickwork.co.uk"
      },
      {
        "name": "Chris Phoenix",
        "role": "Managing Director",
        "email": "chris@phoenixbrickwork.co.uk"
      },
      {
        "name": "Daniel Wilson",
        "role": "Project Manager",
        "email": "daniel.wilson@phoenixbrickwork.co.uk"
      },
      {
        "name": "Jamie Roberts",
        "role": "Quantity Surveyor",
        "email": "jamie.roberts@phoenixbrickwork.co.uk"
      },
      {
        "name": "Mark Stevens",
        "role": "Commercial Director",
        "email": "mark.stevens@phoenixbrickwork.co.uk"
      },
      {
        "name": "Ryan Parker",
        "role": "Contracts Manager",
        "email": "ryan.parker@phoenixbrickwork.co.uk"
      }
    ]
  },
  {
    "id": 529,
    "name": "Piperhill Building Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Conor Quinn",
        "role": "Quantity Surveyor",
        "email": "cquinn@piperhill-construction.co.uk"
      },
      {
        "name": "Gareth Prendiville",
        "role": "Contracts Manager",
        "email": "gareth.prendiville@piperhillconstruction.com",
        "phone": "7743969611.0"
      },
      {
        "name": "Gerard Mcguigan",
        "role": "Site Manager",
        "email": "gerard.mcguigan@piperhillconstruction.com",
        "phone": "7720581147.0"
      },
      {
        "name": "Kevin Osborne",
        "email": "kevin.osborne@piperhillconstruction.com"
      },
      {
        "name": "Paddy McCann",
        "email": "paddy.mccann@piperhillconstruction.com"
      },
      {
        "name": "Paul McNally",
        "role": "Quantity Surveyor",
        "email": "paul.mcnally@piperhillconstruction.com"
      }
    ]
  },
  {
    "id": 530,
    "name": "Pop Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Calin Pop",
        "role": "Director",
        "email": "calinpop@popconstruction.co.uk",
        "phone": "07828 131856"
      },
      {
        "name": "Vlad Arveleanu",
        "role": "Buyer",
        "email": "vladardeleanu@popconstruction.co.uk"
      }
    ]
  },
  {
    "id": 531,
    "name": "Powerday",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Edward Crossan",
        "role": "Director",
        "email": "edward@powerday.co.uk",
        "phone": "07802 349032"
      },
      {
        "name": "Brian Bailie",
        "role": "Contracts Manager",
        "email": "brian@powerday.co.uk"
      },
      {
        "name": "Sean Rahilly",
        "role": "Business Development Manager",
        "email": "sean.rahilly@powerday.co.uk"
      },
      {
        "name": "Chris Batterbee",
        "role": "Project Manager",
        "email": "chris.batterbee@powerday.co.uk"
      },
      {
        "name": "Eamon Davitt",
        "role": "Eamon.Davitt@Powerday.co.uk"
      }
    ]
  },
  {
    "id": 532,
    "name": "PP Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "John McKehon",
        "role": "Contracts Manager",
        "email": "john.mckehon@ppconstruction.co.uk"
      }
    ]
  },
  {
    "id": 533,
    "name": "Pridelord Groundworks",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Livi Sweeney",
        "role": "Buyer",
        "email": "livi@pridelordgroundworks.co.uk"
      },
      {
        "name": "Neil Fisher",
        "role": "Contract Manager",
        "email": "neil@pridelordgroundworks.co.uk",
        "phone": "07859 025781"
      }
    ]
  },
  {
    "id": 534,
    "name": "Princebuild",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Paul Baker",
        "role": "Construction Director",
        "email": "paul.baker@princebuild.co.uk",
        "phone": "07702 256824"
      },
      {
        "name": "Thomas Bluck",
        "role": "Construction Manager",
        "email": "thomas.bluck@princebuild.co.uk"
      },
      {
        "name": "Ash Cousins",
        "role": "Quantity Surveyor",
        "email": "ash.cousins@princebuild.co.uk"
      },
      {
        "name": "Ashley Kirby",
        "role": "Project Manager",
        "email": "ashley.kirby@princebuild.co.uk"
      },
      {
        "name": "George Asplin",
        "role": "Project Manager",
        "email": "george.asplin@princebuild.co.uk"
      },
      {
        "name": "Ross McMullan",
        "role": "Project Manager",
        "email": "ross.mcmullan@princebuild.co.uk",
        "phone": "07715 051609"
      }
    ]
  },
  {
    "id": 535,
    "name": "Proteus Facades",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Lee Caffery",
        "role": "Director",
        "email": "lee.caffery@proteusfacades.com"
      },
      {
        "name": "Simon Gregory",
        "role": "Sales Director",
        "email": "simon.gregory@proteusfacades.com",
        "phone": "07885 963711"
      },
      {
        "name": "Ben Howard",
        "role": "Contracts Manager",
        "email": "ben.howard@proteusfacades.com"
      },
      {
        "name": "Josh Kuriadose",
        "role": "Contract Manager",
        "email": "josh.kuriadose@proteusfacades.com"
      },
      {
        "name": "Shaun McCormack",
        "role": "shaun.mccormack@proteusfacades.com"
      }
    ]
  },
  {
    "id": 536,
    "name": "Proteus Facades Limited",
    "disciplines": [
      "Facades & Cladding"
    ],
    "contacts": [
      {
        "name": "Ben Howard",
        "role": "Contracts Manager",
        "email": "ben.howard@proteusfacades.com"
      },
      {
        "name": "Josh Kuriadose",
        "role": "Contract Manager",
        "email": "josh.kuriadose@proteusfacades.com"
      },
      {
        "name": "Lee Caffery",
        "role": "Director",
        "email": "lee.caffery@proteusfacades.com"
      },
      {
        "name": "Shaun McCormack",
        "email": "shaun.mccormack@proteusfacades.com"
      },
      {
        "name": "Simon Gregory",
        "role": "Sales Director",
        "email": "simon.gregory@proteusfacades.com",
        "phone": "07885 963711"
      }
    ]
  },
  {
    "id": 537,
    "name": "Pure Civil Engineering Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Jon Bell",
        "role": "Site Manager",
        "email": "jon.bell@purecivilengineeringltd.com",
        "phone": "07885 721981"
      },
      {
        "name": "Shaun Andrews",
        "role": "Director",
        "email": "shaunandrews@purecivilengineeringltd.com",
        "phone": "07885 721981"
      },
      {
        "name": "Jon Bell",
        "role": "Site Manager"
      }
    ]
  },
  {
    "id": 538,
    "name": "Purelake New Homes Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Bentley Oviawe",
        "role": "bentley.oviawe@purelake.co.uk"
      },
      {
        "name": "Craig Stamper",
        "role": "Commercial Manager",
        "email": "craig.stamper@purelake.co.uk"
      },
      {
        "name": "Kevin Crew",
        "role": "Quantity Surveyor",
        "email": "kevin.crew@purelake.co.uk"
      },
      {
        "name": "Noel Convert",
        "role": "Director",
        "email": "noel.convert@purelake.co.uk"
      }
    ]
  },
  {
    "id": 539,
    "name": "Quadrant Construction Services",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Chris Pearce",
        "role": "Quantity Surveyor",
        "email": "cpearce@lqgroup.org.uk"
      },
      {
        "name": "Cora Barrent",
        "role": "Manager",
        "email": "cbarrent@lqgroup.org.uk"
      },
      {
        "name": "Dean Castle",
        "role": "Commercial Manager",
        "email": "dcastle@lqgroup.org.uk"
      },
      {
        "name": "Dylan Finch",
        "email": "dfinch@lqgroup.org.uk"
      },
      {
        "name": "Gary Akers",
        "role": "Technical Manager",
        "email": "gakers@lqgroup.org.uk"
      },
      {
        "name": "Gordon Latimer",
        "role": "Construction Manager",
        "email": "glatimer@lqgroup.org.uk"
      },
      {
        "name": "Imran Ahmed",
        "role": "Site Manager",
        "email": "iahmed@lqgroup.org.uk"
      },
      {
        "name": "Jason Bedford",
        "role": "Senior Project Manager",
        "email": "jbedford@lqgroup.org.uk"
      },
      {
        "name": "Nathan Richards",
        "role": "Site Manager",
        "email": "nrichards@lqgroup.org.uk",
        "phone": "7790814748.0"
      },
      {
        "name": "Stuart Miller",
        "email": "smiller@lqgroup.org.uk"
      },
      {
        "name": "Tim Dobson",
        "role": "Project Manager",
        "email": "tdobson@lqgroup.org.uk"
      },
      {
        "name": "Zahid Ahmed",
        "role": "Framework Coordinator",
        "email": "zahmed@lqgroup.org.uk"
      }
    ]
  },
  {
    "id": 540,
    "name": "Quinn Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Kevin Quinn",
        "role": "Managing Director",
        "email": "kevin.quinn@quinnconstruction.co.uk"
      },
      {
        "name": "Simon Barwick",
        "role": "Site Manager",
        "email": "simon.barwick@quinnconstruction.co.uk",
        "phone": "07455 913593"
      },
      {
        "name": "Terry Barwick",
        "role": "Site Manager",
        "email": "terry.barwick@quinnconstruction.co.uk",
        "phone": "7956375469.0"
      }
    ]
  },
  {
    "id": 541,
    "name": "Quinn Groundworks & Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Arthur Orlos",
        "role": "Supervisor",
        "email": "arthur.orlos@quinngroundworks.co.uk"
      },
      {
        "name": "Chris Devane",
        "role": "Operations Director",
        "email": "chris.devane@quinngroundworks.co.uk",
        "phone": "7512313559.0"
      },
      {
        "name": "Connor Dowling",
        "role": "Quantity Surveyor",
        "email": "conor.dowling@quinngroundworks.co.uk"
      },
      {
        "name": "Dan O'Dell",
        "role": "Buyer",
        "email": "dan.o'dell@quinngroundworks.co.uk"
      },
      {
        "name": "Gerard McCaffrey",
        "role": "Commercial Manager",
        "email": "gerard.mccaffrey@quinngroundworks.co.uk"
      },
      {
        "name": "James Briggs",
        "role": "Project Manager",
        "email": "james.briggs@quinngroundworks.co.uk"
      },
      {
        "name": "John Peppett",
        "role": "Contracts Manager",
        "email": "john.peppett@quinngroundworks.co.uk"
      },
      {
        "name": "Jordan Bowers",
        "role": "Contract Manager",
        "email": "jordan.bowers@quinngroundworks.co.uk"
      },
      {
        "name": "Mark Fee",
        "role": "Quantity Surveyor",
        "email": "mark.fee@quinngroundworks.co.uk"
      },
      {
        "name": "Martin O'Donnell",
        "role": "Senior Quantity Surveyor",
        "email": "martin.odonnell@quinngroundworks.co.uk"
      },
      {
        "name": "Mick Roddy",
        "role": "Engineer",
        "email": "mick.roddy@quinngroundworks.co.uk"
      },
      {
        "name": "Mihai Huja",
        "role": "Site Manager",
        "email": "mihai.huja@quinngroundworks.co.uk"
      },
      {
        "name": "Rhian Daniel",
        "role": "Project Manager",
        "email": "rhian.daniel@quinngroundworks.co.uk"
      },
      {
        "name": "Vilson Terziu",
        "role": "Site Manager",
        "email": "vilson.terziu@quinngroundworks.co.uk"
      }
    ]
  },
  {
    "id": 542,
    "name": "Ramcrete Pumping",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Bernadette Kearns",
        "role": "Director",
        "email": "bernadette@ramcrete.co.uk",
        "phone": "07950 030299"
      },
      {
        "name": "Pauline Blaney",
        "role": "Financial Director",
        "email": "pauline@ramcrete.co.uk"
      }
    ]
  },
  {
    "id": 543,
    "name": "RC Structures & Basements",
    "disciplines": [
      "RC Frame"
    ],
    "contacts": [
      {
        "name": "Commercial Team",
        "email": "info@rcstructures.co.uk"
      }
    ]
  },
  {
    "id": 544,
    "name": "RC Structures and Basements Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "David Deloughery",
        "role": "Office Manager",
        "email": "david.deloughery@rcstructures.co.uk"
      }
    ]
  },
  {
    "id": 545,
    "name": "Realtime Civil Engineering Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Amanda Grover",
        "role": "Buyer",
        "email": "amanda.grover@realtimecivil.co.uk"
      },
      {
        "name": "Colm Henry",
        "role": "Contracts Manager",
        "email": "colm.henry@realtimecivil.co.uk"
      },
      {
        "name": "Damien Gallagher",
        "role": "Contracts Manager",
        "email": "damien@realtimecivil.com",
        "phone": "7973216426.0"
      },
      {
        "name": "Mark Comiskey",
        "role": "Buyer",
        "email": "mark@realtimecivil.co.uk"
      }
    ]
  },
  {
    "id": 546,
    "name": "Reynolds Groundwork Services",
    "disciplines": [
      "Groundworks"
    ],
    "contacts": [
      {
        "name": "Adam Pieterse",
        "role": "Contracts Manager",
        "email": "adam.pieterse@rgs.uk.net",
        "phone": "7715415749.0"
      },
      {
        "name": "Chris Reynolds",
        "role": "Manager",
        "email": "chris.reynolds@rgs.uk.net"
      },
      {
        "name": "Martin Hopkins",
        "role": "Site Manager",
        "email": "martin.hopkins@rgs.uk.net"
      },
      {
        "name": "Mick Levell",
        "role": "Contracts Manager",
        "email": "mick.levell@rgs.uk.net"
      },
      {
        "name": "Oliver Beales",
        "role": "Director",
        "email": "oliver.beales@rgs.uk.net"
      },
      {
        "name": "Paul Reynolds",
        "role": "Managing Director",
        "email": "paul@rgs.uk.net"
      },
      {
        "name": "Thomas Lloyd",
        "role": "Buyer",
        "email": "thomas.lloyd@rgs.uk.net"
      }
    ]
  },
  {
    "id": 547,
    "name": "Ridgeway Facades Limited",
    "disciplines": [
      "Facades & Cladding"
    ],
    "contacts": [
      {
        "name": "Colin Halliwell",
        "role": "Commercial Director",
        "email": "colin.halliwell@rbegroup.co.uk"
      },
      {
        "name": "Daniel Brown",
        "role": "Commercial Manager",
        "email": "daniel.brown@rbegroup.co.uk",
        "phone": "07557 448635"
      },
      {
        "name": "Daniel Brown",
        "role": "Contract Manager",
        "email": "info@rbegroup.co.uk",
        "phone": "07557 448635"
      },
      {
        "name": "Darren Frost",
        "role": "Contracts Manager",
        "email": "darren.frost@rbegroup.co.uk",
        "phone": "07775 731097"
      },
      {
        "name": "David Pope",
        "role": "Project Manager",
        "email": "david.pope@rbegroup.co.uk",
        "phone": "7973667493.0"
      },
      {
        "name": "Frankie MacVeigh",
        "role": "Sales Manager",
        "email": "frankie.macveigh@rbegroup.co.uk"
      },
      {
        "name": "Graeme Board",
        "role": "Design Manager",
        "email": "graeme.board@rbegroup.co.uk"
      },
      {
        "name": "Greg Cox",
        "role": "Buyer",
        "email": "greg.cox@rbegroup.co.uk"
      },
      {
        "name": "Jamie Arrowsmith",
        "role": "Director",
        "email": "jamie.arrowsmith@rbegroup.co.uk"
      },
      {
        "name": "Jarek Kloc",
        "role": "Project Manager",
        "email": "jarek.kloc@rbegroup.co.uk",
        "phone": "07386 679322"
      },
      {
        "name": "Kevin Arrowsmith",
        "role": "Director",
        "email": "kevin.arrowsmith@rbegroup.co.uk"
      },
      {
        "name": "Kieran Mills",
        "role": "Project Manager",
        "email": "kieran.mills@rbegroup.co.uk",
        "phone": "07917 064749"
      },
      {
        "name": "Neil Dumphy",
        "role": "Contracts Manager",
        "email": "neil.dumphy@rbegroup.co.uk",
        "phone": "07990 032680"
      },
      {
        "name": "Paul Critcher",
        "role": "Project Manager",
        "email": "paul.critcher@rbegroup.co.uk",
        "phone": "07973 667489"
      },
      {
        "name": "Richard Brown",
        "role": "Contracts Manager",
        "email": "richard.brown@rbegroup.com",
        "phone": "07970 150441"
      },
      {
        "name": "Stephen Mossop",
        "role": "Site Manager",
        "email": "stephen.mossop@rbegroup.co.uk",
        "phone": "07970 150477"
      },
      {
        "name": "Steve Gane",
        "role": "Project Manager",
        "email": "steve.gane@rbegroup.co.uk",
        "phone": "7973667489.0"
      },
      {
        "name": "Theresa Porte",
        "role": "Contracts Manager",
        "email": "theresa.porte@rbegroup.co.uk",
        "phone": "07970 347113"
      },
      {
        "name": "Tom Beckett",
        "role": "Buyer",
        "email": "tom.beckett@rbegroup.co.uk"
      },
      {
        "name": "Tom Lowe",
        "role": "Buyer",
        "email": "tom.lowe@rbegroup.co.uk"
      },
      {
        "name": "Vicky Harker",
        "role": "Project Manager",
        "email": "vicky.harker@rbegroup.co.uk",
        "phone": "07917 063495"
      },
      {
        "name": "Wayne Morris",
        "role": "Contracts Manager",
        "email": "wayne.morris@rbegroup.co.uk"
      }
    ]
  },
  {
    "id": 548,
    "name": "RM Contractors Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Caroline Moen",
        "role": "Director",
        "email": "caroline.moen@rmcontractors.co.uk"
      },
      {
        "name": "Chris Moen",
        "role": "Director",
        "email": "chris.moen@rmcontractors.co.uk"
      },
      {
        "name": "Fiona Hearn",
        "role": "Buyer",
        "email": "fiona.hearn@rmcontractors.co.uk"
      },
      {
        "name": "Jake Townsend",
        "role": "Quantity Surveyor",
        "email": "jake.townsend@rmcontractors.co.uk"
      },
      {
        "name": "James Wallace",
        "role": "Quantity Surveyor",
        "email": "james.wallace@rmcontractors.co.uk"
      },
      {
        "name": "Jason Green",
        "role": "Contracts Manager",
        "email": "jason.green@rmcontractors.co.uk"
      },
      {
        "name": "Lewis Coomey",
        "role": "Contract Manager",
        "email": "lewis.coomey@rmcontractors.co.uk"
      },
      {
        "name": "Nicki Keehan",
        "role": "Buyer",
        "email": "nicki.keehan@rmcontractors.co.uk"
      },
      {
        "name": "Serghei Vavulea",
        "role": "Contracts Manager",
        "email": "serghei.vavulea@rmcontractors.co.uk"
      }
    ]
  },
  {
    "id": 549,
    "name": "RMB Construction Anglia Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Ryan Breeze",
        "role": "Managing Director",
        "email": "ryan@rmb.construction",
        "phone": "07545 473340"
      }
    ]
  },
  {
    "id": 550,
    "name": "RMC Building & Civil Engineering Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alfred Ferizoli",
        "role": "Contracts Manager",
        "email": "alfred@rmccivileng.co.uk",
        "phone": "7487855644.0"
      },
      {
        "name": "Damien McLoughlin",
        "role": "Contracts Director",
        "email": "damien@rmccivileng.co.uk"
      },
      {
        "name": "Dan Currams",
        "role": "Contracts Manager",
        "email": "dan.currams@rmccivileng.co.uk"
      },
      {
        "name": "Dan Igoe",
        "role": "Quantity Surveyor",
        "email": "d.igoe@rmccivileng.co.uk"
      },
      {
        "name": "Daya Gadiewasam",
        "role": "Project Manager",
        "email": "daya@rmccivileng.co.uk"
      },
      {
        "name": "Declan Carroll",
        "role": "Projects Director",
        "email": "d.carroll@rmccivileng.co.uk"
      },
      {
        "name": "Gary Robinson",
        "role": "Quantity Surveyor",
        "email": "gary@rmccivileng.co.uk"
      },
      {
        "name": "Hugh O'Neil",
        "role": "Procurement Manager",
        "email": "hugh.oneil@rmccivileng.co.uk"
      },
      {
        "name": "Jim Murphy",
        "role": "Contracts Manager",
        "email": "jim.murphy@rmccivileng.co.uk"
      },
      {
        "name": "John Keating",
        "role": "Contract Manager",
        "email": "john.keating@rmccivileng.co.uk"
      },
      {
        "name": "Kieran Dunleavy",
        "role": "Contract Manager",
        "email": "kieran.dunleavy@rmccivileng.co.uk",
        "phone": "07909 585394"
      },
      {
        "name": "Sorin Costea",
        "role": "Site Manager",
        "email": "sorin.costea@rmccivileng.co.uk"
      }
    ]
  },
  {
    "id": 551,
    "name": "Rochford Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Ashely Vaughn",
        "role": "Quantity Surveyor",
        "email": "avaughn@rochfordltd.co.uk"
      },
      {
        "name": "Barry Johnson",
        "role": "Contracts Manager",
        "email": "bjohnson@rochfordltd.co.uk"
      },
      {
        "name": "Brian Kelly",
        "role": "Pre-Construction Coordinator",
        "email": "brian.kelly@rochfordltd.co.uk"
      },
      {
        "name": "Fabian Conway",
        "role": "Quantity Surveyor",
        "email": "fabian.conway@rochfordltd.co.uk"
      },
      {
        "name": "James Brennan",
        "role": "Quantity Surveyor",
        "email": "jbrennan@rochfordltd.co.uk"
      },
      {
        "name": "Joe Watson",
        "role": "Quantity Surveyor",
        "email": "joe.watson@rochfordltd.co.uk"
      },
      {
        "name": "John Rochford",
        "role": "Managing Director",
        "email": "john.rochford@rochfordltd.co.uk"
      },
      {
        "name": "Kristoffer St John",
        "role": "Project Manager",
        "email": "kstjohn@rochfordltd.co.uk"
      },
      {
        "name": "Mohit Sharma",
        "role": "Quantity Surveyor",
        "email": "msharma@rochfordltd.co.uk"
      },
      {
        "name": "Noel Harrison",
        "role": "Buyer",
        "email": "nharrison@rochfordltd.co.uk"
      },
      {
        "name": "Seamus Walsh",
        "role": "Contract Manager",
        "email": "seamus.walsh@rochfordltd.co.uk"
      },
      {
        "name": "Brian Kelly",
        "role": "Pre-Construction Coordinator",
        "email": "bkelly@rochfordltd.co.uk"
      },
      {
        "name": "Fabian Conway",
        "role": "Quantity Surveyor",
        "email": "fconway@rochfordltd.co.uk"
      },
      {
        "name": "Joe Watson",
        "role": "Quantity Surveyor",
        "email": "jwatson@rochfordltd.co.uk"
      },
      {
        "name": "John Rochford",
        "role": "Managing Director",
        "email": "jrochford@rochfordltd.co.uk"
      },
      {
        "name": "Seamus Walsh",
        "role": "Contract Manager",
        "email": "swalsh@rochfordltd.co.uk"
      }
    ]
  },
  {
    "id": 552,
    "name": "Rocks Groundworks Limited",
    "disciplines": [
      "Groundworks"
    ],
    "contacts": [
      {
        "name": "Paul Rocks",
        "role": "Director",
        "email": "rocksgroundworksltd@hotmail.com"
      }
    ]
  },
  {
    "id": 553,
    "name": "Roger Bullivant",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Jim Hargrave",
        "role": "Division Director",
        "email": "jim.hargrave@roger-bullivant.co.uk"
      },
      {
        "name": "Ben Gough",
        "role": "Operations Manager",
        "email": "ben.gough@roger-bullivant.co.uk"
      },
      {
        "name": "Mihai Pop",
        "role": "Contracts Manager",
        "email": "mihai.pop@roger-bullivant.co.uk",
        "phone": "07929 048834"
      },
      {
        "name": "Paul Messenger",
        "role": "Quantity Surveyor",
        "email": "paul.messenger@roger-bullivant.co.uk"
      },
      {
        "name": "Henry Carney",
        "role": "Project Manager",
        "email": "henry.carney@roger-bullivant.co.uk"
      },
      {
        "name": "Dan McKeon",
        "role": "Development Manager",
        "email": "dan.mckeon@roger-bullivant.co.uk",
        "phone": "07976 785473"
      }
    ]
  },
  {
    "id": 554,
    "name": "Roger Bullivant Limited",
    "disciplines": [
      "Piling"
    ],
    "contacts": [
      {
        "name": "Ben Gough",
        "role": "Operations Manager",
        "email": "ben.gough@roger-bullivant.co.uk"
      },
      {
        "name": "Dan McKeon",
        "role": "Development Manager",
        "email": "dan.mckeon@roger-bullivant.co.uk",
        "phone": "7976785473.0"
      },
      {
        "name": "Henry Carney",
        "role": "Project Manager",
        "email": "henry.carney@roger-bullivant.co.uk"
      },
      {
        "name": "Jim Hargrave",
        "role": "Division Director",
        "email": "jim.hargrave@roger-bullivant.co.uk"
      },
      {
        "name": "Mihai Pop",
        "role": "Contracts Manager",
        "email": "mihai.pop@roger-bullivant.co.uk",
        "phone": "07929 048834"
      },
      {
        "name": "Paul Messenger",
        "role": "Quantity Surveyor",
        "email": "paul.messenger@roger-bullivant.co.uk"
      }
    ]
  },
  {
    "id": 555,
    "name": "ROL Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Brendan Kilbain",
        "role": "Site Manager",
        "email": "brendan.kilbain@rolconstruction.co.uk"
      },
      {
        "name": "Henry Vaughan",
        "role": "Contracts Manager",
        "email": "henry@rolconstruction.co.uk"
      },
      {
        "name": "Mort Reidy",
        "role": "Director",
        "email": "mort@rolconstruction.co.uk"
      },
      {
        "name": "Neil Flynn",
        "role": "Quantity Surveyor",
        "email": "neil@rolconstruction.co.uk"
      }
    ]
  },
  {
    "id": 556,
    "name": "Rose Builders",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alex Leader",
        "role": "Sales & Marketing Director",
        "email": "alex.leader@rosebuilders.co.uk"
      },
      {
        "name": "Bradley Barkway",
        "role": "Quantity Surveyor",
        "email": "bbarkway@rosebuilders.co.uk"
      },
      {
        "name": "Gavin Pullen",
        "role": "Senior Site Manager",
        "email": "gavin.pullen@rosebuilders.co.uk"
      },
      {
        "name": "Jack Mabbutt",
        "role": "Quantity Surveyor",
        "email": "jmabbutt@rosebuilders.co.uk"
      },
      {
        "name": "Jason Franklin",
        "role": "Associate Director",
        "email": "jfranklin@rosebuilders.co.uk"
      },
      {
        "name": "Jenny Stokes",
        "role": "Quantity Surveyor",
        "email": "jstokes@rosebuilders.co.uk"
      },
      {
        "name": "John McVelia",
        "role": "Commercial Manager",
        "email": "john.mcvelia@rosebuilders.co.uk"
      },
      {
        "name": "John Peat",
        "role": "Buyer",
        "email": "jpeat@rosebuilders.co.uk"
      },
      {
        "name": "Justyn French",
        "role": "Quantity Surveyor",
        "email": "jfrench@rosebuilders.co.uk"
      },
      {
        "name": "Neil Wilcockson",
        "role": "Construction Director",
        "email": "neil.wilcockson@rosebuilders.co.uk"
      },
      {
        "name": "Paul Shanks",
        "role": "Quantity Surveyor",
        "email": "pshanks@rosebuilders.co.uk",
        "phone": "07825 529528"
      },
      {
        "name": "Paul Willey",
        "role": "Development Manager",
        "email": "pwilley@rosebuilders.co.uk"
      },
      {
        "name": "Sam Brown",
        "role": "Development Director",
        "email": "sbrown@rosebuilders.co.uk"
      },
      {
        "name": "Shaun Carter",
        "role": "Quantity Surveyor",
        "email": "shaun.carter@rosebuilders.co.uk"
      },
      {
        "name": "Simon Godbold",
        "role": "Quantity Surveyor",
        "email": "sgodbold@rosebuilders.co.uk"
      },
      {
        "name": "Steve Rose",
        "role": "Proprietor",
        "email": "srose@rosebuilders.co.uk"
      },
      {
        "name": "Tim Wright",
        "role": "Quantity Surveyor",
        "email": "tim.wright@rosebuilders.co.uk"
      },
      {
        "name": "Tony Auger",
        "role": "Director",
        "email": "tauger@rosebuilders.co.uk"
      },
      {
        "name": "Will Vote",
        "role": "Planning and Development Manager",
        "email": "wvote@rosebuilders.co.uk"
      },
      {
        "name": "Alex Leader",
        "role": "Sales & Marketing Director",
        "email": "aleader@rosebuilders.co.uk"
      },
      {
        "name": "Gavin Pullen",
        "role": "Senior Site Manager",
        "email": "gpullen@rosebuilders.co.uk"
      },
      {
        "name": "John McVelia",
        "role": "Commercial Manager",
        "email": "jmcvelia@rosebuilders.co.uk"
      },
      {
        "name": "Neil Wilcockson",
        "role": "Construction Director",
        "email": "nwilcockson@rosebuilders.co.uk"
      },
      {
        "name": "Shaun Carter",
        "role": "Quantity Surveyor",
        "email": "scarter@rosebuilders.co.uk"
      },
      {
        "name": "Tim Wright",
        "role": "Quantity Surveyor",
        "email": "twright@rosebuilders.co.uk"
      }
    ]
  },
  {
    "id": 557,
    "name": "Rosguill Developments Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Frank McBride",
        "role": "Managing Director",
        "email": "frank.mcbride@rosguilldev.com"
      },
      {
        "name": "Mark Bouchat",
        "role": "Commercial Director",
        "email": "mark.bouchat@rosguilldev.com"
      }
    ]
  },
  {
    "id": 558,
    "name": "Roskerry Building Services Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Dan Leahy",
        "role": "Managing Director",
        "email": "dan.leahy@roskerry.co.uk",
        "phone": "07887 998 746"
      },
      {
        "name": "Eamoin Meaney",
        "role": "Contract Manager",
        "email": "eamoin.meaney@roskerry.co.uk"
      },
      {
        "name": "Ogent Asllanaj",
        "role": "Construction Manager",
        "email": "ogent.asllanaj@roskerry.co.uk"
      }
    ]
  },
  {
    "id": 559,
    "name": "Ruane Construction",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "John Ruane",
        "role": "Managing Director",
        "email": "john@ruaneconstruction.co.uk",
        "phone": "07711 851557"
      },
      {
        "name": "Maria Sidders",
        "role": "Quantity Surveyor",
        "email": "maria@ruaneconstruction.co.uk"
      },
      {
        "name": "Steve Wood",
        "role": "Project Manager / Buyer",
        "email": "steve@ruaneconstruction.co.uk"
      }
    ]
  },
  {
    "id": 560,
    "name": "RW Hill Piling Limited",
    "disciplines": [
      "Piling"
    ],
    "contacts": [
      {
        "name": "Howard Sidebottom",
        "role": "Director",
        "email": "howard@hillpiling.com"
      }
    ]
  },
  {
    "id": 561,
    "name": "SDC Construction Group",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adam Cripps",
        "role": "Contract Manager",
        "email": "adam.cripps@sdc.co.uk",
        "phone": "7788385869.0"
      },
      {
        "name": "Alan Connors",
        "role": "Site Manager",
        "email": "alan.connors@sdc.co.uk"
      },
      {
        "name": "Alicia Low",
        "role": "Quantity Surveyor",
        "email": "alicia.low@sdc.co.uk",
        "phone": "07825 389157"
      },
      {
        "name": "Andy Clark",
        "role": "Site Manager",
        "email": "andy.clark@sdc.co.uk",
        "phone": "07917 687 138"
      },
      {
        "name": "Ben Marwood",
        "role": "Contracts Manager",
        "email": "ben.marwood@sdc.co.uk",
        "phone": "07709 815957"
      },
      {
        "name": "Brian Duckworth",
        "role": "Contracts Manager",
        "email": "brian.duckworth@sdc.co.uk",
        "phone": "07920 295 462"
      },
      {
        "name": "Carl Garatt",
        "role": "Construction Manager",
        "email": "carl.garatt@sdc.co.uk"
      },
      {
        "name": "Costa Tauchira",
        "role": "Quantity Surveyor",
        "email": "costa.tauchira@sdc.co.uk",
        "phone": "07946 893442"
      },
      {
        "name": "Dan Changer",
        "role": "Project Manager",
        "email": "danchanger@sdc.co.uk",
        "phone": "07811 328 089"
      },
      {
        "name": "Daniel Janes",
        "role": "Assistant Quantity Surveyor",
        "email": "daniel.janes@sdc.co.uk",
        "phone": "07385 950 307"
      },
      {
        "name": "Daniel Novell",
        "role": "Site Manager",
        "email": "daniel.novell@sdc.co.uk"
      },
      {
        "name": "David Fairley",
        "role": "Project Manager",
        "email": "david.fairley@sdc.co.uk",
        "phone": "7584515381.0"
      },
      {
        "name": "David Heard",
        "email": "david.heard@sdc.co.uk"
      },
      {
        "name": "David Page",
        "role": "Contracts Director",
        "email": "david.page@sdc.co.uk"
      },
      {
        "name": "Elliot Smith",
        "role": "Construction Manager",
        "email": "elliot.smith@sdc.co.uk"
      },
      {
        "name": "Farid Zadeh",
        "role": "Construction Manager",
        "email": "farid.zadeh@sdc.co.uk",
        "phone": "07580 089659"
      },
      {
        "name": "Gareth Jones",
        "role": "Quantity Surveyor",
        "email": "gareth.jones@sdc.co.uk",
        "phone": "07949 124747"
      },
      {
        "name": "Gary Sullivan",
        "role": "Site Manager",
        "email": "gary.sullivan@sdc.co.uk",
        "phone": "07825 747064"
      },
      {
        "name": "Graham Staughton",
        "role": "Contracts Manager",
        "email": "graham.staughton@sdc.co.uk",
        "phone": "07798 668085"
      },
      {
        "name": "Harry Kettlewell",
        "role": "Quantity Surveyor",
        "email": "harry.kettlewell@sdc.co.uk",
        "phone": "7717300501.0"
      },
      {
        "name": "Jack Kirby",
        "role": "Site Manager",
        "email": "jack.kirby@sdc.co.uk",
        "phone": "07946 306 330"
      },
      {
        "name": "Jacob Gill",
        "role": "Assistant Site Manager",
        "email": "jacob.gill@sdc.co.uk"
      },
      {
        "name": "James Revels-Hull",
        "role": "Quantity Surveyor",
        "email": "james.revels-hull@sdc.co.uk",
        "phone": "07920 711946"
      },
      {
        "name": "Jamie White",
        "role": "Site Manager",
        "email": "jamie.white@sdc.co.uk",
        "phone": "7949124751.0"
      },
      {
        "name": "Joe Cook",
        "role": "Quantity Surveyor",
        "email": "joe.cook@sdc.co.uk",
        "phone": "07985 158005"
      },
      {
        "name": "Joe Jackson",
        "role": "Quantity Surveyor",
        "email": "joe.jackson@sdc.co.uk",
        "phone": "07825 982391"
      },
      {
        "name": "Joe Rowntree",
        "role": "Quantity Surveyor",
        "email": "joe.rowntree@sdc.co.uk",
        "phone": "07385 949877"
      },
      {
        "name": "Johnny Morgan",
        "role": "Site Manager",
        "email": "johnny.morgan@sdc.co.uk"
      },
      {
        "name": "Jonathan Smith",
        "role": "Quantity Surveyor",
        "email": "jonathan.smith@sdc.co.uk"
      },
      {
        "name": "Josh Goodwin",
        "role": "Design Manager",
        "email": "josh.goodwin@sdc.co.uk"
      },
      {
        "name": "Josh Newman",
        "role": "Quantity Surveyor",
        "email": "josh.newman@sdc.co.uk",
        "phone": "07825 386726"
      },
      {
        "name": "Lee Brain",
        "role": "Health and Safety Manager",
        "email": "lee.brain@sdc.co.uk",
        "phone": "07769 287095"
      },
      {
        "name": "Lewis McPherson",
        "role": "Engineer",
        "email": "lewis.mcpherson@sdc.co.uk",
        "phone": "7584214628.0"
      },
      {
        "name": "Luke Norris",
        "role": "Quantity Surveyor",
        "email": "luke.norris@sdc.co.uk",
        "phone": "07920 847 258"
      },
      {
        "name": "Mark O'Leary",
        "role": "Quantity Surveyor",
        "email": "mark.oleary@sdc.co.uk",
        "phone": "07920 254 089"
      },
      {
        "name": "Matt Varey",
        "role": "Construction Manager",
        "email": "matt.varey@sdc.co.uk",
        "phone": "07585 961 534"
      },
      {
        "name": "Matt Wells",
        "email": "matt.wells@sdc.co.uk",
        "phone": "07946 306320"
      },
      {
        "name": "Mick Bundy",
        "role": "Site Manager",
        "email": "mick.bundy@sdc.co.uk",
        "phone": "7946306326.0"
      },
      {
        "name": "Mike Yelland",
        "role": "Quantity Surveyor",
        "email": "mike.yelland@sdc.co.uk"
      },
      {
        "name": "Neil Sillitoe",
        "role": "Construction Manager",
        "email": "neil.sillitoe@sdc.co.uk"
      },
      {
        "name": "Neil Sullivan",
        "role": "Contracts Manager",
        "email": "neil.sullivan@sdc.co.uk",
        "phone": "07824 906318"
      },
      {
        "name": "Nick Shiner",
        "email": "nick.shiner@sdc.co.uk"
      },
      {
        "name": "Nigel Scripps",
        "role": "Quantity Surveyor",
        "email": "nigel.scripps@sdc.co.uk",
        "phone": "07771 375177"
      },
      {
        "name": "Parvan Tarcha",
        "role": "Site Manager",
        "email": "parvan.tarcha@sdc.co.uk",
        "phone": "07880 087 376"
      },
      {
        "name": "Paul Tither",
        "role": "Design Manager",
        "email": "paul.tither@sdc.co.uk",
        "phone": "07946 306315"
      },
      {
        "name": "Pavan Garcha",
        "role": "Quantity Surveyor",
        "email": "pavan.garcha@sdc.co.uk",
        "phone": "07880 087 376"
      },
      {
        "name": "Peter Armstrong",
        "role": "Site Manager",
        "email": "peter.armstrong@sdc.co.uk",
        "phone": "07717 300480"
      },
      {
        "name": "Phil Doherty",
        "role": "Contracts Manager",
        "email": "phil.doherty@sdc.co.uk",
        "phone": "07984 609094"
      },
      {
        "name": "Phil Janes",
        "role": "Quantity Surveyor",
        "email": "phil.janes@sdc.co.uk",
        "phone": "7946893407.0"
      },
      {
        "name": "Raymond Renkel",
        "role": "Construction Manager",
        "email": "raymond.renkel@sdc.co.uk",
        "phone": "07823 537 758"
      },
      {
        "name": "Raymond Wrinkle",
        "role": "Contracts Manager",
        "email": "raymond.wrinkle@sdc.co.uk",
        "phone": "07823 537 758"
      },
      {
        "name": "Richard Paragreen",
        "role": "Site Manager",
        "email": "richard.paragreen@sdc.co.uk",
        "phone": "7823553326.0"
      },
      {
        "name": "Richard Smith",
        "role": "Quantity Surveyor",
        "email": "richard.smith@sdc.co.uk",
        "phone": "07799 658070"
      },
      {
        "name": "Ryan Bennett",
        "role": "Contracts Manager",
        "email": "ryan.bennett@sdc.co.uk",
        "phone": "07903 773 683"
      },
      {
        "name": "Sally Myers",
        "role": "Quantity Surveyor",
        "email": "sally.myers@sdc.co.uk",
        "phone": "07946 306321"
      },
      {
        "name": "Sam Eadie",
        "role": "Contract Manager",
        "email": "sam.eadie@sdc.co.uk",
        "phone": "07798 668007"
      },
      {
        "name": "Sam O'Neill",
        "role": "Project Manager",
        "email": "sam.oneill@sdc.co.uk",
        "phone": "7497767810.0"
      },
      {
        "name": "Scott Lineham",
        "role": "Quantity Surveyor",
        "email": "scott.lineham@sdc.co.uk",
        "phone": "07900 665 469"
      },
      {
        "name": "Simon Morrall",
        "role": "Estimating Manager",
        "email": "simon.morrall@sdc.co.uk",
        "phone": "07824 413354"
      },
      {
        "name": "Simon Pottage",
        "role": "Senior Buyer",
        "email": "simon.pottage@sdc.co.uk",
        "phone": "07920 847262"
      },
      {
        "name": "Steve Johnson",
        "role": "Site Manager",
        "email": "steve.johnson@sdc.co.uk"
      },
      {
        "name": "Steve Marshall",
        "role": "Project Manager",
        "email": "steve.marshall@sdc.co.uk",
        "phone": "07946 306319"
      },
      {
        "name": "Stuart Honan",
        "role": "Services Project Manager",
        "email": "stuart.honan@sdc.co.uk"
      },
      {
        "name": "Tim Rowe",
        "role": "Quantity Surveyor",
        "email": "tim.rowe@sdc.co.uk"
      },
      {
        "name": "Tom Harbottle",
        "role": "Contracts Manager",
        "email": "tom.harbottle@sdc.co.uk",
        "phone": "07920 254134"
      },
      {
        "name": "Tom Kindred",
        "role": "Site Manager",
        "email": "tom.kindred@sdc.co.uk"
      },
      {
        "name": "Tony Haughian",
        "role": "Site Agent",
        "email": "tony.haughian@sdc.co.uk"
      },
      {
        "name": "Yasin Demir",
        "role": "Site Manager",
        "email": "yasin.demir@sdc.co.uk",
        "phone": "07920 847256"
      },
      {
        "name": "Yen Bennett",
        "role": "Quantity Surveyor",
        "email": "yen.bennett@sdc.co.uk"
      }
    ]
  },
  {
    "id": 562,
    "name": "Selo Construction",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Steve Fry",
        "role": "Product Manager",
        "email": "enquiries@seloconstruction.co.uk",
        "phone": "07384 527971"
      }
    ]
  },
  {
    "id": 563,
    "name": "Shaca Construction Limited/Heydon & Carr Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Anthony Francis",
        "role": "Construction Director",
        "email": "anthony.francis@shaca.co.uk"
      },
      {
        "name": "John Rutherford",
        "role": "Contracts Manager",
        "email": "john.rutherford@shaca.co.uk"
      },
      {
        "name": "Josh Basi",
        "role": "Senior Quantity Surveyor",
        "email": "josh.basi@shaca.co.uk",
        "phone": "07719 554026"
      },
      {
        "name": "Sean Finley",
        "email": "sean.finley@shaca.co.uk"
      },
      {
        "name": "Spencer Heydon",
        "role": "Director",
        "email": "sheydon@shaca.co.uk"
      }
    ]
  },
  {
    "id": 564,
    "name": "Shaw Wood Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Chris Pearce",
        "role": "Director",
        "email": "chris.pearce@shawwoodltd.com"
      },
      {
        "name": "Clive Barker",
        "role": "Project Manager",
        "email": "clive.barker@shawwoodltd.com"
      },
      {
        "name": "Dean Merchant",
        "role": "Contract Manager",
        "email": "dean.merchant@shawwoodltd.com"
      }
    ]
  },
  {
    "id": 565,
    "name": "Shay Murtagh",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Donal McGovern",
        "role": "Operations Manager",
        "email": "sales@shaymurtagh.co.uk",
        "phone": "08442 020263"
      }
    ]
  },
  {
    "id": 566,
    "name": "Sir Robert McAlpine Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Bryn Rodgers",
        "role": "Logistics Manager",
        "email": "b.rodgers@sir-robert-mcalpine.com",
        "phone": "7894784151.0"
      },
      {
        "name": "Emma Shakespeare",
        "role": "Design Manager",
        "email": "e.shakespeare@sir-robert-mcalpine.com"
      },
      {
        "name": "George Amy",
        "role": "Project Director",
        "email": "george.amy@srm.com"
      },
      {
        "name": "Grant Findlay",
        "role": "Regional Manager",
        "email": "g.findlay@srm.com"
      },
      {
        "name": "Harriet Gladwell-Phillips",
        "role": "Project Manager",
        "email": "h.gladwell-phillips@sir-robert-mcalpine.com"
      },
      {
        "name": "Kenny Ryan",
        "role": "Project Director",
        "email": "k.ryan@sir-robert-mcalpine.com"
      },
      {
        "name": "Mark Andrews",
        "role": "Regional Commercial Manager",
        "email": "m.andrews@sir-robert-mcalpine.com"
      },
      {
        "name": "Mark Nicholls",
        "role": "Facade Manager",
        "email": "m.nicholls@sir-robert-mcalpine.com"
      },
      {
        "name": "Mike Coleman",
        "role": "Operations Director",
        "email": "m.coleman@sir-robert-mcalpine.com"
      },
      {
        "name": "Paul Bird",
        "role": "Project Director",
        "email": "p.bird@srm.com"
      },
      {
        "name": "Paul Farnes",
        "role": "Project Director",
        "email": "p.farnes@srm.com"
      },
      {
        "name": "Sven Heuten",
        "role": "Project Manager",
        "email": "sven.heuten@srm.com"
      },
      {
        "name": "Tom Fawbert",
        "role": "Project Manager",
        "email": "tom.fawbert@srm.com"
      }
    ]
  },
  {
    "id": 567,
    "name": "Slane Construction",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Vincent Kearns",
        "role": "Director",
        "email": "vincent.kearns@slaneconstruction.co.uk"
      },
      {
        "name": "Michael Kearns",
        "role": "Director",
        "email": "michael.kearns@slaneconstruction.co.uk"
      },
      {
        "name": "Steve Moore",
        "role": "Contract Manager",
        "email": "steve.moore@slaneconstruction.co.uk",
        "phone": "07973 468440"
      }
    ]
  },
  {
    "id": 568,
    "name": "Soilfix Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Dan Mortimer-Simons",
        "role": "Project Manager",
        "email": "dan.mortimer-simons@soilfix.co.uk"
      },
      {
        "name": "George Evans",
        "role": "Director",
        "email": "george@soilfix.co.uk"
      },
      {
        "name": "Helen Bennett",
        "role": "Business Development Manager",
        "email": "helen.bennett@soilfix.co.uk"
      },
      {
        "name": "Lawrence Bell",
        "role": "Project Manager",
        "email": "lawrence.bell@soilfix.co.uk"
      },
      {
        "name": "Nicky King",
        "role": "Sales Manager",
        "email": "nicky.king@soilfix.co.uk",
        "phone": "7803953847.0"
      },
      {
        "name": "Paul Hazlehurst",
        "role": "Project Manager",
        "email": "paul.hazlehurst@soilfix.co.uk"
      },
      {
        "name": "Reshmi Prakash",
        "role": "Graduate Engineer",
        "email": "reshmi.prakash@soilfix.co.uk"
      },
      {
        "name": "Shane Trim",
        "role": "Contracts Manager",
        "email": "shane.trim@soilfix.co.uk"
      },
      {
        "name": "Steve Jackson",
        "role": "Director",
        "email": "steve.jackson@soilfix.co.uk"
      },
      {
        "name": "Will King",
        "role": "Engineer",
        "email": "will.king@soilfix.co.uk"
      }
    ]
  },
  {
    "id": 569,
    "name": "Spade Oak Construction Company Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andy Ward",
        "role": "Contracts Manager",
        "email": "andy.ward@spadeoak.co.uk",
        "phone": "07920 410689"
      },
      {
        "name": "David Richardson",
        "role": "Contracts Manager",
        "email": "dave.richardson@spadeoak.co.uk"
      },
      {
        "name": "Mathew Harrison",
        "role": "Contracts Manager",
        "email": "mathew.harrison@spadeoak.co.uk"
      }
    ]
  },
  {
    "id": 570,
    "name": "Spadeoak Construction Company Limited",
    "disciplines": [
      "Civil Engineering"
    ],
    "contacts": [
      {
        "name": "Andrew Spiers",
        "role": "Contracts Manager",
        "email": "andrew.spiers@spadeoak.co.uk"
      },
      {
        "name": "Chris Oakley",
        "role": "Project Manager",
        "email": "chris.oakley@spadeoak.co.uk"
      },
      {
        "name": "Darren Kent",
        "role": "Commercial Manager",
        "email": "darren.kent@spadeoak.co.uk"
      },
      {
        "name": "Paul Spiers",
        "role": "Managing Director",
        "email": "paul.spiers@spadeoak.co.uk"
      }
    ]
  },
  {
    "id": 571,
    "name": "Specialist Cutting Services Limited (SCS)",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Stuart Cook",
        "role": "Contracts Director",
        "email": "stuart@scs-ltd.com",
        "phone": "07818 081830"
      },
      {
        "name": "Tony Egby",
        "role": "Contracts Manager",
        "email": "tony@scs-ltd.com"
      }
    ]
  },
  {
    "id": 572,
    "name": "Specialist Ground Engineering Limited",
    "disciplines": [
      "Piling"
    ],
    "contacts": [
      {
        "name": "Brian Heron",
        "role": "Director",
        "email": "brian@sgeworks.co.uk",
        "phone": "07841 341240"
      }
    ]
  },
  {
    "id": 573,
    "name": "Spencer Civil Engineering",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Ben Williams",
        "role": "Managing Director",
        "email": "ben.williams@spencercivileng.co.uk",
        "phone": "07961 808105"
      },
      {
        "name": "Chris Breedon",
        "role": "Commercial Director",
        "email": "chris.breedon@spencercivileng.co.uk",
        "phone": "07711 090475"
      },
      {
        "name": "Simon Hill",
        "role": "Contracts Manager",
        "email": "simon.hill@spencercivileng.co.uk"
      },
      {
        "name": "Aiden Thompson",
        "role": "Project Manager",
        "email": "aiden.thompson@spencercivileng.co.uk"
      },
      {
        "name": "Craig Miles",
        "role": "Project Manager",
        "email": "craig.miles@spencercivileng.co.uk"
      }
    ]
  },
  {
    "id": 574,
    "name": "Spencer Group",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Charles Spencer",
        "role": "Executive Chairman",
        "email": "charles.spencer@thespencergroup.co.uk"
      },
      {
        "name": "Ben Williams",
        "role": "Managing Director",
        "email": "ben.williams@thespencergroup.co.uk"
      },
      {
        "name": "Jon Bailey",
        "role": "Operations Director",
        "email": "07949 421015"
      },
      {
        "name": "Rob Bratherton",
        "role": "Operations Director",
        "email": "rob.bratherton@thespencergroup.co.uk"
      },
      {
        "name": "Simon Bethell",
        "role": "Pre Construction Director",
        "email": "simon.bethell@thespencergroup.com"
      },
      {
        "name": "Tom Roberts",
        "role": "Operations Manager",
        "email": "tom.roberts@cspencerltd.co.uk"
      },
      {
        "name": "Matthew Hunter",
        "role": "Contracts Manager",
        "email": "matthew.hunter@thespencergroup.co.uk"
      },
      {
        "name": "Tom Inglis",
        "role": "Contracts Manager",
        "email": "tom.inglis@thespencergroup.co.uk"
      },
      {
        "name": "Rob Butterworth",
        "role": "Senior Commercial Manager",
        "email": "rob.butterworth@cspencerltd.co.uk"
      },
      {
        "name": "Dan Whittle",
        "role": "Quantity Surveyor",
        "email": "dan.whittle@cspencerltd.co.uk"
      },
      {
        "name": "Daniel Fitzpatrick",
        "role": "Quantity Surveyor",
        "email": "dan.fitzpatrick@spencerbridgeengineering.co.uk"
      },
      {
        "name": "Harrison Ryan",
        "role": "Quantity Surveyor",
        "email": "harrison.ryan@cspencerltd.co.uk"
      },
      {
        "name": "Richard Ramsdale",
        "role": "Project Manager",
        "email": "richard.ramsdale@cspencerltd.co.uk"
      },
      {
        "name": "Glen Smithson",
        "role": "Project Manager",
        "email": "glen.smithson@cspencerltd.co.uk"
      }
    ]
  },
  {
    "id": 575,
    "name": "SRC Aggregates",
    "disciplines": [
      "Civil Engineering"
    ],
    "contacts": [
      {
        "name": "Bjorn Parker",
        "role": "Head of Operations",
        "email": "bjorn.parker@srcgroup.co.uk"
      },
      {
        "name": "Craig Chaplin",
        "role": "Contracts Director",
        "email": "craig.chaplin@srcaggregates.co.uk"
      },
      {
        "name": "Oliver Rees",
        "role": "Managing Director",
        "email": "oliver.rees@srcaggregates.co.uk",
        "phone": "07896 250 199"
      },
      {
        "name": "Andrew Cole",
        "role": "Managing Director",
        "email": "andrew.cole@srcgroup.co.uk"
      },
      {
        "name": "Darren Smith",
        "role": "Operations Manager",
        "email": "darren.smith@srcgroup.co.uk"
      },
      {
        "name": "Gary Fuller",
        "role": "Contracts Manager",
        "email": "gary.fuller@srcgroup.co.uk"
      },
      {
        "name": "James Cole",
        "role": "Director",
        "email": "james.cole@srcgroup.co.uk"
      },
      {
        "name": "Mark Harris",
        "role": "Commercial Manager",
        "email": "mark.harris@srcgroup.co.uk"
      }
    ]
  },
  {
    "id": 576,
    "name": "SRC Group",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andy Page",
        "role": "Commercial Manager",
        "email": "andy.page@srcgroup.co.uk",
        "phone": "7584205870.0"
      },
      {
        "name": "Bjorn Parker",
        "role": "Head of Contracts",
        "email": "bjorn.parker@srcgroup.co.uk",
        "phone": "7503667289.0"
      },
      {
        "name": "Craig Chaplin",
        "role": "Contracts Director",
        "email": "craig.chaplin@srcgroup.co.uk",
        "phone": "7557746157.0"
      },
      {
        "name": "Matt Yeates",
        "role": "Environmental Manager",
        "email": "matt.yates@srcgroup.co.uk",
        "phone": "7515758817.0"
      },
      {
        "name": "Peter Watts",
        "role": "Health & Safety Manager",
        "email": "peter.watts@srcgroup.co.uk",
        "phone": "7376496116.0"
      },
      {
        "name": "Simon Folwell",
        "role": "Project Manager",
        "email": "simon.folwell@srcgroup.co.uk",
        "phone": "7385669562.0"
      },
      {
        "name": "Steve Bocking",
        "role": "Demolition Manager",
        "email": "steve.bocking@srcgroup.co.uk",
        "phone": "7949485823.0"
      }
    ]
  },
  {
    "id": 577,
    "name": "Statom Group",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Allan Quirke",
        "role": "Project Engineer",
        "email": "allan.quirke@statom.co.uk"
      },
      {
        "name": "Barry McGuire",
        "role": "Area Contract Manager",
        "email": "barry.mcguire@statom.co.uk"
      },
      {
        "name": "Bill Unwin",
        "role": "Project Manager",
        "email": "bill.unwin@statom.co.uk",
        "phone": "07833 460302"
      },
      {
        "name": "Billy Saunders",
        "role": "Commercial Manager",
        "email": "billy.saunders@statom.co.uk"
      },
      {
        "name": "Bogdan Budui",
        "role": "Project Manager",
        "email": "bogdan.budui@statom.co.uk"
      },
      {
        "name": "Brendan Parker",
        "role": "Contract Manager",
        "email": "brendan.parker@statom.co.uk"
      },
      {
        "name": "Craig Brown",
        "role": "Contract Manager",
        "email": "craig.brown@statom.co.uk"
      },
      {
        "name": "Emily Renfrew",
        "role": "Buyer",
        "email": "emily.renfrew@statom.co.uk"
      },
      {
        "name": "Felim Conroy",
        "role": "Quantity Surveyor",
        "email": "felim.conroy@statom.co.uk"
      },
      {
        "name": "Mario Phylactou",
        "role": "Head of Technical",
        "email": "mario.phylactou@statomkey.co.uk"
      },
      {
        "name": "Mark Albon",
        "role": "Director",
        "email": "mark.albon@statom.co.uk"
      },
      {
        "name": "Michael Dunbar",
        "role": "Commercial Manager",
        "email": "michael.dunbar@statom.co.uk"
      },
      {
        "name": "Nick Cutler",
        "role": "Engineering Director",
        "email": "nick.cutler@statom.co.uk",
        "phone": "07756 290601"
      },
      {
        "name": "Russ Matei",
        "role": "Plant Manager",
        "email": "russ.matei@statom.co.uk"
      },
      {
        "name": "Scott Slade",
        "role": "Project Manager",
        "email": "scott.slade@statom.co.uk"
      },
      {
        "name": "Tommy Brown",
        "role": "CEO",
        "email": "tommy.brown@statom.co.uk"
      }
    ]
  },
  {
    "id": 578,
    "name": "Statom Group Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Aidan Ledger",
        "role": "Quantity Surveyor",
        "email": "aidan.ledger@statom.co.uk"
      },
      {
        "name": "Andy Hunt",
        "role": "Construction Director",
        "email": "andy.hunt@statom.co.uk"
      },
      {
        "name": "Andy Webster",
        "role": "Site Manager",
        "email": "andy.webster@statom.co.uk"
      },
      {
        "name": "Bill Unwin",
        "role": "Contracts Manager",
        "email": "bill.unwin@statom.co.uk"
      },
      {
        "name": "Bradley Avery",
        "role": "Site Engineer",
        "email": "bradley.avery@statom.co.uk"
      },
      {
        "name": "Brett Boyer",
        "role": "Project Manager",
        "email": "brett.boyer@statom.co.uk"
      },
      {
        "name": "Daniel Ronaldson",
        "role": "Project Engineer",
        "email": "daniel.ronaldson@statom.co.uk"
      },
      {
        "name": "Deon Swanepoel",
        "role": "Project Manager",
        "email": "deon.swanepoel@statom.co.uk"
      },
      {
        "name": "James Touhy",
        "role": "Construction Director",
        "email": "james.touhy@statom.co.uk"
      },
      {
        "name": "Joseph McGill",
        "role": "Project Manager",
        "email": "joseph.mcgill@statom.co.uk"
      },
      {
        "name": "Kevin Graham",
        "role": "Managing Director",
        "email": "kevin.graham@statom.co.uk"
      },
      {
        "name": "Mark Brister",
        "role": "Contracts Manager",
        "email": "mark.brister@statom.co.uk"
      },
      {
        "name": "Matt Wey",
        "role": "Project Manager",
        "email": "matt.wey@statom.co.uk"
      },
      {
        "name": "Nick Brooks",
        "role": "Pre Construction Director",
        "email": "nick.brooks@statom.co.uk",
        "phone": "07718 116820"
      },
      {
        "name": "Paul Odwyer",
        "role": "Project Manager",
        "email": "paul.odwyer@statom.co.uk",
        "phone": "07842 535527"
      },
      {
        "name": "Rob Wakeling",
        "role": "Site Manager",
        "email": "rob.wakeling@statom.co.uk"
      },
      {
        "name": "Robert Deme",
        "role": "Project Manager",
        "email": "robert.deme@statom.co.uk"
      },
      {
        "name": "Scott Slade",
        "role": "Project Manager",
        "email": "scott.slade@demoforce.co.uk"
      },
      {
        "name": "Sean Deloughery",
        "role": "Remediation Director",
        "email": "sean.deloughery@statom.co.uk"
      },
      {
        "name": "Stan Nikudinski",
        "role": "Managing Director",
        "email": "stan.nikudinski@statom.co.uk"
      },
      {
        "name": "Stan Nikundinski",
        "role": "CEO",
        "email": "stan.nikundinski@statom.co.uk"
      },
      {
        "name": "Xavier Tate",
        "role": "Engineer",
        "email": "xavier.tate@statom.co.uk"
      }
    ]
  },
  {
    "id": 579,
    "name": "Stephenson Holdings Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Andy Newman",
        "role": "Project Manager",
        "email": "andy@stephenson-ssc.co.uk"
      },
      {
        "name": "Chelseigh Hacker",
        "role": "Commercial Manager",
        "email": "c.hacker@stephenson-ssc.co.uk",
        "phone": "07808 768601"
      },
      {
        "name": "Chris Maguire",
        "role": "Project Manager",
        "email": "chris@stephenson-ssc.co.uk",
        "phone": "07809 343622"
      },
      {
        "name": "Clint Hansen",
        "role": "Contracts Manager",
        "email": "clint.hansen@stephenson-group.co.uk",
        "phone": "7920853415.0"
      },
      {
        "name": "Con O'Sullivan",
        "email": "con.osullivan@stephenson-group.co.uk"
      },
      {
        "name": "Connor O'Sullivan",
        "role": "Regional Director",
        "email": "conn.osullivan@stephenson-ssc.co.uk",
        "phone": "07795 377938"
      },
      {
        "name": "David Edwards",
        "role": "Site Manager",
        "email": "david.edwards@stephenson-group.co.uk",
        "phone": "07889 210 615"
      },
      {
        "name": "David Lord",
        "role": "Contract Manager",
        "email": "david.lord@stephenson-ssc.co.uk",
        "phone": "07525 592979"
      },
      {
        "name": "Elvis Bakutis",
        "role": "Contracts Manager",
        "email": "elvis@stephenson-ssc.co.uk",
        "phone": "07590 439 649"
      },
      {
        "name": "Henry Stephenson",
        "role": "Director",
        "email": "henry@stephenson-ssc.co.uk",
        "phone": "07920 134509"
      },
      {
        "name": "Jason Griffths",
        "role": "Quantity Surveyor",
        "email": "jason.griffiths@stephenson-ssc.co.uk",
        "phone": "07809 343625"
      },
      {
        "name": "Kev Holdham",
        "email": "kev.holdham@stephenson-group.co.uk"
      },
      {
        "name": "Mike Hacker",
        "role": "Contracts Manager",
        "email": "mike.hacker@stephenson-ssc.co.uk",
        "phone": "07920 759 104"
      },
      {
        "name": "Ovi Semerean",
        "role": "Site Manager",
        "email": "ovi@stephenson-group.co.uk",
        "phone": "07703 671507"
      },
      {
        "name": "Sorin Duciuc",
        "role": "Quantity Surveyor",
        "email": "sorin@stephenson-ssc.co.uk",
        "phone": "07920 872476"
      },
      {
        "name": "Stephen Embrey",
        "role": "Director",
        "email": "stephen.embrey@stephenson-ssc.co.uk"
      },
      {
        "name": "Suba Sivagnanasuntharam",
        "role": "Site Manager",
        "email": "suba.sivagnanasuntharam@stephenson-group.co.uk",
        "phone": "7773609241.0"
      },
      {
        "name": "Toby Hemsley",
        "role": "Managing Director",
        "email": "toby@stephenson-ssc.co.uk",
        "phone": "07795 377931"
      },
      {
        "name": "Tom Almond",
        "role": "Operations Director",
        "email": "tom@stephenson-group.co.uk",
        "phone": "07720 826056"
      },
      {
        "name": "Vijay Kumaran",
        "role": "Quantity Surveyor",
        "email": "vijay@stephenson-group.co.uk",
        "phone": "7428512278.0"
      },
      {
        "name": "Wayne Cox",
        "role": "Quantity Surveyor",
        "email": "wayne.cox@stephenson-group.co.uk",
        "phone": "7843812679.0"
      }
    ]
  },
  {
    "id": 580,
    "name": "Stephenson RC Frames",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Brendan O'Keefe",
        "role": "Director",
        "email": "brendan.okeefe@stephenson-ssc.co.uk"
      },
      {
        "name": "Chelseigh Hacker",
        "role": "Quantity Surveyor",
        "email": "c.hacker@stephenson-group.co.uk",
        "phone": "07808 768601"
      },
      {
        "name": "Chris McGuire",
        "role": "Project Manager",
        "email": "chris.mcguire@stephenson-ssc.co.uk",
        "phone": "07809 343622"
      },
      {
        "name": "Conn O'Sullivan",
        "role": "Contracts Manager",
        "email": "conn@stephenson-group.co.uk",
        "phone": "7795377938.0"
      },
      {
        "name": "Damian McKay",
        "role": "Contracts Manager",
        "email": "damian.mckay@stephenson-ssc.co.uk",
        "phone": "7730271635.0"
      },
      {
        "name": "Danny Semerean",
        "role": "Site Manager",
        "email": "danny.semerean@stephenson-ssc.co.uk",
        "phone": "07876 390165"
      },
      {
        "name": "David Edwards",
        "role": "Project Manager",
        "email": "david.edwards@stephenson-group.co.uk",
        "phone": "7889210615.0"
      },
      {
        "name": "David Lord",
        "role": "Quantity Surveyor",
        "email": "david.lord@stephenson-ssc.co.uk",
        "phone": "07525 592979"
      },
      {
        "name": "David McCarthy",
        "role": "Project Manager",
        "email": "david.mccarthy@stephenson-ssc.co.uk",
        "phone": "07857 947533"
      },
      {
        "name": "Florian Femerean",
        "role": "Contracts Manager",
        "email": "florian.femerean@stephenson-ssc.co.uk"
      },
      {
        "name": "Henry Stephenson",
        "role": "Contract Manager",
        "email": "henry@stephenson-group.co.uk",
        "phone": "07920 134509"
      },
      {
        "name": "Ivan Folonicov",
        "role": "Project Manager",
        "email": "ivan@stephenson-ssc.co.uk",
        "phone": "07834 170651"
      },
      {
        "name": "Jason Griffiths",
        "role": "Director",
        "email": "jason.griffiths@stephenson-ssc.co.uk"
      },
      {
        "name": "Jeremy James",
        "role": "Quantity Surveyor",
        "email": "jeremy@stephenson-ssc.co.uk",
        "phone": "07776 227929"
      },
      {
        "name": "John Pitea",
        "role": "Contracts Manager",
        "email": "john.pitea@stephenson-ssc.co.uk"
      },
      {
        "name": "Melissa Owen",
        "role": "Buyer",
        "email": "melissa.owen@stephenson-group.co.uk"
      },
      {
        "name": "Mike Hacker",
        "role": "Contracts Manager",
        "email": "mike.hacker@stephenson-ssc.co.uk"
      },
      {
        "name": "Relu Duciuc",
        "role": "Contract Manager",
        "email": "relu@stephenson-ssc.co.uk",
        "phone": "07480 161777"
      },
      {
        "name": "Rob Hicks",
        "role": "Project Manager",
        "email": "robert@stephenson-ssc.co.uk",
        "phone": "07930 736507"
      },
      {
        "name": "Roy McCarthy",
        "role": "Project Manager",
        "email": "roy.mccarthy@stephenson-ssc.co.uk"
      },
      {
        "name": "Sandris Balcuns",
        "role": "Site Manager",
        "email": "sandris@stephenson-group.co.uk",
        "phone": "07534 928786"
      },
      {
        "name": "Sarah Bloor",
        "role": "Buyer",
        "email": "sarah.bloor@stephenson-ssc.co.uk"
      },
      {
        "name": "Sergiu Madan",
        "role": "Site Manager",
        "email": "sergiu@stephenson-ssc.co.uk"
      },
      {
        "name": "Sorin Duciuc",
        "role": "Contracts Manager",
        "email": "sorin.duciuc@stephenson-ssc.co.uk",
        "phone": "07920 872476"
      },
      {
        "name": "Suba Muruganathan",
        "role": "Project Manager",
        "email": "suba.muruganathan@stephenson-ssc.co.uk",
        "phone": "7773609241.0"
      },
      {
        "name": "Toby Hemsley",
        "role": "Managing Director",
        "email": "toby@stephenson-ssc.co.uk"
      },
      {
        "name": "Tom Almond",
        "role": "Contracts Manager",
        "email": "tom@stephenson-ssc.co.uk",
        "phone": "07720 826056"
      },
      {
        "name": "Vaz Avgerodimos",
        "role": "Project Manager",
        "email": "vaz@stephenson-ssc.co.uk",
        "phone": "07711 595025"
      },
      {
        "name": "Vijay Kumaran",
        "role": "Project Manager",
        "email": "vijay@stephenson-ssc.co.uk"
      },
      {
        "name": "Wayne Bowler",
        "role": "Contracts Manager",
        "email": "wayne@stephenson-ssc.co.uk"
      }
    ]
  },
  {
    "id": 581,
    "name": "Stofix UK Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alex Porter",
        "role": "Operations Director",
        "email": "alex@stofix.co.uk",
        "phone": "7557880179.0"
      },
      {
        "name": "Andy McKechnie",
        "role": "Technical Director",
        "email": "andy@stofix.co.uk"
      },
      {
        "name": "Craig Nottage",
        "role": "Technical Manager",
        "email": "craig@stofix.co.uk"
      },
      {
        "name": "Jack Ryan",
        "role": "Site Manager",
        "email": "info@stofix.co.uk"
      },
      {
        "name": "Kirsten Clarke",
        "role": "Design Manager",
        "email": "kirsten@stofix.co.uk"
      },
      {
        "name": "Mike Trott",
        "role": "Technical Director",
        "email": "mike@stofix.co.uk",
        "phone": "7741592507.0"
      },
      {
        "name": "Paul Simcock",
        "role": "Key Accounts Manager",
        "email": "pauls@stofix.co.uk",
        "phone": "07557 885845"
      },
      {
        "name": "Richard Bell",
        "role": "Head of Technical",
        "email": "richard@stofix.co.uk"
      },
      {
        "name": "Vicky Ball",
        "role": "Administrator",
        "email": "victoria@stofix.co.uk"
      }
    ]
  },
  {
    "id": 582,
    "name": "Stour Valley Construction & Groundworks Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Mike Volf",
        "role": "Managing Director",
        "email": "mike.volf@svcg.co.uk"
      }
    ]
  },
  {
    "id": 583,
    "name": "Summit Group",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Pat Murphy",
        "role": "Director",
        "email": "pat.murphy@summitgrp.co.uk",
        "phone": "07716 684915"
      },
      {
        "name": "Noel Reeves",
        "role": "Contracts Manager",
        "email": "noel.reeves@summitgrp.co.uk"
      },
      {
        "name": "Neil Sheehan",
        "role": "Buyer",
        "email": "neil.sheehan@summitgrp.co.uk"
      }
    ]
  },
  {
    "id": 584,
    "name": "Summit Group Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Neil Sheehan",
        "role": "Buyer",
        "email": "neil.sheehan@summitgrp.co.uk"
      },
      {
        "name": "Pat Murphy",
        "role": "Director",
        "email": "pat.murphy@summitgrp.co.uk",
        "phone": "7716684915.0"
      },
      {
        "name": "Stephen Watts",
        "role": "Health and Safety Manager",
        "email": "stephen.watts@summitgrp.co.uk"
      }
    ]
  },
  {
    "id": 585,
    "name": "SUMMIT STRUCTURES",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Patrick Murphy",
        "role": "Director",
        "email": "pat@summitstructures.co.uk",
        "phone": "07716 684915"
      }
    ]
  },
  {
    "id": 586,
    "name": "SWARCO UK & Ireland",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "John Pickworth",
        "role": "john.pickworth@swarco.com"
      },
      {
        "name": "James Eaves",
        "role": "Bid Manager / Pre-Construction",
        "email": "bidding.uk@swarco.com"
      }
    ]
  },
  {
    "id": 587,
    "name": "Sykes & Son",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Nick McLaughlin",
        "role": "Project Manager",
        "email": "nmclaughlin@sykes1759.co.uk"
      },
      {
        "name": "Taranjit Panesar",
        "role": "Quantity Surveyor",
        "email": "tpanesar@sykes1759.co.uk"
      },
      {
        "name": "Cameron Harley",
        "role": "Quantity Surveyor",
        "email": "cameron.harley@sykes1759.co.uk"
      },
      {
        "name": "Jan Powell",
        "role": "Quantity Surveyor",
        "email": "jan.powell@sykes1759.co.uk",
        "phone": "07485 357090"
      },
      {
        "name": "Andy Bull",
        "role": "Site Manager",
        "email": "abull@sykes1759.co.uk"
      }
    ]
  },
  {
    "id": 588,
    "name": "Symbiotic Solutions Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Nick Tocher",
        "role": "Contract Manager",
        "email": "nick@symbioticsolutions.co.uk",
        "phone": "07852 915476"
      }
    ]
  },
  {
    "id": 589,
    "name": "T J Brayne",
    "disciplines": [
      "Groundworks"
    ],
    "contacts": [
      {
        "name": "Daniel Kinsella",
        "role": "Quantity Surveyor",
        "email": "danielkinsella@tjbrayne.co.uk"
      },
      {
        "name": "David Snape",
        "role": "Commercial Director",
        "email": "davidsnape@tjbrayne.co.uk"
      },
      {
        "name": "Sarah Alexander",
        "role": "Buyer",
        "email": "sarahalexander@tjbrayne.co.uk"
      },
      {
        "name": "Thomas Brayne",
        "role": "Director",
        "email": "thomasbrayne@tjbrayne.co.uk"
      }
    ]
  },
  {
    "id": 590,
    "name": "TDR Groundworks Limited",
    "disciplines": [
      "Groundworks"
    ],
    "contacts": [
      {
        "name": "Daniel Todd",
        "role": "Senior Quantity Surveyor",
        "email": "daniel.todd@tdrgroundworks.co.uk"
      },
      {
        "name": "Dean Saunders",
        "role": "Commercial Director",
        "email": "dean.saunders@tdrgroundworks.co.uk",
        "phone": "07903 408526"
      },
      {
        "name": "Ken Carter",
        "role": "Company Director",
        "email": "ken.carter@tdrgroundworks.co.uk"
      },
      {
        "name": "Martin Banks",
        "role": "Managing Director",
        "email": "martin.banks@tdrgroundworks.co.uk"
      },
      {
        "name": "Sean Moon",
        "email": "sean.moon@tdrgroundworks.co.uk"
      }
    ]
  },
  {
    "id": 591,
    "name": "Telent",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Paul Owen",
        "role": "Director",
        "email": "paul.owen@telent.com"
      },
      {
        "name": "Matt Wordley",
        "role": "Contracts Manager",
        "email": "matt.wordley@telent.com",
        "phone": "07545 900157"
      },
      {
        "name": "Patrick Flanaghan",
        "role": "Head of Estates",
        "email": "patrick.flanaghan@telent.com"
      }
    ]
  },
  {
    "id": 592,
    "name": "Telford Living",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adam De'ath",
        "role": "Quantity Surveyor",
        "email": "adam.death@telfordhomes.london"
      },
      {
        "name": "Adam Jarvis",
        "role": "Quantity Surveyor",
        "email": "adam.jarvis@telfordhomes.london"
      },
      {
        "name": "Alex Rossi",
        "role": "Quantity Surveyor",
        "email": "alex.rossi@telfordhomes.london"
      },
      {
        "name": "Alex Taylor",
        "role": "Senior Vice President of Development",
        "email": "alex.taylor@telfordhomes.london"
      },
      {
        "name": "Anthony Knight",
        "role": "Quantity Surveyor",
        "email": "anthony.knight@telfordhomes.london"
      },
      {
        "name": "Astrit Hoxha",
        "role": "Project Manager",
        "email": "astrit.hoxha@telfordhomes.london"
      },
      {
        "name": "Chris Jones",
        "role": "Surveyor",
        "email": "chris.jones@telfordhomes.london"
      },
      {
        "name": "Daniel Evans",
        "role": "Assistant Site Manager",
        "email": "daniel.evans@telfordhomes.london"
      },
      {
        "name": "Daniel Holt",
        "role": "Senior Quantity Surveyor",
        "email": "daniel.holt@telfordhomes.london"
      },
      {
        "name": "David Diggons",
        "role": "Contracts Manager",
        "email": "david.diggons@telfordhomes.london"
      },
      {
        "name": "Edward Fenn",
        "role": "Quantity Surveyor",
        "email": "edward.fenn@telfordhomes.london"
      },
      {
        "name": "Hamit Yildirim",
        "role": "Quantity Surveyor",
        "email": "hamit.yildirim@telfordhomes.london"
      },
      {
        "name": "Jack Durban",
        "role": "Site Manager",
        "email": "jack.durban@telfordhomes.london"
      },
      {
        "name": "Jerome Geoghegan",
        "role": "Land and Planning Director",
        "email": "jerome.geoghegan@telfordhomes.london"
      },
      {
        "name": "Katie Hale",
        "role": "Senior Planning Manager",
        "email": "katie.hale@telfordhomes.london"
      },
      {
        "name": "Lee Dyball",
        "role": "Development Manager",
        "email": "lee.dyball@telfordliving.com"
      },
      {
        "name": "Lee Jenkins",
        "email": "lee.jenkins@telfordhomes.london"
      },
      {
        "name": "Liam Speakman",
        "role": "Assistant Site Manager",
        "email": "liam.speakman@telfordhomes.london"
      },
      {
        "name": "Louis Maycock",
        "email": "louis.maycock@telfordhomes.london"
      },
      {
        "name": "Luke Hazell",
        "email": "luke.hazell@telfordhomes.london"
      },
      {
        "name": "Mark Baxter",
        "role": "Senior Construction Manager",
        "email": "mark.baxter@telfordhomes.london",
        "phone": "7815592086.0"
      },
      {
        "name": "Martin Durant",
        "role": "Senior Commercial Manager",
        "email": "martin.durant@telfordhomes.london"
      },
      {
        "name": "Matt Smith",
        "role": "Planner",
        "email": "matthew.smith@telfordhomes.london"
      },
      {
        "name": "Michael Brown",
        "role": "Quantity Surveyor",
        "email": "michael.brown@telfordhomes.london"
      },
      {
        "name": "Paul Garner",
        "role": "Commercial Director",
        "email": "paul.garner@telfordhomes.london"
      },
      {
        "name": "Rashid Oblia",
        "role": "Site Manager",
        "email": "rashid.oblia@telfordhomes.london"
      },
      {
        "name": "Roy Hajek",
        "email": "roy.hajek@telfordhomes.london"
      },
      {
        "name": "Ryan Kenyon",
        "role": "Surveyor",
        "email": "ryan.kenyon@telfordhomes.london"
      },
      {
        "name": "Steve Marsham",
        "role": "Technical Co-ordinator",
        "email": "steve.marsham@telfordhomes.london"
      },
      {
        "name": "Steven Clayden",
        "role": "Senior Site Manager",
        "email": "stephen.clayden@telfordhomes.london",
        "phone": "7966143051.0"
      },
      {
        "name": "Tom Stone",
        "role": "Commercial Director",
        "email": "tom.stone@telfordhomes.london"
      }
    ]
  },
  {
    "id": 593,
    "name": "Terrafirma Contractors Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adam Appleton",
        "role": "Director",
        "email": "adam@terrafirmacontractors.com"
      }
    ]
  },
  {
    "id": 594,
    "name": "Terrasite Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Mark Lockwood",
        "role": "Contracts Manager",
        "email": "mark.lockwood@terrasite.co.uk"
      },
      {
        "name": "Matt Fowler",
        "role": "Quantity Surveyor",
        "email": "m.fowler@terrasite.co.uk"
      },
      {
        "name": "Paul Dorling",
        "role": "Contracts Manager",
        "email": "p.dorling@terrasite.co.uk"
      },
      {
        "name": "Tim Canham",
        "role": "Contract Manager",
        "email": "t.canham@terrasite.co.uk"
      }
    ]
  },
  {
    "id": 595,
    "name": "ThamesBridge Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "John Newman",
        "role": "Manager",
        "email": "john@thamesbridge.net"
      },
      {
        "name": "Mike Curran",
        "role": "Director",
        "email": "mike@thamesbridge.net",
        "phone": "07715 666 867"
      },
      {
        "name": "Rafik Asyran",
        "role": "Quantity Surveyor",
        "email": "rafik.asyran@thamesbridge.net"
      }
    ]
  },
  {
    "id": 596,
    "name": "Tide Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Aidan Ryan",
        "role": "Senior Quantity Surveyor",
        "email": "aryan@tideconstruction.co.uk"
      },
      {
        "name": "Alexandru Cata",
        "role": "Site Manager",
        "email": "acata@tideconstruction.co.uk",
        "phone": "7455271232.0"
      },
      {
        "name": "Christy Hayes",
        "role": "Chief Executive",
        "email": "chayes@tideconstruction.co.uk"
      },
      {
        "name": "Conor Quirke",
        "role": "Health and Safety Manager",
        "email": "cquirke@tideconstruction.co.uk",
        "phone": "7960323249.0"
      },
      {
        "name": "David Fahey",
        "role": "Quantity Surveyor",
        "email": "dfahey@tideconstruction.co.uk"
      },
      {
        "name": "Flor Wycherley",
        "role": "Site Manager",
        "email": "flor.wycherley@tideconstruction.co.uk"
      },
      {
        "name": "Helen McManus",
        "role": "Planning Manager",
        "email": "hmcmanus@tideconstruction.co.uk"
      },
      {
        "name": "Ian O'Leary",
        "role": "Construction Director",
        "email": "io'leary@tideconstruction.co.uk"
      },
      {
        "name": "Kieran Wall",
        "role": "Contracts Manager",
        "email": "kieran.wall@tideconstruction.co.uk"
      },
      {
        "name": "Matthew Mainwaring",
        "role": "Planner",
        "email": "matthew.mainwaring@tideconstruction.co.uk"
      },
      {
        "name": "Mike Jenner",
        "role": "Senior Project Manager",
        "email": "mike.jenner@tideconstruction.co.uk"
      },
      {
        "name": "Nabeel Karbhari",
        "role": "Site Manager",
        "email": "nabeel.karbhari@tideconstruction.co.uk"
      },
      {
        "name": "Pat Blache",
        "role": "M&E Utilities Manager",
        "email": "pat.blache@tideconstruction.co.uk"
      },
      {
        "name": "Steven Lewis",
        "role": "Quantity Surveyor",
        "email": "slewis@tideconstruction.co.uk"
      },
      {
        "name": "Ian O'Leary",
        "role": "Construction Director",
        "email": "ioleary@tideconstruction.co.uk"
      }
    ]
  },
  {
    "id": 597,
    "name": "Togher Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Arbjas Bulku",
        "role": "Foreman",
        "email": "arbjas@tclonline.co.uk"
      },
      {
        "name": "Brian Tonnyson",
        "role": "Quantity Surveyor",
        "email": "brian@tclonline.co.uk"
      },
      {
        "name": "Craig Doyle",
        "role": "Contracts Manager",
        "email": "craig@tclonline.co.uk"
      },
      {
        "name": "Dave Togher",
        "role": "Director",
        "email": "dave.togher@tclonline.co.uk",
        "phone": "07812 727520"
      },
      {
        "name": "Dean Corrigan",
        "role": "Project Manager",
        "email": "dean.corrigan@tclonline.co.uk"
      },
      {
        "name": "Enda Gaughan",
        "role": "Construction Manager",
        "email": "enda.gaughan@tclonline.co.uk",
        "phone": "07413 185685"
      },
      {
        "name": "Mike Shackley",
        "role": "Contracts Manager",
        "email": "mike.shackley@tclonline.co.uk"
      },
      {
        "name": "Pat Dervan",
        "role": "Site Manager",
        "email": "pat.dervan@tclonline.co.uk",
        "phone": "7407045715.0"
      },
      {
        "name": "Pat McCann",
        "role": "Project Manager",
        "email": "engineer26@tclonline.co.uk",
        "phone": "07741 855133"
      },
      {
        "name": "Rob Shergold",
        "role": "Contracts Manager",
        "email": "rob.shergold@tclonline.co.uk"
      },
      {
        "name": "Sean Kelly",
        "role": "Buyer",
        "email": "sean.kelly@tclonline.co.uk"
      },
      {
        "name": "Sean Togher",
        "role": "Contracts Manager",
        "email": "sean.togher@tclonline.co.uk"
      },
      {
        "name": "Shane Dervan",
        "role": "Quantity Surveyor",
        "email": "shane.dervan@tclonline.co.uk"
      },
      {
        "name": "Shane Mannion",
        "role": "Contracts Manager",
        "email": "engineer14@tclonline.co.uk",
        "phone": "07776 525619"
      },
      {
        "name": "Stefan Mihalache",
        "role": "Project Manager",
        "email": "stefan.mihalache@tclonline.co.uk"
      },
      {
        "name": "Steve Guerin",
        "role": "Project Manager",
        "email": "steve.guerin@tclonline.co.uk",
        "phone": "07987 426381"
      },
      {
        "name": "Tony Lyons",
        "role": "Quantity Surveyor",
        "email": "tony.lyons@tclonline.co.uk"
      },
      {
        "name": "Tony Togher",
        "role": "Director",
        "email": "tony@tclonline.co.uk"
      },
      {
        "name": "William O'Donnell",
        "role": "Project Manager",
        "email": "william.odonnell@tclonline.co.uk"
      }
    ]
  },
  {
    "id": 598,
    "name": "Tom Blackwell Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Sam Ratcliffe",
        "role": "Contracts Manager",
        "email": "sam.ratcliffe@tomblackwell.co.uk",
        "phone": "7921710601.0"
      }
    ]
  },
  {
    "id": 599,
    "name": "Topland Construction",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adrian Leddy",
        "role": "Director",
        "email": "adrian.leddy@toplandconstruction.co.uk",
        "phone": "07795 547662"
      },
      {
        "name": "Carl Mills",
        "role": "Director",
        "email": "carl.mills@toplandconstruction.co.uk",
        "phone": "07795 547662"
      }
    ]
  },
  {
    "id": 600,
    "name": "Toppesfield",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Mark Large",
        "role": "Operations Manager",
        "email": "mark.large@toppesfield.com"
      },
      {
        "name": "Mark Gillett",
        "role": "Contracts Manager",
        "email": "mark.gillett@toppesfield.com"
      },
      {
        "name": "Lee Barnes",
        "role": "Contracts Manager",
        "email": "lee.barnes@toppesfield.com",
        "phone": "07702 521338"
      },
      {
        "name": "Steve Whittingham",
        "role": "Contracts Manager",
        "email": "steve.whittingham@toppesfield.com"
      },
      {
        "name": "John Mann",
        "role": "Quantity Surveyor",
        "email": "john.mann@toppesfield.com"
      },
      {
        "name": "Antonio Frost",
        "role": "Quantity Surveyor",
        "email": "antonio.frost@toppesfield.com"
      },
      {
        "name": "Matt Riley",
        "role": "Quantity Surveyor",
        "email": "matt.riley@toppesfield.com",
        "phone": "07870 818472"
      },
      {
        "name": "Alex Perry",
        "role": "Key Account Manager",
        "email": "alex.perry@toppesfield.com"
      }
    ]
  },
  {
    "id": 601,
    "name": "Toppesfield Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alex Perry",
        "role": "Key Account Manager",
        "email": "alex.perry@toppesfield.com"
      },
      {
        "name": "Antonio Frost",
        "role": "Quantity Surveyor"
      },
      {
        "name": "John Mann",
        "role": "Quantity Surveyor",
        "email": "john.mann@toppesfield.com"
      },
      {
        "name": "Lee Barnes",
        "role": "Contracts Manager",
        "phone": "07702 521338"
      },
      {
        "name": "Mark Gillett",
        "role": "Contracts Manager",
        "email": "mark.gillett@toppesfield.com"
      },
      {
        "name": "Mark Large",
        "role": "Operations Manager"
      },
      {
        "name": "Matt Riley",
        "role": "Quantity Surveyor",
        "phone": "07870 818472"
      },
      {
        "name": "Steve Whittingham",
        "role": "Contracts Manager"
      }
    ]
  },
  {
    "id": 602,
    "name": "Total Play Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "David Bates",
        "role": "Director",
        "email": "db@totalturfsolutions.co.uk"
      }
    ]
  },
  {
    "id": 603,
    "name": "Toureen Group",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alex Martin",
        "role": "Projects Manager",
        "email": "alex.martin@toureengroup.co.uk"
      },
      {
        "name": "Andy Fox",
        "role": "Project Director",
        "email": "andy.fox@toureenmangan.co.uk"
      },
      {
        "name": "Anita Nash",
        "role": "Senior Project Engineer",
        "email": "anita.nash@toureenmangan.co.uk"
      },
      {
        "name": "Ciaran McClearn",
        "role": "Managing Director",
        "email": "ciaran.mcclearn@toureengroup.co.uk"
      },
      {
        "name": "Claire Fundrey",
        "role": "Environmental Manager",
        "email": "claire.fundrey@toureengroup.co.uk"
      },
      {
        "name": "Connor Ryan",
        "role": "Safety Officer",
        "email": "connor.ryan@toureengroup.co.uk",
        "phone": "7585506508.0"
      },
      {
        "name": "Damien Groarke",
        "role": "Contracts Director",
        "email": "damien.groarke@toureen.co.uk",
        "phone": "7528180940.0"
      },
      {
        "name": "Daniel Cleary",
        "role": "Contracts Manager",
        "email": "daniel.cleary@toureenmangan.co.uk"
      },
      {
        "name": "Daniel Nolan",
        "role": "Director",
        "email": "daniel.nolan@toureenmangan.co.uk",
        "phone": "7775993030.0"
      },
      {
        "name": "Darren Mulcahy",
        "role": "Project Manager",
        "email": "darren.mulcahy@toureengroup.co.uk"
      },
      {
        "name": "Dave Jameson",
        "role": "Director",
        "email": "david.jameson@toureen.co.uk"
      },
      {
        "name": "David Butler",
        "role": "Quantity Surveyor",
        "email": "david.butler@toureengroup.co.uk"
      },
      {
        "name": "David Crawford",
        "role": "Project Manager",
        "email": "david.crawford@toureengroup.co.uk"
      },
      {
        "name": "David McLeod",
        "role": "Contracts Manager",
        "email": "david.mcleod@toureengroup.co.uk"
      },
      {
        "name": "David Treacy",
        "role": "Project Manager",
        "email": "david.treacy@toureengroup.co.uk"
      },
      {
        "name": "Denis Nolan",
        "role": "Managing Director",
        "email": "denis.nolan@toureenmangan.co.uk",
        "phone": "7831335655.0"
      },
      {
        "name": "Eamon Cloonan",
        "role": "Manager",
        "email": "eamon.cloonan@toureengroup.co.uk"
      },
      {
        "name": "Eamon Sweeney",
        "role": "Quantity Surveyor",
        "email": "eamon.sweeney@toureengroup.co.uk"
      },
      {
        "name": "Eamonn Sullivan",
        "role": "Project Engineer",
        "email": "eamonn.sullivan@toureengroup.co.uk"
      },
      {
        "name": "Eduard Fartade",
        "role": "Project Manager",
        "email": "eduard.fartade@toureengroup.co.uk"
      },
      {
        "name": "Eoin Lawless",
        "role": "Project Manager",
        "email": "eoin.lawless@toureengroup.co.uk"
      },
      {
        "name": "Harry Hobbs",
        "role": "Project Manager",
        "email": "harry.hobbs@toureengroup.co.uk"
      },
      {
        "name": "James Lynch",
        "role": "Contracts Manager",
        "email": "james.lynch@toureenmangan.co.uk"
      },
      {
        "name": "John Paul Lally",
        "role": "Quantity Surveyor",
        "email": "johnpaul.lally@toureengroup.co.uk"
      },
      {
        "name": "Kevin Ward",
        "role": "Project Manager",
        "email": "kevin.ward@toureengroup.co.uk"
      },
      {
        "name": "Liam Davies",
        "role": "Quantity Surveyor",
        "email": "liam.davies@toureengroup.co.uk"
      },
      {
        "name": "Michelle Bailey",
        "role": "Quantity Surveyor",
        "email": "michelle.bailey@toureengroup.co.uk"
      },
      {
        "name": "Pat Guilfoyle",
        "role": "Contracts Manager",
        "email": "pat.guilfoyle@toureen.co.uk",
        "phone": "7825156383.0"
      },
      {
        "name": "Patt O'Donnall",
        "role": "Contracts Manager",
        "email": "patt.odonnall@toureengroup.co.uk"
      },
      {
        "name": "Paul Hamilton",
        "role": "Director",
        "email": "paul.hamilton@toureen.co.uk",
        "phone": "7875657451.0"
      },
      {
        "name": "Phil Hogan",
        "role": "Quantity Surveyor",
        "email": "phil.hogan@toureengroup.co.uk"
      },
      {
        "name": "Shahab Din",
        "role": "Project Manager",
        "email": "shahab.din@toureen.co.uk",
        "phone": "7929036983.0"
      },
      {
        "name": "Shane Crowghan",
        "role": "Contracts Manager",
        "email": "shane.crowghan@toureengroup.co.uk"
      },
      {
        "name": "Shefit Domi",
        "role": "Project Manager",
        "email": "shefit.domi@toureengroup.co.uk"
      },
      {
        "name": "Shirin Travers",
        "role": "shirin.travers@toureengroup.co.uk"
      },
      {
        "name": "Stephen Togher",
        "role": "Construction Manager",
        "email": "stephen.togher@toureengroup.co.uk"
      },
      {
        "name": "Alex Martin",
        "role": "Projects Manager",
        "email": "info@toureengroup.co.uk",
        "phone": "07585 506508"
      }
    ]
  },
  {
    "id": 604,
    "name": "Trant Engineering Limited",
    "disciplines": [
      "Civil Engineering"
    ],
    "contacts": [
      {
        "name": "Alex Hawes",
        "role": "Project Manager",
        "email": "alexander.hawes@trant.co.uk"
      },
      {
        "name": "Brendan Dowd",
        "role": "Director",
        "email": "brendan.dowd@trant.co.uk",
        "phone": "7712788735.0"
      },
      {
        "name": "Chris Darlow",
        "role": "Land and Planning Manager",
        "email": "chris.darlow@trant.co.uk"
      },
      {
        "name": "James Henderson",
        "role": "Director",
        "email": "james.henderson@trant.co.uk"
      },
      {
        "name": "Joanne Walker",
        "role": "Quantity Surveyor",
        "email": "joanne.walker@trant.co.uk"
      },
      {
        "name": "Martin Pearn",
        "role": "Contracts Manager",
        "email": "martin.pearn@trant.co.uk"
      },
      {
        "name": "Andy Matthews",
        "role": "Project Manager",
        "email": "andy.matthews@trant.co.uk"
      },
      {
        "name": "Chris White",
        "role": "Contracts Manager",
        "email": "chris.white@trant.co.uk"
      },
      {
        "name": "Darren Huxley",
        "role": "Operations Director",
        "email": "darren.huxley@trant.co.uk"
      },
      {
        "name": "James Trant",
        "role": "Director",
        "email": "james.trant@trant.co.uk"
      },
      {
        "name": "Mark Harris",
        "role": "Commercial Manager",
        "email": "mark.harris@trant.co.uk"
      },
      {
        "name": "Steve Hatcher",
        "role": "Project Director",
        "email": "steve.hatcher@trant.co.uk"
      }
    ]
  },
  {
    "id": 605,
    "name": "Treasure & Son",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Gordon Robertson",
        "role": "Director",
        "email": "gordon.robertson@treasureandson.co.uk"
      },
      {
        "name": "Julian Gold",
        "role": "julian.gold@treasureandson.co.uk"
      }
    ]
  },
  {
    "id": 606,
    "name": "UK Site Hoarding",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "John Bassett",
        "role": "Director",
        "email": "john.bassett@uk-sitehoarding.co.uk"
      }
    ]
  },
  {
    "id": 607,
    "name": "Van Elle Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Aaron Haslam",
        "role": "Estimating Director",
        "email": "aaron.haslam@van-elle.co.uk",
        "phone": "07725 613143"
      },
      {
        "name": "Alastair Pye",
        "role": "Contract Manager",
        "email": "alastair.pye@van-elle.co.uk",
        "phone": "07936 031628"
      },
      {
        "name": "Alexander Kalinowski",
        "role": "Senior Contracts Manager",
        "email": "alex.kalinowski@van-elle.co.uk"
      },
      {
        "name": "Andrew Hall",
        "role": "Buyer",
        "email": "andrew.hall@van-elle.co.uk"
      },
      {
        "name": "Campbell Crouser",
        "role": "Quantity Surveyor",
        "email": "campbell.crouser@van-elle.co.uk"
      },
      {
        "name": "Christine Huxley",
        "role": "Contracts Manager",
        "email": "christine.huxley@van-elle.co.uk",
        "phone": "07936 046278"
      },
      {
        "name": "Claire Garrett",
        "role": "Director",
        "email": "claire.garrett@van-elle.co.uk"
      },
      {
        "name": "Damian Low",
        "role": "Contract Manager",
        "email": "damian.low@van-elle.co.uk"
      },
      {
        "name": "Daniel Wilson",
        "role": "Operations Manager",
        "email": "daniel.wilson@van-elle.co.uk"
      },
      {
        "name": "David Warner",
        "role": "Director",
        "email": "dave.warner@van-elle.co.uk"
      },
      {
        "name": "Gary Levers",
        "email": "gary.levers@van-elle.co.uk"
      },
      {
        "name": "Ian Jones",
        "role": "Contracts Director",
        "email": "ian.jones@van-elle.co.uk"
      },
      {
        "name": "Ian Smithson",
        "role": "Contracts Manager",
        "email": "ian.smithson@van-elle.co.uk"
      },
      {
        "name": "James Stewart",
        "role": "Quantity Surveyor",
        "email": "james.stewart@van-elle.co.uk"
      },
      {
        "name": "John Allsop",
        "role": "Engineering Director",
        "email": "john.allsop@van-elle.co.uk"
      },
      {
        "name": "Kyle Kirkland",
        "role": "Contracts Engineer",
        "email": "kyle.kirkland@van-elle.co.uk"
      },
      {
        "name": "Malcolm O’Sullivan",
        "role": "Director",
        "email": "malcolm.osullivan@van-elle.co.uk"
      },
      {
        "name": "Max Lyndsey",
        "role": "Contracts Manager",
        "email": "max.lyndsey@van-elle.co.uk"
      },
      {
        "name": "Patere Mallett",
        "role": "Contracts Manager",
        "email": "patere.mallett@van-elle.co.uk"
      },
      {
        "name": "Phil Antcliffe",
        "role": "Safety Assurance Manager",
        "email": "phil.antcliffe@van-elle.co.uk"
      },
      {
        "name": "Scott Mills",
        "role": "Project Engineer",
        "email": "scott.mills@van-elle.co.uk"
      }
    ]
  },
  {
    "id": 608,
    "name": "Vibro Menard Limited",
    "disciplines": [
      "Piling"
    ],
    "contacts": [
      {
        "name": "Chris Fletcher",
        "role": "Quantity Surveyor",
        "email": "chris.fletcher@vibromenard.co.uk"
      },
      {
        "name": "David Rickson",
        "role": "Operations Manager",
        "email": "david.rickson@vibromenard.co.uk",
        "phone": "07715 484197"
      },
      {
        "name": "Dennis Mason",
        "email": "dennis.mason@vibromenard.co.uk"
      },
      {
        "name": "Ewan Jones",
        "role": "Contract Manager",
        "email": "ewan.jones@vibromenard.co.uk"
      },
      {
        "name": "Florentin Contardo",
        "role": "Senior Engineer",
        "email": "florentin.contardo@menard.co.uk",
        "phone": "07814 066 547"
      },
      {
        "name": "Jim O'Connor",
        "role": "Regional Manager",
        "email": "jim.oconnor@vibromenard.co.uk"
      },
      {
        "name": "Lee Howe",
        "role": "Technical Manager",
        "email": "lee.howe@vibromenard.co.uk"
      },
      {
        "name": "Lindsay Archibald",
        "role": "Project Manager",
        "email": "lindsay.archibald@vibromenard.co.uk"
      },
      {
        "name": "Matt Wood",
        "role": "Quantity Surveyor",
        "email": "matt.wood@vibromenard.co.uk"
      },
      {
        "name": "Steve Bailey",
        "role": "Quantity Surveyor",
        "email": "steve.bailey@vibromenard.co.uk"
      }
    ]
  },
  {
    "id": 609,
    "name": "Vision Construct",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Bal Chana",
        "role": "Contract Manager",
        "email": "bal.chana@visionconstruct.co"
      },
      {
        "name": "Carl Robertson-Hills",
        "role": "Construction Manager",
        "email": "carl.robertson-hills@visionconstruct.co"
      },
      {
        "name": "Charlie White",
        "role": "Site Manager",
        "email": "charlie.white@visionconstruct.co"
      },
      {
        "name": "Dean Freeman",
        "role": "Associate Director",
        "email": "dean@visionhomes.co.uk",
        "phone": "07803 041477"
      },
      {
        "name": "Edward Morgan",
        "role": "Senior Construction Manager",
        "email": "edward.morgan@visionconstruct.co"
      },
      {
        "name": "Garrett Duru",
        "role": "Quantity Surveyor",
        "email": "garrett.duru@visionconstruct.co"
      },
      {
        "name": "James Goldsmith",
        "role": "Architect",
        "email": "james.goldsmith@visionconstruct.co"
      },
      {
        "name": "Johnny Liu",
        "role": "Quantity Surveyor",
        "email": "johnny.liu@visionconstruct.co"
      },
      {
        "name": "Parma Sulh",
        "role": "Director",
        "email": "parma@visionhomes.co.uk"
      },
      {
        "name": "Paul Martin",
        "role": "Project Manager",
        "email": "paul.martin@visionconstruct.co"
      },
      {
        "name": "Ses Angula",
        "role": "Quantity Surveyor",
        "email": "ses.angula@visionconstruct.co"
      },
      {
        "name": "Simon White",
        "role": "Director",
        "email": "simon.white@visionconstruct.co",
        "phone": "07766 080170"
      },
      {
        "name": "Tom Barrington",
        "role": "Quantity Surveyor",
        "email": "tom.barrington@visionconstruct.co"
      }
    ]
  },
  {
    "id": 610,
    "name": "VKE",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Abdul Parkar",
        "role": "Project Manager",
        "email": "a.parkar@vkegroup.com"
      },
      {
        "name": "Alan Ferguson",
        "role": "Managing Director",
        "email": "alan.ferguson@vkegroup.com"
      },
      {
        "name": "Altin Isufi",
        "role": "Project Manager",
        "email": "a.isufi@vkegroup.com",
        "phone": "7858396206.0"
      },
      {
        "name": "Chris Williams",
        "role": "Project Manager",
        "email": "chris.williams@vkegroup.com"
      },
      {
        "name": "Daragh Quinn",
        "role": "Project Manager",
        "email": "daragh.quinn@vkegroup.com"
      },
      {
        "name": "Dori Duraku",
        "role": "Assistant Quantity Surveyor",
        "email": "d.duraku@vkegroup.com"
      },
      {
        "name": "Imran Khan",
        "role": "Project Manager",
        "email": "imran.khan@vkegroup.com",
        "phone": "7880496221.0"
      },
      {
        "name": "James Judge",
        "role": "Project Manager",
        "email": "j.judge@vkegroup.com",
        "phone": "7722036418.0"
      },
      {
        "name": "Joseph Monaghan",
        "role": "Surveyor",
        "email": "joseph.monaghan@vkegroup.com"
      },
      {
        "name": "Phil Howitt",
        "role": "Construction Director",
        "email": "p.howitt@vkegroup.com"
      },
      {
        "name": "Rafael Vieria",
        "role": "Managing Director",
        "email": "rafael.vieira@vkegroup.com"
      },
      {
        "name": "Rajathurai Vijiraj",
        "role": "Project Engineer",
        "email": "v.rajathurai@vkegroup.com"
      },
      {
        "name": "Raphael Rizzo",
        "role": "Site Supervisor",
        "email": "r.rizzo@vkegroup.com"
      },
      {
        "name": "Robert Clarke",
        "role": "Contracts Manager",
        "email": "r.clarke@vkegroup.com"
      },
      {
        "name": "Ryan Hunt",
        "role": "Contracts Manager",
        "email": "ryan.hunt@vkegroup.com"
      },
      {
        "name": "Tony O'Connor",
        "role": "Project Manager",
        "email": "t.oconnor@vkegroup.com"
      }
    ]
  },
  {
    "id": 611,
    "name": "VKE Contractors Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Abdul Parkar",
        "role": "Project Manager",
        "email": "a.parkar@vkegroup.com"
      },
      {
        "name": "Alan Ferguson",
        "role": "Managing Director",
        "email": "alan.ferguson@vkegroup.com"
      },
      {
        "name": "Altin Isufi",
        "role": "Project Manager",
        "email": "a.isufi@vkegroup.com",
        "phone": "7858396206.0"
      },
      {
        "name": "Chris Williams",
        "role": "Project Manager",
        "email": "chris.williams@vkegroup.com"
      },
      {
        "name": "Dori Duraku",
        "role": "Assistant Quantity Surveyor",
        "email": "d.duraku@vkegroup.com"
      },
      {
        "name": "Imran Khan",
        "role": "Project Manager",
        "email": "imran.khan@vkegroup.com",
        "phone": "7880496221.0"
      },
      {
        "name": "James Judge",
        "role": "Project Manager",
        "email": "j.judge@vkegroup.com",
        "phone": "7722036418.0"
      },
      {
        "name": "Joseph Monaghan",
        "role": "Surveyor",
        "email": "joseph.monaghan@vkegroup.com"
      },
      {
        "name": "Phil Howitt",
        "role": "Construction Director",
        "email": "p.howitt@vkegroup.com"
      },
      {
        "name": "Rafael Vieria",
        "role": "Managing Director",
        "email": "rafael.vieria@vkegroup.com"
      },
      {
        "name": "Rajathurai Vijiraj",
        "role": "Project Engineer",
        "email": "v.rajathurai@vkegroup.com"
      },
      {
        "name": "Raphael Rizzo",
        "role": "Site Supervisor",
        "email": "r.rizzo@vkegroup.com"
      },
      {
        "name": "Robert Clarke",
        "role": "Contracts Manager",
        "email": "r.clarke@vkegroup.com"
      },
      {
        "name": "Ryan Hunt",
        "role": "Contracts Manager",
        "email": "ryan.hunt@vkegroup.com"
      },
      {
        "name": "Tony O'Connor",
        "role": "Project Manager",
        "email": "t.oconnor@vkegroup.com"
      }
    ]
  },
  {
    "id": 612,
    "name": "Walker Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Alex Goble",
        "role": "Site Manager",
        "email": "alex.goble@walker-construction.co.uk",
        "phone": "7710077742.0"
      },
      {
        "name": "Andy New",
        "role": "Site Manager",
        "email": "andy.new@walker-construction.co.uk",
        "phone": "07710 077731"
      },
      {
        "name": "Calvin Nash",
        "role": "Project Manager",
        "email": "calvin.nash@walker-construction.co.uk"
      },
      {
        "name": "Darryl Harvey",
        "role": "Site Agent",
        "email": "darryl.harvey@walker-construction.co.uk",
        "phone": "7710077720.0"
      },
      {
        "name": "Jordan Corbett",
        "role": "Quantity Surveyor",
        "email": "jordan.corbett@walker-construction.co.uk",
        "phone": "07841 919952"
      },
      {
        "name": "Kayleigh Ballantyne",
        "role": "Contracts Coordinator",
        "email": "kayleigh.ballantyne@walker-construction.co.uk"
      },
      {
        "name": "Lee Muir",
        "role": "Site Agent",
        "email": "lee.muir@walker-construction.co.uk",
        "phone": "07710 077705"
      },
      {
        "name": "Luke Kingsbury",
        "role": "Contracts Manager",
        "email": "luke.kingsbury@walker-construction.co.uk",
        "phone": "7867535284.0"
      },
      {
        "name": "Mark Walker",
        "role": "Contract Manager",
        "email": "mark.walker@walker-construction.co.uk"
      },
      {
        "name": "Phil Webb",
        "role": "Managing Director",
        "email": "phil.webb@walker-construction.co.uk"
      },
      {
        "name": "Steve Ryan",
        "role": "Quantity Surveyor",
        "email": "steve.ryan@walker-construction.co.uk",
        "phone": "07909 550782"
      },
      {
        "name": "Steve Walker",
        "role": "Chairman",
        "email": "steve.walker@walker-construction.co.uk"
      },
      {
        "name": "Stuart Caldwell",
        "role": "Project Manager",
        "email": "stuart-caldwell@walker-construction.co.uk"
      },
      {
        "name": "Terri Mayhew",
        "role": "Estimator",
        "email": "terri.mayhew@wcuk.co.uk"
      }
    ]
  },
  {
    "id": 613,
    "name": "Wates Construction Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Adam Cannon",
        "role": "Senior Design Manager",
        "email": "adam.cannon@wates.co.uk"
      },
      {
        "name": "Adam Gent",
        "role": "Commercial Manager",
        "email": "adam.gent@wates.co.uk"
      },
      {
        "name": "Adam Williams",
        "role": "Site Manager",
        "email": "adam.williams@wates.co.uk"
      },
      {
        "name": "Adrian Johnson",
        "role": "Project Manager",
        "email": "adrian.johnson@wates.co.uk"
      },
      {
        "name": "AJ Canagasundaram",
        "role": "Project Director",
        "email": "aj.canagasundaram@wates.co.uk"
      },
      {
        "name": "Alan Benham",
        "role": "Contracts Manager",
        "email": "alan.benham@wates.co.uk"
      },
      {
        "name": "Andreas Constantinides",
        "role": "Commercial Manager",
        "email": "andreas.constantinides@wates.co.uk"
      },
      {
        "name": "Andrew Dix",
        "role": "Site Manager",
        "email": "andrew.dix@wates.co.uk"
      },
      {
        "name": "Andrew Lipscombe",
        "role": "Project Director",
        "email": "andrew.lipscombe@wates.co.uk"
      },
      {
        "name": "Andrew Mather",
        "role": "Project Director",
        "email": "andrew.mather@wates.co.uk",
        "phone": "07763 206237"
      },
      {
        "name": "Andrew Norman",
        "role": "Project Surveyor",
        "email": "andrew.norman@wates.co.uk"
      },
      {
        "name": "Andrew Scrace",
        "role": "Design Manager",
        "email": "andrew.scrace@wates.co.uk"
      },
      {
        "name": "Andrew Somerset-Wilson",
        "role": "Quantity Surveyor",
        "email": "andrew.somerset-wilson@wates.co.uk"
      },
      {
        "name": "Andrew Vince",
        "email": "andrew.vince@wates.co.uk"
      },
      {
        "name": "Andy Lawson",
        "role": "Commercial Manager",
        "email": "andy.lawson@wates.co.uk"
      },
      {
        "name": "Andy Mason",
        "role": "Regional Commercial Director",
        "email": "andy.mason@wates.co.uk"
      },
      {
        "name": "Asher Ross",
        "role": "Planning Director",
        "email": "asher.ross@wates.co.uk",
        "phone": "07821 636088"
      },
      {
        "name": "Bahadur Singh",
        "role": "Quantity Surveyor",
        "email": "bahadur.singh@wates.co.uk"
      },
      {
        "name": "Barry Williams",
        "role": "Operations Director",
        "email": "barry.williams@wates.co.uk"
      },
      {
        "name": "Ben Carrie",
        "role": "Commercial Manager",
        "email": "ben.carrie@wates.co.uk"
      },
      {
        "name": "Ben Cox",
        "role": "Quantity Surveyor",
        "email": "ben.cox@wates.co.uk"
      },
      {
        "name": "Ben Currie",
        "role": "Quantity Surveyor",
        "email": "ben.currie@wates.co.uk"
      },
      {
        "name": "Ben Foster",
        "role": "Project Manager",
        "email": "ben.foster@wates.co.uk"
      },
      {
        "name": "Ben Hadley",
        "role": "Site Manager",
        "email": "ben.hadley@wates.co.uk"
      },
      {
        "name": "Ben Williams",
        "role": "Housing Manager",
        "email": "ben.williams@wates.co.uk"
      },
      {
        "name": "Bledar Bleca",
        "role": "Site Manager",
        "email": "bledar.bleca@wates.co.uk"
      },
      {
        "name": "Bradley Panico",
        "role": "Quantity Surveyor",
        "email": "bradley.panico@wates.co.uk"
      },
      {
        "name": "Camilla Budd",
        "role": "Land Manager",
        "email": "camilla.budd@wates.co.uk"
      },
      {
        "name": "Carl Ayres",
        "role": "Senior Site Manager",
        "email": "carl.ayres@wates.co.uk",
        "phone": "7517499177.0"
      },
      {
        "name": "Charlie Frearson",
        "role": "Project Surveyor",
        "email": "charlie.frearson@wates.co.uk"
      },
      {
        "name": "Chris Williams",
        "role": "Quantity Surveyor",
        "email": "chris.williams@wates.co.uk"
      },
      {
        "name": "Chris Wright",
        "role": "Project Director",
        "email": "chris.wright@wates.co.uk"
      },
      {
        "name": "Colette Gibbons",
        "role": "Quantity Surveyor",
        "email": "colette.gibbons@wates.co.uk"
      },
      {
        "name": "Colin Gee",
        "role": "Site Manager",
        "email": "colin.gee@wates.co.uk"
      },
      {
        "name": "Colin Lewis",
        "role": "Quantity Surveyor",
        "email": "colin.lewis@wates.co.uk"
      },
      {
        "name": "Colin Low",
        "role": "Senior Project Manager",
        "email": "colin.low@wates.co.uk"
      },
      {
        "name": "Colm Nolan",
        "role": "Project Manager",
        "email": "colm.nolan@wates.co.uk"
      },
      {
        "name": "Conner Sherry",
        "role": "Quantity Surveyor",
        "email": "conner.sherry@wates.co.uk"
      },
      {
        "name": "Cormac McCooey",
        "role": "Quantity Surveyor",
        "email": "cormac.mccooey@wates.co.uk"
      },
      {
        "name": "Craig Horn",
        "role": "Director",
        "email": "craig.horn@wates.co.uk"
      },
      {
        "name": "Craig Skinner",
        "role": "Site Manager",
        "email": "craig.skinner@wates.co.uk"
      },
      {
        "name": "Dan Coniam",
        "role": "Project Manager",
        "email": "daniel.coniam@wates.co.uk"
      },
      {
        "name": "Daniel Creech",
        "role": "Quantity Surveyor",
        "email": "daniel.creech@wates.co.uk"
      },
      {
        "name": "Daniel Ford",
        "role": "Commercial Manager",
        "email": "daniel.ford@wates.co.uk",
        "phone": "07542 395655"
      },
      {
        "name": "Daniel Harrison",
        "role": "Quantity Surveyor",
        "email": "dan.harrison@wates.co.uk"
      },
      {
        "name": "Daniel Martell",
        "role": "Quantity Surveyor",
        "email": "daniel.martell@wates.co.uk"
      },
      {
        "name": "Daniel Percy",
        "email": "daniel.percy@wates.co.uk"
      },
      {
        "name": "Danny Ingoldsby",
        "role": "Quantity Surveyor",
        "email": "danny.ingoldsby@wates.co.uk"
      },
      {
        "name": "Darren Middleton",
        "role": "Commercial Manager",
        "email": "darren.middleton@wates.co.uk"
      },
      {
        "name": "Darren Powell",
        "role": "Quantity Surveyor",
        "email": "darren.powell@wates.co.uk"
      },
      {
        "name": "Darren Wilkins",
        "role": "Quantity Surveyor",
        "email": "darren.wilkins@wates.co.uk"
      },
      {
        "name": "Darren Wilson",
        "role": "Quantity Surveyor",
        "email": "darren.wilson@wates.co.uk"
      },
      {
        "name": "Dave Scott",
        "role": "Commercial Manager",
        "email": "david.scott@wates.co.uk"
      },
      {
        "name": "Dave Sheridan",
        "role": "Manager",
        "email": "dsheridan@wates.co.uk"
      },
      {
        "name": "David Saunders",
        "role": "Manager",
        "email": "david.saunders@wates.co.uk"
      },
      {
        "name": "David Shale",
        "role": "Project Manager",
        "email": "david.shale@wates.co.uk"
      },
      {
        "name": "David Wingfield",
        "role": "Managing Director",
        "email": "david.wingfield@wates.co.uk"
      },
      {
        "name": "Dean Nokes",
        "role": "Project Manager",
        "email": "dean.nokes@wates.co.uk"
      },
      {
        "name": "Dean Scott",
        "role": "Project Surveyor",
        "email": "dean.scott@wates.co.uk"
      },
      {
        "name": "Dom Rooney",
        "role": "Commercial Manager",
        "email": "dom.rooney@wates.co.uk"
      },
      {
        "name": "Edward Rees",
        "role": "Regional Managing Director",
        "email": "edward.rees@wates.co.uk"
      },
      {
        "name": "Eeva Paasiaro",
        "role": "Development Director",
        "email": "eeva.paasiaro@wates.co.uk"
      },
      {
        "name": "Fabio Chiarizia",
        "role": "Trainee Quantity Surveyor",
        "email": "fabio.chiarizia@wates.co.uk"
      },
      {
        "name": "Fred Sherlock",
        "role": "Commercial Manager",
        "email": "fred.sherlock@wates.co.uk"
      },
      {
        "name": "Gary Smith",
        "role": "Contracts Manager",
        "email": "gary.smith@wates.co.uk",
        "phone": "07789 877524"
      },
      {
        "name": "George Beitis",
        "role": "Quantity Surveyor",
        "email": "george.beitis@wates.co.uk"
      },
      {
        "name": "George Bird",
        "role": "Project Manager",
        "email": "george.bird@wates.co.uk"
      },
      {
        "name": "George Norton",
        "role": "Commercial Manager",
        "email": "george.norton@wates.co.uk"
      },
      {
        "name": "Glen McGowan",
        "role": "Quantity Surveyor",
        "email": "glen.mcgowan@wates.co.uk"
      },
      {
        "name": "Glen Roberts",
        "role": "Operations Director",
        "email": "glen.roberts@wates.co.uk",
        "phone": "7712433784.0"
      },
      {
        "name": "Glenn Watson",
        "role": "Quantity Surveyor",
        "email": "glenn.watson@wates.co.uk"
      },
      {
        "name": "Graham Jones",
        "email": "graham.jones@wates.co.uk"
      },
      {
        "name": "Graham Rumsey",
        "role": "Project Manager",
        "email": "graham.rumsey@wates.co.uk",
        "phone": "07784 297984"
      },
      {
        "name": "Hamish Niven",
        "role": "Quantity Surveyor",
        "email": "hniven@wates.co.uk"
      },
      {
        "name": "Harry Spiers",
        "role": "Quantity Surveyor",
        "email": "harry.spiers@wates.co.uk"
      },
      {
        "name": "Hazel Harris",
        "role": "Assistant Surveyor",
        "email": "hazel.harris@wates.co.uk"
      },
      {
        "name": "Holly Rush",
        "role": "Project Assistant",
        "email": "hrush@wates.co.uk"
      },
      {
        "name": "Ian Clementson",
        "role": "Project Manager",
        "email": "ian.clementson@wates.co.uk"
      },
      {
        "name": "Ian Hawthorne",
        "role": "Project Leader",
        "email": "ian.hawthorne@wates.co.uk"
      },
      {
        "name": "Ian Hirst",
        "role": "Contracts Manager",
        "email": "ian.hirst@wates.co.uk"
      },
      {
        "name": "Jack Nesbitt",
        "role": "Project Manager",
        "email": "jack.nesbitt@wates.co.uk"
      },
      {
        "name": "Jack Oxtoby",
        "role": "Surveyor",
        "email": "jack.oxtoby@wates.co.uk"
      },
      {
        "name": "James Chappell",
        "role": "Project Manager",
        "email": "james.chappell@wates.co.uk"
      },
      {
        "name": "James Hamilton",
        "role": "Operations Manager",
        "email": "james.hamilton@wates.co.uk"
      },
      {
        "name": "James Neil",
        "role": "Project Surveyor",
        "email": "james.neil@wates.co.uk"
      },
      {
        "name": "James Smithers",
        "role": "Quantity Surveyor",
        "email": "james.smithers@wates.co.uk"
      },
      {
        "name": "Jamie Judge",
        "role": "Quantity Surveyor",
        "email": "jamie.judge@wates.co.uk"
      },
      {
        "name": "Jamie Wray",
        "role": "Quantity Surveyor",
        "email": "jamie.wray@wates.co.uk"
      },
      {
        "name": "Jo Ford",
        "role": "Quantity Surveyor",
        "email": "jo.ford@wates.co.uk"
      },
      {
        "name": "John Coburn",
        "role": "Project Manager",
        "email": "john.coburn@wates.co.uk"
      },
      {
        "name": "John Tarvit",
        "email": "john.tarvit@wates.co.uk"
      },
      {
        "name": "Jordan Van Laun",
        "role": "Associate Land Director",
        "email": "jordan.vanlaun@wates.co.uk"
      },
      {
        "name": "Jose Carro",
        "role": "Quantity Surveyor",
        "email": "jose.carro@wates.co.uk"
      },
      {
        "name": "Josh Burns",
        "role": "Site Surveyor",
        "email": "josh.burns@wates.co.uk"
      },
      {
        "name": "Josh Press",
        "role": "Quantity Surveyor",
        "email": "josh.press@wates.co.uk"
      },
      {
        "name": "Justin Burrows",
        "role": "Quantity Surveyor",
        "email": "justin.burrows@wates.co.uk",
        "phone": "7917557969.0"
      },
      {
        "name": "Kay Chizlett",
        "role": "Quantity Surveyor",
        "email": "kay.chizlett@wates.co.uk"
      },
      {
        "name": "Kelly Slightam",
        "role": "Quantity Surveyor",
        "email": "kelly.slightam@wates.co.uk"
      },
      {
        "name": "Kevin Ferguson",
        "role": "Construction Manager",
        "email": "kevin.ferguson@wates.co.uk",
        "phone": "7566774870.0"
      },
      {
        "name": "Kieran Kavanagh",
        "role": "Senior Quantity Surveyor",
        "email": "kkavanagh@wates.co.uk"
      },
      {
        "name": "Kieran McCall",
        "role": "Quantity Surveyor",
        "email": "kieran.mccall@wates.co.uk",
        "phone": "07824 499112"
      },
      {
        "name": "Kieron Dunne",
        "role": "Quantity Surveyor",
        "email": "kieron.dunne@wates.co.uk"
      },
      {
        "name": "Kris Munt",
        "role": "Surveyor",
        "email": "kris.munt@wates.co.uk"
      },
      {
        "name": "Lawrence Baxter",
        "role": "Construction Manager",
        "email": "lawrence.baxter@wates.co.uk"
      },
      {
        "name": "Leanne Broadhead",
        "role": "Senior Delivery Manager",
        "email": "leanne.broadhead@wates.co.uk"
      },
      {
        "name": "Lee Bushell",
        "role": "Regional Managing Director",
        "email": "lee.bushell@wates.co.uk"
      },
      {
        "name": "Lee Butler",
        "role": "Commercial Manager",
        "email": "lee.butler@wates.co.uk"
      },
      {
        "name": "Lee McCullagh",
        "role": "Quantity Surveyor",
        "email": "lee.mccullagh@wates.co.uk"
      },
      {
        "name": "Leigh Deakin",
        "role": "Operations Manager",
        "email": "ldeakin@wates.co.uk"
      },
      {
        "name": "Liam Carolan",
        "role": "Quantity Surveyor",
        "email": "liam.carolan@wates.co.uk"
      },
      {
        "name": "Liam Smyth",
        "role": "Quantity Surveyor",
        "email": "liam.smyth@wates.co.uk",
        "phone": "7753429320.0"
      },
      {
        "name": "Louis Monk",
        "role": "Quantity Surveyor",
        "email": "louis.monk@wates.co.uk"
      },
      {
        "name": "Luke Brown",
        "role": "Quantity Surveyor",
        "email": "luke.brown2@wates.co.uk"
      },
      {
        "name": "Luke McGloon",
        "role": "Site Surveyor",
        "email": "luke.mcgloon@wates.co.uk"
      },
      {
        "name": "Mark Craig",
        "role": "Regional Director",
        "email": "mark.craig@wates.co.uk"
      },
      {
        "name": "Mark Heffernan",
        "role": "Quantity Surveyor",
        "email": "mark.heffernan@wates.co.uk"
      },
      {
        "name": "Mark Jones",
        "role": "Contracts Manager",
        "email": "mark.jones@wates.co.uk",
        "phone": "07740 976150"
      },
      {
        "name": "Mark Lewis",
        "role": "Project Manager",
        "email": "mark.lewis@wates.co.uk"
      },
      {
        "name": "Mark Perry",
        "role": "Construction Manager",
        "email": "mark.perry@wates.co.uk"
      },
      {
        "name": "Martin Ely",
        "role": "Commercial Manager",
        "email": "martin.ely@wates.co.uk"
      },
      {
        "name": "Martin McSweeney",
        "role": "Project Manager",
        "email": "martin.mcsweeney@wates.co.uk"
      },
      {
        "name": "Martin Smith",
        "role": "Quantity Surveyor",
        "email": "martin.smith@wates.co.uk"
      },
      {
        "name": "Matt Mint",
        "role": "Project Manager",
        "email": "matt.mint@wates.co.uk"
      },
      {
        "name": "Matt Pidgeon",
        "role": "Project Manager",
        "email": "matt.pidgeon@wates.co.uk"
      },
      {
        "name": "Matthew Croxford",
        "role": "Site Surveyor",
        "email": "mcroxford@wates.co.uk"
      },
      {
        "name": "Matthew Peacham",
        "role": "Project Surveyor",
        "email": "matthew.peacham@wates.co.uk"
      },
      {
        "name": "Matthew Pullin",
        "role": "Project Surveyor",
        "email": "matthew.pullin@wates.co.uk"
      },
      {
        "name": "Matthew Reilly",
        "role": "Quantity Surveyor",
        "email": "matthew.reilly@wates.co.uk"
      },
      {
        "name": "Max Massey",
        "role": "Site Manager",
        "email": "max.massey@wates.co.uk"
      },
      {
        "name": "Melissa Dias",
        "role": "Design Manager",
        "email": "melissa.dias@wates.co.uk"
      },
      {
        "name": "Meryl Baker",
        "role": "Land Manager",
        "email": "meryl.baker@wates.co.uk"
      },
      {
        "name": "Michael Bloss",
        "role": "Site Manager",
        "email": "michael.bloss@wates.co.uk"
      },
      {
        "name": "Michael Hester",
        "role": "Quantity Surveyor",
        "email": "michael.hester@wates.co.uk"
      },
      {
        "name": "Neil Page",
        "role": "Contracts Manager",
        "email": "neil.page@wates.co.uk",
        "phone": "07717 541290"
      },
      {
        "name": "Neville Grunwald",
        "role": "Director",
        "email": "neville.grunwald@wates.co.uk"
      },
      {
        "name": "Niall Stewart",
        "role": "Design Manager",
        "email": "niall.stewart@wates.co.uk"
      },
      {
        "name": "Oliver Osztotis",
        "role": "Quantity Surveyor",
        "email": "oliver.osztotis@wates.co.uk"
      },
      {
        "name": "Owen McGillivray",
        "role": "Commercial Manager",
        "email": "owen.mcgillivray@wates.co.uk"
      },
      {
        "name": "Patrick Norville",
        "role": "Pre Construction Director",
        "email": "patrick.norville@wates.co.uk",
        "phone": "07701 397 164"
      },
      {
        "name": "Paul Eddy",
        "role": "Commercial Manager",
        "email": "paul.eddy@wates.co.uk"
      },
      {
        "name": "Paul Nicholls",
        "role": "Managing Director",
        "email": "paul.nicholls@wates.co.uk"
      },
      {
        "name": "Paul Nimmo",
        "role": "Construction Manager",
        "email": "paul.nimmo@wates.co.uk",
        "phone": "07519 997159"
      },
      {
        "name": "Paul Quinnell",
        "role": "Project Manager",
        "email": "paul.quinnell@wates.co.uk"
      },
      {
        "name": "Paul Reynolds",
        "role": "Project Director",
        "email": "paul.reynolds@wates.co.uk",
        "phone": "7731010866.0"
      },
      {
        "name": "Phil Shortman",
        "role": "Regional Managing Director",
        "email": "pshortman@wates.co.uk"
      },
      {
        "name": "Philip Doyle",
        "role": "Commercial Manager",
        "email": "philip.doyle@wates.co.uk"
      },
      {
        "name": "Phillip Brooks",
        "role": "Project Director",
        "email": "phillip.brooks@wates.co.uk"
      },
      {
        "name": "Remi Morgan",
        "role": "Quantity Surveyor",
        "email": "remi.morgan3@wates.co.uk"
      },
      {
        "name": "Richard Borg",
        "role": "Pre Construction Manager",
        "email": "richard.borg@wates.co.uk"
      },
      {
        "name": "Richard Cherry",
        "role": "Commercial Manager",
        "email": "richard.cherry@wates.co.uk"
      },
      {
        "name": "Richard Ward",
        "role": "Project Manager",
        "email": "richard.ward@wates.co.uk"
      },
      {
        "name": "Rio Daniel",
        "role": "Land Manager",
        "email": "rio.daniel@wates.co.uk"
      },
      {
        "name": "Rob Baldwin",
        "role": "Quantity Surveyor",
        "email": "rob.baldwin@wates.co.uk"
      },
      {
        "name": "Rory Kemp",
        "role": "Project Manager",
        "email": "rory.kemp@wates.co.uk"
      },
      {
        "name": "Ryan Scoble",
        "role": "Quantity Surveyor",
        "email": "ryan.scoble@wates.co.uk"
      },
      {
        "name": "Ryan Taylor",
        "email": "ryan.taylor@wates.co.uk"
      },
      {
        "name": "Sam Edwards",
        "role": "Site Manager",
        "email": "samuel.edwards@wates.co.uk"
      },
      {
        "name": "Samuel Hodson",
        "role": "Project Manager",
        "email": "samuel.hodson@wates.co.uk"
      },
      {
        "name": "Scott Camp",
        "role": "Managing Director",
        "email": "scott.camp@wates.co.uk"
      },
      {
        "name": "Scott McCulloch",
        "role": "Commercial Director",
        "email": "scott.mcculloch@wates.co.uk"
      },
      {
        "name": "Sean Cushing",
        "role": "Project Manager",
        "email": "sean.cushing@wates.co.uk"
      },
      {
        "name": "Sean Thompson",
        "role": "Quantity Surveyor",
        "email": "sean.thompson@wates.co.uk"
      },
      {
        "name": "Shane Brady",
        "role": "Project Surveyor",
        "email": "shane.brady@wates.co.uk"
      },
      {
        "name": "Sion Middleton",
        "role": "Quantity Surveyor",
        "email": "sion.middleton@wates.co.uk"
      },
      {
        "name": "Ste Grice",
        "role": "Surveyor",
        "email": "sgrice@wates.co.uk"
      },
      {
        "name": "Steve Cook",
        "role": "Commercial Manager",
        "email": "steve.cook@wates.co.uk"
      },
      {
        "name": "Steve Holbrook",
        "role": "Managing Director",
        "email": "sholbrook@wates.co.uk"
      },
      {
        "name": "Steve Humble",
        "role": "Quantity Surveyor",
        "email": "steve.humble@wates.co.uk"
      },
      {
        "name": "Steve Metcalfe",
        "role": "Commercial Manager",
        "email": "smetcalfe@wates.co.uk"
      },
      {
        "name": "Steve Rowbottom",
        "role": "Commercial Manager",
        "email": "steve.rowbottom@wates.co.uk"
      },
      {
        "name": "Stuart Hamilton",
        "role": "Contract Manager",
        "email": "stuart.hamilton@wates.co.uk"
      },
      {
        "name": "Stuart Kilshaw",
        "role": "Commercial Manager",
        "email": "stuart.kilshaw@wates.co.uk"
      },
      {
        "name": "Tony Fisher",
        "role": "Quantity Surveyor",
        "email": "tony.fisher@wates.co.uk"
      },
      {
        "name": "Tony Heekin",
        "role": "Quantity Surveyor",
        "email": "tony.heekin@wates.co.uk"
      },
      {
        "name": "Tony Lucey",
        "role": "Project Manager",
        "email": "tony.lucey@wates.co.uk",
        "phone": "07540 147047"
      },
      {
        "name": "Tony Quinn",
        "role": "Site Manager",
        "email": "tony.quinn@wates.co.uk"
      },
      {
        "name": "Vince Finnegan",
        "role": "Contracts Manager",
        "email": "vince.finnegan@wates.co.uk"
      },
      {
        "name": "Will Large",
        "role": "Quantity Surveyor",
        "email": "will.large@wates.co.uk"
      },
      {
        "name": "Zachary Farnsworth",
        "role": "Surveyor",
        "email": "zachary.farnsworth@wates.co.uk"
      }
    ]
  },
  {
    "id": 614,
    "name": "Whelan & Grant (Contractors) Limited",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Brian Gilbert",
        "role": "Quantity Surveyor",
        "email": "bgilbert@whelanandgrant.co.uk"
      },
      {
        "name": "Henry Davies",
        "role": "Quantity Surveyor",
        "email": "hdavies@whelanandgrant.co.uk"
      },
      {
        "name": "Ricky Wooding",
        "role": "Buyer",
        "email": "rwooding@whelanandgrant.co.uk"
      },
      {
        "name": "Russell White",
        "role": "Commercial Director",
        "email": "rwhite@whelanandgrant.co.uk"
      },
      {
        "name": "Steve Wood",
        "role": "Contract Manager",
        "email": "swood@whelanandgrant.co.uk",
        "phone": "07785 622 061"
      },
      {
        "name": "Tom Holloway",
        "role": "Operations Manager",
        "email": "tholloway@whelanandgrant.co.uk"
      }
    ]
  },
  {
    "id": 615,
    "name": "Winchmore Brickwork Group",
    "disciplines": [
      "General"
    ],
    "contacts": [
      {
        "name": "Foysol Ahmed",
        "role": "Senior Quantity Surveyor",
        "email": "f.ahmed@winchmorebrickwork.co.uk"
      },
      {
        "name": "Tony Yianni",
        "role": "Chairman",
        "email": "t.yianni@winchmorebrickwork.co.uk"
      }
    ]
  },
  {
    "id": 616,
    "name": "Wooldridge Group",
    "disciplines": [
      "Groundworks"
    ],
    "contacts": [
      {
        "name": "Ashton Sewell",
        "role": "Contract Manager",
        "email": "ashton.sewell@wooldridgegroup.co.uk"
      },
      {
        "name": "Dan Giles",
        "role": "Land Manager",
        "email": "dan@wooldridgegroup.co.uk"
      },
      {
        "name": "Daniel Torrence",
        "role": "Land Manager",
        "email": "daniel.torrence@wooldridgegroup.co.uk"
      },
      {
        "name": "Gary Hickman",
        "role": "Contract Manager",
        "email": "ghickman@wooldridgegroup.co.uk",
        "phone": "07789 944090"
      },
      {
        "name": "Geoff Bonner",
        "role": "Quantity Surveyor",
        "email": "geoff.bonner@wooldridgegroup.co.uk"
      },
      {
        "name": "George Woodward",
        "role": "Head of Land",
        "email": "george.woodward@wooldridgegroup.co.uk"
      },
      {
        "name": "Haylie Grimes",
        "role": "Project Manager",
        "email": "haylie.grimes@wooldridgegroup.co.uk"
      },
      {
        "name": "Jed West",
        "role": "Head of Land",
        "email": "jed@wooldridgegroup.co.uk"
      },
      {
        "name": "Marcus Mainwaring",
        "role": "Director",
        "email": "marcus@wooldridgegroup.co.uk"
      },
      {
        "name": "Nick Anderson",
        "role": "Director",
        "email": "nick@wooldridgegroup.co.uk",
        "phone": "07836 653814"
      },
      {
        "name": "Sophie Bowsher",
        "role": "Project Manager",
        "email": "sophie.bowsher@wooldridgegroup.co.uk"
      },
      {
        "name": "Vince Padbury",
        "role": "Senior Surveyor",
        "email": "vince@wooldridgegroup.co.uk",
        "phone": "07769 746021"
      }
    ]
  }
]
