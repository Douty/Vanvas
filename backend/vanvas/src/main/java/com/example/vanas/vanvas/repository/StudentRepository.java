package com.example.vanas.vanvas.repository;

import com.example.vanas.vanvas.model.Student;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface StudentRepository extends MongoRepository<Student, String> {
    Optional<Student> findByStudentEmail(String studentEmail);
}
