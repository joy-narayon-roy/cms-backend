const Recharge = require('../../models/raModels/rechargeModels.js');




const raAllDataGetController = async (req,res)=>{
	
	try {
		const data = await Recharge.find();
		res.status(202).json(data);
	} catch (e) {
		res.status(400).json({message: 'Error !'});
	}
};

module.exports=raAllDataGetController;