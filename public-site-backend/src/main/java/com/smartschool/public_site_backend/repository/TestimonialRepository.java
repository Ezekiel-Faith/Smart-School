package com.smartschool.public_site_backend.repository;


import com.smartschool.public_site_backend.model.Testimonial;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * JPA Repository for the Testimonial entity.
 * Provides standard CRUD operations for testimonials.
 */
@Repository
public interface TestimonialRepository extends JpaRepository<Testimonial, Long> {
    // Retrieves all testimonials for a specific school
    List<Testimonial> findBySchoolId(Long schoolId);

    // Retrieves a single testimonial by its ID and school ID
    Testimonial findBySchoolIdAndId(Long schoolId, Long id);

    // Deletes a testimonial by its ID and school ID
    void deleteBySchoolIdAndId(Long schoolId, Long id);
}
