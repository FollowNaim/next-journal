import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

async function app() {
  const { getUser } = await getKindeServerSession();
  const user = await getUser();
  console.log(user);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-4">
      <p>
        <span className="">👋 Welcome Back</span> My Friend :{" "}
        <span className="text-blue-500">
          {user.given_name + " " + user.family_name}
        </span>
      </p>
      <p>Welcome to your profile</p>
    </div>
  );
}

export default app;
