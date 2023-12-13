"use client";
import styles from "./page.module.css";

export default function Home() {
  const fun = () => {
    console.log("first");
    alert("Hi");
  };

  const InnerComponent = () => {
    return <h1>Inner</h1>;
  };

  return (
    <main className={styles.main}>
      <h1>Home</h1>
      <button onClick={() => alert("hello")}>Click</button>
      <button onClick={fun}>Submit</button>
      {InnerComponent()}
      <InnerComponent />
    </main>
  );
}
