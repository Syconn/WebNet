import type {PageProps} from "../App.tsx";
import styles from "./MainMenu.module.css"
import {Pages} from "../util/Constants.ts";

function MainMenu({ setPage }: PageProps) {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.topSection}>
                <p className={styles.title}>Code-Sort</p>
            </div>
            <div className={styles.bottomSection}>
                <button className={styles.playButton} onClick={() => setPage(Pages.GameLoop)}>
                    Play Game
                </button>
            </div>
        </div>
    )
}

export default MainMenu;