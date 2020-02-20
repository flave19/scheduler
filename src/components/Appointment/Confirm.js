import React from "react";

import classNames from "classnames"

import Button from "components/Button"

export default function Confirm(props) {
  const message = props.message
  return (
    <main className="appointment__card appointment__card--confirm">
      <h1 className="text--semi-bold">{message}</h1>
      <section className="appointment__actions">
        <Button onClick={props.danger} danger>Cancel</Button>
        <Button onClick={props.confirm} danger>Confirm</Button>
      </section>
    </main>
  );
}
