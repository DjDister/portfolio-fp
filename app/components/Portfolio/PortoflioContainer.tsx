import React from "react";
import About from "./About";
import Projects from "./Projects";

export default function PortoflioContainer({
  shouldAppear,
}: {
  shouldAppear: boolean;
}) {
  return (
    <div
      className={`absolute inset-0 z-40 bg-black transform ${
        shouldAppear ? "scale-100" : "scale-0"
      } transition-transform duration-500 ease-linear text-white w-full px-12`}
    >
      <About />
      <Projects />
    </div>
  );
}
