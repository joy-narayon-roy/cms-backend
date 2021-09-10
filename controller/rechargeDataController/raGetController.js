const raGetController = (req, res)=> {
	res.status(200).json({
		massage: 'You are connected NJO Recharge Data API System'
	});
}

module.exports=raGetController;