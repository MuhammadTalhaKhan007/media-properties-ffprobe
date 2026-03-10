const ffprobe = require("ffprobe");
const ffprobeStatic = require("ffprobe-static");

const filePath = "./Call-Center-Audio.mp3"; // Change me

ffprobe(filePath, { path: ffprobeStatic.path })
  .then((info) => {
    const stream = info.streams[0];

    const audioInfo = {
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
