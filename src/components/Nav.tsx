import { Link } from "react-router-dom";
import SearchSvg from "../assets/searchSvg";

export default function Nav() {
  return (
    <>
      <div id="nav-wrap">
        <h1>TravelBlog</h1>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
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
