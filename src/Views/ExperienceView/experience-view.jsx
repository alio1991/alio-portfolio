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
        'git',
        'react',
        'vue',
        'teams',
        'vsc',
        'css3',
        'js',
        'gitLab'
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
        'lit',
        'git',
        'slack',
        'teams',
        'css3',
        'html5',
        'mocha',
        'jasmine',
        'vsc',
        'jira',
        'gitLab',
        'es6',
        'trello',
        'bitBucket'
      ]
    }
  ];
  
  const initialActive = experience.reduce((pre,next) => {
    return {'technologies':[...pre.technologies, ...next.technologies]}
  })['technologies'];

  const [active, setActive] = React.useState(initialActive);

  const activateIcons = (list) => {
   setActive( list ? list : initialActive);
  }

  return (
    <div className={visibility+" experience-view view"}>
        <TechnoBar active={active}/>
        <div className="time-line-relative">
          <TimeLine firstDate="2018" lastDate={new Date().getFullYear()+1} trail={experience} enter={(list)=> activateIcons(list)} leave={(list)=> activateIcons(list)}/>
        </div>
    </div>
  );
}

export default ExperienceView;
