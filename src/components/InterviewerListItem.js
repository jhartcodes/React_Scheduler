import React from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";

export default function InterviewerListItem(props) {
  const interviewerclass =classNames('interviewers__item', {
    'interviewers__item--selected': props.selected }
  ) 

  return (
    <li className={interviewerclass}>
      <img
        key={props.id}
        className="interviewers__item-image"
        src="https://i.imgur.com/LpaY82x.png"
        src={props.avatar}
        selected={props.selected}
        onClick={() => {
          props.setInterviewer(props.name);
        }}
        alt={props.name}
      />
     {props.selected && props.name }
    </li>
  );
}

// id:number - the id of the interviewer
// name:string - the name of the interviewer
// avatar:url - a url to an image of the interviewer
// selected:boolean - to determine if an interview is selected or not
// setInterviewer:function - sets the interviewer upon selection
