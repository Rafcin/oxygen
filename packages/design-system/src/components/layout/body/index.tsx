import React from 'react'

import { BodyContainer } from './styles'

const Body: React.FC<any> = ({ children }) => (
  <BodyContainer id="site-content">{children}</BodyContainer>
)

export { Body }
