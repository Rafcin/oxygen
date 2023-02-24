import { keyframes } from "@mui/styled-engine"
import { styled } from "@mui/system"

import { DotProps } from "../types"

const pulse = keyframes`
    0% {
      transform: scale(1);
      opacity: 1;
    }
    45% {
      transform: scale(0.1);
      opacity: 0.7;
    }
    80% {
      transform: scale(1);
      opacity: 1;
    }
`

export const Dot = styled("span", {
  name: "Dot",
})<DotProps>(({ ...props }) => ({
  ...(props.size && {
    width: `${props.size}px`,
    height: `${props.size}px`,
  }),
  ...(props.color && {
    backgroundColor: props.color,
  }),
  margin: "2px",
  borderRadius: "100%",
  display: "inline-block",
  WebkitAnimationFillMode: "both",
  animationFillMode: "both",
  ...(props.first && {
    animation: `${pulse} 0.75s 0.12s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)`,
  }),
  ...(props.second && {
    animation: `${pulse} 0.75s 0.24s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)`,
  }),
  ...(props.third && {
    animation: `${pulse} 0.75s 0.36s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)`,
  }),
}))
