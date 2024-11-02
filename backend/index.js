import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import {
	clientQueries,
	deliveryQueries,
	dishQueries,
	orderHasDishQueries,
	orderQueries,
	organizationQueries,
	restaurantQueries,
} from './queries/index.js';

export const app = express();
export const db = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: 'root',
	database: 'mydb',
});

app.use(express.json());
app.use(cors());

organizationQueries();
restaurantQueries();
deliveryQueries();
dishQueries();
clientQueries();
orderQueries();
orderHasDishQueries();

app.listen(3001, () => {
	console.log('Listening on port 3001...');
});
