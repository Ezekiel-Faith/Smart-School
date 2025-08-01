package com.smartschool.public_site_backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


/**
 * Represents a Testimonial from a parent or guardian in the database.
 * This entity will store the testimonial text and the author's name.
 */
@Entity
@Table(name = "testimonials")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Testimonial {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto-increments the ID for new entities
    private Long id;

    @Column(nullable = false, columnDefinition = "TEXT") //Column for the testimonial text
    private String text;

    @Column(nullable = false, length = 255) //Column for the author's name
    private String author;

    @Column(nullable = false)
    private Long schoolId; // The discriminator column for multi-tenancy
}
