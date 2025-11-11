"use client";
import Image from "next/image";

const Hero = () => {
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
        <video src="/videos/hero.mp4" autoPlay muted playsInline />
      </div>
    </section>
  );
};

export default Hero;
