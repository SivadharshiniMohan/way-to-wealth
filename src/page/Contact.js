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
          mx={2}
       
        >
           <a className="anchor" id="contact"></a>
          <Link
            className="header-menu"
            href="https://www.instagram.com/wayto.wealth/"
          >
            <Stack direction={"row"} alignItems="center" gap={.5}>
              <FaInstagram color="#E4405F" size={25} />{" "}
              <Typography fontWeight={700} fontSize={"10.5px"} >wayto.wealth </Typography>
            </Stack>
          </Link>

          <Link
            className="header-menu"
            href="https://t.me/waytowealthtamil"
          >
            <Stack direction={"row"} alignItems="center"  gap={.5}>
            <FaTelegram style={styles.icon}  size={15}/>
              <Typography fontWeight={700} fontSize={"10.5px"}>waytowealthtamil </Typography>
            </Stack>
          </Link>

          <Typography fontWeight={700} fontSize={"10.5px"} >Contact us: 9042738209</Typography>
        </Stack>
      </Stack>
      <Stack></Stack>
      <WhatsApp />
    </Stack>
  );
};

export default Contact;
