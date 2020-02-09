import HotelModel from '../models/hotel';

//GET - Return all Hotels in the DB
let findAllHotels = (req, res) => {
	HotelModel.find((err, hotels) => {
		if (err) res.send(500, err.message);
		res.status(200).jsonp(hotels);
	});
};

//GET - Return a Hotel with specified ID
let findByIdentifier = (req, res) => {
	HotelModel.findById(req.params.id, (err, hotel) => {
		if (err) res.send(500, err.message);
		res.status(200).jsonp(hotel);
	});
};

//GET - Return a Hotel with specified ID
let addHotels = (req, res) => {
	var hotel = new HotelModel({
		name: req.body.name,
		stars: req.body.stars,
		images: req.body.images,
		price: req.body.price,
		comments: req.body.comments,
	});

	hotel.save((err, hotel) => {
		if (err) return res.status(500).send(err.message);
		res.status(200).jsonp(hotel);
	});
};

//DELETE - Delete a Hotel with specified ID
let deleteHotel = (req, res) => {
	HotelModel.findById(req.params.id, (err, hotel) => {
		hotel.remove(err => {
			if (err) return res.status(500).send(err.message);
			res.status(200).send();
		});
	});
};

export { findAllHotels, findByIdentifier, addHotels, deleteHotel };
