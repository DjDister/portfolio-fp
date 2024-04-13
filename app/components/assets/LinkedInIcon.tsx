import * as React from "react";
import { SVGProps } from "react";

const LinkedInIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#D3E97A"
      d="M5.398 7.797a2.37 2.37 0 1 0 0-4.74 2.37 2.37 0 0 0 0 4.74ZM10.007 9.593v13.15h4.083V16.24c0-1.716.323-3.378 2.45-3.378 2.099 0 2.125 1.962 2.125 3.487v6.395h4.085v-7.211c0-3.543-.763-6.265-4.903-6.265-1.988 0-3.32 1.09-3.866 2.123h-.055V9.593h-3.92Zm-6.654 0h4.09v13.15h-4.09V9.593Z"
    />
  </svg>
);
export default LinkedInIcon;
