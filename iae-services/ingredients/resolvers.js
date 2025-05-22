const db = require('./db');

const resolvers = {
  getIngredient: async ({ id }) => {
    const [rows] = await db.query('SELECT * FROM ingredients WHERE id = ?', [id]);
    return rows[0];
  },

  getAllIngredients: async () => {
    const [rows] = await db.query('SELECT * FROM ingredients');
    return rows;
  },

  createIngredient: async ({ input }) => {
    const { name, unit } = input;
    const [result] = await db.query(
      'INSERT INTO ingredients (name, unit) VALUES (?, ?)',
      [name, unit]
    );
    const [rows] = await db.query('SELECT * FROM ingredients WHERE id = ?', [result.insertId]);
    return rows[0];
  },

  updateIngredient: async ({ id, input }) => {
    const { name, unit } = input;
    await db.query(
      'UPDATE ingredients SET name = ?, unit = ? WHERE id = ?',
      [name, unit, id]
    );
    const [rows] = await db.query('SELECT * FROM ingredients WHERE id = ?', [id]);
    return rows[0];
  },

  deleteIngredient: async ({ id }) => {
    const [result] = await db.query('DELETE FROM ingredients WHERE id = ?', [id]);
    return result.affectedRows > 0;
  },
};

module.exports = resolvers;
