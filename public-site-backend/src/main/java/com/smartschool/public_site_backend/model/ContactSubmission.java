package com.smartschool.public_site_backend.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * Represents a submission from the public contact form.
 * Stores details provided by the user and the submission timestamp.
 */
@Entity
@Table(name = "contact_submissions")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ContactSubmission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto-increments the ID for new entities
    private Long id;

    @Column(nullable = false, length = 255) //sender's name
    private String name;

    @Column(nullable = false, length = 255) //sender's email
    private String email;

    @Column(length = 500) //subject of the message
    private String subject;

    @Column(nullable = false, columnDefinition = "TEXT") //message content
    private String message;

    @Column(nullable = false) //timestamp of the submission
    private LocalDateTime submissionDate = LocalDateTime.now();

    @Column(nullable = false) //flag to track if the submission has been read by an admin
    private boolean isRead = false;

    @Column(nullable = false)
    private Long schoolId; // The discriminator column for multi-tenancy
}
