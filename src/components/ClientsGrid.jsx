import Box from '@mui/material/Box'
import ClientCard from "./ClientCard"

function ClientsGrid({clientes}) {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
     {clientes.length === 0 && <p>No projects yet!</p>}
     {clientes.map(client =>
       <ClientCard cliente={client} key={client.id} />
     )}
    </Box>
  )
}

export default ClientsGrid