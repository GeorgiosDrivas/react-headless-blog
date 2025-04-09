import SearchSvg from "./assets/searchSvg";
import Nav from "./components/Nav";
import "./styles/app.scss";

export default function App() {
  return (
    <>
      <div id="nav-wrap">
        <h1>TravelBlog</h1>
        <Nav />
        <SearchSvg />
      </div>
    </>
  );
}
