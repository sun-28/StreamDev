import Picker from "emoji-picker-react"
import useEmojiPicker from "../hooks/useEmojiPicker"

const EmojiPickerButton = ({ EmojiPick }) => {
  const {
    pickerRef,
    toggleEmojiPicker,
    isOpen,
    handleEmojiClick
  } = useEmojiPicker(EmojiPick)

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleEmojiPicker}
        className="p-1 rounded  hover:bg-gray-400/50"
      >
      </button>
      {isOpen && (
        <div ref={pickerRef} className="absolute bottom-8 right-0 ">
          <Picker
            onEmojiClick={handleEmojiClick}
            disableSkinTonePicker={true}
          />
        </div>
      )}
    </div>
  )
}

export default EmojiPickerButton
