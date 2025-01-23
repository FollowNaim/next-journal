import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";

const fetchBlog = async (id: number) => {
  const { data: blog } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return blog;
};

async function page({ params }) {
  console.log(params.blogId);
  const blog = await fetchBlog(params.blogId);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>{blog.title}</CardTitle>
          <CardDescription>{blog.body}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}

export default page;
