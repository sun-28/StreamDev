import { useMeeting } from "@videosdk.live/react-sdk";
import React, { useMemo } from "react";
import SingleParticipantContainer from "./SingleParticipantContainer";

const ParticipantsGridContainer = () => {
  const { participants } = useMeeting();

  const participantIds = useMemo(
    () => [...participants.keys()],
    [participants]
  );

  return (
    <div className="flex justify-center w-full h-[50vh]">
      {participantIds.map((participantId) => (
        <SingleParticipantContainer
          {...{ participantId, key: participantId }}
        />
      ))}
    </div>
  );
};

export default ParticipantsGridContainer;
