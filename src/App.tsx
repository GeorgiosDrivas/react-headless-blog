import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/app.scss";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Blog from "./components/Blog";
import { useEffect } from "react";
import { apiPath } from "../variables";

export default function App() {
  useEffect(() => {
    fetch(apiPath)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
