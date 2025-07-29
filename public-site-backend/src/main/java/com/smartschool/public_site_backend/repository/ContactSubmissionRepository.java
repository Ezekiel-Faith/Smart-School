package com.smartschool.public_site_backend.repository;


import com.smartschool.public_site_backend.model.ContactSubmission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * JPA Repository for the ContactSubmission entity.
 * Provides standard CRUD operations for contact form submissions.
 */
@Repository
public interface ContactSubmissionRepository extends JpaRepository<ContactSubmission, Long> {
    // No custom methods needed for basic contact submission management.
}
