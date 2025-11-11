"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, []);
  return (
    <section id="hero">
      <div>
        <h1>MacBook Pro</h1>
        <Image
          src="/title.png"
          alt="Built for Apple Intelligence"
          height={400}
          width={700}
        />
        <video
          ref={videoRef}
          src="/videos/hero.mp4"
          autoPlay
          muted
          playsInline
        />
        <button>Buy</button>
        <p>From $1599 or $133.25/mo for 12 mo.</p>
      </div>
    </section>
  );
};

export default Hero;
