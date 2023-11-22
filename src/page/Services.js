import { Stack, Typography, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import "./service.css";
import BookNow from "../component/button/BookNow";

const Service = () => {
  return (
    <Stack sx={{ background: "#fae83c" }} width={"100%"}>
      <Stack direction={"row"} alignItem="center" justifyContent={"center"}>
        <Typography fontSize={"54px"} fontWeight={700}>
          Yearly Mentorship program
        </Typography>
      </Stack>

      <Stack direction={"row"} alignItem="center" mx={10}></Stack>       
    
      <List sx={{mx:10}}> 
      <Typography fontSize={"40.1px"} fontWeight={700}>
          BENEFITS
        </Typography>
        <ListItem sx={{gap:2}}>
          <Typography fontSize="31px" variant="inherit">
            &bull;
          </Typography>
          <ListItemText>
            <Typography fontSize="31px">
              Portfolio stock prior updates
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem sx={{gap:2}}>
          <Typography fontSize="31px" variant="inherit">
            &bull;
          </Typography>
          <ListItemText>
            <Typography fontSize="31px">Multi-bagger stock updates</Typography>
          </ListItemText>
        </ListItem>
        <ListItem sx={{gap:2}}>
          <Typography fontSize="31px" variant="inherit">
            &bull;
          </Typography>
          <ListItemText>
            <Typography fontSize="31px">
              Lump-sum Mutual Funds updates
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem sx={{gap:2}}>
          <Typography fontSize="31px" variant="inherit">
            &bull;
          </Typography>
          <ListItemText>
            <Typography fontSize="22px">
              Monthly special webinar for our mentorship members
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem sx={{gap:2}}>
          <Typography fontSize="31px" variant="inherit">
            &bull;
          </Typography>
          <ListItemText>
            <Typography fontSize="31px">
              Every Friday chat opens for doubt clearance
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem sx={{gap:2}}>
          <Typography fontSize="31px" variant="inherit">
            &bull;
          </Typography>
          <ListItemText>
            <Typography fontSize="31px">
              Every week, two blogs on stocks and mutual funds
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
      <Stack justifyContent={"center"} direction={"row"} width={"100%"} my={2}> <BookNow/></Stack>
     
    </Stack>
  );
};
export default Service;
