import Seo, { type Props as SeoProps } from "apps/website/components/Seo.tsx";
import { Post } from "site/sdk/blog/types.ts";

interface Props {
  post: Post;
  seo: Omit<SeoProps, "jsonLDs" | "canonical"> | undefined;
}

export default function PostSEO({ post, seo }: Props) {
  return (
    <Seo
      title={post.seo.title ?? post.title}
      description={post.seo.description}
      image={post.seo.image}
      noIndexing={post.seo.noIndexing}
      type="article"
      canonical={`/${post.slug}`}
      descriptionTemplate={seo?.descriptionTemplate || "%s"}
      titleTemplate={seo?.titleTemplate || "%s"}
      favicon={seo?.favicon || ""}
      themeColor={seo?.themeColor || ""}
    />
  );
}
