interface Props {
  /**
   * @format rich-text
   */
  content: string;
}

export default function RichText({ content }: Props) {
  return (
    <div
      class="prose prose-stone prose-invert"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
