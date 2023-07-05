import { Route, Routes } from "react-router-dom";
import { useState, useEffect, createContext } from "react";

import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";

export let appContext = createContext(null);

const App = () => {
  const [message, setMessage] = useState("");
  const [userIsActive, setUserIsActive] = useState(false);

  useEffect(() => {
    fetch("/api")
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((body) => {
		console.log(body);
        setMessage(body.message);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
	<appContext.Provider value={{ message, setMessage, userIsActive, setUserIsActive }}>
		<header>
		{ userIsActive && <button >Log out</button> }
		</header>
    <Routes>
	<Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/about/this/site" element={<About />} />
    </Routes>
	</appContext.Provider>
  );
};

export default App;
