"use client";
import React, { useEffect, useState } from "react";
import About from "./About";
import Projects from "./Projects";
import { SHOW_PORTOFLIO_TIMEOUT } from "@/utils/constants";

export default function PortoflioContainer({
  shouldAppear,
}: {
  shouldAppear?: boolean;
}) {
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    if (!shouldAppear) return;
    const timeout = setTimeout(() => {
      setAnimationFinished(true);
    }, SHOW_PORTOFLIO_TIMEOUT);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      className={`absolute inset-0 z-40 bg-black transform ${
        shouldAppear ? "scale-100" : "scale-0"
      } transition-transform duration-500 ease-linear text-white w-full overflow-x-hidden`}
    >
      <div
        className={`bg-black w-full px-12 transform opacity-0 transition-opacity duration-75	${
          animationFinished ? "opacity-100" : ""
        }`}
      >
        <About />
        <Projects />
      </div>
    </div>
  );
}
