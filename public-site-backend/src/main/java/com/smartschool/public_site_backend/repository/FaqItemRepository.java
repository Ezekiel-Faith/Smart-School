package com.smartschool.public_site_backend.repository;

import com.smartschool.public_site_backend.model.FaqItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


/**
 * JPA Repository for the FaqItem entity.
 * Provides standard CRUD (Create, Read, Update, Delete) operations
 * and allows for custom query methods if needed.
 */
@Repository //marks this interface as a Spring Data JPA repository
public interface FaqItemRepository extends JpaRepository<FaqItem, Long> {
    // Retrieves all FAQ items for a specific school
    List<FaqItem> findBySchoolId(Long schoolId);

    // Retrieves a single FAQ item by its ID and school ID
    FaqItem findBySchoolIdAndId(Long schoolId, Long id);

    // Deletes an FAQ item by its ID and school ID
    void deleteBySchoolIdAndId(Long schoolId, Long id);
}
