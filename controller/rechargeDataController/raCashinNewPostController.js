const Cashin = require('../../models/raModels/cashinModels.js');

const raCashinNewPostController = async (req, res) => {
	const {
		body
	} = req;
	const {
		datatype
	} = req.headers;

	try {
		if (!datatype) {
			throw new Error('Datatype is not set!');
		} else if (datatype === 'single' && body.length === undefined) {

			let newCashinData = new Cashin(body);

			newCashinData = await newCashinData.save();

			res.status(201).json(newCashinData);
		} else if (datatype === "multiple" && body.length) {

			let newCashinData = await Cashin.insertMany(body);

			res.status(201).json(newCashinData);
		} else {
			throw new Error('datatype and data are not match!');
		}
	} catch (e) {
		res.status(400).json({
			message: e.message
		});
	}
};
module.exports = raCashinNewPostController;