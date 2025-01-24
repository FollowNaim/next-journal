import { sharedMetadata } from "@/app/sharedMetadata";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart } from "lucide-react";
import { Metadata } from "next";

const fetchBlog = async (id: number) => {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch blog post");
  }
  return res.json();
};
export const metadata: Metadata = {
  ...sharedMetadata,
  title: "Blog Details | Next Journal",
};

async function page({ params }: { params: Promise<{ blogId: string }> }) {
  const { blogId } = await params;
  const blog = await fetchBlog(parseInt(blogId));
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">
      <Card className="max-w-xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl tracking-wide pb-4">
            {blog.title}
          </CardTitle>
          <CardDescription className="text-base">{blog.body}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center flex-wrap">
              {blog.tags.map((tag: string) => (
                <p key={tag} className="bg-muted p-2 rounded-md text-sm">
                  {tag}
                </p>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Heart size={20} fill="#cf009e" color="#cf009e" />{" "}
              <p className="text-sm text-muted-foreground">{blog.views}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default page;
