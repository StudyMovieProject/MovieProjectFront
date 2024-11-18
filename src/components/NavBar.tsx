import * as React from 'react';
import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
//import Button from '@mui/material/Button';
import Tab, { TabProps } from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useNavigate } from 'react-router-dom';

const Tabs = styled(Tab) <TabProps>`
  color: black;
  border: black;
  outline-color: black;
  text-decoration: black;
`;

function ResponsiveAppBar() {

  //const [value, setValue] = React.useState<string | undefined>(undefined);
  const [value, setValue] = React.useState<string>('1');
  // const [tabValues, setTabValues] = React.useState<{ left: string; right: string }>({
  //   left: '1', // 왼쪽 탭의 초기 값
  //   right: '4', // 오른쪽 탭의 초기 값
  // });

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const navigate = useNavigate();

  const toMain = () => {
    navigate(`/`);
  };

  return (
    <>
      <AppBar position="static" elevation={0} sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#F3EEEA', }}>
        <Container
          // maxWidth="xl"
          sx={{
            height: '6.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            margin: '0',
          }}
        >
          <Toolbar disableGutters>
            <Box
              sx={{
                width: '50%',
                typography: 'body1',
                borderBottom: 1,
                // borderColor: '#C39C71',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <TabContext value={value || ''}>
                <Box>
                  <TabList onChange={handleChange} aria-label="navigation tabs" centered>
                    <Tabs
                      component="a" // 추후 {Movie/BoxOffice}
                      label="영화"
                      //value="1"
                      value={value || false}
                    />

                    <Tabs
                      component="a" // 추후 {heater/Movie?TheaterCode=1001}
                      label="극장"
                      //value="2"
                      value={value || false}
                    />
                    <Tabs
                      component="a" // 추후 {Event/List}
                      label="예매"
                      //value="3"
                      value={value || false}
                    />
                  </TabList>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  {/* 영화 탭 내용들 */}
                  <NavTabPanel value="1">박스 오피스</NavTabPanel>
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
            <Box
              onClick={toMain}
              component="img"
              src="/../public/mainLogo.png"
              alt="씨네큐 로고 및 메인 페이지로 이동"
              sx={{
                height: '4rem',
                width: '10rem',
              }}
            />
            <Box
              sx={{
                width: '50%',
                typography: 'body1',
                borderBottom: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <TabContext value={value || ''}>
                <Box>
                  <TabList onChange={handleChange} aria-label="navigation tabs" centered>
                    <Tabs
                      component="a" // 추후 {Movie/BoxOffice}
                      label="스토어"
                      //value="4"
                      value={value || false}
                    />
                    <Tabs
                      component="a" // 추후 {heater/Movie?TheaterCode=1001}
                      label="고객센터"
                      //value="5"
                      value={value || false}
                    />
                    <Tabs
                      component="a" // 추후 {Event/List}
                      label="혜택"
                      //value="6"
                      value={value || false}
                    />
                  </TabList>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <NavTabPanel value="4">팝콘티켓</NavTabPanel>
                  <NavTabPanel value="5">문의 게시판</NavTabPanel>
                  <NavTabPanel value="6">카드</NavTabPanel>
                </Box>

              </TabContext>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
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
