import React from 'react';
import './studies-view.css';

function StudiesView(props) {
  const { visibility } = props;
  const { changeView } = props;


  return (
    <div className={visibility+" studies-view view"}>
        <h1>Studies</h1>
    </div>
  );
}

export default StudiesView;
