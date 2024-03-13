import { Grid, Stack, Typography, useMediaQuery,useTheme } from "@mui/material";
import React from "react";
import DateRangeIcon from '@mui/icons-material/DateRange';
import TimeDate from "./TimeDate";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import BookNow from "../button/BookNow";
import dp from "./../../assets/images/Dp-50.png";
import clock from "./../../assets/images/clock.png";
import calender from "./../../assets/images/calender.png";
import fiveK from "./../../assets/images/Working Professionals 5k.png";


const Describe = () => {
	const theme = useTheme();
	const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));

	return <Stack width="100%" sx={{ textAlign: "center",background:"#000" }} height={isMobileView?"750px":"50vh"} py={5} mx={5} alignItems={"center"} mb={4}>
		<Grid container>
			<Grid item sm={12} md={6} >
				<Stack direction="row" sx={{alignItems:"center", justifyContent:"center"}}>
				<Stack><Typography sx={{ fontSize: "25px", fontWeight: 600, color: "#fff", }} mx={2}>Master <span style={{ color: "#fdcd0d" }}>Mutual Funds</span> in just 3 hours webinar</Typography>
				{/*<Typography sx={{fontSize: "30px",fontWeight: 800, color:"#fdcd0d",  }}>PROFITABLE
					INCOME SOURCE</Typography>
					<Typography sx={{fontSize: "15px",color:"#fff",  }}>CEO of Way to Wealth
							Tamilnadu's #1 comprehensive trading community</Typography>*/}
					</Stack>
						</Stack>
			</Grid>
			<Grid item sm={6} md={6} sx={{my:2}} width={"100%"}>
				<img src={dp} width={200} />
				<Typography sx={{ fontSize: "16px", pt: 2, color: "#fff", textTransform: "uppercase" }}>Live Webinar By</Typography>
				<Typography sx={{ fontSize: "18px", fontWeight: 800, color: "#fdcd0d", m: 0, textTransform: "uppercase" }}>Kalanithi Pandiyan</Typography>
				
			<Typography sx={{fontSize:"15px", fontWeight:"600", color:"#fff", mt:1}}>
					Founder and CEO of Way to Wealth</Typography>
				
					<Typography sx={{fontSize: "13px",color:"#fff",m:2  }}>THE <b>WAY TO MUTUAL FUNDS</b> WEBINAR IS BEGINNER-FRIENDLY AND CAN EASILY ACHIEVE YOUR FINANCIAL GOAL.</Typography>
				
				<Stack sx={{ display: "grid", alignItems: "center", justifyContent: "center" }}><TimeDate icon={calender} content="07/04/2024, Sunday" />
			
				<TimeDate icon={clock} content="11:00 AM - 2:00 PM IST" /></Stack>
				<BookNow />
				
				<Stack direction={"row"} mx={3} my={2}>
					<Stack mx={2}>
						<img src={fiveK} width={70}/> 
					</Stack>
					<Stack mx={2} mt={1} >					<Typography sx={{ fontSize: "18px", fontWeight: 800, color: "#ff", m: 0, textTransform: "uppercase" }}>86.4% sold out</Typography>
					<Typography sx={{ fontSize: "18px", fontWeight: 800, color: "#fdcd0d", m: 0, textTransform: "uppercase" }}>5000+ student enrolled</Typography>
					</Stack>
</Stack>
				</Grid>
			</Grid>

			

			

	</Stack>
}

export default Describe;