const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { RtcTokenBuilder, RtcRole } = require("agora-access-token");

const app = express();

app.use(cors());
app.use(express.json());

const APP_ID = process.env.AGORA_APP_ID;
const APP_CERTIFICATE = process.env.AGORA_APP_CERTIFICATE;

if (!APP_ID || !APP_CERTIFICATE) {
  console.error("Missing Agora Credentials");
  process.exit(1);
}
app.get("/",(req,res)=>{
  res.json({message:"Hello from Agora Token Server"})
})

app.post("/generate-token", (req, res) => {

  try {

    const { channelName, uid } = req.body;

    if (!channelName) {
      return res.status(400).json({ error: "Channel required" });
    }

    if (!uid || isNaN(uid)) {
      return res.status(400).json({ error: "Valid UID required" });
    }

    const expireTime = 3600;

    const token = RtcTokenBuilder.buildTokenWithUid(
      APP_ID,
      APP_CERTIFICATE,
      channelName,
      Number(uid),
      RtcRole.PUBLISHER,
      Math.floor(Date.now() / 1000) + expireTime
    );

    res.json({ token, appId: APP_ID });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }

});

app.listen(process.env.PORT, () =>
  console.log("Backend running on port", process.env.PORT)
);
