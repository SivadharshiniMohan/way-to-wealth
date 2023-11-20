import {
  
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import selfDp from "./../assets/images/Me.jpg";
import BookNow from "../component/button/BookNow";

const Home = () => {
  const theme = useTheme();
  const message = "can I know about course";
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack
     sx={{mx:!isMobileView ? "150px": 5}}   
     >
      <a className="anchor" id="home"></a>
      <Grid container flexDirection={isMobileView ? "column" : "row"} >
        <Grid item lg={6} md={6} sm={12}>
          <img src={selfDp} height={isMobileView?"550px":"650px"} width={isMobileView?"100%":"400"} />
        </Grid>
        <Grid item lg={6} md={6} sm={12}>
          <Stack 
          justifyContent={"center"} alignItems={"center"} height={isMobileView?"300px":"650px"}
          >
            <Typography color={"#313c44"} fontSize="25px" fontWeight={500}>
              WELCOME TO{" "}
            </Typography>
            <Typography color={"#313c44"} fontSize="40px" fontWeight={600} sx={{color:"#d19c33"}}>
              WAY TO WEALTH{" "}
            </Typography>

            <Typography color={"#313c44"} fontSize="25px" fontWeight={400} mb={1}>
            Way To Mutal Funds Webinar{" "}
            </Typography>
           <Typography color={"#313c44"} fontSize="15px" fontWeight={400} mb={2} sx={{display:"flex"}}>
            Live Webinar by <Typography fontWeight={600} ml={1}>Kalanithi Pandiyan</Typography>{" "}
            </Typography>
          <BookNow/>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Home;
