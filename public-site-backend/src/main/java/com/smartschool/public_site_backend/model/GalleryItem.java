package com.smartschool.public_site_backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;


/**
 * Represents a Gallery Item (image metadata) in the database.
 * Stores information about an image, including its URL.
 */
@Entity
@Table(name = "gallery_items")
@Data
@NoArgsConstructor@AllArgsConstructor
public class GalleryItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto-increments the ID for new entities
    private Long id;

    @Column(nullable = false, length = 255) //title of the gallery item
    private String title;

    @Column(length = 1000) //description of the image
    private String description;

    @Column(nullable = false, length = 2048) //URL to the actual image file
    private String imageUrl;

    @Column(length = 100) //category of the image (e.g., "Events", "Campus Life")
    private String category;

    @Column(nullable = false) //timestamp when the item was uploaded/added
    private LocalDateTime uploadDate = LocalDateTime.now();
}
