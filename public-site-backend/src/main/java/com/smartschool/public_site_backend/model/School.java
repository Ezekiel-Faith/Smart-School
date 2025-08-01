package com.smartschool.public_site_backend.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Represents a client school (tenant).
 * This entity will be used to manage subscription plans and school-specific settings.
 */
@Entity
@Table(name = "schools")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class School {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 255)
    private String name;

    @Column(length = 255)
    private String address;

    @Column(nullable = false)
    private boolean publicSiteEnabled; // Flag for public site access

    @Column(nullable = false)
    private boolean studentDashboardEnabled; // Flag for student dashboard access

    @Column(nullable = false)
    private boolean staffDashboardEnabled; // Flag for staff dashboard access

    @Column(nullable = false)
    private boolean active; // To activate/deactivate a school's access
}
