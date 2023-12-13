"use client";
const Student = ({ params }) => {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  const student = details.find((e) => params.student == e.id);

  return (
    <div>
      <h2>Student Detail </h2>
      <h2>
        Name= {student.name}, Role={student.role}
      </h2>
    </div>
  );
};

export default Student;
