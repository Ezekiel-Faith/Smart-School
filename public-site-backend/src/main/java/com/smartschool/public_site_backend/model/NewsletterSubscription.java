package com.smartschool.public_site_backend.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * Represents a newsletter subscription in the database.
 * Stores the subscriber's email and the subscription timestamp.
 */
@Entity
@Table(name = "newsletter_subscriptions")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class NewsletterSubscription {

    @Id // Marks this field as the primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto-increments the ID for new entities
    private Long id;

    @Column(nullable = false, unique = true, length = 255) //subscriber's email, must be unique
    private String email;

    @Column(nullable = false) //timestamp of the subscription
    private LocalDateTime subscriptionDate = LocalDateTime.now();

    @Column(nullable = false)
    private Long schoolId; // The discriminator column for multi-tenancy
}
