import express from 'express';
const hotels = express.Router();
import { findAllHotels, addHotels, findByIdentifier, deleteHotel } from '../controllers/hotels';

hotels
	.route('/hotels')
	.get(findAllHotels)
	.post(addHotels);

hotels
	.route('/hotels/:id')
	.get(findByIdentifier)
	.delete(deleteHotel);

export default hotels;
