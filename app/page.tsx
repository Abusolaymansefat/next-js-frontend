import Link from "next/link";
import LikeButton from "./ui/LikeButton";


export default function Home() {
  // console.log("Root Route");
  return (
    <div>
      hello next js frontend project

      blogs page <Link href={"/blogs"}>Blogs</Link>

    <LikeButton/>
    </div>
  );
}
