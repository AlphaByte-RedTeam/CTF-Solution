# CTF Challenge

Platform: Root Me </br>
Type: `Web Server` </br>
Link: [HTML-Source Code](https://www.root-me.org/en/Challenges/Web-Server/HTML-Source-code) </br>
Hint: Request Header </br>
Clue: Modified the request header for X-Forwarded-For </br>

> I encourage you to find by yourself first! </br>

[Flag](./passphrase.txt) </br>

---

## Step 1
Open burpsuite. Go to `proxy` tab, then go to `options` and find `Match and Replace` section. </br>
![proxy tab](https://i.imgur.com/SkluCu8.png)

## Step 2
Add new rule. Specify the type to `Request header` because we want to modified the request header. Leave match to blank. And fill `Replace` column to `X-Forwarded-For: <ip_address>`. Below is the private IP Address ranges:
```
- 10.0.0.0 - 10.255.255.255 (subnet mask 255.0.0.0 or /8)
- 100.64.0.0 - 100.127.255.255 (subnet mask 255.192.0.0 or /10)
- 172.16.0.0 - 172.31.255.255 (subnet mask 255.240.0.0 or /12)
- 192.168.0.0 - 192.168.255.255 (subnet mask 255.255.0.0 or /16)
```
Assume that the private address is `192.168.0.x` (change `x` with any integer number range from `1-10`). Change the IP in `X-Forwarded-For` header to the IP you assume. Click `ok` if you done. Don't forget to check/enable the new rule that has been added.

## Step 3
Open Firefox and turn on foxy proxy. Refresh the browser and burpsuite will intercept the request. Forward the request and you will see the web page is changing to giving us the password.
![password](https://i.imgur.com/NkaS6Kg.png)

### Reference
[Internet lab](https://internet-lab.ru/ctf_ip_restriction_bypass)
