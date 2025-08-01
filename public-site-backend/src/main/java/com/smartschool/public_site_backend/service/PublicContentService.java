package com.smartschool.public_site_backend.service;

import com.smartschool.public_site_backend.model.PublicContent;
import com.smartschool.public_site_backend.repository.PublicContentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

/**
 * Service class for managing PublicContent entities.
 * All methods now require a schoolId to ensure data is scoped correctly for each tenant.
 */
@Service
public class PublicContentService {

    private final PublicContentRepository publicContentRepository;

    @Autowired
    public PublicContentService(PublicContentRepository publicContentRepository) {
        this.publicContentRepository = publicContentRepository;
    }

    /**
     * Retrieves all public content for a given school.
     * @param schoolId The ID of the school.
     * @return A list of PublicContent entities.
     */
    public List<PublicContent> getAllPublicContent(Long schoolId) {
        return publicContentRepository.findBySchoolId(schoolId);
    }

    /**
     * Retrieves a single public content item by its identifier for a given school.
     * @param schoolId The ID of the school.
     * @param identifier The unique identifier of the content item.
     * @return An Optional containing the PublicContent if found, otherwise empty.
     */
    public Optional<PublicContent> getPublicContentByIdentifier(Long schoolId, String identifier) {
        return publicContentRepository.findBySchoolIdAndIdentifier(schoolId, identifier);
    }

    /**
     * Creates or updates a public content item for a given school.
     * This method handles both creation and updates.
     * @param schoolId The ID of the school.
     * @param publicContent The PublicContent entity to be saved.
     * @return The newly created or updated PublicContent.
     */
    public PublicContent savePublicContent(Long schoolId, PublicContent publicContent) {
        publicContent.setSchoolId(schoolId);
        return publicContentRepository.save(publicContent);
    }

    /**
     * Deletes a public content item by its ID for a given school.
     * @param schoolId The ID of the school.
     * @param id The ID of the public content item to delete.
     * @return true if the item was deleted, false otherwise.
     */
    @Transactional
    public boolean deletePublicContent(Long schoolId, Long id) {
        return publicContentRepository.findById(id)
                .filter(content -> content.getSchoolId().equals(schoolId))
                .map(content -> {
                    publicContentRepository.deleteById(id);
                    return true;
                }).orElse(false);
    }
}
