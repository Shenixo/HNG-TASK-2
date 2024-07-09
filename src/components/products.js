import React from "react";
import styles from "../styles/style.module.css";

const Products = () => {
  return (
    <section>
      <div className={styles.sectionTitle}>
        <h2>Featured products</h2>
      </div>
      <div className={styles.sectionContainer}>
        <div className={styles.feProducts}>
          <div className={styles.imgDiv}>
            <img
              src="images\feImg-removebg-preview.png"
              alt=""
              className={styles.images}
            />
          </div>
          <div className={styles.viewDetails}>
            <a href="#">View Details</a>
          </div>
          <div className={styles.feProductsText}>
            <h3 className={styles.productName}>Laptop Cooler</h3>
            <p className={styles.price}>$42.00</p>
          </div>
        </div>
        <div className={styles.feProducts}>
          <div className={styles.imgDiv}>
            <img
              src="images\feImg2-removebg-preview.png"
              alt=""
              className={styles.images}
            />
          </div>
          <div className={styles.viewDetails}>
            <a href="#">View Details</a>
          </div>
          <div className={styles.feProductsText}>
            <h3 className={styles.productName}>X9-S Video Game</h3>
            <p className={styles.price}>$42.00</p>
          </div>
        </div>
        <div className={styles.feProducts}>
          <div className={styles.imgDiv}>
            <img
              src="images\feImg3-removebg-preview.png"
              alt=""
              className={styles.images}
            />
          </div>
          <div className={styles.viewDetails}>
            <a href="#">View Details</a>
          </div>
          <div className={styles.feProductsText}>
            <h3 className={styles.productName}>Wireless Switch</h3>
            <p className={styles.price}>$42.00</p>
          </div>
        </div>
        <div className={styles.feProducts}>
          <div className={styles.imgDiv}>
            <img
              src="images\feImg4-removebg-preview.png"
              alt=""
              className={styles.images}
            />
          </div>
          <div className={styles.viewDetails}>
            <a href="#">View Details</a>
          </div>
          <div className={styles.feProductsText}>
            <h3 className={styles.productName}>USB Extender</h3>
            <p className={styles.price}>$42.00</p>
          </div>
        </div>
      </div>
      <div className={styles.sectionTitle}>
        <h2>Latest products</h2>
        <div className={styles.navSection}>
          <ul className={styles.navLinks}>
            <li>
              <a href="#">New Arrival</a>
            </li>
            <li>
              <a href="#">Best Seller</a>
            </li>
            <li>
              <a href="#">Featured</a>
            </li>
            <li>
              <a href="#">Special Offer</a>
            </li>
          </ul>
        </div>
        <div
          className={`${styles.sectionContainer} ${styles.sectionContainerOther}`}
        >
          <div className={styles.latestProduct}>
            <div className={styles.imgDiv}>
              <div className={styles.latestDiv}>
                <img
                  src="images\leImg1-removebg-preview.png"
                  alt=""
                  className={styles.images}
                />
              </div>
            </div>
            <div className={styles.latestProductTitle}>
              <p>Zealot S9 Speaker</p>
              <p>
                $42.00 <del>$65.00</del>
              </p>
            </div>
          </div>
          <div className={styles.latestProduct}>
            <div className={styles.imgDiv}>
              <div className={styles.latestDiv}>
                <img
                  src="images\leImg2-removebg-preview.png"
                  alt=""
                  className={styles.images}
                />
              </div>
            </div>
            <div className={styles.latestProductTitle}>
              <p>Smart Keyboard</p>
              <p>
                $42.00 <del>$65.00</del>
              </p>
            </div>
          </div>
          <div className={styles.latestProduct}>
            <div className={styles.imgDiv}>
              <div className={styles.latestDiv}>
                <img
                  src="images\leImg3-removebg-preview.png"
                  alt=""
                  className={styles.images}
                />
              </div>
            </div>
            <div className={styles.latestProductTitle}>
              <p>Ultra Thin Wireless Mouse</p>
              <p>
                $42.00 <del>$65.00</del>
              </p>
            </div>
          </div>
          <div className={styles.latestProduct}>
            <div className={styles.imgDiv}>
              <div className={styles.latestDiv}>
                <img
                  src="images\leImg4-removebg-preview.png"
                  alt=""
                  className={styles.images}
                />
              </div>
            </div>
            <div className={styles.latestProductTitle}>
              <p>Oraimo smart Watch S</p>
              <p>
                $42.00 <del>$65.00</del>
              </p>
            </div>
          </div>
          <div className={styles.latestProduct}>
            <div className={styles.imgDiv}>
              <div className={styles.latestDiv}>
                <img
                  src="images\leImg5-removebg-preview.png"
                  alt=""
                  className={styles.images}
                />
              </div>
            </div>
            <div className={styles.latestProductTitle}>
              <p>STP Flashware 32G</p>
              <p>
                $42.00 <del>$65.00</del>
              </p>
            </div>
          </div>
          <div className={styles.latestProduct}>
            <div className={styles.imgDiv}>
              <div className={styles.latestDiv}>
                <img
                  src="images\leImg6-removebg-preview.png"
                  alt=""
                  className={styles.images}
                />
              </div>
            </div>
            <div className={styles.latestProductTitle}>
              <p>8 inches Android Tablets</p>
              <p>
                $42.00 <del>$65.00</del>
              </p>
            </div>
          </div>
          <div className={styles.latestProduct}>
            <div className={styles.imgDiv}>
              <div className={styles.latestDiv}>
                <img
                  src="images\leImg7-removebg-preview.png"
                  alt=""
                  className={styles.images}
                />
              </div>
            </div>
            <div className={styles.latestProductTitle}>
              <p>Infinix Hot 8</p>
              <p>
                $42.00 <del>$65.00</del>
              </p>
            </div>
          </div>
          <div className={styles.latestProduct}>
            <div className={styles.imgDiv}>
              <div className={styles.latestDiv}>
                <img
                  src="images\leImg8-removebg-preview.png"
                  alt=""
                  className={styles.images}
                />
              </div>
            </div>
            <div className={styles.latestProductTitle}>
              <p>Laptop Stand</p>
              <p>
                $42.00 <del>$65.00</del>
              </p>
            </div>
          </div>
          <div className={styles.latestProduct}>
            <div className={styles.imgDiv}>
              <div className={styles.latestDiv}>
                <img
                  src="images\leImg9-removebg-preview.png"
                  alt=""
                  className={styles.images}
                />
              </div>
            </div>
            <div className={styles.latestProductTitle}>
              <p>Beats Earbud</p>
              <p>
                $42.00 <del>$65.00</del>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
