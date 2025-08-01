package com.smartschool.public_site_backend.controller;


import com.smartschool.public_site_backend.model.GalleryItem;
import com.smartschool.public_site_backend.service.GalleryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * REST Controller for managing Gallery items.
 * Exposes API endpoints for fetching gallery data for the public website.
 */
@RestController
@RequestMapping("/public/{schoolId}/gallery") //base path for all endpoints in this controller class
public class GalleryController {

    private final GalleryService galleryService;

    @Autowired
    public GalleryController(GalleryService galleryService) {
        this.galleryService = galleryService;
    }

    /**
     * GET /public/{schoolId}/gallery : Retrieves all gallery items for a given school.
     * @param schoolId The ID of the school.
     * @return A list of GalleryItem entities.
     */
    @GetMapping
    public ResponseEntity<List<GalleryItem>> getAllGalleryItems(@PathVariable Long schoolId) {
        List<GalleryItem> galleryItems = galleryService.getAllGalleryItems(schoolId);
        return ResponseEntity.ok(galleryItems);
    }

    /**
     * GET /public/{schoolId}/gallery/category/{category} : Retrieves all gallery items for a given school, filtered by category.
     * @param schoolId The ID of the school.
     * @param category The category to filter by.
     * @return A list of GalleryItem entities.
     */
    @GetMapping("/category/{category}")
    public ResponseEntity<List<GalleryItem>> getGalleryItemsByCategory(@PathVariable Long schoolId, @PathVariable String category) {
        List<GalleryItem> galleryItems = galleryService.getGalleryItemsByCategory(schoolId, category);
        return ResponseEntity.ok(galleryItems);
    }

    /**
     * GET /public/{schoolId}/gallery/{id} : Retrieves a single gallery item by its ID.
     * @param schoolId The ID of the school.
     * @param id The ID of the gallery item.
     * @return The GalleryItem if found, or 404 Not Found.
     */
    @GetMapping("/{id}")
    public ResponseEntity<GalleryItem> getGalleryItemById(@PathVariable Long schoolId, @PathVariable Long id) {
        Optional<GalleryItem> galleryItem = galleryService.getGalleryItemById(schoolId, id);
        return galleryItem.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    /**
     * POST /public/{schoolId}/gallery : Creates a new gallery item.
     * @param schoolId The ID of the school.
     * @param galleryItem The GalleryItem to be created.
     * @return The newly created GalleryItem with HTTP status 201 Created.
     */
    @PostMapping
    public ResponseEntity<GalleryItem> createGalleryItem(@PathVariable Long schoolId, @RequestBody GalleryItem galleryItem) {
        GalleryItem createdGalleryItem = galleryService.createGalleryItem(schoolId, galleryItem);
        return new ResponseEntity<>(createdGalleryItem, HttpStatus.CREATED);
    }

    /**
     * PUT /public/{schoolId}/gallery/{id} : Updates an existing gallery item.
     * @param schoolId The ID of the school.
     * @param id The ID of the gallery item to update.
     * @param updatedGalleryItem The GalleryItem with updated details.
     * @return The updated GalleryItem, or 404 Not Found.
     */
    @PutMapping("/{id}")
    public ResponseEntity<GalleryItem> updateGalleryItem(@PathVariable Long schoolId, @PathVariable Long id, @RequestBody GalleryItem updatedGalleryItem) {
        Optional<GalleryItem> galleryItem = galleryService.updateGalleryItem(schoolId, id, updatedGalleryItem);
        return galleryItem.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    /**
     * DELETE /public/{schoolId}/gallery/{id} : Deletes a gallery item.
     * @param schoolId The ID of the school.
     * @param id The ID of the gallery item to delete.
     * @return 204 No Content if deleted, or 404 Not Found.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGalleryItem(@PathVariable Long schoolId, @PathVariable Long id) {
        boolean deleted = galleryService.deleteGalleryItem(schoolId, id);
        return deleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}
