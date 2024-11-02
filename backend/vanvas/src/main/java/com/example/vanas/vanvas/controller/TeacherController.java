package com.example.vanas.vanvas.controller;

import com.example.vanas.vanvas.model.Teacher;
import com.example.vanas.vanvas.service.TeacherRegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
public class TeacherController {
    private final TeacherRegistrationService teacherService;

    @Autowired
    public TeacherController (TeacherRegistrationService teacherService){
        this.teacherService = teacherService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerTeacher (@RequestBody Teacher teacher){
        try {
            teacherService.registerTeacher(teacher);
            return new ResponseEntity<>("Teacher registered successfully", HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
