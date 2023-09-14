import React from "react";
import FooterLogo from "../../assets/img/icon2.95f15f6.png";
import Instagram from "../../assets/img/instagram.svg";
import Telegram from "../../assets/img/telegram.svg";
import Facebook from "../../assets/img/facebook.svg";
import YouTube from "../../assets/img/youtube.svg";
import Phone from "../../assets/img/phone.svg";

import style from "./style.module.scss";

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footerMain}>
        <div className={style.footerImg}>
          <a className={style.footerLogo} href="/">
            <img src={FooterLogo} alt="FooterLogo" />
            <span>stipendiya.edu.uz</span>
          </a>
          <p className={style.footerLogoText}>Portalda e'lon qilingan materiallardan nusxa ko'chirish, tarqatish va boshqa shakllarda foydalanish faqat tahririyat yozma roziligi bilan amalga oshirilishi mumkin.</p>
        </div>
        <div className={style.footerSocial}>
          <p className={style.footerSocialTitle}>Biz ijtimoiy tarmoqlarda</p>
          <div className={style.footerSocialIcons}>
            <a href="https://www.instagram.com/">
              <img src={Instagram} alt="Instagram" /> Instagram
            </a>
            <a href="https://web.telegram.org/k/">
              <img src={Telegram} alt="Telegram" /> Telegram
            </a>
            <a href="https://www.facebook.com/">
              <img src={Facebook} alt="Facebook" /> Facebook
            </a>
            <a href="https://www.youtube.com/">
              <img src={YouTube} alt="YouTube" /> YouTube
            </a>
          </div>
        </div>
        <div className={style.footerSocial}>
          <p className={style.footerSocialTitle}>Bog'lanish</p>
          <div className={style.footerSocialIcons}>
            <a href="tel: 1006">
              <img src={Phone} alt="Phone" /> Ishonch raqami: 1006
            </a>
            <a href="tel: +998712307171">
              <img src={Phone} alt="Phone" /> +998712307171
            </a>
            <a href="https://web.telegram.org/k/">
              <img src={Telegram} alt="Telegram" /> telegram bot
            </a>
          </div>
        </div>
      </div>
      <div className={style.hr}></div>
      <div className={style.copied}>
        <p>2023 © stipendiya.edu.uz</p>
        <a href="https://t.me/elektron_talim_markazi">© Raqamli ta'lim texnologiyalarini rivojlantirish markazi</a>
      </div>
    </div>
  );
}
