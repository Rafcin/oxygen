import React from "react"

import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

import { Box } from "@mui/material"

export const Sortable: React.FC<any> = ({ children, ...props }) => {
  const sortable = useSortable({ id: props.id })
  const { attributes, listeners, setNodeRef, transform, transition } = sortable
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }
  return (
    <Box ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </Box>
  )
}
