import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

type Post = {
  id: number;
  title: { rendered: string };
  slug: string;
}

const CategoryPosts = () => {
  const { category } = useParams();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchCategoryPosts = async () => {
      try {
        const catRes = await fetch(`http://headless-blog.local/wp-json/wp/v2/categories?slug=${category}`);
        const catData = await catRes.json();

        if (catData.length === 0) return;

        const categoryId = catData[0].id;

        const postRes = await fetch(`http://headless-blog.local/wp-json/wp/v2/posts?categories=${categoryId}`);
        const postData = await postRes.json();

        setPosts(postData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCategoryPosts();
  }, [category]);

  return (
    <div>
      <h2>Posts in "{category}"</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/blog/${post.slug}`}>{post.title.rendered}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPosts;
