const db = require('./db');

const resolvers = {
  getMembership: async ({ id }) => {
    const [rows] = await db.query('SELECT * FROM memberships WHERE id = ?', [id]);
    return rows[0];
  },

  getAllMemberships: async () => {
    const [rows] = await db.query('SELECT * FROM memberships');
    return rows;
  },

  createMembership: async ({ input }) => {
    const { user_id, points = 0 } = input;
    const [result] = await db.query(
      'INSERT INTO memberships (user_id, points) VALUES (?, ?)',
      [user_id, points]
    );
    const [rows] = await db.query('SELECT * FROM memberships WHERE id = ?', [result.insertId]);
    return rows[0];
  },

  updateMembership: async ({ id, input }) => {
    const { user_id, points } = input;
    await db.query(
      'UPDATE memberships SET user_id = ?, points = ? WHERE id = ?',
      [user_id, points, id]
    );
    const [rows] = await db.query('SELECT * FROM memberships WHERE id = ?', [id]);
    return rows[0];
  },

  deleteMembership: async ({ id }) => {
    const [result] = await db.query('DELETE FROM memberships WHERE id = ?', [id]);
    return result.affectedRows > 0;
  },
};

module.exports = resolvers;
