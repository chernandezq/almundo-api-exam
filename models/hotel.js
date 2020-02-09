import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let hotelSchema = new Schema({
	name: String,
	stars: Number,
	images: [
		{
			title: String,
			description: String,
			source: String,
		},
	],
	price: Number,
	comments: [
		{
			user: String,
			comment: String,
			stars: Number,
		},
	],
});

const Hotelmodel = mongoose.model('HotelModel', hotelSchema);

export default Hotelmodel;
