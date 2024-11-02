import { app, db } from '../index.js';

export const orderHasDishQueries = () => {
	app.get('/order_has_dish', (_, res) => {
		const query = 'SELECT * FROM order_zmn_has_dish_zmn';

		db.query(query, (err, data) => {
			if (err) return res.json(err.message);
			return res.json(data);
		});
	});

	app.get('/order_has_dish/:id', (req, res) => {
		const query = 'SELECT * FROM order_zmn_has_dish_zmn WHERE order_id = ?';
		const orderId = req.params.id;

		db.query(query, [orderId], (err, data) => {
			if (err) return res.json(err.message);
			return res.json(data);
		});
	});

	app.post('/order_has_dish', (req, res) => {
		const query = 'INSERT INTO order_zmn_has_dish_zmn (order_id, dish_id, dish_count) VALUES (?)';
		const { order_id, dish_id, dish_count } = req.body;

		db.query(query, [[order_id, dish_id, dish_count]], (err) => {
			if (err) return res.json(err.message);
			return res.json('Блюдо было успешно добавлено в заказ!');
		});
	});

	app.put('/order_has_dish/:id', (req, res) => {
		const query = 'UPDATE order_zmn_has_dish_zmn SET dish_count = ? WHERE dish_id = ?';
		const { dish_count } = req.body;
		const dishId = req.params.id;

		db.query(query, [dish_count, dishId], (err) => {
			if (err) return res.json(err.message);
			return res.json('Количество блюда в заказе было успешно обновлено!');
		});
	});

	app.delete('/order_has_dish/:id', (req, res) => {
		const query = 'DELETE FROM order_zmn_has_dish_zmn WHERE dish_id = ?';
		const dishId = req.params.id;

		db.query(query, [dishId], (err) => {
			if (err) return res.json(err.message);
			return res.json('Блюдо было успешно удалено из заказа!');
		});
	});
};
