import { useMeeting, Constants } from "@videosdk.live/react-sdk";
import React, { useMemo } from "react";

const MediaControlsContainer = () => {
  const { toggleMic, toggleWebcam, startHls, stopHls, hlsState, meetingId, enableScreenShare , disableScreenShare , startRecording , stopRecording} =
    useMeeting();

  console.log(toggleMic, toggleWebcam, startHls, stopHls, hlsState, meetingId, enableScreenShare , disableScreenShare , startRecording , stopRecording)

  const { isHlsStarted, isHlsStopped, isHlsPlayable } = useMemo(
    () => ({
      isHlsStarted: hlsState === Constants.hlsEvents.HLS_STARTED,
      isHlsStopped: hlsState === Constants.hlsEvents.HLS_STOPPED,
      isHlsPlayable: hlsState === Constants.hlsEvents.HLS_PLAYABLE,
    }),
    [hlsState]
  );

  const _handleToggleHls = () => {
    if (isHlsStarted) {
      stopHls();
    } else if (isHlsStopped) {
      startHls({ quality: "high" });
    }
  };

  return (
    <div className="flex flex-col items-center gap-3 text-white">
      <h2 className="mt-14 text-2xl">Stream Status : <span className="text-green">{hlsState}</span></h2>
      {isHlsPlayable && <h2 className="text-2xl mb-5">Viewers will now be able to watch the stream.</h2>}
      <div className="flex flex-row justify-center items-center gap-5">
        <div className="flex flex-col justify-center items-center">
          <label  htmlFor="mic" className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center space-y-1.5">
            <input onClick={() => toggleMic()} id="mic" type="checkbox" className="hidden peer" />
            <div className="w-2/3 h-1.5 bg-green rounded-lg transition-all duration-300 origin-right peer-checked:w-full peer-checked:rotate-[-30deg] peer-checked:translate-y-[-5px]" />
            <div className="w-full h-1.5 bg-green rounded-lg transition-all duration-300 origin-center peer-checked:rotate-90 peer-checked:translate-x-4" />
            <div className="w-2/3 h-1.5 bg-green rounded-lg transition-all duration-300 origin-right peer-checked:w-full peer-checked:rotate-[30deg] peer-checked:translate-y-[5px]" />
          </label>
        <h3 className="text-l">Toggle Mic</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <label  htmlFor="cam" className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center space-y-1.5">
            <input onClick={() => toggleWebcam()} id="cam" type="checkbox" className="hidden peer" />
            <div className="w-2/3 h-1.5 bg-green rounded-lg transition-all duration-300 origin-right peer-checked:w-full peer-checked:rotate-[-30deg] peer-checked:translate-y-[-5px]" />
            <div className="w-full h-1.5 bg-green rounded-lg transition-all duration-300 origin-center peer-checked:rotate-90 peer-checked:translate-x-4" />
            <div className="w-2/3 h-1.5 bg-green rounded-lg transition-all duration-300 origin-right peer-checked:w-full peer-checked:rotate-[30deg] peer-checked:translate-y-[5px]" />
          </label>
        <h3 className="text-l">Toggle Webcam</h3>
        </div>
        <button
        onClick={() => enableScreenShare()}
        class="bg-green text-white px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-green active:bg-lime-600 focus:outline-none"
        >
        Screen Share On
      </button>
        <button
        onClick={() => disableScreenShare()}
        class="bg-red-300 text-white px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-red-500 active:bg-lime-600 focus:outline-none"
        >
        Screen Share Off
      </button>
      <div className="flex flex-col justify-center items-center">
          <label htmlFor="hls" className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center space-y-1.5">
            <input onClick={() => _handleToggleHls()} id="hls" type="checkbox" className="hidden peer" />
            <div className="w-2/3 h-1.5 bg-green rounded-lg transition-all duration-300 origin-right peer-checked:w-full peer-checked:rotate-[-30deg] peer-checked:translate-y-[-5px]" />
            <div className="w-full h-1.5 bg-green rounded-lg transition-all duration-300 origin-center peer-checked:rotate-90 peer-checked:translate-x-4" />
            <div className="w-2/3 h-1.5 bg-green rounded-lg transition-all duration-300 origin-right peer-checked:w-full peer-checked:rotate-[30deg] peer-checked:translate-y-[5px]" />
          </label>
        <h3 className="text-l">{isHlsStarted ? "End Stream" : "Go Live"}</h3>
        </div>
      </div>
    </div>
  );
};

export default MediaControlsContainer;