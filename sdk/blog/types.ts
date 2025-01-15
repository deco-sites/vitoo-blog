import { Section } from "@deco/deco/blocks";
import { ImageWidget } from "apps/admin/widgets.ts";

export interface Post {
  title: string;
  slug: string;
  /**
   * @format date
   */
  createdAt: string;
  content: Section[];
  seo: {
    /**
     * @description Overrides the post title
     */
    title?: string;
    /**
     * @format textarea
     */
    description: string;
    /**
     * @format image
     */
    image?: ImageWidget;
    /**
     * @description If true, the post will not be indexed by search engines
     */
    noIndexing?: boolean;
  };
}
