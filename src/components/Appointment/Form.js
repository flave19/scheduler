import React, { useState } from "react";

import Button from "components/Button";

import InterviewerList from "components/InterviewerList";


export default function Form(props) {
  const [name, setName ] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null)


  console.log('light', props)

  const reset= ()=> {
    setName("")
    setInterviewer(null)
  }

  const onCancel= ()=>{
    reset()
    props.onCancel()
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            value={name}
            className="appointment__create-input text--semi-bold"
            name="name"//{props.name}
            type="text"
            placeholder="Enter Student Name"
            onChange={(event) => { setName(event.target.value) }} 

          />
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          value={interviewer}
          setInterviewer={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button onClick={onCancel} danger>Cancel</Button>
          <Button onClick={() => props.onSave(name, interviewer)} confirm>Save</Button>
        </section>
      </section>
    </main>
  );
}
