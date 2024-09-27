package com.example.vanas.vanvas.model;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.example.vanas.vanvas.model.classroomUtil.StudentGrade;



@Document(collection = "Classrooms")
public class Classroom {
    @Id
    private String id;
    private String name;
    private Teacher teacher;
    private List<Assignment> assignments;
    private List<Student> students;


    public Classroom (String id,String name,Teacher teacher, List<Assignment> assignments, List<Student> students){
        this.id = id;
        this.name = name;
        this.teacher = teacher; 
        this.students = students != null ? students : new ArrayList<>();
        this.assignments = assignments != null ? assignments : new ArrayList<>();
    }
    public Classroom() {
        this.students = new ArrayList<>();
        this.assignments = new ArrayList<>();  
    }

    public String getID(){
        return id;
    }
    public void setId(String id){
        this.id = id;
    }
    public String name(){
        return name; 
    }
    public void setName(String name){
        this.name = name;
    }
    public Teacher getTeacher(){
        return teacher;
    }
    public void setTeacher(Teacher teacher){
        this.teacher = teacher;
    }
    public List<Student> getStudents(){
        return students;
    }
    public void setStudents(List<Student> students){
        this.students = students;
    }
    public List<Assignment> getAssignments() {
        return assignments;
    }
    public List<StudentGrade> getAssignmentGrade(Assignment assignment){
        return assignment.getStudentGrades();
    }
    public void setAssignments(List<Assignment> assignments) {
        this.assignments = assignments;
    }
    public void addAssignment(Assignment assignment) {
        this.assignments.add(assignment);
    }

    
    public void removeAssignment(Assignment assignment) {
        this.assignments.remove(assignment);
    }


    @Override
    public String toString() {
        return "Classroom{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", teacher=" + teacher +
                ", students=" + students +
                ", assignments=" + assignments +
                '}';
    }
    

}
