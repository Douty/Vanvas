package com.example.vanas.vanvas.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Document
public class Student {
    @Id
    private String studentId;
    private String firstName;
    private String lastName;
    private String studentEmail;
    private String studenetPassword;
    private Boolean isAdmin;

    public Student() {

    }

    public Student(String studentId, String firstName, String lastName, String studentEmail, String studenetPassword, Boolean isAdmin) {
        this.studentId = studentId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.studentEmail = studentEmail;
        this.studenetPassword = studenetPassword;
        this.isAdmin = isAdmin;
    }

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getStudentEmail() {
        return studentEmail;
    }

    public void setStudentEmail(String studentEmail) {
        this.studentEmail = studentEmail;
    }

    public String getStudenetPassword() {
        return studenetPassword;
    }

    public void setStudenetPassword(String studenetPassword) {
        this.studenetPassword = studenetPassword;
    }

    public Boolean getAdmin() {
        return isAdmin;
    }

    public void setAdmin(Boolean admin) {
        isAdmin = admin;
    }

    @Override
    public String toString() {
        return "Student{" +
                "studentId='" + studentId + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", studentEmail='" + studentEmail + '\'' +
                ", studenetPassword='" + studenetPassword + '\'' +
                ", isAdmin=" + isAdmin +
                '}';
    }
}
