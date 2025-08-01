package com.smartschool.public_site_backend.repository;


import com.smartschool.public_site_backend.model.NewsletterSubscription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * JPA Repository for the NewsletterSubscription entity.
 * Provides standard CRUD operations for newsletter subscriptions.
 */
@Repository
public interface NewsletterSubscriptionRepository extends JpaRepository<NewsletterSubscription, Long> {
    // Retrieves all newsletter subscriptions for a specific school
    List<NewsletterSubscription> findBySchoolId(Long schoolId);

    // Retrieves a single newsletter subscription by its ID and school ID
    Optional<NewsletterSubscription> findBySchoolIdAndId(Long schoolId, Long id);

    // Deletes a newsletter subscription by its ID and school ID
    void deleteBySchoolIdAndId(Long schoolId, Long id);

    // Find a subscription by email for a specific school
    Optional<NewsletterSubscription> findBySchoolIdAndEmail(Long schoolId, String email);
}
