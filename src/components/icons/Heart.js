import * as React from "react";

function SvgHeart(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.238 1c-2 0-3.714 1.048-4.762 2.571C10.43 2.048 8.714 1 6.714 1 3.571 1 1 3.571 1 6.714 1 12.43 11.476 21 11.476 21s10.476-8.571 10.476-14.286C21.952 3.571 19.381 1 16.238 1z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgHeart;
