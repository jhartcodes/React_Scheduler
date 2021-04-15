// function selectUserByName(state, name) {
//   const filteredNames = state.users.filter(user => user.name === name);
//   return filteredNames;
// }

//  function getAppointmentsForDay (state, day) {
//   let appointmentsArray = [];
//   if (state.days) {
//     for (let d of state.days) {
//       if (d.name === day) {
//         for (let id of d.appointments) {
//           appointmentsArray.push(state.appointments[id])
//         }
//       }
//     }
//   }
//   return appointmentsArray;
// }

// module.exports = getAppointmentsForDay ;

function getAppointmentsForDay(state, day) {

  const found = state.days.find(dayApp => dayApp.name === day);
  console.log('found:',found);

  if (!found) {
    return [];
  }

  const appt = found.appointments.map(id => {
    if (state.appointments[id]) {
      return state.appointments[id]
    }
  });

  return appt;
}

module.exports = {getAppointmentsForDay} ;