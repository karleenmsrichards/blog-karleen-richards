import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase";
import { useState, useContext } from "react";
import { appContext } from "../App.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const { setUserIsActive } = useContext(appContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("User Created Successfully");
        navigate("/");
        setUserIsActive(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  };

  const signIn = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("User Logged In Successfully");
        navigate("/");
        setUserIsActive(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  };

  const handleSignOut = (event) => {
    event.preventDefault();

    signOut(auth)
      .then(() => {
        alert("User Logged Out Successfully");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <form>
      <fieldset>
        <legend>Please Login</legend>
        <label htmlFor="username">Email</label>
        <input type="email" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={signUp}>Create an account</button>
        <button onClick={signIn}>Login</button>
        <button onClick={handleSignOut}>Logout</button>
      </fieldset>
    </form>
  );
};

export default Login;
