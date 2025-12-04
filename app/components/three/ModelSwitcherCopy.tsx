import { PresentationControls } from "@react-three/drei";
import { MacBookModel14 } from "../models/Macbook-14";
import { MacbookModel16 } from "../models/Macbook-16";
import { useRef } from "react";
import gsap from "gsap";
import { Group, Object3D, Mesh, Material } from "three";
import { useGSAP } from "@gsap/react";

const ANIMATION_DURATION = 2;
const POSITION_OFFSET = 5;

export interface ModelSwitcherProps {
  scale: number;
  isMobile: boolean;
}
const ModelSwitcherCopy = ({ scale, isMobile }: ModelSwitcherProps) => {
  const macbookModel14Ref = useRef<Group | null>(null);
  const macbookModel16Ref = useRef<Group | null>(null);
  const controlsConfig = {};

  //   useGSAP(() => {
  //     if (scale === 0.08) {
  //       if (macbookModel14Ref.current && macbookModel16Ref.current) {
  //         moveGroup(macbookModel14Ref.current, -POSITION_OFFSET);
  //         moveGroup(macbookModel16Ref.current, 0);

  //         fadeMeshes(macbookModel14Ref.current, 0);
  //         fadeMeshes(macbookModel16Ref.current, 1);
  //       }
  //     } else {
  //       if (macbookModel14Ref.current && macbookModel16Ref.current) {
  //         moveGroup(macbookModel16Ref.current, POSITION_OFFSET);
  //         moveGroup(macbookModel14Ref.current, 0);

  //         fadeMeshes(macbookModel16Ref.current, 0);
  //         fadeMeshes(macbookModel14Ref.current, 1);
  //       }
  //     }
  //   }, [scale]);
  return (
    <PresentationControls {...controlsConfig}>
      <group>
        <MacbookModel16 scale={0.06} />
      </group>
    </PresentationControls>
  );
};

export default ModelSwitcherCopy;
