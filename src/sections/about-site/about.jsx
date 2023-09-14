import React from "react";
import { Video, AboutText } from "../../components/index";
import style from "./style.module.scss";

export default function About() {
  return (
    <div className={style.about}>
      <Video />
      <AboutText />
    </div>
  );
}
