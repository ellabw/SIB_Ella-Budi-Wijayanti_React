import { useState } from "react";
import reactLogo from "./assets/react.svg";
import NewsListIndonesia from "./components/pages/indonesia/newsListIndonesia";
import NewsListTech from "./components/pages/programming/newsListTech";
import NewsListCovid from "./components/pages/covid/newsListCovid";
import Header from "./components/organisms/header/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/organisms/footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="App">
        <Header />
        <Routes>
          <Route path="/" element={<NewsListIndonesia />} />
          <Route path="/programming" element={<NewsListTech />} />
          <Route path="/covid" element={<NewsListCovid />} />
          <Route path="/saved" element={"/"} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
