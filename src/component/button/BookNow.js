import { Button } from "@mui/material";
import React from "react";

const BookNow = () => {
  return (
    <Button
      variant="contained"
      size="large"
      sx={{
        background: "#ffd700",
		  color: "#000",
		  fontWeight: 700,
		  fontSize:"18px",
        "&:hover": { background: "#ffd700" },
      }}
      href="https://rigi.club/wdp/8L2wI1GTmg"
    >
      Book Your Seat
    </Button>
  );
};

export default BookNow;