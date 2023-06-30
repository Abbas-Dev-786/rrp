import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Computer from "./pages/Computer/Computer";
import Stranger from "./pages/Strangers/Online";
import Friend from "./pages/Friends/Online";
import PageNotFound from "./pages/PageNotFound";

import background_img from "./assets/background.png";
import "./App.css";
import CreateRoom from "./pages/CreateRoom";

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
            <Route index path="/" element={<Home />} />
            <Route path="/computer" element={<Computer />} />
            <Route path="/online/stranger" element={<Stranger />} />
            <Route path="/online/friend" element={<CreateRoom />}>
              <Route index path="room" element={<CreateRoom />} />
              <Route path="room/:roomid" element={<Friend />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </main>
    </>
  );
};

export default App;
