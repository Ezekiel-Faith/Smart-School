package com.smartschool.public_site_backend.service;

import com.smartschool.public_site_backend.model.FaqItem;
import com.smartschool.public_site_backend.repository.FaqItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Service class for managing FAQ items.
 * Handles business logic related to fetching and potentially managing FAQs.
 */
@Service //marks this class as a Spring Service component
public class FaqService {

    @Autowired
    private FaqItemRepository faqItemRepository;

    /**
     * Retrieves all FAQ items from the database.
     * @return A list of all FaqItem objects.
     */
    public List<FaqItem> getAllFaqs() {
        return faqItemRepository.findAll();
    }

    /**
     * Retrieves a single FAQ item by its ID.
     * @param id The ID of the FAQ item to retrieve.
     * @return An Optional containing the FaqItem if found, or empty if not.
     */
    public Optional<FaqItem> getFaqById(Long id) {
        return faqItemRepository.findById(id);
    }

    /**
     * Saves a new FAQ item or updates an existing one.
     * This method would typically be used by an administrative interface.
     * @param faqItem The FaqItem object to save.
     * @return The saved FaqItem object.
     */
    public FaqItem saveFaq(FaqItem faqItem) {
        return faqItemRepository.save(faqItem);
    }

    /**
     * Deletes an FAQ item by its ID.
     * This method would typically be used by an administrative interface.
     * @param id The ID of the FAQ item to delete.
     */
    public void deleteFaq(Long id) {
        faqItemRepository.deleteById(id);
    }
}
