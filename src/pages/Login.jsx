import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import { green } from '@mui/material/colors'
import Box from '@mui/material/Box'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Vic from './../images/vic.jpeg'

import Copyright from '../components/Copyright'

import useLogin from '../hooks/useLogin'

function Login() {
  const { login, isPending, error } = useLogin()

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget)
    login(data.get('email'), data.get('password'))
  }

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: green[800] }}>
            <FitnessCenterIcon />
          </Avatar>
          <Typography 
            component="h1"
            align="center"
            variant="h5">
            Bienvenido a VicFit de <br /><b>Victor Serrano</b>
          </Typography>
          <Avatar
            alt="Victor Serrano Trainer"
            src={Vic}
            sx={{ width: 120, height: 120, mt: 2 }}
          />
          <Typography
            variant="body1"
            sx={{
              color: 'grey.500',
              mt: 2
            }}>
            Donde está organizada toda tu vida fitness
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              sx={{ mt: 3, mb: 2 }}
            >
              Ingresar
            </Button>
            {error && <p>Error: {error}</p>}
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Olvide?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  )
}

export default Login