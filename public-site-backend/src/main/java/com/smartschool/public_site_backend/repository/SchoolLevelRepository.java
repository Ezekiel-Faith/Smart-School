package com.smartschool.public_site_backend.repository;

import com.smartschool.public_site_backend.model.SchoolLevel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


/**
 * JPA Repository for the SchoolLevel entity.
 * Provides standard CRUD operations for school academic levels.
 */
@Repository
public interface SchoolLevelRepository extends JpaRepository<SchoolLevel, Long> {
    // Custom method to find a SchoolLevel by its unique title (e.g., "Pre-School", "Primary")
    Optional<SchoolLevel> findByTitle(String title);
}
