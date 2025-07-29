package com.smartschool.public_site_backend.service;

import com.smartschool.public_site_backend.model.SchoolLevel;
import com.smartschool.public_site_backend.repository.SchoolLevelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Service class for managing School Levels.
 * Handles business logic related to fetching and potentially managing academic levels.
 */
@Service
public class SchoolLevelService {

    @Autowired
    private SchoolLevelRepository schoolLevelRepository;

    /**
     * Retrieves all school levels from the database.
     * @return A list of all SchoolLevel objects.
     */
    public List<SchoolLevel> getAllSchoolLevels() {
        return schoolLevelRepository.findAll();
    }

    /**
     * Retrieves a single school level by its ID.
     * @param id The ID of the school level to retrieve.
     * @return An Optional containing the SchoolLevel if found, or empty if not.
     */
    public Optional<SchoolLevel> getSchoolLevelById(Long id) {
        return schoolLevelRepository.findById(id);
    }

    /**
     * Retrieves a school level by its title.
     * @param title The title of the school level (e.g., "Primary").
     * @return An Optional containing the SchoolLevel if found, or empty if not.
     */
    public Optional<SchoolLevel> getSchoolLevelsByTitle(String title) {
        return schoolLevelRepository.findByTitle(title);
    }

    /**
     * Saves a new school level or updates an existing one.
     * This method would typically be used by an administrative interface.
     * @param schoolLevel The SchoolLevel object to save.
     * @return The saved SchoolLevel object.
     */
    public SchoolLevel saveSchoolLevel(SchoolLevel schoolLevel) {
        return schoolLevelRepository.save(schoolLevel);
    }

    /**
     * Deletes a school level by its ID.
     * This method would typically be used by an administrative interface.
     * @param id The ID of the school level to delete.
     */
    public void deleteSchoolLevel(Long id) {
        schoolLevelRepository.deleteById(id);
    }
}
