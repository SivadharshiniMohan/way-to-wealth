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
  Stack
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
        <Typography fontSize={"38px"} fontWeight={700}>
          Webinar
        </Typography><br/>
       
      </Stack>
      <Stack direction={"row"} alignItem="center" justifyContent={"center"} >
      <Typography fontSize={"30px"} fontWeight={400}>
            On Mutal Funds
        </Typography>
        </Stack>
      <Grid
        container
        spacing={3}
        className="main-section"
        gap={10}
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
              <img src={Consultation1} height={"50px"} width={"50px"} />
              <br />
              <Typography fontSize="20px" fontWeight={600}>
                3 HOURS WEBINAR
              </Typography>
              <Typography fontSize={"16px"} p={1}>
                You will learn about what mutual funds are, how to invest in
                them, and how to achieve high returns.
              </Typography>
            </div>
            <div className="detail-section">
              <Button href="#">More Info</Button>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}   gridAutoRows={"300px"}>
          <Paper>
            <div className="icon-section">
              <img src={Consultation} height={"50px"} width={"50px"} />
              <br />
              <Typography fontSize="20px" fontWeight={600}>
                TAKE AWAY
              </Typography>

            {takeAway?.map((item)=>{
                return <Typography fontSize={"16px"} p={1}>{item}</Typography>
             
            })}
            </div>
            <div className="detail-section">
              <Button href="#">More Info</Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
      <Stack justifyContent={"center"} direction={"row"} width={"100%"} my={2}> <BookNow/> </Stack>

    </Container>
  );
};

export default Data;
