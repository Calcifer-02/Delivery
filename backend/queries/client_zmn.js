import { app, db } from '../index.js';

export const clientQueries = () => {
	app.get('/clients', (_, res) => {
		const query = 'SELECT * FROM client_zmn';

		db.query(query, (err, data) => {
			if (err) return res.json(err.message);
			return res.json(data);
		});
	});

	app.get('/clients/:id', (req, res) => {
		const query = 'SELECT * FROM client_zmn WHERE id = ?';
		const clientId = req.params.id;

		db.query(query, [clientId], (err, data) => {
			if (err) return res.json(err.message);
			return res.json(data);
		});
	});

	app.post('/clients', (req, res) => {
		const query = 'INSERT INTO client_zmn (contacts, address) VALUES (?)';
		const { contacts, address } = req.body;

		db.query(query, [[contacts, address]], (err) => {
			if (err) return res.json(err.message);
			return res.json('Клиент был успешно создан!');
		});
	});

	app.put('/clients/:id', (req, res) => {
		const query = 'UPDATE client_zmn SET contacts = ?, address = ? WHERE id = ?';
		const { contacts, address } = req.body;
		const clientId = req.params.id;

		db.query(query, [contacts, address, clientId], (err) => {
			if (err) return res.json(err.message);
			return res.json('Данные успешно обновлены!');
		});
	});

	app.delete('/clients/:id', (req, res) => {
		const query = 'DELETE FROM client_zmn WHERE id = ?';
		const clientId = req.params.id;

		db.query(query, [clientId], (err) => {
			if (err) return res.json(err.message);
			return res.json('Данные успешно удалены!');
		});
	});
};
