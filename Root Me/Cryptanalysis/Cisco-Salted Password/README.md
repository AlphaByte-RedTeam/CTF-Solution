# CTF Challenge

Platform: Root Me </br>
Type: `Cryptanaysis` </br>
Link: [CISCO - Salted Password](https://www.root-me.org/en/Challenges/Cryptanalysis/CISCO-Salted-Password) </br>
Hint: John, Hashcat, openssl </br>
Clue: dolphins password </br>

> I encourage you to find by yourself first! </br>
[Flag](./passphrase.txt) </br>

---

## Step 1
Find the hashes in the config. </br>
`enable secret 5 $1$mERr$A419.HL58lq743wXS4kSM1`
`username administrator secret 5 $1$mERr$yhf7f2RnC74CxKANvoekD.`

## Step 2
Concat the hashes. </br>
```
echo '$1$mERr$A419.HL58lq743wXS4kSM1' > hashes.txt
echo '$1$mERr$yhf7f2RnC74CxKANvoekD.' >> hashes.txt
```

## Step 3
Crack the hash using hashcat </br>
```
hashcat --status --hash-type 500 --attack-mode 0 hashes.txt /usr/share/wordlists/rockyou.txt
```
