import * as React from "react";
import styled from "@emotion/styled";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
//import Button from '@mui/material/Button';
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useNavigate } from "react-router-dom";

function ResponsiveAppBar() {
  const [value, setValue] = React.useState<string>("");

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const navigate = useNavigate();

  const toMain = () => {
    navigate(`/`);
  };

  return (
    <AppBar
      position="static"
      sx={{ display: "flex", alignItem: "center", backgroundColor: "#fff" }}
    >
      <Container
        // maxWidth="xl"
        sx={{
          backgroundColor: "#fff",
          borderBottom: "1px solid black",
          height: "6.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          margin: "0",
        }}
      >
        <Toolbar disableGutters>
          <Box
            onClick={toMain}
            component="img"
            src="/../public/mainLogo.png"
            alt="씨네큐 로고 및 메인 페이지로 이동"
            sx={{
              height: "4rem",
              width: "10rem",
            }}
          />
          {/* 탭 메뉴 */}
          <Box
            sx={{
              width: "50%",
              typography: "body1",
              borderBottom: 1,
              // borderColor: '#C39C71',
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <TabContext value={value}>
              <Box>
                <TabList
                  onChange={handleChange}
                  aria-label="navigation tabs"
                  centered
                >
                  <Tab
                    component="a" // 추후 {Movie/BoxOffice}
                    label="영화"
                    value="1"
                    onClick={() => navigate("movie/box-office")}
                  />
                  <Tab
                    component="a" // 추후 {heater/Movie?TheaterCode=1001}
                    label="영화관"
                    value="2"
                  />
                  <Tab
                    component="a" // 추후 {Event/List}
                    label="예매"
                    value="3"
                  />
                  <Tab
                    component="a" // 추후 {Card/List}
                    label="스토어"
                    value="4"
                  />
                </TabList>
              </Box>
              <Box sx={{ display: "flex" }}>
                {/* 영화 탭 내용들 */}
                <NavTabPanel
                  value="1"
                  onClick={() => navigate("movie/box-office")}
                >
                  박스 오피스
                </NavTabPanel>
                <NavTabPanel value="1">최신 개봉작</NavTabPanel>
                <NavTabPanel value="1">상영 예정작</NavTabPanel>
                {/* 영화관 탭 내용들 */}
                <NavTabPanel value="2">서울/경기/인천</NavTabPanel>
                <NavTabPanel value="2">충청</NavTabPanel>
                <NavTabPanel value="2">경상</NavTabPanel>
                <NavTabPanel value="2">작은 영화관</NavTabPanel>
              </Box>
            </TabContext>
          </Box>
          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="툴팁 내용">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <BoxOfficeButton>간편예매</BoxOfficeButton>
              </IconButton>
            </Tooltip>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

const NavTabPanel = styled(TabPanel)`
  padding: 0;
  font-size: 0.8rem;
  color: #888889;

  &:not(:last-of-type) {
    padding-left: 1rem;
  }
`;

// const BoxOfficeButton = styled(Button)`
//   background-color: #ca141e;
//   color: #fff;
//   width: 115px;
//   height: 39px;
//   border-radius: 0.35rem;
// `;
