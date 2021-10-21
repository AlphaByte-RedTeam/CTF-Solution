# CTF Challenge

Platform: Root Me </br>
Type: `Cryptanalysis` </br>
Link: [ELF64-PID Encryption](https://www.root-me.org/en/Challenges/Cryptanalysis/ELF64-PID-encryption) </br>
Hint: - </br>
Clue: Check the last PID </br>

> I encourage you to find by yourself first! </br>
[Flag](./passphrase.txt) </br>

---

## Step 1
Copy this command below </br>
```
p=$( cat /proc/sys/kernel/ns_last_pid) && ./ch21 $( openssl passwd -1 -salt awesome $(( p+2 )) )
```

## Step 2
Display the content in the `.passwd` file </br>
