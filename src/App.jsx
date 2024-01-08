// Import React components and styling utilities
import { Outlet } from "react-router-dom"; // Outlet provides a placeholder for nested route components
import Header from "./components/Header"; // Header component for displaying the application header

// Functional component representing the main structure of the application
const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

// Export the App component as the default export for use in other parts of the application
export default App;
