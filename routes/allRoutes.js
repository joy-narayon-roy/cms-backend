const router = require('express').Router();
const rechargeRoutes = require("./rechargeRoutes.js");

router.get('/',(req,res)=>{
	res.json({
		message:'You are in Api System.'
	});
});

const routes = [{
	path:'/api',
	router
},{
	path:'/api/ra',
	router:rechargeRoutes
}];

module.exports=(app)=>{
	return routes.forEach(route=>{
		app.use(route.path,route.router);
	});
};