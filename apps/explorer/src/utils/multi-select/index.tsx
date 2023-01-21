import { useState } from 'react'

const useMultiSelect = ({ checkId = false }) => {
  const [selectedItems, setSelectedItems] = useState([])

  const handleSelect = (item) => {
    if (checkId) {
      if (!selectedItems.find((i) => i.id === item.id)) {
        setSelectedItems([...selectedItems, item])
      } else {
        setSelectedItems(selectedItems.filter((i) => i.id !== item.id))
      }
    } else {
      if (!selectedItems.find((i) => i === item)) {
        setSelectedItems([...selectedItems, item])
      } else {
        setSelectedItems(selectedItems.filter((i) => i.id !== item.id))
      }
    }
  }

  return { selectedItems, handleSelect }
}

export default useMultiSelect
