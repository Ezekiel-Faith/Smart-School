package com.smartschool.public_site_backend.repository;

import com.smartschool.public_site_backend.model.SchoolLevel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


/**
 * JPA Repository for the SchoolLevel entity.
 * Provides standard CRUD operations for school academic levels.
 */
@Repository
public interface SchoolLevelRepository extends JpaRepository<SchoolLevel, Long> {
    // Retrieves all school levels for a specific school
    List<SchoolLevel> findBySchoolId(Long schoolId);

    // Retrieves a single school level by its ID and school ID, returning an Optional
    Optional<SchoolLevel> findBySchoolIdAndId(Long schoolId, Long id);

    // Deletes a school level by its ID and school ID
    void deleteBySchoolIdAndId(Long schoolId, Long id);

    // Find a SchoolLevel by its unique title for a specific school
    Optional<SchoolLevel> findBySchoolIdAndTitle(Long schoolId, String title);
}
