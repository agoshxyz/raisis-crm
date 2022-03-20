import React from "react";
import styles from "./TestimonalsInfoBox.module.css";
import testimonals1 from "../../assets/images/testimonals1.png";
const TestimonalsInfoBox = () => {
  return (
    <div className={styles.testimonalsInfoBox}>
      <div className={styles.testimonalsInfoImage}>
        <img src={testimonals1} alt="testimonals" />
      </div>
      <div className={styles.testimonalsTitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis.
      </div>
      <div className={styles.author}>
        <div className={styles.authorName}>Nume Prenume</div>
        <div className={styles.authorJob}>Founder of Business Name</div>
      </div>
    </div>
  );
};

export default TestimonalsInfoBox;
