CREATE TABLE todos (
	id int AUTO_INCREMENT NOT NULL,
	description varchar(255),
	createdAt timestamp NOT NULL,
	PRIMARY KEY(id));
    
CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(100),
	devoured boolean DEFAULT false,
	PRIMARY KEY (id)
);