create database billinformationsystem;

use billinformationsystem;

create table SENATOR (
  Employeenumber VARCHAR(10),
  Name VARCHAR(50),
  CONSTRAINT SENATOR_Employeenumber_pk PRIMARY KEY(Employeenumber)
);


create table SENATOR_COMMITTEE(
  Employeenumber VARCHAR(10),
  Committee VARCHAR(50),
  CONSTRAINT SENATOR_POSITION_enamecom_pk PRIMARY KEY(Employeenumber,Committee)
);

create table BILL_SUBJECT(
  Billno varchar(10),
  Subject varchar(50),
  CONSTRAINT BILL_SUBJECT_billnosubj_pk PRIMARY KEY(Billno,Subject)
);

create table HOUSEMEMBER(
  Employeenumber VARCHAR(10),
  Name VARCHAR(50),
  Typeofrepresentative VARCHAR(20),
  CONSTRAINT SENATOR_Employeenumber_pk PRIMARY KEY(Employeenumber)
);


create table HOUSEMEMBER_COMMITTEE(
  Employeenumber VARCHAR(10),
  Committee VARCHAR(50),
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
  Name varchar(50),
  Summarydesc varchar(250),
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
name varchar(50),
year int(4),
status varchar(50),
title varchar(100),
summarydesc varchar(250),
primaryC varchar(50),
scope varchar(10),
secondaryC varchar(50)
)
BEGIN
insert into HOUSEMEMBER_FILES values (empno, billno, year);
insert into BILL values (billno, status, title, name, summarydesc, primaryC, scope, secondaryC, NULL, NULL, 1, empno);
END
//
delimiter ;

delimiter //
CREATE PROCEDURE Filebillsenator (
empno varchar(10),
billno varchar(10),
name varchar(50),
year int(4),
status varchar(50),
title varchar(100),
summarydesc varchar(250),
primaryC varchar(50),
scope varchar(10),
secondaryC varchar(50)
)
BEGIN
insert into SENATOR_FILES values (empno, billno, year);
insert into BILL values (billno, status, title, name, summarydesc, primaryC, scope, secondaryC, 1, empno, NULL, NULL);
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

-- INSERT VALUES
insert into SENATOR values (
  "0001",
  "Aquilino Pimentel III"
);
insert into SENATOR_COMMITTEE values(
  "0001",
  "Electoral Reforms and People Participation"
);
insert into SENATOR_COMMITTEE values(
  "0001",
  "Justice and Human Rights"
);
insert into SENATOR_COMMITTEE values(
  "0001",
  "Commission on Appointments"
);

insert into SENATOR values (
  "0002",
  "Maria Lourdes Nancy Binay"
);
insert into SENATOR_COMMITTEE values(
  "0002",
  "Social Justice, Welfare and Rural Development"
);
insert into SENATOR_COMMITTEE values(
  "0002",
  "Accounts"
);
insert into SENATOR_COMMITTEE values(
  "0002",
  "Banks, Financial Institutions and Currencies"
);
insert into SENATOR_COMMITTEE values(
  "0002",
  "Climate Change"
);
insert into SENATOR_COMMITTEE values(
  "0002",
  "Cultural Communities"
);
insert into SENATOR_COMMITTEE values(
  "0002",
  "Economic Affairs"
);


insert into SENATOR values (
  "0003",
  "Joel Villanueva"
);
insert into SENATOR_COMMITTEE values(
  "0003",
  "Accounts"
);
insert into SENATOR_COMMITTEE values(
  "0003",
  "Agrarian Reform"
);
insert into SENATOR_COMMITTEE values(
  "0003",
  "Banks, Financial Institutions and Currencies"
);
insert into SENATOR_COMMITTEE values(
  "0003",
  "Cooperatives"
);
insert into SENATOR_COMMITTEE values(
  "0003",
  "Cultural Communities"
);

insert into SENATOR values (
  "0004",
  "Leila De Lima"
);
insert into SENATOR_COMMITTEE values(
  "0004",
  "Electoral Reforms and People's Participation"
);
insert into SENATOR_COMMITTEE values(
  "0004",
  "Agrarian Reform"
);
insert into SENATOR_COMMITTEE values(
  "0004",
  "Energy"
);
insert into SENATOR_COMMITTEE values(
  "0004",
  "Health and Demography"
);
insert into SENATOR_COMMITTEE values(
  "0004",
  "National Defense and Security"
);

