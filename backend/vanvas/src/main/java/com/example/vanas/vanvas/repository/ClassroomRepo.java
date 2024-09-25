package com.example.vanas.vanvas.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.vanas.vanvas.model.Classroom;
import java.util.List;
import org.springframework.data.mongodb.repository.Query;

public interface ClassroomRepo extends MongoRepository<Classroom, String> {

    List<Classroom> findByName(String name);
    List<Classroom> findByTeacherId(String teacherID);

    @Query(value = "{ 'students.id' : ?0 }", fields = "{ '_id' : 1 }")
    List<String> getStudentClassroomListID(String ID);
} 
