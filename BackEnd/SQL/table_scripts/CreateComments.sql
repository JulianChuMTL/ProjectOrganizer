USE planme_schema;

DROP TABLE IF EXISTS Comments;

CREATE TABLE Comments (
	ID INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    Author INT UNSIGNED,
    Thread INT UNSIGNED NOT NULL,
    Content VARCHAR(1000),
    Posted TIMESTAMP,
    FOREIGN KEY(Author) REFERENCES Users(ID),
    FOREIGN KEY(Thread) REFERENCES Threads(ID) ON DELETE CASCADE
);