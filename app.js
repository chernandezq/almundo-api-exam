import express from 'express';
import { urlencoded, json } from 'body-parser';
import methodOverride from 'method-override';
import hotel_routes from './routes/hotel';

var app = express();

app.use(urlencoded({ extended: false }));
app.use(json());
app.use(methodOverride());

//Routes
app.get('/', (req, res) => {
	res.send('Hola, api desarrollada por Cristian Hernandez para exámen FullStack developer en Almundo ');
});
app.use('/api', hotel_routes);

export default app;
