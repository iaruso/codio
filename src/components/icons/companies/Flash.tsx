import React from 'react';

interface IconProps {
  className?: string;
}

const Flash: React.FC<IconProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390 101.67"><path d="M50.83 0L0 61h45.75l-5.08 40.67 50.83-61H45.75L50.83 0zM115 87.11h21.33V61.34h27.14V42.52h-27.14v-13h32.84V10.7H115v76.41zm64.3-76.41h19.62v76.41H179.3zm68.17 23.61c-1.9-2.05-4.33-3.73-7.3-5.02-2.89-1.37-5.85-2.05-8.9-2.05a24.91 24.91 0 0 0-13.11 3.65c-3.95 2.36-7.15 5.82-9.58 10.38-2.36 4.56-3.54 10.11-3.54 16.65 0 6.99 1.18 12.81 3.54 17.45 2.43 4.56 5.55 7.95 9.35 10.15a23.87 23.87 0 0 0 12.2 3.31c4.33 0 7.76-1.1 10.72-3.31 2.96-2.2 5.17-4.9 6.61-8.1v9.69h19.62V28.95h-19.62v5.36zm0 22.47c0 2.81-.65 5.13-1.94 6.96-1.22 1.75-2.7 3.08-4.45 3.99-1.75.84-3.46 1.26-5.13 1.26-3.12 0-5.63-1.07-7.53-3.19-1.9-2.13-2.85-4.75-2.85-7.87s.91-5.82 2.74-8.1c1.9-2.28 4.26-3.42 7.07-3.42a15.66 15.66 0 0 1 6.39 1.37c2.13.91 4.03 2.05 5.7 3.42v5.59zm56.32-3.65l-3.53-.91c-2.43-.61-4.07-1.18-4.9-1.71-.84-.53-1.25-1.33-1.25-2.39 0-1.52.68-2.62 2.05-3.31 1.44-.76 3.08-1.14 4.9-1.14 2.89 0 5.59.57 8.1 1.71 2.51 1.06 4.75 2.2 6.73 3.42V33.4c-1.98-1.9-4.6-3.38-7.87-4.45-3.19-1.14-6.69-1.71-10.49-1.71-4.56 0-8.71.8-12.43 2.39-3.65 1.6-6.54 3.84-8.67 6.73s-3.19 6.35-3.19 10.38.99 7.45 2.96 10.26c1.98 2.74 5.09 4.75 9.35 6.04l5.82 1.83c2.28.76 4.03 1.45 5.25 2.05 1.22.53 1.82 1.33 1.82 2.4 0 1.37-.53 2.32-1.6 2.85-.99.53-2.59.8-4.79.8-2.74 0-5.85-.57-9.35-1.71-3.42-1.14-6.5-2.55-9.24-4.22v15.28c2.66 1.82 5.85 3.38 9.58 4.68 3.73 1.22 7.76 1.82 12.09 1.82s8.06-.8 11.63-2.39c3.65-1.67 6.58-3.95 8.78-6.84 2.28-2.97 3.42-6.35 3.42-10.15 0-8.29-5.06-13.72-15.17-16.31zm55.63-25.89c-3.88 0-7.15.91-9.81 2.74-2.59 1.82-4.79 3.99-6.61 6.5V10.7h-19.61v76.41H343V51.99c1.07-1.52 2.32-2.81 3.76-3.88 1.44-1.14 3.23-1.71 5.36-1.71 1.98 0 3.76.61 5.36 1.82 1.6 1.14 2.39 3.16 2.39 6.04l.11 32.84h19.61V51.18c0-7.91-1.9-13.88-5.7-17.9-3.73-4.03-8.55-6.04-14.48-6.04zm13.5-6.28h2.77v-7.39h2.92v-2.42H370v2.42h2.92v7.39zm16.1-9.96l-4.24 4.26-4.24-4.26h-.98v10h2.77v-4.85l2.03 2.28h.84l2.03-2.28V21H390V11h-.98z"/></svg>
  );
};

export default Flash;

