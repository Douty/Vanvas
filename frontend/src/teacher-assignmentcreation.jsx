import React, { useState } from "react";
import "./teacher-assignmentcreation.css";
import VanvasLogo from "./assets/Vanvas.png";
import TeacherSidebar from "./teacher-sidebar";

const TeacherAssignmentCreation = () => {
  const [classroomId, setClassroomId] = useState("");
  const [assignmentId, setAssignmentId] = useState("");
  const [assignmentName, setAssignmentName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAssignmentSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newAssignment = {
      id: assignmentId,
      name: assignmentName,
      dueDate,
      priority: parseFloat(priority),
      description,
      type,
      studentgrade: [],
    };

    try {
      const response = await fetch(`/api/classrooms/${classroomId}/addAssignment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAssignment),
      });

      if (response.ok) {
        setStatusMessage(`Assignment "${assignmentName}" added to classroom "${classroomId}".`);
        setAssignmentId("");
        setAssignmentName("");
        setDueDate("");
        setPriority("");
        setDescription("");
        setType("");
        setClassroomId("");
      } else {
        const error = await response.json();
        setStatusMessage(`Failed to add assignment:${error.message||"Unknown error"}`);
      }
    } catch (error) {
      setStatusMessage("Errorwhile adding the assignment.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="teacher-assignment-layout">
      <TeacherSidebar />
      <div className="teacher-assignment-main">
        <header className="teacher-assignment-header">
          <h1>Teacher Assignment Creation</h1>
          <img src={VanvasLogo} alt="Vanvas Logo" className="vanvas-logo" />
        </header>

        <div className="teacher-assignment-container">
          <section className="teacher-assignment-form">
            <h2>Create a New Assignment</h2>
            <form onSubmit={handleAssignmentSubmit}>
              <div className="form-group">
                <label htmlFor="classroomId">Classroom ID:</label>
                <input
                  type="text"
                  id="classroomId"
                  value={classroomId}
                  onChange={(e) => setClassroomId(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="assignmentId">Assignment ID:</label>
                <input
                  type="text"
                  id="assignmentId"
                  value={assignmentId}
                  onChange={(e) => setAssignmentId(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="assignmentName">Assignment Name:</label>
                <input
                  type="text"
                  id="assignmentName"
                  value={assignmentName}
                  onChange={(e) => setAssignmentName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="dueDate">Due Date:</label>
                <input
                  type="date"
                  id="dueDate"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="priority">Priority:</label>
                <input
                  type="number"
                  step="0.1"
                  id="priority"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="type">Type:</label>
                <input
                  type="text"
                  id="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="teacher-assignment-button" disabled={isLoading}>
                {isLoading ? "Saving..." : "Save Assignment"}
              </button>
            </form>
            {statusMessage && <p className="status-message">{statusMessage}</p>}
          </section>
        </div>
      </div>
    </div>
  );
};

export default TeacherAssignmentCreation;