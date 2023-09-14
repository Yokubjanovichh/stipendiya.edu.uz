import React from "react";
import CountUp from "react-countup";
import style from "./style.module.scss";

export default function Counter() {
  return (
    <div className={style.countSec}>
      <div className={style.countItem}>
        <CountUp start={0} end={1925} delay={0}>
          {({ countUpRef }) => (
            <div className={style.wrapCount}>
              <p className={style.count} ref={countUpRef} />
              <p className={style.countTetx}>Jami ro'yhatdan o'tganlar soni</p>
            </div>
          )}
        </CountUp>
      </div>
      <span className={style.slash}></span>
      <div className={style.countItem}>
        <CountUp start={0} end={1240} delay={0}>
          {({ countUpRef }) => (
            <div className={style.wrapCount}>
              <p className={style.count} ref={countUpRef} />
              <p className={style.countTetx}>Jami arizalar soni</p>
            </div>
          )}
        </CountUp>
      </div>
    </div>
  );
}
