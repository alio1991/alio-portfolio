import React from 'react';
import './time-line.css';

const TimeLine = (props)=> {


  return (
    <div className="time-line-component">
        <div className="vertical-line"></div>
        <div className="events">
        <div className="date-event event">{props.lastDate}</div>
        {props.trail.map((elem,i)=> 
        <div className='event' key={i} onMouseEnter={()=>props.enter(elem.technologies)} onMouseLeave={()=>props.leave()}>
          <div className="name">{elem.enterprise}</div>
          <div className="stage">({elem.start}-{elem.end || 'Actualmente'})</div>
        </div>
        )}
        <div className="date-event event">{props.firstDate}</div>
        </div>
    </div>
  );
}

export default TimeLine;
