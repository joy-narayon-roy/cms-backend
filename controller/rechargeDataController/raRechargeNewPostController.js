const Recharge = require('../../models/raModels/rechargeModels.js');


const raRechargeNewPostController = (req, res)=> {

	const {
		datatype
	} = req.headers;
	const {
		body
	} = req;
	
	try {
		if (!datatype) {
			throw new Error('datatype is not set');
		}
		if (datatype === 'single' && body.length === undefined) {
			const newRechargeData = new Recharge(body);
			newRechargeData.save().then(data=> {
				res.status(201).json(data);
			}).catch(err=> {
				res.status(400).json({
					message: 'Failed to save in Database!'
				});
			});
		} else if (datatype === 'multiple' && body.length > 0) {
			Recharge.insertMany(body).then(insData=> {
				res.status(201).json(insData);
			}).catch(err=> {
				console.log(err);
				res.status(400).json({
					message: 'Failed To Save multiple in DB!'
				});
			});
		} else {
			throw new Error('Failed to Save!');
		}
	} catch (e) {
		res.status(400).json({
			message: e.message
		});
	}
};

module.exports = raRechargeNewPostController;