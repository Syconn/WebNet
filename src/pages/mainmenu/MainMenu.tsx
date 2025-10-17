import type {PageProps} from "../App.tsx";
import styles from "./MainMenu.module.css"
import {Pages} from "../util/Constants.ts";
import {changePage} from "../networking/WebRequests.tsx";

function MainMenu({ setPage }: PageProps) {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.topSection}>
                <p className={styles.title}>Code-Sort</p>
            </div>
            <div className={styles.bottomSection}>
                <button className={styles.playButton} onClick={() => changePage(Pages.GameLoop, setPage)}>
                    Play Game
                </button>
            </div>
        </div>
    )
}

export default MainMenu;