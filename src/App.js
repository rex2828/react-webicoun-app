import React, { useState } from "react";
import Login from "./components/Login";
import Blogs from './components/Blogs';
import Navbar from "./UI/Navbar";
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function logInHandler(mobile, password) {
    setIsLoggedIn(true);
    console.log(mobile, password);
  }



  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      {!isLoggedIn && <Login logInHandler={logInHandler} />}
      {isLoggedIn && <Blogs />}
    </div>
  );
}

export default App;
