import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title={"TextUtils"} about="aboutUs" />
      <div className="container my-4">
        <TextForm heading='Enter text below to analyse' />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
