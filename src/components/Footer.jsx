// Importing necessary components, icons, and the Harkirat Singh's icon image from React and Material-UI
import { Container, Grid, Link, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Adjusted size for the animated rocket emoji
const rocketEmoji =
  "https://em-content.zobj.net/source/noto-emoji-animations/344/rocket_1f680.gif";

// Harkirat Singh's icon image link
const harkiratIcon =
  "https://d33g7sdvsfd029.cloudfront.net/subject/2023-01-17-0.17044360120951185.jpg";

// Footer component for displaying social links, thanks message, and a link to Harkirat Singh's profile
const Footer = () => {
  return (
    // Container for the footer with a maximum width and no background color
    <Container maxWidth="lg" className="py-8 mt-40">
      {/* Grid container for aligning items in a row */}
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        {/* GitHub Link */}
        <Grid item>
          {/* GitHub icon with a link to your GitHub repository */}
          <Link
            href="https://github.com/zahid-404/all-assignments/tree/main/week-3/03-course-app-medium"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black"
          >
            <GitHubIcon fontSize="large" />
          </Link>
        </Grid>
        {/* Thanks Message with Harkirat Singh's icon and adjusted size for the animated rocket emoji */}
        <Grid item>
          {/* Thanks message with a larger text size */}
          <Typography variant="body1" className="text-lg flex items-center">
            Thanks to {/* Link to Harkirat Singh's profile */}
            <Link
              href="https://harkirat.classx.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-bold flex items-center"
            >
              <img
                src={harkiratIcon}
                alt="Harkirat Singh"
                className="h-8 w-8 mx-2"
              />
              Harkirat Singh
            </Link>{" "}
            for the amazing guidance!{" "}
            <img
              src={rocketEmoji}
              alt="Rocket Emoji"
              className="h-10 w-10 mx-2"
            />
          </Typography>
        </Grid>
        {/* Twitter Link */}
        <Grid item>
          {/* Twitter icon with a link to your Twitter profile */}
          <Link
            href="https://twitter.com/z495m"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black"
          >
            <TwitterIcon fontSize="large" />
          </Link>
        </Grid>
        {/* LinkedIn Link */}
        <Grid item>
          {/* LinkedIn icon with a link to your LinkedIn profile */}
          <Link
            href="https://www.linkedin.com/in/zahid-mohammad-117579121/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black"
          >
            <LinkedInIcon fontSize="large" />
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

// Exporting the Footer component for use in other parts of the application
export default Footer;
  