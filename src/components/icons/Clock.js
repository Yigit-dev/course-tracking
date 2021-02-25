import * as React from "react";

function SvgClock(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 0C3.589 0 0 3.589 0 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm3.805 12.138a.665.665 0 01-.943 0L7.53 8.805a.664.664 0 01-.196-.472V4a.666.666 0 111.334 0v4.057l3.138 3.138c.26.261.26.682 0 .943z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgClock;
