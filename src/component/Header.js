import React, { useState } from "react";
import { Link, Stack, useTheme ,useMediaQuery} from "@mui/material";
import "./Header.css";

const Header = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={isMobileView ? "space-evenly" :"flex-end"}  
      spacing={isMobileView ? 2 : 5}
      height="10vh"
      // pr={5}
      px={1}
      sx={{ background: "#f8f7f1",
      fontFamily:"sans-serif", 
      fontStyle : "italic", textTransform:"uppercase", fontWeight:700 }}
      className="header"
    
     
    >
      <Link className="header-menu" href="#home">
        Home
      </Link>
      <Link className="header-menu" href="#about">
        About
      </Link>
      <Link className="header-menu" href="#webinar">
        Webinar
      </Link>
      <Link className="header-menu" href="#contact">
        Contact
      </Link>
    </Stack>
  );
};

export default Header;
