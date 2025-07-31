package com.smartschool.public_site_backend.controller;


import com.smartschool.public_site_backend.model.SchoolLevel;
import com.smartschool.public_site_backend.service.SchoolLevelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

/**
 * REST Controller for managing School Levels.
 * Exposes API endpoints for fetching academic program data for the public website.
 */
@RestController
@RequestMapping("/public/school-levels")
public class SchoolLevelController {

    @Autowired
    private SchoolLevelService schoolLevelService;

    /**
     * GET /school-levels : Retrieves all school levels.
     */
    @GetMapping
    public ResponseEntity<List<SchoolLevel>> getAllSchoolsLevels() {
        List<SchoolLevel> schoolLevels = schoolLevelService.getAllSchoolLevels();
        return ResponseEntity.ok(schoolLevels); //returns 200 OK with the list of school-levels
    }

    /**
     * GET /school-levels/{id} : Retrieves a single school level by its ID.
     * or 404 (Not Found) if the school level is not found.
     */
    @GetMapping("/{id}")
    public ResponseEntity<SchoolLevel> getSchoolLevelById(@PathVariable Long id) {
        Optional<SchoolLevel> schoolLevel = schoolLevelService.getSchoolLevelById(id);
        //returns the school level if found, otherwise returns 404 Not Found
        return schoolLevel.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    /**
     * GET /school-levels/title/{title} : Retrieves a single school level by its title.
     * or 404 (Not Found) if the school level is not found.
     */
    @GetMapping("/title/{title}")
    public ResponseEntity<SchoolLevel> getSchoolLevelByTitle(@PathVariable String title) {
        Optional<SchoolLevel> schoolLevel = schoolLevelService.getSchoolLevelsByTitle(title);
        return schoolLevel.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
