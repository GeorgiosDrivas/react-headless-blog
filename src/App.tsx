import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/app.scss";
import About from "./components/About";
import Nav from "./components/Nav";
import Blog from "./components/Blog";
import CategoryPosts from "./components/CategoryPosts";
import ArticlePage from "./components/articlePage";
import { useState } from "react";

export default function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <>
      <BrowserRouter>
        <Nav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path="/" element={<Blog searchQuery={searchQuery} />} />
          <Route path="/about" element={<About />} />
          <Route path="/category/:category" element={<CategoryPosts />} />
          <Route path="/post/:slug" element={<ArticlePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
