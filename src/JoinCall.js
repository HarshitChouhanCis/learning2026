import React, { useState } from "react";
import VideoCall from "./VideoCall";

const JoinCall = () => {

  const [channel, setChannel] = useState("");
  const [uid, setUid] = useState("");
  const [join, setJoin] = useState(false);

  if (join) {
    return <VideoCall channelName={channel} uid={uid} />;
  }

  return (
    <div style={{ padding: 30 }}>

      <h2>Join Video Call</h2>

      <input
        placeholder="Channel Name"
        value={channel}
        onChange={(e) => setChannel(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="UID"
        value={uid}
        onChange={(e) => setUid(e.target.value)}
      />

      <br /><br />

      <button
        onClick={() => {

          if (!channel || !uid) {
            alert("Enter channel & uid");
            return;
          }

          setJoin(true);
        }}
      >
        Join Call
      </button>

    </div>
  );
};

export default JoinCall;
