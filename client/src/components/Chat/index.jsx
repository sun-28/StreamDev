import React , {useEffect, useRef, useState} from "react"
import ChatMessageBox from "./ChatMessageBox"
import SendMessageForm from "./SendMessageForm"
import { io } from "socket.io-client";

const Chat = ({id}) => {
    const socket = io('localhost:8080');
    const [msg, setsmsg] = useState([])
    const send = (message) => {
        let cid = id;
        socket.emit('message',cid,message) 
    }
    
      useEffect(() => {
        socket.on('message',(cid,message) => { 
          if (cid == id) 
            setsmsg(prev => [...prev, {id: prev.length, author: {username: "Streamer"}, content: message}])
        })
        return () => {
          socket.disconnect()
        }
      }, [msg])
        
    
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
