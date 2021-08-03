# CTF Challenge

Platform: Root Me </br>
Type: `Network` </br>
Link: [Bluetooth - Unknown file](https://www.root-me.org/en/Challenges/Network/Bluetooth-Unknown-file) </br>
Hint: .pcap </br>
Clue: Shark </br>

> I encourage you to find by yourself first! </br>

[Flag](./passphrase.txt) </br>

---

## Step 1
Open the .bin file in wireshark </br>

## Step 2
There's a Wireless tab, select Bluetooth devices and you'll see the device MAC Address and device name </br>

## Step 3
Concate the MAC Address (uppercase) and the device name, and check the [sum](http://www.sha1-online.com/) </br>

Example: `X0:Y1:Z2:12:34:56DeviceName` </br>
