"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <div>
      <h1>About</h1>
      <button onClick={() => router.push("/login")}>Login</button>
      <Link href="/about/developer">Developer</Link>
    </div>
  );
};
export default About;
