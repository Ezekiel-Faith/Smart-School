package com.smartschool.public_site_backend.controller;


import com.smartschool.public_site_backend.model.FaqItem;
import com.smartschool.public_site_backend.service.FaqService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

/**
 * REST Controller for managing FAQ items.
 * Exposes API endpoints for fetching FAQ data for the public website.
 */
@RestController
@RequestMapping("public/faqs") //base path for all endpoints in this controller class
public class FaqController {

    @Autowired
    private FaqService faqService;

    /**
     * GET /faqs : Retrieves all FAQ items.
     */
    @GetMapping
    public ResponseEntity<List<FaqItem>> getAllFaqs() {
        List<FaqItem> faqs = faqService.getAllFaqs();
        return ResponseEntity.ok(faqs); //returns 200 OK with the list of FAQs
    }

    /**
     * GET /faqs/{id} : Retrieves a single FAQ item by its ID.
     * or 404 (Not Found) if the FAQ is not found.
     */
    @GetMapping("/{id}")
    public ResponseEntity<FaqItem> getFaqById(@PathVariable Long id) {
        Optional<FaqItem> faq = faqService.getFaqById(id);
        //returns the FAQ if found, otherwise returns 404 Not Found
        return faq.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
