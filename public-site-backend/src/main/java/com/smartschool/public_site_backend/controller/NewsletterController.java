package com.smartschool.public_site_backend.controller;


import com.smartschool.public_site_backend.model.NewsletterSubscription;
import com.smartschool.public_site_backend.service.NewsletterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * REST Controller for handling Newsletter Subscriptions.
 * Exposes API endpoints for receiving newsletter subscription requests from the public website.
 */
@RestController
@RequestMapping("newsletter")
public class NewsletterController {

    @Autowired
    private NewsletterService newsletterService;

    @PostMapping("/subscribe")
    public ResponseEntity<NewsletterSubscription> subscribeNewsletter(
            @RequestBody NewsletterSubscription subscription) {
        NewsletterSubscription savedSubscription =
                newsletterService.subscribeNewsletter(subscription.getEmail());
        if(savedSubscription == null) {
            // If subscribeNewsletter returns null, it means the email already exists.
            return new ResponseEntity<>(HttpStatus.CONFLICT); // Returns 409 Conflict
        }

        // Returns 201 Created status with the saved subscription details
        return new ResponseEntity<>(savedSubscription, HttpStatus.CREATED);
    }
}
