import { Button } from "@mui/material";
import React from "react";

const BookNow = () => {
  return (
    <Button
      variant="contained"
      size="large"
      sx={{
        background: "#d19c33",
        color: "#fff",
        "&:hover": { background: "#d19c33" },
      }}
      href="https://wa.me/9042320515?text=Want to register for Mutual Funds webinar"
    >
      Book Now
    </Button>
  );
};

export default BookNow;