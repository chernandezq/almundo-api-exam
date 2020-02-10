import { Promise, connect } from 'mongoose';
import app from './app';
const port = 3000;

Promise;
connect('mongodb+srv://almundo-user:DFptnszCbOLfr6bb@almundoexam-yfkr5.mongodb.net/test?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => {
		console.log('La conexión a la base de datos hotels se ha realizado correctamente');
		app.listen(port, () => {
			console.log('servidor corriendo en http://localhost:3000');
		});
	})
	.catch(err => console.log(err));
