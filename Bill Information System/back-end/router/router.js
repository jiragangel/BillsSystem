'use strict';

const bills = require(__dirname + '/../controllers/controller');

module.exports = (router) => {

	router.get('/bills',bills.viewBills);
	router.post('/updateBills',bills.updateBills);
	router.post('/fileBillForHouseMem', bills.fileBillForHouseMem);
	router.post('/fileBillForSenator', bills.fileBillForSenator);
	router.post('/deleteBills', bills.deleteBills);
	router.get('/getAllbills', bills.getAllbills);
	router.get('/getSubjects', bills.getSubjects);
	router.get('/getSenators', bills.getSenators);
	router.get('/getHouseMems', bills.getHouseMems);
	router.get('/getSenatorCommittees', bills.getSenatorCommittees);
	router.get('/getHouseMemberCommittees', bills.getHouseMemberCommittees);
	router.post('/addSenator', bills.addSenator);
	router.post('/addHouseMember', bills.addHouseMember);
	router.post('/deleteSenator', bills.deleteSenator);
	router.post('/deleteHouseMember', bills.deleteHouseMember);
	router.post('/updateSenator', bills.updateSenator);
	router.post('/updateHouseMember', bills.updateHouseMember);
	router.get('/senators', bills.viewSenator);
	router.get('/hmembers', bills.viewHouseMembers);
	router.get('/senatebillyear', bills.senatebillyear);
	router.get('/',bills.mainPage);

	return router;
};
