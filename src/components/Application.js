import React, { useState, useEffect } from "react";

import axios from "axios";
import "components/Application.scss";
import DayList from "components/DayList";
import "components/Appointment";
import Appointment from "components/Appointment";
import {getAppointmentsForDay,getInterview,getInterviewersForDay} from 'helpers/selectors'



export default function Application(props) {
  const [state, setState] = useState({
    day: 'Monday',
    days: [],
    appointments: {},
    interviewers: {}
  });

  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    axios.put('/api/appointments/:id')
    .then(()) =>  setState({
      ...state,
      appointments
    }));
  
  }


  const setDay = day => setState({ ...state, day });

  const setDays = days => setState(prev => ({ ...prev, days }));

  

  useEffect(() => {
    Promise.all([
    axios.get('/api/days'),
    axios.get('/api/appointments'),
    axios.get('/api/interviewers')
  ])
    .then(all=> {
      const [daysList, appointmentsList, interviewersList] = all
      setState(prev =>({...prev, days: daysList.data, appointments: appointmentsList.data, interviewers: interviewersList.data }))
    })

  }, [])
  
 
  const dailyAppointments = getAppointmentsForDay(state, state.day);  
 
  const appointmentList = dailyAppointments.map((appointment) => {

  const interview = getInterview(state, appointment.interview);
  const interviewers =getInterviewersForDay(state, state.day)

    // / unsure of where interview = {getInterview(state,) before i had interview={appointment.time}
    return <Appointment key={appointment.id} {...appointment} 
    interview ={interview}
    interviewers ={interviewers}
    bookInterview={bookInterview}

    />;
  });
  

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={state.days} day={state.day} setDay={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointmentList}
        <Appointment key="last" time="5pm" />
        <nav></nav>
      </section>
    </main>
  );
}
