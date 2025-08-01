package com.smartschool.public_site_backend.controller;


import com.smartschool.public_site_backend.model.SchoolLevel;
import com.smartschool.public_site_backend.service.SchoolLevelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * REST Controller for managing School Levels.
 * Exposes API endpoints for fetching academic program data for the public website.
 */
@RestController
@RequestMapping("/public/{schoolId}/school-levels")
public class SchoolLevelController {

    private final SchoolLevelService schoolLevelService;

    @Autowired
    public SchoolLevelController(SchoolLevelService schoolLevelService) {
        this.schoolLevelService = schoolLevelService;
    }

    /**
     * GET /public/{schoolId}/school-levels : Retrieves all school levels for a given school.
     * @param schoolId The ID of the school.
     * @return A list of SchoolLevel entities.
     */
    @GetMapping
    public ResponseEntity<List<SchoolLevel>> getAllSchoolLevels(@PathVariable Long schoolId) {
        List<SchoolLevel> schoolLevels = schoolLevelService.getAllSchoolLevels(schoolId);
        return ResponseEntity.ok(schoolLevels);
    }

    /**
     * GET /public/{schoolId}/school-levels/{id} : Retrieves a single school level by its ID.
     * @param schoolId The ID of the school.
     * @param id The ID of the school level.
     * @return The SchoolLevel if found, or 404 Not Found.
     */
    @GetMapping("/{id}")
    public ResponseEntity<SchoolLevel> getSchoolLevelById(@PathVariable Long schoolId, @PathVariable Long id) {
        Optional<SchoolLevel> schoolLevel = schoolLevelService.getSchoolLevelById(schoolId, id);
        return schoolLevel.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    /**
     * GET /public/{schoolId}/school-levels/title/{title} : Retrieves a single school level by its title.
     * @param schoolId The ID of the school.
     * @param title The title of the school level.
     * @return The SchoolLevel if found, or 404 Not Found.
     */
    @GetMapping("/title/{title}")
    public ResponseEntity<SchoolLevel> getSchoolLevelByTitle(@PathVariable Long schoolId, @PathVariable String title) {
        Optional<SchoolLevel> schoolLevel = schoolLevelService.getSchoolLevelByTitle(schoolId, title);
        return schoolLevel.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    /**
     * POST /public/{schoolId}/school-levels : Creates a new school level.
     * @param schoolId The ID of the school.
     * @param schoolLevel The SchoolLevel to be created.
     * @return The newly created SchoolLevel with HTTP status 201 Created.
     */
    @PostMapping
    public ResponseEntity<SchoolLevel> createSchoolLevel(@PathVariable Long schoolId, @RequestBody SchoolLevel schoolLevel) {
        SchoolLevel createdSchoolLevel = schoolLevelService.createSchoolLevel(schoolId, schoolLevel);
        return new ResponseEntity<>(createdSchoolLevel, HttpStatus.CREATED);
    }

    /**
     * PUT /public/{schoolId}/school-levels/{id} : Updates an existing school level.
     * @param schoolId The ID of the school.
     * @param id The ID of the school level to update.
     * @param updatedSchoolLevel The SchoolLevel with updated details.
     * @return The updated SchoolLevel, or 404 Not Found.
     */
    @PutMapping("/{id}")
    public ResponseEntity<SchoolLevel> updateSchoolLevel(@PathVariable Long schoolId, @PathVariable Long id, @RequestBody SchoolLevel updatedSchoolLevel) {
        Optional<SchoolLevel> schoolLevel = schoolLevelService.updateSchoolLevel(schoolId, id, updatedSchoolLevel);
        return schoolLevel.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    /**
     * DELETE /public/{schoolId}/school-levels/{id} : Deletes a school level.
     * @param schoolId The ID of the school.
     * @param id The ID of the school level to delete.
     * @return 204 No Content if deleted, or 404 Not Found.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSchoolLevel(@PathVariable Long schoolId, @PathVariable Long id) {
        boolean deleted = schoolLevelService.deleteSchoolLevel(schoolId, id);
        return deleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}
