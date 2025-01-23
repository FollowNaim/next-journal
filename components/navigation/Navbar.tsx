import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { Button } from "../ui/button";
import MobileNav from "./MobileNav";

async function Navbar() {
  const { getUser } = await getKindeServerSession();
  const user = await getUser();
  return (
    <nav className="border-b">
      <div className="container mx-auto flex justify-between items-center px-4 py-2 md:py-4">
        <div>
          <Link href={"/"}>
            <h2 className="text-2xl font-bold">Next Journal</h2>
          </Link>
        </div>
        <div>
          <ul className="items-center gap-4 hidden md:flex">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <Link href={"/profile"}>Profile</Link>
            <li>
              {user ? (
                <Link prefetch={false} href={"api/auth/logout"}>
                  <Button>Sign Out</Button>
                </Link>
              ) : (
                <Link href={"api/auth/login"}>
                  <Button>Sign in</Button>
                </Link>
              )}
            </li>
          </ul>
          <div className="block md:hidden">
            <MobileNav user={user} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
