// function selectUserByName(state, name) {
//   const filteredNames = state.users.filter(user => user.name === name);
//   return filteredNames;
// }

export default function getAppointmentsForDay (state, day) {
  let appointmentsArray = [];
  if (state.days) {
    for (let d of state.days) {
      if (d.name === day) {
        for (let id of d.appointments) {
          appointmentsArray.push(state.appointments[id])
        }
      }
    }
  }
  return appointmentsArray;
}

module.exports = { getAppointmentsForDay };
