"use client";
import { useGSAP } from "@gsap/react";
import { performanceImages, performanceImgPositions } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { useRef, Suspense, useEffect } from "react";
import { Html } from "@react-three/drei";
import ModelSwitcherCopy from "./three/ModelSwitcherCopy";
import StudioLights from "./three/StudioLights";
import { Box, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { featureSequence, features } from "../constants";
import clsx from "clsx";
import { MacbookModel } from "./models/MacbookModel";
import { PresentationControls } from "@react-three/drei";
import { MacBookModel14 } from "./models/Macbook-14";
import { MacbookModel16 } from "./models/Macbook-16";
import { Group } from "three";
import useMacbookStore from "../store";
gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
  const { setVideoTexture } = useMacbookStore();
  const controlsConfig = {};
  const isMobile = useMediaQuery({ query: "max-width: 1024px" });
  const sectionRef = useRef(null);
  const groupRef = useRef<Group | null>(null);
  const macbookModelRef = useRef(null);
  useEffect(() => {
    featureSequence.forEach((feature) => {
      const v = document.createElement("video");

      Object.assign(v, {
        src: feature.videoPath,
        muted: true,
        playsInline: true,
        preload: "auto",
        crossOrigin: "anonymous",
      });

      v.load();
    });
  }, []);
  useGSAP(() => {
    const timeline1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top 20%",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });
    if (groupRef.current) {
      timeline1.to(groupRef.current.rotation, {
        y: Math.PI * 2,
        ease: "power1.inOut",
      });
    }

    const timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
    });
    timeline2
      .call(() => {
        setVideoTexture(featureSequence[0].videoPath);
      })
      .to(".box-1", {
        opacity: 1,
        y: 0,
        delay: 1,
      })
      .call(() => {
        setVideoTexture(featureSequence[1].videoPath);
      })
      .to(".box-2", {
        opacity: 1,
        y: 0,
      })
      .call(() => {
        setVideoTexture(featureSequence[2].videoPath);
      })
      .to(".box-3", {
        opacity: 1,
        y: 0,
      })
      .call(() => {
        setVideoTexture(featureSequence[3].videoPath);
      })
      .to(".box-4", {
        opacity: 1,
        y: 0,
      })
      .call(() => {
        setVideoTexture(featureSequence[4].videoPath);
      })
      .to(".box-5", {
        opacity: 1,
        y: 0,
      });
  }, []);
  return (
    <section id="features" ref={sectionRef}>
      <h2>See it all in a new light.</h2>
      <div className="">
        <Canvas
          id="f-canvas"
          camera={{ position: [0, 2, 4], fov: 50, near: 0.1, far: 100 }}
        >
          <group ref={groupRef}>
            <Suspense
              fallback={
                <Html>
                  <h1 className="text-white text-3xl uppercase">Loading...</h1>
                </Html>
              }
            >
              <MacbookModel scale={0.06} />
            </Suspense>
          </group>

          <ambientLight intensity={20} />
          <StudioLights />
        </Canvas>
        <div className="absolute inset-0">
          {features.map((item) => (
            <div
              key={item.id}
              className={clsx(`box box-${item.id}`, item.styles)}
            >
              <img src={item.icon} alt={item.highlight} />
              <p>
                <strong>{item.highlight}</strong> {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
