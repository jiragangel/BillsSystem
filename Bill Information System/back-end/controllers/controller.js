'use strict';

const db = require(__dirname + '/../lib/mysql');

exports.viewBills = (req, res, next) => {
	if(req.query.key==="Subjects"){
		const queryline = 'select * from BILL_SUBJECT natural join BILL where Subject="' + req.query.value + '";';
		db.query(queryline,[],(err, result) => {
			res.send(result);

		})
	}
	else{
	const queryline = 'select * from BILL where ' + req.query.key + '="' + req.query.value + '";';
	db.query(queryline,[],(err, result) => {
		res.send(result);
	})
}
};

exports.viewSenator = (req, res, next) => {
	if(req.query.key==="Committee"){
		const queryline = 'select * from SENATOR_COMMITTEE natural join SENATOR where Committee="' + req.query.value + '";';
		db.query(queryline,[],(err, result) => {
			res.send(result);

		})
	}else{
	const queryline = 'select * from SENATOR where ' + req.query.key + '="' + req.query.value + '"';
	db.query(queryline,[],(err, result) => {
		res.send(result);
	})
}
};
exports.viewHouseMembers = (req, res, next) => {
	if(req.query.key==="Committee"){
		const queryline = 'select * from HOUSEMEMBER_COMMITTEE natural join HOUSEMEMBER where Committee="' + req.query.value + '";';
		db.query(queryline,[],(err, result) => {
			res.send(result);

		})
	}else{
	const queryline = 'select * from HOUSEMEMBER where ' + req.query.key + '="' + req.query.value + '"';
	db.query(queryline,[],(err, result) => {
		res.send(result);
	})
}
};
exports.fileBillForSenator=(req,res,next)=>{
	let queryline;

	let arrayofSubjects = req.body.subjects.split(';');
	for (let i = 0 ; i < arrayofSubjects.length ; i++){
		queryline = "insert into BILL_SUBJECT values ('" + req.body.billno + "','" + arrayofSubjects[i] + "');"
		db.query(queryline,[],(err,result)=>{
			if (err) {
				res.send(err);
				return;
			}
		});
	}
	queryline = "call Filebillsenator ('"  + req.body.empno + "','" + req.body.billno + "','" + req.body.name + "',"  + req.body.year + ",'" + req.body.status + "','" + req.body.title + "','" + req.body.summdesc + "','" + req.body.primarycommittee + "','" + req.body.scope + "','" + req.body.secondarycommittee + "');";
	db.query(queryline,[],(err,result)=>{
		res.send(result);
	});
};
exports.fileBillForHouseMem=(req,res,next)=>{
	let queryline;
	let arrayofSubjects = req.body.subjects.split(';');
	for (let i = 0 ; i < arrayofSubjects.length ; i++){
		queryline = "insert into BILL_SUBJECT values ('" + req.body.billno + "','" + arrayofSubjects[i] + "');";
		db.query(queryline,[],(err,result)=>{
			if (err) {
				res.send(err);
				return;
			}
		});
	}
	queryline = "call Filebillhousemem ('"  + req.body.empno + "','" + req.body.billno + "','" + req.body.name + "',"  + req.body.year + ",'" + req.body.status + "','" + req.body.title + "','" + req.body.summdesc + "','" + req.body.primarycommittee + "','" + req.body.scope + "','" + req.body.secondarycommittee + "');";
	db.query(queryline,[],(err,result)=>{
		res.send(result);
	});
};
exports.deleteBills=(req,res,next)=>{
	const queryline="call DeleteBill('" + req.body.billno + "');"
	db.query(queryline,[],(err,result)=>{
		res.send(result);
	})
}

exports.deleteSenator=(req,res,next)=>{
	const queryline="call DeleteSenator('" + req.body.empno + "');"
	db.query(queryline,[],(err,result)=>{
		res.send(result);
	})
}
exports.deleteHouseMember=(req,res,next)=>{
	const queryline="call DeleteHouseMember('" + req.body.empno + "');"
	db.query(queryline,[],(err,result)=>{
		res.send(result);
	})
}

exports.updateBills = (req, res, next) => {
	let queryline;
	let queryline2;

	if (req.body.key==="Subjects"){
		queryline2="delete from BILL_SUBJECT where Billno='"+ req.body.billno+"';";
		db.query(queryline2,[],(err,result)=>{
		});
		let arrayofSubjects = req.body.value.split(';');
		for (let i = 0 ; i < arrayofSubjects.length ; i++){
			queryline = "insert into BILL_SUBJECT values ('" + req.body.billno + "','" + arrayofSubjects[i] + "');";
			db.query(queryline,[],(err,result)=>{
				if (err) {
					res.send(err);
					return;
				}
			});
		}
	}else{
		queryline = 'update BILL set ' + req.body.key + '="' + req.body.value + '" where Billno="' + req.body.billno + '";';
		db.query(queryline, [], (err, result) => {
			res.send(result);
		});
	}

}

