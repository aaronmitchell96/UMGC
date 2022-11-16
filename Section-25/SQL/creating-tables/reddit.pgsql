-- CREATE TABLE post (
--     title TEXT,
--     username TEXT,
--     link TEXT
-- )
DROP DATABASE reddit_db;
CREATE DATABASE reddit_db;
\c reddit_db;

CREATE TABLE subreddits (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users,
    name VARCHAR(15) NOT NULL,
    description TEXT,
    subscribers INTEGER CHECK (subscribers > 0) DEFAULT 1,
    is_private BOOLEAN DEFAULT false
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(15) UNIQUE NOT NULL,
    password VARCHAR(20) NOT NULL
);

INSERT INTO users (username,password)
VALUES
('graylady', 'aslkslo'),
('stevies-chicks','ifjrikjfvn');

-- INSERT INTO subreddits (name,user_id)
-- VALUES 
-- ('chickens',2),
-- ('waterlovers',1);