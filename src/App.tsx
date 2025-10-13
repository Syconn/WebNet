import {useTypeState} from "./util/Utility.tsx";
import {Pages} from "./util/Constants.ts";
import MainMenu from "./pages/MainMenu.tsx";
import "./App.css"
import GameLoop from "./pages/GameLoop.tsx";
import {requestPage} from "./networking/WebRequests.tsx";
import {useEffect} from "react";

export type Page = {
    page: string;
}

export type PageProps = {
    setPage: (page: string) => void;
}

function App() {
    const [page, setPage] = useTypeState<Page>(() => { return { "page": Pages.MainMenu}; });

    useEffect(() => { requestPage().then(pageData => { if (pageData) setPage("page", pageData); }); }, []);

    return (
      <div className="App">
          {page.page == Pages.MainMenu && <MainMenu setPage={p => setPage("page", p)} />}
          {page.page == Pages.GameLoop && <GameLoop />}
      </div>
    )
}

export default App
