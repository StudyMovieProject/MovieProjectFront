import * as React from 'react';
import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

function ResponsiveAppBar() {
  const [value, setValue] = React.useState<string>('');

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  function handleOpenUserMenu(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
    throw new Error('Function not implemented.');
  }

  return (
    <AppBar position="static" sx={{ display: 'flex', alignItem: 'center', backgroundColor: '#fff' }}>
      <Container
        // maxWidth="xl"
        sx={{
          backgroundColor: '#fff',
          borderBottom: '1px solid black',
          height: '6.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          margin: '0',
        }}
      >
        <Toolbar disableGutters>
          <Box
            component="img"
            src="/png/mainLogo.png"
            alt="씨네큐 로고 및 메인 페이지로 이동"
            sx={{
              height: '4rem',
              width: '10rem',
            }}
          />
          {/* 탭 메뉴 */}
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
            <TabContext value={value}>
              <Box
              // sx={{
              //   borderBottom: 1,
              //   borderColor: '#C39C71',
              // }}
              >
                <TabList onChange={handleChange} aria-label="navigation tabs" centered>
                  <Tab
                    component="a" // 추후 {Movie/BoxOffice}
                    label="영화"
                    value="1"
                  />
                  <Tab
                    component="a" // 추후 {heater/Movie?TheaterCode=1001}
                    label="영화관"
                    value="2"
                  />
                  <Tab
                    component="a" // 추후 {Event/List}
                    label="이벤트"
                    value="3"
                  />
                  <Tab
                    component="a" // 추후 {Card/List}
                    label="할인 카드"
                    value="4"
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
                {/* 이벤트 탭 내용들 */}
                <NavTabPanel value="3">전체 이벤트</NavTabPanel>
                <NavTabPanel value="3">영화관 이벤트</NavTabPanel>
                <NavTabPanel value="3">영화 이벤트</NavTabPanel>
                <NavTabPanel value="3">당첨자 발표 </NavTabPanel>
                {/* 할인 카드 탭 내용들 */}
                <NavTabPanel value="4">할인 제휴카드</NavTabPanel>
                <NavTabPanel value="4">할인 신용카드</NavTabPanel>
                <NavTabPanel value="4">할인 포인트 카드</NavTabPanel>
                <NavTabPanel value="4">관람권/상품권</NavTabPanel>
              </Box>
            </TabContext>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="툴팁 내용">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <BoxOfficeButton>간편예매</BoxOfficeButton>
              </IconButton>
            </Tooltip>
          </Box>
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

const BoxOfficeButton = styled(Button)`
  background-color: #ca141e;
  color: #fff;
  width: 115px;
  height: 39px;
  border-radius: 0.35rem;
`;
