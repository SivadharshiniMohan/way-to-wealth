import { Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import aboutImg from "./../assets/images/about.jpeg";
import "./../App.css";

const About = () => {
  return (
    <Stack mt={5} >
      <a className="anchor" id="about"></a>
      <Stack>
        <Stack alignItems="center" justifyContent={"center"} sx={{background:"#fae83c", color:"#000"}} height={"10vh"} >
          <Typography fontSize="38px" fontWeight={600} >About Me</Typography>
        </Stack>
        <Stack alignItems="center" mx={3} my={5}>
          <Typography fontSize="19px" fontWeight={500}>
            I'm Kalanithi, the founder of Way to Wealth, renowned for my
            expertise in Stocks, Mutual Funds, Personal Finance, Technical
            Analysis, and Spot Gold. With over 150k followers on Instagram, I've
            empowered 3k+ individuals through valuable content and educational
            Workshops. Get ready for top-notch financial guidance and market
            insights!
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default About;
