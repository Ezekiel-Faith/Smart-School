package com.smartschool.public_site_backend.controller;


import com.smartschool.public_site_backend.model.FaqItem;
import com.smartschool.public_site_backend.service.FaqService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * REST Controller for managing FAQ items.
 * Exposes API endpoints for fetching FAQ data for the public website.
 */
@RestController
@RequestMapping("public/{schoolId}/faqs") //base path for all endpoints in this controller class
public class FaqController {

    private final FaqService faqService;

    @Autowired
    public FaqController(FaqService faqService) {
        this.faqService = faqService;
    }

    /**
     * GET /public/{schoolId}/faqs: Retrieves all FAQ items.
     */
    @GetMapping
    public ResponseEntity<List<FaqItem>> getAllFaqItems(@PathVariable Long schoolId) {
        List<FaqItem> faqs = faqService.getAllFaqItems(schoolId);
        return ResponseEntity.ok(faqs);
    }

    /**
     * GET /public/{schoolId}/faqs/{id} : Retrieves a single FAQ item by its ID.
     * @param schoolId The ID of the school.
     * @param id The ID of the FAQ item.
     * @return The FaqItem if found, or 404 Not Found.
     */
    @GetMapping("/{id}")
    public ResponseEntity<FaqItem> getFaqItemById(@PathVariable Long schoolId, @PathVariable Long id) {
        Optional<FaqItem> faq = faqService.getFaqItemById(schoolId, id);
        return faq.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    /**
     * POST /public/{schoolId}/faqs : Creates a new FAQ item.
     * @param schoolId The ID of the school.
     * @param faqItem The FaqItem to be created.
     * @return The newly created FaqItem with HTTP status 201 Created.
     */
    @PostMapping
    public ResponseEntity<FaqItem> createFaqItem(@PathVariable Long schoolId, @RequestBody FaqItem faqItem) {
        FaqItem createdFaqItem = faqService.createFaqItem(schoolId, faqItem);
        return new ResponseEntity<>(createdFaqItem, HttpStatus.CREATED);
    }

    /**
     * PUT /public/{schoolId}/faqs/{id} : Updates an existing FAQ item.
     * @param schoolId The ID of the school.
     * @param id The ID of the FAQ item to update.
     * @param updatedFaqItem The FaqItem with updated details.
     * @return The updated FaqItem, or 404 Not Found.
     */
    @PutMapping("/{id}")
    public ResponseEntity<FaqItem> updateFaqItem(@PathVariable Long schoolId, @PathVariable Long id, @RequestBody FaqItem updatedFaqItem) {
        Optional<FaqItem> faq = faqService.updateFaqItem(schoolId, id, updatedFaqItem);
        return faq.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    /**
     * DELETE /public/{schoolId}/faqs/{id} : Deletes an FAQ item.
     * @param schoolId The ID of the school.
     * @param id The ID of the FAQ item to delete.
     * @return 204 No Content if deleted, or 404 Not Found.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFaqItem(@PathVariable Long schoolId, @PathVariable Long id) {
        boolean deleted = faqService.deleteFaqItem(schoolId, id);
        return deleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}
