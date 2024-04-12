import LiveChannels from "./LiveChannels";
import SectionTitle from "./SectionTitle";

function MainContent() {
  return (
    <main className="w-full h-full scrollbar overflow-y-scroll px-[30px]">
      <div className="mx-auto max-w-[2000px] pb-[30px]">
        <div className="mt-[37px]">
          <SectionTitle title={["Live","Streams"]} />
          <LiveChannels />
        </div>
        <div className="mt-[37px]">
          <SectionTitle title={["Previous" , "Streams"]} />
          <LiveChannels />
        </div>
      </div>
    </main>
  );
}

export default MainContent;
