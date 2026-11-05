-- 1. Display all users
SELECT * FROM users;

-- 2. Display all courses
SELECT * FROM courses;

-- 3. Display all enrolments
SELECT * FROM enrolments;

-- 4. Display all submissions
SELECT * FROM submissions;

-- 5. Join users with their enrolments
SELECT
    users.full_name,
    courses.title,
    enrolments.enrolled_at
FROM enrolments
JOIN users ON enrolments.user_id = users.id
JOIN courses ON enrolments.course_id = courses.id;
-- 6. Count enrolments for each course
SELECT
    courses.title,
    COUNT(enrolments.id) AS total_enrolments
FROM courses
LEFT JOIN enrolments ON courses.id = enrolments.course_id
GROUP BY courses.id, courses.title;

-- 7. Calculate average submission score for each course
SELECT
    courses.title,
    AVG(submissions.score) AS average_score
FROM courses
JOIN submissions ON courses.id = submissions.course_id
GROUP BY courses.id, courses.title;

-- 8. Create an index on user_id in enrolments
CREATE INDEX idx_enrolments_user_id
ON enrolments(user_id);

-- 9. Find submissions with scores above 80
SELECT *
FROM submissions
WHERE score > 80;

-- 10. Explain the query execution plan
EXPLAIN
SELECT *
FROM enrolments
WHERE user_id = 1;