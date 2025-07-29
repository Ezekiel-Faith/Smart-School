package com.smartschool.public_site_backend.service;


import com.smartschool.public_site_backend.model.NewsletterSubscription;
import com.smartschool.public_site_backend.repository.NewsletterSubscriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

/**
 * Service class for managing Newsletter Subscriptions.
 * Handles business logic related to saving and retrieving subscriber emails.
 */
@Service
public class NewsletterService {

    @Autowired
    private NewsletterSubscriptionRepository newsletterSubscriptionRepository;

    /**
     * Subscribes a new email to the newsletter.
     * Checks if the email already exists before saving.
     * @param email The email address to subscribe.
     * @return The saved NewsletterSubscription object, or null if the email already exists.
     */
    public NewsletterSubscription subscribeNewsletter(String email) {
        // Check if email already exists to prevent duplicates
        if (newsletterSubscriptionRepository.findByEmail(email).isPresent()) {
            throw new IllegalArgumentException("Email already subscribed.");
        }

        NewsletterSubscription subscription = new NewsletterSubscription();
        subscription.setEmail(email);
        subscription.setSubscriptionDate(LocalDateTime.now());
        return newsletterSubscriptionRepository.save(subscription);
    }

    /**
     * Retrieves all newsletter subscriptions.
     * This method would typically be an administrative function.
     * @return A list of all NewsletterSubscription objects.
     */
    public List<NewsletterSubscription> getAllSubscriptions() {
        return newsletterSubscriptionRepository.findAll();
    }

    /**
     * Retrieves a single subscription by its ID.
     * This method would typically be an administrative function.
     * @param id The ID of the subscription to retrieve.
     * @return An Optional containing the NewsletterSubscription if found, or empty if not.
     */
    public Optional<NewsletterSubscription> getSubscriptionById(Long id) {
        return newsletterSubscriptionRepository.findById(id);
    }

    /**
     * Deletes a newsletter subscription by its ID.
     * This method would typically be an administrative function.
     * @param id The ID of the subscription to delete.
     */
    public void deleteSubscription(Long id) {
        newsletterSubscriptionRepository.deleteById(id);
    }
}
