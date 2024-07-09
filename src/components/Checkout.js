import React from "react";
import styles from "../styles/style.module.css";


export default function Checkout() {
  return (
    <div>
      <div className={styles.shopList}>
        <div className={styles.shopContainer}>
          <h2>checkout</h2>
          <div className={styles.divLinks}>
            <a href="#">Home</a>
            <a href="#">Pages</a>
            <a href="#" className={styles.active}>
              Categories
            </a>
          </div>
        </div>
      </div>
      <div className={styles.shopListContainer}>
        <div className={styles.checkoutText}>
          <h2>Check Out</h2>
          <small>Cart/ Information/Shipping/Payment</small>
        </div>
        <div className={styles.checkoutFlex}>
          <div className={styles.form}>
            <div className={styles.formFlex}>
              <h2>Contact Information</h2>
              <p>Already have an account? Log In</p>
            </div>
            <input type="text" placeholder="Enter Email or Phone Number" />
            <small>
              <span>
                <input type="checkbox" checked />
              </span>
              Keep me to date on news
            </small>
            <h2 className={styles.ShoppingAddress}>Shopping address</h2>
            <div className={styles.nameFlex}>
              <span className={styles.leftName}>
                <input type="text" placeholder="First name (Optional)" />
              </span>
              <span className={styles.rightName}>
                <input type="text" placeholder="Last name" />
              </span>
            </div>
            <div className={styles.hundredWidth}>
              <input type="text" placeholder="Address" />
              <input
                type="text"
                placeholder="Apartment, Suite e.t.c (Optional)"
              />
              <input type="text" placeholder="City" />
            </div>
            <div className={styles.nameFlex}>
              <span className={styles.leftName}>
                <input type="text" placeholder="Country" />
              </span>
              <span className={styles.rightName}>
                <input type="text" placeholder="Postal Code" />
              </span>
            </div>
            <div className={styles.ShoppingBtn}>
              <button>Continue Shopping</button>
            </div>
          </div>
          <div className={styles.check}>
            <div className={styles.checkFlex}>
              <div className={styles.imgDiv}>
                <img src="images/teImg8.png" alt="" />
              </div>
              <div className={styles.checkText}>
                <div>
                  <h5>Wireless Game Pad</h5>
                  <p className={styles.color}>Color: White</p>
                  <p className={styles.color}>Size: N/A</p>
                </div>
                <p className={styles.price}>$32.00</p>
              </div>
            </div>
            <div className={styles.checkFlex}>
              <div className={styles.imgDiv}>
                <img src="images/teImg4.png" alt="" />
              </div>
              <div className={styles.checkText}>
                <div>
                  <h5>Wireless Game Pad</h5>
                  <p className={styles.color}>Color: White</p>
                  <p className={styles.color}>Size: N/A</p>
                </div>
                <p className={styles.price}>$32.00</p>
              </div>
            </div>
            <div className={styles.checkFlex}>
              <div className={styles.imgDiv}>
                <img src="images/teImg7.png" alt="" />
              </div>
              <div className={styles.checkText}>
                <div>
                  <h5>Wireless Game Pad</h5>
                  <p className={styles.color}>Color: White</p>
                  <p className={styles.color}>Size: N/A</p>
                </div>
                <p className={styles.price}>$32.00</p>
              </div>
            </div>
            <div className={styles.checkFlex}>
              <div className={styles.imgDiv}>
                <img src="images/teImg2.png" alt="" />
              </div>
              <div className={styles.checkText}>
                <div>
                  <h5>Wireless Game Pad</h5>
                  <p className={styles.color}>Color: White</p>
                  <p className={styles.color}>Size: N/A</p>
                </div>
                <p className={styles.price}>$32.00</p>
              </div>
            </div>
            <div className={styles.checkFlex}>
              <div className={styles.imgDiv}>
                <img src="images/teImg9.png" alt="" />
              </div>
              <div className={styles.checkText}>
                <div>
                  <h5>Wireless Game Pad</h5>
                  <p className={styles.color}>Color: White</p>
                  <p className={styles.color}>Size: N/A</p>
                </div>
                <p className={styles.price}>$32.00</p>
              </div>
            </div>
            {/* Repeat checkFlex structure for other items as needed */}
            <div className={styles.calcCheckout}>
              <span>
                <p className={styles.bold}>Subtotal:</p>
                <p>$458.00</p>
              </span>
              <span>
                <p className={styles.bold}>Shipping:</p>
                <p>$17.00</p>
              </span>
              <span>
                <p className={styles.bold}>Total:</p>
                <p>$475.00</p>
              </span>
              <button>Proceed To Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
