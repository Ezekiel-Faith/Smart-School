package com.smartschool.public_site_backend.controller;


import com.smartschool.public_site_backend.model.ContactSubmission;
import com.smartschool.public_site_backend.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST Controller for handling Contact Form Submissions.
 * Exposes API endpoints for receiving contact messages from the public website.
 */
@RestController
@RequestMapping("/public/{schoolId}/contact")
public class ContactController {

    private final ContactService contactService;

    @Autowired
    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    /**
     * POST /public/{schoolId}/contact : Submits a new contact message for a specific school.
     * @param schoolId The ID of the school.
     * @param submission The ContactSubmission object containing the message details.
     * @return ResponseEntity with the saved ContactSubmission object and HTTP status 201 Created.
     */
    @PostMapping
    public ResponseEntity<ContactSubmission> submitContactForm(@PathVariable Long schoolId, @RequestBody ContactSubmission submission) {
        ContactSubmission savedSubmission = contactService.createContactSubmission(schoolId, submission);
        return new ResponseEntity<>(savedSubmission, HttpStatus.CREATED);
    }

    /**
     * GET /public/{schoolId}/contact : Retrieves all contact submissions for a given school (Admin).
     * @param schoolId The ID of the school.
     * @return A list of all ContactSubmission entities.
     */
    @GetMapping
    public ResponseEntity<List<ContactSubmission>> getAllContactSubmissions(@PathVariable Long schoolId) {
        List<ContactSubmission> submissions = contactService.getAllContactSubmissions(schoolId);
        return ResponseEntity.ok(submissions);
    }

    /**
     * DELETE /public/{schoolId}/contact/{id} : Deletes a contact submission by its ID for a given school (Admin).
     * @param schoolId The ID of the school.
     * @param id The ID of the contact submission to delete.
     * @return 204 No Content if deleted, or 404 Not Found.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteContactSubmission(@PathVariable Long schoolId, @PathVariable Long id) {
        boolean deleted = contactService.deleteContactSubmission(schoolId, id);
        return deleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}
