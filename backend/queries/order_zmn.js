import { app, db } from '../index.js';

export const orderQueries = () => {
	app.get('/orders', (_, res) => {
		const query = 'SELECT * FROM order_zmn';

		db.query(query, (err, data) => {
			if (err) return res.json(err.message);
			return res.json(data);
		});
	});

	app.get('/orders/:id', (req, res) => {
		const query = 'SELECT * FROM order_zmn WHERE id = ?';
		const orderId = req.params.id;

		db.query(query, [orderId], (err, data) => {
			if (err) return res.json(err.message);
			return res.json(data);
		});
	});

	app.post('/orders', (req, res) => {
		const query =
			'INSERT INTO order_zmn (date, status, address, dishes, organization_id, delivery_id, client_id) VALUES (?)';
		const { date, address, dishes, organization_id, delivery_id, client_id } = req.body;

		db.query(query, [[date, 'РАЗМЕЩЕН', address, dishes, organization_id, delivery_id, client_id]], (err) => {
			if (err) return res.json(err.message);
			return res.json('Заказ был успешно создан!');
		});
	});

	app.put('/orders/:id', (req, res) => {
		const query =
			'UPDATE order_zmn SET date = ?, status = ?, address = ?, dishes = ?, organization_id = ?, delivery_id = ?, client_id = ? WHERE id = ?';
		const { date, status, address, dishes, organization_id, delivery_id, client_id } = req.body;
		const orderId = req.params.id;

		db.query(
			query,
			[date, status, address, dishes, organization_id, delivery_id, client_id, orderId],
			(err) => {
				if (err) return res.json(err.message);
				return res.json('Данные успешно обновлены!');
			}
		);
	});

	app.delete('/orders/:id', (req, res) => {
		const query = 'DELETE FROM order_zmn WHERE id = ?';
		const orderId = req.params.id;

		db.query(query, [orderId], (err) => {
			if (err) return res.json(err.message);
			return res.json('Данные успешно удалены!');
		});
	});
};
