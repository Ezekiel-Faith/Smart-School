package com.smartschool.public_site_backend.repository;


import com.smartschool.public_site_backend.model.PublicContent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


/**
 * JPA Repository for the PublicContent entity.
 * Provides standard CRUD operations for generic public text content.
 */
@Repository
public interface PublicContentRepository extends JpaRepository<PublicContent, Long> {
    // Custom method to find PublicContent by its unique identifier (e.g., "home-mission", "marquee-text")
    Optional<PublicContent> findByIdentifier(String identifier);
}
