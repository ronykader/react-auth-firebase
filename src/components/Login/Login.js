import axios from "axios";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import initializeFirebaseConfig from "../../Firebase/firebase.init";
initializeFirebaseConfig();

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const auth = getAuth();
  //   UseState for Email and Password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [account, setAccount] = useState(false);
  const [error, setError] = useState("");

  // Login with Google
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(token, user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  // Manage Account Login/Registration
  const handleAccount = (e) => {
    setAccount(e.target.checked);
  };

  // Set Email and Password
  const getEmailAddress = (e) => {
    setEmail(e.target.value);
  };

  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  // Registration with Firebase Email and Password
  const handleAuthentication = (e) => {
    e.preventDefault();

    account ? handleLogin() : handelRegistration();

    // handelRegistration(auth, email, password);
    // handleLogin(auth, email, password);
  };

  // Registration with Email and Password (Firebase)
  const handelRegistration = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        setEmail("");
        setPassword("");
        setError("");
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
  };
  // Login with Email and Password (Firebase)

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  // Check myGov API
  const requestAPI = async () => {
    axios
      .post("https://beta-idp-api.stage.mygov.bd/api/login", {
        // email: "rony.ksr06@gmail.com",
        email: "prottoyon@gmail.com",
        password: "#prot@rkorbd@toyon",
        // password: "12345678",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <button className="btn-primary" onClick={handleGoogleLogin}>
        Login with Google
      </button>
      <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
        User {account ? "Login" : "Registration"}
      </h3>
      <form onSubmit={handleAuthentication}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email address
          </label>
          <input
            type="email"
            onChange={getEmailAddress}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            onChange={getPassword}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <input
            type="submit"
            className="btn-primary"
            value={account ? "Login" : "Registration"}
          />
        </div>
      </form>
      <hr />
      <input
        onChange={handleAccount}
        type="checkbox"
        className="appearance-none indeterminate:bg-gray-300"
      />{" "}
      Already have account?
      <hr />
      <div>{error}</div>
      <h2 onClick={requestAPI}>Check API</h2>
    </div>
  );
};

export default Login;
