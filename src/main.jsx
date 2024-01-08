// Import styles and ReactDOM for rendering React components.
import "./index.css";
import ReactDOM from "react-dom/client";

// Import routing utilities from react-router-dom.
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import components for different pages.
import App from "./App";
import Landing from "./components/Landing";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import CreateCourse from "./components/CreateCourse";
import ShowCourses from "./components/ShowCourses";
import Error from "./components/Error";
import MyAccount from "./components/MyAccount";
import EditCourse from "./components/EditCourse";

// Define the application's routes using createBrowserRouter from react-router-dom.
const appRouter = createBrowserRouter([
  {
    // Root route
    path: "/",
    element: <App />, // Root component of the application
    children: [
      {
        // Landing page route
        path: "/",
        element: <Landing />,
      },
      {
        // User registration route
        path: "/signup",
        element: <Signup />,
      },
      {
        // Login page route
        path: "/login",
        element: <Login />,
      },
      {
        // About page route
        path: "/about",
        element: <CreateCourse />,
      },
      {
        // My account page route
        path: "/me",
        element: <MyAccount />,
      },
      {
        // Courses page route
        path: "/courses",
        element: <ShowCourses />,
      },
      {
        // Courses page route
        path: "/courses/:courseId",
        element: <EditCourse />,
      },
    ],
    errorElement: <Error />, // Error page component for displaying errors
  },
]);

// Create a root React DOM node for rendering the application.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application using RouterProvider and the defined routes.
root.render(<RouterProvider router={appRouter} />);