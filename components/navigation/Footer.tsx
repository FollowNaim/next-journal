import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <div className="border-t py-6">
      <div className="container mx-auto flex justify-between items-center px-4 w-full">
        <div className="flex-1">
          <p>
            Next Journal - <span className=""> 2024 all rights reserved</span>
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <p className="font-semibold">Made with 💛 by Naim</p>
        </div>
        <div className="flex items-center gap-4 justify-end flex-1">
          <Link href={"https://github.com/followNaim"} target="_blank">
            <Github size={22} className="hover:text-blue-600 cursor-pointer" />
          </Link>
          <Link href={"https://linkedin.com/followNaim"} target="_blank">
            <Linkedin
              size={22}
              className="hover:text-blue-600 cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
