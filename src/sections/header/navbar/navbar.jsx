import React from "react";
import { Button } from "../../../components/index";
import logo from "../../../assets/img/icon.c9c20af.png";
import style from "./style.module.scss";

export default function Navbar() {
  return (
    <div className={style.wrapper}>
      <div className={style.logo}>
        <img src={logo} alt="stipendiyaLogo" />
        <p className={style.title}>stipendiya.edu.uz</p>
      </div>
      <Button text={"ONE ID orqali kirish"} />
    </div>
  );
}
