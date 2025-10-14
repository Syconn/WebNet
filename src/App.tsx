import {useTypeState} from "./util/Utility.tsx";
import {Pages} from "./util/Constants.ts";
import MainMenu from "./pages/MainMenu.tsx";
import "./App.css"
import GameLoop from "./pages/gameLoopPage/GameLoop.tsx";

export type Page = {
    page: string;
}

export type PageProps = {
    setPage: (auth: string) => void;
}

function App() {
    const [page, setPage] = useTypeState<Page>(() => {
        const stored = localStorage.getItem("page");
        console.log(stored);
        return stored ? JSON.parse(stored) : { "page": Pages.MainMenu};
    });

    return (
      <div className="App">
          {page.page == Pages.MainMenu && <MainMenu setPage={p => setPage("page", p)} />}
          {page.page == Pages.GameLoop && <GameLoop />}
      </div>
    )
}

export default App
