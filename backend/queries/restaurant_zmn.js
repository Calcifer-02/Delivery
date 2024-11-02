import { app, db } from '../index.js';

export const restaurantQueries = () => {
	app.get('/restaurants', (_, res) => {
		const query = 'SELECT * FROM restaurant_zmn';

		db.query(query, (err, data) => {
			if (err) return res.json(err.message);
			return res.json(data);
		});
	});

	app.get('/restaurants/:id', (req, res) => {
		const query = 'SELECT * FROM restaurant_zmn WHERE id = ?';
		const restaurantId = req.params.id;

		db.query(query, [restaurantId], (err, data) => {
			if (err) return res.json(err.message);
			return res.json(data);
		});
	});

	app.post('/restaurants', (req, res) => {
		const query = 'INSERT INTO restaurant_zmn (name, address, menu, organization_id) VALUES (?)';
		const { name, address, menu, organization_id } = req.body;

		db.query(query, [[name, address, menu, organization_id]], (err) => {
			if (err) return res.json(err.message);
			return res.json('Ресторан был успешно создан!');
		});
	});

	app.put('/restaurants/:id', (req, res) => {
		const query =
			'UPDATE restaurant_zmn SET name = ?, address = ?, menu = ?, organization_id = ? WHERE id = ?';
		const { name, address, menu, organization_id } = req.body;
		const restaurantId = req.params.id;

		db.query(query, [name, address, menu, organization_id, restaurantId], (err) => {
			if (err) return res.json(err.message);
			return res.json('Данные успешно обновлены!');
		});
	});

	app.delete('/restaurants/:id', (req, res) => {
		const query = 'DELETE FROM restaurant_zmn WHERE id = ?';
		const restaurantId = req.params.id;

		db.query(query, [restaurantId], (err) => {
			if (err) return res.json(err.message);
			return res.json('Данные успешно удалены!');
		});
	});
};
