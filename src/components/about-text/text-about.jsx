import React from "react";
import { Button } from "../index";
import style from "./style.module.scss";

export default function TextAbout() {
  return (
    <div className={style.textAbout}>
      <p className={style.textTitle}>Tizimdan qanday foydalaniladi?</p>
      <p className={style.desc}>Tizimdan ro‘yxatdan o‘ting, yutuqlarni kiriting va ariza topshiring.</p>
      <Button text={"Ariza topshirish →"} />
    </div>
  );
}
