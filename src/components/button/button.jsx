import React from "react";
import style from "./style.module.scss";

export default function Button({ text, textColor = "#fff", bgColor = "#5555ff", borderColor = bgColor }) {
  return (
    <button className={style.button} style={{ background: bgColor, borderColor: borderColor }}>
      <p style={{ color: textColor }}>{text}</p>
    </button>
  );
}
