package com.smartschool.public_site_backend.service;


import com.smartschool.public_site_backend.model.NewsletterSubscription;
import com.smartschool.public_site_backend.repository.NewsletterSubscriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

/**
 * Service class for managing NewsletterSubscription entities.
 * Handles business logic for newsletter sign-ups.
 * All methods now require a schoolId to ensure data is scoped correctly for each tenant.
 */
@Service
public class NewsletterService {

    private final NewsletterSubscriptionRepository newsletterSubscriptionRepository;

    @Autowired
    public NewsletterService(NewsletterSubscriptionRepository newsletterSubscriptionRepository) {
        this.newsletterSubscriptionRepository = newsletterSubscriptionRepository;
    }

    /**
     * Retrieves all newsletter subscriptions for a given school.
     * @param schoolId The ID of the school.
     * @return A list of all NewsletterSubscription entities.
     */
    public List<NewsletterSubscription> getAllSubscriptions(Long schoolId) {
        return newsletterSubscriptionRepository.findBySchoolId(schoolId);
    }

    /**
     * Retrieves a single newsletter subscription by its ID for a given school.
     * @param schoolId The ID of the school.
     * @param id The ID of the subscription.
     * @return An Optional containing the NewsletterSubscription if found, otherwise empty.
     */
    public Optional<NewsletterSubscription> getSubscriptionById(Long schoolId, Long id) {
        return newsletterSubscriptionRepository.findBySchoolIdAndId(schoolId, id);
    }

    /**
     * Creates a new newsletter subscription for a given school.
     * Checks if the email is already subscribed for that school before creating.
     * @param schoolId The ID of the school.
     * @param email The email to subscribe.
     * @return An Optional containing the newly created NewsletterSubscription if successful, otherwise empty.
     */
    public Optional<NewsletterSubscription> createSubscription(Long schoolId, String email) {
        // Check if a subscription with this email already exists for this school
        if (newsletterSubscriptionRepository.findBySchoolIdAndEmail(schoolId, email).isPresent()) {
            return Optional.empty(); // Subscription already exists, return empty
        }

        NewsletterSubscription newSubscription = new NewsletterSubscription();
        newSubscription.setSchoolId(schoolId);
        newSubscription.setEmail(email);
        return Optional.of(newsletterSubscriptionRepository.save(newSubscription));
    }

    /**
     * Deletes a newsletter subscription by its ID for a given school.
     * @param schoolId The ID of the school.
     * @param id The ID of the subscription to delete.
     * @return true if the subscription was deleted, false otherwise.
     */
    @Transactional
    public boolean deleteSubscription(Long schoolId, Long id) {
        return newsletterSubscriptionRepository.findBySchoolIdAndId(schoolId, id)
                .map(subscription -> {
                    newsletterSubscriptionRepository.deleteBySchoolIdAndId(schoolId, id);
                    return true;
                }).orElse(false);
    }
}
