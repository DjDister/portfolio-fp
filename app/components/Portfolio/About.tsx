import React from "react";
import GithubIcon from "../assets/GithubIcon";
import SocialMediaIcon from "./SocialMediaIcon";
import LinkedInIcon from "../assets/LinkedInIcon";
import Image from "next/image";
import { GITHUB_LINK, LINKEDIN_LINK } from "@/utils/constants";
import ContactButton from "./ContactButton";

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
            <ContactButton />
            <SocialMediaIcon href={GITHUB_LINK} icon={<GithubIcon />} />
            <SocialMediaIcon href={LINKEDIN_LINK} icon={<LinkedInIcon />} />
          </div>
        </div>
      </div>
      <div className="w-[600px] h-[700px] relative bg-[#C7C7C7]">
        <Image
          src="/my_photo_landing.png"
          alt="Picture of the author"
          fill
          objectFit="cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
}
