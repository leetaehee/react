import React from "react";
import classNames from "classnames/bind";
//import styles from "./CSSModule.module.css";
import styles from "./CSSModule.module.scss";

const cx = classNames.bind(styles);

const CSSModule = () => {
  /* classnames 의 bind함수 이용*/
  return (
    <div className={cx("wrapper", "inverted")}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
  /*  css 클래스이름 두개 이상 적용할 때 (방법2) */
  /*
  return (
    <div className={[styles.wrapper, styles.inverted].join(" ")}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
  */
  /* css 클래스이름 두개 이상 적용할 때 */
  /*  
    return (
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      안녕하세요, 저는 <span className="somethins">CSS Module!</span>
    </div>
  );
  */
  /* css 클래스 이름 한개만 적용할 때 */
  /*
    return (
    <div className={styles.wrapper}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
  */
};

export default CSSModule;
