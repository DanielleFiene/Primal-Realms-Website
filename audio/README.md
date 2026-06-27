# Audio Files

## Setup Instructions

Place your ambient audio track here as `ambient.mp3`.

### Requirements:
- **Filename**: `ambient.mp3` (must match path in `index.html`)
- **Format**: MP3 (WebM, OGG, WAV supported as fallback)
- **Duration**: 30+ seconds (recommended for loop)
- **Bitrate**: 128-192 kbps (balance between quality and file size)
- **Atmosphere**: Low, ambient drone with distant flute — warm, mysterious, ancient

### Connection:
The audio file is referenced in:
- `index.html` → `<audio>` element
- `maps.js` → `audioConfig.sourceFile = 'audio/ambient.mp3'`

No additional setup needed. The toggle button will handle playback and looping.

### Tips:
- Keep file size under 1MB for fast GitHub Pages load
- Test the audio loop locally before pushing to repo
- Use an audio editor (Audacity, FFmpeg) to create seamless loops
