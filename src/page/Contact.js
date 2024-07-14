import { Link, Stack, Typography,useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import { FaTelegram, FaInstagram } from 'react-icons/fa';
import "./../component/Header.css";
import "./Contact.css";
import { mobileNumber } from "../component/common";

const Contact = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const styles = {
   
    icon: {
      width: '23px',
      height: '23px',
      color: '#0088cc', // Customize the color if needed
    },
  };
  return (
    <Stack height={"10vh"} className="footer"  width={"100%"} sx={{background: "#000"}}>

   
      <Stack sx={{ background: "#000", color:"#fff" }} width={"100%"}>
        <Stack
          height="10vh"
          direction={"row"}
          alignItems={"center"}
justifyContent={"space-between"}        
       
        >
           {/*<a className="anchor" id="contact"></a>*/}
           <Stack direction={"row"} alignItems="center"  width={isMobileView?"100%":"auto"} gap={.5}>
           <Typography fontWeight={700} fontSize={"14px"} mx={2}>Follow on: </Typography>
          <Link
            className="header-menu"
            href="https://www.instagram.com/wayto.wealth/"
          >
          
              <FaInstagram color="#E4405F" size={25} />{" "}
         
     
          </Link>

          <Link
            className="header-menu"
            href="https://t.me/waytowealthtamil"
          >
            <FaTelegram style={styles.icon}  size={15}/>
             
           
          </Link>
          </Stack>

				  <Typography fontWeight={700} fontSize={"14px"} mx={2}>Contact us: { mobileNumber}</Typography>
        </Stack>
      </Stack>
      <Stack></Stack>
    </Stack>
  );
};

export default Contact;
