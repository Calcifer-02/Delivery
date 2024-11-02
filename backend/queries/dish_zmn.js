import { app, db } from '../index.js';

export const dishQueries = () => {
	app.get('/dishes', (_, res) => {
		const query = 'SELECT * FROM dish_zmn';

		db.query(query, (err, data) => {
			if (err) return res.json(err.message);
			return res.json(data);
		});
	});

	app.get('/dishes/:id', (req, res) => {
		const query = 'SELECT * FROM dish_zmn WHERE id = ?';
		const dishId = req.params.id;

		db.query(query, [dishId], (err, data) => {
			if (err) return res.json(err.message);
			return res.json(data);
		});
	});

	app.post('/dishes', (req, res) => {
		const query = 'INSERT INTO dish_zmn (name, description, price, restaurant_id) VALUES (?)';
		const { name, description, price, restaurant_id } = req.body;

		db.query(query, [[name, description, price, restaurant_id]], (err) => {
			if (err) return res.json(err.message);
			return res.json('Блюдо было успешно создано!');
		});
	});

	app.put('/dishes/:id', (req, res) => {
		const query = 'UPDATE dish_zmn SET name = ?, description = ?, price = ?, restaurant_id = ? WHERE id = ?';
		const { name, description, price, restaurant_id } = req.body;
		const dishId = req.params.id;

		db.query(query, [name, description, price, restaurant_id, dishId], (err) => {
			if (err) return res.json(err.message);
			return res.json('Данные успешно обновлены!');
		});
	});

	app.delete('/dishes/:id', (req, res) => {
		const query = 'DELETE FROM dish_zmn WHERE id = ?';
		const dishId = req.params.id;

		db.query(query, [dishId], (err) => {
			if (err) return res.json(err.message);
			return res.json('Данные успешно удалены!');
		});
	});
};
