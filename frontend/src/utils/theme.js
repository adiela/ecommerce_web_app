'use client';

import { createTheme } from "@mui/material/styles";
import { teal } from '@mui/material/colors';
import { Roboto } from "next/font/google";

const theme = createTheme({
  palette: {
    primary: teal,
    secondary: teal,
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'large'
      },
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0px 4px 6px #e0e0e0'
        },
    },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'filled',
        fullWidth: true,
        margin: 'normal',
        InputProps: {
          disableUnderline: true,
          style: {
            borderRadius: 20,
          }
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        variant: 'filled'
      }
    }
  }
});

export default theme;