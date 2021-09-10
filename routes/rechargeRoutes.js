const router = require("express").Router();
const Recharge = require('../models/raModels/rechargeModels.js');
/*
 //Controller Folder ;- 
  // controller/rechargeDataController
*/
const raGetController = require('../controller/rechargeDataController/raGetController.js');

const raAllDataGetController = require('../controller/rechargeDataController/raAllDataGetController.js');
const raRechargeNewPostController = require('../controller/rechargeDataController/raRechargeNewPostController.js');

const raRechargeFindGetController = require('../controller/rechargeDataController/raRechargeFindGetController.js');

const raRechargeUpdatePostController = require('../controller/rechargeDataController/raRechargeUpdatePostController.js');

/*Cashin Start*/

const raCashinGetController = require('../controller/rechargeDataController/raCashinGetController.js');
const raCashinNewPostController = require('../controller/rechargeDataController/raCashinNewPostController.js');
const raCashinFindGetController = require('../controller/rechargeDataController/raCashinFindGetController.js');
const raCashinUpdatePostController = require('../controller/rechargeDataController/raCashinUpdatePostController.js');


router.get('/', raGetController);
router.get('/recharge', raAllDataGetController);
router.post('/recharge/new',raRechargeNewPostController);
router.get('/recharge/find/:by/:value',raRechargeFindGetController);
router.post('/recharge/update/:id',raRechargeUpdatePostController);

router.get('/cashin/',raCashinGetController);
router.post('/cashin/new',raCashinNewPostController);
router.get('/cashin/find/:by/:value',raCashinFindGetController);
router.post('/cashin/update/:id',raCashinUpdatePostController);

module.exports = router;