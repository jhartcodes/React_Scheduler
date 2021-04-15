// function selectUserByName(state, name) {
//   const filteredNames = state.users.filter(user => user.name === name);
//   return filteredNames;
// }

// export default function getAppointmentsForDay (state, day) {
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

// module.exports = { getAppointmentsForDay };

export function getAppointmentsForDay(state, day) {

  const found = state.days.find(dayApp => dayApp.name === day);

  if (!found) {
    return [];
  }

  const newArr = found.appointments.map(y => {
    if (state.appointments[y]) {
      return state.appointments[y]
    }
  });

  return newArr;
}
