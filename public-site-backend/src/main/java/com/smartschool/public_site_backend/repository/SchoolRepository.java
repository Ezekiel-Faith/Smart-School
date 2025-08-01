package com.smartschool.public_site_backend.repository;


import com.smartschool.public_site_backend.model.School;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repository for managing School entities (tenants).
 */
@Repository
public interface SchoolRepository extends JpaRepository<School, Long> {

}
