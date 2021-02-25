import * as React from "react";

function SvgMenu(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity={0.3} fill="currentColor">
        <path d="M8 10a2 2 0 100-4 2 2 0 000 4zM2 10a2 2 0 100-4 2 2 0 000 4z" />
      </g>
    </svg>
  );
}

export default SvgMenu;
