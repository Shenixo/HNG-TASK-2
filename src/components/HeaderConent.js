import React from "react";
import styles from "../styles/style.module.css";
export default function HeaderContent() {
  return (
    <>
      <div className={styles.headerMainContainer}>
        <div className={styles.flexBasis}>
          <div className={styles.headerText}>
            <div className={styles.flex}>
              <img src="images/lamp.png" alt="lamp" />

              <div className={styles.text}>
                <p className={styles.motto}> Best Gadgets shop in Lagos...</p>
                <h1>
                  Our Latest Gadgets <br /> for year 2024
                </h1>
                <small>
                  Vist our physical store or shop online with us whichever way
                  we ensure that you have a seamless experience experience while
                  shopping with us{" "}
                </small>
                <div>
                  <button className={styles.shopNowBtn}>Shop Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.circleDiv}>
            <div className={styles.bigCircle}>
              <div className={styles.smallCircle}>50% off</div>
              <div className="circleImgDiv">
                <img src="images/headerImg.png" alt="headerImg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
