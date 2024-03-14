import React from 'react';
import CustomCard from './CustomCard';
import { Typography, Stack } from '@mui/material';
import Professionals from "./../../assets/images/WorkingProfessionals.png";
import student from "./../../assets/images/WorkingProfessionalsstudent.png";
import Beginners from "./../../assets/images/WorkingProfessionalsbeg.png"

const MonthlySalary = () => {
	const data = [{
		title: "Working Professionals",
		content: " Boost your financial knowledge for a secure future.",
		icon: Professionals
	}, {
		title: "College Students",
		content: "Learn the ABCs of mutual funds to kickstart your financial journey.",
		icon:student
		}, {
		title: "Beginners",
		content: "Get started with mutual funds and build a strong financial foundation.",
			icon:Beginners
		}]
	return <Stack width="100%">
      <Stack direction="column" alignItems="center" justifyContent="center" my={2}  textAlign="center">
		<Typography color="#000" fontWeight={700} fontSize={"30px"} textTransform={"capitalize"} fontFamily={"Montserrat"} mt={2}>This webinar is designed for</Typography>
		</Stack>
		{data?.map((item) => {
			return<Stack direction={"row"} width={"100%"} justifyContent={"center"}>
				<CustomCard title={item.title} content={item.content} icon={item.icon} />
				</Stack>
	})}
	</Stack>

	
}

export default MonthlySalary;