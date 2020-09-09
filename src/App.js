import React from 'react';
import LandingView from './Views/LandingView/landing-view.jsx';
import StudiesView from './Views/StudiesView/studies-view.jsx';
import ExperienceView from './Views/ExperienceView/experience-view.jsx';
import ProjectsView from './Views/ProjectsView/projects-view.jsx';

import { ImBooks } from 'react-icons/im';
import { MdWork } from 'react-icons/md';
import { BsHouseFill } from 'react-icons/bs';


import './App.css';

function App() {

  const [studies, setStudies] = React.useState("hide");
  const [landing, setLanding] = React.useState("show");
  const [experience, setExperience] = React.useState("hide");
  const [projects, setProjects] = React.useState("hide");

  const [buttons, setButtons] = React.useState("<div></div>");

  const changeView = (viewSelected)=> {
    const buttonType = {
      'setLanding': <div>
                    <ImBooks className="izda-btn btn" onClick={ () => changeView('setStudies')} alt="Formación"/>
                    {/* <button type="button" className="abajo-btn" onClick={ () => changeView('setProjects')}>Proyectos Personales</button> */}
                    <MdWork className="dcha-btn btn" onClick={ () => changeView('setExperience')}/>
                    </div>,
      'setStudies': <BsHouseFill className="dcha-btn btn" onClick={ () => changeView('setLanding')}/>,
      'setExperience': <BsHouseFill className="izda-btn btn" onClick={ () => changeView('setLanding')}/>,
      'setProjects': <BsHouseFill className="arriba-btn btn" onClick={ () => changeView('setLanding')}/>
    };
    const views = {'setStudies':setStudies, 'setLanding':setLanding,'setExperience':setExperience,'setProjects':setProjects};
    Object.values(views).map(view => view('hide'));
    views[viewSelected]('show');
    setButtons(buttonType[viewSelected]);
  }

  React.useEffect(() => {
    changeView('setLanding');
    return () => {
    }
  }, [])

  return (
    <div className="App">
      {
        buttons
      }
      <div className="first-row">
        <StudiesView changeView={changeView} visibility={studies}></StudiesView>
        <LandingView changeView={changeView} visibility={landing}></LandingView>
        <ExperienceView changeView={changeView} visibility={experience}></ExperienceView>
      </div>
      {/* <ProjectsView changeView={changeView} visibility={projects}></ProjectsView> */}
    </div>
  );

}

export default App;
