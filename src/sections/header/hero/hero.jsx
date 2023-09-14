import React from "react";
import { Typing, HeroImg } from "../../../components";
import style from "./hero.module.scss";

export default function Hero() {
  return (
    <div className={style.wrapper}>
      <Typing />
      <HeroImg />
    </div>
  );
}
