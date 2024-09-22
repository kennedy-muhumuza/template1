import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles["about-container"]}>
      <div className={styles["group-images"]}>
        <img alt="" src="./group1.jpg" className={styles["group-image2"]} />
        <img alt="" src="./handshake.jpg" className={styles["group-image1"]} />
      </div>
      <div>
        <p>About Our Company</p>
        <h1>We Provide Best Insurance Policy for Any Purpose</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
          reiciendis debitis <br /> quasi ipsa accusantium asperiores nesciunt
          ut reprehenderit deserunt sit corrupti sunt!
        </p>
        <div>
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
      </div>
    </section>
  );
};

export default About;
