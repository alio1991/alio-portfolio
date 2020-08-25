import React from 'react';
import LandingView from './Views/LandingView/landing-view.jsx';
import StudiesView from './Views/StudiesView/studies-view.jsx';
import ExperienceView from './Views/ExperienceView/experience-view.jsx';
import ProjectsView from './Views/ProjectsView/projects-view.jsx';

import './App.css';

function App() {

  const [studies, setStudies] = React.useState("hide");
  const [landing, setLanding] = React.useState("show");
  const [experience, setExperience] = React.useState("hide");
  const [projects, setProjects] = React.useState("hide");

  const [buttons, setButtons] = React.useState("<div></div>");

  const changeView = (viewSelected)=> {
    const buttonType = {
      'setLanding': <div><button type="button" className="izda-btn" onClick={ () => changeView('setStudies')}>Estudios</button>
                    {/* <button type="button" className="abajo-btn" onClick={ () => changeView('setProjects')}>Proyectos Personales</button> */}
                    <button type="button" className="dcha-btn" onClick={ () => changeView('setExperience')}>Experiencia Laboral</button></div>,
      'setStudies': <button type="button" className="dcha-btn" onClick={ () => changeView('setLanding')}>Página Principal</button>,
      'setExperience': <button type="button" className="izda-btn" onClick={ () => changeView('setLanding')}>Página Principal</button>,
      'setProjects': <button type="button" className="arriba-btn" onClick={ () => changeView('setLanding')}>Página Principal</button>
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
