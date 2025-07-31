package com.smartschool.public_site_backend.controller;

import com.smartschool.public_site_backend.model.Testimonial;
import com.smartschool.public_site_backend.service.TestimonialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

/**
 * REST Controller for managing Testimonials.
 * Exposes API endpoints for fetching testimonial data for the public website.
 */
@RestController
@RequestMapping("/public/testimonials") //base path for all endpoints in this controller class
public class TestimonialController {

    @Autowired
    private TestimonialService testimonialService;


    /**
     * GET /testimonials : Retrieves all testimonials.
     */
    @GetMapping
    public ResponseEntity<List<Testimonial>> getAllTestimonials() {
        List<Testimonial> testimonials = testimonialService.getAllTestimonials();
        return ResponseEntity.ok(testimonials); //returns 200 OK with the list of testimonials
    }

    /**
     * GET /testimonials/{id} : Retrieves a single testimonial by its ID.
     * or 404 (Not Found) if the testimonial is not found.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Testimonial> getTestimonialById(@PathVariable Long id) {
        Optional<Testimonial> testimonial = testimonialService.getTestimonialById(id);
        //returns the testimonial items if found, otherwise returns 404 Not Found
        return testimonial.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }


}
