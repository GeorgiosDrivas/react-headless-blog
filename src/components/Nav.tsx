import { Link } from "react-router-dom";
import SearchSvg from "../assets/searchSvg";

export default function Nav() {
  return (
    <>
      <div id="nav-wrap">
        <Link to={"/"}>
          <h1>TravelBlog</h1>
        </Link>
        <ul>
          <li>
            <Link to="/">BLOG</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>
        <SearchSvg />
      </div>
    </>
  );
}
