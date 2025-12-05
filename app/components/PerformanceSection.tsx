"use client";
import { useGSAP } from "@gsap/react";
import { performanceImages, performanceImgPositions } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const PerformanceSection = () => {
  const isTablet = useMediaQuery({ query: "max-width: 1024px" });
  const sectionRef = useRef(null);
  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const el = sectionRef.current;

      gsap.fromTo(
        ".content p",
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".content p",
            start: "top bottom",
            end: "top center",
            scrub: 1.5,
            invalidateOnRefresh: true,
          },
        }
      );

      const tl = gsap.timeline({
        defaults: { duration: 3, ease: "power1.out", overwrite: "auto" },
        scrollTrigger: {
          trigger: el,
          start: "top 20%",
          end: "15% top",
          scrub: 2,
          invalidateOnRefresh: true,
        },
      });

      performanceImgPositions.forEach((item) => {
        if (item.id == "p5") return;
        const selector = `.${item.id}`;
        if (item.left) {
          const pos = { left: `${item.left}%`, bottom: `${item.bottom}%` };
          tl.to(selector, pos, 0);
        } else if (item.right) {
          const pos = {
            right: `${item.right}%`,
            bottom: `${item.bottom}%`,
          };
          tl.to(selector, pos, 0);
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="performance" ref={sectionRef}>
      <h2>Next-level graphics performance. Game on.</h2>
      <div className="wrapper">
        {performanceImages.map((item) => {
          return (
            <img
              key={item.id}
              src={item.src}
              className={item.id}
              alt="this is an image"
            />
          );
        })}
      </div>
      <div className="content">
        <p>
          Run graphics-intensive workflows with a responsiveness that keeps up
          with your imagination. The M4 family of chips features a GPU with a
          second-generation hardware-accelerated ray tracing engine that renders
          images faster, so{" "}
          <span className="text-white">
            {" "}
            gaming feels more immersive and realistic than ever.
          </span>
        </p>
        <br />
        <p>
          And Dynamic Caching optimizes fast on-chip memory to dramatically
          increase average GPU utilization — driving a huge performance boost
          for the most demanding pro apps and games.
        </p>
      </div>
    </section>
  );
};

export default PerformanceSection;
