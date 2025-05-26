import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
  Drawer,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import pic from "./assets/m.jpg";

const dummyPosts = [
  {
      id: 1,
      title: "ร้านตำแซ่บ กรุงเทพ",
      type: "ร้านอาหาร",
      province: "กรุงเทพ",
      image: pic,
    },
    {
      id: 2,
      title: "โรงแรมหรู เชียงใหม่",
      type: "โรงแรม",
      province: "เชียงใหม่",
      image: pic,
    },
    {
      id: 3,
      title: "จุดชมวิวดอยสุเทพ เชียงใหม่",
      type: "สถานที่ท่องเที่ยว",
      province: "เชียงใหม่",
      image: pic,
    },
    {
      id: 4,
      title: "ร้านข้าวมันไก่ เจ้าเด็ด กรุงเทพ",
      type: "ร้านอาหาร",
      province: "กรุงเทพ",
      image: pic,
    },
    {
      id: 5,
      title: "ที่พักติดแม่น้ำ เชียงใหม่",
      type: "โรงแรม",
      province: "เชียงใหม่",
      image: pic,
    },
    {
      id: 6,
      title: "ที่พักติดแม่น้ำ เชียงใหม่",
      type: "ร้านอาหาร",
      province: "เชียงใหม่",
      image: pic,
    },
    {
      id: 7,
      title: "ที่พักติดแม่น้ำ เชียงใหม่",
      type: "โรงแรม",
      province: "เชียงใหม่",
      image: pic,
    },
    {
      id: 8,
      title: "ที่พักติดแม่น้ำ สมุทรสาคร",
      type: "ร้านอาหาร",
      province: "สมุทรสาคร",
      image: pic,
    },
    {
      id: 9,
      title: "ที่พักติดแม่น้ำ กรุงเทพ",
      type: "ร้านอาหาร",
      province: "กรุงเทพ",
      image: pic,
    },
    {
      id: 10,
      title: "ที่พักติดแม่น้ำ เชียงใหม่",
      type: "โรงแรม",
      province: "เชียงใหม่",
      image: pic,
    },
    {
      id: 11,
      title: "ที่พักติดแม่น้ำ เชียงใหม่",
      type: "โรงแรม",
      province: "เชียงใหม่",
      image: pic,
    },
  ];

export default function PostList() {
  const [openFilter, setOpenFilter] = useState(false);
  const [type, setType] = useState("ร้านอาหาร");
  const [province, setProvince] = useState("");

  const provinces = Array.from(
    new Set(dummyPosts.map((post) => post.province))
  );

  const filteredPosts = dummyPosts.filter(
    (post) =>
      post.type === type && (province === "" || post.province === province)
  );

  return (
    <Box>
      <AppBar sx={{ backgroundColor: "#ff8c00" }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              textAlign: "start",
              color: "white",
            }}
          >
            Dare2Thai
          </Typography>
          <Button color="inherit" onClick={() => (window.location.href = "/")}>
            หน้าแรก
          </Button>
          <Button
            color="inherit"
            onClick={() => (window.location.href = "/Store")}
          >
            ร้านอาหาร
          </Button>
          <Button
            color="inherit"
            onClick={() => (window.location.href = "/Hotel")}
          >
            โรงแรม
          </Button>
          <Button
            color="inherit"
            onClick={() => (window.location.href = "/place")}
          >
            สถานที่ท่องเที่ยว
          </Button>
          <Button
            color="inherit"
            variant="outlined"
            sx={{
              ml: 2,
              backgroundColor: "white",
              color: "#ff8c00",
              border: "1px solid white",
            }}
            onClick={() => (window.location.href = "/login")}
          >
            เข้าสู่ระบบ
          </Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 6, mx: 10 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Button startIcon={<AddIcon />} variant="outlined">
            โพส
          </Button>
          <IconButton onClick={() => setOpenFilter(!openFilter)}>
            <SearchIcon />
          </IconButton>
        </Box>

        <Drawer
          anchor="right"
          open={openFilter}
          onClose={() => setOpenFilter(false)}
        >
          <Box sx={{ width: 300, p: 2 }}>
            <Typography variant="h6">เลือก Tag</Typography>
            <InputLabel sx={{ mt: 2 }}>ประเภทโพส</InputLabel>
            <FormControl fullWidth sx={{ mt: 2 }}>
              <Select value={type} onChange={(e) => setType(e.target.value)}>
                <MenuItem value="ร้านอาหาร">ร้านอาหาร</MenuItem>
                <MenuItem value="โรงแรม">โรงแรม</MenuItem>
                <MenuItem value="สถานที่ท่องเที่ยว">สถานที่ท่องเที่ยว</MenuItem>
              </Select>
            </FormControl>
            <InputLabel sx={{ mt: 2 }}>จังหวัด</InputLabel>
            <FormControl fullWidth sx={{ mt: 2 }}>
              <Select
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                displayEmpty
              >
                <MenuItem value="">ทั้งหมด</MenuItem>
                {provinces.map((p) => (
                  <MenuItem key={p} value={p}>
                    {p}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Drawer>

        <Grid container spacing={5}>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={post.id}>
                <Card sx={{ height: "100%" }}>
                  <CardMedia
                    component="img"
                    image={post.image}
                    alt={post.title}
                    sx={{ height: 180, objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      {post.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography align="center">
                ไม่พบโพสต์ที่ตรงกับเงื่อนไข
              </Typography>
            </Grid>
          )}
        </Grid>
      </Box>

      <Box
        sx={{
          mt: 5,
          backgroundColor: "#ff8c00",
          p: 3,
          textAlign: "start",
          position: "relative",
          bottom: 0,
          width: "100vw",
        }}
      >
        <Typography variant="body2" style={{ color: "white" }}>
          Dare2Thai
        </Typography>
        <Typography variant="body1" style={{ color: "white" }}>
          ติดต่อเราได้ที่ 088-888-8888 johndoegemail.com
        </Typography>
      </Box>
    </Box>
  );
}
