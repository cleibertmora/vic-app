import { useParams } from "react-router-dom"
import FormDatos from "../components/FormDatos"
import Layout from "../components/Layout"
import { useDocument } from "../hooks/useDocument"
import Grid from '@mui/material/Grid'
import AddEvolucion from "../components/AddEvolucion"

function ClienteFicha() {
    const params = useParams();
    const {docInfo, error, isCancelled} = useDocument("clientes", params.clienteID)

    return (
        <Layout>
            {error && <p>Problemas con la conexión a la Base de Datos.</p>}
            {docInfo && 
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <FormDatos cliente={docInfo} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <AddEvolucion />
                </Grid> 
            </Grid>
            }
        </Layout>
    )
}

export default ClienteFicha