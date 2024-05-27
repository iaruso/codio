import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 9.73">
      <path d="M5.8 3.21L1.51 4.92V.57L1.08 0H0v9.73h1.51V6.47l2.29-.94 2 2.28v1.92h1.49V7.34l-2.1-2.39 2.1-.85v-2H5.8v1.11zM9.07 0h5.54v1.35H9.07zm0 2.1l-.87.76v6.1l.87.76h5.54l.87-.76V2.87l-.87-.76H9.07zm4.91 6.22H9.69V3.51h4.29v4.82zM22.31.57v1.81l-.35-.27h-4.6l-.87.78v6.06l.87.78h4.6l.34-.28v.28h1.51V0h-1.08l-.43.57zm0 7.19l-.69.55h-3.61V3.54h3.63l.67.52v3.69zM25.58 0h5.54v1.35h-5.54zm5.55 2.1h-5.54l-.87.76v6.1l.87.76h5.54l.87-.76V2.87l-.87-.76zm-.64 6.22H26.2V3.51h4.29v4.82z" />
    </svg>
  );
};

export default Logo;
