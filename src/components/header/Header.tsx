import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles["topmost-header"]}>
        <div className={styles["topmost-info"]}>
          121 King Street, Midville &nbsp; | &nbsp; insuren@gmail.com
        </div>
        <div className={styles["topmost-info"]}>Social media icons</div>
      </div>
      <div className={styles["lowermost-header"]}>
        <div>
          <b className={styles["company-icon"]}>Insuren</b>
        </div>
        <ul className={styles["list-container"]}>
          <li>Home</li>
          <li>About</li>
          <li>Pages</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact</li>
          <li>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              type="submit"
              className={styles["search-icon"]}
            >
              <path d="M19 11 A8 8 0 0 1 11 19 A8 8 0 0 1 3 11 A8 8 0 0 1 19 11 z" />
              <path d="M21 21l-4.35-4.35" />
            </svg>{" "}
          </li>
          <li>
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1.2em"
              width="1.2em"
              className={styles["bar-icon"]}
            >
              <path d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z" />
            </svg>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
