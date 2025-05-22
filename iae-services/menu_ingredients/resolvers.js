const db = require('./db');

const resolvers = {
  getMenuIngredient: async ({ id }) => {
    const [rows] = await db.query('SELECT * FROM menu_ingredients WHERE id = ?', [id]);
    return rows[0];
  },

  getAllMenuIngredients: async () => {
    const [rows] = await db.query('SELECT * FROM menu_ingredients');
    return rows;
  },

  createMenuIngredient: async ({ input }) => {
    const { menu_id, ingredient_id, quantity } = input;
    const [result] = await db.query(
      'INSERT INTO menu_ingredients (menu_id, ingredient_id, quantity) VALUES (?, ?, ?)',
      [menu_id, ingredient_id, quantity]
    );
    const [rows] = await db.query('SELECT * FROM menu_ingredients WHERE id = ?', [result.insertId]);
    return rows[0];
  },

  updateMenuIngredient: async ({ id, input }) => {
    const { menu_id, ingredient_id, quantity } = input;
    await db.query(
      'UPDATE menu_ingredients SET menu_id = ?, ingredient_id = ?, quantity = ? WHERE id = ?',
      [menu_id, ingredient_id, quantity, id]
    );
    const [rows] = await db.query('SELECT * FROM menu_ingredients WHERE id = ?', [id]);
    return rows[0];
  },

  deleteMenuIngredient: async ({ id }) => {
    const [result] = await db.query('DELETE FROM menu_ingredients WHERE id = ?', [id]);
    return result.affectedRows > 0;
  },
};

module.exports = resolvers;
