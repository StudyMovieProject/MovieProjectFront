import { createTheme } from '@mui/material/styles';
import { css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

export const globalStyles = css`
  ${emotionNormalize}

  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Pretendard Variable', Pretendard, -apple-system,
      BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    background-color: white;
    min-height: 100%;

    /* 반응형 폰트 크기 설정 */
    font-size: 16px; /* 기본 크기 (데스크탑) */

    @media (max-width: 1200px) {
      font-size: 14px; /* 태블릿 크기 */
    }

    @media (max-width: 600px) {
      font-size: 12px; /* 모바일 크기 */
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;

export const theme = createTheme({
  palette: {
    mode: 'light',
    // primary: {
    //   main: #efefef,
    // },
    // secondary: {
    //   main: '#..',
    // },
  },
  typography: {
    fontFamily: `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI"`,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'black',
          lineHeight: 0,
          '&.Mui-selected': {
            color: 'black',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          // backgroundColor: '#F3EEEA',
          boxShadow: 'none',
        },
      },
      defaultProps: {
        elevation: 0,
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '1.8rem',
          '@media (min-width:600px)': {
            minHeight: '2rem',
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: 'black',
          '&.Mui-selected': {
            color: '#776B5D',
          },
          indicator: {
            backgroundColor: '#776B5D',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#776B5D',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#776B5D", // 기본 테두리 색상
            },
            "&:hover fieldset": {
              borderColor: "#38332d", // 호버 시 테두리 색상
            },
            "&.Mui-focused fieldset": {
              borderColor: "#B0A695",
            },
            '&.Mui-error fieldset': {
              borderColor: '#ad314a', // 오류 시 테두리 색상
            },
          },
          "& .MuiInputLabel-root": {
            color: "#6f6f6e",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#776B5D", // 포커스 시 라벨 색상
          },
        },
      },
    },
    // Checkbox 스타일 오버라이드
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#776B5D", // 기본 체크박스 색상
          "&.Mui-checked": {
            color: "#B0A695", // 체크 시 색상
          },
          "&.Mui-focusVisible": {
            color: "#B0A695", // 포커스 시 색상
          },
        },
      },
    },
  },
});
