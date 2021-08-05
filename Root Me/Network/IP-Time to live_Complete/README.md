# CTF Challenge

Platform: Root Me </br>
Type: `Network` </br>
Link: [IP-Time to live](https://www.root-me.org/en/Challenges/Network/IP-Time-To-Live) </br>
Hint: TTL Number </br>
Clue: Friday night </br>

> I encourage you to find by yourself first! </br>

[Flag](./passphrase.txt) </br>

---

## Step 1
Open the .pcap file in wireshark </br>

## Step 2
Since the TTL amount is increasing and "Time to Live Exceeded" message is seen for each of the packets, it seems to be the dump of "TraceRoute" command. </br>
The first packet is received to the target, and you can see the TTL value </br>
