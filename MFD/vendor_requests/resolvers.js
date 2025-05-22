const db = require('./db');

const resolvers = {
  getVendorRequest: async ({ id }) => {
    const [rows] = await db.query('SELECT * FROM vendor_requests WHERE id = ?', [id]);
    return rows[0];
  },

  getAllVendorRequests: async () => {
    const [rows] = await db.query('SELECT * FROM vendor_requests');
    return rows;
  },

  createVendorRequest: async ({ input }) => {
    const { vendor_id, ingredient_id, quantity, status = 'requested', requested_at = null, estimated_arrival = null } = input;
    const [result] = await db.query(
      'INSERT INTO vendor_requests (vendor_id, ingredient_id, quantity, status, requested_at, estimated_arrival) VALUES (?, ?, ?, ?, ?, ?)',
      [vendor_id, ingredient_id, quantity, status, requested_at, estimated_arrival]
    );
    const [rows] = await db.query('SELECT * FROM vendor_requests WHERE id = ?', [result.insertId]);
    return rows[0];
  },

  updateVendorRequest: async ({ id, input }) => {
    const { vendor_id, ingredient_id, quantity, status, requested_at, estimated_arrival } = input;
    await db.query(
      'UPDATE vendor_requests SET vendor_id = ?, ingredient_id = ?, quantity = ?, status = ?, requested_at = ?, estimated_arrival = ? WHERE id = ?',
      [vendor_id, ingredient_id, quantity, status, requested_at, estimated_arrival, id]
    );
    const [rows] = await db.query('SELECT * FROM vendor_requests WHERE id = ?', [id]);
    return rows[0];
  },

  deleteVendorRequest: async ({ id }) => {
    const [result] = await db.query('DELETE FROM vendor_requests WHERE id = ?', [id]);
    return result.affectedRows > 0;
  },
};

module.exports = resolvers;
