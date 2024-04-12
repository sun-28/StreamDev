import React , {useState} from "react"
import ChatMessageBox from "./ChatMessageBox"
import SendMessageForm from "./SendMessageForm"

const Chat = () => {
    const [msg, setsmsg] = useState([])
    const send = (message) => {
        setsmsg(prev => [...prev, {id: prev.length, author: {username: "User"}, content: message}])
        console.log(msg)
    }
  return (
    <div className="grid mt-12 place-items-center">        
        <div className="relative w-full px-4 py-3 rounded-lg bg-slate-900 opacity-80">
        <ChatMessageBox messages={msg} />
        <SendMessageForm send={send} className="mt-4" />
        </div>
    </div>
  )
}


export default Chat
