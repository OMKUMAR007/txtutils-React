import React, { useState } from "react";
import "./App.css";
import Alert from "./Component/Alert";
import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //wheather dark mmode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "grey";
      showAlert("Dark mode has been enable", "Success");
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light mode has been enable", "Success");
    }
  };
  return (
    <>
      {/* /      <Router> */}
      <Navbar title="txtUtils" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      {/* <Routes>
          <Route
            path="/"
            element={ */}
      <TextForm
        showAlert={showAlert}
        heading="Try txtUtils-Enter your text below !!"
        mode={mode}
      />
      {/* } */}
      {/* //     />
      //   </Routes>
      // </Router> */}
    </>
  );
}

export default App;
