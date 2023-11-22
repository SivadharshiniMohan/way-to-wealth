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

  const styles = {
    gridItem: {
      position: 'relative',
    },
    imageContainer: {
      position: 'relative',
    },
    image: {
      width: isMobileView ? '100%' : '500',
      height: isMobileView ? '550px' : '650px',
      // objectFit: 'cover',
    },
    founderLabel: {
      position: 'absolute',
      bottom: '50px',
      left: isMobileView ? '50%' : '30%',
      transform: 'translateX(-50%)',
      textAlign: 'center',
      padding: '5px 10px',
      width:"100%",
      fontWeight: 700,
      fontSize: '18px',
      fontStyle:"italic"
   

    },
    founderLabel2: {
      position: 'absolute',
      bottom: '30px',
      left: isMobileView ? '50%' : '30%',
      transform: 'translateX(-50%)',
      textAlign: 'center',
      padding: '5px 10px',
      fontWeight: 500,
      fontSize: '13px',
      width:"100%",
      fontStyle:"italic"


    },
  };
  return (
    <Stack
     sx={{mx:!isMobileView ? "150px": 5}}   
     >
      <a className="anchor" id="home"></a>
      <Grid container flexDirection={isMobileView ? "column" : "row"} >
      <Grid item lg={6} md={6} sm={12} style={styles.gridItem}>
      <div style={styles.imageContainer}>
        <img src={selfDp} alt="Founder" style={styles.image} />
        <div style={styles.founderLabel}>Kalanithi Pandiyan </div>
        <div style={styles.founderLabel2}>Founder of Way to Wealth </div>
        
      </div>
    </Grid>
        <Grid item lg={6} md={6} sm={12}>
          <Stack 
          justifyContent={"center"} alignItems={"center"} height={isMobileView?"300px":"650px"}
          >
            <Typography color={"#313c44"} fontSize="18px" fontWeight={500}>
              WELCOME TO{" "}
            </Typography>
            <Typography color={"#313c44"} fontSize="30px" fontWeight={600} sx={{color:"#d19c33"}}  fontFamily= 'Arial, sans-serif'>
              WAY TO WEALTH{" "}
            </Typography>

            <Typography color={"#313c44"} fontSize="20px" fontWeight={400} mb={1}>
            Way To mutual Funds Webinar{" "}
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
