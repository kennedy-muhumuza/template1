import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles["about-container"]}>
      <div className={styles["group-images"]}>
        <img alt="" src="./group1.jpg" className={styles["group-image2"]} />
        <img alt="" src="./handshake.jpg" className={styles["group-image1"]} />
        <div className={styles["experience-container"]}>
          <span className={styles["experience-figure"]}>12+</span>
          <p className={styles["experience-msg"]}>
            We have more than years of experience
          </p>
        </div>
      </div>
      <div className={styles["about-info-container"]}>
        <div className={styles["about-title-container"]}>
          <span className={styles["about-title-icon"]}></span>
          <p className={styles["about-title"]}>About Our Company</p>
        </div>
        <h1 className={styles["about-msg"]}>
          We Provide Best Insurance Policy for Any Purpose
        </h1>
        <p className={styles["about-details-msg"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
          reiciendis debitis quasi ipsa accusantium asperiores nesciunt ut
          reprehenderit corrupti sunt!
        </p>
        <div className={styles["about-details-list-container"]}>
          <div className={styles["aspect-container"]}>
            <div className={styles["aspect"]}>
              <span></span>
              <div>
                <p>
                  <b>Business Service</b>
                </p>
                <p>Quickly productive just in time strategic theme.</p>
              </div>
            </div>
            <div className={styles["aspect"]}>
              <span></span>
              <div>
                <p>
                  <b>Time Management</b>
                </p>
                <p>Quickly productive just in time strategic theme.</p>
              </div>
            </div>
          </div>
          <div className={styles["aspect-container"]}>
            <div className={styles["aspect"]}>
              <span></span>
              <div>
                <p>
                  <b>Marketing Plan</b>
                </p>
                <p>Quickly productive just in time strategic theme.</p>
              </div>
            </div>
            <div className={styles["aspect"]}>
              <span></span>
              <div>
                <p>
                  <b>Award Won</b>
                </p>
                <p>Quickly productive just in time strategic theme.</p>
              </div>
            </div>
          </div>
        </div>
        <button className={styles["readmore-btn"]}>READ MORE</button>
      </div>
    </section>
  );
};

export default About;
