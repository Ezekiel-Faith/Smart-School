package com.smartschool.public_site_backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "faqs")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FaqItem {

    @Id //makes the id field as the primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto-increments the ID for new entities
    private Long id;

    @Column(nullable = false, length = 500) //column for questions
    private String question;

    @Column(nullable = false, columnDefinition = "TEXT") //column for answers, uses TEXT type for longer content
    private String answer;
}
