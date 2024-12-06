import React, { useState } from "react";
import "./teacher-addstudent.css";
import VanvasLogo from "./assets/Vanvas.png";
import TeacherSidebar from "./teacher-sidebar";

const TeacherAddStudent = () => {
  const [classId, setClassId] = useState("");
  const [studentId, setStudentId] = useState("");
  const [studentName, setStudentName] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAddStudentSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newStudent = {
      id: studentId,
      name: studentName,
    };

    try {
      const response = await fetch(`/api/classrooms/${classId}/addStudent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStudent),
      });

      if (response.ok) {
        setStatusMessage(`Student "${studentName}" added to classroom "${classId}".`);
        setClassId("");
        setStudentId("");
        setStudentName("");
      } else {
        const error = await response.json();
        setStatusMessage(`Failed to add student: ${error.message || "Unknown error"}`);
      }
    } catch (error) {
      setStatusMessage("An error occurred while adding the student.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="teacher-addstudent-layout">
      <TeacherSidebar />
      <div className="teacher-addstudent-main">
        <header className="teacher-addstudent-header">
          <h1>Teacher Add Student</h1>
          <img src={VanvasLogo} alt="Vanvas Logo" className="vanvas-logo" />
        </header>

        <div className="teacher-addstudent-container">
          <section className="teacher-addstudent-form">
            <h2>Add a New Student</h2>
            <form onSubmit={handleAddStudentSubmit}>
              <div className="form-group">
                <label htmlFor="classId">Classroom ID:</label>
                <input
                  type="text"
                  id="classId"
                  value={classId}
                  onChange={(e) => setClassId(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="studentId">Student ID:</label>
                <input
                  type="text"
                  id="studentId"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="studentName">Student Name:</label>
                <input
                  type="text"
                  id="studentName"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="teacher-addstudent-button" disabled={isLoading}>
                {isLoading ? "Adding..." : "Add Student"}
              </button>
            </form>
            {statusMessage && <p className="status-message">{statusMessage}</p>}
          </section>
        </div>
      </div>
    </div>
  );
};

export default TeacherAddStudent;