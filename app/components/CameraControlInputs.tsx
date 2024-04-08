import React from "react";

export default function CameraControlInputs({
  cameraPosition,
  onValueChange,
}: {
  cameraPosition: number[];
  onValueChange: (newPosition: number[]) => void;
}) {
  return (
    <div className="absolute top-0 right-0 z-20">
      x
      <input
        value={cameraPosition[0]}
        onChange={(e) =>
          onValueChange([
            parseFloat(e.target.value),
            cameraPosition[1],
            cameraPosition[2],
          ])
        }
        type="numeric"
      />
      y
      <input
        value={cameraPosition[1]}
        onChange={(e) =>
          onValueChange([
            cameraPosition[0],
            parseFloat(e.target.value),
            cameraPosition[2],
          ])
        }
        type="numeric"
      />
      z
      <input
        value={cameraPosition[2]}
        onChange={(e) =>
          onValueChange([
            cameraPosition[0],
            cameraPosition[1],
            parseFloat(e.target.value),
          ])
        }
        type="numeric"
      />
    </div>
  );
}
