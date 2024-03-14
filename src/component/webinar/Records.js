import { Stack } from "@mui/material";
import React from "react";
import SpeaksCard from "./speacksCard";
import fiveK from "./../../assets/images/Working Professionals 5k.png";
import Rm3 from "./../../assets/images/rm3.png";


const Record = () => {
	return <Stack width={"100%"} direction={"row"} justifyContent={"center"}>
		<SpeaksCard icon={fiveK} title={"5000+ Students Enrolled"} />
		<SpeaksCard icon={Rm3} title={"86.4% Sold Out"} />

	</Stack>
}

export default Record;