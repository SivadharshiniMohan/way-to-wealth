import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Stack} from '@mui/material';
import { autoPlay } from 'react-swipeable-views-utils';

const MutualFundsRoadmap = ({ points }) => {
    const color = ["#fff9ae","#fff9ae","#f8ed62", "#f8ed62","#e9d700","#e9d700","#dab600"]
  return (
    <div>
          <Stack direction={"row"} alignItem="center" justifyContent={"center"} my={5}>
        <Typography fontSize={"25px"} fontWeight={600} sx={{textTransform:"uppercase"}} fontFamily={"BebasNeue"}>
         What Will you Learn?
        </Typography>
      </Stack>
      {points.map((point, index) => (
        <Card
          key={index}
          style={{
            margin: '10px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
        
            height: 'auto',
            backgroundColor: color[index],
            position: 'relative',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Adding a subtle shadow
          }}
        >
          <div
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: '#fff',
              color:  '#000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              marginTop:"7px",
              top: '10px',
              left: '10px',
              border: '2px solid #fff', // Adding a border around the circle
              fontSize: '16px', // Adjusting font size for better visibility
              lineHeight: '1', // Ensuring proper vertical alignment
            }}
          >
            {index + 1}
          </div>
          <CardContent style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom style={{ color:  '#000' }} ml={5}>
              {point}
            </Typography>
            <Typography variant="body1" color={'textPrimary'}>
              {/* Additional details or description for each point can be added here */}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MutualFundsRoadmap;
