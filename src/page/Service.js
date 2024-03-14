import React from "react";
import {
  Button,
  Container,
  Grid,
  Typography,
  Paper,
  List,
  useMediaQuery,
  useTheme,
  Stack,
  Divider
} from "@mui/material";
import "./service.css";
import Consultation from "./../assets/images/Copy of Consultation Landing page.png";
import Consultation1 from "./../assets/images/Copy of Consultation Landing page (1).png";
import BookNow from "../component/button/BookNow";

const Data = () => {
    const takeAway =  [
        "Clear knowledge about Mutual Funds",
        "Where, when, and how to Invest on Mutual Funds",
      ];
      const theme = useTheme();

      const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container sx={{background: "#fae83c", py: 2}}>
         <a className="anchor" id="webinar"></a>
         <Stack direction={"row"} alignItem="center" justifyContent={"center"}>
        <Typography fontSize={"22px"} fontWeight={600} 
        fontFamily={"sans-serif"} 

        textTransform={"uppercase"}>
       Way to Mutual Funds
        </Typography><br/>
       
      </Stack>
      <Stack direction={"row"} alignItem="center" justifyContent={"center"} >
      <Typography fontSize={"22px"} fontWeight={600} 
      fontFamily={"sans-serif"} 
      textTransform={"uppercase"}>
           webinar
        </Typography>
        </Stack>
      <Grid
        container
        spacing={3}
        className="main-section"
        gap={5}
        justifyContent={"space-between"}
        // display={"grid"}
        gridAutoRows={"300px"}
        // direction={isMobileView? "column": "row"} 
        direction={"row"}
        mt={2}
    
      >
        <Grid item xs={12} sm={6} md={4}  gridAutoRows={"300px"}  >
          <Paper>
            <div className="icon-section">
              <img src={Consultation1} height={"75px"} width={"75px"} fontSize={"10px"} loading="lazy"/>
              <br />
              <Typography fontSize="20px" fontWeight={600}>
                3 HOURS LIVE WEBINAR
              </Typography>
              <Divider sx={{mx:10}}/>
              <Typography fontSize={"16px"} p={2} textAlign={"left"}>
                You will learn about what mutual funds are, how to invest in
                them, and how to achieve high returns.
              </Typography>
            </div>
            {/* <div className="detail-section">
              <Button href="#">More Info</Button>
            </div> */}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} gridAutoRows={"300px"}>
  <Paper >
    <div className="icon-section">
      <img src={Consultation} height={"50px"} width={"50px"} loading="lazy"/>
      <br />
      <Typography fontSize="20px" fontWeight={600}>
        TAKE AWAY
      </Typography>
      <Divider sx={{ mx: 10 }} />

      <ul>
        {takeAway?.map((item, index) => (
          <Typography key={index} component="li" textAlign={"left"} fontSize={"16px"} px={1} py={.5} >
            {item}
          </Typography>
        ))}
      </ul>
    </div>
    {/* <div className="detail-section">
      <Button href="#">More Info</Button>
    </div> */}
  </Paper>
</Grid>

      </Grid>
      <Stack justifyContent={"center"} direction={"row"} width={"100%"} my={2}> <BookNow/> </Stack>

    </Container>
  );
};

export default Data;
