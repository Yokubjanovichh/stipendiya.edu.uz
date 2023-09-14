import React from "react";
import { TypeItem } from "../../components";
import style from "./style.module.scss";

export default function Types() {
  return (
    <div className={style.types}>
      <h1 className={style.titleMain}>Stipendiya turlari</h1>
      <p className={style.title}>O'zbekiston Respublikasi Prezidentining davlat stipendiyasi</p>
      <p className={style.desc}>Talabalarga tayinlash uchun belgilangan O'zbekiston Respublikasi Prezidentining davlat stipendiyasi kvotasi (o'n bitta) quyidagi ta'lim yo'nalishlaridan har biri bo'yicha bittadan stipendiya hisobidan bakalavriat va magistratura uchun alohida-alohida taqsimlanadi:</p>
      <div className={style.typeItemList}>
        <div className={style.typeItemComlumn}>
          <TypeItem>madaniyat, san’at va sport;</TypeItem>
          <TypeItem>pedagogika;</TypeItem>
          <TypeItem>huquq va xalqaro munosabatlar;</TypeItem>
          <TypeItem>jurnalistika;</TypeItem>
        </div>
        <div className={style.typeItemComlumn}>
          <TypeItem>tabiiy fanlar;</TypeItem>
          <TypeItem>ijtimoiy-gumanitar va ijtimoiy fanlar;</TypeItem>
          <TypeItem>sog‘liqni saqlash va ijtimoiy ta’minot;</TypeItem>
          <TypeItem>texnika va informatika;</TypeItem>
        </div>
        <div className={style.typeItemComlumn}>
          <TypeItem>qishloq va suv xo‘jaligi;</TypeItem>
          <TypeItem>biznes va boshqaruv;</TypeItem>
          <TypeItem>xorijiy tillar;</TypeItem>
        </div>
      </div>
    </div>
  );
}
