function getAppointmentsForDay(state, day) {

  const found = state.days.find(dayApp => dayApp.name === day);


  if (!found) {
    return [];
  }

  const appt = found.appointments.map(id => {
    if (state.appointments[id]) {
      return state.appointments[id]
    }
  });

  return appt;
};

 function getInterview(state,interview){
    
  if(interview === null) return null;

  let interviewerScheduled ={};
  for (let key in state.interviewers){
    if(state.interviewers[key].id === interview.interviewer)
    interviewerScheduled = state.interviewers[key]
  }

   return  {
     interviewer:interviewerScheduled,
     student:interview.student
   }
};

function getInterviewersForDay(state, day) {

  const found = state.days.find(dayApp => dayApp.name === day);


  if (!found) {
    return [];
  }

  const interviewer = found.interviewers.map(id => {
    if (state.interviewers[id]) {
      return state.interviewers[id]
    }
  });
  return interviewer;
};


module.exports = {getAppointmentsForDay,getInterview,getInterviewersForDay} ;