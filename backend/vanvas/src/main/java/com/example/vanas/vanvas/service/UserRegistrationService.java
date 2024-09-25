package com.example.vanas.vanvas.service;

import com.example.vanas.vanvas.model.Student;
import com.example.vanas.vanvas.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserRegistrationService {

    private final StudentRepository studentRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public UserRegistrationService(StudentRepository studentRepository, BCryptPasswordEncoder passwordEncoder) {
        this.studentRepository = studentRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public Student registerStudent(Student student) {
        if (studentRepository.findByStudentEmail(student.getStudentEmail()).isPresent()) {
            throw new IllegalArgumentException("Email already in use");
        }

        // Hash the password before saving
        String hashedPassword = passwordEncoder.encode(student.getStudentPassword());
        student.setStudentPassword(hashedPassword);

        // Save the student in the repository
        return studentRepository.save(student);
    }
}
