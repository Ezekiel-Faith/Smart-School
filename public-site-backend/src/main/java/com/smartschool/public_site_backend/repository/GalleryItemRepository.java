package com.smartschool.public_site_backend.repository;

import com.smartschool.public_site_backend.model.GalleryItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


/**
 * JPA Repository for the GalleryItem entity.
 * Provides standard CRUD operations for gallery items.
 */
@Repository
public interface GalleryItemRepository extends JpaRepository<GalleryItem, Long> {
    // Retrieves all gallery items for a specific school
    List<GalleryItem> findBySchoolId(Long schoolId);

    // Retrieves gallery items for a specific school and category
    List<GalleryItem> findBySchoolIdAndCategory(Long schoolId, String category);

    // Retrieves a single gallery item by its ID and school ID
    GalleryItem findBySchoolIdAndId(Long schoolId, Long id);

    // Deletes a gallery item by its ID and school ID
    void deleteBySchoolIdAndId(Long schoolId, Long id);
}
