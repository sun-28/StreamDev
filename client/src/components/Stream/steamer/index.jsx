import React, { useState }from 'react'
import CreateStream from './CreateStream'
import { useNavigate } from 'react-router-dom'
const Dashboard = () =>{
  const navigate = useNavigate();
  const [streams, setstreams] = useState([{title: 'Stream 1', description: 'This is the first stream'}, {title: 'Stream 2', description: 'This is the second stream'}])
  return (
    <div className='mt-12 flex w-full h-full items-center flex-col'>
          <div className='mb-12'>
            <button 
                onClick={() => {navigate('/stream/create')}}
            className="cursor-pointer transition-all 
                bg-gray-700 text-white px-6 py-2 rounded-lg
                border-green
                border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none">
                Create Stream
            </button>
          </div>
          <div>
            <h2 className='text-3xl text-green'>Previous Streams</h2>
            <div>
              {streams.map((stream, index) => {
                return (
                  <div key={index}>
                    <h3>{stream.title}</h3>
                    <p>{stream.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
    </div>
  )
}

export default Dashboard
