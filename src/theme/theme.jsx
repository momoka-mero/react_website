import { createTheme } from '@mui/material/styles';


const cyberShowaTheme = createTheme({
  palette: {
    mode: 'dark', 
    primary: {
      main: '#ff4081', // ピンクのネオンカラー
    },
    secondary: {
      main: '#3f51b5', // 青のネオンカラー
    },
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
            textShadow: '1px 5px 4px rgba(0,0,0,3),0 0 2px rgba(255,255,255,1),0 0 10px rgba(255,255,255,1),0 0 30px rgba(255,255,255,1),0 0 40px #ff00de,0 0 70px #ff00de',
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&.neon-button': {
            backgroundColor: '#000',
            color: '#fff',
            textShadow: 
            '1px 5px 4px rgba(0,0,0,3),0 0 2px rgba(255,255,255,1),0 0 10px rgba(255,255,255,1),0 0 30px rgba(255,255,255,1),0 0 40px #ff00de,0 0 70px #ff00de',
            boxShadow: '0 0 5px #ff4081, 0 0 10px pink, 0 0 15px pink, 0 0 20px pink',
          }
        }
      }
    },
  }
});
  

  

export default cyberShowaTheme;