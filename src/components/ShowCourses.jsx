import { useState, useEffect } from "react";
import { Card, Button, Typography, Container, Grid } from "@mui/material";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ShowCourses = () => {
  // State to manage the list of courses, token
  const [courses, setCourses] = useState([]);
  const [token] = useLocalStorage("token", "");

  // Function to fetch courses from the backend
  const fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:3000/admin/courses", {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + token,
        },
      });

      // Parsing the response and updating the courses state
      const data = res.data;
      setCourses(data.courses);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  // useEffect hook to fetch courses when the component mounts
  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    // Container for the ShowCourses component with a maximum width
    <Container maxWidth="lg" className="text-center">
      {/* Heading for the course list */}
      <h2 className="text-3xl font-bold my-6">Course List</h2>
      {/* Grid to display the courses in a card layout */}
      <Grid container spacing={3}>
        {/* Mapping through the courses and displaying each in a grid item */}
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </Grid>
    </Container>
  );
};

export const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  return (
    <Card
      style={{
        margin: 10,
        width: 300,
        minHeight: 300,
        padding: 20,
      }}
    >
      <Typography textAlign={"center"} variant="h5">
        {course.title}
      </Typography>
      <Typography textAlign={"center"} variant="subtitle1">
        {course.description}
      </Typography>
      <img
        src={course.imageLink}
        alt={course.title} // Alt text for accessibility
        style={{ width: "300px", height: "auto" }}
      />
      <Typography
        textAlign={"center"}
        variant="subtitle2"
        color="textSecondary"
      >
        Price: ₹{course.price}
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Button
          variant="contained"
          size="large"
          onClick={() => {
            navigate("/course/" + course._id);
          }}
        >
          Edit
        </Button>
      </div>
    </Card>
  );
};

export default ShowCourses;
