package com.example.vanas.vanvas.controller;

import com.example.vanas.vanvas.model.Student;
import com.example.vanas.vanvas.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/students")
public class StudentController {
    private final StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService) {
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


    @PostMapping("/login")
    public ResponseEntity<String> loginStudent(@RequestParam String email, @RequestParam String password) {
        try {
            Student student = studentService.login(email, password);
            return new ResponseEntity<>("Login successful for: " + student.getFirstName() + " " + student.getLastName(), HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNAUTHORIZED);
        }
    }


    @GetMapping("/getIdByEmail")
    public ResponseEntity<String> getStudentIdByEmail(@RequestParam String email) {
        try {
            String studentId = studentService.getStudentIdByEmail(email);
            return new ResponseEntity<>(studentId, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }



    @GetMapping("/test")
    public String testEndpoint() {
        return "StudentController is working!";
    }




}

