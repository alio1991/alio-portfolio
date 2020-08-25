import React from 'react';
import './landing-view.css';

function LandingView(props) {
  const { visibility } = props;
  const { changeView } = props;

  return (
    <div className={visibility+" landing-view view"}>
        <div className="alio-background">

        </div>
        <div className="personal-info">

          <h1 className="name">Alio Agudo Alonso</h1>
          <h2 className="role">Frontend Developer</h2>

          <p>Lorem fistrum amatomaa llevame al sircoo apetecan me cago en tus muelas amatomaa te voy a borrar el cerito.
            Ese que llega por la gloria de mi madre condemor mamaar la caidita no puedor pecador te voy a borrar el cerito 
            a wan no puedor fistro. Torpedo fistro hasta luego Lucas jarl benemeritaar de la pradera fistro está la cosa muy
             malar a gramenawer. No puedor por la gloria de mi madre benemeritaar mamaar llevame al sircoo a gramenawer no 
             puedor qué dise usteer hasta luego Lucas torpedo. Condemor ese hombree llevame al sircoo me cago en tus muelas 
             a wan a peich te va a hasé pupitaa al
          </p>
        </div>
    </div>
  );

}

export default LandingView;
