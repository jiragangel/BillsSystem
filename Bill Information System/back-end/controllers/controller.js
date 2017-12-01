'use strict';

const db = require(__dirname + '/../lib/mysql');

exports.viewBills = (req, res, next) => {
	const queryline = 'select * from BILL where ' + req.query.key + '="' + req.query.value + '"';
	console.log(queryline);
	db.query(queryline,[],(err, result) => {
		res.send(result);
	})
};
exports.fileBillForSenator=(req,res,next)=>{
	const queryline="call Filebillsenator ('"  + req.body.empno + "','" + req.body.billno + "'," + req.body.year + ",'" + req.body.status + "','" + req.body.title + "','" + req.body.summdesc + "','" + req.body.content + "','" + req.body.primarycommittee + "','" + req.body.scope + "','" + req.body.secondarycommittee + "')";
	console.log(queryline);
	db.query(queryline,[],(err,result)=>{
		res.send(result);
	});
};
exports.fileBillForHouseMem=(req,res,next)=>{
	const queryline="call Filebillhousemem ('"  + req.body.empno + "','" + req.body.billno + "'," + req.body.year + ",'" + req.body.status + "','" + req.body.title + "','" + req.body.summdesc + "','" + req.body.content + "','" + req.body.primarycommittee + "','" + req.body.scope + "','" + req.body.secondarycommittee + "')";
	console.log(queryline);
	db.query(queryline,[],(err,result)=>{
		res.send(result);
	});
};
exports.deleteBills=(req,res,next)=>{
	const queryline="call DeleteBill('" + req.body.billno + "');"
	console.log(queryline);
	db.query(queryline,[],(err,result)=>{
		res.send(result);
	})
}

exports.updateBills = (req, res, next) => {
	const queryline = 'update BILL set ' + req.body.key + '="' + req.body.value + '" where Billno="' + req.body.billno + '"';
	console.log(queryline);
	db.query(queryline, [], (err, result) => {
		res.send(result);
	});
}

exports.getAllbills = (req, res, next) => {
	const queryline = 'select * from BILL';
	db.query(queryline, [], (err, result) => {
		res.send(result);
	});
}

exports.mainPage = (req, res, next) => {
	res.send("Welcome to Home Page");
}
