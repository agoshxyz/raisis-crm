import React from "react";
import styles from "./BenefitsCard.module.css";

const BenefitsCard = (props) => {
  return (
    <div className={styles.benefitInfo}>
      <img
        src={props.benefitsCardImage}
        className={styles.benefitImage}
        alt="Benefits Card"
      />
      <div className={styles.benefitTitle}>{props.title}</div>
      <div className={styles.benefitDescription}>{props.description}</div>
    </div>
  );
};

export default BenefitsCard;
