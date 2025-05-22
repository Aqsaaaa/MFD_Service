-- SQL schema for vendor_requests service
CREATE TABLE vendor_requests (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  vendor_id INT NOT NULL,
  ingredient_id INT NOT NULL,
  quantity INT NOT NULL,
  status ENUM('requested','accepted','on-delivery','delivered') NOT NULL DEFAULT 'requested',
  requested_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  estimated_arrival DATETIME DEFAULT NULL
);
