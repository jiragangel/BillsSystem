create database billinformationsystem;

use billinformationsystem;

create table SENATOR (
  Employeenumber VARCHAR(10),
  Name VARCHAR(20),
  CONSTRAINT SENATOR_Employeenumber_pk PRIMARY KEY(Employeenumber)
);

create table SENATOR_POSITION(
  Employeenumber VARCHAR(10),
  Position VARCHAR(20),
  CONSTRAINT SENATOR_POSITION_enamepos_pk PRIMARY KEY(Employeenumber,Position)
);

create table SENATOR_COMMITTEE(
  Employeenumber VARCHAR(10),
  Committee VARCHAR(20),
  CONSTRAINT SENATOR_POSITION_enamecom_pk PRIMARY KEY(Employeenumber,Committee)
);

create table BILL_SUBJECT(
  Billno varchar(10),
  Subject varchar(20),
  CONSTRAINT BILL_SUBJECT_billnosubj_pk PRIMARY KEY(Billno,Subject)
);

create table HOUSEMEMBER(
  Employeenumber VARCHAR(10),
  Name VARCHAR(20),
  Typeofrepresentative VARCHAR(20),
  CONSTRAINT SENATOR_Employeenumber_pk PRIMARY KEY(Employeenumber)
);

create table HOUSEMEMBER_POSITION(
  Employeenumber VARCHAR(10),
  Position VARCHAR(20),
  CONSTRAINT SENATOR_POSITION_enamepos_pk PRIMARY KEY(Employeenumber,Position)
);

create table HOUSEMEMBER_COMMITTEE(
  Employeenumber VARCHAR(10),
  Committee VARCHAR(20),
  CONSTRAINT SENATOR_POSITION_enamecom_pk PRIMARY KEY(Employeenumber,Committee)
);

create table HOUSEMEMBER_FILES(
  Employeenumber VARCHAR(10),
  Billno VARCHAR(10),
  Year int(4),
  CONSTRAINT HMFILES_enumbillno_pk PRIMARY KEY(Employeenumber,Billno)
);

create table HOUSEMEMBER_APPROVES(
  Employeenumber VARCHAR(10),
  Billno VARCHAR(10),
  CONSTRAINT HMFILES_enumbillno_pk PRIMARY KEY(Employeenumber,Billno)
);

create table SENATOR_FILES(
  Employeenumber VARCHAR(10),
  Billno VARCHAR(10),
  Year int(4),
  CONSTRAINT SFILES_enumbillno_pk PRIMARY KEY(Employeenumber,Billno)
);

create table SENATOR_APPROVES(
  Employeenumber VARCHAR(10),
  Billno VARCHAR(10),
  CONSTRAINT SFILES_enumbillno_pk PRIMARY KEY(Employeenumber,Billno)
);

create table BILL(
  Billno varchar(10),
  Status varchar(50),
  Title varchar(100),
  Name varchar(20),
  Summarydesc varchar(250),
  Content varchar(1000),
  Primarycommittee varchar(50),
  Scope varchar(10),
  Secondarycommittee varchar(50),
  Senator_flag int(1),
  Semployeenumber varchar(10),
  Housemem_flag int(1),
  Hemployeenumber varchar(10),
  CONSTRAINT BILL_Billno_pk PRIMARY KEY(Billno)
);

delimiter //
CREATE PROCEDURE Filebillhousemem (
empno varchar(10),
billno varchar(10),
name varchar(20),
year int(4),
status varchar(50),
title varchar(100),
summarydesc varchar(250),
content varchar(1000),
primaryC varchar(50),
scope varchar(10),
secondaryC varchar(50)
)
BEGIN
insert into HOUSEMEMBER_FILES values (empno, billno, year);
insert into BILL values (billno, status, title, name, summarydesc, content, primaryC, scope, secondaryC, NULL, NULL, 1, empno);
END
//
delimiter ;

delimiter //
CREATE PROCEDURE Filebillsenator (
empno varchar(10),
billno varchar(10),
name varchar(20),
year int(4),
status varchar(50),
title varchar(100),
summarydesc varchar(250),
content varchar(1000),
primaryC varchar(50),
scope varchar(10),
secondaryC varchar(50)
)
BEGIN
insert into SENATOR_FILES values (empno, billno, year);
insert into BILL values (billno, status, title, name, summarydesc, content, primaryC, scope, secondaryC, 1, empno, NULL, NULL);
END
//
delimiter ;

delimiter //
CREATE PROCEDURE DeleteBill ( billnumber varchar(10) )
  BEGIN
    IF NOT (select Senator_flag from BILL where Billno=billnumber) is NULL THEN
      delete from SENATOR_FILES where Billno=billnumber;
    ELSE
      delete from HOUSEMEMBER_FILES where Billno=billnumber;
    END IF;
    delete from BILL where Billno=billnumber;
    delete from BILL_SUBJECT where Billno=billnumber;
  END
//
delimiter ;

delimiter //
CREATE PROCEDURE DeleteSenator ( empno varchar(10) )
  BEGIN
    delete from SENATOR where Employeenumber=empno;
    delete from SENATOR_COMMITTEE where Employeenumber=empno;
  END
//
delimiter ;
