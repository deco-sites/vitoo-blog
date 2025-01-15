export default function Header() {
  return (
    <header class="w-full h-16 border-b border-b-stone-800">
      <nav class="container flex items-center justify-between h-full">
        <a href="/">
          <h1 class="text-xl font-semibold">~/vitoo</h1>
        </a>
        <div class="flex items-center gap-4">
          <a href="/" class="underline">posts</a>
          <a
            href="https://vitoo.dev/?ref=blog.vitoo.dev"
            class="underline"
          >
            website
          </a>
        </div>
      </nav>
    </header>
  );
}

export const LoadingFallback = () => {
  return <Header />;
};
