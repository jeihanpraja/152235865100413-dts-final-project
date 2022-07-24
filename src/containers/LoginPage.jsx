import {
  Box,
  Typography,
  Container,
  CssBaseline,
  Avatar,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Button,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CopyrightJeihan from "../components/CopyrightJeihan";

export default function LoginPage() {
  const theme = createTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              autoComplete="current-password"
              type="password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 3 }}>
              Log In
            </Button>
            <Grid container sx={{ mb: 5 }}>
              <Grid item xs>
                <Link href="#" variant="body2">
                  {`Forgot Password?`}
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {`Don't have an account? Register Now`}
                </Link>
              </Grid>
            </Grid>
            <CopyrightJeihan />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
