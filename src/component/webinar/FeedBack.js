import React from "react";
import "./../webinar/feedback.css";

const FeedbackCard = ({ username, message }) => {
	return (
	  <div className="card">
		<div className="card-header">
		  <img src="whatsapp_icon.png" alt="WhatsApp Icon" className="whatsapp-icon" loading="lazy"/>
		  <span className="username">{username}</span>
		</div>
		<div className="card-body">
		  <p>{message}</p>
		</div>
	  </div>
	);
};
  
export default FeedbackCard;
  