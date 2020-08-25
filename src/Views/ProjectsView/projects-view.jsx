import React from 'react';
import './projects-view.css';

function ProjectsView(props) {
  const { visibility } = props;
  const { changeView } = props;

  return (
    <div className={visibility+" projects-view view"}>
        <h1>Projects</h1>
    </div>
  );
}

export default ProjectsView;
