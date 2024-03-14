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
import Mentor from "./Mentor";
import "./../webinar/webinar.css";
import Record from "./Records";
import Contact from "../../page/Contact";

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
		maxHeight: "100%",
		fontFamily:'Montserrat', 
	  
		}} px={2} >

		<Describe />
		<Record/>
		<MonthlySalary />
		<Register />
		
		<Who />

		<Learn />
		<Mentor/>
		{/*<div className="feedback-container">
        {feedbackData.map((feedback, index) => (
          <FeedbackCard key={index} username={feedback.username} message={feedback.message} />
        ))}
		</div>*/}
		<FAQList />
		<Contact/>
		
	</Stack>
}

export default Webinar1;