package com.smartschool.public_site_backend.controller;


import com.smartschool.public_site_backend.model.NewsletterSubscription;
import com.smartschool.public_site_backend.service.NewsletterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * REST Controller for handling Newsletter Subscriptions.
 * Exposes API endpoints for receiving newsletter subscription requests from the public website.
 */
@RestController
@RequestMapping("/public/{schoolId}/newsletter")
public class NewsletterController {

    private final NewsletterService newsletterService;

    @Autowired
    public NewsletterController(NewsletterService newsletterService) {
        this.newsletterService = newsletterService;
    }

    /**
     * POST /public/{schoolId}/newsletter/subscribe : Subscribes a new email to the newsletter.
     * @param schoolId The ID of the school.
     * @param subscription The NewsletterSubscription object containing the email.
     * @return The newly created NewsletterSubscription with HTTP status 201 Created, or 409 Conflict if the email already exists.
     */
    @PostMapping("/subscribe")
    public ResponseEntity<NewsletterSubscription> subscribeNewsletter(@PathVariable Long schoolId, @RequestBody NewsletterSubscription subscription) {
        Optional<NewsletterSubscription> savedSubscription = newsletterService.createSubscription(schoolId, subscription.getEmail());
        return savedSubscription.map(sub -> new ResponseEntity<>(sub, HttpStatus.CREATED))
                .orElse(new ResponseEntity<>(HttpStatus.CONFLICT));
    }

    /**
     * GET /public/{schoolId}/newsletter : Retrieves all newsletter subscriptions for a given school (Admin).
     * @param schoolId The ID of the school.
     * @return A list of all NewsletterSubscription entities.
     */
    @GetMapping
    public ResponseEntity<List<NewsletterSubscription>> getAllSubscriptions(@PathVariable Long schoolId) {
        List<NewsletterSubscription> subscriptions = newsletterService.getAllSubscriptions(schoolId);
        return ResponseEntity.ok(subscriptions);
    }

    /**
     * DELETE /public/{schoolId}/newsletter/{id} : Deletes a newsletter subscription by its ID for a given school (Admin).
     * @param schoolId The ID of the school.
     * @param id The ID of the subscription to delete.
     * @return 204 No Content if deleted, or 404 Not Found.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSubscription(@PathVariable Long schoolId, @PathVariable Long id) {
        boolean deleted = newsletterService.deleteSubscription(schoolId, id);
        return deleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}
