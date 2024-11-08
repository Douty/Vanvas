package com.example.vanas.vanvas.service;

import com.example.vanas.vanvas.model.Teacher;
import com.example.vanas.vanvas.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class TeacherRegistrationService {

    private final TeacherRepository teacherRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final boolean enablePasswordEncoding = false;  // Set false to bypass the enconding

    @Autowired
    public TeacherRegistrationService(TeacherRepository teacherRepository, BCryptPasswordEncoder passwordEncoder) {
        this.teacherRepository = teacherRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public Teacher registerTeacher(Teacher teacher) {
        if (teacherRepository.findByTeacherEmail(teacher.getTeacherEmail()).isPresent()) {
            throw new IllegalArgumentException("Email already in use");
        }

        if (enablePasswordEncoding) {
            String hashedPassword = passwordEncoder.encode(teacher.getTeacherPassword());
            teacher.setTeacherPassword(hashedPassword);
        } else {
            teacher.setTeacherPassword(teacher.getTeacherPassword());
        }

        return teacherRepository.save(teacher);
    }
}
