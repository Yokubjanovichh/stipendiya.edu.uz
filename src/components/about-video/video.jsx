import React from "react";
import style from "./style.module.scss";

export default function Video() {
  return (
    <div className={style.video}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/HhaIMqzdHNY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
}
