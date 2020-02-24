import { useState } from "react";

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);

  // console.log("red", history);
  // console.log("blue", setHistory);
  // console.log("green", initial);

  const transition = (mode, replace = false) => {
    if (replace === true) {
      const newHistory = [...history].slice(0, history.length - 1);
      setHistory(prev => [...newHistory, mode]);
    } else {
      setHistory(prev => [...prev, mode]);
    }
  };
  const back = () => {
    if (history.length > 1) {
      const newHistory = [...history].slice(0, history.length - 1);
      setHistory(prev => newHistory);
    }
  };
  return { mode: history[history.length - 1], transition, back };
}



