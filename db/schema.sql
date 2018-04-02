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

CREATE TABLE status (
	id 	 INT 				 NOT NULL AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE jobsearch_detail (
	id 					 INT 					AUTO_INCREMENT,
	company 		 VARCHAR(20) 	NOT NULL,
	position 		 VARCHAR(20),
	salary 			 INT(10),
	location 		 VARCHAR(20),
	link 				 VARCHAR(100),
	contact 		 VARCHAR(20),
	referral 		 VARCHAR(20),
	created_time DATETIME,
	updated_time DATETIME,
	PRIMARY KEY (id)
);

CREATE TABLE status_history (
	id 									INT AUTO_INCREMENT,
	jobsearch_id 				INT(5),
	status_id INT(5),
	action_date 				DATETIME,
	response_date 			DATETIME,
	PRIMARY KEY (id)
)

---------------------------------------------

CREATE TABLE `users` (
	`id` int(5) NOT NULL AUTO_INCREMENT,
	`username` varchar(50) NOT NULL UNIQUE,
	`password` varchar(100) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `jobsearch` (
	`id` int(5) NOT NULL AUTO_INCREMENT,
	`user_id` int(5) NOT NULL,
	`jobsearch_detail_id` int(5) NOT NULL,
	`status_history_id` int(5) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `status` (
	`id` int(5) NOT NULL AUTO_INCREMENT,
	`name` varchar(20) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `jobsearch_detail` (
	`id` int(5) NOT NULL AUTO_INCREMENT,
	`company` varchar(20) NOT NULL,
	`position` varchar(20),
	`salary` int(10) NOT NULL,
	`location` varchar(20),
	`link` varchar(100),
	`contact` varchar(20),
	`referral` varchar(20),
	`created_time` DATETIME NOT NULL,
	`updated_time` DATETIME NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `status_history` (
	`id` int(5) NOT NULL AUTO_INCREMENT,
	`jobsearch_id` int(5) NOT NULL,
	`status_id` int(5) NOT NULL,
	`action_time` DATETIME NOT NULL,
	`response_time` DATETIME NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `users` ADD CONSTRAINT `users_fk0` FOREIGN KEY (`id`) REFERENCES `jobsearch`(`user_id`);

ALTER TABLE `jobsearch` ADD CONSTRAINT `jobsearch_fk0` FOREIGN KEY (`jobsearch_detail_id`) REFERENCES `jobsearch_detail`(`id`);

ALTER TABLE `status_history` ADD CONSTRAINT `status_history_fk0` FOREIGN KEY (`jobsearch_id`) REFERENCES `jobsearch`(`id`);

ALTER TABLE `status_history` ADD CONSTRAINT `status_history_fk1` FOREIGN KEY (`status_id`) REFERENCES `status`(`id`);
