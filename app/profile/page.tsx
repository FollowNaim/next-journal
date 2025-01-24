import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Metadata } from "next";
import { sharedMetadata } from "../sharedMetadata";

export const metadata: Metadata = {
  ...sharedMetadata,
  title: "Profile | Next Journal",
};

async function app() {
  const { getUser } = await getKindeServerSession();
  const user = await getUser();
  return (
    <div className="min-h-[80vh] md:min-h-screen flex flex-col justify-center items-center gap-4">
      <p>
        <span className="">👋 Welcome Back</span> My Friend :{" "}
        <span className="text-blue-500">
          {user?.given_name + " " + user?.family_name}
        </span>
      </p>
      <p>Welcome to your profile</p>
    </div>
  );
}

export default app;
