CREATE TABLE users (
	id       INT          NOT NULL AUTO_INCREMENT,
	username VARCHAR(50)  NOT NULL,
	password VARCHAR(255) NOT NULL,
	PRIMARY KEY (id),
	UNIQUE KEY  (username)
);

CREATE TABLE jobsearch (
	id       						INT    NOT NULL AUTO_INCREMENT,
	user_id  						INT(5) NOT NULL,
	jobsearch_detail_id INT(5) NOT NULL,
	jobsearch_status_id INT(5) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE jobsearch_status (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE jobsearch_detail (
	id INT AUTO_INCREMENT,
	company VARCHAR(20) NOT NULL,
	position VARCHAR(20),
	salary INT(10),
	location VARCHAR(20),
	link VARCHAR(100),
	contact VARCHAR(20),
	referral VARCHAR(20),
	created_time DATETIME,
	updated_time DATETIME,
	PRIMARY KEY (id)
);