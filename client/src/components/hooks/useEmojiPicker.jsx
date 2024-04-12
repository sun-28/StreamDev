import { useRef, useState } from "react"

export default function useEmojiPicker(handleEmojiPick) {
  const [isOpen, setIsOpen] = useState(false)
  const pickerRef = useRef(null)

  const handleEmojiClick = (_, { emoji }) => {
    handleEmojiPick(emoji)
  }

  const toggleEmojiPicker = () => {
    setIsOpen(isOpen => !isOpen)
  }

  return {
    pickerRef,
    isOpen,
    toggleEmojiPicker,
    handleEmojiClick
  }
}
