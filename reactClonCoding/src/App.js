import "./index.scss";
import DetailPage from "./page/DetailPage";
import MainPage from "./page/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainPage />}></Route>
          <Route path={"/detailPage"} element={<DetailPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
