import React from 'react';
import { Typography, Container, Paper, Step, StepLabel, Stepper,Stack } from '@mui/material';

const roadmapData = [


  {
    description: 'Why Mutal Funds?',
    
  },
  {
    description: 'How Do Mutal Funds Works?',
    
  },
  {
    description: 'Technical Advantages And Benefits',
    
  },
  {
    description: 'Types Of Mutal Funds',
    
  },
  {
    description: 'SIP & LUMPSUM',
    
  },
  {
    description: 'Active Fund & Passive Fund',
    
  },
//   {
//     description: 'How Do Invest In Mutal Funds?',
    
//   },
];

const Roadmap = () => {
  return (
    <Container maxWidth="lg" sx={{background:"#fae83c", py:2}}>
       <Stack direction={"row"} alignItem="center" justifyContent={"center"} my={2} mb={5}>
        <Typography fontSize={"38px"} fontWeight={600}>
         What Will you Learn From This Webinar ?
        </Typography>
      </Stack>
      <Stepper activeStep={0} alternativeLabel >
        {roadmapData.map((step, index) => (
          <Step key={index}>
            <StepLabel>
              <Typography >{step.title}</Typography>
              <Typography fontSize={"13px"} fontWeight={700}>
                {step.description}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Container>
  );
};

export default Roadmap;
