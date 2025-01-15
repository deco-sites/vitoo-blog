import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  href?: string;
  image?: ImageWidget;
  alt?: string;
  width?: number;
  height?: number;
  text?: string;
}

function Footer({
  image =
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4959/d7aa9290-074f-417c-99c3-5b0587c8c2ee",
  href = "https://deco.cx/",
  text = "Made with",
  alt = "Made with deco.cx",
  height = 20,
  width = 50,
}: Props) {
  return (
    <footer class="border-t border-t-stone-800 w-full py-5">
      <div class="container">
        <a
          href={href}
          class="flex flex-row gap-1 items-center text-xs"
          target="_blank"
        >
          {text && <p>{text}</p>}
          {image && (
            <Image
              src={image || ""}
              alt={alt || ""}
              height={height || 20}
              width={width || 50}
            />
          )}
        </a>
      </div>
    </footer>
  );
}

export default Footer;

export const LoadingFallback = (props: Props) => {
  return <Footer {...props} />;
};
