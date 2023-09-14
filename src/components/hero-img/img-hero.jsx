import React from "react";
import img from "../../assets/img/info_section_logo.d752b88.png";
import style from "./style.module.scss";

export default function ImgHero() {
  return (
    <div className={style.imgWrapper}>
      <img src={img} alt="infoImg" />
    </div>
  );
}
