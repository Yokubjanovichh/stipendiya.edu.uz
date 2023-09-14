import React from "react";
import style from "./style.module.scss";

export default function ScholarshipItem({ imgUrl, name, desc }) {
  return (
    <div className={style.scholarshipWrap}>
      <img src={imgUrl} alt="imgUrl" />
      <p className={style.name}>{name}</p>
      <p className={style.desc}>{desc}</p>
    </div>
  );
}
