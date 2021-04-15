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
    console.log('interviewerScheduled:', interviewerScheduled)
  }

   return  {
     interviewer:interviewerScheduled,
     student:interview.student
   }
};


module.exports = {getAppointmentsForDay,getInterview} ;