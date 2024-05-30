import React from 'react';

interface PrevProps {
  className?: string;
}

const Prev: React.FC<PrevProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.1 19.4"><path d="m9.6,19.4L0,9.7,9.7,0l1.4,1.4L2.8,9.7l8.2,8.2-1.4,1.5Z"/></svg>
  );
};

export default Prev;