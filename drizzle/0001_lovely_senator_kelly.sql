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
