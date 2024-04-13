import React, { useEffect, useState } from 'react'
import { io } from "socket.io-client";
import Editor from '@monaco-editor/react';
import axios from 'axios';
const Code = ({hls}) => {
    const socket = io('localhost:8080');
    const [lcode, setlcode] = useState('console.log("hello")')
    // const handle = async () => {
    //   console.log(hls)
    //   await axios.post('http://localhost:5000/aiml/ml-transcript', {hls})
    // }
    // useEffect(() => {
    //   handle();
    // }, [])
      setInterval(() => {
        socket.emit('code')
      }, 10000)
      useEffect(() => {
        socket.on('code',(code) => { 
          console.log(code)
            setlcode(code);
        })
        return () => {
          socket.disconnect()
        }
      }, [lcode])
  return (
    <div className='flex justify-center items-center'>
      <Editor height="50vh" theme="vs-dark" defaultLanguage="javascript" value={lcode}  options={{ readOnly: true }}/>;
    </div>
  )
}

export default Code
