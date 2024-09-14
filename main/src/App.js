import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainCard from "./pages/MainCard";
import SideMenu from "./pages/SideMenu";

function App() {
    return (
        <>
            <MainCard />
            <SideMenu />
        </>
    );
}

export default App;
