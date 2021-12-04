import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Marker(props) {
  const { positive, neutral, negative } = props;
  const [expanded, setExpanded] = React.useState(false);

  console.log(positive, neutral, negative)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 450, height: 520, marginTop: 12, backgroundColor: '#F5F5F5' }}>
      <CardHeader
        title="Тональность новостей"
      />
      <CardContent>
        <Box
          sx={{
            height: Math.round(positive*340),
            bgcolor: '#B2EA70',
            '&:hover': {
              backgroundColor: '#B2EA70',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
        <Typography >Позитивные</Typography>
        <Typography >{`${Math.round(positive*100)}%`}</Typography>
        </Box>
          <Box
          sx={{
            height: Math.round(neutral*340),
            bgcolor: '#FBD148',
            '&:hover': {
              backgroundColor: '#FBD148',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
        <Typography >Нейтральные</Typography>
        <Typography >{`${Math.round(neutral*100)}%`}</Typography>
        </Box>
        <Box
          sx={{
            height: Math.round(negative*340),
            bgcolor: '#C85C5C',
            '&:hover': {
              backgroundColor: '#C85C5C',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
        <Typography >Негативные</Typography>
        <Typography >{`${Math.round(negative*100)}%`}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
