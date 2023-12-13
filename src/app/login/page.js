// Link Login to About
import Link from "next/link";
const page = () => {
  return (
    <div>
      <h1>Login</h1>
      <Link href="/about">Go to About Page</Link>
    </div>
  );
};

export default page;
