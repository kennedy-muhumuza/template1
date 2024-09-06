import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles["hero-container"]}>
      <img
        src="/ladyCoffeInverted.jpg"
        alt="office photo"
        className={styles["background-image"]}
      />
      <h1>
        Life Insurance <br />
        makes you happy
      </h1>
      <p>
        We have almost 35+ years of experience for providing <br />
        consulting services solutions.
      </p>
      <button className={styles["read-more-btn"]}>READ MORE</button>
    </section>
  );
};

export default Hero;
