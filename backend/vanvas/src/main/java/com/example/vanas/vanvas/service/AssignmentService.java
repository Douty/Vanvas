package com.example.vanas.vanvas.service;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.vanas.vanvas.model.Assignment;
import com.example.vanas.vanvas.repository.ClassroomRepo;

@Service
public class AssignmentService {
    @Autowired
    private ClassroomRepo classroomRepo;

    public List<Assignment> getSortedAssignmentsForStudent(String studentId) {
        return classroomRepo.findAssignmentsByStudentId(studentId).stream()
                .sorted(Comparator.comparingDouble(this::calculateScore).reversed())
                .collect(Collectors.toList());
    }

    private double calculateScore(Assignment assignment) {
        long daysLeft = ChronoUnit.DAYS.between(LocalDate.now(), assignment.getDueDate());
        daysLeft = Math.max(daysLeft, 1); // Avoid division by zero

        double urgencyScore = 1.0 / daysLeft;
        double priorityScore = assignment.getPriority();

        return urgencyScore + priorityScore;
    }
}
