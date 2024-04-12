"use client";
import React, { useEffect, useState } from "react";
import About from "./About";
import Projects from "./Projects";

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
      console.log("finishing");
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  // console.log("animationFinished", animationFinished);

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
