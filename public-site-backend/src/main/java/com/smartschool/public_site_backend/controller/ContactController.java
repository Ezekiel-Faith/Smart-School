package com.smartschool.public_site_backend.controller;


import com.smartschool.public_site_backend.model.ContactSubmission;
import com.smartschool.public_site_backend.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * REST Controller for handling Contact Form Submissions.
 * Exposes API endpoints for receiving contact messages from the public website.
 */
@RestController
@RequestMapping("/contact")
public class ContactController {

    @Autowired
    private ContactService contactService;

    /**
     * POST /contact : Submits a new contact message.
     * @param submission The ContactSubmission object containing the message details from the frontend.
     * @return ResponseEntity with the saved ContactSubmission object and HTTP status 201 (Created).
     */
    @PostMapping
    public ResponseEntity<ContactSubmission> submitContactForm(@RequestBody ContactSubmission submission) {
        ContactSubmission savedSubmission = contactService.saveContactSubmission(submission);
        return new ResponseEntity<>(savedSubmission, HttpStatus.CREATED);
    }
}
