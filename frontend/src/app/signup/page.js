'use client';

import styles from './page.module.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ImageSideBarLayout from '@/components/ImageSideBarLayout';

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('new-password'),
    });
  };

  return (
    <ImageSideBarLayout>
      <Box
          sx={{
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Create an account
          </Typography>
          <Button
            variant="outlined"
            fullWidth
            sx={{ mt: 5 }}
          >
            Signup with phone number
          </Button>
          <p class={styles.separator}>or</p>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 5 }}>
            <TextField
              required
              id="email"
              name="email"
              label="Email Address"
              type="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              type="password"
              autoComplete="new-password"
            />
            <TextField
              required
              id="confirm-password"
              name="confirm-password"
              label="Confirm Password"
              type="password"
              autoComplete="confirm-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              sx={{ mb: 3 }}
            >
              Signup
            </Button>
            <Link href="/login" variant="body2" className="MuiTypography-alignCenter">
              {"Already have an account? Login"}
            </Link>
          </Box>
        </Box>
    </ImageSideBarLayout>   
  );
}