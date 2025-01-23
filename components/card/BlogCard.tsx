import Link from "next/link";
import { Card, CardHeader, CardTitle } from "../ui/card";

interface BlogCardType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function BlogCard({ blog }: { blog: BlogCardType }) {
  const { title, id } = blog;
  return (
    <Link href={`/blog/${id}`}>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      </Card>
    </Link>
  );
}

export default BlogCard;
