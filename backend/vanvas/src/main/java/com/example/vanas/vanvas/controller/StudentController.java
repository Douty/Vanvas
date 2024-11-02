package com.example.vanas.vanvas.controller;

import com.example.vanas.vanvas.model.Student;
import com.example.vanas.vanvas.service.StudentRegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/students")
public class StudentController {
    private final StudentRegistrationService studentService;

    @Autowired
    public StudentController(StudentRegistrationService studentService) {
        this.studentService = studentService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerStudent (@RequestBody Student student){
        try {
            studentService.registerStudent(student);
            return new ResponseEntity<>("Student registered successfully", HttpStatus.CREATED);
        } catch (IllegalArgumentException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}

