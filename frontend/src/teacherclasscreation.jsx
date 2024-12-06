import React, { useState } from "react";
import "./teacherclasscreation.css";
import VanvasLogo from "./assets/Vanvas.png";
import TeacherSidebar from "./teacher-sidebar";

const TeacherClassCreation = () => {
  const [classId, setClassId] = useState("");
  const [className, setClassName] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [teacherEmail, setTeacherEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleClassSubmit = async (e) => {
    e.preventDefault();

    const newClass = {
      id: classId,
      name: className,
      teacher: {
        id: teacherId,
        name: teacherName,
        email: teacherEmail,
      },
      assignments: [],
      students: [],
    };

    try {
      const response = await fetch("/api/classrooms/classSave", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newClass),
      });

      if (response.ok) {
        setStatusMessage(`Class "${className}" saved successfully.`);
        setClassId("");
        setClassName("");
        setTeacherId("");
        setTeacherName("");
        setTeacherEmail("");
      } else {
        setStatusMessage("Failed to save class.");
      }
    } catch (error) {
      console.error("Error saving class:", error);
      setStatusMessage("An error occurred while saving.");
    }
  };

  return (
    <div className="teacher-class-layout">
      <TeacherSidebar />
      <div className="teacher-class-main">
        <header className="teacher-class-header">
          <h1>Teacher Class Creation</h1>
          <img src={VanvasLogo} alt="Vanvas Logo" className="vanvas-logo" />
        </header>

        <div className="teacher-class-container">
          <section className="teacher-class-form">
            <h2>Create a New Class</h2>
            <form onSubmit={handleClassSubmit}>
              <div className="form-group">
                <label htmlFor="classId">Class ID:</label>
                <input
                  type="text"
                  id="classId"
                  value={classId}
                  onChange={(e) => setClassId(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="className">Class Name:</label>
                <input
                  type="text"
                  id="className"
                  value={className}
                  onChange={(e) => setClassName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="teacherId">Teacher ID:</label>
                <input
                  type="text"
                  id="teacherId"
                  value={teacherId}
                  onChange={(e) => setTeacherId(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="teacherName">Teacher Name:</label>
                <input
                  type="text"
                  id="teacherName"
                  value={teacherName}
                  onChange={(e) => setTeacherName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="teacherEmail">Teacher Email:</label>
                <input
                  type="email"
                  id="teacherEmail"
                  value={teacherEmail}
                  onChange={(e) => setTeacherEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="teacher-class-button">
                Save Class
              </button>
            </form>
            {statusMessage && <p className="status-message">{statusMessage}</p>}
          </section>
        </div>
      </div>
    </div>
  );
};

export default TeacherClassCreation;