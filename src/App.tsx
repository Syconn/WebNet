import {Pages} from "./util/Constants.ts";
import MainMenu from "./pages/mainmenu/MainMenu.tsx";
import "./App.css"
// import GameLoop from "./pages/gameloop/GameLoop.tsx";
// import {requestPage} from "./networking/WebRequests.tsx";
import {useEffect, useState} from "react";

export type PageProps = {
    setPage: (page: string) => void;
}

function App() {
    const [page, setPage] = useState<string>(Pages.GameLoop);

    // useEffect(() => { requestPage().then(pageData => { if (pageData) setPage(pageData); }); }, []);

    return (
      <div className="App">
          {page == Pages.MainMenu && <MainMenu setPage={p => setPage(p)} />}
          {/*{page == Pages.GameLoop && <GameLoop />}*/}
      </div>
    )
}

export default App
