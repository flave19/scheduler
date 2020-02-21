export function getAppointmentsForDay(state, day) {
  let empty = [];
  for (const selectedDay of state.days) {
    if (selectedDay.name === day) {
      for (const appts of selectedDay.appointments) {
        empty.push(state.appointments[appts])
      }
    }
  }
  return empty
}
