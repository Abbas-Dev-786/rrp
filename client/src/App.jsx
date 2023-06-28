import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Computer from "./pages/Computer/Computer";
import Online from "./pages/Online/Online";
import PageNotFound from "./pages/PageNotFound";

import background_img from "./assets/background.png";
import "./App.css";

const App = () => {
  return (
    <>
      <main className="main">
        <img
          src={background_img}
          className="background_img"
          alt="background img"
        />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/computer" element={<Computer />} />
            <Route path="/online/stranger" element={<Online />} />
            <Route path="/online/friend" element={<Online />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </main>
    </>
  );
};

export default App;
