import { Grid, Stack, Typography, useMediaQuery,useTheme  } from "@mui/material";
import React from "react";
import BookNow from "../button/BookNow";
import Dp from "./../../assets/images/Me.jpg";

const Mentor = () => {
	const theme = useTheme();
	const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
	return <>
		<Stack  sx={{background:"#000"}} color={"#fff"} width={"100%"} m={2}>
	<Grid container>
			<Typography color="#fff" textAlign={"center"} my={2}  width="100%" fontWeight={600} fontSize={"30px"} alignItems={"center"} textTransform={"uppercase"}>Meet Our Mentor</Typography>
		<Grid item sm={12} md={6}>
			<Typography sx={{textAlign:"center",display:"flex", mx:2}} height={!isMobileView?"70vh":""} alignItems={!isMobileView? "center":""} >
Kalanithi Pandiyan, the Way to Wealth founder. He's been involved in Mutual Funds, Stocks, and Personal Finance for 6 years. With 170k Instagram followers, he's assisted 5k individuals through easy-to-understand webinars, providing personalized one-on-one consultation and mentorship.</Typography>
		</Grid>
				<Grid item sm={12} md={6} my={2}  width={"100%"}>
					<Stack direction={"row"} justifyContent={"center"} width="100%"><img src={Dp} width={250} loading="lazy"/></Stack>
			
			</Grid>
			</Grid>
		
	</Stack>
				<Stack direction={"row"} justifyContent={"center"}  m={2} > 	<BookNow/></Stack>
</>
}

export default Mentor