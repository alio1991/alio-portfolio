import React from 'react';
import './techno-bar.css';
import * as angular from '../../assets/icons/ANGULAR.png'
import * as bitBucket from '../../assets/icons/BITBUCKET.png'
import * as css3 from '../../assets/icons/CSS3.png'
import * as es6 from '../../assets/icons/es6.png'
import * as git from '../../assets/icons/GIT.png'
import * as gitHub from '../../assets/icons/GITHUB.png'
import * as gitLab from '../../assets/icons/GITLAB.png'
import * as jasmine from '../../assets/icons/JASMINE.png'
import * as jira from '../../assets/icons/JIRA.png'
import * as lit from '../../assets/icons/LIT.png'
import * as mocha from '../../assets/icons/MOCHA-CHAI.png'
import * as react from '../../assets/icons/REACT.png'
import * as slack from '../../assets/icons/SLACK.png'
import * as teams from '../../assets/icons/TEAMS.png'
import * as trello from '../../assets/icons/TRELLO.png'
import * as vsc from '../../assets/icons/VSC.png'
import * as vue from '../../assets/icons/VUE.png'

import * as maven from '../../assets/icons/MAVEN.png'
import * as html5 from '../../assets/icons/HTML5.png'
import * as linux from '../../assets/icons/LINUX.png'
import * as windows from '../../assets/icons/WINDOWS.png'
import * as php from '../../assets/icons/PHP.png'
import * as java from '../../assets/icons/JAVA.png'
import * as python from '../../assets/icons/PYTHON.png'

const TechnoBar = (props)=> {

  const technologies = [
    {'angular': angular},
    {'bitBucket': bitBucket},
    {'css3': css3},
    {'es6': es6},
    {'git': git},
    {'gitHub': gitHub},
    {'gitLab': gitLab},
    {'jasmine': jasmine},
    {'jira': jira},
    {'lit': lit},
    {'mocha': mocha},
    {'react':react},
    {'slack': slack},
    {'teams': teams},
    {'trello': trello},
    {'vsc': vsc},
    {'vue': vue},
    {'maven' : maven},
    {'html5' : html5},
    {'linux' : linux},
    {'windows' : windows},
    {'php' : php},
    {'java' : java},
    {'python' : python }
  ]

  return (
    <div className="techno-bar-component">
        {technologies.map((elem,i)=> {
          for(const key in elem){
          return <div className='technology' key={key}>
                  <img className={props.active.includes(key) ? 'techno-icon' : 'techno-icon icon-disabled'} src={elem[key]} alt={key}/>
                  <p className="icon-text">{key}</p>
                </div>
          }
          return true;
        })}
    </div>
  );
}

export default TechnoBar;
