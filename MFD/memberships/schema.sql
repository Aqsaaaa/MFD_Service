-- SQL schema for memberships service
CREATE TABLE memberships (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  points INT DEFAULT 0
);
