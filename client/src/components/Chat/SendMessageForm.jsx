import { useState } from "react"
import EmojiPickerButton from "./EmojiPickerButton"

const MAX_MESSAGE_LENGTH = 300

const SendMessageForm = ({send}) => {
  
    const [message, setMessage] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    const filteredMessage = message.trim().slice(0, MAX_MESSAGE_LENGTH)
    send(filteredMessage)
    setMessage("")
  }

    const emoji = (emoji) => {
        setMessage(msg => message.concat(emoji))
    }
  return (
    <form  onSubmit={handleSubmit}>
      <div className="relative">
        <input
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="w-full p-2 rounded bg-slate-700 focus:outline-none focus:ring-input-border-color-focus focus:ring-2"
          placeholder="Send a chat message"
        />
        <div className="absolute inset-y-0 right-2 inline-flex items-center bg-slate-700">
          <EmojiPickerButton
            EmojiPick={emoji}
          />
        </div>
      </div>

      <button
        className="bg-green p-2 float-right mt-2 rounded-md"
        type="submit"
      >
        Send
      </button>
    </form>
  )
}

export default SendMessageForm
