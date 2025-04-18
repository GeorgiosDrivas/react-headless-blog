export type PostsType = {
  id: number;
  title: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: [
      {
        source_url: string;
      }
    ];
  };
  link: string;
  excerpt: { rendered: string };
  date: string;
  content: { rendered: string };
  slug: string;
};
