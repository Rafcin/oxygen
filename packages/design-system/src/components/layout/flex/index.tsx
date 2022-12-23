import React from 'react'

import { FlexContainer } from './styles'
import { IFlex } from './types'

const Flex: React.FC<IFlex> = (props: any) => (
  <FlexContainer>{props.children}</FlexContainer>
)

export { Flex }
