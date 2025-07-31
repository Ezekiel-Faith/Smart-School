package com.smartschool.public_site_backend.controller;


import com.smartschool.public_site_backend.model.GalleryItem;
import com.smartschool.public_site_backend.service.GalleryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

/**
 * REST Controller for managing Gallery items.
 * Exposes API endpoints for fetching gallery data for the public website.
 */
@RestController
@RequestMapping("/public/gallery") //base path for all endpoints in this controller class
public class GalleryController {

    @Autowired
    private GalleryService galleryService;

    /**
     * GET /gallery : Retrieves all gallery items.
     */
    @GetMapping
    public ResponseEntity<List<GalleryItem>> getAllGalleryItems() {
        List<GalleryItem> galleryItems = galleryService.getAllGalleryItem();
        return ResponseEntity.ok(galleryItems); //returns 200 OK with the list of gallery items
    }

    /**
     * GET /gallery/{id} : Retrieves a single gallery item by its ID.
     * or 404 (Not Found) if the gallery item is not found.
     */
    @GetMapping("/{id}")
    public ResponseEntity<GalleryItem> getGalleryItemById(@PathVariable Long id){
        Optional<GalleryItem> galleryItem = galleryService.getGalleryItemById(id);
        //returns the gallery item if found, otherwise returns 404 Not Found
        return galleryItem.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
