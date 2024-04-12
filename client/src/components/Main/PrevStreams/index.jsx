import { useState } from "react";
import useResponsiveGrid from "../../hooks/useResponsiveGrid";
import Channel from "./Channel";
import ShowMore from "../ShowMore";

export default function PrevStreams({prevstreams}) {
  const [showMore, setShowMore] = useState(false);
  const { cols, style } = useResponsiveGrid([6, 5, 4, 3, 2]);
  return (
    <>
      <div className="grid gap-[20px_10px]" style={style}>
        {prevstreams.map((stream, index) => {
            return <Channel key={index} channel={stream} />
        })}
      </div>
      <ShowMore showMore={showMore} setShowMore={setShowMore} />
    </>
  );
}
