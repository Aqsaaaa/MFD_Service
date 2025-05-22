-- SQL schema for menu_ingredients service
CREATE TABLE menu_ingredients (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  menu_id INT NOT NULL,
  ingredient_id INT NOT NULL,
  quantity DECIMAL(10,2) NOT NULL,
  UNIQUE KEY unique_menu_ingredient (menu_id, ingredient_id)
);
