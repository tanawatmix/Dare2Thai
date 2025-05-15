import React from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Link,
  Grid,
  Paper,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { useNavigate } from "react-router-dom";
import ThaiBG from "./assets/m.jpg"; //พื้นหลัง

export default function LoginPage() {
  const navigate = useNavigate();

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
          backgroundColor: "rgba(255, 255, 255, 0.8)", // เปลี่ยนจาก rgba เป็นทึบแสง
          maxWidth: 700,
          width: "100%",
        }}
      >
        <Grid container spacing={4} alignItems="center">
          {/* ซ้าย: ฟอร์ม login */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              fontWeight="bold"
              align="center"
              color="#f57c00"
              gutterBottom
            >
              Welcome to Dare2Thai
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

              <Typography fontWeight="bold" mt={2} mb={1} textAlign={"left"}>
                Password
              </Typography>
              <TextField
                fullWidth
                type="password"
                variant="outlined"
                margin="dense"
                placeholder="Enter your password"
                sx={{
                  borderRadius: 2,
                  backgroundColor: "#fff",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
              />

              <Typography variant="body2" mt={2} align="center">
                Don't have an account?{" "}
                <Link
                  href="#"
                  underline="hover"
                  fontWeight="bold"
                  color="primary"
                >
                  Register
                </Link>
              </Typography>

              <Box mt={3} display="flex" justifyContent="space-between">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#1976d2",
                    fontWeight: "bold",
                    px: 4,
                    "&:hover": { backgroundColor: "#1565c0" },
                  }}
                >
                  Login
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

          {/* ขวา: ไอคอน + ชื่อ */}
          <Grid item xs={12} md={6} textAlign="center">
            <LanguageIcon sx={{ fontSize: 120, color: "#f57c00" }} />
            <Typography variant="h5" fontWeight="bold" mt={2} color="#f57c00">
              Dare2Thai
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