insert into SENATOR values (
  "0005",
  "Sherwin Gatchalian"
);
insert into SENATOR_COMMITTEE values(
  "0005",
  "Accountability of Public Officers and Investigations"
);
insert into SENATOR_COMMITTEE values(
  "0005",
  "Banks, Financial Institutions and Currencies"
);
insert into SENATOR_COMMITTEE values(
  "0005",
  "Climate Change"
);
insert into SENATOR_COMMITTEE values(
  "0005",
  "Economic Affairs"
);
insert into SENATOR_COMMITTEE values(
  "0005",
  "Education, Arts and Culture"
);

insert into SENATOR values (
  "0006",
  "Joseph Victor G. Ejercito"
);
insert into SENATOR_COMMITTEE values(
  "0006",
  "Urban Planning, Housing and Resettlement"
);
insert into SENATOR_COMMITTEE values(
  "0006",
  "Accounts"
);
insert into SENATOR_COMMITTEE values(
  "0006",
  "Agrarian Reform"
);
insert into SENATOR_COMMITTEE values(
  "0006",
  "Energy"
);
insert into SENATOR_COMMITTEE values(
  "0006",
  "Economic Affairs"
);
insert into SENATOR values (
  "0007",
  "Ralph G. Recto"
);
insert into SENATOR_COMMITTEE values(
  "0007",
  "Agriculture and Food"
);
insert into SENATOR_COMMITTEE values(
  "0007",
  "Accounts"
);
insert into SENATOR_COMMITTEE values(
  "0007",
  "Agrarian Reform"
);
insert into SENATOR_COMMITTEE values(
  "0007",
  "Banks, Financial Institutions and Currencies"
);
insert into SENATOR_COMMITTEE values(
  "0007",
  "Climate Change"
);
insert into SENATOR values (
  "0008",
  "Vicente C. Sotto III"
);
insert into SENATOR_COMMITTEE values(
  "0008",
  "Ethics and Privileges"
);
insert into SENATOR_COMMITTEE values(
  "0008",
  "Rules"
);
insert into SENATOR_COMMITTEE values(
  "0008",
  "Agrarian Reform"
);
insert into SENATOR_COMMITTEE values(
  "0008",
  "Banks, Financial Institutions and Currencies"
);
insert into SENATOR_COMMITTEE values(
  "0008",
  "Climate Change"
);
insert into SENATOR values (
  "0009",
  "Franklin M. Drilon"
);
insert into SENATOR_COMMITTEE values(
  "0009",
  "Accountability of Public Officers and Investigations"
);
insert into SENATOR_COMMITTEE values(
  "0009",
  "Accounts"
);
insert into SENATOR_COMMITTEE values(
  "0009",
  "Agrarian Reform"
);
insert into SENATOR_COMMITTEE values(
  "0009",
  "Agriculture and Food"
);
insert into SENATOR_COMMITTEE values(
  "0009",
  "Banks, Financial Institutions and Currencies"
);
insert into SENATOR values (
  "0010",
  "Sonny M. Angara"
);
insert into SENATOR_COMMITTEE values(
  "0010",
  "Games, Amusements and Sports"
);
insert into SENATOR_COMMITTEE values(
  "0010",
  "Labor Employment & Human Resources Development"
);
insert into SENATOR_COMMITTEE values(
  "0010",
  "Ways and Means"
);
insert into SENATOR_COMMITTEE values(
  "0010",
  "Agrarian Reform"
);
insert into SENATOR_COMMITTEE values(
  "0010",
  "Constitutional Amendments and Revision of Codes"
);
insert into SENATOR values (
  "0011",
  "Paolo Benigno Aquino"
);
insert into SENATOR_COMMITTEE values(
  "0011",
  "Trade, Commerce and Entrepreneurship"
);
insert into SENATOR_COMMITTEE values(
  "0011",
  "Youth"
);
insert into SENATOR_COMMITTEE values(
  "0011",
  "Agrarian Reform"
);
insert into SENATOR_COMMITTEE values(
  "0011",
  "Accountability of Public Officers and Investigations"
);
insert into SENATOR_COMMITTEE values(
  "0011",
  "Accounts"
);

