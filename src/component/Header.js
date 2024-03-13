import React from "react";
import { Link, Stack, useTheme, useMediaQuery } from "@mui/material";
import { Routes, Route, Link as RouterLink } from "react-router-dom";
import Webinar1 from "./webinar/Webinar1.0";


const Header = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));

  return (
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={isMobileView ? "space-evenly" : "flex-end"}
        spacing={isMobileView ? 2 : 5}
        height="10vh"
        px={1}
        sx={{
          background: "#f8f7f1",
          fontFamily: "sans-serif",
          fontStyle: "italic",
          textTransform: "uppercase",
          fontWeight: 700
        }}
        className="header"
      >
        <Link className="header-menu" href="#home">
          Home
        </Link>
        <Link className="header-menu" href="#about">
          About
        </Link>
			  {/*<Link className="header-menu" href={"/webinar"} >
          Webinar
        </Link>*/}
		  <Link component={RouterLink} to="webinar" className="header-menu">
			  Webinar
		  </Link>
	
			
        <Link className="header-menu" href="#contact">
          Contact
		  </Link>
      </Stack>

    
  );
};

export default Header;
