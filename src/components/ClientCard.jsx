import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function ClientCard({ cliente }) {
  return (
    <Box
      component="div"
      sx={{ mx: '2px', my: '6px' }}
    >
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14, fontWeight: 600 }} color="text.secondary" gutterBottom>
            Cliente
          </Typography>
          <Typography variant="h5" component="div">
            {cliente.nombre}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {cliente.email}
          </Typography>
          <Typography variant="body2">
            Contacto: {cliente.contacto}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Revisar Ficha</Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default ClientCard