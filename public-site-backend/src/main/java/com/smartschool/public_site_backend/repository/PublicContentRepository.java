package com.smartschool.public_site_backend.repository;


import com.smartschool.public_site_backend.model.PublicContent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


/**
 * JPA Repository for the PublicContent entity.
 * Provides standard CRUD operations for generic public text content.
 */
@Repository
public interface PublicContentRepository extends JpaRepository<PublicContent, Long> {
    // Retrieves all public content items for a specific school
    List<PublicContent> findBySchoolId(Long schoolId);

    // Retrieves a public content item by its identifier and school ID
    Optional<PublicContent> findBySchoolIdAndIdentifier(Long schoolId, String identifier);

    // Deletes a public content item by its ID and school ID
    void deleteBySchoolIdAndId(Long schoolId, Long id);
}
