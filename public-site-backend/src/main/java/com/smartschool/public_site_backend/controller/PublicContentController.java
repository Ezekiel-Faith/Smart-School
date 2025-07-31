package com.smartschool.public_site_backend.controller;


import com.smartschool.public_site_backend.model.PublicContent;
import com.smartschool.public_site_backend.service.PublicContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

/**
 * REST Controller for managing generic Public Content items.
 * Exposes API endpoints for fetching various text blocks for the public website.
 */
@RestController
@RequestMapping("/public/public-content")
public class PublicContentController {

    @Autowired
    private PublicContentService publicContentService;

    /**
     * GET /public-content : Retrieves all public content items.
     */
    @GetMapping
    public ResponseEntity<List<PublicContent>> getAllPublicContent() {
        List<PublicContent> publicContents = publicContentService.getAllPublicContents();
        return  ResponseEntity.ok(publicContents); //returns 200 OK with the list of content items
    }

    /**
     * GET /public-content/{id} : Retrieves a single public content item by its ID.
     * or 404 (Not Found) if the content item is not found.
     */
    @GetMapping("/{id}")
    public ResponseEntity<PublicContent> getPublicContentById(@PathVariable Long id) {
        Optional<PublicContent> publicContent = publicContentService.getPublicContentById(id);
        return publicContent.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    /**
     * GET /public-content/identifier/{identifier} : Retrieves a public content item by its unique identifier.
     * or 404 (Not Found) if the content item is not found.
     */
    @GetMapping("/identifier/{identifier}")
    public ResponseEntity<PublicContent> getPublicContentByIdentifier(@PathVariable String identifier) {
        Optional<PublicContent> publicContent = publicContentService.getPublicContentByIdentifier(identifier);
        return publicContent.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
