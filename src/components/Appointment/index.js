import React from "react";
import "./styles.scss";

import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";
import Status from "./Status"
import Confirm from "./Confirm"

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  console.log('cyan', props)

  const onSave = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer
    };
    
    props.bookInterview(props.id, interview)
    .then(() => transition(SHOW))
  }

  
  return (
    <article className="appointment">
      <Header time={props.time} />

      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}

      {mode === SHOW && (
        <Show
        student={props.interview.student}
        interviewer={props.interview.interviewer.id}
        />
      )}

      {mode === SAVING && <Status stat="Saving" />}

      {mode === CREATE &&(
        <Form
        onCancel = {() => back(EMPTY)}
        interviewers={props.interviewers}
        onSave={onSave}
        />


      )}
    </article>
  );
}