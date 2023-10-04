import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Temp from "./Temp";
import Main from "./Main";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Main />} />
                <Route path={"temp"} element={<Temp />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
