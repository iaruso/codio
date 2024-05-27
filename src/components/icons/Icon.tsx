import React, { lazy, Suspense, ComponentType } from 'react';

interface IconProps {
  name: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className }) => {
  const IconComponent = lazy<ComponentType<{ className?: string }>>(() =>
    import(`../../components/icons/${name}`).then(module => ({ default: module.default }))
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <IconComponent className={className} />
    </Suspense>
  );
};

export default Icon;
