package com.example.vanas.vanvas.model;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;
@Document
public class Teacher {
    @Id
    private String id;  // or private Long id;
    private String name;
}
