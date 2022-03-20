import React from "react";
import checkmark from "../../assets/images/checkmark.svg";
import styles from "./BenefitsReverse.module.css";
const BenefitsReverse = (props) => {
  return (
    <div className={styles.benefits}>
      <div className={styles.benefitsText}>
        <div className={styles.benefitsTitle}>{props.title}</div>
        <div className={styles.benefitsSubTitle}>
          {props.subTitle}
        </div>
        <div className={styles.benefitsDescription}>
          {props.description}
        </div>
        <div className={styles.featureContainer}>
          <div className={styles.discoverCheckmark}>
            <img src={checkmark} alt="checkmark" className={styles.checkmark} />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </div>
          <div className={styles.discoverCheckmark}>
            <img src={checkmark} alt="checkmark" className={styles.checkmark} />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </div>
          <div className={styles.discoverCheckmark}>
            <img src={checkmark} alt="checkmark" className={styles.checkmark} />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </div>
        </div>
      </div>
      <img
        src={props.image}
        alt="Benefits Section"
        className={styles.benefitsImage}
      />
    </div>
  );
};

export default BenefitsReverse;
