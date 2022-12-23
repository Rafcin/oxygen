import React from "react"

import { Dot } from "./styles"
import type { PulseProps } from "./types"

const Pulse: React.FC<PulseProps> = ({ ...props }) => (
  <span>
    <Dot first={true} {...props} />
    <Dot second={true} {...props} />
    <Dot third={true} {...props} />
  </span>
)

export { Pulse }
