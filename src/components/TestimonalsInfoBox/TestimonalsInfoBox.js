import React from "react";
import styles from "./TestimonalsInfoBox.module.css";
const TestimonalsInfoBox = (props) => {
  return (
    <div className={styles.testimonalsInfoBox}>
      <div className={styles.testimonalsInfoImage}>
        <img src={props.image} alt="testimonals" />
      </div>
      <div className={styles.testimonalsTitle}>{props.title}</div>
      <div className={styles.author}>
        <div className={styles.authorName}>{props.authorName}</div>
        <div className={styles.authorJob}>{props.authorJob}</div>
      </div>
    </div>
  );
};

export default TestimonalsInfoBox;
