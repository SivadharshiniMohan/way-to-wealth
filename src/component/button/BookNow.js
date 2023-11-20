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
      href="https://wa.me/6383849719?text=can I know about course"
    >
      Book Now
    </Button>
  );
};

export default BookNow;