import React from 'react';

export default function HalfStar() {
  return (
    <>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0)">
          <rect
            width="16"
            height="16"
            rx="4"
            fill="#454444"
            fill-opacity="0.2"
          />
          <path d="M0 17.5V0H8V17.5H0Z" fill="#454444" />
          <path
            d="M15.5 5.2885H9.7705L8 -0.25L6.2295 5.2885H0.5L5.13525 8.71175L3.36475 14.25L8 10.8272L12.6353 14.25L10.8647 8.712L15.5 5.2885Z"
            fill="#FFE455"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="16" height="16" rx="4" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}
