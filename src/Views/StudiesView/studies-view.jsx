import React from 'react';
import './studies-view.css';
import TimeLine from '../../components/TimeLine/time-line.jsx';
import TechnoBar from '../../components/TechnoBar/techno-bar.jsx';

function StudiesView(props) {
  const { visibility } = props;
  
  const studies = [
    {
      enterprise: 'Universidad de Cantabria',
      start: 2014,
      end: 2018,
      rol: 'Ingeniería Informática',
      duration: 48,
      technologies: [
        'java',
        'git',
        'python',
        'gitHub',
        'maven'
      ]
    },
    {
      enterprise: 'Decroly',
      start: 2011,
      end: 2013,
      rol: 'Administración de sistemas Informáticos en Red',
      duration: 24,
      technologies: [
        'html5',
        'css3',
        'php'
      ]
    },
    {
      enterprise: 'Decroly',
      start: 2009,
      end: 2011,
      rol: 'Sistemas micro-informáticos y redes',
      duration: 24,
      technologies: [
        'windows',
        'linux'
      ]
    }
  ];
  
  const initialActive = studies.reduce((pre,next) => {
    return {'technologies':[...pre.technologies, ...next.technologies]}
  })['technologies'];

  const [active, setActive] = React.useState(initialActive);

  const activateIcons = (list) => {
   setActive( list ? list : initialActive);
  }

  return (
    <div className={visibility+" studies-view view"}>
        <TechnoBar active={active}/>
        <div className="time-line-relative">
            <TimeLine firstDate="2009" lastDate="2019"  trail={studies} enter={(list)=> activateIcons(list)} leave={(list)=> activateIcons(list)}/>
        </div>
      </div>
  );

}

export default StudiesView;
