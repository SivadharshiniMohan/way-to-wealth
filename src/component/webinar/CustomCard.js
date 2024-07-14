import { Stack, Typography } from "@mui/material";
import React from "react";

const CustomCard = (props) => {
	const {  icon,title, content } = props
	return <Stack sx={{background:"#000", borderRadius:"10px",    padding: "30px 22px"}} width={"80%"} m={2} spacing={3}>
		<img src={icon} width={60} loading="lazy"/>
		<Typography fontSize={"19px"} fontWeight={700} color={"#fff"}>{title}</Typography>
		<Typography fontSize={"16px"} color={"#777"}>{ content}</Typography>
	</Stack>
}
export default CustomCard;
