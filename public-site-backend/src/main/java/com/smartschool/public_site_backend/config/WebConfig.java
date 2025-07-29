package com.smartschool.public_site_backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


/**
 * configuration class for Cross-Origin Resource Sharing (CORS).
 * allows the React frontend (running on a different origin/port)
 * to make requests to this Spring Boot backend.
 */
@Configuration
public class WebConfig implements WebMvcConfigurer  {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Apply CORS to all API endpoints under /api/**
        registry.addMapping("/api/**")
                // allow requests from React app's development server origin.
                // the server will be replaced with the actual frontend domain.
                .allowedOrigins("http://localhost:5173")
                // specify allowed HTTP methods (GET, POST, PUT, DELETE, OPTIONS are common for REST APIs)
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                // allow all headers in the request
                .allowedHeaders("*")
                // allow credentials (e.g., cookies, authorization headers).
                // for authentication/sessions in the future.
                .allowCredentials(true);
    }
}
