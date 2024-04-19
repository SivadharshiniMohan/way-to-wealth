import { Grid, Stack, Typography, useMediaQuery,useTheme } from "@mui/material";
import React from "react";
import DateRangeIcon from '@mui/icons-material/DateRange';
import TimeDate from "./TimeDate";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import BookNow from "../button/BookNow";
import dp from "./../../assets/images/newdp.png";
import clock from "./../../assets/images/clock.png";
import calender from "./../../assets/images/calender.png";
import { DATE, TIME } from "../../constant/AppConstant";


const Describe = () => {
	const theme = useTheme();
	const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));

	return <Stack width="100%" sx={{ textAlign: "center",background:"#000" }} height={isMobileView?"800px":"60vh"} py={5} mx={5} alignItems={"center"} mb={4}>
		<Grid container>
			<Grid item sm={12} md={6} >
				<Stack direction="row" sx={{alignItems:"center", justifyContent:"center"}}>
				<Stack><Typography sx={{ fontSize: "30px", fontWeight: 600, color: "#fff",fontFamily:"Montserrat" }} mx={2}>Master <span style={{ color: "#fdcd0d", fontStyle:"italic"}}>Mutual Funds</span> in just 3 hours webinar</Typography>
				{/*<Typography sx={{fontSize: "30px",fontWeight: 800, color:"#fdcd0d",  }}>PROFITABLE
					INCOME SOURCE</Typography>
					<Typography sx={{fontSize: "15px",color:"#fff",  }}>CEO of Way to Wealth
							Tamilnadu's #1 comprehensive trading community</Typography>*/}
					</Stack>
				</Stack>
				{
					!isMobileView&&	<><Typography sx={{fontSize: "13px",color:"#fff",m:2  }}>THE <b>WAY TO MUTUAL FUNDS</b> WEBINAR IS BEGINNER-FRIENDLY AND CAN EASILY ACHIEVE YOUR FINANCIAL GOAL.</Typography>
				
						<Stack sx={{ display: "grid", alignItems: "center", justifyContent: "center" }}><TimeDate icon={calender} content={ DATE} />
				
					<TimeDate icon={clock} content={TIME} /></Stack>
					<Stack width={"80%"} mx={5} mt={2}><BookNow /></Stack></>
				}
			</Grid>
			<Grid item sm={6} md={6} sx={{my:2}} width={"100%"}>
				<img src={dp} width={250} loading="lazy"/>
				<Typography sx={{ fontSize: "16px", pt: 2, color: "#fff", textTransform: "uppercase" }}>Live Webinar By</Typography>
				<Typography sx={{ fontSize: "18px", fontWeight: 800, color: "#fdcd0d", m: 0, textTransform: "uppercase" }}>Kalanithi Pandiyan</Typography>
				
			<Typography sx={{fontSize:"15px", fontWeight:"600", color:"#fff", mt:1}}>
					Founder and CEO of Way to Wealth</Typography>
				
				{isMobileView &&<>	<Typography sx={{fontSize: "13px",color:"#fff",m:2  }}>THE <b>WAY TO MUTUAL FUNDS</b> WEBINAR IS BEGINNER-FRIENDLY AND CAN EASILY ACHIEVE YOUR FINANCIAL GOAL.</Typography>
				
				<Stack sx={{ display: "grid", alignItems: "center", justifyContent: "center" }}><TimeDate icon={calender} content={DATE} />
			
				<TimeDate icon={clock} content="11:00 AM - 2:00 PM IST" /></Stack>
				<Stack width={"80%"} mx={5} mt={2}><BookNow /></Stack></>}
				
				</Grid>
			</Grid>

			

			

	</Stack>
}

export default Describe;