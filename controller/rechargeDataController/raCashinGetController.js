const Cashin = require('../../models/raModels/cashinModels.js');

const raCashinGetController = async (req,res) => {
	
	let cashinData = await Cashin.find();
	
	
	res.status(200).json(cashinData);
};
module.exports = raCashinGetController;