package com.example.vanas.vanvas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.vanas.vanvas.model.Classroom;
import com.example.vanas.vanvas.repository.ClassroomRepo;

@Service
public class ClassroomService {

    @Autowired
    private ClassroomRepo classroomRepo;

    public Classroom saveClassroom(Classroom classroom){
        return classroomRepo.save(classroom);
    }
    public List<Classroom> findByName(String name){
        return classroomRepo.findByName(name);
    }
    public List<String> findByStudentClassrooms(String studentId) {
        return classroomRepo.getStudentClassroomListID(studentId);
    }

}
