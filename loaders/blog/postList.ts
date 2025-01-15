import { Post } from "site/sdk/blog/types.ts";

interface Props {
  posts: Post[];
}

export type PostList = Post[];

export default function loader({ posts }: Props): PostList {
  return posts.map((post) => ({
    ...post,
    slug: post.slug.startsWith("/") ? post.slug : `/${post.slug}`,
  }));
}
