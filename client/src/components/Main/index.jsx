import { useContext, useEffect, useState } from "react";
import LiveChannels from "./LiveChannels";
import SectionTitle from "./SectionTitle";
import { useNavigate } from "react-router-dom";
import PrevStreams from "./PrevStreams";
import { AppContext } from "../../contexts/AppContext";

function MainContent() {

  const {setformData} = useContext(AppContext);
  const [livestreams, setlivestreams] = useState([])
  const [prevstreams, setprevstreams] = useState([])
  const navigate = useNavigate();
  useEffect(() => {
    // if(!localStorage.getItem('dev-token')){
    //     navigate('/auth')
    // }
    // else{
    //   //fetch data for livestreams and prevstreams
    //   // const {data} = axios.get('http://localhost:5000/streams')
    //   // setlivestreams(data.livestreams)
    //   // setprevstreams(data.prevstreams)
    //   // const {data} = axios.get('http://localhost:5000/userData', {headers: {token: {localStorage.getItem('dev-token')}}}
    //   // setformData(data)
    // }
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
