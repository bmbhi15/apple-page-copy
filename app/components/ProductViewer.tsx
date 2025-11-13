"use client";
import { Box, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MacBookModel14 } from "./models/Macbook-14";
import StudioLights from "./three/StudioLights";
import { useState } from "react";
import clsx from "clsx";
import useMacbookStore from "../store";
import ModelSwitcher from "./three/ModelSwitcher";
import { useMediaQuery } from "react-responsive";

enum MacbookModelColorsName {
  SPACE_BLACK = "Space Black",
  JET_GRAY = "Jet Gray",
}
enum MacbookModelScaleOptions {
  SMALL = 0.06,
  BIG = 0.08,
}
enum MacbookModelSizeOptions {
  __14_INCH = "14",
  __16_INCH = "16",
}
enum MacbookModelColorOptions {
  JET_GRAY = "#000000",
  SPACE_BLACK = "#FFFFFF",
}
type MacbookModelState = {
  color: MacbookModelColorOptions;
  colorName: MacbookModelColorsName;
  size: MacbookModelSizeOptions;
  scale: MacbookModelScaleOptions;
};
const ProductViewer = () => {
  const [macbookState, setMacbookState] = useState<MacbookModelState>({
    color: MacbookModelColorOptions.JET_GRAY,
    colorName: MacbookModelColorsName.JET_GRAY,
    size: MacbookModelSizeOptions.__14_INCH,
    scale: MacbookModelScaleOptions.SMALL,
  });
  const { color, setColor, scale, setScale } = useMacbookStore();
  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });
  return (
    <section id="product-viewer">
      <h2>Take a closer look.</h2>
      <div className="controls space-y-5">
        <p className="info text-center">
          Macbook Pro {macbookState.size} in {macbookState.colorName}
        </p>
        <div className="flex flex-row  justify-center space-x-5">
          <div className="color-control">
            <div
              className={clsx(
                {
                  active:
                    macbookState.color === MacbookModelColorOptions.JET_GRAY,
                },
                "bg-neutral-900"
              )}
              onClick={() => {
                setMacbookState({
                  ...macbookState,
                  color: MacbookModelColorOptions.JET_GRAY,
                  colorName: MacbookModelColorsName.JET_GRAY,
                });
                setColor("#adb5bd");
              }}
            />
            <div
              className={clsx(
                {
                  active:
                    macbookState.color === MacbookModelColorOptions.SPACE_BLACK,
                },
                "bg-neutral-300"
              )}
              onClick={() => {
                setMacbookState({
                  ...macbookState,
                  color: MacbookModelColorOptions.SPACE_BLACK,
                  colorName: MacbookModelColorsName.SPACE_BLACK,
                });
                setColor("#2e2c2e");
              }}
            />
          </div>
          <div className="size-control">
            <div
              className={clsx({
                active: macbookState.size === MacbookModelSizeOptions.__14_INCH,
              })}
              onClick={() => {
                setMacbookState({
                  ...macbookState,
                  size: MacbookModelSizeOptions.__14_INCH,
                });
                setScale(0.06);
              }}
            >
              <p>{MacbookModelSizeOptions.__14_INCH} </p>
            </div>
            <div
              className={clsx({
                active: macbookState.size === MacbookModelSizeOptions.__16_INCH,
              })}
              onClick={() => {
                setMacbookState({
                  ...macbookState,
                  size: MacbookModelSizeOptions.__16_INCH,
                });
                setScale(0.08);
              }}
            >
              <p>{MacbookModelSizeOptions.__16_INCH}</p>
            </div>
          </div>
        </div>
      </div>
      <Canvas
        id="canvas"
        camera={{ position: [0, 2, 4], fov: 50, near: 0.1, far: 100 }}
      >
        {/* <Box position={[0, 0, 0]} scale={1} material-color={"#92222e"} />
        <Box position={[0, 1.5, 0]} scale={1} material-color={"#abc22e"} /> */}
        <ModelSwitcher scale={scale} isMobile={isMobile} />
        <ambientLight intensity={10} />
        <StudioLights />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </section>
  );
};

export default ProductViewer;
