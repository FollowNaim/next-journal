import { Heart } from "lucide-react";
import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

interface BlogCardType {
  userId: number;
  id: number;
  title: string;
  body: string;
  tags: string[];
  views: number;
}

function BlogCard({ blog }: { blog: BlogCardType }) {
  const { title, id, body, views } = blog;
  return (
    <Link href={`/blog/${id}`}>
      <Card className="hover:border-blue-600/50 transition-all  duration-200 group relative rounded-none h-40 flex flex-col justify-center">
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <div className="absolute top-8 right-6 hidden md:flex items-center gap-2">
          <Heart size={20} fill="#cf009e" color="#cf009e" />{" "}
          <p className="text-sm text-muted-foreground">{views}</p>
        </div>
        <CardHeader>
          <CardTitle className="mb-4 text-lg group-hover:text-blue-600">
            {title}
          </CardTitle>
          <CardDescription className="line-clamp-2">{body}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}

export default BlogCard;

export const Icon = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#7a7a78"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
