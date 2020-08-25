import React from 'react';
import './experience-view.css';

const ExperienceView = (props)=> {
  const { visibility } = props;
  const { changeView } = props;

  return (
    <div className={visibility+" experience-view view"}>
        <h1>Experience</h1>
    </div>
  );
}

export default ExperienceView;
