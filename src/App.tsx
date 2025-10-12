import {useTypeState} from "./util/Utility.tsx";
import {Pages} from "./util/Constants.ts";
import MainMenu from "./pages/MainMenu.tsx";
import "./App.css"
import GameLoop from "./pages/GameLoop.tsx";

export type Page = {
    page: string;
}

export type PageProps = {
    setPage: (auth: string) => void;
}

// Uses local storage to hold game state without having to fully rely on network protocols
function App() {
    const [page, setPage] = useTypeState<Page>(() => {
        const stored = localStorage.getItem("page");
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
