import { type Props as SeoProps } from "apps/website/components/Seo.tsx";
import { AppContext } from "site/apps/site.ts";
import PostSEO from "site/components/blog/PostSEO.tsx";
import type { PostPage } from "site/loaders/blog/postPage.ts";

interface Props {
  post: PostPage;
  /**
   * @ignore
   */
  seo: Omit<SeoProps, "jsonLDs" | "canonical"> | undefined;
}

export function loader(props: Props, _req: Request, ctx: AppContext) {
  return {
    ...props,
    seo: ctx.seo,
  };
}

export default function PostDetailsPage({ post }: Props) {
  if (!post) {
    return <div>Post not found</div>;
  }
  return (
    <>
      <PostSEO post={post} seo={undefined} />
      <main class="container min-h-[calc(100vh-121px)] py-10">
        <h1>{post.title}</h1>
        <hr class="my-5 border-stone-700" />
        {post.content.map(({ Component, props }) => <Component {...props} />)}
      </main>
    </>
  );
}

export function LoadingFallback() {
  return (
    <main class="container min-h-[calc(100vh-121px)] py-10">
      <div class="w-36 bg-stone-800 h-6 rounded-md" />
      <hr class="my-5 border-stone-700" />
      <div class="w-full h-96 bg-stone-800 rounded-md" />
    </main>
  );
}
