# CTF Challenge

Platform: Root Me </br>
Type: `Cryptography` </br>
Link: [Hash-Message Digest 5](https://www.root-me.org/en/Challenges/Cryptanalysis/Hash-Message-Digest-5)
Hint: Use hashcat </br>
Clue: Message Digest 5 in short </br>

> I encourage you to find by yourself first! </br>
[Flag](./passphrase.txt) </br>

---

## Step 1
Create a file containing the given hash </br>

## Step 2
Crack the hash using hashcat by run this following command `hashcat -m 0 ch2.txt /usr/share/wordlists/rockyou.txt --force -O` </br>

## Step 3
You'll get the flag after the process is completed </br>
