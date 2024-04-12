import React from "react";
import Chat from "../../Chat";
import ViewerScreenContainer from "../../Rtmp/ViewerScreenContainer";

const Stream = () => {
  return (
    <>
      <div className="flex flex-row w-full h-full m-0">
        <div className="w-3/4 aspect-video m-12">
          <ViewerScreenContainer />
        </div>
        <div className="w-1/4 mr-5 aspect-auto">
          <Chat />
        </div>
      </div>
    </>
  );
};

export default Stream;
