-- SQL schema for vendors service
CREATE TABLE vendors (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  contact VARCHAR(100) DEFAULT NULL
);
