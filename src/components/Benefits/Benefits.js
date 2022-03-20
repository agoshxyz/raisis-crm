import React from "react";
import checkmark from "../../assets/images/checkmark.svg";
import styles from "./Benefits.module.css";
const Benefits = (props) => {
  return (
    <div className={styles.benefits}>
      <img
        src={props.image}
        alt="Hero section"
        className={styles.benefitsImage}
      />

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
    </div>
  );
};

export default Benefits;
