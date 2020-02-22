export function getAppointmentsForDay(state, day) {

  let apptsday = [];
  for (const selectedDay of state.days) {
    if (selectedDay.name === day) {
      for (const appts of selectedDay.appointments) {
        apptsday.push(state.appointments[appts])
      }
    }
  }

  return apptsday
}

export function getInterview(state, interview) {
  console.log("purple", state, interview)

  if (!interview ){
  return null
  }
  return {
    ...interview, interviewer: state.interviewers[interview.interviewer]
  }


}