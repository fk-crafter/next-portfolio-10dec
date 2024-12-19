"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useLanguage } from "@/context/LanguageContext";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  TextField,
  Button,
  Box,
  Typography,
  Modal,
  Grid,
  Paper,
} from "@mui/material";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const { isFrench } = useLanguage();

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then(
        () => {
          setShowSuccessModal(true);
          form.current?.reset();
          setTimeout(() => setShowSuccessModal(false), 3000);
        },
        (error) => {
          console.error("Failed to send message:", error.text);
          alert(
            isFrench
              ? "Échec d'envoi, réessayez."
              : "Sending failed, try again."
          );
        }
      );
  };

  return (
    <Box
      id="contact"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 10,
        px: 4,
        backgroundColor: "#0F172A",
        color: "#fff",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          padding: 4,
          maxWidth: "900px",
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(10px)",
          borderRadius: "12px",
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  color: "#E5E7EB",
                  fontWeight: "bold",
                  textAlign: { xs: "center", md: "left" },
                  mb: { xs: 2, sm: 3 },
                }}
              >
                {isFrench ? "Contactez-moi" : "Contact Me"}
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{
                  color: "#F3F4F6",
                  lineHeight: 1.6,
                  textAlign: { xs: "center", md: "left" },
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                  mb: { xs: 1.5, sm: 2 },
                }}
              >
                {isFrench
                  ? "Besoin d'aide ? Parlons de votre projet. Je m'engage à vous répondre dans les plus brefs délais."
                  : "Need help? Let’s talk about your project. I’m committed to responding as soon as possible."}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#CBD5E1",
                  fontStyle: "italic",
                  textAlign: { xs: "center", md: "left" },
                  mb: { xs: 2, sm: 3 },
                }}
              >
                📍 {isFrench ? "Basé à Paris" : "Based in Paris"}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#F3F4F6",
                  textAlign: { xs: "center", md: "left" },
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                }}
              >
                {isFrench
                  ? "Prêt à collaborer ? Ensemble, construisons quelque chose d'exceptionnel !"
                  : "Ready to collaborate? Let’s build something exceptional together!"}
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.form
              ref={form}
              onSubmit={sendEmail}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box display="flex" flexDirection="column" gap={2}>
                <TextField
                  label={isFrench ? "Nom" : "Name"}
                  name="from_name"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      color: "#fff",
                      "& fieldset": { borderColor: "#7b92b4" },
                      "&:hover fieldset": { borderColor: "#9CA3AF" },
                      "&.Mui-focused fieldset": { borderColor: "#7b92b4" },
                    },
                    "& .MuiInputLabel-root": { color: "#9CA3AF" },
                    "& .MuiInputLabel-root.Mui-focused": { color: "#7b92b4" },
                  }}
                />
                <TextField
                  label="Email"
                  type="email"
                  name="from_email"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      color: "#fff",
                      "& fieldset": { borderColor: "#7b92b4" },
                      "&:hover fieldset": { borderColor: "#9CA3AF" },
                      "&.Mui-focused fieldset": { borderColor: "#7b92b4" },
                    },
                    "& .MuiInputLabel-root": { color: "#9CA3AF" },
                    "& .MuiInputLabel-root.Mui-focused": { color: "#7b92b4" },
                  }}
                />
                <TextField
                  label={isFrench ? "Message" : "Message"}
                  name="message"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      color: "#fff",
                      "& fieldset": { borderColor: "#7b92b4" },
                      "&:hover fieldset": { borderColor: "#9CA3AF" },
                      "&.Mui-focused fieldset": { borderColor: "#7b92b4" },
                    },
                    "& .MuiInputLabel-root": { color: "#9CA3AF" },
                    "& .MuiInputLabel-root.Mui-focused": { color: "#7b92b4" },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#1E293B",
                    color: "#E2E8F0",
                    borderRadius: "8px",
                    textTransform: "none",
                    fontWeight: "600",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
                    transition: "all 0.3s ease-in-out",
                    ":hover": {
                      backgroundColor: "#2C3E50",
                      boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.7)",
                    },
                    ":active": {
                      backgroundColor: "#1B2A38",
                      transform: "scale(0.98)",
                    },
                  }}
                >
                  {isFrench ? "Envoyer le message" : "Send Message"}
                </Button>
              </Box>
            </motion.form>
          </Grid>
        </Grid>
      </Paper>

      <AnimatePresence>
        {showSuccessModal && (
          <Modal
            open={showSuccessModal}
            onClose={() => setShowSuccessModal(false)}
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                boxShadow: 24,
                p: 4,
                borderRadius: "12px",
                textAlign: "center",
                color: "#fff",
              }}
            >
              <CheckCircleIcon
                sx={{ color: "green", fontSize: "64px", mb: 2 }}
              />
              <Typography variant="h6">
                {isFrench
                  ? "Message envoyé avec succès !"
                  : "Message successfully sent!"}
              </Typography>
            </Box>
          </Modal>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Contact;
