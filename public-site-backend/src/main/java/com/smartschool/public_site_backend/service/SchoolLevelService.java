package com.smartschool.public_site_backend.service;

import com.smartschool.public_site_backend.model.SchoolLevel;
import com.smartschool.public_site_backend.repository.SchoolLevelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service class for managing SchoolLevel entities.
 * Handles business logic and data retrieval for the public school levels section.
 * All methods now require a schoolId to ensure data is scoped correctly for each tenant.
 */
@Service
public class SchoolLevelService {

    private final SchoolLevelRepository schoolLevelRepository;

    @Autowired
    public SchoolLevelService(SchoolLevelRepository schoolLevelRepository) {
        this.schoolLevelRepository = schoolLevelRepository;
    }

    /**
     * Retrieves all school levels for a given school.
     * @param schoolId The ID of the school.
     * @return A list of SchoolLevel entities.
     */
    public List<SchoolLevel> getAllSchoolLevels(Long schoolId) {
        return schoolLevelRepository.findBySchoolId(schoolId);
    }

    /**
     * Retrieves a single school level by its ID for a given school.
     * @param schoolId The ID of the school.
     * @param id The ID of the school level.
     * @return An Optional containing the SchoolLevel if found, otherwise empty.
     */
    public Optional<SchoolLevel> getSchoolLevelById(Long schoolId, Long id) {
        return schoolLevelRepository.findBySchoolIdAndId(schoolId, id);
    }

    /**
     * Retrieves a single school level by its title for a given school.
     * @param schoolId The ID of the school.
     * @param title The title of the school level.
     * @return An Optional containing the SchoolLevel if found, otherwise empty.
     */
    public Optional<SchoolLevel> getSchoolLevelByTitle(Long schoolId, String title) {
        return schoolLevelRepository.findBySchoolIdAndTitle(schoolId, title);
    }

    /**
     * Creates a new school level for a given school.
     * @param schoolId The ID of the school.
     * @param schoolLevel The SchoolLevel entity to be created.
     * @return The newly created SchoolLevel.
     */
    public SchoolLevel createSchoolLevel(Long schoolId, SchoolLevel schoolLevel) {
        schoolLevel.setSchoolId(schoolId);
        return schoolLevelRepository.save(schoolLevel);
    }

    /**
     * Updates an existing school level for a given school.
     * @param schoolId The ID of the school.
     * @param id The ID of the school level to update.
     * @param updatedSchoolLevel The SchoolLevel entity with updated information.
     * @return The updated SchoolLevel, or an empty Optional if not found.
     */
    @Transactional
    public Optional<SchoolLevel> updateSchoolLevel(Long schoolId, Long id, SchoolLevel updatedSchoolLevel) {
        return schoolLevelRepository.findBySchoolIdAndId(schoolId, id)
                .map(existingItem -> {
                    existingItem.setTitle(updatedSchoolLevel.getTitle());
                    existingItem.setDescription(updatedSchoolLevel.getDescription());
                    existingItem.setImageUrl(updatedSchoolLevel.getImageUrl());
                    existingItem.setButtonText(updatedSchoolLevel.getButtonText());
                    existingItem.setCurriculumDownloadUrl(updatedSchoolLevel.getCurriculumDownloadUrl());
                    return schoolLevelRepository.save(existingItem);
                });
    }

    /**
     * Deletes a school level for a given school.
     * @param schoolId The ID of the school.
     * @param id The ID of the school level to delete.
     * @return true if the item was deleted, false otherwise.
     */
    @Transactional
    public boolean deleteSchoolLevel(Long schoolId, Long id) {
        return schoolLevelRepository.findBySchoolIdAndId(schoolId, id).map(item -> {
            schoolLevelRepository.deleteBySchoolIdAndId(schoolId, id);
            return true;
        }).orElse(false);
    }
}
