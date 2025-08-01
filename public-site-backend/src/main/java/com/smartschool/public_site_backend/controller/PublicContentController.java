package com.smartschool.public_site_backend.controller;


import com.smartschool.public_site_backend.model.PublicContent;
import com.smartschool.public_site_backend.service.PublicContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * REST Controller for managing generic Public Content items.
 * Exposes API endpoints for fetching various text blocks for the public website.
 */
@RestController
@RequestMapping("/public/{schoolId}/public-content")
public class PublicContentController {

    private final PublicContentService publicContentService;

    @Autowired
    public PublicContentController(PublicContentService publicContentService) {
        this.publicContentService = publicContentService;
    }

    /**
     * GET /public/{schoolId}/public-content : Retrieves all public content items for a given school.
     * @param schoolId The ID of the school.
     * @return A list of PublicContent entities.
     */
    @GetMapping
    public ResponseEntity<List<PublicContent>> getAllPublicContent(@PathVariable Long schoolId) {
        List<PublicContent> publicContents = publicContentService.getAllPublicContent(schoolId);
        return ResponseEntity.ok(publicContents);
    }

    /**
     * GET /public/{schoolId}/public-content/{identifier} : Retrieves a single public content item by its unique identifier.
     * @param schoolId The ID of the school.
     * @param identifier The unique identifier of the content item.
     * @return The PublicContent if found, or 404 Not Found.
     */
    @GetMapping("/{identifier}")
    public ResponseEntity<PublicContent> getPublicContentByIdentifier(@PathVariable Long schoolId, @PathVariable String identifier) {
        Optional<PublicContent> publicContent = publicContentService.getPublicContentByIdentifier(schoolId, identifier);
        return publicContent.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    /**
     * POST /public/{schoolId}/public-content : Creates or updates a public content item.
     * @param schoolId The ID of the school.
     * @param publicContent The PublicContent to be saved.
     * @return The saved PublicContent with HTTP status 201 Created or 200 OK.
     */
    @PostMapping
    public ResponseEntity<PublicContent> savePublicContent(@PathVariable Long schoolId, @RequestBody PublicContent publicContent) {
        PublicContent savedContent = publicContentService.savePublicContent(schoolId, publicContent);
        return new ResponseEntity<>(savedContent, HttpStatus.CREATED);
    }
}
