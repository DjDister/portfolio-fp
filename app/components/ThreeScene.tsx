"use client";
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stats } from "@react-three/drei";
import { Desk } from "./Scene";
import Camera from "./Camera";
import store from "../store";
import CameraControlInputs from "./CameraControlInputs";
import PortoflioContainer from "./Portfolio/PortoflioContainer";
import { HIDE_MODEL_TIMEOUT, IS_DEV_ENV } from "@/utils/constants";

const ThreeScene = ({ onCameraFinish }: { onCameraFinish: () => void }) => {
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

    setTimeout(() => {
      setIsModelHidden(true);
      onCameraFinish();
    }, HIDE_MODEL_TIMEOUT);
  };

  return (
    <div className="w-full h-full relative">
      <PortoflioContainer shouldAppear={cameraZoomedIn} />
      {IS_DEV_ENV && (
        <CameraControlInputs
          cameraPosition={cameraPosition}
          onValueChange={(newPosition: number[]) =>
            setCameraPosition(() => newPosition)
          }
        />
      )}
      <Canvas flat camera={{ manual: true }} onClick={handleClick}>
        <ambientLight intensity={Math.PI / 2} />
        <directionalLight
          color="white"
          position={[0, 1, 10]}
          castShadow={false}
        />
        <group visible={!isModelHidden} scale={2} position={[0, -2, 0]}>
          <Desk />
        </group>
        <Camera
          isClicked={isClicked}
          position={cameraPosition}
          onCameraFinish={handleCameraFinish}
        />
        {IS_DEV_ENV && <Stats />}
      </Canvas>
    </div>
  );
};

export default ThreeScene;
