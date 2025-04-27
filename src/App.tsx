import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/app.scss";
import About from "./components/About";
import Nav from "./components/Nav";
import Blog from "./components/Blog";
import CategoryPosts from "./components/CategoryPosts";
import ArticlePage from "./components/articlePage";
import { SearchContextProvider } from "./searchContext";

export default function App() {
  return (
    <>
      <SearchContextProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/category/:category" element={<CategoryPosts />} />
            <Route path="/post/:slug" element={<ArticlePage />} />
          </Routes>
        </BrowserRouter>
      </SearchContextProvider>
    </>
  );
}
