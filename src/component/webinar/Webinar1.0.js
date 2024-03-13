import React from "react";
import Describe from "./Describe";
import MonthlySalary from "./MonthlySalary";
import Register from "./Register";
import { Grid, Stack, Typography,  useMediaQuery,
	useTheme, } from "@mui/material";
import Who from "./Who";
import Learn from "./Learn";
import FeedbackCard from "./FeedBack";
import "./feedback.css";
import FAQList from "./FAQ";
import Dp from "./../../assets/images/Me.jpg";
import BookNow from "../button/BookNow";

const Webinar1 = () => {
	const theme = useTheme();
	const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
	const feedbackData = [
		{ username: "User1", message: "This is the first feedback message." },
		{ username: "User2", message: "This is the second feedback message." },
		// Add more feedback objects as needed
	  ];
	return <Stack     direction="column"
	spacing={2} // Adjust spacing as needed
	sx={{
	  width: "100%", // Use 100% width
		maxWidth: "100%", // Ensure the stack doesn't exceed the viewport width
	  
	  boxSizing: "border-box", // Include padding and border in the width
		 // Add padding as needed
		height: "100%",
		maxHeight: "100%"
	  
		}} px={2} >

		<Describe />
		<MonthlySalary />
		<Register />
		<Who />
		<Learn />
		<Stack  sx={{background:"#000"}} color={"#fff"} width={"100%"} m={2}>
	<Grid container>
			<Typography color="#fff" textAlign={"center"} my={2}  width="100%" fontWeight={600} fontSize={"30px"} alignItems={"center"} textTransform={"uppercase"}>Meet Out Mentor</Typography>
		<Grid item sm={12} md={6}>
			<Typography sx={{textAlign:"center", mx:2}}>
Kalanithi Pandiyan, the Way to Wealth founder. He's been involved in Mutual Funds, Stocks, and Personal Finance for 6 years. With 170k Instagram followers, he's assisted 5k individuals through easy-to-understand webinars, providing personalized one-on-one consultation and mentorship.</Typography>
		</Grid>
				<Grid item sm={12} md={6} my={2} mx={10}  width={"100%"}>
					<img src={Dp}  width= {isMobileView ? '100%' : '500'} height= {isMobileView ? '400px' : '650px'}/>
					
			
			</Grid>
			</Grid>
			<Stack direction={"row"} justifyContent={"center"} alignItems={"center"} m={2}>	<BookNow/></Stack>
		
		</Stack>
		{/*<div className="feedback-container">
        {feedbackData.map((feedback, index) => (
          <FeedbackCard key={index} username={feedback.username} message={feedback.message} />
        ))}
		</div>*/}
		<FAQList/>
	</Stack>
}

export default Webinar1;