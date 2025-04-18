import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/app.scss";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Blog from "./components/Blog";
import CategoryPosts from "./components/CategoryPosts";
import ArticlePage from "./components/articlePage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/category/:category" element={<CategoryPosts />} />
          <Route path="/blog/post/:slug" element={<ArticlePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
