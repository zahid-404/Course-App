import {
  Container,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Switch,
  Alert,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";
import axios from "axios";

const CreateCourse = () => {
  const BASE_URL = process.env.BASE_URL;
  // State to manage course details
  const [courseDetails, setCourseDetails] = useState({
    title: "",
    description: "",
    price: "",
    imageLink: "",
    published: false,
  });

  // State to manage the visibility of the success/error alert
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [error, setError] = useState("");

  // Retrieve the token from local storage
  const [token] = useLocalStorage("token", "");
  // Condition to check if the user is logged in
  const isLoggedIn = !!token;

  // Function to handle changes in input fields
  const handleChange = (field, value) => {
    setCourseDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  // Function to handle course creation
  const handleCreateCourse = async () => {
    try {
      await axios.post(`${BASE_URL}/admin/courses`, courseDetails, {
        headers: { Authorization: "Bearer " + token },
      });
      // Show the success alert
      setShowSuccessAlert(true);

      // Clear the text fields in the UI
      setCourseDetails({
        title: "",
        description: "",
        price: "",
        imageLink: "",
        published: false,
      });

      // Hide the success alert after a certain duration (e.g., 1000 milliseconds)
      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 1000);
    } catch (error) {
      // Handling errors during course creation
      setError(
        error?.response?.data?.message ??
          "An error occurred during creating course. Please try again."
      );
      // hiding error alert
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  return (
    <Container
      maxWidth="lg"
      className="flex items-center justify-center h-screen"
    >
      {/* Card for housing the course creation form */}
      <Card elevation={10} className="w-96">
        {/* Card content */}
        <CardContent className="text-center">
          {/* Conditionally render the success alert */}
          {showSuccessAlert && (
            <Alert severity="success" color="info">
              Course created successfully!
            </Alert>
          )}

          {/* Conditionally render course creation error alert */}
          {error && (
            <Alert severity="error" color="error">
              {error}
            </Alert>
          )}

          {/* Section for creating a new course */}
          <Typography
            variant="h4"
            component="div"
            className="mb-4 text-blue-500"
          >
            Create a New Course
          </Typography>

          {/* Check if the user is logged in before rendering the form */}
          {isLoggedIn ? (
            <>
              {/* Text field for entering the course title */}
              <TextField
                label="Title"
                variant="outlined"
                fullWidth
                className="mb-4"
                value={courseDetails.title}
                onChange={(e) => handleChange("title", e.target.value)}
              />
              {/* Text field for entering the course description */}
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                className="mb-4"
                value={courseDetails.description}
                onChange={(e) => handleChange("description", e.target.value)}
              />
              {/* Text field for entering the course price */}
              <TextField
                label="Price"
                type="number"
                variant="outlined"
                fullWidth
                className="mb-4"
                value={courseDetails.price}
                onChange={(e) => handleChange("price", e.target.value)}
              />
              {/* Text field for entering the image link of the course */}
              <TextField
                label="Image Link"
                variant="outlined"
                fullWidth
                className="mb-4"
                value={courseDetails.imageLink}
                onChange={(e) => handleChange("imageLink", e.target.value)}
              />
              {/* Switch for toggling the course publication status */}
              <div className="flex items-center justify-between mb-4">
                <Typography variant="body1">Published</Typography>
                <Switch
                  color="primary"
                  onChange={(e) => handleChange("published", e.target.checked)}
                />
              </div>
              {/* Button for creating the course */}
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleCreateCourse}
              >
                Create Course
              </Button>
            </>
          ) : (
            <Typography className="text-red-500">
              To create a course, please{" "}
              <Link className="text-blue-500" to="/login">
                log in
              </Link>{" "}
              or{" "}
              <Link className="text-blue-500" to="/signup">
                sign up
              </Link>
              .
            </Typography>
          )}

          {/* Additional space */}
          <Typography className="mt-4 text-gray-600"></Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CreateCourse;
