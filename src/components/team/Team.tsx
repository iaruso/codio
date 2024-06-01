import './Team.css';
import React, { useState, useRef, useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '../icons/Icon.tsx';
import teamData from '../../../public/team.json'

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
  reference: string;
}

const TeamMember: React.FC<TeamMemberProps> = React.memo(({ name, position, image, reference }) => {
  const { t } = useTranslation();
  return (
    <a className='team-members-item col-3' href={reference} target='_blank'>
      <div className='team-members-item-image'>
        <img src={'/'  + image + '.jpg'} alt={t(name) + ' - ' + t(position)}/>
      </div>
      <div className='team-members-item-info'>
        <h3>{t(name)}</h3>
        <p>{t(position)}</p>
      </div>
    </a>
  );
});

const ContainerTeam: React.FC = () => {
  const { t } = useTranslation();
  const [isSliding, setIsSliding] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1080);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1080);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSlide = (direction: 'prev' | 'next') => {
    if (isSliding || !sliderRef.current) return;
    setIsSliding(true);

    const slider = sliderRef.current;
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

    const marginLeftValue = isSmallScreen
      ? `calc((100vw - (100vw / 8)) / 2)`
      : `${10.3125 * rootFontSize}px`;

    if (direction === 'next') {
      slider.classList.remove('sliding-left');
      slider.classList.add('sliding-right');
      const brand = slider.getElementsByClassName('team-members-item')[0] as HTMLElement;
      brand.style.marginLeft = `-${marginLeftValue}`;
      setTimeout(() => {
        slider.appendChild(brand);
        brand.style.marginLeft = '0px';
        setIsSliding(false);
      }, 600);
    } else if (direction === 'prev') {
      slider.classList.remove('sliding-right');
      slider.classList.add('sliding-left');
      const brands = slider.getElementsByClassName('team-members-item');
      const lastBrand = brands[brands.length - 1] as HTMLElement;
      slider.insertBefore(lastBrand, brands[0]);
      lastBrand.style.marginLeft = `-${marginLeftValue}`;
      setTimeout(() => {
        lastBrand.style.marginLeft = '0px';
        setIsSliding(false);
      }, 200);
    }
  };

  return (
    <section id='team' className='team-container'>
      <div className='team-content col-16'>
        <div className='team-content-header'>
          <h2>{t('team.title')}</h2>
        </div>
        <div className='team-content-area'>
          <div className='team-prev-btn col-2'>
            <button onClick={() => handleSlide('prev')} disabled={isSliding} id='prev' aria-label='<'>
              <Icon path='Prev' />
            </button>
          </div>
          <div className='team-members-container col-12'>
            <div className='team-members' ref={sliderRef}>
              {teamData.map(member => (
                <TeamMember key={member.id} name={member.name} position={member.position} image={member.image} reference={member.ref || ''} />
              ))}
            </div>
          </div>
          <div className='team-next-btn col-2'>
            <button onClick={() => handleSlide('next')} disabled={isSliding} id='next' aria-label='>'>
              <Icon path='Next' />
            </button>
          </div>
        </div>
        <div className='team-careers-area'>
          <div className='empty-block col-2'></div>
          <p className='col-12'>{t('team.hiring')}</p>
          <div className='empty-block col-2'></div>
        </div>
      </div>
    </section>
  );
};

export default ContainerTeam;
