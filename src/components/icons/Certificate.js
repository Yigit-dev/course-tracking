import * as React from "react";

function SvgCertificate(props) {
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
        d="M12.429 19.286H3V3h15.429v6M21 14.679V21l-2.571-.857-2.572.857v-6.321"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.429 15.857a3.429 3.429 0 100-6.857 3.429 3.429 0 000 6.857zM6.429 7.286h7.714M6.429 10.714h5.142M6.429 14.143h5.142"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgCertificate;
