import * as React from "react";
const PhoneSVG = (props: { className: string; color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill={props.color}
      d="M1 5V1h6v4L4.5 7.5l4 4L11 9h4v6h-4C5.477 15 1 10.523 1 5Z"
    />
  </svg>
);
export default PhoneSVG;
