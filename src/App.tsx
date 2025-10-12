import {useTypeState} from "./util/Utility.tsx";
import {Pages} from "./util/Constants.ts";
import MainMenu from "./pages/MainMenu.tsx";
import "./App.css"
import GameLoop from "./pages/GameLoop.tsx";
import {requestPage} from "./networking/WebRequests.tsx";
import {useEffect, useState} from "react";

export type Page = {
    page: string;
}

export type PageProps = {
    setPage: (auth: string) => void;
}

function App() {
    const [test, setTest] = useState<string>("No data");
    const [page, setPage] = useTypeState<Page>(() => { return { "page": Pages.MainMenu}; });

    useEffect(() => {
        requestPage().then(pageData => setTest(pageData));
    }, [])

    return (
      <div className="App">
          <p>{test}</p>
          {page.page == Pages.MainMenu && <MainMenu setPage={p => setPage("page", p)} />}
          {page.page == Pages.GameLoop && <GameLoop />}
      </div>
    )
}

export default App
