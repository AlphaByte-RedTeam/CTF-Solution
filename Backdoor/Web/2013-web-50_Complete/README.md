# CTF Challenge

Platform: Backdoor </br>
Type: `Web` </br>
Link: [2013-web-50](https://backdoor.sdslabs.co/challenges/2013-WEB-50) </br>
Hint: Cookie inspecting </br>
Clue: Username </br>

> I encourage you to find by yourself first! </br>
[Flag](./flag.txt) </br>

---

## Step 1
Visit the website [challenge](http://hack.bckdr.in:10003/). At first, you get a prompt that you aren't an admin. </br>
![web](https://imgur.com/hVDzZjL.png) </br>

## Step 2
Fire up your burpsuite, and turn on your FoxyProxy. Intercept the traffic. Send to repeater, and then change the cookie username to admin. Send it, and you should see the the flag. </br>
