import React from "react";
import style from "./style.module.scss";

export default function TypeItem({ children }) {
  return (
    <div className={style.typeItem}>
      <span className={style.typeIcon}>+</span>
      <span style={{ fontFamily: "Inter" }} className={style.typeChildrenMain}>
        {children}
      </span>
    </div>
  );
}
