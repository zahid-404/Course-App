// Importing necessary components and hooks from Material-UI and React
import {
  Container,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

// ErrorComponent for displaying error details and providing a link to the homepage
const ErrorComponent = () => {
  // Using the useRouteError hook to get information about the error from the route
  const err = useRouteError();

  return (
    // Container for the error component with a maximum width
    <Container
      maxWidth="lg"
      className="flex items-center justify-center h-screen"
    >
      {/* Card for displaying the error information */}
      <Card elevation={10} className="w-96">
        {/* Card content with error details */}
        <CardContent className="text-center">
          {/* Heading with the error status */}
          <Typography
            variant="h4"
            component="div"
            className="mb-4 text-red-500"
          >
            Error {err.status}
          </Typography>
          {/* Body text with the error status text */}
          <Typography variant="body1" className="mb-4">
            {err.statusText}
          </Typography>

          {/* Button to navigate to the homepage */}
          <Button component={Link} to="/" variant="contained" color="primary">
            Go to Homepage
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

// Exporting the ErrorComponent for use in other parts of the application
export default ErrorComponent;
