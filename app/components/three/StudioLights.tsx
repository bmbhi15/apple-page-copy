"use client";
import { Environment, Lightformer, SpotLight } from "@react-three/drei";

const StudioLights = () => {
  return (
    <>
      <group>
        <Environment resolution={256}>
          <group>
            <Lightformer
              form="rect"
              intensity={0.5}
              position={[1, 0, 0]}
              scale={1}
              rotate-y={Math.PI / 2}
            />
            <Lightformer
              form="rect"
              intensity={0.5}
              position={[0, 1, 0]}
              scale={1}
              rotate-y={Math.PI / 2}
            />
            <Lightformer
              form="rect"
              intensity={0.5}
              position={[-1, 0, 0]}
              scale={1}
              rotate-y={Math.PI / 2}
            />
            <Lightformer
              form="rect"
              intensity={0.5}
              position={[0, 0, 1]}
              scale={1}
              rotate-y={Math.PI / 2}
            />
            <Lightformer
              form="rect"
              intensity={1}
              position={[0, 0, -1]}
              scale={1}
              rotate-y={Math.PI / 2}
            />
          </group>
        </Environment>
        <SpotLight
          angle={0.15}
          decay={0.1}
          intensity={0.5}
          position={[0, 10, 0]}
        />
        <SpotLight
          angle={0.15}
          decay={0.1}
          intensity={0.5}
          position={[-10, 0, 0]}
        />
        <SpotLight
          angle={0.15}
          decay={0.1}
          intensity={0.5}
          position={[10, 0, 0]}
        />
      </group>
    </>
  );
};

export default StudioLights;
