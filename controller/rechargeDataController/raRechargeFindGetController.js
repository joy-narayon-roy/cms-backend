const Recharge = require('../../models/raModels/rechargeModels.js');

const raRechargeFindGetController = async (req, res)=> {
	let {
		by,
		value
	} = req.params;

	try {
		let rechData = null;
		
		if (by == "date") {
			rechData = await Recharge.find({
				date: value
			});
		} else if (by == "phone") {
			rechData = await Recharge.find({
				phone: value
			});
		} else if (by == "amount") {
			rechData = await Recharge.find({
				amount: value
			});
		} else if (by == 'id') {
			rechData = await Recharge.findById(value);
		}

		if (rechData) {
			res.status(200).json(rechData);
		} else {
			res.status(404).json({
				massage: 'Data Not Found!'
			});
		}
	} catch (e) {
		res.status(400).json({
			message: 'Find Failed!'
		});
	}

};

module.exports = raRechargeFindGetController;