import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'

function BasicCard({children, actionLabel='', cardAction=false, size='small'}) {
    return (
      <Card
        variant="outlined" 
        sx={{ minWidth: 275 }}>
        <CardContent>
          {children}
        </CardContent>
        {cardAction &&
            <CardActions>
                <Button size={size}>{actionLabel}</Button>
            </CardActions>
        }
      </Card>
    );
}

export default BasicCard