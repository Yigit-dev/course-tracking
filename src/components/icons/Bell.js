import * as React from "react";

function SvgBell(props) {
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
        clipRule="evenodd"
        d="M19 11V8A7 7 0 105 8v3c0 3.3-3 4.1-3 6 0 1.7 3.9 3 10 3s10-1.3 10-3c0-1.9-3-2.7-3-6z"
        stroke="#11142D"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22c-1.011 0-1.961-.034-2.855-.1a2.992 2.992 0 005.71 0c-.894.066-1.844.1-2.855.1z"
        fill="#1B1D21"
      />
    </svg>
  );
}

export default SvgBell;
