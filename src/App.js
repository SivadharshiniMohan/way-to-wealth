import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Home from './page/Home';
import About from './page/About';
import Services from './page/Services';
import Contact from './page/Contact';
import Service from './page/Services';
import Data from './page/Service';
import Slider from './component/slider/Slider';
import Roadmap from './component/slider/RoadMap';
import { Stack } from '@mui/material';


function App() {
  return (
  <Stack width="100wv" ><Header/>
  <Home/>
  <About/>
  {/* <Services/> */}
 <Data/>
 {/* <Slider/> */}
 <Roadmap/>
  <Contact/>
  </Stack>
  );
}

export default App;
