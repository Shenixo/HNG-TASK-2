import React from "react";
import styles from "../styles/style.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerr}>
        <div className={styles.containNav}>
          <div className={styles.navContainer}>
            <h1 className={styles.title}>Gadgets</h1>

            <ul className={styles.navLinks}>
              <li>
                <a href="/">Home</a>
              </li>
              {/* <li>
                <a href="/pages">Pages</a>
              </li> */}
              {/* <li>
                <a href="/products">Products</a>
              </li> */}
              <li>
                <a href="/shopping"> Shop</a>
              </li>
              <li>
                <a href="/checkout">Checkout</a>
              </li>
            </ul>
          </div>
          <div className={styles.inputDiv}>
            <input type="text" />{" "}
            <span>
              <img src="images/searchIcon.svg" className={styles.searchIcon} />
            </span>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
