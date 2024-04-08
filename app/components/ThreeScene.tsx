"use client";
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stats } from "@react-three/drei";
import { Desk } from "./Scene";
import Camera from "./Camera";
import store from "../store";

const ThreeScene = () => {
  const [cameraPosition, setCameraPosition] = useState<number[]>([0, 0, 15]);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    console.log("click");
    setIsClicked(true);
    store.targetObj.position.set(0, 0.5, 1);
  };

  return (
    <div className="w-full h-full">
      <div className="absolute top-0 right-0 z-20">
        x
        <input
          value={cameraPosition[0]}
          onChange={(e) =>
            setCameraPosition((prev) => [
              parseFloat(e.target.value),
              prev[1],
              prev[2],
            ])
          }
          type="numeric"
        />
        y
        <input
          value={cameraPosition[1]}
          onChange={(e) =>
            setCameraPosition((prev) => [
              prev[0],
              parseFloat(e.target.value),
              prev[2],
            ])
          }
          type="numeric"
        />
        z
        <input
          value={cameraPosition[2]}
          onChange={(e) =>
            setCameraPosition((prev) => [
              prev[0],
              prev[1],
              parseFloat(e.target.value),
            ])
          }
          type="numeric"
        />
      </div>
      <Canvas flat camera={{ manual: true }} onClick={handleClick}>
        <ambientLight intensity={Math.PI / 2} />
        <directionalLight
          color="white"
          position={[0, 1, 10]}
          castShadow={false}
        />
        <group scale={2} position={[0, -2, 0]}>
          <Desk />
        </group>
        <Camera
          isClicked={isClicked}
          position={cameraPosition}
          onCameraFinish={() => setIsClicked(false)}
        />
        <Stats />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
