import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import LogoutIcon from '@mui/icons-material/Logout'
import { useLogout } from '../hooks/useLogout'

function Logout() {
  const { logout, isPending } = useLogout()

  return (
    <Box sx={{px:4, py:2}}>
        <Button
            onClick={logout}
            variant="outlined"
            startIcon={<LogoutIcon />}>
            Salir
        </Button>
    </Box>
  )
}

export default Logout