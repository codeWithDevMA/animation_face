import React, { useEffect } from "react";
import {
  F1,
  F10,
  F11,
  F12,
  F13,
  F14,
  F15,
  F16,
  F17,
  F2,
  F20,
  F22,
  F23,
  F3,
  F5,
  F6,
  F7,
  F9,
  Neutral,
} from "./components";

const Switch = ({ status }) => {
  useEffect(() => {}, [status]);

  console.log(status);
  switch (status) {
    case "1":
      return <F1 />;
    case "2":
      return <F2 />;

    case "3":
      return <F3 />;

    case "5":
      return <F5 />;

    case "6":
      return <F6 />;
    case "7":
      return <F7 />;

    case "9":
      return <F9 />;
    case "10":
      return <F10 />;
    case "11":
      return <F11 />;

    case "12":
      return <F12 />;
    case "13":
      return <F13 />;
    case "14":
      return <F14 />;
    case "15":
      return <F15 />;
    case "16":
      return <F16 />;
    case "17":
      return <F17 />;
    case "20":
      return <F20 />;
    case "22":
      return <F22 />;
    case "23":
      return <F23 />;
    default:
      return <Neutral />;
  }
};

export default Switch;
