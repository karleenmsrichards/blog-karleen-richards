import React, { useContext, useEffect } from "react";
import { appContext } from "../App.js";
import { Link } from "react-router-dom";

import "./Home.css";
import logo from "./logo.svg";
// import { useState } from "react";

export function Home() {
  const { message,  setMessage } = useContext(appContext);
//   const [ mess, setMess ] = useState("test");

//   useEffect(() => {
//     fetch("/api")
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(res.statusText);
//         }
//         return res.json();
//       })
//       .then((body) => {
// 		console.log(body);
//         setMessage(body);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [setMessage]);

  return (
    <main role="main">
      <div>
        <img className="logo" data-qa="logo" src={logo} alt="Just the React logo" />
        {/* <h1 className="message" data-qa="message">
          {message}
        </h1> */}
        <Link to="/about/this/site">About</Link>
      </div>
      {message?.map((mess) => (
        <h1 key={mess.id}>{mess.title}</h1>
      ))}
    </main>
  );
}

export default Home;
