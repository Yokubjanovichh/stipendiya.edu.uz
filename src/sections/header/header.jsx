import React from "react";
import { Hero, Navbar } from "./index";
import style from "./style.module.scss";

export default function Header() {
  return (
    <div className={style.header}>
      <Navbar />
      <Hero />
    </div>
  );
}
