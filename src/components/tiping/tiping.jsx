import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Button from "../button/button";
import Counter from "../count-up/count-up";
import style from "./style.module.scss";

export default function Typing() {
  const [typeEffect] = useTypewriter({
    words: ["Islom Karimov", "Prezident", "Ibn Sino", "Imom Al-Buxoriy", "Beruniy", "Ibn Sino", "Ulug'bek", "Navoiy"],
    loop: {},
    typeSpeed: 600,
    delaySpeed: 200,
  });
  return (
    <div className={style.container}>
      <div className={style.arizaTopshirish}>
        <div className={style.stipendiya}>
          <p>
            {typeEffect}{" "}
            <span className={style.cursor}>
              <Cursor cursorStyle="|" />
            </span>
          </p>
          <p>stipendiyasi</p>
        </div>
        <p className={style.description}>Talabalar va doktorantlar uchun davlat stipendiyalariga onlayn ariza yuborish portali</p>
        <Button text={"Ariza topshirish →"} />
      </div>
      <Counter />
    </div>
  );
}
