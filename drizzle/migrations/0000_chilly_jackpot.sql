CREATE TABLE `post` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`authorId` varchar(256),
	`message` varchar(500),
	`createdAt` timestamp DEFAULT (now()),
	`updatedAt` timestamp
);
