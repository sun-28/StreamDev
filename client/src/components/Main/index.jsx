import { useEffect, useState } from "react";
import LiveChannels from "./LiveChannels";
import SectionTitle from "./SectionTitle";
import { useNavigate } from "react-router-dom";
import PrevStreams from "./PrevStreams";

function MainContent() {
  const [livestreams, setlivestreams] = useState([])
  const [prevstreams, setprevstreams] = useState([])
  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem('dev-token')){
        // navigate('/auth')
    }
    else{

    }
  }, [])
 
  return (
    
    <main className="w-full h-full scrollbar overflow-y-scroll px-[30px]">
      <div className="mx-auto max-w-[2000px] pb-[30px]">
      <div className='mb-12 flex justify-center items-center w-full mt-12'>
            <button 
                onClick={() => {navigate('/stream/create')}}
            className="cursor-pointer transition-all 
                bg-gray-700 text-white px-6 py-2 rounded-lg
                border-green
                border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none">
                Go Live
            </button>
          </div>
        <div className="mt-[37px]">
          <SectionTitle title={["Live","Streams"]} />
          <LiveChannels livestreams={livestreams}/>
        </div>
        <div className="mt-[37px]">
          <SectionTitle title={["Previous" , "Streams"]} />
          <PrevStreams prevstreams={prevstreams}/>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
