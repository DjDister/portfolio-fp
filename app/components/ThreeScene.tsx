"use client";
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stats } from "@react-three/drei";
import { Desk } from "./Scene";
import Camera from "./Camera";
import store from "../store";
import CameraControlInputs from "./CameraControlInputs";

const ThreeScene = () => {
  const [cameraPosition, setCameraPosition] = useState<number[]>([0, 0, 15]);
  const [isClicked, setIsClicked] = useState(false);
  const [cameraZoomedIn, setCameraZoomedIn] = useState(false);
  const [isModelHidden, setIsModelHidden] = useState(false);
  const handleClick = () => {
    console.log("click");
    setIsClicked(true);
    store.targetObj.position.set(0, 0.5, 1);
  };

  const handleCameraFinish = () => {
    setIsClicked(false);
    setCameraZoomedIn(true);
  };

  return (
    <div className="w-full h-full">
      <CameraControlInputs
        cameraPosition={cameraPosition}
        onValueChange={(newPosition: number[]) =>
          setCameraPosition(() => newPosition)
        }
      />
      <Canvas flat camera={{ manual: true }} onClick={handleClick}>
        <ambientLight intensity={Math.PI / 2} />
        <directionalLight
          color="white"
          position={[0, 1, 10]}
          castShadow={false}
        />
        <group visible={!cameraZoomedIn} scale={2} position={[0, -2, 0]}>
          <Desk />
        </group>
        <Camera
          isClicked={isClicked}
          position={cameraPosition}
          onCameraFinish={handleCameraFinish}
        />
        <Stats />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
