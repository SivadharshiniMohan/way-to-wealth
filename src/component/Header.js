import React, { useState } from "react";
import { Link, Stack, useTheme } from "@mui/material";
import "./Header.css";

const Header = () => {
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
      justifyContent={"flex-end"}
      spacing={5}
      height="10vh"
      pr={5}
      sx={{ background: "#f8f7f1",fontFamily:"BebasNeue", textTransform:"uppercase", fontWeight:700 }}
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
        Contact us
      </Link>
    </Stack>
  );
};

export default Header;
