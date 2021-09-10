const {
	Schema,
	model
} = require('mongoose');

const rechargeSchema = new Schema({
	date: {
		type: String, 
		required: true, 
		trim: true
	},
	phone: {
		type: String, 
		required: true, 
		trim: true
	},
	amount: {
		type: Number, required: true, trim: true
	}
},{
	timestamps:true
})

const RechargeData = model('RechargeData', rechargeSchema);

module.exports = RechargeData;