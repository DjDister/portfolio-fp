"use client";
import { useState } from "react";
import PortoflioContainer from "./components/Portfolio/PortoflioContainer";
import ThreeScene from "./components/ThreeScene";

export default function Home() {
  const [isPortfolioVisible, setIsPortfolioVisible] = useState(false);

  const onCameraFinish = () => {
    setIsPortfolioVisible(() => true);
  };

  // console.log("isPortfolioVisible", isPortfolioVisible);
  return (
    <div className="bg-white w-screen h-screen overflow-hidden">
      <ThreeScene onCameraFinish={onCameraFinish} />
      {isPortfolioVisible ? (
        <PortoflioContainer shouldAppear={isPortfolioVisible} />
      ) : null}
    </div>
  );
}
