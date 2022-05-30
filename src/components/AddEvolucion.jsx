import { Box, Button, TextField, IconButton, Stack } from "@mui/material"
import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
import AccessibilityIcon from '@mui/icons-material/Accessibility'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import { useState } from "react"
import BasicCard from "./Card"
import { styled } from '@mui/material/styles'

const Input = styled('input')({
    display: 'none',
});

function AddEvolucion() {
    const [addNew, setAddNew] = useState(false)

    return (
        <div>
            {addNew &&
            <>
                <BasicCard>
                    <Stack
                        direction="row"
                        justifyContent="flex-end">
                        <IconButton
                            onClick={e => setAddNew(false)}
                            color="primary" 
                            aria-label="Cerrar">
                            <CloseIcon />
                        </IconButton>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <label htmlFor="contained-button-file">
                            <Input accept="image/*" id="contained-button-file" multiple type="file" />
                            <Button variant="contained" component="span">
                            Seleccionar imagen...
                            </Button>
                        </label>
                        <label htmlFor="icon-button-file">
                            <Input accept="image/*" id="icon-button-file" type="file" />
                            <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera />
                            </IconButton>
                        </label>
                    </Stack>
                    <TextField
                        margin="normal"
                        multiline
                        rows={3}
                        fullWidth
                        label="Nota"
                        name="nota"
                        autoComplete="nota"
                    />
                <Button
                    onClick={e => setAddNew(true)}
                    variant="contained"
                    startIcon={<AccessibilityIcon />}
                    fullWidth
                    color="primary">
                    Añadir
                </Button>
                </BasicCard>

                <Box 
                    component="div"
                    sx={{ my: 2 }}/>
            </>}

            {!addNew &&  
            <Button
                onClick={e => setAddNew(true)}
                variant="outlined"
                startIcon={<AddIcon />}
                fullWidth
                color="success">
                Agregar Nueva Evolución
            </Button>}
        </div>
    )
}

export default AddEvolucion