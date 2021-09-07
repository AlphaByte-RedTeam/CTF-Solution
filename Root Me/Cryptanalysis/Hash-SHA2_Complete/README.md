# CTF Challenge

Platform: Root Me </br>
Type: `Cryptography` </br>
Link: [Hash-SHA2](https://www.root-me.org/en/Challenges/Cryptanalysis/Hash-SHA-2) </br>
Hint: The hash must be 64 character long </br>
Clue: oK </br>

> I encourage you to find by yourself first! </br>
[Flag](./passphrase.txt) </br>

---

## Step 1
From the given hash, hash must have a-f and 0-9 chars only. In the given hash, we must exclude `k` in the hash. </br>

## Step 2
Now, decrypt the hash using this [link](https://www.dcode.fr/sha256-hash) </br>

## Step 3
You'll get the cracked result. Now, encode the cracked hash by running this command `echo -n "4dM1n" | sha1sum` and you'll get the encoded sha1 password </br>
