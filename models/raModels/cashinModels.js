const {
    Schema,
    model
} = require('mongoose');

const chashinSchema = new Schema({
    date: {
        type: String, required: true, trim: true
    },
    phone: {
        type: String, required: true, trim: true
    },
    amount: {
        type: Number, required: true, trim: true
    },
},{
	timestamps:true
});
const Cashin = model('Cashin', chashinSchema);

module.exports=Cashin;