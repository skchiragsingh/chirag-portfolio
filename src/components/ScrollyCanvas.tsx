"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 120;

export default function ScrollyCanvas({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Preload images robustly
  useEffect(() => {
    let isCancelled = false;
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        const paddedIndex = String(i).padStart(3, "0");
        img.src = `/sequence/frame_${paddedIndex}_delay-0.066s.png`;
        img.onload = () => {
          if (isCancelled) return;
          loadedCount++;
          if (loadedCount === FRAME_COUNT) {
            setImages(loadedImages);
          }
        };
        // fallback in case of cache hit or error
        img.onerror = () => { loadedCount++; }
        loadedImages.push(img);
    }

    // Set images anyway so it draws partial if slow
    setImages(loadedImages);

    return () => { isCancelled = true; };
  }, []);

  const drawFrame = (index: number) => {
    if (!canvasRef.current || images.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const img = images[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    const hRatio = cw / iw;
    const vRatio = ch / ih;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (cw - iw * ratio) / 2;
    const centerShift_y = (ch - ih * ratio) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, 0, 0, iw, ih, centerShift_x, centerShift_y, iw * ratio, ih * ratio);
  };

  // Initial draw once first image is loaded
  useEffect(() => {
    if (images.length > 0 && images[0]) {
      if (images[0].complete) {
        drawFrame(0);
      } else {
        images[0].addEventListener('load', () => drawFrame(0));
      }
    }
  }, [images]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length < FRAME_COUNT) return;
    const frameIndex = Math.min(FRAME_COUNT - 1, Math.floor(latest * FRAME_COUNT));
    requestAnimationFrame(() => drawFrame(frameIndex));
  });

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-black">
      <div className="sticky top-0 w-full h-screen overflow-hidden z-0">
        <canvas
          ref={canvasRef}
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-80"
        />
        {/* Gradients blending with background */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
      </div>
      {children}
    </div>
  );
}
