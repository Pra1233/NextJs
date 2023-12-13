"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
const StudentList = () => {
  const router = useRouter();
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
  return (
    <div>
      {details.map((e) => (
        <li key={e.id}>
          <Link href={`/studentlist/${e.id}`}>{e.name}</Link>
        </li>
      ))}
    </div>
  );
};

export default StudentList;
