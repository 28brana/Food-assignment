import React from "react";
import { Container, Grid, Stack, Typography } from "@mui/material";
import Header from "../component/Header";

const AboutUsPage = () => {
  return (
    <>
      <Header />
      <Stack
            alignItems="center"
            justifyContent="center"
            height="100%"
            width="100%"
            sx={{ color: "#ffffff" }}
            py={5}
        >
            <Typography variant="h5" gutterBottom>
                About 👋
            </Typography>
        </Stack>
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4} color={'white'}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Personal Summary
            </Typography>
            <Typography variant="body1" paragraph>
              I am Bharat Rana, originally from Amritsar, Punjab, with 2 years
              of experience as a software engineer. My expertise lies in
              frontend development using technologies like React.js, Next.js,
              HTML/CSS, Tailwind CSS, and Material-UI. On the backend, I have
              proficiency in Node.js, Express.js, Redis, MongoDB, and MySQL. I
              also have experience with AWS services (S3, SNS, SQS, Lambda),
              Docker, Kafka, Git, Github, Socket.io, and WebRTC.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ mt: 4 }} color={'white'}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Assignment Summary
            </Typography>
            <Typography variant="body1" paragraph>
              For the assignment, I utilized technologies such as Redux for
              state management, React.js for frontend development, and Material-UI
              for UI components. The project included creating dynamic UIs,
              handling API calls, and integrating components effectively using
              modern frontend practices. This setup ensured a scalable and
              efficient solution for managing and displaying food-related data
              fetched from external APIs.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AboutUsPage;
