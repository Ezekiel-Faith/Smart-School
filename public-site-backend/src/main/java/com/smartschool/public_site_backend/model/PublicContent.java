package com.smartschool.public_site_backend.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * A generic entity to store various pieces of public textual content.
 * This allows dynamic management of text blocks like Mission, Vision,
 * "Why Smart School" items, About Us text, Marquee text, etc.
 */
@Entity
@Table(name = "public_content")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PublicContent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto-increments the ID for new entities
    private Long id;

    @Column(nullable = false, unique = true, length = 255) //a unique identifier for the content block
    // (e.g., "home-mission", "about-hero-text", "marquee-text")
    private String identifier;

    @Column(length = 500) //a short title for the content block
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT") //main content text
    private String content;

    @Column //timestamp of the last update
    private LocalDateTime lastUpdated = LocalDateTime.now();
}
