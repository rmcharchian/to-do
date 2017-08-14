CREATE TABLE tasks (
    id serial PRIMARY KEY,
    task VARCHAR(200) NOT NULL,
    );
    
SELECT * FROM tasks;    
    
 INSERT INTO tasks (task)
 VALUES
('Feed the children'),
('Feed the dog');