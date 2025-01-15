import type { RequestURLParam } from "apps/website/functions/requestToParam.ts";
import type { PostList } from "site/loaders/blog/postList.ts";
import type { Post } from "site/sdk/blog/types.ts";

interface Props {
  slug: RequestURLParam;
  posts: PostList;
}

export type PostPage = Post | null;

export default function loader({ slug, posts }: Props): PostPage {
  return posts.find((p) =>
    p.slug.toLowerCase() === `/${slug?.toLowerCase()}`
  ) ||
    null;
}
