import * as React from "react";

function SvgSketch(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.287 7.067l6.25 12.01L.031 7.068h4.255zM16.787 7.067l-6.25 12.01 10.505-12.01h-4.255z"
        fill="#EA6C00"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.287 7.067h12.498l-6.25 12.01-6.248-12.01z"
        fill="#FDAD00"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.536.412l-5.92.614-.33 6.042 6.25-6.656z"
        fill="#FDD231"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.536.412l5.92.614.33 6.042-6.25-6.656z"
        fill="#FDD231"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.042 7.068l-4.584-6.042.33 6.042h4.254zM.032 7.068l4.584-6.042-.33 6.042H.033z"
        fill="#FDAD00"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.536.412l-6.25 6.656h12.5L10.535.412z"
        fill="#FEEEB7"
      />
    </svg>
  );
}

export default SvgSketch;
