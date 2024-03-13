import { Stack, Typography } from "@mui/material";
import React from "react";
import CustomCard from "./CustomCard";
import Rm1 from "./../../assets/images/RM1.png";
import Rm2 from "./../../assets/images/rm2.png";
import Rm3 from "./../../assets/images/rm3.png";
import Rm4 from "./../../assets/images/rm4.png";
import Rm5 from "./../../assets/images/rm5.png";
import Rm6 from "./../../assets/images/rm6.png";
import Rm7 from "./../../assets/images/rm7.png";


const Who = () => { 
	const data = [{
		title: "⁠What and Why of Mutual Funds",
		content: "Learn why Mutual Funds matter and what they're all about.",
		icon:Rm1
	}, {
		title: "⁠ ⁠How Mutual Funds work",
		content: "Dive into how Mutual Funds operate, broken down for simplicity.",
		icon:Rm2
		}, {
		title: "Technical Advantages & Benefits",
		content: "Find out the perks and advantages, explained in an easy, relatable way.",
		icon:Rm3
		},
		{
			title: "⁠Types of Mutual Funds",
			content: "Explore the different types of Mutual Funds straightforwardly.",
			icon:Rm4
		}, {
			title: "Active Fund & Passive Fund",
			content: "Learn the difference between active and passive funds – it's simpler than you think!",
			icon:Rm5
		},
		{
			title: "⁠SIP & Lumpsum",
			content:"Grasp the concepts of regular investing and one-time investments easily.",
			icon:Rm6
		},
		{
			title: "⁠ ⁠Key factors to select Mutual Funds",
			content:"Discover the key things to look for when picking Mutual Funds.",
			icon:Rm7
		}
	]
	
	return <Stack width="100%">

	  <Typography  fontWeight={700} fontSize={"25px"} textAlign={"center"} color="#000" textTransform={"uppercase"}>Roadmap of the webinar</Typography>

	  {data?.map((item) => {
		  return <CustomCard title={item.title} content={item.content} icon={item.icon} />
  })}
  </Stack>
}

export default Who;