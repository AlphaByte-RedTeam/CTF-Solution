# CTF Challenge

Platform: Root Me </br>
Type: `Web Client` </br>
Link: [JavaScript Obfuscation 1](https://www.root-me.org/en/Challenges/Web-Client/Javascript-Obfuscation-1?lang=en) </br>
Hint: Escape sequence </br>
Clue: Unescape </br>

> I encourage you to find by yourself first! </br>

[Flag](./passphrase.txt) </br>

---

## Step 1
Open the challenge, and if you get a prompt, just click cancel </br>

## Step 2
Inspect the website, go to `Sources`, and click on `ch4.html` </br>
```
<html>
    <head>
        <title>Obfuscation JS</title>

          <script type="text/javascript">
              /* <![CDATA[ */

              pass = '%63%70%61%73%62%69%65%6e%64%75%72%70%61%73%73%77%6f%72%64';
              h = window.prompt('Entrez le mot de passe / Enter password');
              if(h == unescape(pass)) {
                  alert('Password accepté, vous pouvez valider le challenge avec ce mot de passe.\nYou an validate the challenge using this pass.');
              } else {
                  alert('Mauvais mot de passe / wrong password');
              }

              /* ]]> */
          </script>
    </head>
   <body><link rel='stylesheet' property='stylesheet' id='s' type='text/css' href='/template/s.css' media='all' /><iframe id='iframe' src='https://www.root-me.org/?page=externe_header'></iframe>
    </body>
</html>
```

## Step 3
You see the `pass` variable in a gibberish text, decode it using this [link](https://www.urldecoder.io/) and you'll get the flag </br>