insert into SENATOR values (
  "0012",
  "Alan Peter S. Cayetano"
);
insert into SENATOR_COMMITTEE values(
  "0012",
  "Rules"
);
insert into SENATOR_COMMITTEE values(
  "0012",
  "Justice and Human Rights"
);
insert into SENATOR_COMMITTEE values(
  "0012",
  "National Defense and Security"
);
insert into SENATOR_COMMITTEE values(
  "0012",
  "Women, Children, Family Relations and Gender Equality"
);


call FileBillSenator (
  "0002",
  "SB 1598",
  2017,
  "Pending in the Committee",
  "Batas Kasambahay Social Security Condonation Law of 2017",
  "An act granting the Social Security System the authority to coondone penalties for unremitted or delinquent contributes by employers or domestic workers for the purpose of encouraging compliance with Social Security Laws.",
  "Labor, Employment and Human Resources Development",
  "National",
  NULL,
);
insert into BILL_SUBJECT values(
  "SB 1598",
  "Social Security System (SSS)"
);
insert into BILL_SUBJECT values(
  "SB 1598",
  "Domestic Worker"
);

insert into BILL_SUBJECT values(
  "SB 1598",
  "Batas Kasambahay (R.A.No. 10361)"
);

insert into BILL_SUBJECT values(
  "SB 1598",
  "Condonation"
);

call FileBillSenator (
  "0003",
  "SB 1614",
  "Joel Villanueva",
  2017,
  "Pending in the Committee",
  "Service Incentive Leave Of Employees",
  "An act increasing the service incentive leave of employees, amending for the purpose Article 95 of Presidential Decree No. 442, as amended, otherwise known as the Labor Code of the Philippines.",
  "Labor, Employment and Human Resources Development",
  "National",
  NULL,
);
insert into BILL_SUBJECT values(
  "SB 1614",
  "Labor Code of the Philippines(P.D.No.442)"
);
insert into BILL_SUBJECT values(
  "SB 1614",
  "Leave of Absence"
);

call FileBillSenator (
  "0004",
  "SB 1622",
  "Leila De Lima",
  2017,
  "Pending in the Committee",
  "Parking Space for Handicapped Persons Act of 2017",
  "An act mandating the provision of exclusive parking space for handicapped persons and penalizing the unauthorized use thereof.",
  "Social Justice, Welfare and Rural Development",
  "National",
  NULL,
);
insert into BILL_SUBJECT values(
  "SB 1622",
  "Handicapped/Disabled/Differently Abled"
);
insert into BILL_SUBJECT values(
  "SB 1622",
  "Persons with Disabilities (PWDS)"
);
insert into BILL_SUBJECT values(
  "SB 1622",
  "Parking Space"
);
call FileBillSenator (
  "0004",
  "SB 1622",
  "Leila De Lima",
  2017,
  "Pending in the Committee",
  "Nutritional Information Disclosure Act of 2017",
  "An act requiring the disclosure of nutritional information in menus of food service establishments.",
  "Health and Demography",
  "National",
  NULL,
);
insert into BILL_SUBJECT values(
  "SB 1622",
  "Nutrition"
);
insert into BILL_SUBJECT values(
  "SB 1622",
  "Food Establishments"
);

call FileBillSenator (
  "0006",
  "SB 1619",
  2017,
  "Pending in the Committee",
  "Anti-Discrimination Act of 2017",
  "An act prohibiting discrimination on the basis of ethnicity, race, religion or belief, sex, gender, sexual orientation, gender identity, gender expression, civil status and HIV status, and providing penalties therefor.",
  "Cultural Communities",
  "National",
  "Social Justice, Welfare and Rural Development",
)
insert into BILL_SUBJECT values(
  "SB 1619",
  "Anti-Discrimination"
);

delimiter //
CREATE PROCEDURE DeleteSenator ( empno varchar(10) )
  BEGIN
    delete from SENATOR where Employeenumber=empno;
    delete from SENATOR_COMMITTEE where Employeenumber=empno;
  END
//
delimiter ;

delimiter //
CREATE PROCEDURE DeleteHouseMember ( empno varchar(10) )
  BEGIN
    delete from HOUSEMEMBER where Employeenumber=empno;
    delete from HOUSEMEMBER_COMMITTEE where Employeenumber=empno;
  END
//
delimiter ;
