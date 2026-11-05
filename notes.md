# HTTP and REST API Notes

## 1. GET /courses

- **Method:** GET
- **Path:** /courses
- **Purpose:** Retrieve the list of available courses.
- **Success Status:** 200 OK
- **Error Status:** 500 Internal Server Error

## 2. POST /enrolments

- **Method:** POST
- **Path:** /enrolments
- **Purpose:** Create a new student enrolment.
- **Request Body:** Student ID and Course ID.
- **Success Status:** 201 Created
- **Error Statuses:**
  - 400 Bad Request: Invalid input.
  - 404 Not Found: Student or course does not exist.
  - 500 Internal Server Error: Server error.