"use client";

import { Canvas } from "@react-three/fiber";
import {
  Fisheye,
  CameraControls,
  PerspectiveCamera,
  Environment,
  Stats,
  OrbitControls,
} from "@react-three/drei";
import { Desk } from "./Scene";

const ThreeScene = () => {
  return (
    <div className="w-full h-full">
      <Canvas flat>
        <ambientLight intensity={Math.PI / 2} />
        <directionalLight color="white" position={[0, 0, 10]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
        <group scale={2} position={[0, 0, 0]}>
          <Desk />
        </group>
        {/* <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} /> */}
        {/* <Fisheye zoom={0}>
          <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} />
          <ambientLight intensity={Math.PI / 2} />
          <group scale={20} position={[5, -11, -5]}>
            <Desk />
            <Camera />
          </group>
          <PerspectiveCamera makeDefault position={[0, 0, 18.5]} />
        </Fisheye> */}
        {/* <OrbitControls position={[0, 0, 0]} /> */}
        <PerspectiveCamera makeDefault position={[0, 0, 18.5]} />
        <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} />

        <Stats />
      </Canvas>
    </div>
  );
};
export default ThreeScene;
