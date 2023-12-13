//foldername-routename
// then inside page.js
// src/about/developer/page.js
// in next js  file based routing
"use client";
import { useRouter } from "next/navigation";
const Developer = () => {
  const router = useRouter();
  return (
    <>
      <h1>Prabhat</h1>
      <button onClick={() => router.push("/login")}>Login</button>
    </>
  );
};
export default Developer;
