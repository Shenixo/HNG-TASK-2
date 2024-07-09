import React from "react";
import styles from "../styles/style.module.css";

export default function Shopping() {
  return (
    <>
      <div className={styles.shopList}>
        <div className={styles.shopContainer}>
          <h2>Shop Link</h2>
          <div className={styles.divLinks}>
            <a href="#">Home</a>
            <a href="#">Pages</a>
            <a href="#" className={styles.active}>
              Categories
            </a>
          </div>
        </div>
      </div>
      <div className={styles.flexCategory}>
        <p>Shop by Category</p>
        <div className={styles.rightFlexCategory}>
          <span>
            Per Page: <input type="text" />
          </span>
          <span>
            Sort By: <input type="text" placeholder="Best Match" />
          </span>
          <span>
            View: <img src="images/list.svg" alt="list view" />
            <img src="images/widgets.svg" alt="widget view" />
            <input type="text" />
          </span>
        </div>
      </div>
      <div className={styles.shopListContainer}>
        <div className={styles.content}>
          <div className={styles.contentImgDiv}>
            <img src="images\feImg-removebg-preview.png" alt="laptop" />
          </div>
          <div className={styles.contentText}>
            <h4>Laptops and Computers</h4>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipi elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.contentImgDiv}>
            <img src="images\leImg4-removebg-preview.png" alt="laptop" />
          </div>
          <div className={styles.contentText}>
            <h4>Laptops and Computers</h4>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipi elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.contentImgDiv}>
            <img src="images\teImg11.png" alt="laptop" />
          </div>
          <div className={styles.contentText}>
            <h4>Laptops and Computers</h4>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipi elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.contentImgDiv}>
            <img src="images\teImg7.png" alt="laptop" />
          </div>
          <div className={styles.contentText}>
            <h4>Laptops and Computers</h4>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipi elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
