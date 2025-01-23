import Link from "next/link";
import { Button } from "../ui/button";

function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        <div>
          <h2 className="text-2xl font-bold">Next Journal</h2>
        </div>
        <div>
          <ul className="flex items-center gap-4">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <Link href={"/profile"}>Profile</Link>
            <li>
              <Button>Sign in</Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
