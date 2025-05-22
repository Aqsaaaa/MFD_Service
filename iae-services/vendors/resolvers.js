const db = require('./db');

const resolvers = {
  getVendor: async ({ id }) => {
    const [rows] = await db.query('SELECT * FROM vendors WHERE id = ?', [id]);
    return rows[0];
  },

  getAllVendors: async () => {
    const [rows] = await db.query('SELECT * FROM vendors');
    return rows;
  },

  createVendor: async ({ input }) => {
    const { name, contact = null } = input;
    const [result] = await db.query(
      'INSERT INTO vendors (name, contact) VALUES (?, ?)',
      [name, contact]
    );
    const [rows] = await db.query('SELECT * FROM vendors WHERE id = ?', [result.insertId]);
    return rows[0];
  },

  updateVendor: async ({ id, input }) => {
    const { name, contact } = input;
    await db.query(
      'UPDATE vendors SET name = ?, contact = ? WHERE id = ?',
      [name, contact, id]
    );
    const [rows] = await db.query('SELECT * FROM vendors WHERE id = ?', [id]);
    return rows[0];
  },

  deleteVendor: async ({ id }) => {
    const [result] = await db.query('DELETE FROM vendors WHERE id = ?', [id]);
    return result.affectedRows > 0;
  },
};

module.exports = resolvers;
