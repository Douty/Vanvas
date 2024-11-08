package com.example.vanas.vanvas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.vanas.vanvas.model.Assignment;
import com.example.vanas.vanvas.model.Classroom;
import com.example.vanas.vanvas.service.ClassroomService;


@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequestMapping("/api/classrooms")
public class ClassroomController {
    private final ClassroomService classroomService;

    @Autowired
    public ClassroomController(ClassroomService classroomService) {
        this.classroomService = classroomService;
    }

    @RequestMapping("/classSave")
    public ResponseEntity<Classroom> saveClassroom(@RequestBody Classroom classroom) {
        Classroom savedClassroom = classroomService.saveClassroom(classroom);  
        return new ResponseEntity<>(savedClassroom, HttpStatus.CREATED);  
    }

    @RequestMapping("/check")
    public String check(){
        return "It works lol";
    }

    @RequestMapping("/{classroomId}/addAssignment")
    public ResponseEntity<Assignment> addAssignment(@PathVariable String classroomId,@RequestBody Assignment assignment){
        classroomService.addAssignment(classroomId,assignment);
        return new ResponseEntity<>(HttpStatus.CREATED); 
    }

   

    @GetMapping("/findclassroom/{name}")
    public ResponseEntity<List<Classroom>> findClassroomByName(@PathVariable String name) {
    List<Classroom> classrooms = classroomService.findByName(name);
    if (classrooms.isEmpty()) {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);  // If no classrooms found
    } else
        return new ResponseEntity<>(classrooms, HttpStatus.OK);
    }  // Return list of classrooms with 200 OK
}

    

