package com.smartschool.public_site_backend.service;


import com.smartschool.public_site_backend.model.GalleryItem;
import com.smartschool.public_site_backend.repository.GalleryItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service class for managing GalleryItem entities.
 * Handles business logic and data retrieval for the public gallery section.
 * All methods now require a schoolId to ensure data is scoped correctly for each tenant.
 */
@Service
public class GalleryService {

    private final GalleryItemRepository galleryItemRepository;

    @Autowired
    public GalleryService(GalleryItemRepository galleryItemRepository) {
        this.galleryItemRepository = galleryItemRepository;
    }

    /**
     * Retrieves all gallery items for a given school.
     * @param schoolId The ID of the school.
     * @return A list of GalleryItem entities.
     */
    public List<GalleryItem> getAllGalleryItems(Long schoolId) {
        return galleryItemRepository.findBySchoolId(schoolId);
    }

    /**
     * Retrieves all gallery items for a given school, filtered by category.
     * @param schoolId The ID of the school.
     * @param category The category to filter by.
     * @return A list of GalleryItem entities.
     */
    public List<GalleryItem> getGalleryItemsByCategory(Long schoolId, String category) {
        return galleryItemRepository.findBySchoolIdAndCategory(schoolId, category);
    }

    /**
     * Retrieves a single gallery item by its ID for a given school.
     * @param schoolId The ID of the school.
     * @param id The ID of the gallery item.
     * @return An Optional containing the GalleryItem if found, otherwise empty.
     */
    public Optional<GalleryItem> getGalleryItemById(Long schoolId, Long id) {
        return Optional.ofNullable(galleryItemRepository.findBySchoolIdAndId(schoolId, id));
    }

    /**
     * Creates a new gallery item for a given school.
     * @param schoolId The ID of the school.
     * @param galleryItem The GalleryItem entity to be created.
     * @return The newly created GalleryItem.
     */
    public GalleryItem createGalleryItem(Long schoolId, GalleryItem galleryItem) {
        galleryItem.setSchoolId(schoolId);
        return galleryItemRepository.save(galleryItem);
    }

    /**
     * Updates an existing gallery item for a given school.
     * @param schoolId The ID of the school.
     * @param id The ID of the gallery item to update.
     * @param updatedGalleryItem The GalleryItem entity with updated information.
     * @return The updated GalleryItem, or an empty Optional if not found.
     */
    @Transactional
    public Optional<GalleryItem> updateGalleryItem(Long schoolId, Long id, GalleryItem updatedGalleryItem) {
        return Optional.ofNullable(galleryItemRepository.findBySchoolIdAndId(schoolId, id))
                .map(existingItem -> {
                    existingItem.setTitle(updatedGalleryItem.getTitle());
                    existingItem.setDescription(updatedGalleryItem.getDescription());
                    existingItem.setImageUrl(updatedGalleryItem.getImageUrl());
                    existingItem.setCategory(updatedGalleryItem.getCategory());
                    return galleryItemRepository.save(existingItem);
                });
    }

    /**
     * Deletes a gallery item for a given school.
     * @param schoolId The ID of the school.
     * @param id The ID of the gallery item to delete.
     * @return true if the item was deleted, false otherwise.
     */
    @Transactional
    public boolean deleteGalleryItem(Long schoolId, Long id) {
        if (galleryItemRepository.findBySchoolIdAndId(schoolId, id) != null) {
            galleryItemRepository.deleteBySchoolIdAndId(schoolId, id);
            return true;
        }
        return false;
    }
}
