// Importing necessary components and hooks from React and Material-UI
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Link } from "react-router-dom";

// ShowCourses component for displaying a list of courses
const ShowCourses = () => {
  // State to manage the list of courses
  const [courses, setCourses] = useState([]);

  // Retrieve the token from local storage
  const [token] = useLocalStorage("token", "");

  // Function to fetch courses from the backend
  const fetchCourses = async () => {
    try {
      // Making a GET request to the courses endpoint with the user's token
      const res = await fetch("http://localhost:3000/admin/courses", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + token,
        },
      });

      // Parsing the response and updating the courses state
      const data = await res.json();
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
      {/* Conditionally render a beautiful card if the user is not logged in */}
      {!token && (
        <Card elevation={10} className="w-96 p-8 mx-auto">
          <CardContent>
            <Typography
              variant="h4"
              component="div"
              className="mb-4 text-blue-500"
            >
              Explore Our Courses
            </Typography>
            <Typography variant="body1" color="text.secondary">
              To view our courses and start your learning journey, please{" "}
              <Link to="/login" className="text-blue-500">
                log in
              </Link>{" "}
              or{" "}
              <Link to="/signup" className="text-blue-500">
                sign up
              </Link>
              .
            </Typography>
          </CardContent>
        </Card>
      )}
      {/* Grid to display the courses in a card layout */}
      <Grid container spacing={3}>
        {/* Mapping through the courses and displaying each in a grid item */}
        {courses.map((course) => (
          <Grid item key={course.id} xs={12} md={4}>
            {/* Card for displaying course details */}
            <Card>
              {/* CardMedia for displaying the course image */}
              <CardMedia
                component="img"
                height="140"
                image={course.imageLink}
                alt={course.title}
              />
              {/* CardContent for displaying other course details */}
              <CardContent>
                {/* Title of the course */}
                <Typography gutterBottom variant="h5" component="div">
                  {course.title}
                </Typography>
                {/* Description of the course */}
                <Typography variant="body2" color="text.secondary">
                  {course.description}
                </Typography>
                {/* Price of the course */}
                <Typography variant="body2" color="text.secondary">
                  Price: ₹{course.price}
                </Typography>
                {/* Published status of the course */}
                <Typography variant="body2" color="text.secondary">
                  {course.published ? "Published" : "Not Published"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

// Exporting the ShowCourses component for use in other parts of the application
export default ShowCourses;
