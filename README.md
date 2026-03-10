# 🎧 FFprobe Media Properties

> Instantly inspect **audio & media file properties** — codec, sample rate, channels, duration, and bitrate — using `ffprobe` in Node.js.

---

## 📋 Prerequisites

| Requirement | Details                                     |
| ----------- | ------------------------------------------- |
| **Node.js** | Any modern version                          |
| **ffprobe** | Included via `ffprobe-static` dependency    |
| **ffmpeg**  | Optional — only needed for audio conversion |

---

## ⚙️ Installation

**1. Clone the repository**

```bash
git clone https://github.com/MuhammadTalhaKhan007/media-properties-ffprobe.git
cd media-properties-ffprobe
```

**2. Install dependencies**

```bash
npm install
```

---

## ⚡ Usage

**1. Set your target file**

Open `index.js` and update the file path:

```js
// Change this to the file you want to inspect
const filePath = "./Call-Center.mp3";
```

**2. Run the script**

```bash
node index.js
```

**3. View the output**

```json
{
  "codec": "pcm_s16le",
  "sampleRate": "8000 Hz",
  "channels": "1",
  "duration": "689.616 seconds",
  "bitRate": "128000 bps"
}
```

---

## 📁 Supported Formats

`.mp3` &nbsp;·&nbsp; `.wav` &nbsp;·&nbsp; `.m4a` &nbsp;·&nbsp; `.flac` &nbsp;·&nbsp; `.ogg` &nbsp;·&nbsp; and any format supported by `ffprobe`

---

## 📝 Notes

- Make sure your audio file exists at the specified path before running.
- Additional properties can be extracted by editing the script to include more `ffprobe` fields.
- `ffprobe-static` bundles the binary, so no separate system install is required.
