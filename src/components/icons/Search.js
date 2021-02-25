import * as React from "react";

function SvgSearch(props) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.611 2C6.303 2 2 6.208 2 11.4c0 5.19 4.303 9.399 9.611 9.399 2.27 0 4.357-.77 6.002-2.058l3.124 3.048.083.07c.29.21.701.186.964-.072a.713.713 0 00-.002-1.023l-3.087-3.012a9.253 9.253 0 002.528-6.353C21.223 6.21 16.92 2 11.612 2zm0 1.448c4.491 0 8.132 3.56 8.132 7.951 0 4.392-3.64 7.952-8.131 7.952S3.48 15.79 3.48 11.399c0-4.391 3.64-7.951 8.131-7.951z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSearch;
