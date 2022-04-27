import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import BasicCard from '../component/Card'

function Login() {
  return (
    <Container>
      <Box sx={{
            mt: 3,
            width: '35ch'
          }}>
        <BasicCard>

          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '35ch' },
            }}
            noValidate
            autoComplete="off"
          >

          <Stack spacing={2}>
            <TextField
              label="Correo"
              variant="filled"
            />

            <TextField
              label="Contraseña"
              variant="filled"
            />
          </Stack>

          </Box>
        </BasicCard>
      </Box>
    </Container>

  )
}

export default Login