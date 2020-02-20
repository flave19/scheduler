import React from "react";
import "./styles.scss"
import Header from "./Header"
import Empty from "./Empty"
import Show from "./Show"
import Confirm from "./Confirm"
import Status from "./Status"

export default function Appointment(props) {
  return(
    <article className="appointment">
      <Header time="12345pm" />
      <Empty />
      <Show interviewer="Sylvia Palmer" />
      <Confirm message="Delete the appointment?"/>
      <Status message="Deleting"/>
    </article>
  )
}