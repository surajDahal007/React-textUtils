import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null); // to set and unset alert message

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";

      setInterval(() => {
        document.title = "TextUtils";
      }, 2000);

      setInterval(() => {
        document.title = "Download TextUtils!";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#042743";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
      <div>
        {/* /users --> components 1
        /users/home --> components 2 */}
        <Router>
          <Navbar
            title={"TextUtils"}
            about="aboutUs"
            mode={mode}
            toggleMode={toggleMode}
          />

          <Alert alert={alert} />

          <Routes>
            <Route exact path="/about" element={<About />} />
          </Routes>

          <Routes>
            <Route
              path="/"
              exact
              element={
                <TextForm
                  heading="Enter text below to analyse"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
