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
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/blog">BLOG</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
        <SearchSvg />
      </div>
    </>
  );
}
