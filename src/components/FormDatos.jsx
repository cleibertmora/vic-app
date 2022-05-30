import { useNavigate } from "react-router-dom"
import { Button, TextField } from "@mui/material"
import { Box } from "@mui/system"
import BasicCard from "./Card"
import { useDocument } from "../hooks/useDocument"

function FormDatos({cliente}){
    const { updateDocInfo, error } = useDocument("clientes", cliente.id)
    let navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget)
        let updatedDoc = {
            nombre: data.get('nombre'),
            contacto: data.get('contacto'),
            email: data.get('email'),
            detalle: data.get('detalle')
        }
        
        await updateDocInfo(updatedDoc)

        if(!error){
            navigate('/', { replace: true })
        }
    }
    
    return(
        <BasicCard>
        {cliente && (
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Nombre"
                    name="nombre"
                    defaultValue={cliente.nombre}
                    autoComplete="nombre"
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Contacto"
                    name="contacto"
                    defaultValue={cliente.contacto}
                    autoComplete="nombre"
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="email"
                    name="email"
                    defaultValue={cliente.email}
                    autoComplete="email"
                />
                <TextField
                    margin="normal"
                    required
                    multiline
                    rows={3}
                    fullWidth
                    label="detalle"
                    name="detalle"
                    defaultValue={cliente.detalle}
                    autoComplete="detalle"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="success"
                    sx={{ mt: 3, mb: 2 }}
                    >
                    Actualizar
                </Button>
            </Box>           
        )}
        </BasicCard>
    )
}

export default FormDatos