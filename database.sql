-- Copy query into SQL to set up Database & test

CREATE TABLE "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" varchar(255) NOT NULL UNIQUE,
	"password" varchar(255) NOT NULL
);


CREATE TABLE "ingredients" (
	"id" serial PRIMARY KEY NOT NULL,
	"food_name" varchar(255) NOT NULL,
	"expiration_date" DATE NOT NULL,
	"status" varchar(255) NOT NULL DEFAULT 'storage',
	"user_id" INT REFERENCES "user" NOT NULL,
	"food_type_id" int REFERENCES "food_type" NOT NULL,
	"location_id" int REFERENCES "location" NOT NULL
);


CREATE TABLE "location" (
	"id" serial PRIMARY KEY NOT NULL,
	"location" varchar(255) NOT NULL
);



CREATE TABLE "food_type" (
	"id" serial PRIMARY KEY  NOT NULL,
	"type" varchar(255) NOT NULL
);


INSERT INTO "location" ("location")
VALUES 
('fridge'),
('freezer'),
('pantry'),
('fresh');


INSERT INTO "food_type" ("type")
VALUES 
('fruit'),
('vegetables'),
('legumes'),
('grains'),
('processed'),
('nuts & seeds');

