package com.example.vanas.vanvas.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.vanas.vanvas.model.Teacher;
import com.example.vanas.vanvas.repository.TeacherRepository;

@Service
public class TeacherService {

    private final TeacherRepository teacherRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public TeacherService(TeacherRepository teacherRepository, BCryptPasswordEncoder passwordEncoder) {
        this.teacherRepository = teacherRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public Teacher registerTeacher(Teacher teacher) {
        if (teacherRepository.findByTeacherEmail(teacher.getTeacherEmail()).isPresent()) {
            throw new IllegalArgumentException("Email already in use");
        }

        String hashedPassword = passwordEncoder.encode(teacher.getTeacherPassword());
        teacher.setTeacherPassword(hashedPassword);

        return teacherRepository.save(teacher);
    } 
}
