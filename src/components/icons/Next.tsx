import React from 'react';

interface NextProps {
  className?: string;
}

const Next: React.FC<NextProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.1 19.3"><path d="M1.4 19.3L0 17.9l8.2-8.2L0 1.4 1.4 0l9.7 9.7-9.7 9.6z"/></svg>
  );
};

export default Next;