CREATE TABLE `message` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`authorId` varchar(256),
	`content` varchar(500),
	`createdAt` timestamp DEFAULT (now()),
	`updatedAt` timestamp ON UPDATE CURRENT_TIMESTAMP
);
