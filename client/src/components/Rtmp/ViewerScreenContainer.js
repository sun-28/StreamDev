import React, { useEffect, useMemo, useRef } from "react";
import {
  MeetingConsumer,
  Constants,
  MeetingProvider,
  useMeeting,
} from "@videosdk.live/react-sdk";
import Hls from "hls.js";

import { useParams } from "react-router-dom";
import { authToken } from "./api";
import axios from "axios";

const HLSPlayer = ({sethls}) => {
  const { hlsUrls, hlsState } = useMeeting();
  const playerRef = useRef(null);

  const hlsPlaybackHlsUrl = useMemo(() => hlsUrls.playbackHlsUrl, [hlsUrls]);

  const handle = async (hlsPlaybackHlsUrl) => {
    axios.post('http://localhost:5000/aiml/ml-transcript', {url:hlsPlaybackHlsUrl})
  };

  useEffect(() => {
    sethls(hlsPlaybackHlsUrl);
    handle(hlsPlaybackHlsUrl);
    if (Hls.isSupported()) {
      const hls = new Hls({
        capLevelToPlayerSize: true,
        maxLoadingDelay: 4,
        minAutoBitrate: 0,
        autoStartLoad: true,
        defaultAudioCodec: "mp4a.40.2",
      });
      let player = document.querySelector("#hlsPlayer");

      hls.loadSource(hlsPlaybackHlsUrl);
      hls.attachMedia(player);
    } else {
      if (typeof playerRef.current?.play === "function") {
        playerRef.current.src = hlsPlaybackHlsUrl;
        playerRef.current.play();
      }
    }
  }, [hlsPlaybackHlsUrl, hlsState]);

  return (
    <video
      ref={playerRef}
      id="hlsPlayer"
      autoPlay
      controls
      playsInline
      playing
      onError={(err) => console.log(err, "hls video error")}
    ></video>
  );
};

const ViewerScreenContainer = ({sethls}) => {
  const { meetingId } = useParams();
  return (
    <MeetingProvider
      token={authToken}
      config={{ meetingId, name: "C.V. Raman", mode: "VIEWER" }}
      joinWithoutUserInteraction
    >
      <MeetingConsumer>
        {({ hlsState }) =>
          hlsState === Constants.hlsEvents.HLS_PLAYABLE ? (
            <HLSPlayer sethls={sethls}/>
          ) : (
            <p>Waiting for host to start stream...</p>
          )
        }
      </MeetingConsumer>
    </MeetingProvider>
  );
};

export default ViewerScreenContainer;
