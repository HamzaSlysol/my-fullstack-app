CREATE TABLE `flights` (
	`id` int AUTO_INCREMENT NOT NULL,
	`airline` varchar(100) NOT NULL,
	`departure_city` varchar(100) NOT NULL,
	`arrival_city` varchar(100) NOT NULL,
	`departure_time` timestamp NOT NULL,
	`arrival_time` timestamp NOT NULL,
	`fare` decimal(10,2) NOT NULL,
	`seats_available` int NOT NULL DEFAULT 0,
	`rating` decimal(2,1) NOT NULL,
	`booking_link` varchar(2048) NOT NULL,
	`is_active` boolean NOT NULL DEFAULT true,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `flights_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `hotels` (
	`id` int AUTO_INCREMENT NOT NULL,
	`link` varchar(2048),
	`city` varchar(32) NOT NULL,
	`name` varchar(255) NOT NULL,
	`nearest_landmark` varchar(128) NOT NULL,
	`distance_meters` int NOT NULL,
	`rating` varchar(16) NOT NULL,
	`review_count` int NOT NULL DEFAULT 0,
	`review_summary` varchar(255) NOT NULL,
	`price_from` varchar(64),
	`image_url` varchar(512),
	`is_active` boolean NOT NULL DEFAULT true,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `hotels_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `restaurants` (
	`id` int AUTO_INCREMENT NOT NULL,
	`link` varchar(2048),
	`city` varchar(32) NOT NULL,
	`name` varchar(255) NOT NULL,
	`category` varchar(100) NOT NULL,
	`nearest_landmark` varchar(128) NOT NULL,
	`distance_meters` int NOT NULL,
	`address` varchar(255) NOT NULL,
	`rating` decimal(2,1) NOT NULL,
	`review_summary` varchar(255) NOT NULL,
	`review_count` int NOT NULL DEFAULT 0,
	`image_url` varchar(512),
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `restaurants_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`username` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`is_active` boolean NOT NULL DEFAULT true,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_email_unique` UNIQUE(`email`),
	CONSTRAINT `users_username_unique` UNIQUE(`username`)
);
