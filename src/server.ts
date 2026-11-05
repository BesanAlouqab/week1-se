import express from "express";

const app = express();

app.use(express.json());

// عرض المساقات
app.get("/courses", (req, res) => {
  res.json([
    { id: 1, name: "Java" },
    { id: 2, name: "Database" },
    { id: 3, name: "Software Engineering" }
  ]);
});

// تسجيل الطالب بمساق
app.post("/enrolments", (req, res) => {
  const { studentId, courseId } = req.body;

  if (
    typeof studentId !== "number" ||
    typeof courseId !== "number" ||
    studentId <= 0 ||
    courseId <= 0
  ) {
    return res.status(400).json({
      message: "Invalid student ID or course ID"
    });
  }

  res.status(201).json({
    message: "Enrolment created successfully",
    studentId,
    courseId
  });
});

export default app;