import React from "react";
import "./styles.scss";

import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  console.log("cyan", props);

  const onSave = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING);
    props
      .bookInterview(props.id, interview)
      .then(() => transition(SHOW))
  };

  const onDelete = () =>{
    console.log("house")
    transition(DELETING)
    props
    .cancelInterview(props.id)
    .then(() => {
      transition(EMPTY)
    })
  }


  console.log(mode)
  return (
    <article className="appointment">
      <Header time={props.time} />

      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}

      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer.name}
          onDelete={()=> transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
        />
      )}

      {mode === SAVING && <Status message="Saving" />}

      {mode === CREATE && (
        <Form
          onCancel={() => back(EMPTY)}
          interviewers={props.interviewers}
          onSave={onSave}
        />
      )}

      {mode === DELETING && <Status message="Deleting" />}

      {mode === CONFIRM && (
        <Confirm
        message="are you sure you want to delete?"
        onConfirm={onDelete}
        onCancel={() => back()}
        />
      )}

      {mode === EDIT &&(
        <Form
        name={props.interview.student}
        interviewers={props.interviewers}
        interviewer={() => props.interview.interviewer.id}
        onSave={onSave}
        onCancel={() => back()}
        />
      )}


    </article>
  );
}
