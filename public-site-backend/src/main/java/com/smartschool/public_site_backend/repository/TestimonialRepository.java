package com.smartschool.public_site_backend.repository;


import com.smartschool.public_site_backend.model.Testimonial;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * JPA Repository for the Testimonial entity.
 * Provides standard CRUD operations for testimonials.
 */
@Repository
public interface TestimonialRepository extends JpaRepository<Testimonial, Long> {
    // JpaRepository provides methods like save(), findById(), findAll(), deleteById(), etc.
}
