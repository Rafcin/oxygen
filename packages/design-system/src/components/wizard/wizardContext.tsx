import * as React from 'react'

import { WizardValues } from './types'

const WizardContext = React.createContext<WizardValues | null>(null)

if (process.env.NODE_ENV === 'development') {
  WizardContext.displayName = 'WizardContext'
}

export { WizardContext }
