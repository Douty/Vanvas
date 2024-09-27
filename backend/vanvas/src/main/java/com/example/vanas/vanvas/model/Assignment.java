package com.example.vanas.vanvas.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import com.example.vanas.vanvas.model.classroomUtil.*;


public class Assignment {
    @Id
    public String id;
    public String name;
    public Date time;
    public String description;
    public String type;
    public List<StudentGrade> studentgrade;
    
    public Assignment(String id,String name,Date time,String description,String type){
        this.id = id;
        this.name = name;
        this.time = time;
        this.description = description;
        this.type = type;
    }

    public Assignment() {}

    // Getters
    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Date getTime() {
        return time;
    }

    public String getDescription() {
        return description;
    }

    public String getType() {
        return type;
    }

    // Setters
    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setType(String type) {
        this.type = type;
    }

    public List<StudentGrade> getStudentGrades() {
        return studentgrade;
    }


    public void setStudentGrades(ArrayList<StudentGrade> studentgrade) {
        this.studentgrade = studentgrade;
    }

    @Override
    public String toString() {
        return "Assignment{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", time=" + time +
                ", description='" + description + '\'' +
                ", type='" + type + '\'' +
                ", studentGrades=" + studentgrade +
                '}';
    }





}
