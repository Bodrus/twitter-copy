import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Ubuntu',
      'sans-serif'
    ].join(',')
  },
  palette: {
    primary: {
      main: 'rgb(29, 161, 242)',
      dark: 'rgb(26, 145, 218)',
      contrastText: '#fff'
    },
    secondary: {
      main: red[500]
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  },
  shadows: [] as any,
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 30,
        textTransform: 'none',
        fontSize: 16,
        height: 40,
        fontWeight: 700
      },
      textPrimary: {
        paddingLeft: 20,
        paddingRight: 20
      },
      outlinedPrimary: {
        borderColor: 'rgb(29, 161, 243)'
      }
    },
    MuiFilledInput: {
      underline: {
        '&:after': {
          borderBottomWidth: '2px'
        },
        '&:before': {
          borderColor: '#000',
          borderBottomWidth: '2px'
        }
      },
      input: {
        backgroundColor: 'rgb(245, 248, 250)'
      }
    },
    MuiDialog: {
      paper: {
        borderRadius: 15,
      }
    },
    MuiDialogActions: {
      root: {
        marginBottom: 8
      }
    },
    MuiDialogTitle: {
      root: {
        borderBottom: '1px solid rgb(204, 220, 250)',
        marginBottom: 10,
        padding: '10px 15px',
        '& button': {
          padding: 8,
          marginRight: 20,
        }
      }
    }
  }
});