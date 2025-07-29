package com.smartschool.public_site_backend.service;

import com.smartschool.public_site_backend.model.PublicContent;
import com.smartschool.public_site_backend.repository.PublicContentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

/**
 * Service class for managing generic Public Content items.
 * Handles business logic related to fetching and managing various text blocks.
 */
@Service
public class PublicContentService {

    @Autowired
    private PublicContentRepository publicContentRepository;

    /**
     * Retrieves all public content items.
     * @return A list of all PublicContent objects.
     */
    public List<PublicContent> getAllPublicContents(){
        return publicContentRepository.findAll();
    }

    /**
     * Retrieves a single public content item by its ID.
     * @param id The ID of the public content item to retrieve.
     * @return An Optional containing the PublicContent if found, or empty if not.
     */
    public Optional<PublicContent> getPublicContentById(Long id) {
        return publicContentRepository.findById(id);
    }

    /**
     * Retrieves a public content item by its unique identifier.
     * This is useful for fetching specific content blocks like "home-mission" or "marquee-text".
     * @param identifier The unique identifier of the public content item.
     * @return An Optional containing the PublicContent if found, or empty if not.
     */
    public Optional<PublicContent> getPublicContentByIdentifier(String identifier) {
        return publicContentRepository.findByIdentifier(identifier);
    }

    /**
     * Saves a new public content item or updates an existing one.
     * If an item with the same identifier exists, it will be updated.
     * This method would typically be used by an administrative interface.
     * @param publicContent The PublicContent object to save.
     * @return The saved PublicContent object.
     */
    public PublicContent savePublicContent(PublicContent publicContent) {
        // Ensure lastUpdated is set on save/update
        publicContent.setLastUpdated(LocalDateTime.now());
        return publicContentRepository.save(publicContent);
    }

    /**
     * Deletes a public content item by its ID.
     * This method would typically be used by an administrative interface.
     * @param id The ID of the public content item to delete.
     */
    public void deletePublicContent(Long id) {
        publicContentRepository.deleteById(id);
    }
}
