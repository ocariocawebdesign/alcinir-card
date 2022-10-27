//https://www.npmjs.com/package/react-whatsapp-chat-widget
import React from "react";

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

const WhatsAppButton = () => {
	return (
		<WhatsAppWidget
			phoneNo="5521967530653"
			position="right"
			widgetWidth="300px"
			widgetWidthMobile="260px"
			autoOpen={false}
			autoOpenTimer={1000}
			messageBox={true}
			messageBoxTxt="Olá gostaria de ter informações?"
			iconSize="48"	
			iconColor="white"
			iconBgColor="#23C660"
			headerIcon=""
			headerIconColor="pink"
			headerTxtColor="black"
			headerBgColor="#23C660"
			headerTitle="Alcinir Pessanha"
			headerCaption="Online"
			bodyBgColor="#FAFAFA"
			chatPersonName="Alcinir Pessanha"
			chatMessage={<>Olá! 👋 <br /><br /> Como posso ajudar?</>}
			footerBgColor="#23C660"
			btnBgColor="yellow"
			btnTxtColor="black"
			btnTxt="Inicie a conversa"
		/>
	);
};

export default WhatsAppButton;