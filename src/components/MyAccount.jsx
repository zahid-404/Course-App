import { Container, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useLocalStorage } from "@uidotdev/usehooks";

const MyAccount = () => {
  const [token] = useLocalStorage("token", "");
  const [admin, setAdmin] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/admin/me", {
      headers: { Authorization: "Bearer " + token },
    });
    const data = response.data;
    const admin = data.username;
    setAdmin(admin);
  };

  return (
    <Container
      maxWidth="lg"
      className="flex items-center justify-center h-screen bg-gradient-to-b from--500 via-red-700 to-red-900 text-white"
    >
      {/* Main content of the MyAccount page */}
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          {`Welcome ${admin} to Your Account`}
        </h1>
        {/* Description */}
        <Typography className="text-lg mb-8 text-gray-800">
          Create the best courses and share your knowledge with the world! Our
          website is the best place creating courses it.
        </Typography>
        {/* Button to navigate to the Create Course page */}
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/about"
        >
          Create a Course
        </Button>
      </div>
    </Container>
  );
};

export default MyAccount;
