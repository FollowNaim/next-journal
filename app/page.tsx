import BlogCard from "@/components/card/BlogCard";
import axios from "axios";
interface BlogCardType {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export default async function Home() {
  const { data: blogs } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return (
    <div>
      <div className="container mx-auto grid grid-cols-3 gap-4 p-4">
        {blogs.map((blog: BlogCardType) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
