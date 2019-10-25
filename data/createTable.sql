CREATE DATABASE ocfr;
USE ocfr;

CREATE TABLE people(
	pID int PRIMARY KEY AUTO_INCREMENT,
    firstName varchar(64) NOT NULL,
    lastName varchar(64) NOT NULL,
    dob DATE NOT NULL,
    gender ENUM('M', 'F') NOT NULL,
    email varchar(64),
    wPhone varchar(25),
    mPhone varchar(25),
    address varchar(100),
    city varchar(64),
    state varchar(2),
    zip varchar(10),
    startDate DATE NOT NULL,
    jobTitle varchar(64),
    radioNumber varchar(10),
    stationNumber varchar(10),
    isActive boolean NOT NULL
);

CREATE TABLE certifications(
	cID int PRIMARY KEY AUTO_INCREMENT,
	cName varchar(100),
    cAgency varchar(100),
    expPeriod int
);

CREATE TABLE people_certifications(
	pcID int PRIMARY KEY AUTO_INCREMENT,
	pID int,
	cID int,
  received DATE,
	FOREIGN KEY (pID) REFERENCES people(pID),
  FOREIGN KEY (cID) REFERENCES certifications(cID)
);
