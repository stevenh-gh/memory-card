import { useEffect } from "react";
import "./App.css";
import CardGrid from "./CardGrid/CardGrid";
import Header from "./Header/Header";

function App() {
    useEffect(() => {
        document.title = "Genshin Memory Game";
    }, []);

    return (
        <div className="container m-auto">
            <Header />
            <CardGrid />
        </div>
    );
}

export default App;
