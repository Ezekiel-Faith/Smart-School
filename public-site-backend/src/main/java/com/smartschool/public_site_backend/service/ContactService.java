package com.smartschool.public_site_backend.service;

import com.smartschool.public_site_backend.model.ContactSubmission;
import com.smartschool.public_site_backend.repository.ContactSubmissionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Service class for managing Contact Submissions.
 * Handles business logic related to saving and retrieving contact form data.
 */
@Service
public class ContactService {

    @Autowired
    private ContactSubmissionRepository contactSubmissionRepository;

    /**
     * Saves a new contact form submission.
     * @param submission The ContactSubmission object to save.
     * @return The saved ContactSubmission object.
     */
    public ContactSubmission saveContactSubmission(ContactSubmission submission) {
        return contactSubmissionRepository.save(submission);
    }

    /**
     * Retrieves all contact submissions.
     * This method would typically be an administrative function.
     * @return A list of all ContactSubmission objects.
     */
    public List<ContactSubmission> getAllContactSubmissions() {
        return contactSubmissionRepository.findAll();
    }

    /**
     * Retrieves a single contact submission by its ID.
     * This method would typically be an administrative function.
     * @param id The ID of the contact submission to retrieve.
     * @return An Optional containing the ContactSubmission if found, or empty if not.
     */
    public Optional<ContactSubmission> getContactSubmissionById(Long id) {
        return contactSubmissionRepository.findById(id);
    }

    /**
     * Marks a contact submission as read.
     * This method would typically be an administrative function.
     * @param id The ID of the contact submission to mark as read.
     * @return An Optional containing the updated ContactSubmission if found and updated, or empty if not found.
     */
    public Optional<ContactSubmission> markAsRead(Long id) {
        return contactSubmissionRepository.findById(id).map(submission -> {
            submission.setRead(true);
            return contactSubmissionRepository.save(submission);
        });
    }

    /**
     * Deletes a contact submission by its ID.
     * This method would typically be an administrative function.
     * @param id The ID of the contact submission to delete.
     */
    public void deleteContactSubmission(Long id) {
        contactSubmissionRepository.deleteById(id);
    }
}
