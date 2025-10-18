import {Pages} from "./util/Constants.ts";
import MainMenu from "./pages/MainMenu.tsx";
import "./App.css"
import GameLoop from "./pages/gameLoopPage/GameLoop.tsx";
import {useEffect, useState} from "react";
import {requestPage, serverStatus} from "./networking/WebRequests.tsx";

export type PageProps = {
    setPage: (page: string) => void;
}

function App() {
    const [page, setPage] = useState<string>(Pages.GameLoop)
    const [serverActive, setServerActive] = useState<boolean>(true)

    useEffect(() => { requestPage().then(pageData => { if (pageData) setPage(pageData); }); }, []);
    useEffect(() => { serverStatus().then(result => setServerActive(result != undefined)); }, [])

    return (
      <div className="App">
          {!serverActive && <p> Server is not Running Currently </p>}
          {page == Pages.MainMenu && <MainMenu setPage={p => setPage(p)} />}
          {page == Pages.GameLoop && <GameLoop />}
      </div>
    )
}

export default App
