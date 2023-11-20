import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

const MyCard = () => {
  return (
    <Card>
      <CardHeader
        avatar={
          <IconButton aria-label="icon">
        jiji
          </IconButton>
        }
        title="Hello"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          Welcome to my code
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MyCard;
