function StudentProfile() {
  const studentName = "Anu";
  const department = "AI & Data Science";
  const year = "2nd Year";

  return (
    <div className="student-profile">
      <h2>Student Profile</h2>
      <p><strong>Name:</strong> {studentName}</p>
      <p><strong>Department:</strong> {department}</p>
      <p><strong>Year:</strong> {year}</p>
    </div>
  );
}

export default StudentProfile;