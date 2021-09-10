const Cashin = require('../../models/raModels/cashinModels.js');

const raCashinFindGetController = async (req, res) => {

	let {
		by,
		value
	} = req.params;

	try {
		let findData = null;

		if (by == "date") {
			findData = await Cashin.find({
				date: value
			});
		} else if (by == "phone") {
			findData = await Cashin.find({
				phone: value
			});
		} else if (by == "amount") {
			findData = await Cashin.find({
				amount: value
			});
		} else if(by == "id") {
			findData = await Cashin.findById(value);
		}

		if (findData) {
			res.status(200).json(findData);
		} else {
			res.status(404).json({
				message: "Data not found!"
			});
		}

	} catch (e) {
		res.status(400).json({
			message: e.message
		});
	}
};
module.exports = raCashinFindGetController;