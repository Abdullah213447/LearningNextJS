import Link from "next/link";
import BlogPage from "@/pages/blogs";

export const metadata = {
  "title" :"Blog Page",
  "description" :"Create, update and delete blogs of your choice!"  
}
export default function Blog() {
  return (
    <div>
      <BlogPage />
    </div>
  );
}
