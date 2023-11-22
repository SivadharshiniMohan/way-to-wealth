import { Link, Stack, Typography,useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import { FaTelegram, FaInstagram } from 'react-icons/fa';

import "./../component/Header.css";
import "./Contact.css";
import thankYou from "./../assets/images/thankyou.jpeg";
import WhatsApp from "../component/button/Whatsapp";

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
    <Stack height={"90vh"} className="footer"  width={"100%"}>
       
      <Stack
        height={"20vh"}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {" "}
        <Typography fontSize={"22px "} fontWeight={700} color="#313c44" px={5}>
          Thank you for reaching us! Let's work together to achieve your
          financial goals.
        </Typography>
      </Stack>
      <Stack
        height={"60vh"}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        // width={"100%"}
        mx={10}
      >
        <img src={thankYou} height={"350px"} width={isMobileView ? "130%":"50%"} />
      </Stack>
      <Stack sx={{ background: "#f8f7f1" }} width={"100%"}>
        <Stack
          height="10vh"
          direction={"row"}
          alignItems={"center"}
justifyContent={"space-between"}        
       
        >
           <a className="anchor" id="contact"></a>
           <Stack direction={"row"} alignItems="center"  width={isMobileView?"80%":"auto"} mx={2} gap={1}>
           <Typography fontWeight={700} fontSize={"14px"} >Follow on: </Typography>
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

          <Typography fontWeight={700} fontSize={"14px"} >Contact us: 9042738209</Typography>
        </Stack>
      </Stack>
      <Stack></Stack>
      <WhatsApp />
    </Stack>
  );
};

export default Contact;
