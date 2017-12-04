-- MySQL dump 10.16  Distrib 10.2.10-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: billinformationsystem
-- ------------------------------------------------------
-- Server version	10.2.10-MariaDB-10.2.10+maria~xenial-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `BILL`
--

DROP TABLE IF EXISTS `BILL`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `BILL` (
  `Billno` varchar(10) NOT NULL,
  `Status` varchar(200) DEFAULT NULL,
  `Title` varchar(100) DEFAULT NULL,
  `Name` varchar(50) DEFAULT NULL,
  `Summarydesc` varchar(250) DEFAULT NULL,
  `Primarycommittee` varchar(100) DEFAULT NULL,
  `Scope` varchar(30) DEFAULT NULL,
  `Secondarycommittee` varchar(100) DEFAULT NULL,
  `Senator_flag` int(1) DEFAULT NULL,
  `Semployeenumber` varchar(10) DEFAULT NULL,
  `Housemem_flag` int(1) DEFAULT NULL,
  `Hemployeenumber` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`Billno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BILL`
--

LOCK TABLES `BILL` WRITE;
/*!40000 ALTER TABLE `BILL` DISABLE KEYS */;
INSERT INTO `BILL` VALUES
('HB 0001','Pending in the Committee','Sample HB 0001 Title','Henedina R. Abad','Sample Description HB 0001','Tourism','National','Accounts',NULL,NULL,1,'1001'),
('HB 0002','Pending in the Committee','Sample HB 0002 Title','Francis Gerald A. Abaya','Sample Description HB 0002','Tourism','National','Accounts',NULL,NULL,1,'1002'),
('HB 0003','Pending in the Committee','Sample HB 0003 Title','Harline Neil J. Abayon III','Sample Description HB 0003','Public Information','Luzon','Land Use',NULL,NULL,1,'1003'),
('HB 0004','Pending in the Committee','Sample HB 0004 Title','Rodrigo A. Abellanosa','Sample Description HB 0004','Public Information','Luzon','Land Use',NULL,NULL,1,'1004'),
('HB 0005','Pending in the Committee','Sample HB 0005 Title','Vicente J. Alcala','Sample Description HB 0005','Social Services','Vizayas','Transporation',NULL,NULL,1,'1018'),
('HB 0006','Pending in the Committee','Sample HB 0006 Title','Emmeline Aglipay-Villar','Sample Description HB 0006','Social Services','Vizayas','Transporation',NULL,NULL,1,'1015'),
('HB 0007','Approved on First Reading by the House of Representatives','Sample HB 0007 Title','Francisco G. Datol','Sample Description HB 0007','Social Services','Mindanao','Transporation',NULL,NULL,1,'1095'),
('HB 0008','Approved on First Reading by the Senate','Sample HB 0008 Title ','Eleanor C. Begtang','Sample HB  0008 Description','West Philippine Sea','National','Science and Technology',NULL,NULL,1,'1064'),
('HB 0009','Approved on Third Reading by the Senate','Sample HB 0009 Title','Teddy Brawner Baguilat Jr.','Sample HB  0009 Description','Labor, Employment and Human Resources','Workers','Health and Demography',NULL,NULL,1,'1042'),
('HB 0010','Pending in the Committee','Pandemic and All-Hazards Preparedness Reauthorization Act of 2013','Ma. Lourdes Acosta-Alba','To reauthorize certain programs under the Public Health Service Act and the Federal Food, Drug, and Cosmetic Act with respect to public health security and all-hazards preparedness and response, and for other purposes.','Tourism','National','Energy',NULL,NULL,1,'1064'),
('HB 0011','Approved on First Reading by the Senate','Sample HB 00010 Title ','Maximo Dalog','Sample HB  0011 Description','Overseas Workers Affairs','International','Foreign Affairs',NULL,NULL,1,'1094'),
('HB 0012','Approved on Second Reading by the Senate','Sample HB 00012 Title ','Dakila Carlo E. Cua','Sample HB  0012 Description','Agrarian Reform','International','Cooperatives',NULL,NULL,1,'1090'),
('HB 0013','Approved on Second Reading by the Senate','Sample HB 00013 Title ','Luisa Cuaresma','Sample HB  0013 Description','Agrarian Reform','Laguna','Cooperatives',NULL,NULL,1,'1091'),
('HB 0014','Approved on Second Reading by the Senate','Sample HB 00014 Title ','Manuel Jose Dalipe','Sample HB  0014 Description','Senate','Laguna','Rules',NULL,NULL,1,'1093'),
('HB 0015','Approved on Third Reading by the Senate','Sample HB 00015 Title ','Wilfredo Caminero','Sample HB  0015 Description','Senate','Calamba','Rules',NULL,NULL,1,'1068'),
('HB 0016','Approved on Third Reading by the Senate','Sample HB 00016 Title ','Mercedes K. Alvarez','Sample HB  0016 Description','National Defense and Security','PNP','Youth',NULL,NULL,1,'1024'),
('HB 0017','Approved on Third Reading by the House of Representatives','Sample HB 00017 Title ','Pantaleon D. Alvarez','Sample HB  0017 Description','National Defense and Security','PNP','Youth',NULL,NULL,1,'1025'),
('HB 0018','Approved on First Reading by the House of Representatives','Sample HB 00018 Title ','Erlpe John M. Amante','Sample HB  0018 Description','National Defense and Security','PNP','Youth',NULL,NULL,1,'1026'),
('HB 0019','Approved on Second Reading by the House of Representatives','Sample HB 00019 Title ','Gil P. Acosta','Sample HB  0019 Description','Food and Agriculture','PNP','Energy',NULL,NULL,1,'1009'),
('HB 0020','Approved on First Reading by the House of Representatives','Sample HB 0020 Title ','Jum J. Akbar','Sample HB  0020 Description','Food and Agriculture','Rizal','Energy',NULL,NULL,1,'1016'),
('HB 0021','Approved on First Reading by the Senate','Sample HB 0021 Title ','Ferjenel G. Biron','Sample HB  0021 Description','Food and Agriculture','Cavite','Energy',NULL,NULL,1,'1057'),
('HB 0022','Approved on First Reading by the Senate','Sample HB 0022 Title ','Jennifer Austria Barzaga','Sample HB  0022 Description','Urban Planning','Cavite','Finance',NULL,NULL,1,'1039'),
('HB 0023','Approved on First Reading by the Senate','Sample HB 0023 Title ','Kaka J. Bag-ao','Sample HB  0023 Description','Urban Planning','Cavite','Finance',NULL,NULL,1,'1040'),
('HB 0024','Approved on Second Reading by the Senate','Sample HB 0024 Title','Cristal L. Bagatsing','Sample HB  0024 Description','Ways and Means','Foreign','Health and Demography',NULL,NULL,1,'1041'),
('HB 0025','Approved on Third Reading by the Senate','Sample HB 0025 Title','Teddy Brawner Baguilat Jr.','Sample HB  0025 Description','Labor, Employment and Human Resources','Workers','Health and Demography',NULL,NULL,1,'1042'),
('HB 1101','Pending in the Committee','Sample HB 1101 Title','Henedina R. Abad','Sample Description HB 1101','Tourism','National','Accounts',NULL,NULL,1,'1111'),
('HB 1102','Pending in the Committee','Sample HB 1102 Title','Francis Gerald A. Abaya','Sample Description HB 1102','Tourism','National','Accounts',NULL,NULL,1,'1112'),
('HB 1103','Pending in the Committee','Sample HB 1103 Title','Harline Neil J. Abayon III','Sample Description HB 1103','Public Information','Luzon','Land Use',NULL,NULL,1,'1113'),
('HB 1104','Pending in the Committee','Sample HB 1104 Title','Rodrigo A. Abellanosa','Sample Description HB 1104','Public Information','Luzon','Land Use',NULL,NULL,1,'1114'),
('HB 1105','Pending in the Committee','Sample HB 1105 Title','Vicente J. Alcala','Sample Description HB 1105','Social Services','Vizayas','Transporation',NULL,NULL,1,'1018'),
('HB 1106','Pending in the Committee','Sample HB 1106 Title','Emmeline Aglipay-Villar','Sample Description HB 1106','Social Services','Vizayas','Transporation',NULL,NULL,1,'1015'),
('HB 1107','Approved on First Reading by the House of Representatives','Sample HB 1107 Title','Francisco G. Datol','Sample Description HB 1107','Social Services','Mindanao','Transporation',NULL,NULL,1,'1095'),
('HB 1108','Approved on First Reading by the Senate','Sample HB 1108 Title ','Eleanor C. Begtang','Sample HB  1108 Description','West Philippine Sea','National','Science and Technology',NULL,NULL,1,'1064'),
('HB 1109','Approved on Third Reading by the Senate','Sample HB 1109 Title','Teddy Brawner Baguilat Jr.','Sample HB  1109 Description','Labor, Employment and Human Resources','Workers','Health and Demography',NULL,NULL,1,'1042'),
('HB 1110','Pending in the Committee','Pandemic and All-Hazards Preparedness Reauthorization Act of 2013','Ma. Lourdes Acosta-Alba','To reauthorize certain programs under the Public Health Service Act and the Federal Food, Drug, and Cosmetic Act with respect to public health security and all-hazards preparedness and response, and for other purposes.','Tourism','National','Energy',NULL,NULL,1,'1064'),
('HB 1111','Approved on First Reading by the Senate','Sample HB 11010 Title ','Maximo Dalog','Sample HB  1111 Description','Overseas Workers Affairs','International','Foreign Affairs',NULL,NULL,1,'1094'),
('HB 1112','Approved on Second Reading by the Senate','Sample HB 11012 Title ','Dakila Carlo E. Cua','Sample HB  1112 Description','Agrarian Reform','International','Cooperatives',NULL,NULL,1,'1090'),
('HB 1113','Approved on Second Reading by the Senate','Sample HB 11013 Title ','Luisa Cuaresma','Sample HB  1113 Description','Agrarian Reform','Laguna','Cooperatives',NULL,NULL,1,'1091'),
('HB 1114','Approved on Second Reading by the Senate','Sample HB 11014 Title ','Manuel Jose Dalipe','Sample HB  1114 Description','Senate','Laguna','Rules',NULL,NULL,1,'1093'),
('HB 1115','Approved on Third Reading by the Senate','Sample HB 11015 Title ','Wilfredo Caminero','Sample HB  1115 Description','Senate','Calamba','Rules',NULL,NULL,1,'1068'),
('HB 1116','Approved on Third Reading by the Senate','Sample HB 11016 Title ','Mercedes K. Alvarez','Sample HB  1116 Description','National Defense and Security','PNP','Youth',NULL,NULL,1,'1024'),
('HB 1117','Approved on Third Reading by the House of Representatives','Sample HB 11017 Title ','Pantaleon D. Alvarez','Sample HB  1117 Description','National Defense and Security','PNP','Youth',NULL,NULL,1,'1025'),
('HB 1118','Approved on First Reading by the House of Representatives','Sample HB 11018 Title ','Erlpe John M. Amante','Sample HB  1118 Description','National Defense and Security','PNP','Youth',NULL,NULL,1,'1026'),
('HB 1119','Approved on Second Reading by the House of Representatives','Sample HB 11019 Title ','Gil P. Acosta','Sample HB  1119 Description','Food and Agriculture','PNP','Energy',NULL,NULL,1,'1119'),
('HB 1120','Approved on First Reading by the House of Representatives','Sample HB 1120 Title ','Jum J. Akbar','Sample HB  1120 Description','Food and Agriculture','Rizal','Energy',NULL,NULL,1,'1016'),
('HB 1121','Approved on First Reading by the Senate','Sample HB 1121 Title ','Ferjenel G. Biron','Sample HB  1121 Description','Food and Agriculture','Cavite','Energy',NULL,NULL,1,'1057'),
('HB 1122','Approved on First Reading by the Senate','Sample HB 1122 Title ','Jennifer Austria Barzaga','Sample HB  1122 Description','Urban Planning','Cavite','Finance',NULL,NULL,1,'1039'),
('HB 1123','Approved on First Reading by the Senate','Sample HB 1123 Title ','Kaka J. Bag-ao','Sample HB  1123 Description','Urban Planning','Cavite','Finance',NULL,NULL,1,'1040'),
('HB 1124','Approved on Second Reading by the Senate','Sample HB 1124 Title','Cristal L. Bagatsing','Sample HB  1124 Description','Ways and Means','Foreign','Health and Demography',NULL,NULL,1,'1041'),
('HB 1125','Approved on Third Reading by the Senate','Sample HB 1125 Title','Teddy Brawner Baguilat Jr.','Sample HB  1125 Description','Labor, Employment and Human Resources','Workers','Health and Demography',NULL,NULL,1,'1042'),
('SB 1439','Approved on Third Reading by the Senate','Energy Virtual One Stop Shop Act of 2017','Sherwin Gatchalian','An act establishing the Energy Virtual One Stop Shop for the purpose of streamlining the permitting process of energy generation projects.','Energy','National','Finance',1,'0005',NULL,NULL),
('SB 1533','Approved on Third Reading by the Senate','Balik Scientist Act','Paolo Benigno Aquino','An act institutionalizing the Balik Scientist Program, appropriating funds therefor, and for other purpose.','Science and Technology','National','Ways and Means',1,'0011',NULL,NULL),
('SB 1597','Approved on Second Reading by the Senate','Student Fare Discount Act','Paolo Benigno Aquino','An act institutionalizing the grant of Student Fare Discount Privileges on Public Transportation and for other purposes.','Education, Arts and Culture','National','Public Services',1,'0011',NULL,NULL),
('SB 1598','Pending in the Committee','Batas Kasambahay Social Security Condonation Law of 2017','Maria Lourdes Nancy Binay','An act granting the Social Security System the authority to condone penalties for unremitted or delinquent contributions by employers or domestic workers for the purpose of encouraging compliance with Social Security Laws.','Labor, Employment and Human Resources Development','National','Finance',1,'0002',NULL,NULL),
('SB 1614','Pending in the Committee','Service Incentive Leave Of Employees','Joel Villanueva','An act increasing the service incentive leave of employees, amending for the purpose Article 95 of Presidential Decree No. 442, as amended, otherwise known as the Labor Code of the Philippines.','Labor, Employment and Human Resources Development','National','Finance',1,'0003',NULL,NULL),
('SB 1619','Pending in the Committee','Anti-Discrimination Act of 2017','Joseph Victor G. Ejercito','An act prohibiting discrimination on the basis of ethnicity, race, religion or belief, sex, gender, sexual orientation, gender identity, gender expression, civil status and HIV status, and providing penalties therefor.','Cultural Communities','National','Social Justice, Welfare and Rural Development',1,'0006',NULL,NULL),
('SB 1621','Pending in the Committee','Nutritional Information Disclosure Act of 2017','Leila De Lima','An act requiring the disclosure of nutritional information in menus of food service establishments.','Health and Demography','National','Finance',1,'0004',NULL,NULL),
('SB 1622','Pending in the Committee','Parking Space for Handicapped Persons Act of 2017','Leila De Lima','An act mandating the provision of exclusive parking space for handicapped persons and penalizing the unauthorized use thereof.','Social Justice, Welfare and Rural Development','National','Finance',1,'0004',NULL,NULL),
('SB 1623','Pending in the Committee','Recoverable System Loss Act','Franklin M. Drilon','An act reducing the cap of recoverable system loss rate and for other purposes.','Energy','National','Public Services',1,'0009',NULL,NULL),
('SB 2138','Approved on Third Reading by the Senate','Tourism Act of 2005','Richard J. Gordon','An act declaring a national policy for Tourism as the primary engine of investment, employment, growth and national development and efficiently implement that policy providing necessary incentives for investment and appropriating funds therefor','Tourism','National','Finance',1,'0018',NULL,NULL),
('SB 2295','Approved on First Reading by the Senate','Preparatory Education Act','Manuel B. Villar Jr.','An act institutionalizing preparatory education in the Basic Education System.','Education, Arts and Culture','National','Finance',1,'0013',NULL,NULL),
('SB 2400','Approved on First Reading by the Senate','Anti Blight Act','Miriam Defensor Santiago','An act regulating the placement of Signs.','Civil Service and Government Reorganization','National','Public Works',1,'0015',NULL,NULL),
('SB 2401','Approved on Second Reading by the Senate','Anti-Wall Blight Act','Miriam Defensor Santiago','An act regulating the placement of Wall Signs.','Civil Service and Government Reorganization','National','Public Works',1,'0015',NULL,NULL),
('SB 2402','Approved on Third Reading by the Senate','Health Workers Act','Miriam Defensor Santiago','An act declaring May 7 of every year as Health Worker’s Day.','Civil Service and Government Reorganization','National','Public Works',1,'0015',NULL,NULL),
('SB 2403','Approved on Third Reading by the Senate','CAS Act','Miriam Defensor Santiago','An act regulating the CAS Signs.','Civil Service and Government Reorganization','National','Public Works',1,'0015',NULL,NULL),
('SB 2404','Approved on First Reading by the Senate','CAFS Act','Miriam Defensor Santiago','An act regulating the placement of CAFS Signs.','Civil Service and Government Reorganization','National','Public Works',1,'0015',NULL,NULL),
('SB 2405','Approved on Second Reading by the Senate','CHE Act','Miriam Defensor Santiago','An act regulating the placement of CHE Signs.','Civil Service and Government Reorganization','National','Public Works',1,'0015',NULL,NULL),
('SB 2406','Approved on Third Reading by the House of Representatives','CEAT Act','Miriam Defensor Santiago','An act regulating the placement of CEAT Signs.','Civil Service and Government Reorganization','National','Public Works',1,'0015',NULL,NULL),
('SB 2407','Approved on Second Reading by the House of Representatives','CVM Act','Miriam Defensor Santiago','An act regulating the placement of CVM Signs.','Civil Service and Government Reorganization','National','Public Works',1,'0015',NULL,NULL),
('SB 2408','Approved on First Reading by the House of Representatives','CDC Act','Miriam Defensor Santiago','An act regulating the placement of CDC Signs.','Civil Service and Government Reorganization','National','Public Works',1,'0015',NULL,NULL),
('SB 2409','Approved on Third Reading by the House of Representatives','CEM Act','Miriam Defensor Santiago','An act regulating the placement of CEM Signs.','Civil Service and Government Reorganization','National','Public Works',1,'0015',NULL,NULL),
('SB 2410','Approved on Second Reading by the House of Representatives','2 Act','Miriam Defensor Santiago','An act regulating the placement of 2 Signs.','Civil Service and Government Reorganization','National','Public Works',1,'0015',NULL,NULL),
('SB 2411','Approved on First Reading by the House of Representatives','11 Act','Miriam Defensor Santiago','An act regulating the placement of 11 Signs.','Civil Service and Government Reorganization','National','Public Works',1,'0015',NULL,NULL),
('SB 2412','Approved on Third Reading by the House of Representatives','21 Act','Miriam Defensor Santiago','An act regulating the placement of 21 Signs.','Civil Service and Government Reorganization','National','Public Works',1,'0015',NULL,NULL),
('SB 2413','Approved on Second Reading by the House of Representatives','56 Act','Miriam Defensor Santiago','An act regulating the placement of 56 Signs.','Civil Service and Government Reorganization','National','Public Works',1,'0015',NULL,NULL),
('SB 2414','Approved on First Reading by the House of Representatives','22 Act','Miriam Defensor Santiago','An act regulating the placement of 22 Signs.','Civil Service and Government Reorganization','National','Public Works',1,'0015',NULL,NULL),
('SB 2415','Approved on Third Reading by the House of Representatives','57 Act','Miriam Defensor Santiago','An act regulating the placement of 57 Signs.','Civil Service and Government Reorganization','National','Public Works',1,'0015',NULL,NULL),
('SB 2416','Approved on Second Reading by the House of Representatives','123 Act','Miriam Defensor Santiago','An act regulating the placement of 123 Signs.','Civil Service and Government Reorganization','National','Public Works',1,'0015',NULL,NULL),
('SB 2417','Approved on First Reading by the House of Representatives','100 Act','Miriam Defensor Santiago','An act regulating the placement of 100 Signs.','Civil Service and Government Reorganization','National','Public Works',1,'0015',NULL,NULL),
('SB 2418','Approved on Third Reading by the House of Representatives','124 Act','Miriam Defensor Santiago','An act regulating the placement of 124 Signs.','Civil Service and Government Reorganization','National','Public Works',1,'0015',NULL,NULL),
('SB 2419','Approved on Second Reading by the House of Representatives','127 Act','Miriam Defensor Santiago','An act regulating the placement of 127 Signs.','Civil Service and Government Reorganization','National','Public Works',1,'0015',NULL,NULL),
('SB 2420','Approved on First Reading by the House of Representatives','131 Act','Miriam Defensor Santiago','An act regulating the placement of 131 Signs.','Civil Service and Government Reorganization','National','Public Works',1,'0015',NULL,NULL),
('SB 2421','Approved on Third Reading by the House of Representatives','125 Act','Miriam Defensor Santiago','An act regulating the placement of 125 Signs.','Civil Service and Government Reorganization','National','Public Works',1,'0015',NULL,NULL),
('SB 2422','Approved on Second Reading by the House of Representatives','128 Act','Miriam Defensor Santiago','An act regulating the placement of 128 Signs.','Civil Service and Government Reorganization','National','Public Works',1,'0015',NULL,NULL),
('SB 2423','Approved on First Reading by the House of Representatives','132 Act','Miriam Defensor Santiago','An act regulating the placement of 132 Signs.','Civil Service and Government Reorganization','National','Public Works',1,'0015',NULL,NULL),
('SB 2424','Approved on Third Reading by the House of Representatives','17 Act','Miriam Defensor Santiago','An act regulating the placement of 17 Signs.','Civil Service and Government Reorganization','National','Public Works',1,'0015',NULL,NULL),
('SB 2425','Approved on Second Reading by the House of Representatives','26 Act','Miriam Defensor Santiago','An act regulating the placement of 26 Signs.','Civil Service and Government Reorganization','National','Public Works',1,'0015',NULL,NULL),
('SB 2426','Approved on First Reading by the House of Representatives','27 Act','Miriam Defensor Santiago','An act regulating the placement of 27 Signs.','Civil Service and Government Reorganization','National','Public Works',1,'0015',NULL,NULL),
('SB 2427','Approved on Third Reading by the House of Representatives','28 Act','Miriam Defensor Santiago','An act regulating the placement of 28 Signs.','Civil Service and Government Reorganization','National','Public Works',1,'0015',NULL,NULL),
('SB 2428','Approved on Third Reading by the House of Representatives','3 Act','Miriam Defensor Santiago','An act regulating the placement of 3 Signs.','Civil Service and Government Reorganization','National','Public Works',1,'0015',NULL,NULL),
('SB 2429','Approved on Second Reading by the House of Representatives','81 Act','Miriam Defensor Santiago','An act regulating the placement of 81 Signs.','Civil Service and Government Reorganization','National','Public Works',1,'0015',NULL,NULL),
('SB 2482','Approved on Third Reading by the Senate','Anti-Billboard Blight Act','Miriam Defensor Santiago','An act regulating the placement of Billboards Signs.','Civil Service and Government Reorganization','National','Public Works',1,'0015',NULL,NULL),
('SB 2490','Approved on Third Reading by the Senate','Anti-Billboard Blight Act','Miriam Defensor Santiago','An act regulating the placement of Billboards Signs.','Civil Service and Government Reorganization','National','Public Works',1,'0015',NULL,NULL),
('SB 2613','Approved on Second Reading by the Senate','National Cultural Heritage Act of 2007','Juan M. Flavier','An act providing for the protection and conservation of the national cultural heritage, strengthening the NCAA and its affiliated cultural agencies, and for other purposes.','Education, Arts and Culture','National','Tourism',1,'0016',NULL,NULL),
('SB 3223','Approved on Second Reading by the Senate','Philippine HIV and AIDS Act','Pia S. Cayetano','An act strengthening the Philippine Comprehensive Policy in HIV and AIDS Prevention, Treatment, Care and Support, repealing for the purpose Republic Act no 8504 and appropriating funds therefor.','Health and Demography','National','Justice and Human Rights',1,'0014',NULL,NULL),
('SB 3310','Approved on Second Reading by the Senate','Anti-Signage on Public Works Act','Miriam Defensor Santiago','An act prohibiting public officers from claiming credit through signage announcing a public works project.','Civil Service and Government Reorganization','National','Public Works',1,'0015',NULL,NULL),
('SB 3553','Approved on Second Reading by the Senate','Cybercrime Prevention Act of 2009','Jinggoy Ejercito Estrada','An act defining cybercrime, providing for the prevention, investigation and imposition of penalties therefor and for other purposes.','Science and Technology','National','Justice and Human Rights',1,'0017',NULL,NULL),
('SB 3594','Approved on First Reading by the Senate','Franco Eugenio for Safe Travel Act of 2010','Richard J. Gordon','An act to put a stop to the practice of overloading of passengers in Public Utility Vehicles and Providing penalties therefor','Ways and Means','National','Finance',1,'0018',NULL,NULL),
('SB 3595','Approved on First Reading by the Senate','National Marine Transportation Safety Board','Richard J. Gordon','An act creating the National Marine Transportation Safety Board of the Philippines','Ways and Means','National','Finance',1,'0018',NULL,NULL),
('SB 3596','Approved on First Reading by the Senate','Amending R.A.NO. 9295, The Domestic Shipping Development Act of 2004','Richard J. Gordon','An act amending Chapter V, Section IV of R.A.NO.9295, Otherwise known as The Domestic Shipping Development Act of 2004','Ways and Means','National','Finance',1,'0018',NULL,NULL);
/*!40000 ALTER TABLE `BILL` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `BILL_SUBJECT`
--

DROP TABLE IF EXISTS `BILL_SUBJECT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `BILL_SUBJECT` (
  `Billno` varchar(10) NOT NULL,
  `Subject` varchar(50) NOT NULL,
  PRIMARY KEY (`Billno`,`Subject`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BILL_SUBJECT`
--

LOCK TABLES `BILL_SUBJECT` WRITE;
/*!40000 ALTER TABLE `BILL_SUBJECT` DISABLE KEYS */;
INSERT INTO `BILL_SUBJECT` VALUES
('0009','Energy Regulatory Commission'),
('HB 0001','Accounts'),
('HB 0001','Appropriations'),
('HB 0001','Death'),
('HB 0002','Accounts'),
('HB 0002','Appropriations'),
('HB 0002','Education'),
('HB 0003','Foreign'),
('HB 0003','Sample subject 1'),
('HB 0003','Sample subject 2'),
('HB 0004','Elementary School'),
('HB 0004','Secondary School'),
('HB 0004','SS 1'),
('HB 0004','SS 2'),
('HB 0005','Audit'),
('HB 0005','SS 0005 1'),
('HB 0005','SS 0005 2'),
('HB 0006','Health'),
('HB 0006','SS 0006 1'),
('HB 0006','SS 0006 2'),
('HB 0007','Health'),
('HB 0007','SS 0007 1'),
('HB 0007','SS 0007 2'),
('HB 0008','Hydropower'),
('HB 0008','SS 0008 1'),
('HB 0008','SS 0008 2'),
('HB 0008','Utility Regulatory'),
('HB 0009','Health'),
('HB 0009','SS 0009 1'),
('HB 0009','SS 0009 2'),
('HB 0010','Health'),
('HB 0011','SS 0011 1'),
('HB 0011','SS 0011 2'),
('HB 0012','SS 0011 1'),
('HB 0012','SS 0011 2'),
('HB 0013','SS 0013 1'),
('HB 0013','SS 0013 2'),
('HB 0014','SS 0013 1'),
('HB 0014','SS 0013 2'),
('HB 0015','SS 0015 1'),
('HB 0015','SS 0015 2'),
('HB 0016','SS 0016 1'),
('HB 0016','SS 0016 2'),
('HB 0017','SS 0017 1'),
('HB 0017','SS 0017 2'),
('HB 0018','SS 0018 1'),
('HB 0018','SS 0018 2'),
('HB 0019','SS 0019 1'),
('HB 0019','SS 0019 2'),
('HB 0020','SS 0020 1'),
('HB 0020','SS 0020 2'),
('HB 0021','SS 0021 1'),
('HB 0021','SS 0021 2'),
('HB 0022','SS 0022 1'),
('HB 0022','SS 0022 2'),
('HB 0023','SS 0023 1'),
('HB 0023','SS 0023 2'),
('HB 0024','SS 0024 1'),
('HB 0024','SS 0024 2'),
('HB 0025','SS 0025 1'),
('HB 0025','SS 0025 2'),
('SB 1439','Energy Generating Facilities'),
('SB 1439','Energy Virtual One Stop Shop (Evoss)'),
('SB 1533','Balik Scientist Program'),
('SB 1533','Scientists/Researchers'),
('SB 1597','Discount Privileges'),
('SB 1597','Fare Discount'),
('SB 1597','Students'),
('SB 1598','Batas Kasambahay (R.A.No. 10361)'),
('SB 1598','Condonation'),
('SB 1598','Domestic Worker'),
('SB 1598','Social Security System (SSS)'),
('SB 1614','Labor Code of the Philippines(P.D.No.442)'),
('SB 1614','Leave of Absence'),
('SB 1619','Anti-Discrimination'),('SB 1621','Food Establishments'),
('SB 1621','Nutrition'),
('SB 1622','Handicapped/Disabled/Differently Abled'),
('SB 1622','Parking Space'),
('SB 1622','Persons with Disabilities (PWDS)'),
('SB 2295','Basic Education System'),
('SB 2400','Blight'),
('SB 2401','Billboards'),
('SB 2402','Health'),
('SB 2403','CAS'),
('SB 2404','CAFS'),
('SB 2405','CHE'),
('SB 2406','CEAT'),
('SB 2407','CVM'),
('SB 2408','Billboards'),
('SB 2409','CEM'),
('SB 2410','2'),
('SB 2411','11'),
('SB 2412','21'),
('SB 2413','56'),
('SB 2414','22'),
('SB 2415','57'),
('SB 2416','123'),
('SB 2417','100'),
('SB 2418','124'),
('SB 2419','127'),
('SB 2420','131'),
('SB 2421','125'),
('SB 2422','128'),
('SB 2423','132'),
('SB 2424','17'),
('SB 2425','26'),('SB 2426','27'),('SB 2427','28'),('SB 2428','3'),
('SB 2429','81'),
('SB 2429','82'),('SB 2482','Billboards'),('SB 2490','Billboards'),('SB 2613','National Cultural Heritage Act'),
('SB 3223','Philippine Aids Prevention and Control Act of 1998'),
('SB 3310','Public Works Project'),('SB 3553','Computer Crimes/ Cyber Crimes'),
('SB 3594','Passenger Vehicle'),
('SB 3595','Passenger Vehicle'),('SB 3595','Tourism Act of 2004'),('SB 3596','Shipping Industry');
/*!40000 ALTER TABLE `BILL_SUBJECT` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `HOUSEMEMBER`
--

DROP TABLE IF EXISTS `HOUSEMEMBER`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `HOUSEMEMBER` (
  `Employeenumber` varchar(10) NOT NULL,
  `Name` varchar(50) DEFAULT NULL,
  `Typeofrepresentative` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`Employeenumber`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `HOUSEMEMBER`
--

LOCK TABLES `HOUSEMEMBER` WRITE;
/*!40000 ALTER TABLE `HOUSEMEMBER` DISABLE KEYS */;
INSERT INTO `HOUSEMEMBER` VALUES ('1001','Henedina R. Abad','District'),('1002','Francis Gerald A. Abaya','District'),('1003','Harline Neil J. Abayon III','Party List'),('1004','Rodrigo A. Abellanosa','District'),('1005','Raneo E. Abu','District'),('1006','Frederick F. Abueg','District'),('1007','Pedro B. Acharon Jr.','District'),('1008','Romeo M. Acop','District'),('1009','Gil P. Acosta','District'),('1010','Ma. Lourdes Acosta-Alba','District'),('1011','Ansaruddin A.M. A. Adiong','District'),('1012','Alex Advincula','District'),('1013','Benjamin C. Agaro Jr.','District'),('1014','Ma. Lourdes R. Aggabao','District'),('1015','Emmeline Aglipay-Villar','Party List'),('1016','Jum J. Akbar','District'),('1017','Rodolfo T. Albano III','District'),('1018','Vicente J. Alcala','District'),('1019','Gary C. Alejano','Party List'),('1020','Joel Mayo Z. Almario','District'),('1021','Jorge T. Almonte','District'),('1022','Marlyn B. Alonte','District'),('1023','Franz Alvarez','District'),('1024','Mercedes K. Alvarez','District'),('1025','Pantaleon D. Alvarez','Party List'),('1026','Erlpe John M. Amante','District'),('1027','Isagani S. Amatong','District'),('1028','Rolando G. Andaya Jr.','District'),('1029','Bellaflor J. Angara-Castillo','District'),('1030','Magnolia C. Antonino','District'),('1031','Michelle M. Antonio','Party List'),('1032','Milagros Aquin-Magsaysay','Party List'),('1033','Sol Aragones','District'),('1034','Munir M. Arbison','District'),('1035','Arlene B. Arcillas','District'),('1036','Rose Marie J. Arenas','Party List'),('1037','Jose L. Atienza','District'),('1038','Erico Aristotle C. Aumentado','District'),('1039','Jennifer Austria Barzaga','District'),('1040','Kaka J. Bag-ao','District'),('1041','Cristal L. Bagatsing','District'),('1042','Teddy Brawner Baguilat Jr.','District'),('1043','Jorge Banal','District'),('1044','Robert Ace S. Barbers','District'),('1045','Leopoldo N. Bataoil','District'),('1046','Rodel M. Batocabe','Party List'),('1047','Lorna P. Bautista-Bandigan','District'),('1048','Salvador B. Belaro Jr.','Party List'),('1049','Ricardo T. Belmonte','Party List'),('1050','Feliciano R. Belmonte Jr.','District'),('1051','Jose Christopher Y. Belmonte','District'),('1052','Alfredo Benitez','District'),('1053','Joseph Bernos','Party List'),('1054','Aniceto D. Bertiz','District'),('1055','Rozzano Biazon','District'),('1056','Emmanuel A. Billones','District'),('1057','Ferjenel G. Biron','District'),('1058','Lianda B. Bolilia','District'),('1059','Juan Pablo Bondoc','District'),('1060','Gabriel Bordado','District'),('1061','Anthony M. Bravo','District'),('1062','Maria Vida Bravo','District'),('1063','Arlene Brosas','District'),('1064','Eleanor C. Begtang','District'),('1065','Mercedes Cagas','Party List'),('1066','Peter John Calderon','District'),('1067','Emi Calixto','District'),('1068','Wilfredo Caminero','District'),('1069','Luis Jose Campos','Party List'),('1070','Sabiniano Canama','District'),('1071','Jose Carlos Cari','District'),('1072','Rico B. Geron','District'),('1073','Winston Castelo','District'),('1074','France Castro','Party List'),('1075','Fredenil H. Castro','Party List'),('1076','Nancy A. Catamco','District'),('1077','Pia Cayetano','District'),('1078','Jesus Celeste','District'),('1079','Arnel M. Cerafica','District'),('1080','Aurora Enerio Cerilles','District'),('1081','Cecilia Chavez','Party List'),('1082','Joaquin M. Chipeco Jr.','Party List'),('1083','Christopher S. Co','District'),('1084','Carlos O. Cojuangco','District'),('1085','Theresa V. Collantes','District'),('1086','Jonas Cortes','Party List'),('1087','Julieta Cortuna','District'),('1088','Ronald Cosalan','District'),('1089','Vincent P. Crisologo','District'),('1090','Dakila Carlo E. Cua','District'),('1091','Luisa Cuaresma','District'),('1092','Leo Rafael M. Cueva','District'),('1093','Manuel Jose Dalipe','District'),('1094','Maximo Dalog','District'),('1095','Francisco G. Datol','District'),('1096','Raul A. Daza','Party List'),('1097','Emmi A. De Jesus','District'),('1098','Christopher De Venecia','Party List'),('1099','Eugene Michael B. De Vera','Party List'),('1100','Arthur R. Defensor','District');
/*!40000 ALTER TABLE `HOUSEMEMBER` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `HOUSEMEMBER_COMMITTEE`
--

DROP TABLE IF EXISTS `HOUSEMEMBER_COMMITTEE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `HOUSEMEMBER_COMMITTEE` (
  `Employeenumber` varchar(10) NOT NULL,
  `Committee` varchar(100) NOT NULL,
  PRIMARY KEY (`Employeenumber`,`Committee`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `HOUSEMEMBER_COMMITTEE`
--

LOCK TABLES `HOUSEMEMBER_COMMITTEE` WRITE;
/*!40000 ALTER TABLE `HOUSEMEMBER_COMMITTEE` DISABLE KEYS */;
INSERT INTO `HOUSEMEMBER_COMMITTEE` VALUES ('1001','Government Reorganization'),('1001','Rural Development'),('1002','Climate Change'),('1002','Ecology'),('1003','Foreign Affairs'),('1003','Rules'),('1004','Appropriations'),('1004','Basic Education and Culture'),('1005','Deputy Speaker'),('1006','Ethics and Privileges'),('1006','Food Security'),('1007','Games and Amusements'),('1007','Science and Technology'),('1008','Health'),('1008','Justice'),('1009','Land Use'),('1009','Legislative Franchises'),('1010','Rural Development'),('1010','Sustainable Development Goals'),('1011','Higher and Technical Education'),('1011','Muslim Affairs'),('1012','Banks and Financial Intermediaries'),('1012','Local Government'),('1013','Dangerous Drugs'),('1013','Reforestation'),('1014','Population and Family Relations'),('1014','Welfare of Children'),('1015','Overseas Workers Affairs'),('1015','Transportation'),('1016','Higher and Technical Education'),('1016','Public Works and Highways'),('1017','Health'),('1017','Justice'),('1018','Natural Resources'),('1018','Social Services'),('1019','Housing and Urban Development'),('1019','National Defense and Security'),('1020','Public Order and Safety'),('1020','Transportation'),('1021','Appropriations'),('1021','Public Information'),('1022','Ecology'),('1022','Women and Gender Equality'),('1023','Trade and Industry'),('1023','West Philippine Sea'),('1024','Deputy Speaker'),('1025','House Speaker'),('1026','Energy'),('1026','Higher and Technical Education'),('1027','Tourism'),('1027','Ways and Means'),('1028','Deputy Speaker'),('1029','Accounts'),('1029','Science and Education'),('1030','Bases Conversion'),('1030','Social Services'),('1031','Bases Conversion'),('1031','Social Services'),('1032','Energy'),('1032','Higher and Technical Education'),('1033','Appropriations'),('1033','Public Information'),('1034','Trade and Industry'),('1034','West Philippine Sea'),('1035','Climate Change'),('1035','Ecology'),('1036','Appropriations'),('1036','Basic Education and Culture'),('1037','Games and Amusements'),('1037','Science and Technology'),('1038','Banks and Financial Intermediaries'),('1038','Local Government'),('1039','Appropriations'),('1039','Public Information'),('1040','Banks and Financial Intermediaries'),('1040','Local Government'),('1041','Land Use'),('1041','Legislative Franchises'),('1042','Appropriations'),('1042','Basic Education and Culture'),('1043','Trade and Industry'),('1043','West Philippine Sea'),('1044','Ethics and Privileges'),('1044','Food Security'),('1045','Appropriations'),('1045','Basic Education and Culture'),('1046','Trade and Industry'),('1046','West Philippine Sea'),('1047','Games and Amusements'),('1047','Science and Technology'),('1048','Ethics and Privileges'),('1048','Food Security'),('1049','Climate Change'),('1049','Ecology'),('1050','Climate Change'),('1050','Science and Technology'),('1051','Government Reorganization'),('1051','Rural Development'),('1052','Climate Change'),('1052','Ecology'),('1053','Foreign Affairs'),('1053','Rules'),('1054','Appropriations'),('1054','Basic Education and Culture'),('1055','Deputy Speaker'),('1056','Ethics and Privileges'),('1056','Food Security'),('1057','Games and Amusements'),('1057','Science and Technology'),('1058','Health'),('1058','Justice'),('1059','Land Use'),('1059','Legislative Franchises'),('1060','Rural Development'),('1060','Sustainable Development Goals'),('1061','Higher and Technical Education'),('1061','Muslim Affairs'),('1062','Banks and Financial Intermediaries'),('1062','Local Government'),('1063','Dangerous Drugs'),('1063','Reforestation'),('1064','Population and Family Relations'),('1064','Welfare of Children'),('1065','Overseas Workers Affairs'),('1065','Transportation'),('1066','Higher and Technical Education'),('1066','Public Works and Highways'),('1067','Health'),('1067','Justice'),('1068','Natural Resources'),('1068','Social Services'),('1069','Housing and Urban Development'),('1069','National Defense and Security'),('1070','Public Order and Safety'),('1070','Transportation'),('1071','Appropriations'),('1071','Public Information'),('1072','Ecology'),('1072','Women and Gender Equality'),('1073','Trade and Industry'),('1073','West Philippine Sea'),('1074','Deputy Speaker'),('1075','House Speaker'),('1076','Energy'),('1076','Higher and Technical Education'),('1077','Tourism'),('1077','Ways and Means'),('1078','Deputy Speaker'),('1079','Accounts'),('1079','Science and Education'),('1080','Bases Conversion'),('1080','Social Services'),('1081','Bases Conversion'),('1081','Social Services'),('1082','Energy'),('1082','Higher and Technical Education'),('1083','Appropriations'),('1083','Public Information'),('1084','Trade and Industry'),('1084','West Philippine Sea'),('1085','Climate Change'),('1085','Ecology'),('1086','Appropriations'),('1086','Basic Education and Culture'),('1087','Games and Amusements'),('1087','Science and Technology'),('1088','Banks and Financial Intermediaries'),('1088','Local Government'),('1089','Appropriations'),('1089','Public Information'),('1090','Banks and Financial Intermediaries'),('1090','Local Government'),('1091','Land Use'),('1091','Legislative Franchises'),('1092','Appropriations'),('1092','Basic Education and Culture'),('1093','Trade and Industry'),('1093','West Philippine Sea'),('1094','Ethics and Privileges'),('1094','Food Security'),('1095','Appropriations'),('1095','Basic Education and Culture'),('1096','Trade and Industry'),('1096','West Philippine Sea'),('1097','Games and Amusements'),('1097','Science and Technology'),('1098','Ethics and Privileges'),('1098','Food Security'),('1099','Climate Change'),('1099','Ecology'),('1100','Climate Change'),('1100','Science and Technology');
/*!40000 ALTER TABLE `HOUSEMEMBER_COMMITTEE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `HOUSEMEMBER_FILES`
--

DROP TABLE IF EXISTS `HOUSEMEMBER_FILES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `HOUSEMEMBER_FILES` (
  `Employeenumber` varchar(10) NOT NULL,
  `Billno` varchar(10) NOT NULL,
  `Year` int(4) DEFAULT NULL,
  PRIMARY KEY (`Employeenumber`,`Billno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `HOUSEMEMBER_FILES`
--

LOCK TABLES `HOUSEMEMBER_FILES` WRITE;
/*!40000 ALTER TABLE `HOUSEMEMBER_FILES` DISABLE KEYS */;
INSERT INTO `HOUSEMEMBER_FILES` VALUES
('1001','HB 0001',2001),
('1002','HB 0002',2001),
('1003','HB 0003',2002),
('1004','HB 0004',2002),
('1018','HB 0005',2002),
('1015','HB 0006',2003),
('1095','HB 0007',2004),
('1064','HB 0008',2005),
('1042','HB 0009',2004),
('1010','HB 0010',2003),
('1094','HB 0011',2007),
('1090','HB 0012',2006),
('1091','HB 0013',2006),
('1093','HB 0014',2006),
('1068','HB 0015',2004),
('1024','HB 0016',2016),
('1025','HB 0017',2016),
('1026','HB 0018',2014),
('1009','HB 0019',2014),
('1016','HB 0020',2013),
('1057','HB 0021',2012),
('1039','HB 0022',2010),
('1040','HB 0023',2010),
('1041','HB 0024',2013),
('1042','HB 0025',2010),
('1001','HB 1101',2001),
('1002','HB 1102',2001),
('1003','HB 1103',2002),
('1004','HB 1104',2002),
('1018','HB 1105',2002),
('1015','HB 1106',2003),
('1095','HB 1107',2004),
('1064','HB 1108',2005),
('1042','HB 1109',2014),
('1010','HB 1110',2003),
('1094','HB 1111',2017),
('1090','HB 1112',2016),
('1091','HB 1113',2006),
('1093','HB 1114',2006),
('1068','HB 1115',2004),
('1024','HB 1116',2016),
('1025','HB 1117',2013),
('1026','HB 1118',2003),
('1009','HB 1119',2005),
('1016','HB 1120',2006),
('1057','HB 1121',2007),
('1039','HB 1122',2008),
('1040','HB 1123',2008),
('1041','HB 1124',2009),
('1042','HB 1125',2009);
/*!40000 ALTER TABLE `HOUSEMEMBER_FILES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SENATOR`
--

DROP TABLE IF EXISTS `SENATOR`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SENATOR` (
  `Employeenumber` varchar(10) NOT NULL,
  `Name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Employeenumber`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SENATOR`
--

LOCK TABLES `SENATOR` WRITE;
/*!40000 ALTER TABLE `SENATOR` DISABLE KEYS */;
INSERT INTO `SENATOR` VALUES ('0001','Aquilino Pimentel III'),('0002','Maria Lourdes Nancy Binay'),('0003','Joel Villanueva'),('0004','Leila De Lima'),('0005','Sherwin Gatchalian'),('0006','Joseph Victor G. Ejercito'),('0007','Ralph G. Recto'),('0008','Vicente C. Sotto III'),('0009','Franklin M. Drilon'),('0010','Sonny M. Angara'),('0011','Paolo Benigno Aquino'),('0012','Alan Peter S. Cayetano'),('0013','Manuel B. Villar Jr.'),('0014','Pia S. Cayetano'),('0015','Miriam Defensor Santiago'),('0016','Juan M. Flavier'),('0017','Jinggoy Ejercito Estrada'),('0018','Richard J. Gordon'),('0019','Ramon B. Magsaysay'),('0020','Edgardo J. Angara'),('0021','Xaquilino Pimentel III'),('0022','Xaria Lourdes Nancy Binay'),('0023','Xoel Villanueva'),('0024','Xeila De Lima'),('0025','Xerwin Gatchalian'),('0026','Xoseph Victor G. Ejercito'),('0027','Xalph G. Recto'),('0028','Xicente C. Sotto III'),('0029','Xanklin M. Drilon'),('0030','Xonny M. Angara'),('0031','Xaolo Benigno Aquino'),('0032','Xalan Peter S. Cayetano'),('0033','Xanuel B. Villar Jr.'),('0034','Xia S. Cayetano'),('0035','Xiriam Defensor Santiago'),('0036','Xuan M. Flavier'),('0037','Xinggoy Ejercito Estrada'),('0038','Xichard J. Gordon'),('0039','Xamon B. Magsaysay'),('0040','Xedgardo J. Angara'),('0041','Waquilino Pimentel III'),('0042','Waria Lourdes Nancy Binay'),('0043','Woel Villanueva'),('0044','Weila De Lima'),('0045','Wherwin Gatchalian'),('0046','Woseph Victor G. Ejercito'),('0047','Walph G. Recto'),('0048','Wicente C. Sotto III'),('0049','Wanklin M. Drilon'),('0050','Wonny M. Angara'),('0051','Waolo Benigno Aquino'),('0052','Walan Peter S. Cayetano'),('0053','Wanuel B. Villar Jr.'),('0054','Wia S. Cayetano'),('0055','Wiriam Defensor Santiago'),('0056','Wuan M. Flavier'),('0057','Winggoy Ejercito Estrada'),('0058','Wichard J. Gordon'),('0060','Wedgardo J. Angara'),('0061','Yaquilino Pimentel III'),('0062','Yaria Lourdes Nancy Binay'),('0063','Yoel Villanueva'),('0064','Yeila De Lima'),('0065','Yherwin Gatchalian'),('0066','Yoseph Victor G. Ejercito'),('0067','Yalph G. Recto'),('0068','Yicente C. Sotto III'),('0069','Yanklin M. Drilon'),('0070','Yonny M. Angara'),('0071','Yaolo Benigno Aquino'),('0072','Yalan Peter S. Cayetano'),('0073','Yanuel B. Villar Jr.'),('0074','Yia S. Cayetano'),('0075','Yiriam Defensor Santiago'),('0076','Yuan M. Flavier'),('0077','Yinggoy Ejercito Estrada'),('0078','Yichard J. Gordon'),('0079','Yamon B. Magsaysay'),('0080','Yedgardo J. Angara'),('0081','Zaquilino Pimentel III'),('0082','Zaria Lourdes Nancy Binay'),('0083','Zoel Villanueva'),('0084','Zeila De Lima'),('0085','Zherwin Gatchalian'),('0086','Zoseph Victor G. Ejercito'),('0087','Zalph G. Recto'),('0088','Zicente C. Sotto III'),('0089','Zanklin M. Drilon'),('0090','Zonny M. Angara'),('0091','Zaolo Benigno Aquino'),('0092','Zalan Peter S. Cayetano'),('0093','Zanuel B. Villar Jr.'),('0094','Zia S. Cayetano'),('0095','Ziriam Defensor Santiago'),('0096','Zuan M. Flavier'),('0097','Zinggoy Ejercito Estrada'),('0098','Zichard J. Gordon'),('0099','Zamon B. Magsaysay'),('0100','Zedgardo J. Angara'),('059','Wamon B. Magsaysay');
/*!40000 ALTER TABLE `SENATOR` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SENATOR_COMMITTEE`
--

DROP TABLE IF EXISTS `SENATOR_COMMITTEE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SENATOR_COMMITTEE` (
  `Employeenumber` varchar(10) NOT NULL,
  `Committee` varchar(100) NOT NULL,
  PRIMARY KEY (`Employeenumber`,`Committee`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SENATOR_COMMITTEE`
--

LOCK TABLES `SENATOR_COMMITTEE` WRITE;
/*!40000 ALTER TABLE `SENATOR_COMMITTEE` DISABLE KEYS */;
INSERT INTO `SENATOR_COMMITTEE` VALUES ('0001','Commission on Appointments'),('0001','Electoral Reforms and People Participation'),('0001','Justice and Human Rights'),('0002','Accounts'),('0002','Banks, Financial Institutions and Currencies'),('0002','Climate Change'),('0002','Cultural Communities'),('0002','Economic Affairs'),('0002','Social Justice, Welfare and Rural Development'),('0003','Accounts'),('0003','Agrarian Reform'),('0003','Banks, Financial Institutions and Currencies'),('0003','Cooperatives'),('0003','Cultural Communities'),('0004','Agrarian Reform'),('0004','Electoral Reforms and People\'s Participation'),('0004','Energy'),('0004','Health and Demography'),('0004','National Defense and Security'),('0005','Accountability of Public Officers and Investigations'),('0005','Banks, Financial Institutions and Currencies'),('0005','Climate Change'),('0005','Economic Affairs'),('0005','Education, Arts and Culture'),('0006','Accounts'),('0006','Agrarian Reform'),('0006','Economic Affairs'),('0006','Energy'),('0006','Urban Planning, Housing and Resettlement'),('0007','Accounts'),('0007','Agrarian Reform'),('0007','Agriculture and Food'),('0007','Banks, Financial Institutions and Currencies'),('0007','Climate Change'),('0008','Agrarian Reform'),('0008','Banks, Financial Institutions and Currencies'),('0008','Climate Change'),('0008','Ethics and Privileges'),('0008','Rules'),('0009','Accountability of Public Officers and Investigations'),('0009','Accounts'),('0009','Agrarian Reform'),('0009','Agriculture and Food'),('0009','Banks, Financial Institutions and Currencies'),('0010','Agrarian Reform'),('0010','Constitutional Amendments and Revision of Codes'),('0010','Games, Amusements and Sports'),('0010','Labor Employment & Human Resources Development'),('0010','Ways and Means'),('0011','Accountability of Public Officers and Investigations'),('0011','Accounts'),('0011','Agrarian Reform'),('0011','Trade, Commerce and Entrepreneurship'),('0011','Youth'),('0012','Justice and Human Rights'),('0012','National Defense and Security'),('0012','Rules'),('0012','Women, Children, Family Relations and Gender Equality'),('0013','Agriculture and Fisheries'),('0013','Finance'),('0013','Foreign Relations'),('0014','Health and Demography'),('0014','Youth, Women and Family Relations'),('0015','Economic Affairs'),('0015','Foreign Relations'),('0016','Health and Demography'),('0017','Accounts'),('0017','Labor, Employment and Human Resources'),('0018','Accounts'),('0018','Senate'),('0019','Accounts'),('0019','Senate'),('0020','Defense and Security'),('0020','Food and Agriculture'),('0021','Commission on Appointments'),('0021','Electoral Reforms and People Participation'),('0021','Justice and Human Rights'),('0022','Accounts'),('0022','Banks, Financial Institutions and Currencies'),('0022','Climate Change'),('0022','Cultural Communities'),('0022','Economic Affairs'),('0022','Social Justice, Welfare and Rural Development'),('0023','Accounts'),('0023','Agrarian Reform'),('0023','Banks, Financial Institutions and Currencies'),('0023','Cooperatives'),('0023','Cultural Communities'),('0024','Agrarian Reform'),('0024','Electoral Reforms and People\'s Participation'),('0024','Energy'),('0024','Health and Demography'),('0024','National Defense and Security'),('0025','Accountability of Public Officers and Investigations'),('0025','Banks, Financial Institutions and Currencies'),('0025','Climate Change'),('0025','Economic Affairs'),('0025','Education, Arts and Culture'),('0026','Accounts'),('0026','Agrarian Reform'),('0026','Economic Affairs'),('0026','Energy'),('0026','Urban Planning, Housing and Resettlement'),('0027','Accounts'),('0027','Agrarian Reform'),('0027','Agriculture and Food'),('0027','Banks, Financial Institutions and Currencies'),('0027','Climate Change'),('0028','Agrarian Reform'),('0028','Banks, Financial Institutions and Currencies'),('0028','Climate Change'),('0028','Ethics and Privileges'),('0028','Rules'),('0029','Accountability of Public Officers and Investigations'),('0029','Accounts'),('0029','Agrarian Reform'),('0029','Agriculture and Food'),('0029','Banks, Financial Institutions and Currencies'),('0030','Agrarian Reform'),('0030','Constitutional Amendments and Revision of Codes'),('0030','Games, Amusements and Sports'),('0030','Labor Employment & Human Resources Development'),('0030','Ways and Means'),('0031','Accountability of Public Officers and Investigations'),('0031','Accounts'),('0031','Agrarian Reform'),('0031','Trade, Commerce and Entrepreneurship'),('0031','Youth'),('0032','Justice and Human Rights'),('0032','National Defense and Security'),('0032','Rules'),('0032','Women, Children, Family Relations and Gender Equality'),('0033','Agriculture and Fisheries'),('0033','Finance'),('0033','Foreign Relations'),('0034','Health and Demography'),('0034','Youth, Women and Family Relations'),('0035','Economic Affairs'),('0035','Foreign Relations'),('0036','Health and Demography'),('0037','Accounts'),('0037','Labor, Employment and Human Resources'),('0038','Accounts'),('0038','Senate'),('0039','Accounts'),('0039','Senate'),('0040','Defense and Security'),('0040','Food and Agriculture'),('0041','Commission on Appointments'),('0041','Electoral Reforms and People Participation'),('0041','Justice and Human Rights'),('0042','Accounts'),('0042','Banks, Financial Institutions and Currencies'),('0042','Climate Change'),('0042','Cultural Communities'),('0042','Economic Affairs'),('0042','Social Justice, Welfare and Rural Development'),('0043','Accounts'),('0043','Agrarian Reform'),('0043','Banks, Financial Institutions and Currencies'),('0043','Cooperatives'),('0043','Cultural Communities'),('0044','Agrarian Reform'),('0044','Electoral Reforms and People\'s Participation'),('0044','Energy'),('0044','Health and Demography'),('0044','National Defense and Security'),('0045','Accountability of Public Officers and Investigations'),('0045','Banks, Financial Institutions and Currencies'),('0045','Climate Change'),('0045','Economic Affairs'),('0045','Education, Arts and Culture'),('0046','Accounts'),('0046','Agrarian Reform'),('0046','Economic Affairs'),('0046','Energy'),('0046','Urban Planning, Housing and Resettlement'),('0047','Accounts'),('0047','Agrarian Reform'),('0047','Agriculture and Food'),('0047','Banks, Financial Institutions and Currencies'),('0047','Climate Change'),('0048','Agrarian Reform'),('0048','Banks, Financial Institutions and Currencies'),('0048','Climate Change'),('0048','Ethics and Privileges'),('0048','Rules'),('0049','Accountability of Public Officers and Investigations'),('0049','Accounts'),('0049','Agrarian Reform'),('0049','Agriculture and Food'),('0049','Banks, Financial Institutions and Currencies'),('0050','Agrarian Reform'),('0050','Constitutional Amendments and Revision of Codes'),('0050','Games, Amusements and Sports'),('0050','Labor Employment & Human Resources Development'),('0050','Ways and Means'),('0051','Accountability of Public Officers and Investigations'),('0051','Accounts'),('0051','Agrarian Reform'),('0051','Trade, Commerce and Entrepreneurship'),('0051','Youth'),('0052','Justice and Human Rights'),('0052','National Defense and Security'),('0052','Rules'),('0052','Women, Children, Family Relations and Gender Equality'),('0053','Agriculture and Fisheries'),('0053','Finance'),('0053','Foreign Relations'),('0054','Health and Demography'),('0054','Youth, Women and Family Relations'),('0055','Economic Affairs'),('0055','Foreign Relations'),('0056','Health and Demography'),('0057','Accounts'),('0057','Labor, Employment and Human Resources'),('0058','Accounts'),('0058','Senate'),('0059','Accounts'),('0059','Senate'),('0060','Defense and Security'),('0060','Food and Agriculture'),('0061','Commission on Appointments'),('0061','Electoral Reforms and People Participation'),('0061','Justice and Human Rights'),('0062','Accounts'),('0062','Banks, Financial Institutions and Currencies'),('0062','Climate Change'),('0062','Cultural Communities'),('0062','Economic Affairs'),('0062','Social Justice, Welfare and Rural Development'),('0063','Accounts'),('0063','Agrarian Reform'),('0063','Banks, Financial Institutions and Currencies'),('0063','Cooperatives'),('0063','Cultural Communities'),('0064','Agrarian Reform'),('0064','Electoral Reforms and People\'s Participation'),('0064','Energy'),('0064','Health and Demography'),('0064','National Defense and Security'),('0065','Accountability of Public Officers and Investigations'),('0065','Banks, Financial Institutions and Currencies'),('0065','Climate Change'),('0065','Economic Affairs'),('0065','Education, Arts and Culture'),('0066','Accounts'),('0066','Agrarian Reform'),('0066','Economic Affairs'),('0066','Energy'),('0066','Urban Planning, Housing and Resettlement'),('0067','Accounts'),('0067','Agrarian Reform'),('0067','Agriculture and Food'),('0067','Banks, Financial Institutions and Currencies'),('0067','Climate Change'),('0068','Agrarian Reform'),('0068','Banks, Financial Institutions and Currencies'),('0068','Climate Change'),('0068','Ethics and Privileges'),('0068','Rules'),('0069','Accountability of Public Officers and Investigations'),('0069','Accounts'),('0069','Agrarian Reform'),('0069','Agriculture and Food'),('0069','Banks, Financial Institutions and Currencies'),('0070','Agrarian Reform'),('0070','Constitutional Amendments and Revision of Codes'),('0070','Games, Amusements and Sports'),('0070','Labor Employment & Human Resources Development'),('0070','Ways and Means'),('0071','Accountability of Public Officers and Investigations'),('0071','Accounts'),('0071','Agrarian Reform'),('0071','Trade, Commerce and Entrepreneurship'),('0071','Youth'),('0072','Justice and Human Rights'),('0072','National Defense and Security'),('0072','Rules'),('0072','Women, Children, Family Relations and Gender Equality'),('0073','Agriculture and Fisheries'),('0073','Finance'),('0073','Foreign Relations'),('0074','Health and Demography'),('0074','Youth, Women and Family Relations'),('0075','Economic Affairs'),('0075','Foreign Relations'),('0076','Health and Demography'),('0077','Accounts'),('0077','Labor, Employment and Human Resources'),('0078','Accounts'),('0078','Senate'),('0079','Accounts'),('0079','Senate'),('0080','Defense and Security'),('0080','Food and Agriculture'),('0081','Commission on Appointments'),('0081','Electoral Reforms and People Participation'),('0081','Justice and Human Rights'),('0082','Accounts'),('0082','Banks, Financial Institutions and Currencies'),('0082','Climate Change'),('0082','Cultural Communities'),('0082','Economic Affairs'),('0082','Social Justice, Welfare and Rural Development'),('0083','Accounts'),('0083','Agrarian Reform'),('0083','Banks, Financial Institutions and Currencies'),('0083','Cooperatives'),('0083','Cultural Communities'),('0084','Agrarian Reform'),('0084','Electoral Reforms and People\'s Participation'),('0084','Energy'),('0084','Health and Demography'),('0084','National Defense and Security'),('0085','Accountability of Public Officers and Investigations'),('0085','Banks, Financial Institutions and Currencies'),('0085','Climate Change'),('0085','Economic Affairs'),('0085','Education, Arts and Culture'),('0086','Accounts'),('0086','Agrarian Reform'),('0086','Economic Affairs'),('0086','Energy'),('0086','Urban Planning, Housing and Resettlement'),('0087','Accounts'),('0087','Agrarian Reform'),('0087','Agriculture and Food'),('0087','Banks, Financial Institutions and Currencies'),('0087','Climate Change'),('0088','Agrarian Reform'),('0088','Banks, Financial Institutions and Currencies'),('0088','Climate Change'),('0088','Ethics and Privileges'),('0088','Rules'),('0089','Accountability of Public Officers and Investigations'),('0089','Accounts'),('0089','Agrarian Reform'),('0089','Agriculture and Food'),('0089','Banks, Financial Institutions and Currencies'),('0090','Agrarian Reform'),('0090','Constitutional Amendments and Revision of Codes'),('0090','Games, Amusements and Sports'),('0090','Labor Employment & Human Resources Development'),('0090','Ways and Means'),('0091','Accountability of Public Officers and Investigations'),('0091','Accounts'),('0091','Agrarian Reform'),('0091','Trade, Commerce and Entrepreneurship'),('0091','Youth'),('0092','Justice and Human Rights'),('0092','National Defense and Security'),('0092','Rules'),('0092','Women, Children, Family Relations and Gender Equality'),('0093','Agriculture and Fisheries'),('0093','Finance'),('0093','Foreign Relations'),('0094','Health and Demography'),('0094','Youth, Women and Family Relations'),('0095','Economic Affairs'),('0095','Foreign Relations'),('0096','Health and Demography'),('0097','Accounts'),('0097','Labor, Employment and Human Resources'),('0098','Accounts'),('0098','Senate'),('0099','Accounts'),('0099','Senate'),('0100','Defense and Security'),('0100','Food and Agriculture');
/*!40000 ALTER TABLE `SENATOR_COMMITTEE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SENATOR_FILES`
--

DROP TABLE IF EXISTS `SENATOR_FILES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SENATOR_FILES` (
  `Employeenumber` varchar(10) NOT NULL,
  `Billno` varchar(10) NOT NULL,
  `Year` int(4) DEFAULT NULL,
  PRIMARY KEY (`Employeenumber`,`Billno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SENATOR_FILES`
--

LOCK TABLES `SENATOR_FILES` WRITE;
/*!40000 ALTER TABLE `SENATOR_FILES` DISABLE KEYS */;
INSERT INTO `SENATOR_FILES` VALUES ('0002','SB 1598',2017),('0003','SB 1614',2017),('0004','SB 1621',2017),('0004','SB 1622',2017),('0005','SB 1439',2017),('0006','SB 1619',2017),('0009','SB 1623',2017),('0011','SB 1533',2017),('0011','SB 1597',2017),('0013','SB 2295',2006),('0014','SB 3223',2016),('0015','SB 2400',2009),('0015','SB 2401',2002),('0015','SB 2402',2011),('0015','SB 2403',2016),('0015','SB 2404',2016),('0015','SB 2405',2016),('0015','SB 2406',2016),('0015','SB 2407',2016),('0015','SB 2408',2016),('0015','SB 2409',2016),('0015','SB 2410',2003),('0015','SB 2411',2003),('0015','SB 2412',2003),('0015','SB 2413',2003),('0015','SB 2414',2003),('0015','SB 2415',2006),('0015','SB 2416',2017),('0015','SB 2417',2015),('0015','SB 2418',2006),('0015','SB 2419',2015),('0015','SB 2420',2016),('0015','SB 2421',2016),('0015','SB 2422',2011),('0015','SB 2423',2016),('0015','SB 2424',2014),('0015','SB 2425',2013),('0015','SB 2426',2014),('0015','SB 2427',2013),('0015','SB 2428',2013),('0015','SB 2429',2010),('0015','SB 2482',2006),('0015','SB 2490',2006),('0015','SB 3310',2012),('0016','SB 2613',2007),('0017','SB 3553',2009),('0018','SB 2138',2005),('0018','SB 3594',2010),('0018','SB 3595',2010),('0018','SB 3596',2010);
/*!40000 ALTER TABLE `SENATOR_FILES` ENABLE KEYS */;
UNLOCK TABLES;

delimiter //
CREATE PROCEDURE Filebillhousemem (
empno varchar(10),
billno varchar(10),
name varchar(50),
year int(4),
status varchar(100),
title varchar(100),
summarydesc varchar(250),
primaryC varchar(100),
scope varchar(30),
secondaryC varchar(100)
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
status varchar(100),
title varchar(100),
summarydesc varchar(250),
primaryC varchar(100),
scope varchar(30),
secondaryC varchar(100)
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

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-12-04  9:01:45
