package com.smartschool.public_site_backend.service;

import com.smartschool.public_site_backend.model.FaqItem;
import com.smartschool.public_site_backend.repository.FaqItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service class for managing FaqItem entities.
 * Handles business logic and data retrieval for the public FAQ section.
 * All methods now require a schoolId to ensure data is scoped correctly for each tenant.
 */
@Service //marks this class as a Spring Service component
public class FaqService {


    private final FaqItemRepository faqItemRepository;

    @Autowired
    public FaqService(FaqItemRepository faqItemRepository) {
        this.faqItemRepository = faqItemRepository;
    }

    /**
     * Retrieves all FAQ items for a given school.
     * @param schoolId The ID of the school.
     */
    public List<FaqItem> getAllFaqItems(Long schoolId) {
        //a check here in the future to ensure the school exists and
        // has the public site enabled, but for now we'll retrieve all items
        return faqItemRepository.findBySchoolId(schoolId);
    }

    /**
     * Retrieves a single FAQ item by its ID for a given school.
     * @param schoolId The ID of the school.
     * @param id The ID of the FAQ item.
     * @return An Optional containing the FaqItem if found, otherwise empty.
     */
    public Optional<FaqItem> getFaqItemById(Long schoolId, Long id) {
        return Optional.ofNullable(faqItemRepository.findBySchoolIdAndId(schoolId, id));
    }

    /**
     * Creates a new FAQ item for a given school.
     * @param schoolId The ID of the school.
     * @param faqItem The FaqItem entity to be created.
     * @return The newly created FaqItem.
     */
    public FaqItem createFaqItem(Long schoolId, FaqItem faqItem) {
        faqItem.setSchoolId(schoolId);
        return faqItemRepository.save(faqItem);
    }

    /**
     * Updates an existing FAQ item for a given school.
     * @param schoolId The ID of the school.
     * @param id The ID of the FAQ item to update.
     * @param updatedFaqItem The FaqItem entity with updated information.
     * @return The updated FaqItem, or an empty Optional if not found.
     */
    @Transactional
    public Optional<FaqItem> updateFaqItem(Long schoolId, Long id, FaqItem updatedFaqItem) {
        return Optional.ofNullable(faqItemRepository.findBySchoolIdAndId(schoolId, id))
                .map(existingItem -> {
                    existingItem.setQuestion(updatedFaqItem.getQuestion());
                    existingItem.setAnswer(updatedFaqItem.getAnswer());
                    return faqItemRepository.save(existingItem);
                });
    }

    /**
     * Deletes an FAQ item for a given school.
     * @param schoolId The ID of the school.
     * @param id The ID of the FAQ item to delete.
     * @return true if the item was deleted, false otherwise.
     */
    @org.springframework.transaction.annotation.Transactional
    public boolean deleteFaqItem(Long schoolId, Long id) {
        if (faqItemRepository.findBySchoolIdAndId(schoolId, id) != null) {
            faqItemRepository.deleteBySchoolIdAndId(schoolId, id);
            return true;
        }
        return false;
    }
}
