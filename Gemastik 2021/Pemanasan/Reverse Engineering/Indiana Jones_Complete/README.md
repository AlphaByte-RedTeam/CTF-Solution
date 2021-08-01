# CTF Challenge

Platform: Gemastik 2021 </br>
Type: `Reverse Engineering` </br>
Link: - </br>
Hint: Use decompiler </br>
Clue: - </br>

> I encourage you to find by yourselft first! </br>

[Flag](./passphrase.txt) </br>

---

## Step 1
Decompiled the .jar file </br>

## Step 2
```public static void main(final String[] args) {
        final String next = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890~!@#$%^&*()-_=+[{]};:<,>./?|";

        for (final char c : next.toCharArray()) {
            char d = (char)(((c << 5 | c >> 3) ^ 0x6F) & 0xFF);
            String s = Integer.toHexString((int)d);
            if(s.equals("23") || s.equals("21") || s.equals("9") || s.equals("c1")){
              System.out.println(c);
          }
        }
        System.out.println("Success");
    }```
Compile the code. And it should give you the flag </br>
