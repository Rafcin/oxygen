import { useState } from 'react'

const useMultiSelect = ({ checkId = false, idName = 'id' }) => {
  const [selectedItems, setSelectedItems] = useState([])

  const handleSelect = (item) => {
    if (checkId) {
      if (!selectedItems.find((i) => i[idName] === item[idName])) {
        setSelectedItems([...selectedItems, item])
      } else {
        setSelectedItems(selectedItems.filter((i) => i[idName] !== item[idName]))
      }
    } else {
      if (!selectedItems.find((i) => i === item)) {
        setSelectedItems([...selectedItems, item])
      } else {
        setSelectedItems(selectedItems.filter((i) => i !== item))
      }
    }
  }

  const reset = () => {
    setSelectedItems([])
  }

  return { selectedItems, handleSelect, reset }
}

export default useMultiSelect
