import {  Route, Routes } from "react-router-dom";
import Webinar1 from "../component/webinar/Webinar1.0";

const AppRoute = () => {
 

  return (
	  <Routes>
		   <Route path={"/webinar"} element={<Webinar1 />} />
      <Route path={"/webinar"} element={<Webinar1 />} />
      
      
    </Routes>
  );
};

export default AppRoute;
