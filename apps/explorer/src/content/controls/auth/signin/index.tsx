import { Box, Button, ListItemButton } from '@mui/material'
import { default as Grid } from '@mui/material/Unstable_Grid2'
import {
  AspectRatio,
  CardContainer,
  CardContent,
  CardCover,
} from '@oxygen/design-system'
import Image from 'next/image'
import hash from 'object-hash'
import React from 'react'

export const SignIn: React.FC<any> = React.memo(
  ({ children, ...props }: { children?: React.ReactNode }) => {
    return (
      <span>
        <Button>Sign in with GitHub</Button>
      </span>
    )
  }
)
