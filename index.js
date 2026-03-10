const ffprobe = require("ffprobe");
const ffprobeStatic = require("ffprobe-static");

const medicalFilePath = "./Complex-Medical-Dictation-(AI).mp3";
const callCenterFilePath = "./Call-Center-Audio-MP3.mp3";

ffprobe(medicalFilePath, { path: ffprobeStatic.path })
  .then((info) => {
    const stream = info.streams[0];

    const audioInfo = {
      medicalAudio: "Complex-Medical-Dictation-(AI).mp3",
      codec: `${stream.codec_name}`,
      sampleRate: `${stream.sample_rate} Hz`,
      channels: `${stream.channels}`,
      duration: `${stream.duration} seconds`,
      bitRate: `${stream.bit_rate} bps`,
    };

    console.log(audioInfo);
  })
  .catch((err) => {
    console.error("Error:", err);
  });

ffprobe(callCenterFilePath, { path: ffprobeStatic.path })
  .then((info) => {
    const stream = info.streams[0];

    const audioInfo = {
      callCenterAudio: "Call-Center-Audio.mp3",
      codec: `${stream.codec_name}`,
      sampleRate: `${stream.sample_rate} Hz`,
      channels: `${stream.channels}`,
      duration: `${stream.duration} seconds`,
      bitRate: `${stream.bit_rate} bps`,
    };

    console.log(audioInfo);
  })
  .catch((err) => {
    console.error("Error:", err);
  });
