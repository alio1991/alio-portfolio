import React from 'react';
import './experience-view.css';
import TimeLine from '../../components/TimeLine/time-line.jsx';
import TechnoBar from '../../components/TechnoBar/techno-bar.jsx';

const ExperienceView = (props)=> {
  const { visibility } = props;

  const experience = [
    {
      enterprise: 'Serquo',
      start: 2020,
      end: null,
      rol: 'Fronend Developer',
      duration: 1,
      technologies: [
      ]
    },
    {
      enterprise: 'Sopra Steria',
      start: 2019,
      end: 2020,
      rol: 'Fronend Developer',
      duration: 17,
      technologies: [
        'angular',
        'react',
        'lit'
      ]
    }
  ];

  const active = experience.reduce((pre,next) => pre.technologies+next.technologies);

  return (
    <div className={visibility+" experience-view view"}>
        <TechnoBar active={active}/>
        <div className="time-line-relative">
          <TimeLine firstDate="2018" lastDate={new Date().getFullYear()+1} trail={experience}/>
        </div>
    </div>
  );
}

export default ExperienceView;
