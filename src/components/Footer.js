
import React from "react";
import styles from "../styles/style.module.css";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.foFlex}>
        <div className={styles.footerContainer}>
          <div className={styles.addressDiv}>
            <h1 className={styles.title}>Gadgets</h1>
            <div className={styles.email}>
              <input type="text" placeholder="Enter Email Address" />
              <button className={styles.shopBtn}>Sign Up</button>
            </div>
            <p>Contact Info</p>
            <p>17 Bourdilon Road Ikoyi Lagos Nigeria</p>
          </div>
          <div className={styles.categories}>
            <h4>Categories</h4>
            <ul>
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>Waterproof & Headphones</li>
            </ul>
          </div>
          <div className={styles.customerCare}>
            <h4>Customer care</h4>
            <ul>
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Orders History</li>
              <li>Order Tracking</li>
            </ul>
          </div>
          {/* <div className={styles.foPages}>
            <h4>Pages</h4>
            <ul>
              <li>Products</li>
              <li>Browse the Shop</li>
              <li>Smart Phones & Tablets</li>
              <li>Contact</li>
              <li> & Headphones</li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
