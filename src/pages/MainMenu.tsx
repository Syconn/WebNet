import type { PageProps } from "../App.tsx";
import styles from "./MainMenu.module.css";
import { Pages } from "../util/Constants.ts";

function MainMenu({ setPage }: PageProps) {
  return (
      <div className={styles.pageContainer}>
        <div className={styles.topSection}>

          <div className={styles.topBg}></div>
          <div className={styles.topBg2}></div>
          <div className={styles.topBg3}></div>

          <p className={styles.title}>Code-Sort</p>
          <p className={styles.creators}>
            Adian Haack, Arron Ye, Rebby, Adrianna Zhu, dead guy
          </p>
        </div>

        <div className={styles.bottomSection}>
          <button
              className={styles.playButton}
              onClick={() => setPage(Pages.GameLoop)}
          >
            Play Game
          </button>
        </div>
      </div>
  );
}

export default MainMenu;