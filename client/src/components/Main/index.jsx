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
