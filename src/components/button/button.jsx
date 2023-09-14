import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

export default function Button({ text, textColor = "#fff", bgColor = "#5555ff", borderColor = bgColor, link }) {
  return (
    <button className={style.button} style={{ background: bgColor, borderColor: borderColor }}>
      <Link style={{ textDecoration: "none", width: "100%", height: "100%" }} to={link}>
        <p style={{ color: textColor }}>{text}</p>
      </Link>
    </button>
  );
}
