import { Promise, connect } from 'mongoose';
import app from './app';
const port = 80;

Promise;
connect('mongodb+srv://almundo-user:DFptnszCbOLfr6bb@almundoexam-yfkr5.mongodb.net/test?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => {
		console.log('La conexión a la base de datos hotels se ha realizado correctamente');
		app.listen(port, () => {
			console.log('Servidor corriendo');
		});
	})
	.catch(err => console.log(err));
