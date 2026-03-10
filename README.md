# FFprobe Media Properties

This project allows you to quickly check **media/audio properties** (codec, sample rate, channels, duration, bitrate) using `ffprobe` in Node.js.

---

## Prerequisites

- Node.js installed
- `ffprobe` installed via `ffprobe-static` (included in dependencies)
- `ffmpeg` installed on your system (optional if you want to convert audio)

---

## Installation

1. Clone the repo:

```bash
git clone https://github.com/MuhammadTalhaKhan007/media-properties-ffprobe.git
cd media-properties-ffprobe
```

2. Install dependencies:

```bash
npm install
```

## Usage

1. Open index.js and change the file path to your audio file:

```bash
// Change this to the file you want to inspect
const filePath = "./Call-Center.mp3";
```

2. Run the script:

```bash
node index.js
```

3. The console will display the audio properties:

```bash
{
  "codec": "pcm_s16le",
  "sampleRate": "8000 Hz",
  "channels": "1",
  "duration": "689.616 seconds",
  "bitRate": "128000 bps"
}
```

## Notes

- Make sure your audio file exists at the specified path.
- Works with `.mp3`, `.wav`, `.m4a`, and other common audio formats supported by ffprobe.
- You can edit the script to print additional properties if needed.
