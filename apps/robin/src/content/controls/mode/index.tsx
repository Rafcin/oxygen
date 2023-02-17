import { Button, useTheme } from '@mui/material'
import { useColorScheme } from '@mui/material/styles'
import React from 'react'
import { IoMoon, IoSunny } from 'react-icons/io5'

export const Mode: React.FC<any> = React.memo(
  ({ children, ...props }: { children?: React.ReactNode }) => {
    const theme = useTheme<any>()
    const { mode, setMode } = useColorScheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
      setMounted(true)
    }, [])
    return (
      <Button
        variant="outlined"
        onClick={() => {
          if (mode === 'light') {
            setMode('dark')
          } else {
            setMode('light')
          }
        }}
      >
        {mode === 'dark' ? (
          <IoSunny style={{ width: '22px', height: '22px' }} />
        ) : (
          <IoMoon style={{ width: '22px', height: '22px' }} />
        )}
      </Button>
    )
  }
)
