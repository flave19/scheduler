import React from "react";
import ReactDOM from "react-dom";

import "index.scss";

import Application from "components/Application";

import axios from "axios";

if (process.env.REACT_APP_API_BASE_URL) {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
}

ReactDOM.render(<Application />, document.getElementById("root"));


// const pg = require("pg");

// const client = new pg.Client({
//   connectionString: process.env.DATABASE_URL || ""
// });

// client
//   .connect()
//   .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

// module.exports = client;
