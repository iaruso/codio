import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Grid.css';

type GridProps = {
  activeService: string;
};

const Grid: React.FC<GridProps> = ({ activeService }) => {
  const { t } = useTranslation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [value, setValue] = useState(50);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const gridCanvas = document.querySelector('.grid-canvas');
      if (gridCanvas) {
        const rect = gridCanvas.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    document.addEventListener('mousemove', updateMousePosition);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  useEffect(() => {
    let interval: any;

    if (activeService === 'seo') {
      let start = 50;
      const end = 97;
      const duration = 2400;
      const stepTime = duration / (end - start);

      interval = setInterval(() => {
        start += 1;
        setValue(start);
        if (start >= end) {
          clearInterval(interval);
        }
      }, stepTime);
    } else {
      setValue(50);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [activeService]);

  return (
    <div className={`grid-canvas ${activeService}`}>
      <div className='grid-design'>
        <div className='grid-design-content'>
          <div className='frame'></div>
          <div className='circle'></div>
        </div>
      </div>
      <div className='grid-development'>
        <div className='grid-development-content'>
          <pre className='grid-development-content-code-area'>
            <pre className='grid-development-content-code'>
              <pre className='symbol'>{`<`}</pre>
              <pre className='tag'>article</pre>
            </pre>
            <pre className='grid-development-content-code spaced'>
              <pre className='class'> class</pre>
              <pre className='symbol-clear'>=</pre>
              <pre className='value inactive'>'please-center-it'</pre>
              <pre className='value active'>'flex-center'</pre>
            </pre>
            <pre className='grid-development-content-code'>
              <pre className='symbol'>{`>`}</pre>
            </pre>
          </pre>
          <pre className='grid-development-content-code spaced'>
            <pre className='symbol'>{`<`}</pre>
            <pre className='tag'>h1</pre>
            <pre className='symbol'>{`>`}</pre>
            <pre className='text inactive'>{t('services.development.grid.title_1')}</pre>
            <pre className='text active'>{t('services.development.grid.title_2')}</pre>
            <pre className='symbol'>{`</`}</pre>
            <pre className='tag'>h1</pre>
            <pre className='symbol'>{`>`}</pre>
          </pre>
          <pre className='grid-development-content-code spaced'>
            <pre className='symbol'>{`<`}</pre>
            <pre className='tag'>p</pre>
            <pre className='symbol'>{`>`}</pre>
            <pre className='text inactive'>{t('services.development.grid.subtitle_1')}</pre>
            <pre className='text active'>{t('services.development.grid.subtitle_2')}</pre>
            <pre className='symbol'>{`</`}</pre>
            <pre className='tag'>p</pre>
            <pre className='symbol'>{`>`}</pre>
          </pre>
          <pre className='grid-development-content-code'>
            <pre className='symbol'>{`</`}</pre>
            <pre className='tag'>article</pre>
            <pre className='symbol'>{`>`}</pre>
          </pre>
        </div>
      </div>
      <div className='grid-seo'>
        <div className='grid-seo-content'>
          <div className='donut'>
            <div className='donut-default'></div>
            <div className='donut-line'></div>
            <div className='donut-text'>{value}</div>
            <div className='donut-case'></div>
          </div>
        </div>
      </div>
      <div className='glow-circle' style={{ left: `${mousePosition.x}%`, top: `${mousePosition.y}%` }}></div>
      <div className='bg'></div>
    </div>
  );
};

export default Grid;
