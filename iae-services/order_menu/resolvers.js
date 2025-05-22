const db = require('./db');

const resolvers = {
  getOrderMenu: async ({ id }) => {
    const [rows] = await db.query('SELECT * FROM order_menu WHERE id = ?', [id]);
    return rows[0];
  },

  getAllOrderMenus: async () => {
    const [rows] = await db.query('SELECT * FROM order_menu');
    return rows;
  },

  createOrderMenu: async ({ input }) => {
    const { order_id, menu_id, quantity } = input;
    const [result] = await db.query(
      'INSERT INTO order_menu (order_id, menu_id, quantity) VALUES (?, ?, ?)',
      [order_id, menu_id, quantity]
    );
    const [rows] = await db.query('SELECT * FROM order_menu WHERE id = ?', [result.insertId]);
    return rows[0];
  },

  updateOrderMenu: async ({ id, input }) => {
    const { order_id, menu_id, quantity } = input;
    await db.query(
      'UPDATE order_menu SET order_id = ?, menu_id = ?, quantity = ? WHERE id = ?',
      [order_id, menu_id, quantity, id]
    );
    const [rows] = await db.query('SELECT * FROM order_menu WHERE id = ?', [id]);
    return rows[0];
  },

  deleteOrderMenu: async ({ id }) => {
    const [result] = await db.query('DELETE FROM order_menu WHERE id = ?', [id]);
    return result.affectedRows > 0;
  },
};

module.exports = resolvers;
