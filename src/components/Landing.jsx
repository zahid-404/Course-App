import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Modal } from "@mui/material";
import { useLocalStorage } from "@uidotdev/usehooks";

const Landing = () => {
  const BASE_URL = process.env.BASE_URL;
  const [token] = useLocalStorage("token", "");
  const isLoggedIn = !!token;
  const [showModal, setShowModal] = useState(false);
  const [isBackendRunning, setIsBackendRunning] = useState(false);

  const handleCheckBackend = async () => {
    try {
      // Replace "your-backend-url" with your actual backend URL
      const response = await fetch(BASE_URL);
      const isRunning = response.ok;
      setIsBackendRunning(isRunning);
    } catch (error) {
      setIsBackendRunning(false);
    } finally {
      setShowModal(true);
    }
  };

  useEffect(() => {
    handleCheckBackend();
  }, []);

  return (
    <Container
      maxWidth="lg"
      className="flex items-center justify-center h-screen text-white"
    >
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome to the Course Uploader
        </h1>
        <p className="text-lg mb-8 text-gray-800">
          Share your knowledge by uploading your courses.
        </p>
        {isLoggedIn ? (
          <>
            <h1>Hello, User!</h1>
          </>
        ) : (
          <>
            <div className="space-x-4">
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/signup"
              >
                Sign Up
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleCheckBackend}
              >
                Login
              </Button>
            </div>
          </>
        )}
      </div>

      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="text-center p-8 rounded-lg shadow-lg"
          style={{
            minWidth: "300px",
            backgroundColor: "#f0f4fc",
            border: "2px solid #90a4ae",
            borderRadius: "16px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h2>
            {isBackendRunning
              ? "🚀 The backend is running!"
              : "😟 The backend is not running. Please check the URL."}
          </h2>
          {isBackendRunning ? (
            <p>
              Your backend is up and running smoothly. ✅ | Click anywhere to
              close. ❌
            </p>
          ) : (
            <p>
              Make sure the backend server is running | Click anywhere to close.
              ❌
            </p>
          )}
          <Button
            variant="contained"
            color="primary"
            component="a"
            href={BASE_URL}
            target="_blank"
          >
            Go to Backend
          </Button>
        </div>
      </Modal>
    </Container>
  );
};

export default Landing;
