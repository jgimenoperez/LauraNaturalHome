# Hero Video Setup Guide

## Overview

The home page features a fullscreen Mediterranean hero viewport with video background. The video handler provides:
- Native HTML5 video support (MP4, WebM)
- Automatic fallback to canvas-based animated gradient
- Responsive design for all devices
- 85% opacity overlay for text readability

## Adding Your Video

### Option 1: Add MP4 Video (Recommended)

1. Create `assets/videos/` folder:
```
lauranaturalhome_claude_haiku/
  assets/
    videos/
      mediterranean.mp4
      mediterranean.webm (optional, for better browser support)
```

2. Video specifications:
   - **Format**: MP4 (H.264) or WebM
   - **Resolution**: 1920x1080 or higher for quality
   - **Duration**: 15-30 seconds (loops continuously)
   - **File size**: Keep under 10MB for web (compress with Handbrake or ffmpeg)
   - **Content**: Mediterranean landscape (coastal views, olive groves, warm sunlight)

3. **FFmpeg compression example**:
```bash
# Convert to MP4 with good quality/size balance
ffmpeg -i your-video.mp4 -c:v libx264 -preset slow -crf 22 -c:a aac -b:a 128k mediterranean.mp4

# Convert to WebM for better compression
ffmpeg -i your-video.mp4 -c:v libvpx-vp9 -b:v 1000k -c:a libopus -b:a 128k mediterranean.webm
```

### Option 2: Stock Video Sources

Free Mediterranean video resources:
- **Pexels Videos**: pexels.com/videos (search "Mediterranean coast")
- **Pixabay**: pixabay.com/videos
- **Unsplash**: unsplash.com/napi/videos
- **Coverr**: coverr.co

Recommended keywords:
- "Mediterranean coast"
- "Olive grove"
- "Terracotta landscape"
- "Coastal scenery"
- "Warm sunlight"

## Video Handler Behavior

### Primary: Native Video
If video files exist in `assets/videos/`:
- Automatically loads `mediterranean.mp4` or `mediterranean.webm`
- Plays on autoplay with mute (required for browsers)
- Loops continuously
- 85% opacity for overlay effect

### Fallback: Canvas Animation
If video fails to load or files don't exist:
- Animated gradient background (terracotta → oliva)
- Subtle wave animation
- Smooth color transitions
- No performance impact

## Browser Support

| Browser | MP4 | WebM | Canvas Fallback |
|---------|-----|------|-----------------|
| Chrome  | ✓   | ✓    | ✓               |
| Firefox | ✓   | ✓    | ✓               |
| Safari  | ✓   | ✗    | ✓               |
| Edge    | ✓   | ✗    | ✓               |
| Mobile  | ✓   | ~    | ✓               |

**Tip**: Include both MP4 and WebM for best browser coverage and file size optimization.

## Performance Optimization

### Video File Size
- Target: 2-5MB for good quality
- Use constant rate factor (CRF) 22-28 for H.264
- Compress audio to 128kbps AAC

### Mobile Optimization
- Video loads with `preload="metadata"` (minimal bandwidth)
- Autoplay muted for mobile compatibility
- Canvas fallback on devices with video issues

### Testing
```javascript
// Check if video loaded successfully (console):
const video = document.querySelector('.lnh-hero-viewport video');
console.log('Video loaded:', video.readyState > 0);
```

## Styling Customization

### Opacity
Edit in `hero.css`:
```css
.lnh-hero-viewport video {
  opacity: 0.85;  /* Change this value (0-1) */
}
```

### Overlay Effects
The hero has two overlay layers:
1. **Radial gradient overlay** — Creates depth and focus
2. **Grain texture overlay** — Adds visual interest

Customize in `hero.css` under `::before` and `::after` pseudo-elements.

### Text Styling
Text shadow and color are defined in `.lnh-hero-headline` and `.lnh-hero-subheadline`. Adjust:
- Font size (uses `clamp()` for responsiveness)
- Text shadow (opacity, blur, offset)
- Colors (white variant: `#FFE5D0`)

## Accessibility Notes

- Video is decorative (not essential content)
- All important text is overlaid and readable
- Canvas fallback ensures experience without video
- No sound required (muted autoplay)
- Mobile devices get simplified version if video fails

## Troubleshooting

### Video not playing
- Check file format (MP4 or WebM)
- Verify video codec: H.264 for MP4, VP9 for WebM
- Check browser console for errors
- Fallback canvas animation will display

### Video too large/slow
- Reduce resolution to 1280x720
- Increase CRF to 26-28 (lower quality, smaller file)
- Use ffmpeg to compress: `ffmpeg -i input.mp4 -c:v libx264 -preset slow -crf 24 output.mp4`

### Canvas animation not smooth
- Check browser performance
- Reduce wave complexity (edit in `video-handler.js`)
- Test on different devices

## Next Steps

1. Obtain or create Mediterranean video (~1920x1080, 15-30 sec)
2. Compress to MP4 (target 3-5MB)
3. Place in `assets/videos/mediterranean.mp4`
4. Test in browser (should autoplay and loop)
5. (Optional) Add WebM version for better browser support
