import React from 'react'

import { ContentContainer } from './styles'

const Content: React.FC<any> = ({ children, ...props }) => (
  <ContentContainer {...props}>{children}</ContentContainer>
)

export { Content }
