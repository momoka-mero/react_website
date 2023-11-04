import { createTheme } from '@mui/material/styles';


const cyberShowaTheme = createTheme({
  palette: {
    mode: 'dark', // ダークテーマをベースに
    primary: {
      main: '#ff4081', // ピンクのネオンカラー
    },
    secondary: {
      main: '#3f51b5', // 青のネオンカラー
    },
    // 昭和レトロな感じを出したい場合は、以下のような色を追加
    error: {
      main: '#f44336', // ネオン赤
    },
    background: {
        default: 'linear-gradient(45deg, #ff0099, #493240, #ff6e7f)',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.neon-text': {
            color: '#fff',
            textShadow: '0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 15px #ff3300, 0 0 20px #ff3300, 0 0 25px #ff3399, 0 0 30px #ff3399, 0 0 35px #ff3399',
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&.neon-button': {
            backgroundColor: '#ff3399',
            color: 'white',
            textShadow: '0 0 5px #ff0000, 0 0 10px #ff0000',
            boxShadow: '0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 15px #ff3300, 0 0 20px #ff3300',
          }
        }
      }
    },
    // その他のカスタムコンポーネントのスタイル...
  }
});
  

  

export default cyberShowaTheme;