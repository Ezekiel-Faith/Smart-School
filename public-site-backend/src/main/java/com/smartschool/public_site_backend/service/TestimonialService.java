package com.smartschool.public_site_backend.service;


import com.smartschool.public_site_backend.model.Testimonial;
import com.smartschool.public_site_backend.repository.TestimonialRepository;
import org.aspectj.weaver.ast.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Service class for managing Testimonials.
 * Handles business logic related to fetching and potentially managing testimonials.
 */
@Service
public class TestimonialService {

    @Autowired
    private TestimonialRepository testimonialRepository;

    /**
     * Retrieves all testimonials from the database.
     * @return A list of all Testimonial objects.
     */
    public List<Testimonial> getTestimonials() {
        return testimonialRepository.findAll();
    }

    /**
     * Retrieves a single testimonial by its ID.
     * @param id The ID of the testimonial to retrieve.
     * @return An Optional containing the Testimonial if found, or empty if not.
     */
    public Optional<Testimonial> getTestimonialById(Long id) {
        return testimonialRepository.findById(id);
    }

    /**
     * Saves a new testimonial or updates an existing one.
     * This method would typically be used by an administrative interface.
     * @param testimonial The Testimonial object to save.
     * @return The saved Testimonial object.
     */
    public Testimonial saveTestimonial(Testimonial testimonial) {
        return testimonialRepository.save(testimonial);
    }

    /**
     * Deletes a testimonial by its ID.
     * This method would typically be used by an administrative interface.
     * @param id The ID of the testimonial to delete.
     */
    public void deleteTestimonial(Long id) {
        testimonialRepository.deleteById(id);
    }
}
