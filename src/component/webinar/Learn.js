import React from "react";
import CustomCard from "./CustomCard";
import { Stack, Typography } from "@mui/material";
import "./Learn.css"; // Import your CSS file for scrollbar styling
import BookNow from "../button/BookNow";
import l1 from "./../../assets/images/l1.png";
import l2 from "./../../assets/images/get2k.png";
import l3 from "./../../assets/images/3R-Learn.png";
import l4 from "./../../assets/images/Recording.png";

const Learn = () => {
  const data = [
    {
      title: "Learn A - Z about Mutual Funds",
      content:
			  "Understand everything about Mutual Funds, explained in simple terms.",
	  icon:l1
    },
    {
      title: "Get a 2000/- Rs Coupon",
      content:
        "Get a 2000/- Rs coupon – a bonus just for joining us!",
		icon:l2
    },
    {
      title: "3-Hour Fun Learning",
      content:
			"Enjoy a lively 3-hour session with easy explanations and chances to ask questions.",
	  icon:l3
	  },
	  {
		  title: "Recording Available",
		  content: "Watch the recording later at your own pace.",
		  icon:l4
	}
  ];

  return (
    <Stack width={"100%"} height="500px" >
      <Typography fontWeight={700} fontSize={"25px"} textAlign={"center"} color="#000" textTransform={"uppercase"}>
        Learn in this webinar for?
      </Typography>
      <div className="custom-scrollbar">
        {data?.map((item, index) => (
			<CustomCard key={index} title={item.title} content={item.content} icon={ item.icon} />
        ))}
		  </div>
		  <BookNow/>
    </Stack>
  );
};

export default Learn;
