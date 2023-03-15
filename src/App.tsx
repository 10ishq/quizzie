import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { QuizContextProvider } from "./context/QuizContext";

function App() {
  return (
    <>
      <QuizContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </QuizContextProvider>
    </>
  );
}

export default App;
