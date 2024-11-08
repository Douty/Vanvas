package com.example.vanas.vanvas.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.example.vanas.vanvas.model.Assignment;
import com.example.vanas.vanvas.model.Classroom;
import com.example.vanas.vanvas.model.Teacher;

public interface ClassroomRepo extends MongoRepository<Classroom, String> {

    List<Classroom> findByName(String name);

    List<Classroom> findByTeacherId(Teacher teacherId);

    @Query(value = "{ 'students.studentId' : ?0 }", fields = "{ '_id' : 1 }")
    List<Classroom> getStudentClassroomList(String studentId);

  

    @Query(value = "{ '_id' : ?0 }", fields = "{ 'assignments' : 1 }")
    Classroom findAssignmentsByClassroomId(String classroomId);

    @Query(value = "{ 'assignments.studentgrade.studentId': ?0 }", fields = "{ 'assignments' : 1 }")
    List<Assignment> findAssignmentsByStudentId(String studentId);
    
   
} 
