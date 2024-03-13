import { Stack } from '@mui/material';
import React from 'react';
import Header from './Header';
import Home from '../page/Home';
import About from '../page/About';
import Data from '../page/Service';
import MutualFundsRoadmap from './MutalFundsRoadMap';
import Contact from '../page/Contact';


const Layout = () => {
	const roadmapPoints = [
		'Why Mutual Funds?',
		'How Do Mutual Funds Work?',
		'Technical Advantages And Benefits',
		'Types Of Mutual Funds',
		'SIP & LUMPSUM',
		'Active Fund & Passive Fund',
		'How To Invest In Mutual Funds?',
	  ];
	return <>
	  <Stack width="100wv" >
		  <Header />
  <Home/>
  <About/>
 <Data/>
		  <MutualFundsRoadmap points={roadmapPoints} />
		  <Contact />
  </Stack>
	</>
}

export default Layout;

