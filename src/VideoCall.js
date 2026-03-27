import React, { useEffect, useRef } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";

const VideoCall = ({ channelName, uid }) => {

  const localRef = useRef(null);
  const remoteRef = useRef(null);

  const clientRef = useRef(null);
  const localTracksRef = useRef([]);

  useEffect(() => {

    const startCall = async () => {

      try {

        const client = AgoraRTC.createClient({
          mode: "rtc",
          codec: "vp8"
        });

        clientRef.current = client;

        await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true
        });

        const res = await fetch("http://localhost:5000/generate-token", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            channelName,
            uid: Number(uid)
          })
        });

        const data = await res.json();

        await client.join(
          data.appId,
          channelName,
          data.token,
          Number(uid)
        );

        const tracks = await AgoraRTC.createMicrophoneAndCameraTracks();
        localTracksRef.current = tracks;

        tracks[1].play(localRef.current);

        await client.publish(tracks);

        client.on("user-published", async (user, mediaType) => {

          await client.subscribe(user, mediaType);

          if (mediaType === "video") {
            user.videoTrack.play(remoteRef.current);
          }

          if (mediaType === "audio") {
            user.audioTrack.play();
          }

        });

        client.on("user-left", () => {
          remoteRef.current.innerHTML = "";
        });

      } catch (error) {
        console.error("AGORA ERROR =>", error);
        alert(error.message || "Call failed");
      }
    };

    startCall();

    return async () => {

      localTracksRef.current.forEach(track => {
        track.stop();
        track.close();
      });

      await clientRef.current?.leave();

    };

  }, [channelName, uid]);

  const leaveCall = async () => {

    localTracksRef.current.forEach(track => {
      track.stop();
      track.close();
    });

    await clientRef.current?.leave();

    window.location.reload();
  };

  return (
    <div>

      <h3>Channel: {channelName}</h3>

      <div style={{ display: "flex", gap: 20 }}>

        <div>
          <h4>Local</h4>
          <div ref={localRef} style={{ width: 300, height: 200 }} />
        </div>

        <div>
          <h4>Remote</h4>
          <div ref={remoteRef} style={{ width: 300, height: 200 }} />
        </div>

      </div>

      <br />

      <button onClick={leaveCall}>
        End Call
      </button>

    </div>
  );
};

export default VideoCall;
