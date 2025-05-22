-- SQL schema for order_menu service
CREATE TABLE order_menu (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  order_id INT NOT NULL,
  menu_id INT NOT NULL,
  quantity INT NOT NULL DEFAULT 1,
  UNIQUE KEY unique_order_menu (order_id, menu_id)
);
