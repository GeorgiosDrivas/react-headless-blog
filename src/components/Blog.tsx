import { useEffect, useState } from "react";
import { apiCategoriesPath, apiPostsPath } from "../../variables";
import { CategoryType } from "../types/blog-page-types";
import { Link } from "react-router-dom";
import { PostsType } from "../types/posts-types";

export default function Blog() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [posts, setPosts] = useState<PostsType[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      fetch(apiCategoriesPath)
        .then((response) => response.json())
        .then((data) => {
          setCategories(data);
        });
    };

    const getPosts = async () => {
      fetch(apiPostsPath)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setPosts(data);
        });
    };

    getCategories();
    getPosts();
  }, []);

  return (
    <>
      <div id="categories">
        {categories.map((category) => (
          <Link
            key={category.name}
            className="blog-category"
            to={`/blog/category/${category.slug}`}
          >
            <p>{category.name}</p>
          </Link>
        ))}
      </div>
      <div className="posts">
        {posts.map((post: PostsType) => (
          <div key={post.id} className="single-post">
            <div className="post-img">
              {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                <img
                  src={post._embedded["wp:featuredmedia"][0].source_url}
                  alt={post.title.rendered}
                />
              )}
            </div>
            <a href={post.link} className="post-title">
              {post.title.rendered}
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
