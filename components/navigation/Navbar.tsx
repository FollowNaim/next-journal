import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { Button } from "../ui/button";

async function Navbar() {
  const { getUser } = await getKindeServerSession();
  const user = await getUser();
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
              {user ? (
                <Link href={"api/auth/logout"}>
                  <Button>Sign Out</Button>
                </Link>
              ) : (
                <Link href={"api/auth/login"}>
                  <Button>Sign in</Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
