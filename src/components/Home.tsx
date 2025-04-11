import SearchSvg from "../assets/searchSvg";
import Nav from "./Nav";

export default function Home() {
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