exports.updateSenator = (req, res, next) => {
	let queryline;
	let queryline2;
	if (req.body.key==="Committee"){
		queryline2="delete from SENATOR_COMMITTEE where Employeenumber='"+ req.body.empno+"';";
		db.query(queryline2,[],(err,result)=>{
		});
		let arrayofCommittee = req.body.value.split(';');
		for (let i = 0 ; i < arrayofCommittee.length ; i++){
			queryline = "insert into SENATOR_COMMITTEE values ('" + req.body.empno + "','" + arrayofCommittee[i] + "');";
			db.query(queryline,[],(err,result)=>{
				if (err) {
					res.send(err);
					return;
				}
			});
		}
	}else{
	const queryline = 'update SENATOR set ' + req.body.key + '="' + req.body.value + '" where Employeenumber="' + req.body.empno + '";';
	db.query(queryline, [], (err, result) => {
		res.send(result);
	});
}
}
exports.updateHouseMember = (req, res, next) => {
	let queryline;
	let queryline2;
	if (req.body.key==="Committee"){
		queryline2="delete from HOUSEMEMBER_COMMITTEE where Employeenumber='"+ req.body.empno+"';";
		db.query(queryline2,[],(err,result)=>{
		});
		let arrayofCommittee = req.body.value.split(';');
		for (let i = 0 ; i < arrayofCommittee.length ; i++){
			queryline = "insert into HOUSEMEMBER_COMMITTEE values ('" + req.body.empno + "','" + arrayofCommittee[i] + "');";
			db.query(queryline,[],(err,result)=>{
				if (err) {
					res.send(err);
					return;
				}
			});
		}
	}else{
	const queryline = 'update HOUSEMEMBER set ' + req.body.key + '="' + req.body.value + '" where Employeenumber="' + req.body.empno + '";';
	db.query(queryline, [], (err, result) => {
		res.send(result);
	});
}
}

exports.getAllbills = (req, res, next) => {
	const queryline = 'select * from BILL;';
	db.query(queryline, [], (err, result) => {
		res.send(result);
	});
}

exports.mainPage = (req, res, next) => {
	res.send("Welcome to Home Page");
}

exports.getSubjects = (req, res, next) => {
	const queryline = "select * from BILL_SUBJECT;";
	db.query(queryline, [], (err, result) => {
		res.send(result);
	});
}

exports.getSenators = (req, res, next) => {
	const queryline =  "select * from SENATOR;";
	db.query(queryline,[],(err, result) => {
		if (err) res.send(err);
		else res.send(result);
	});
}

exports.getHouseMems = (req, res, next) => {
	const queryline =  "select * from HOUSEMEMBER;";
	db.query(queryline,[],(err, result) => {
		if (err) res.send(err);
		else res.send(result);
	});
}

exports.getSenatorCommittees = (req, res, next) => {
	const queryline =  "select * from SENATOR_COMMITTEE;";
	db.query(queryline,[],(err, result) => {
		if (err) res.send(err);
		else res.send(result);
	});
}
exports.getHouseMemberCommittees = (req, res, next) => {
	const queryline =  "select * from HOUSEMEMBER_COMMITTEE;";
	db.query(queryline,[],(err, result) => {
		if (err) res.send(err);
		else res.send(result);
	});
}

exports.senatebillyear = (req, res, next) => {
	const queryline =  "select * from BILL natural join SENATOR_FILES where Year=" + req.query.year + ';';
	db.query(queryline,[],(err, result) => {
		if (err) res.send(err);
		else res.send(result);
	});
}

exports.housebillyear = (req, res, next) => {
	const queryline =  "select * from BILL natural join HOUSEMEMBER_FILES where Year=" + req.query.year + ';';
	db.query(queryline,[],(err, result) => {
		if (err) res.send(err);
		else res.send(result);
	});
}

exports.searchSenBills = (req, res, next) => {
	const queryline =  "select * from SENATOR_FILES left join BILL on SENATOR_FILES.Billno = BILL.Billno where Name='" + req.query.name + "';";
	db.query(queryline,[],(err, result) => {
		if (err) res.send(err);
		else res.send(result);
	});
}

exports.searchHMBills = (req, res, next) => {
	const queryline =  "select * from HOUSEMEMBER_FILES left join BILL on HOUSEMEMBER_FILES.Billno = BILL.Billno where Name='" + req.query.name + "';";
	db.query(queryline,[],(err, result) => {
		if (err) res.send(err);
		else res.send(result);
	});
}

exports.addSenator = (req, res, next) => {
	let queryline;
	let arrayOfComm = req.body.committee.split(';');
	for (let i = 0 ; i < arrayOfComm.length ; i++){
		queryline = "insert into SENATOR_COMMITTEE values ('" + req.body.empno + "','" + arrayOfComm[i] + "');"
		db.query(queryline,[],(err,result)=>{
			if (err) {
				res.send(err);
				return;
			}
		});
	}
	queryline = "insert into SENATOR values ('"  + req.body.empno + "','" + req.body.name + "');";
	db.query(queryline,[],(err,result)=>{
		res.send(result);
	});
}
exports.addHouseMember = (req, res, next) => {
	let queryline;
	let arrayOfComm = req.body.committee.split(';');
	for (let i = 0 ; i < arrayOfComm.length ; i++){
		queryline = "insert into HOUSEMEMBER_COMMITTEE values ('" + req.body.empno + "','" + arrayOfComm[i] + "');"
		db.query(queryline,[],(err,result)=>{
			if (err) {
				res.send(err);
				return;
			}
		});
	}
	queryline = "insert into HOUSEMEMBER values ('"  + req.body.empno + "','" + req.body.name + "','" + req.body.typeOfRep + "');";
	db.query(queryline,[],(err,result)=>{
		res.send(result);
	});
}

exports.passed = (req, res, next) => {
	let queryline = "select * from BILL where Status='" + req.query.status + "';";
	db.query(queryline,[],(err, result) => {
		res.send(result);
	});
}
