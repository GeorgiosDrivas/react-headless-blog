import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/app.scss";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
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
            <Route path="/" element={<Landing />} />
            <Route path="/category/:category" element={<CategoryPosts />} />
            <Route path="/post/:slug" element={<ArticlePage />} />
          </Routes>
        </BrowserRouter>
      </SearchContextProvider>
    </>
  );
}
