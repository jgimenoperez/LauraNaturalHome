/* ==========================================================================
   Mediterranean Video Background Handler
   Fallback to canvas animation if video not available
   ========================================================================== */

class MediterraneanHeroVideo {
  constructor() {
    this.viewport = document.querySelector('.lnh-hero-viewport');
    if (!this.viewport) return;

    this.setupVideo();
    this.setupCanvasFallback();
  }

  setupVideo() {
    // Check if video exists in assets
    const videoEl = document.createElement('video');
    videoEl.autoplay = true;
    videoEl.muted = true;
    videoEl.loop = true;
    videoEl.preload = 'metadata';
    videoEl.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 0;
      opacity: 0.85;
    `;

    // Try to load video from assets
    const sources = [
      { src: 'assets/videos/mediterranean.mp4', type: 'video/mp4' },
      { src: 'assets/videos/mediterranean.webm', type: 'video/webm' },
    ];

    let hasSource = false;
    sources.forEach(({ src, type }) => {
      const source = document.createElement('source');
      source.src = src;
      source.type = type;
      videoEl.appendChild(source);
    });

    // Fallback if no video sources work
    videoEl.addEventListener('error', () => {
      videoEl.remove();
      this.createCanvasFallback();
    });

    this.viewport.insertBefore(videoEl, this.viewport.firstChild);
  }

  setupCanvasFallback() {
    // Create fallback canvas if video fails
    const canvas = document.createElement('canvas');
    canvas.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      display: none;
    `;
    this.viewport.insertBefore(canvas, this.viewport.firstChild);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }

  createCanvasFallback() {
    const canvas = document.querySelector('.lnh-hero-viewport canvas');
    if (!canvas) return;

    canvas.style.display = 'block';
    const ctx = canvas.getContext('2d');

    let animationFrame = null;
    const time = { current: 0 };

    const animate = () => {
      time.current += 0.002;

      // Mediterranean-inspired gradient animation
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

      // Base colors: terracotta to oliva
      const t = Math.sin(time.current) * 0.5 + 0.5;
      const t2 = Math.cos(time.current * 0.7) * 0.5 + 0.5;

      gradient.addColorStop(0, `rgba(216, 150, 122, ${0.8 + t * 0.2})`);
      gradient.addColorStop(0.5, `rgba(180, 90, 60, ${0.7 + t2 * 0.2})`);
      gradient.addColorStop(1, `rgba(118, 117, 79, ${0.6 + t * 0.2})`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add subtle noise/wave effect
      this.drawWaves(ctx, canvas.width, canvas.height, time.current);

      animationFrame = requestAnimationFrame(animate);
    };

    animate();
  }

  drawWaves(ctx, width, height, time) {
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;

    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      const amplitude = 20 + i * 10;
      const frequency = 0.01 + i * 0.005;
      const speed = time + i * 0.5;

      for (let x = 0; x <= width; x += 10) {
        const y = height * 0.5 + Math.sin(x * frequency + speed) * amplitude;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  new MediterraneanHeroVideo();
});

// Reinitialize on page render (for SPA routing)
window.initHeroVideo = () => {
  new MediterraneanHeroVideo();
};
