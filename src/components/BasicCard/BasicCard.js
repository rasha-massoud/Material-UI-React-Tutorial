import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const BasicCard = ({ header, content }) => {
    return (
        <Card>
            {header}
            <CardContent>
                <Typography style={basicCardStyles.Typography}>
                    {content}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default BasicCard;
