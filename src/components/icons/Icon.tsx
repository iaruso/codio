import React, { lazy, Suspense, ComponentType } from 'react';

interface IconProps {
  path: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ path, className }) => {
  const IconComponent = lazy<ComponentType<{ className?: string }>>(() =>
    import(`../../components/icons/${path}.tsx`).then(module => ({ default: module.default }))
  );

  return (
    <Suspense fallback={<div></div>}>
      <IconComponent className={className} />
    </Suspense>
  );
};

export default Icon;
