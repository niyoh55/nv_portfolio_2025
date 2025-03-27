/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
const EmailSVG = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props?.color ?? "#080341"}
      fillRule="evenodd"
      d="M3.75 5.25 3 6v12l.75.75h16.5L21 18V6l-.75-.75H3.75Zm.75 2.446v9.554h15V7.695L12 14.514 4.5 7.696Zm13.81-.946H5.69L12 12.486l6.31-5.736Z"
      clipRule="evenodd"
    />
  </svg>
);
export default EmailSVG;
