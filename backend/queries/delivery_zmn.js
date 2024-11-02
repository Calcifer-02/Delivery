import { app, db } from '../index.js';

export const deliveryQueries = () => {
	app.get('/deliveries', (_, res) => {
		const query = 'SELECT * FROM delivery_zmn';

		db.query(query, (err, data) => {
			if (err) return res.json(err.message);
			return res.json(data);
		});
	});

	app.get('/deliveries/:id', (req, res) => {
		const query = 'SELECT * FROM delivery_zmn WHERE id = ?';
		const deliveryId = req.params.id;

		db.query(query, [deliveryId], (err, data) => {
			if (err) return res.json(err.message);
			return res.json(data);
		});
	});

	app.post('/deliveries', (req, res) => {
		const query = 'INSERT INTO delivery_zmn (couriers, contacts, organization_id) VALUES (?)';
		const { couriers, contacts, organization_id } = req.body;

		db.query(query, [[couriers, contacts, organization_id]], (err) => {
			if (err) return res.json(err.message);
			return res.json('Служба доставки была успешно создана!');
		});
	});

	app.put('/deliveries/:id', (req, res) => {
		const query = 'UPDATE delivery_zmn SET couriers = ?, contacts = ?, organization_id = ? WHERE id = ?';
		const { couriers, contacts, organization_id } = req.body;
		const deliveryId = req.params.id;

		db.query(query, [couriers, contacts, organization_id, deliveryId], (err) => {
			if (err) return res.json(err.message);
			return res.json('Данные успешно обновлены!');
		});
	});

	app.delete('/deliveries/:id', (req, res) => {
		const query = 'DELETE FROM delivery_zmn WHERE id = ?';
		const deliveryId = req.params.id;

		db.query(query, [deliveryId], (err) => {
			if (err) return res.json(err.message);
			return res.json('Данные успешно удалены!');
		});
	});
};
