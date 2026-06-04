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

INSERT INTO `restaurants` (`id`, `city`, `name`, `category`, `nearest_landmark`, `distance_meters`, `address`, `rating`, `review_summary`, `review_count`) VALUES
(1, 'makkah', 'Al Baik', 'Fast Food', 'Masjid al-Haram', 500, 'Clock Tower Area Makkah', 4.6, 'Popular fast food stop close to the Clock Tower area.', 45000),
(2, 'makkah', 'Al Tazaj', 'Fast Food', 'Masjid al-Haram', 600, 'Jabal Omar Makkah', 4.3, 'Quick grilled meals around the Jabal Omar hotel zone.', 8200),
(3, 'makkah', 'Al Romansiah', 'Arabic', 'Masjid al-Haram', 2100, 'Ibrahim Khalil Road', 4.4, 'Arabic dining option on Ibrahim Khalil Road.', 12000),
(4, 'makkah', 'Hyderabad House', 'Indian', 'Masjid al-Haram', 1800, 'Ajyad Street', 4.2, 'Indian restaurant option for pilgrims staying near Ajyad.', 6500),
(5, 'makkah', 'Al Shorfa Restaurant', 'Arabic', 'Masjid al-Haram', 400, 'Clock Tower View', 4.5, 'Arabic dining with a close Clock Tower location.', 9800),
(6, 'makkah', 'Ojen Restaurant', 'Turkish', 'Masjid al-Haram', 300, 'Jabal Omar Food Court', 4.0, 'Turkish food court option very close to the Haram.', 2100),
(7, 'makkah', 'Farooj Express', 'Fast Food', 'Masjid al-Haram', 500, 'Abraj Al Bait', 3.9, 'Fast food option inside the Abraj Al Bait area.', 3000),
(8, 'makkah', 'Al Deyafa Restaurant', 'International', 'Masjid al-Haram', 800, 'Makkah Towers', 4.2, 'International dining option around Makkah Towers.', 5400),
(9, 'makkah', 'Al Rehab Restaurant', 'Arabic', 'Masjid al-Haram', 1500, 'Ajyad District', 4.1, 'Arabic restaurant option in the Ajyad district.', 3200),
(10, 'makkah', 'Hira Restaurant', 'Asian', 'Masjid al-Haram', 2500, 'Ibrahim Khalil Road', 4.0, 'Asian dining option along Ibrahim Khalil Road.', 4100),
(11, 'makkah', 'Shawarma House', 'Fast Food', 'Masjid al-Haram', 1200, 'Ajyad', 4.3, 'Casual shawarma and fast food option in Ajyad.', 7800),
(12, 'makkah', 'Makkah Turkish Grill', 'Turkish', 'Masjid al-Haram', 1700, 'Ibrahim Khalil Road', 4.4, 'Turkish grill option near Ibrahim Khalil Road hotels.', 5000),
(13, 'makkah', 'KFC Clock Tower', 'Fast Food', 'Masjid al-Haram', 500, 'Clock Tower', 4.2, 'Familiar fast food choice in the Clock Tower area.', 15000),
(14, 'makkah', 'Herfy Restaurant', 'Fast Food', 'Masjid al-Haram', 1000, 'Ajyad Street', 4.1, 'Fast food restaurant serving the Ajyad Street area.', 9000),
(15, 'makkah', 'Al Noor Restaurant', 'Arabic', 'Masjid al-Haram', 2800, 'Aziziyah', 4.0, 'Arabic dining option for pilgrims staying in Aziziyah.', 2700),
(16, 'makkah', 'Baytoti Restaurant', 'Arabic', 'Masjid al-Haram', 700, 'Jabal Omar', 4.3, 'Arabic restaurant option close to Jabal Omar.', 4300),
(17, 'makkah', 'Al Safa Restaurant', 'Indian', 'Masjid al-Haram', 3200, 'Aziziyah', 4.2, 'Indian dining option in the Aziziyah area.', 3800),
(18, 'makkah', 'Karachi Darbar', 'Indian', 'Masjid al-Haram', 2000, 'Ibrahim Khalil Road', 4.5, 'Indian and Pakistani style dining on Ibrahim Khalil Road.', 11000),
(19, 'makkah', 'Al Sabeel Restaurant', 'Arabic', 'Masjid al-Haram', 1400, 'Ajyad', 4.1, 'Arabic restaurant option near Ajyad accommodations.', 2900),
(20, 'makkah', 'Al Azhar Restaurant', 'International', 'Masjid al-Haram', 2300, 'Aziziyah', 4.0, 'International dining option in Aziziyah.', 3600),
(21, 'madinah', 'Al Madina Grill', 'Arabic', 'Al-Masjid an-Nabawi', 600, 'Near Masjid Nabawi', 4.6, 'Arabic grill option close to Masjid Nabawi.', 22000),
(22, 'madinah', 'Al Baik Madinah', 'Fast Food', 'Al-Masjid an-Nabawi', 400, 'Central Madinah', 4.7, 'Popular fast food choice in central Madinah.', 30000),
(23, 'madinah', 'Arabesque Restaurant', 'International', 'Al-Masjid an-Nabawi', 500, 'Madinah Hilton', 4.5, 'International restaurant option around Madinah Hilton.', 8700),
(24, 'madinah', 'Al Romansiah Madinah', 'Arabic', 'Al-Masjid an-Nabawi', 1200, 'Quba Road', 4.4, 'Arabic dining option on Quba Road.', 9200),
(25, 'madinah', 'Hyderabad House Madinah', 'Indian', 'Al-Masjid an-Nabawi', 1500, 'Qurban Area', 4.3, 'Indian restaurant option around the Qurban area.', 6000),
(26, 'madinah', 'Shawarma Classic', 'Fast Food', 'Al-Masjid an-Nabawi', 800, 'Central Area', 4.2, 'Casual shawarma and fast food in the central area.', 11000),
(27, 'madinah', 'Tabaq Restaurant', 'Arabic', 'Al-Masjid an-Nabawi', 900, 'Nabawi Area', 4.3, 'Arabic restaurant option near the Nabawi area.', 5400),
(28, 'madinah', 'Al Quba Restaurant', 'Arabic', 'Al-Masjid an-Nabawi', 1700, 'Quba Mosque Area', 4.4, 'Arabic dining near the Quba Mosque area.', 7200),
(29, 'madinah', 'Al Noor Grill', 'Arabic', 'Al-Masjid an-Nabawi', 2000, 'Qurban Road', 4.1, 'Arabic grill option on Qurban Road.', 4100),
(30, 'madinah', 'Al Madina Kitchen', 'International', 'Al-Masjid an-Nabawi', 1300, 'Central Madinah', 4.2, 'International dining option in central Madinah.', 3800),
(31, 'madinah', 'Turkish House', 'Turkish', 'Al-Masjid an-Nabawi', 700, 'Near Haram', 4.5, 'Turkish dining option near the Haram area.', 6500),
(32, 'madinah', 'Herfy Madinah', 'Fast Food', 'Al-Masjid an-Nabawi', 900, 'Central Area', 4.1, 'Fast food choice in the central Madinah area.', 8000),
(33, 'madinah', 'KFC Madinah', 'Fast Food', 'Al-Masjid an-Nabawi', 500, 'Near Nabawi', 4.3, 'Familiar fast food option near Masjid Nabawi.', 14000),
(34, 'madinah', 'Al Tazaj Madinah', 'Fast Food', 'Al-Masjid an-Nabawi', 600, 'Central Madinah', 4.2, 'Grilled fast food option in central Madinah.', 7600),
(35, 'madinah', 'Al Safa Madinah', 'Indian', 'Al-Masjid an-Nabawi', 1800, 'Quba Road', 4.0, 'Indian dining option on Quba Road.', 2900),
(36, 'madinah', 'Bukhari Restaurant', 'Arabic', 'Al-Masjid an-Nabawi', 1100, 'Qurban Street', 4.3, 'Arabic dining option on Qurban Street.', 5100),
(37, 'madinah', 'Al Madinah Palace Restaurant', 'International', 'Al-Masjid an-Nabawi', 800, 'Hilton Area', 4.6, 'International restaurant option near the Hilton area.', 8800),
(38, 'madinah', 'Shawarma King', 'Fast Food', 'Al-Masjid an-Nabawi', 700, 'Central Area', 4.4, 'Shawarma and fast food option in central Madinah.', 10200),
(39, 'madinah', 'Al Noor Kitchen', 'Arabic', 'Al-Masjid an-Nabawi', 2200, 'Qurban Area', 4.1, 'Arabic kitchen option around the Qurban area.', 3400),
(40, 'madinah', 'Zaitoon Restaurant', 'Indian', 'Al-Masjid an-Nabawi', 1000, 'Nabawi Area', 4.5, 'Indian dining option near the Nabawi area.', 9000);

UPDATE `restaurants`
SET
	`link` = COALESCE(
		`link`,
		CONCAT(
			'https://www.google.com/maps/search/?api=1&query=',
			REPLACE(
				CONCAT(
					`name`,
					' ',
					`address`,
					' ',
					CASE `city` WHEN 'madinah' THEN 'Madinah' ELSE 'Makkah' END
				),
				' ',
				'+'
			)
		)
	),
	`image_url` = COALESCE(
		`image_url`,
		CASE `category`
			WHEN 'Fast Food' THEN 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=900&q=80'
			WHEN 'Arabic' THEN 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80'
			WHEN 'Indian' THEN 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=80'
			WHEN 'Turkish' THEN 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=900&q=80'
			WHEN 'Asian' THEN 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80'
			ELSE 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80'
		END
	);
