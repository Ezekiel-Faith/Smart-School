package com.smartschool.public_site_backend.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Represents a School Level (e.g., Pre-School, Primary, Secondary) in the database.
 * Stores details about each academic program and its associated curriculum download link.
 */
@Entity
@Table(name = "school_levels")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SchoolLevel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto-increments the ID for new entities
    private Long id;

    @Column(nullable = false, length = 100, unique = true) //title of the school level (e.g., "Pre-School")
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT") //description of the program
    private String description;

    @Column(length = 2048) //URL to an image representing this school level
    private String imageUrl;

    @Column(nullable = false, length = 100) //text for the download button
    private String buttonText;

    @Column(length = 2048) //URL to the downloadable curriculum file
    private String curriculumDownloadUrl;

    @Column(nullable = false)
    private Long schoolId; // The discriminator column for multi-tenancy
}
