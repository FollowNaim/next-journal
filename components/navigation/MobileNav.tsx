"use client";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

interface User {
  id?: string | null;
  email?: string | null;
  family_name?: string | null;
  given_name?: string | null;
  picture?: string | null;
  username?: string | null;
  phone_number?: string | null;
}

function MobileNav({ user }: { user: User | null }) {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <div>
      <Hamburger size={22} toggled={isOpen} toggle={setOpen} />
      <div
        className={`absolute w-full h-fit py-10 px-4 inset-0 duration-300 transition-transform z-50 bg-black/80 backdrop-blur-md ease-in-out ${
          isOpen ? "translate-y-20 " : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col justify-center items-center gap-4">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <Link href={"/profile"}>Profile</Link>
          <li>
            {user ? (
              <Link prefetch={false} href={"api/auth/logout"}>
                <Button size="lg">Sign Out</Button>
              </Link>
            ) : (
              <Link href={"api/auth/login"}>
                <Button size="lg">Sign in</Button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileNav;
