import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import Alert from "./Components/Layout/Alert";

import Home from "./Components/Pages/Home";
import User from "./Components/Users/User";
import NotFound from "./Components/Pages/NotFound";

import GithubState from "./Context/Github/State";
import AlertState from "./Context/Alert/State";

function App() {
  return (
    <>
      <GithubState>
        <AlertState>
          <div className="flex flex-col justify-between h-screen">
            <Router>
              <Header />
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:username" element={<User />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
              <Footer />
            </Router>
          </div>
        </AlertState>
      </GithubState>
    </>
  );
}

export default App;
