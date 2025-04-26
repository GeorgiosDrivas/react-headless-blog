import { Link } from "react-router-dom";
import Search from "./Search";
import { NavProps } from "../types/search-types";

export default function Nav({ searchQuery, setSearchQuery }: NavProps) {
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
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
    </>
  );
}
