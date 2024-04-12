import React from "react";

export default function SocialMediaIcon({ icon }: { icon: JSX.Element }) {
  const iconWidth = 26;
  const styledIcon = React.cloneElement(icon, {
    width: iconWidth,
    height: iconWidth,
  });
  return (
    <div className="p-4 bg-[#222222] relative w-[54px] h-[54px] flex items-center justify-center rounded-full">
      <div className={`absolute translate-[${iconWidth / 2}px]`}>
        {styledIcon}
      </div>
    </div>
  );
}
