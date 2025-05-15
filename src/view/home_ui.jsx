
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import ThaiBG from './assets/m.jpg'; //พื้นหลัง
import ThaiFlag from './assets/thai.png'; //ธงชาติไทย

export default function WelcomeThailandPage() {
  return (
    <React.Fragment>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          zIndex: -1,
          backgroundColor: '#030303', // Ensures footer stays at the bottom
        }}
      >
        <img
            src={ThaiBG}
            alt="background"
            style={{
              width: '100%',
              height: '100%',
              opacity: 0.3,
              objectFit: 'cover',
            }}
        />
      </Box>
      
          <AppBar sx={{ backgroundColor: "#ff8c00" }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold", textAlign: "start", color: "white" }}>
              Dare2Thai
            </Typography>
            <Button color="inherit" onClick={() => window.location.href = '/'}>หน้าแรก</Button>
            <Button color="inherit">ร้านอาหาร</Button>
            <Button color="inherit">โรงแรม</Button>
            <Button color="inherit">สถานที่ท่องเที่ยว</Button>
            <Button
              color="inherit"
              variant="outlined"
              sx={{
                ml: 2,
                backgroundColor: "white",
                color: "#ff8c00",
                border: "1px solid white",
              }}
              onClick={() => window.location.href = '/login'}
            >
              เข้าสู่ระบบ
            </Button>
          </Toolbar>
              </AppBar>

              <Box
          sx={{
            mt: 10,
            mx: 10,
            py: 10,
            px: 20,
            textAlign: "center",
            backgroundColor: "rgba(249, 255, 197, 0.65)", // Transparent background
          borderRadius: 20,
        }}
      >
        <Typography variant="h4" fontWeight="bold" >
          ยินดีต้อนรับสู่เมืองไทย
        </Typography>

        <Box
          component="img"
          src={ThaiFlag}
          alt="Thai Flag"
          sx={{ width: 150, my: 2 }}
        />
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.15rem",
            lineHeight: 1.9,
            textAlign: "justify",
          }}
        >
          ประเทศไทยมีประวัติศาสตร์ยาวนานหลายพันปี จึงรวมแต่ตั้งประเทศจนถึงปัจจุบันเต็มไปด้วยหลากหลายของวัฒนธรรม
          ประเทศ เช่น อาณาจักรกรุงศรี และอาณาจักรกรุงรัตนโกสินทร์ ตั้งแต่ศตวรรษที่ 18 เป็นต้นมา อาณาจักรไทยแห่งนี้มีเรื่องราวสำคัญหลายประการ
          หลังสุโขทัยเสื่อมลง อาณาจักรอยุธยาได้เริ่มรุ่งเรืองขึ้นมา (พ.ศ. 1893-2310) เป็นศูนย์กลางของการค้าและวัฒนธรรม
          เมื่อกษัตริย์องค์สุดท้ายสิ้นพระชนม์ใน พ.ศ. 2310 พระเจ้าตากสินมหาราชได้สถาปนากรุงธนบุรี ขึ้นเป็นเมืองหลวงแห่งใหม่
          หลังจากนั้น รัชกาลที่ 1 แห่งราชวงศ์จักรีได้สถาปนากรุงเทพมหานคร เป็นเมืองหลวงใหม่ในปี พ.ศ. 2325 ประเทศได้กลายมาเป็นราชอาณาจักรที่มีพระมหากษัตริย์เป็นประมุข
          เกิดขึ้นในปี พ.ศ. 2475 เมื่อมีคณะราษฎร์ได้เปลี่ยนแปลงการปกครองแบบสมบูรณาญาสิทธิราชย์มาเป็นระบอบประชาธิปไตย
          ประเทศไทยมีการพัฒนาในหลากหลายด้าน ทั้งด้านการศึกษา เศรษฐกิจ การท่องเที่ยว และวัฒนธรรม
          ปัจจุบัน ประเทศไทยยังคงเป็นจุดหมายปลายทางที่ได้รับความนิยมของนักท่องเที่ยวจากทั่วโลก ด้วยความหลากหลายทางวัฒนธรรม อาหาร ภาษา ศิลปะ และอากาศ
        </Typography>
      </Box>

      <Box
        sx={{
          mt: 5,
          backgroundColor: "#ff8c00",
          p: 3,
          textAlign: "start",
          position: "relative",
          bottom: 0,
          width: '100vw',
        }}
      >
        <Typography variant="body2" style={{ color: "white" }} >Dare2Thai</Typography>  
        <Typography variant="body1" style={{ color: "white" }} >ติดต่อเราได้ที่ 088-888-8888 johndoegemail.com</Typography>
      </Box>
    </React.Fragment>
  );
}
