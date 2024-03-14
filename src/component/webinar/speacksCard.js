import { Stack, Typography } from "@mui/material";
import React from "react";


const SpeaksCard = (props) => {
	const {  icon,title } = props
	return <Stack sx={{background:"#000", borderRadius:"10px",   padding: "30px 22px"}} width={"40%"} m={2} spacing={3}>
		<Stack direction={"row"} gap={3}   alignItems={"center"} width={"100%"} flexDirection={"column"}>
			<img src={icon} width={80} loading="lazy" />
			<Typography fontSize={"19px"} textAlign={"center"}  fontWeight={700} color={"#fff"}>{title}</Typography>
		</Stack>
	</Stack>
}
export default SpeaksCard;
