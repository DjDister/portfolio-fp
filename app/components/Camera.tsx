import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useState } from "react";
import { Vector3 } from "three";
import * as T from "three";
import store from "../store";

const checkIfVectorsAreEqualToSecondDecimal = (
  vector1: Vector3,
  vector2: Vector3
) => {
  return (
    parseFloat(vector1.x.toFixed(2)) === parseFloat(vector2.x.toFixed(2)) &&
    parseFloat(vector1.y.toFixed(2)) === parseFloat(vector2.y.toFixed(2)) &&
    parseFloat(vector1.z.toFixed(2)) === parseFloat(vector2.z.toFixed(2))
  );
};

export default function Camera({
  position,
  isClicked,
  onCameraFinish,
}: {
  position: number[];
  isClicked: boolean;
  onCameraFinish: () => void;
}) {
  const positionVector = new Vector3().fromArray(position);
  const [positionCamera, setPositionCamera] = useState(positionVector);
  const [hasReachedTarget, setHasReachedTarget] = useState(false);

  useFrame(({ camera }) => {
    if (!isClicked || hasReachedTarget) return;
    camera.position.y = T.MathUtils.damp(
      camera.position.y,
      store.targetObj.position.y,
      0.1,
      0.35
    );
    camera.position.x = T.MathUtils.damp(
      camera.position.x,
      store.targetObj.position.x,
      0.1,
      0.35
    );
    camera.position.z = T.MathUtils.damp(
      camera.position.z,
      store.targetObj.position.z,
      0.1,
      0.35
    );
    camera.lookAt(0, 0.5, 0);

    if (
      checkIfVectorsAreEqualToSecondDecimal(
        camera.position,
        store.targetObj.position
      )
    ) {
      setHasReachedTarget(true);
      setPositionCamera(new Vector3().fromArray([0, 0.5, 0]));
      onCameraFinish();
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={positionCamera} />
      <OrbitControls
        enableRotate={!isClicked}
        enablePan={false}
        enableZoom={false}
        position={[0, 0.5, 0]}
        target={[0, 0.5, 0]}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 5}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </>
  );
}
