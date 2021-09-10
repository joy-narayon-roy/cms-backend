const Recharge = require('../../models/raModels/rechargeModels.js');

/*Done This*/


const raRechargeUpdatePostController = async (req, res)=> {
	const {
		date,
		phone,
		amount
	} = req.body;
	try {
		await Recharge.findOneAndUpdate({
			_id: `${req.params.id}`
		}, {
			$set: {
				date,
				phone,
				amount
			}
		});
		res.status(202).json(req.body);
	} catch (e) {
		res.status(400).json({
			messages: 'Failed To Update Data'
		});
	}
};

module.exports = raRechargeUpdatePostController;