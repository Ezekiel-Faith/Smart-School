package com.smartschool.public_site_backend.service;


import com.smartschool.public_site_backend.model.GalleryItem;
import com.smartschool.public_site_backend.repository.GalleryItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Service class for managing Gallery items.
 * Handles business logic related to fetching and potentially managing gallery images.
 */
@Service
public class GalleryService {

    @Autowired
    private GalleryItemRepository galleryItemRepository;

    /**
     * Retrieves all gallery items from the database.
     * @return A list of all GalleryItem objects.
     */
    public List<GalleryItem> getAllGalleryItem() {
        return galleryItemRepository.findAll();
    }

    /**
     * Retrieves a single gallery item by its ID.
     * @param id The ID of the gallery item to retrieve.
     * @return An Optional containing the GalleryItem if found, or empty if not.
     */
    public Optional<GalleryItem> getGalleryItemById(Long id) {
        return galleryItemRepository.findById(id);
    }

    /**
     * Adds a new gallery item.
     * This method would typically be used by an administrative interface.
     * @param galleryItem The GalleryItem object to save.
     * @return The saved GalleryItem object.
     */
    public GalleryItem addGalleryItem(GalleryItem galleryItem){
        return galleryItemRepository.save(galleryItem);
    }

    /**
     * Updates an existing gallery item.
     * This method would typically be used by an administrative interface.
     * @param id The ID of the gallery item to update.
     * @param updatedGalleryItem The GalleryItem object with updated details.
     * @return An Optional containing the updated GalleryItem if found and updated, or empty if not found.
     */
    public Optional<GalleryItem> updateGalleryItem(Long id, GalleryItem updatedGalleryItem) {
        return galleryItemRepository.findById(id)
                .map(galleryItem -> {
                    galleryItem.setTitle(updatedGalleryItem.getTitle());
                    galleryItem.setDescription(updatedGalleryItem.getDescription());
                    galleryItem.setImageUrl(updatedGalleryItem.getImageUrl());
                    galleryItem.setCategory(updatedGalleryItem.getCategory());

                    return galleryItemRepository.save(galleryItem);
                });
    }

    /**
     * Deletes a gallery item by its ID.
     * This method would typically be used by an administrative interface.
     * @param id The ID of the gallery item to delete.
     */
    public void deleGalleryItem(Long id) {
        galleryItemRepository.deleteById(id);
    }
}
