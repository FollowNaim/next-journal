import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const fetchBlog = async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch blog post");
  }
  return res.json();
};

async function page({ params }: { params: Promise<{ blogId: string }> }) {
  const { blogId } = await params;
  console.log(blogId);
  const blog = await fetchBlog(parseInt(blogId));
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
