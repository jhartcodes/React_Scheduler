import React from "react";
import DayListItem from "./DayListItem";


// const classNames = require('classnames');
export default function DayList(props) {

  const dayArr =props.days.map(day => {

    return (<DayListItem 
      key = {day.id}
      name={day.name} 
      spots={day.spots} 
      selected={day.name === props.day}
      setDay={props.setDay}  />)

  })

  return (
    <ul>
    {dayArr}
    </ul> 
  );

} 
