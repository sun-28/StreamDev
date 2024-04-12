import { MeetingProvider } from "@videosdk.live/react-sdk";
import React from "react";

import { useParams } from "react-router-dom";
import { authToken } from "../api";

import MediaControlsContainer from "./MediaControlsContainer";
import ParticipantsGridContainer from "./ParticipantsGridContainer";

const SpeakerScreenContainer = () => {
  const {meetingId} = useParams();
  return (
    <div className="flex flex-col justify-center items-center">
    <MeetingProvider
      token={authToken}
      config={{
        meetingId,
        name: "C.V. Raman",
        micEnabled: true,
        webcamEnabled: true,
      }}
      joinWithoutUserInteraction
      >
      <ParticipantsGridContainer />
      <MediaControlsContainer/>
    </MeetingProvider>
      </div>
  );
};

export default SpeakerScreenContainer;
