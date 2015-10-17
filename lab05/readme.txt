Date:20/09/2015 
To:  Mark Yoder
From : Thejas Babu
Roll : B13223

  
a)In this lab we connected ultrasonic sensor(hc-sr04)to beaglebone

b)hc-sr04-ultraSonic.js contains code for using ultrasonic sensor to sense obstacle and  print distance  in cm.
							
	         
c)Ultrasonic sensor Reading (in cm)                       Actual Distance ( in cm)
			           5.4						6.0
			           6.2						7.1
			           6.6						7.2						
			           7.5						8.5						
			           8.5						9.7						
			           10						11.3					
				   15                                            18
				   18                                           19.8		           



d)The input signal is given to the trigger pin and then a wave is sent.when the wave is recieved back, the echo pin sends a signal to the Beaglebone.the distance is calculated based on the difference in time between these two events.

e) The error in the readings increases with increase in distance, however the percentage of error decreases.

f)We also used a proximity sensor.
	

