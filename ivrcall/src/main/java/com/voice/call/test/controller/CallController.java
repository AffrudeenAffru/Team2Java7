package com.voice.call.test.controller;

import java.net.URI;
import java.net.URISyntaxException;
import com.twilio.rest.api.v2010.account.Message;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Call;
import com.twilio.type.PhoneNumber;

@RestController

@CrossOrigin(origins ="http://localhost:4200")
public class CallController {
	 private final static String ACCOUNT_SID = "ACb22d1ea6321e2638a9eafb8d104e90d4";
		private final static String AUTH_ID = "900dc096bdae9a42059d0c7c018fc463";
		private final static String FROM_NUMBER="+12053464341";
		private final static String TO_NUMBER ="+917010593757";

		static {
			   Twilio.init(ACCOUNT_SID, AUTH_ID);
			}
@GetMapping("/voicecall")
@CrossOrigin(origins ="http://localhost:4200")
public String makeVoiceCall() throws URISyntaxException  {
	Call.creator(new PhoneNumber(TO_NUMBER), new PhoneNumber(FROM_NUMBER),
			   new URI("http://demo.twilio.com/docs/voice.xml")).create();
    
	return "Sucess";}
@GetMapping("/txt")
@CrossOrigin(origins ="http://localhost:4200")
public String makeVoiceCall2() {

    Message message = Message.creator(new PhoneNumber(TO_NUMBER),
        new PhoneNumber(FROM_NUMBER), 
        "Hi!! VoiseFonica says Hiiiii!  Take 20% off your recharge  with code TEAM2 ").create();

    System.out.println(message.getSid());

	return "sucess";
}
}




























