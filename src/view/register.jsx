import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Link,
  Grid,
  Paper,
  Avatar,
} from "@mui/material";
import { useNavigate, Link as RouterLink } from "react-router-dom"; // <-- import RouterLink
import ThaiBG from "./assets/m.jpg"; // พื้นหลัง

export default function RegisterPage() {
  const navigate = useNavigate();
  const [preview, setPreview] = useState(null); // <-- เพิ่ม state preview

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        display: "flex",
        top: 0,
        left: 0,
        justifyContent: "center",
        alignItems: "center",
        px: 10,
        py: 10,
        backgroundColor: "#030303",
        width: "100vw",
        height: "100vh",
      }}
    >
      <img
        src={ThaiBG}
        alt="background"
        style={{
          width: "100%",
          height: "100%",
          opacity: 0.3,
          objectFit: "cover",
          position: "absolute",
          zIndex: 0,
        }}
      />

      <Paper
        elevation={8}
        sx={{
          zIndex: 1,
          p: 5,
          display: "flex",
          flexDirection: "column",
          borderRadius: 5,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          maxWidth: 700,
          width: "100%",
        }}
      >
        <Grid container spacing={4} alignItems="center">
          {/* ซ้าย: ฟอร์ม Register */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              fontWeight="bold"
              align="center"
              color="#f57c00"
              gutterBottom
            >
              Register to Dare2Thai
            </Typography>

            <Box component="form">
              <Typography fontWeight="bold" mb={1} textAlign={"left"}>
                Email
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                margin="dense"
                placeholder="Enter your email"
                sx={{
                  borderRadius: 2,
                  backgroundColor: "#fff",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
              />
              <Typography fontWeight="bold" mb={1} textAlign={"left"}>
                UserName
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                margin="dense"
                placeholder="Enter your UserName"
                sx={{
                  borderRadius: 2,
                  backgroundColor: "#fff",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
              />
              <Typography fontWeight="bold" mb={1} textAlign={"left"}>
                Password
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                margin="dense"
                placeholder="Enter your Password"
                sx={{
                  borderRadius: 2,
                  backgroundColor: "#fff",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
              />
              <Typography fontWeight="bold" mb={1} textAlign={"left"}>
                Confirm Password
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                margin="dense"
                placeholder="Confirm your Password"
                sx={{
                  borderRadius: 2,
                  backgroundColor: "#fff",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
              />

              <Typography variant="body2" mt={2} align="center">
                Already have an account?{" "}
                <Link
                  component={RouterLink}
                  to="/login"
                  underline="hover"
                  fontWeight="bold"
                  color="primary"
                >
                  Login
                </Link>
              </Typography>

              <Box mt={3} display="flex" justifyContent="space-between">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#43a047",
                    fontWeight: "bold",
                    px: 4,
                    "&:hover": { backgroundColor: "#388e3c" },
                  }}
                >
                  Register
                </Button>

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#d32f2f",
                    fontWeight: "bold",
                    px: 4,
                    "&:hover": { backgroundColor: "#b71c1c" },
                  }}
                  onClick={() => navigate("/")}
                >
                  Back to Home
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* ขวา: ช่องอัปโหลดรูป */}
          <Grid item xs={12} md={6} textAlign="center">
            <Typography variant="h6" fontWeight="bold" mb={2} color="#f57c00">
              Upload Profile Picture
            </Typography>

            <Avatar
              src={preview}
              sx={{ width: 120, height: 120, margin: "0 auto", mb: 2 }}
            />
            <Button variant="outlined" component="label">
              Choose File
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleImageChange}
              />
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
