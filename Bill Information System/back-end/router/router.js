'use strict';

const bills = require(__dirname + '/../controllers/controller');

module.exports = (router) => {

	router.get('/bills',bills.viewBills);
	router.post('/updateBills',bills.updateBills);
	router.post('/fileBillForHouseMem', bills.fileBillForHouseMem);
	router.post('/fileBillForSenator', bills.fileBillForSenator);
	router.post('/deleteBills', bills.deleteBills);
	router.get('/getAllbills', bills.getAllbills);
	router.get('/',bills.mainPage);

	return router;
};
