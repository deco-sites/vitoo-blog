import { asset, Head } from "@deco/deco/htmx";
import { ComponentChildren } from "preact";

export const Layout = (
  { children, revision, hmrUniqueId }: {
    children: ComponentChildren;
    revision: string;
    hmrUniqueId: string;
  },
) => {
  return (
    <>
      {/* Include Icons and manifest */}
      <Head>
        {/* Enable View Transitions API */}
        <meta name="view-transition" content="same-origin" />

        {/* Tailwind v3 CSS file */}
        <link
          href={`/styles.css?revision=${revision}${hmrUniqueId}`}
          rel="stylesheet"
        />

        {/* Web Manifest */}
        <link rel="manifest" href={asset("/site.webmanifest")} />
      </Head>

      {/* Rest of Preact tree */}
      <div class="bg-stone-900 text-stone-200 font-mono">{children}</div>
    </>
  );
};
