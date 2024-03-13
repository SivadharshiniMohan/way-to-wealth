import './App.css';
import Header from './component/Header';
import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';
import Data from './page/Service';
import { Stack } from '@mui/material';
import MutualFundsRoadmap from './component/MutalFundsRoadMap';
import { Routes, Route, Link as RouterLink } from "react-router-dom";
import Layout from './component/Layout';
import Webinar1 from './component/webinar/Webinar1.0';


function App() {

  return (
//	<Routes>
//	<Route path="/" element={<Layout/>} />
//	<Route path="/webinar" element={<Webinar1/>}/>
	  //  </Routes>
	  <Webinar1/>
  );
}

export default App;
