"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <Link href="/about">About</Link>
      <Link href="/login">Login</Link>
      <button onClick={() => router.push("/login")}>Login</button>
      <button onClick={() => router.push("/studentlist")}>StudentList</button>
      <h1>Home</h1>
    </main>
  );
}
