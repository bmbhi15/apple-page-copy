"use client";

import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const isTablet = useMediaQuery({ query: "max-width: 1024px" });

  useGSAP(() => {
    if (!isTablet) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#showcase",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });
      timeline.to(".mask img", { transform: "scale(1.5)" }).to(".content", {
        opacity: 1,
        y: 0,
        ease: "power1.in",
      });
    }
  }, [isTablet]);

  return (
    <section id="showcase">
      <div className="media">
        <video src="/videos/game.mp4" playsInline autoPlay muted loop />
        <div className="mask">
          <img src="/mask-logo.svg" />
        </div>
      </div>
      <div className="content">
        <div className="wrapper ">
          <div className="w-full lg:w-1/3">
            <h2>Rocket chip.</h2>
            <div className="mt-10">
              <p>
                Introducing M4, the next generation of Apple silicon. M4 powers{" "}
              </p>
              <br />
              <p>
                It drives Apple Intelligence on iPad Pro, so you can write,
                create, and accomplish more with ease. All in a design that’s
                unbelievably thin, light, and powerful.
              </p>{" "}
              <br />
              <p>
                A brand-new display engine delivers breathtaking precision,
                color accuracy, and brightness. And a next-gen GPU with
                hardware-accelerated ray tracing brings console-level graphics
                to your fingertips.
              </p>
              <br />
              <p>Learn more about Apple Intelligence</p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 space-y-4 lg:space-y-15">
            <div>
              <p>Up to</p>
              <h3>4x faster</h3>
              <p>pro rendering performance than M2</p>
            </div>
            <div>
              <p>Up to</p>
              <h3>1.5x faster</h3>
              <p>CPU performance than M2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
