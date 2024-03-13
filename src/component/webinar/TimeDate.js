import React from 'react';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { Stack, Typography } from '@mui/material';


const TimeDate = (props) => {
	const { icon, content } = props;
	return 				<Stack direction={"row"} sx={{ borderRadius: "5px", border: "1px solid #fdcd0d" }} alignItems={"center"} justifyContent={"center"} width={"250px"} spacing={1} p={1} mx={10} my={2}>
	<img src={icon} width={30}/>
		<Typography sx={{ fontSize: "17px", color: "#fff", textTransform: "uppercase" }}>{ content}</Typography>

	
</Stack>
}

export default TimeDate;