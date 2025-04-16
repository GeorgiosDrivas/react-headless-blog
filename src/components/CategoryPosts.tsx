import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PostsType } from "../types/posts-types";
import { apiPostsPath } from "../../variables";

const CategoryPosts = () => {
  const { category } = useParams();
  const [posts, setPosts] = useState<PostsType[]>([]);

  useEffect(() => {
    const fetchCategoryPosts = async () => {
      try {
        const catRes = await fetch(
          `http://headless-blog.local/wp-json/wp/v2/categories?slug=${category}`
        );
        const catData = await catRes.json();

        if (catData.length === 0) return;

        const categoryId = catData[0].id;
        const postRes = await fetch(`${apiPostsPath}&categories=${categoryId}`);
        const postData = await postRes.json();

        setPosts(postData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCategoryPosts();
  }, [category]);

  return (
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
          <a href={post.link}>{post.title.rendered}</a>
        </div>
      ))}
    </div>
  );
};

export default CategoryPosts;
