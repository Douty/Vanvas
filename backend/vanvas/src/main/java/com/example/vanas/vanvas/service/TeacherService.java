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

    public Teacher login(String email, String password) {
        return teacherRepository.findByTeacherEmail(email)
                .filter(teacher -> passwordEncoder.matches(password, teacher.getTeacherPassword()))
                .orElseThrow(() -> new IllegalArgumentException("Invalid email or password"));
    }

    public String getTeacherIdByEmail(String email) {
        return teacherRepository.findByTeacherEmail(email)
                .map(Teacher::getTeacherId)
                .orElseThrow(() -> new IllegalArgumentException("Teacher with email not found"));
    }


}
