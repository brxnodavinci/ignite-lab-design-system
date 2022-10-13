import { SVGAttributes } from "react";

interface BackgroundProps extends SVGAttributes<HTMLOrSVGElement> {}

export function Background(props: BackgroundProps) {
  return (
    <svg
      width={1440}
      height={1024}
      viewBox="0 0 1440 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_5_7)" filter="url(#filter0_f_5_7)">
        <path fill="#121214" d="M0 0H1440V1024H0z" />
        <g filter="url(#filter1_f_5_7)">
          <circle cx={290} cy={542} r={443} fill="url(#paint0_linear_5_7)" />
        </g>
        <g filter="url(#filter2_f_5_7)">
          <circle cx={733} cy={160} r={443} fill="url(#paint1_linear_5_7)" />
        </g>
        <g filter="url(#filter3_f_5_7)">
          <circle cx={698} cy={591} r={443} fill="url(#paint2_linear_5_7)" />
        </g>
        <g filter="url(#filter4_if_5_7)">
          <circle cx={435} cy={530} r={270} fill="url(#paint3_linear_5_7)" />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_5_7"
          x={-70}
          y={-70}
          width={1580}
          height={1164}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={35}
            result="effect1_foregroundBlur_5_7"
          />
        </filter>
        <filter
          id="filter1_f_5_7"
          x={-403}
          y={-151}
          width={1386}
          height={1386}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={125}
            result="effect1_foregroundBlur_5_7"
          />
        </filter>
        <filter
          id="filter2_f_5_7"
          x={40}
          y={-533}
          width={1386}
          height={1386}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={125}
            result="effect1_foregroundBlur_5_7"
          />
        </filter>
        <filter
          id="filter3_f_5_7"
          x={5}
          y={-102}
          width={1386}
          height={1386}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={125}
            result="effect1_foregroundBlur_5_7"
          />
        </filter>
        <filter
          id="filter4_if_5_7"
          x={85}
          y={180}
          width={700}
          height={700}
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
          <feGaussianBlur stdDeviation={125} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend in2="shape" result="effect1_innerShadow_5_7" />
          <feGaussianBlur
            stdDeviation={40}
            result="effect2_foregroundBlur_5_7"
          />
        </filter>
        <linearGradient
          id="paint0_linear_5_7"
          x1={290}
          y1={99}
          x2={290}
          y2={985}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#86198F" />
          <stop offset={1} stopColor="#C026D3" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_5_7"
          x1={733}
          y1={-283}
          x2={733}
          y2={603}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#86198F" />
          <stop offset={1} stopColor="#1A1A3C" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_5_7"
          x1={698}
          y1={148}
          x2={698}
          y2={1034}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#121214" />
          <stop offset={1} stopColor="#86198F" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_5_7"
          x1={403.16}
          y1={250.448}
          x2={655.33}
          y2={676.462}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.046875} stopColor="#86198F" />
          <stop offset={0.8125} stopColor="#86198F" />
        </linearGradient>
        <clipPath id="clip0_5_7">
          <path fill="#fff" d="M0 0H1440V1024H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
