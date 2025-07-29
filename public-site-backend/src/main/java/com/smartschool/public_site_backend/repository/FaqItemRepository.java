package com.smartschool.public_site_backend.repository;

import com.smartschool.public_site_backend.model.FaqItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



/**
 * JPA Repository for the FaqItem entity.
 * Provides standard CRUD (Create, Read, Update, Delete) operations
 * and allows for custom query methods if needed.
 */
@Repository //marks this interface as a Spring Data JPA repository
public interface FaqItemRepository extends JpaRepository<FaqItem, Long> {
    // JpaRepository provides methods like save(), findById(), findAll(), deleteById(), etc.
}
