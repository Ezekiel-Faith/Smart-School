package com.smartschool.public_site_backend.repository;


import com.smartschool.public_site_backend.model.ContactSubmission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * JPA Repository for the ContactSubmission entity.
 * Provides standard CRUD operations for contact form submissions.
 */
@Repository
public interface ContactSubmissionRepository extends JpaRepository<ContactSubmission, Long> {

    // Retrieves all contact submissions for a specific school
    List<ContactSubmission> findBySchoolId(Long schoolId);

    // Retrieves a single contact submission by its ID and school ID
    Optional<ContactSubmission> findBySchoolIdAndId(Long schoolId, Long id);

    // Deletes a contact submission by its ID and school ID
    void deleteBySchoolIdAndId(Long schoolId, Long id);
}
