import React from "react";
import { Container, Typography, CssBaseline, Paper, Box } from "@mui/material";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <Container component="main" maxWidth="100vw">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <CssBaseline />
        <Paper elevation={3} component={Box} p={3}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            alignSelf="center"
          >
            Contacto
          </Typography>
          <ContactForm />
        </Paper>
      </Box>
    </Container>
  );
};

export default ContactPage;
