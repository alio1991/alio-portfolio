import React from 'react';
import './experience-view.css';
import TimeLine from '../../components/TimeLine/time-line.jsx';

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
        {
          name: 'React js',
          experience: 1
        },
        {
          name: 'Vue',
          experience: 1
        }
      ]
    },
    {
      enterprise: 'Sopra Steria',
      start: 2019,
      end: 2020,
      rol: 'Fronend Developer',
      duration: 17,
      technologies: [
        {
          name: 'Angular 8',
          experience: 9
        },
        {
          name: 'React js',
          experience: 3
        },
        {
          name: 'LitElement',
          experience: 9
        }
      ]
    }
  ];

  return (
    <div className={visibility+" experience-view view"}>
        <div className="technologies">
          <p>lala</p>
          <p>lolo</p>
        </div>
        <div className="time-line-relative">
          <TimeLine firstDate="2018" lastDate={new Date().getFullYear()+1} trail={experience}/>
        </div>
    </div>
  );
}

export default ExperienceView;
