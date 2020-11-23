import React from 'react';

export default function CheckBox({ checked }) {
  return (
    <>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 2C0 0.895431 0.895431 0 2 0H14C15.1046 0 16 0.895431 16 2V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V2Z"
          fill={checked ? '#454444' : 'none'}
        />
        <rect
          x="0.5"
          y="0.5"
          width="15"
          height="15"
          rx="1.5"
          stroke="#454444"
        />
        {checked && (
          <path
            d="M4 9L7 12L12 4"
            stroke="#FFE455"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        )}
      </svg>
    </>
  );
}
