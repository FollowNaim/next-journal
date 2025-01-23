import BlogCard from "@/components/card/BlogCard";
import axios from "axios";
interface BlogCardType {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export default async function Home() {
  const { data } = await axios.get("https://dummyjson.com/posts");
  return (
    <div className=" w-full dark:bg-black  bg-dot-white/[0.1] relative flex items-center justify-center">
      <div className="container mx-auto p-4">
        <div className="border-b pt-4 pb-8">
          <h2 className="text-3xl font-bold">
            <span className="text-muted-foreground">Next Journal -</span>{" "}
            <span className="text-blue-600">Unfiltered</span>, Unstoppable,
            Unafraid.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mt-4">
          {data.posts.map((blog: BlogCardType) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}
