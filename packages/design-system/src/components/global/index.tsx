import GlobalStyles from '@mui/material/GlobalStyles'
import React from 'react'

import { dls } from '../../core/theme'

const Global: React.FC<any> = () => {
  return (
    <GlobalStyles
      styles={() => ({
        ...(dls.baseline as any),
      })}
    />
  )
}

export { Global }
