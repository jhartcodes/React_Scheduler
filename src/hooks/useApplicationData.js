import { useState, useEffect } from "react";
import axios from "axios";

//application function to update state and render from axios. 
export default function useApplication() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      const [daysList, appointmentsList, interviewersList] = all;

      setState((prev) => ({
        ...prev,
        days: daysList.data,
        appointments: appointmentsList.data,
        interviewers: interviewersList.data,
      }));
    });
  }, []);

  // function to update daylist to render spots. 
  const newSpotDay = (dayName, daysArr, add) => {
    for (let day of daysArr) {
      if (day.name === dayName) {
        let newSpots = day.spots;
        add ? (newSpots += 1) : (newSpots -= 1);
        return { ...day, spots: newSpots };
      }
    }
  };

  //map the days array and pass in the update day. 
  const newDaysArr = (dayObj, daysArr) => {
    return daysArr.map((day) => (day.name === dayObj.name ? dayObj : day));
  };

  const bookInterview = (id, interview) => {
    return axios.put(`/api/appointments/${id}`, { interview }).then(() => {
      const appointment = {
        ...state.appointments[id],
        interview: {
          ...interview,
        },
      };
      const appointments = {
        ...state.appointments,
        [id]: appointment,
      };

      const days = newDaysArr(
        newSpotDay(state.day, state.days, null),
        state.days
      );

      setState({ ...state, appointments, days });
    });
  };

  const cancelInterview = (id) => {
    return axios.delete(`/api/appointments/${id}`).then(() => {
      const appointment = {
        ...state.appointments[id],
        interview: null,
      };
      const appointments = {
        ...state.appointments,
        [id]: appointment,
      };

      const days = newDaysArr(
        newSpotDay(state.day, state.days, true),
        state.days
      );

      setState({ ...state, appointments, days });
    });
  };

  return { state, setDay, bookInterview, cancelInterview };
}
