import React from "react";
import { Button } from "../../components/index";

import ScholarshipItem from "../../components/scholarship-item/scholarship-item";
import abuRayhonBeruniy from "../../assets/img/abuRayhonBeruniy.161723f.jpg";
import alisherNavoiy from "../../assets/img/alisherNavoiy.98744c6.jpg";
import abuAliIbnSino from "../../assets/img/abuAliIbnSino.e0a6744.jpg";
import mirzoUlugbek from "../../assets/img/mirzoUlugbek.dce9f32.jpg";
import imomAlBuxoriy from "../../assets/img/imomAlBuxoriy.6fa4ee0.jpg";
import kamoliddinBehzod from "../../assets/img/kamoliddinBehzod.34d2e61.jpg";

import style from "./style.module.scss";

const scholarshipsData = [
  {
    imgUrl: abuRayhonBeruniy,
    name: "Abu Rayhon Beruniy",
    desc: "(4-sentabr, 973, — 13-dekabr, 1048,) — Islom oltin davrining zabardast Xorazmlik qomusiy allomalaridan biri.",
  },
  {
    imgUrl: alisherNavoiy,
    name: "Alisher Navoiy",
    desc: "(9-fevral 1441-yil — 3-yanvar 1501-yil) — ulugʻ oʻzbek va boshqa turkiy xalqlarning shoiri, mutafakkiri va davlat",
  },

  {
    imgUrl: abuAliIbnSino,
    name: "Abu Ali Ibn Sino",
    desc: "(18-iyun 980-yil — 16-avgust 1037-yil) — oʻrta osiyolik buyuk qomusiy olim, tabib va faylasuf.",
  },

  {
    imgUrl: mirzoUlugbek,
    name: "Mirzo Ulug‘bek",
    desc: "(22-mart 1394-yil — 27-oktabr 1449-yil) buyuk oʻzbek astronomi (yulduzshunos) va matematigi.",
  },
  {
    imgUrl: imomAlBuxoriy,
    name: "Imom al-Buxoriy",
    desc: "(21-iyul 810-yil — 31-avgust 870-yil) muhaddislar imomi, hadis ilmining sultoni deb ham yuritiladi.",
  },
  {
    imgUrl: kamoliddinBehzod,
    name: "Kamoliddin Behzod",
    desc: "(1455-yil — 1536-yil) musavvir, Sharq uygʻonish davri sanʼatkori. Hirot miniatyura maktabi asoschisi.",
  },
];

export default function Scholarship() {
  return (
    <div className={style.scholarship}>
      <div className={style.scholarshipTitle}>
        <h1>Nomdor davlat stipendiyalari</h1>
        <p>O'zbekiston Respublikasi davlat oliy ta'lim muassasalarida o'qiyotgan talabalarga tayinlanadi.</p>
      </div>
      <div className={style.scholarshipItems}>
        {scholarshipsData.map((item, idx) => (
          <ScholarshipItem key={idx} imgUrl={item.imgUrl} name={item.name} desc={item.desc} />
        ))}
      </div>
      <Button text={"Batafsil ko'rish ⤴"} textColor={"#89DA61"} bgColor="none" borderColor={"#89DA61"} />
    </div>
  );
}
