import React, { useState, useEffect, useContext } from 'react';
import {useLocation} from 'react-router-dom';
import './Dash.css';
import profilePicture from './assets/pfp.png';
import { useAuth } from './context/AuthContext';

//should expand amount of colors for more classes, maybe make them random?
const colors = ['#EF6C6E', '#6C7DEF', '#6CEF88','#EFCC6C', '#D0EF6C', '#6CD7EF'];

const Dash = () => {
  const auth = useAuth();
  //console.log(auth.user.userData);
  
  const [courses, setCourses] = useState(null);
  const [todo, setTodo] = useState([]);

  const fetchCourses = async () => {

    try{
      const response = await fetch(`http://localhost:8080/api/classrooms/getStudentClassrooms/${auth.user.userData.id}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        }
      });
      if(!response.ok){
        throw new Error('fetch did not work !');
      }

      const data = await response.json();
      var i = 0;
      const coursesList = data.map(course =>
        <li className='course-margin' key={course.id}>
          <div className='course'>
            <div className='course-logo' style={{background: colors[i++]}}></div>
            <p>{course.name}</p>
          </div>
        </li>
      )
      setCourses(coursesList)
    }
    catch(error){
      console.error('Error: ', error);
    }
  }

  const fetchAssignments = async () => {
    try{
      const response = await fetch(`http://localhost:8080/api/assignment/todoList/${auth.user.userData.id}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        }
      });
      if(!response.ok){
        throw new Error('fetch did not work !');
      }

      const data = await response.json();
      var i = 0;
      const todoList = data.map(assignment =>
        <li className='assignment-margin' key={assignment.id}>
          <div className='assignment'>
            <p className='assignment-name'>{assignment.name}</p>
            <p>Due: {assignment.dueDate}</p>
          </div>
        </li>
      )
      setTodo(todoList)
    }
    catch(error){
      console.error('Error: ', error);
    }
  }

  useEffect(() => {
    if(auth.user.role === "Student"){
      fetchCourses();
      fetchAssignments();
    }
  }, []);
  
  
  
  return (
    <div>
      <div className="dashboard">

        <div className="dashboard-container">
          <div className='header'>
            <h1>Dashboard</h1>
            <div className="line-dashboard"></div>
          </div>

          <div className='courses-container'>
            <ul className='courses'>{courses}</ul>
          </div>
        </div>

        <div className='to-do-container'>
          <div className='header'>
            <h1>To-Do</h1>
            <div className="line-to-do"></div>
          </div>
          <div className='to-do-list'>
            <ul>{todo}</ul>
          </div>
        </div>

      </div>
    
    </div>
  );
};

export default Dash;