import { Link } from 'react-router-dom'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CssBaseline from '@mui/material/CssBaseline'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import { grey } from '@mui/material/colors'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import Vic from './../images/vic.jpeg'
import Copyright from '../components/Copyright'

function Page404() {
  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: 1,
        borderColor: grey[300],
        p:7
      }}
    >
      <Avatar
          alt="Victor Serrano Trainer"
          src={Vic}
          sx={{ width: 120, height: 120, mt: 2, mb: 5 }}
        />
      <Typography 
        component="h1"
        align="center"
        variant="h5">
        Quieres ir a un lugar que no existe. <br />
      </Typography>
      <Typography
        component="h3"
        align="center"
        variant="body1"
        sx={{mt: 3}}
        >
        <b><Link to="/">Vuelve a Vic Fit</Link></b>
      </Typography>
    </Box>
    <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  )
}

export default Page404