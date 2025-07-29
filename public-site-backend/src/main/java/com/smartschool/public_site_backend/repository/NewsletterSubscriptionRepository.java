package com.smartschool.public_site_backend.repository;


import com.smartschool.public_site_backend.model.NewsletterSubscription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * JPA Repository for the NewsletterSubscription entity.
 * Provides standard CRUD operations for newsletter subscriptions.
 */
@Repository
public interface NewsletterSubscriptionRepository extends JpaRepository<NewsletterSubscription, Long> {
    // Custom method to find a subscription by email, useful for checking if an email already exists
    Optional<NewsletterSubscription> findByEmail(String email);
}
