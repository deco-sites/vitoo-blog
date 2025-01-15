import type { PostList } from "site/loaders/blog/postList.ts";

interface Props {
  posts: PostList;
}

export default function PostsList({ posts }: Props) {
  return (
    <div class="container py-10 flex flex-col min-h-[calc(100vh-121px)] w-full gap-16">
      <ul class="flex flex-col gap-4 w-full">
        {posts.map((p) => (
          <li>
            <a
              class="underline underline-offset-4 flex justify-between"
              href={p.slug}
            >
              <span>{p.title}</span>
              <span>{p.createdAt}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function minMax(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function Line() {
  return (
    <div class="flex justify-between">
      <div
        style={{ "--w": `${minMax(200, 300)}px` }}
        class="w-[--w] h-6 bg-stone-800 rounded-md"
      />
      <div
        style={{ "--w": "100px" }}
        class="w-[--w] h-6 bg-stone-800 rounded-md"
      />
    </div>
  );
}

export function LoadingFallback() {
  return (
    <div class="container py-10 flex flex-col min-h-[calc(100vh-121px)] w-full gap-16">
      <div class="flex flex-col gap-4 w-full">
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
      </div>
    </div>
  );
}
