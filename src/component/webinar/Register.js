import { Stack, Typography } from '@mui/material';
import React from 'react';
import BookNow from '../button/BookNow';

const Register = () => {
	return  	<Stack direction="row" alignItems={"center"} justifyContent={"center"} flexDirection={"column"} gap={2} my={2} py={1} px={3} sx={{background:"#000",textAlign:"center"}} >
	
	<Typography fontWeight={600} fontSize={"22px"} width={"300px"}  color="#fff" mx={2}>If yes, join for our webinar </Typography>
		<BookNow/>
	</Stack>
}

export default Register;