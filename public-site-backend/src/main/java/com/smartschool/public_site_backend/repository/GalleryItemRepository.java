package com.smartschool.public_site_backend.repository;

import com.smartschool.public_site_backend.model.GalleryItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


/**
 * JPA Repository for the GalleryItem entity.
 * Provides standard CRUD operations for gallery items.
 */
@Repository
public interface GalleryItemRepository extends JpaRepository<GalleryItem, Long> {
    // JpaRepository provides methods like save(), findById(), findAll(), deleteById(), etc.
}
