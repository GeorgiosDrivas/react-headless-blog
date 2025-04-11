import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/app.scss";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import SearchSvg from "./assets/searchSvg";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div id="nav-wrap">
          <h1>TravelBlog</h1>
          <Nav />
          <SearchSvg />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
