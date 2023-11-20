import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import "./../component/Header.css";
import "./Contact.css";
import thankYou from "./../assets/images/thankyou.jpeg";
import WhatsApp from "../component/button/Whatsapp";
import Telegram from "../component/button/Telegram";

const Contact = () => {
  return (
    <Stack height={"90vh"} className="footer" mx={2}>
      <Stack
        height={"20vh"}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {" "}
        <Typography variant="h5" fontWeight={700} color="#313c44">
          Thank you for reaching us! Let's work together to achieve your
          financial goals.
        </Typography>
      </Stack>
      <Stack
        height={"60vh"}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"69%"}
        mx={10}
      >
        <img src={thankYou} height={"400px"} width={"100%"} />
      </Stack>
      <Stack sx={{ background: "#f8f7f1" }}    width={"100%"}>
        <Stack
          height="10vh"
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          mx={2}
       
        >
          <Link
            className="header-menu"
            href="https://www.instagram.com/wayto.wealth/"
          >
            <Stack direction={"row"} alignItems="center" spacing={2} >
              <FaInstagram color="#E4405F" size={30} />{" "}
              <Typography fontWeight={700}>wayto.wealth </Typography>
            </Stack>
          </Link>

          <Typography fontWeight={700}>Contact us: 6383849719</Typography>
        </Stack>
      </Stack>
      <Stack></Stack>
      <Telegram/>
      <WhatsApp />
    </Stack>
  );
};

export default Contact;
