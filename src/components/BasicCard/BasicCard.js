import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const BasicCard = ({ header, content }) => {
    return (
        <Card sx={{ margin: '20px 30px'}} >
            {header}
            <CardContent>
                <Typography 
                    align='center' 
                    sx={{ 
                        margin: '40px 16px', 
                        color: 'rgba(0,0,0,0.6)', 
                        fontSize: '1.3rem'
                    }}
                >
                    {content}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default BasicCard;
