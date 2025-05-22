-- SQL schema for deliveries service
CREATE TABLE deliveries (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  order_id INT NOT NULL,
  delivery_status ENUM('assigned','on the way','delivered') NOT NULL DEFAULT 'assigned',
  delivery_time DATETIME DEFAULT NULL,
  current_location VARCHAR(255) DEFAULT NULL
);
