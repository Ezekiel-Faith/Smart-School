package com.smartschool.public_site_backend.controller;

import com.smartschool.public_site_backend.model.Testimonial;
import com.smartschool.public_site_backend.service.TestimonialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * REST Controller for managing Testimonials.
 * Exposes API endpoints for fetching testimonial data for the public website.
 */
@RestController
@RequestMapping("/public/{schoolId}/testimonials") //base path for all endpoints in this controller class
public class TestimonialController {

    private final TestimonialService testimonialService;

    @Autowired
    public TestimonialController(TestimonialService testimonialService) {
        this.testimonialService = testimonialService;
    }

    /**
     * GET /public/{schoolId}/testimonials : Retrieves all testimonials for a given school.
     * @param schoolId The ID of the school.
     * @return A list of Testimonial entities.
     */
    @GetMapping
    public ResponseEntity<List<Testimonial>> getAllTestimonials(@PathVariable Long schoolId) {
        List<Testimonial> testimonials = testimonialService.getAllTestimonials(schoolId);
        return ResponseEntity.ok(testimonials);
    }

    /**
     * GET /public/{schoolId}/testimonials/{id} : Retrieves a single testimonial by its ID.
     * @param schoolId The ID of the school.
     * @param id The ID of the testimonial.
     * @return The Testimonial if found, or 404 Not Found.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Testimonial> getTestimonialById(@PathVariable Long schoolId, @PathVariable Long id) {
        Optional<Testimonial> testimonial = testimonialService.getTestimonialById(schoolId, id);
        return testimonial.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    /**
     * POST /public/{schoolId}/testimonials : Creates a new testimonial.
     * @param schoolId The ID of the school.
     * @param testimonial The Testimonial to be created.
     * @return The newly created Testimonial with HTTP status 201 Created.
     */
    @PostMapping
    public ResponseEntity<Testimonial> createTestimonial(@PathVariable Long schoolId, @RequestBody Testimonial testimonial) {
        Testimonial createdTestimonial = testimonialService.createTestimonial(schoolId, testimonial);
        return new ResponseEntity<>(createdTestimonial, HttpStatus.CREATED);
    }

    /**
     * PUT /public/{schoolId}/testimonials/{id} : Updates an existing testimonial.
     * @param schoolId The ID of the school.
     * @param id The ID of the testimonial to update.
     * @param updatedTestimonial The Testimonial with updated details.
     * @return The updated Testimonial, or 404 Not Found.
     */
    @PutMapping("/{id}")
    public ResponseEntity<Testimonial> updateTestimonial(@PathVariable Long schoolId, @PathVariable Long id, @RequestBody Testimonial updatedTestimonial) {
        Optional<Testimonial> testimonial = testimonialService.updateTestimonial(schoolId, id, updatedTestimonial);
        return testimonial.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    /**
     * DELETE /public/{schoolId}/testimonials/{id} : Deletes a testimonial.
     * @param schoolId The ID of the school.
     * @param id The ID of the testimonial to delete.
     * @return 204 No Content if deleted, or 404 Not Found.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTestimonial(@PathVariable Long schoolId, @PathVariable Long id) {
        boolean deleted = testimonialService.deleteTestimonial(schoolId, id);
        return deleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}
