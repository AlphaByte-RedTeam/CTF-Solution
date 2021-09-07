# CTF Challenge

Platform: Root Me </br>
Type: `Cryptanalysis` </br>
Link: [Shift Cipher](https://www.root-me.org/en/Challenges/Cryptanalysis/Shift-cipher) </br>
Hint: Recover the password </br>
Clue: - </br>

> I encourage you to find by yourself first! </br>
[Flag](./passphrase.txt) </br>

---

## Step 1
Download the challenge by running this command `wget http://challenge01.root-me.org/cryptanalyse/ch7/ch7.bin` </br>

## Step 2
Recover the password using this python script
```
#!/bin/python2

hash = open('ch7.bin', 'rb').read()

i = -100
while 1 < 100:
	print(''.join([chr(ord(c) - i) for c in hash]))
	i += 1
```

## Step 3
Run the python script by running this command `python2 fileName.py > output.txt` </br>
