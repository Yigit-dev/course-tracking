import * as React from "react";

function SvgPrinciple(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 15 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#Principle_svg__filter0_i)">
        <path
          d="M4.656 7.433a2.763 2.763 0 012.76-2.766h.067c1.506 0 2.69 1.21 2.66 2.719l4.654.092.003-.13-4.655-.093c-.03 1.53-1.305 2.812-2.696 2.812A2.33 2.33 0 005.122 12.4a2.33 2.33 0 002.327 2.333c3.95 0 7.27-3.337 7.351-7.385l-4.655-.093-.003.13 4.655.093A7.304 7.304 0 007.483 0h-.067C3.32 0 0 3.328 0 7.433V17.4a2.33 2.33 0 002.328 2.333A2.33 2.33 0 004.656 17.4V7.433z"
          fill="url(#Principle_svg__paint0_linear)"
        />
      </g>
      <defs>
        <linearGradient
          id="Principle_svg__paint0_linear"
          x1={0}
          y1={0}
          x2={0}
          y2={19.733}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C063D5" />
          <stop offset={1} stopColor="#5A1AA9" />
        </linearGradient>
        <filter
          id="Principle_svg__filter0_i"
          x={0}
          y={0}
          width={14.8}
          height={19.733}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={0.5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.420177 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgPrinciple;
