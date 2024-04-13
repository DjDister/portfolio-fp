import { EMAIL } from "@/utils/constants";
import React from "react";

export default function ContactButton() {
  const [isHovered, setIsHovered] = React.useState(false);
  const handleContact = () => {
    window.open(`mailto:${EMAIL}`);
  };

  return (
    <button
      onClick={handleContact}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-[#D3E97A] relative font-semibold text-black flex items-center justify-center p-2 px-6 rounded-full"
    >
      {isHovered && (
        <div className="absolute text-sm bg-slate-100 bottom-full px-2 rounded-lg py-1">
          {EMAIL}
        </div>
      )}
      CONTACT ME
      <div className="bg-black w-3 h-3 rounded-full ml-6" />
    </button>
  );
}
