import React from "react";
import "bootstrap"; // import JS
import "bootstrap/dist/css/bootstrap.min.css"; //import CSS
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from './pages/About';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
