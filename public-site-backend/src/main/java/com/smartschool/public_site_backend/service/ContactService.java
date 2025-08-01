package com.smartschool.public_site_backend.service;

import com.smartschool.public_site_backend.model.ContactSubmission;
import com.smartschool.public_site_backend.repository.ContactSubmissionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service class for managing ContactSubmission entities.
 * Handles business logic for contact form submissions.
 * All methods now require a schoolId to ensure data is scoped correctly for each tenant.
 */
@Service
public class ContactService {

    private final ContactSubmissionRepository contactSubmissionRepository;

    @Autowired
    public ContactService(ContactSubmissionRepository contactSubmissionRepository) {
        this.contactSubmissionRepository = contactSubmissionRepository;
    }

    /**
     * Retrieves all contact submissions for a given school.
     * @param schoolId The ID of the school.
     * @return A list of all ContactSubmission entities.
     */
    public List<ContactSubmission> getAllContactSubmissions(Long schoolId) {
        return contactSubmissionRepository.findBySchoolId(schoolId);
    }

    /**
     * Creates a new contact submission for a given school.
     * @param schoolId The ID of the school.
     * @param submission The ContactSubmission entity to be created.
     * @return The newly created ContactSubmission.
     */
    public ContactSubmission createContactSubmission(Long schoolId, ContactSubmission submission) {
        submission.setSchoolId(schoolId);
        return contactSubmissionRepository.save(submission);
    }

    /**
     * Deletes a contact submission by its ID for a given school.
     * @param schoolId The ID of the school.
     * @param id The ID of the contact submission to delete.
     * @return true if the submission was deleted, false otherwise.
     */
    @Transactional
    public boolean deleteContactSubmission(Long schoolId, Long id) {
        if (contactSubmissionRepository.findBySchoolIdAndId(schoolId, id).isPresent()) {
            contactSubmissionRepository.deleteBySchoolIdAndId(schoolId, id);
            return true;
        }
        return false;
    }

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
