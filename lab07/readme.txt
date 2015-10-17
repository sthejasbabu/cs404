Date:13/10/2015
 
  To   :Mark Yoder
  From :S Thejas Babu
  Roll :B13223
  Subject:lab07



 a)The gyroscope sends data in form of an array of length 14 with each element of data 8 bits each.

 b)The elements from 0 to 5 corresponds to accelorometer readings

 c)6 and 7corresponds to temperature sensor.

 d) 8 to 13 correspond to gyroscope readings. 

 e)The gyroscope sends data in 8 bits each. 

f)After shifting by 8 bits and adding the corresponding elements together, we get the respective values of acceleration, temperature and gyroscope. 

g)But we need to propogate 32 bit data. so we perform sign extension by forwarding and backwarding the 16 bit data by 16 bits, thus sending a 32 bit data with the same value

h)In the lab, we displayed the readings on a webpage using code in webpage.html,webpage_script.js .
