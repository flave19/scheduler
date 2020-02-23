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

export function getInterviewersForDay(state, day) {
 let intday =[]
 for(const selectDay of state.days) {
  if(selectDay.name === day) {
    for (const appts of selectedDay.appointments){
      if(state.appointments[appts].interview){
        intday.push(state.appointments[appts].interview.interviewer)
      }
    }
  }
  return intday

 }
}