import { app, db } from '../index.js';

export const organizationQueries = () => {
	app.get('/organizations', (_, res) => {
		const query = 'SELECT * FROM organization_zmn';

		db.query(query, (err, data) => {
			if (err) return res.json(err.message);
			return res.json(data);
		});
	});

	app.get('/organizations/:id', (req, res) => {
		const query = 'SELECT * FROM organization_zmn WHERE id = ?';
		const organizationId = req.params.id;

		db.query(query, [organizationId], (err, data) => {
			if (err) return res.json(err.message);
			return res.json(data);
		});
	});

	app.post('/organizations', (req, res) => {
		const query = 'INSERT INTO organization_zmn (name, address, contacts) VALUES (?)';
		const { name, address, contacts } = req.body;

		db.query(query, [[name, address, contacts]], (err) => {
			if (err) return res.json(err.message);
			return res.json('Организация была успешно создана!');
		});
	});

	app.put('/organizations/:id', (req, res) => {
		const query = 'UPDATE organization_zmn SET name = ?, address = ?, contacts = ? WHERE id = ?';
		const { name, address, contacts } = req.body;
		const organizationId = req.params.id;

		db.query(query, [name, address, contacts, organizationId], (err) => {
			if (err) return res.json(err.message);
			return res.json('Данные успешно обновлены!');
		});
	});

	app.delete('/organizations/:id', (req, res) => {
		const query = 'DELETE FROM organization_zmn WHERE id = ?';
		const organizationId = req.params.id;

		db.query(query, [organizationId], (err) => {
			if (err) return res.json(err.message);
			return res.json('Данные успешно удалены!');
		});
	});
};
