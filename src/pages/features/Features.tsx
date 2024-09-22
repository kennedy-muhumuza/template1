import styles from "./Features.module.css";

const Features = () => {
  return (
    <section className={styles["features-container"]}>
      <div className={styles["features-subtitle"]}>Our Features</div>
      <h2 className={styles["features-statement"]}>
        Insurance Provide you a <br />
        Better Future
      </h2>
      <div className={styles["card-container"]}>
        <div className={styles["card"]}>
          <div className={styles["icon-number-container"]}>
            <div className={styles["card-icon"]}></div>
            <p className={styles["card-number"]}>01</p>
          </div>
          <h3>Trusted Company</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            quia ipsa provident atque!
          </p>
          <div className={styles["lowerbar"]}></div>
        </div>
        <div className={styles["card"]}>
          <div className={styles["icon-number-container"]}>
            <div className={styles["card-icon"]}></div>
            <p className={styles["card-number"]}>02</p>
          </div>
          <h3>Anytime Money Back</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            quia ipsa provident atque!
          </p>
          <div className={styles["lowerbar"]}></div>
        </div>
        <div className={styles["card"]}>
          <div className={styles["icon-number-container"]}>
            <div className={styles["card-icon"]}></div>
            <p className={styles["card-number"]}>03</p>
          </div>
          <h3>Always Pla Flexibility</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            quia ipsa provident atque!
          </p>
          <div className={styles["lowerbar"]}></div>
        </div>
        <div className={styles["card"]}>
          <div className={styles["icon-number-container"]}>
            <div className={styles["card-icon"]}></div>
            <p className={styles["card-number"]}>04</p>
          </div>
          <h3>Trusted Company</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            quia ipsa provident atque!
          </p>
          <div className={styles["lowerbar"]}></div>
        </div>
        <div className={styles["card"]}>
          <div className={styles["icon-number-container"]}>
            <div className={styles["card-icon"]}></div>
            <p className={styles["card-number"]}>05</p>
          </div>
          <h3>Trusted Company</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            quia ipsa provident atque!
          </p>
          <div className={styles["lowerbar"]}></div>
        </div>
      </div>
    </section>
  );
};

export default Features;
