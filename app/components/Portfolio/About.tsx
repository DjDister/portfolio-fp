import React from "react";
import GithubIcon from "../assets/GithubIcon";
import SocialMediaIcon from "./SocialMediaIcon";
import LinkedInIcon from "../assets/LinkedInIcon";

export default function About() {
  return (
    <div className="flex gap-4 w-full py-12">
      <div className="flex-1 flex flex-col items-center justify-center ">
        <div className="w-[500px] flex flex-col gap-6">
          <div className="text-6xl font-semibold max-w-[380px]">
            HI, I AM FILIP PORĘBSKI.
          </div>
          <div className="text-[#C7C7C7] ">
            A Warsaw based software developer passionate about math, AI and
            computer games.
          </div>
          <div className="flex gap-4">
            <button className="bg-[#D3E97A] font-semibold text-black flex items-center justify-center p-2 px-6 rounded-full">
              CONTACT ME
              <div className="bg-black w-3 h-3 rounded-full ml-6" />
            </button>
            <SocialMediaIcon icon={<GithubIcon />} />
            <SocialMediaIcon icon={<LinkedInIcon />} />
          </div>
        </div>
      </div>
      <div className="w-[600px] h-[700px] bg-[#C7C7C7]">
        <img src="" alt="" />
      </div>
    </div>
  );
}
