package com.smartschool.public_site_backend.service;


import com.smartschool.public_site_backend.model.Testimonial;
import com.smartschool.public_site_backend.repository.TestimonialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service class for managing Testimonial entities.
 * Handles business logic and data retrieval for the public testimonials section.
 * All methods now require a schoolId to ensure data is scoped correctly for each tenant.
 */
@Service
public class TestimonialService {

    private final TestimonialRepository testimonialRepository;

    @Autowired
    public TestimonialService(TestimonialRepository testimonialRepository) {
        this.testimonialRepository = testimonialRepository;
    }

    /**
     * Retrieves all testimonials for a given school.
     * @param schoolId The ID of the school.
     * @return A list of Testimonial entities.
     */
    public List<Testimonial> getAllTestimonials(Long schoolId) {
        return testimonialRepository.findBySchoolId(schoolId);
    }

    /**
     * Retrieves a single testimonial by its ID for a given school.
     * @param schoolId The ID of the school.
     * @param id The ID of the testimonial.
     * @return An Optional containing the Testimonial if found, otherwise empty.
     */
    public Optional<Testimonial> getTestimonialById(Long schoolId, Long id) {
        return Optional.ofNullable(testimonialRepository.findBySchoolIdAndId(schoolId, id));
    }

    /**
     * Creates a new testimonial for a given school.
     * @param schoolId The ID of the school.
     * @param testimonial The Testimonial entity to be created.
     * @return The newly created Testimonial.
     */
    public Testimonial createTestimonial(Long schoolId, Testimonial testimonial) {
        testimonial.setSchoolId(schoolId);
        return testimonialRepository.save(testimonial);
    }

    /**
     * Updates an existing testimonial for a given school.
     * @param schoolId The ID of the school.
     * @param id The ID of the testimonial to update.
     * @param updatedTestimonial The Testimonial entity with updated information.
     * @return The updated Testimonial, or an empty Optional if not found.
     */
    @Transactional
    public Optional<Testimonial> updateTestimonial(Long schoolId, Long id, Testimonial updatedTestimonial) {
        return Optional.ofNullable(testimonialRepository.findBySchoolIdAndId(schoolId, id))
                .map(existingItem -> {
                    existingItem.setText(updatedTestimonial.getText());
                    existingItem.setAuthor(updatedTestimonial.getAuthor());
                    return testimonialRepository.save(existingItem);
                });
    }

    /**
     * Deletes a testimonial for a given school.
     * @param schoolId The ID of the school.
     * @param id The ID of the testimonial to delete.
     * @return true if the item was deleted, false otherwise.
     */
    @Transactional
    public boolean deleteTestimonial(Long schoolId, Long id) {
        if (testimonialRepository.findBySchoolIdAndId(schoolId, id) != null) {
            testimonialRepository.deleteBySchoolIdAndId(schoolId, id);
            return true;
        }
        return false;
    }
}
