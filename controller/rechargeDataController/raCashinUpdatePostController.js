const Cashin = require('../../models/raModels/cashinModels.js');

const raCashinUpdatePostController = async (req, res) => {

	let {
		date,
		phone,
		amount
	} = req.body;
console.log(req.body);
	try {
		let oldData = await Cashin.findOneAndUpdate({
			_id: req.params.id
		}, {
			$set: {
				date,
				phone,
				amount
			}
		});
		console.log(oldData);
		res.status(202).json(req.body);
	} catch (e) {
		res.status(400).json({
			message: e.message
		});
	}
};
module.exports = raCashinUpdatePostController;