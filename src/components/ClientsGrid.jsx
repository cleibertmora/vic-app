import Grid from '@mui/material/Grid'
import ClientCard from "./ClientCard"

function ClientsGrid({clientes}) {
  return (
    <Grid container spacing={2}>
     {clientes.length === 0 && <p>No projects yet!</p>}
     {clientes.map(client =>
        <Grid key={client.id} item xs={12} md={4}>
          <ClientCard cliente={client} key={client.id} />
        </Grid>
      )}
    </Grid>
  )
}

export default ClientsGrid