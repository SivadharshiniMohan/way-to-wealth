import React from "react";
import Describe from "./Describe";
import MonthlySalary from "./MonthlySalary";
import Register from "./Register";
import { Stack } from "@mui/material";
import Who from "./Who";
import Learn from "./Learn";
import "./feedback.css";
import FAQList from "./FAQ";
import Mentor from "./Mentor";
import "./../webinar/webinar.css";
import Record from "./Records";
import Contact from "../../page/Contact";

import vs from "./../../assets/videos/Way to wealth website - compressed.mp4"

const Webinar1 = () => {	
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
            <video  src={vs} width="100%" height="300" controls autoPlay muted />

		<Record/>
		<MonthlySalary />
		<Register />
		
		<Who />


		<Learn />
		<Mentor/>
		<FAQList />
		<Contact/>
		
	</Stack>
}

export default Webinar1;