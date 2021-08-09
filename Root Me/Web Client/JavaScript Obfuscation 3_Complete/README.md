# CTF Challenge

Platform: Root Me </br>
Type: `Web Client` </br>
Link: [JavaScript Obfuscation 3](https://www.root-me.org/en/Challenges/Web-Client/Javascript-Obfuscation-3) </br>
Hint: fromCharCode() </br>
Clue: What about the hex? </br>

> I encourage you to find by yourself first! </br>

[Flag](./passphrase.txt) </br>

---

## Step 1
Inspect the challenge, and you'll see the source code </br>

```

<html>
<head>
    <title>Obfuscation JS</title>
    <script type="text/javascript">
    function dechiffre(pass_enc){
        var pass = "70,65,85,88,32,80,65,83,83,87,79,82,68,32,72,65,72,65";
        var tab  = pass_enc.split(',');
                var tab2 = pass.split(',');var i,j,k,l=0,m,n,o,p = "";i = 0;j = tab.length;
                        k = j + (l) + (n=0);
                        n = tab2.length;
                        for(i = (o=0); i < (k = j = n); i++ ){o = tab[i-l];p += String.fromCharCode((o = tab2[i]));
                                if(i == 5)break;}
                        for(i = (o=0); i < (k = j = n); i++ ){
                        o = tab[i-l]; 
                                if(i > 5 && i < k-1)
                                        p += String.fromCharCode((o = tab2[i]));
                        }
        p += String.fromCharCode(tab2[17]);
        pass = p;return pass;
    }
    String["fromCharCode"](dechiffre("\x35\x35\x2c\x35\x36\x2c\x35\x34\x2c\x37\x39\x2c\x31\x31\x35\x2c\x36\x39\x2c\x31\x31\x34\x2c\x31\x31\x36\x2c\x31\x30\x37\x2c\x34\x39\x2c\x35\x30"));
    
    h = window.prompt('Entrez le mot de passe / Enter password');
    alert( dechiffre(h) );
    
</script>
</head>

</html>
```

## Step 2

Decode the hex value using [Hex Decoder](https://gchq.github.io/CyberChef/#input=XHgzNVx4MzVceDJjXHgzNVx4MzZceDJjXHgzNVx4MzRceDJjXHgzN1x4MzlceDJjXHgzMVx4MzFceDM1XHgyY1x4MzZceDM5XHgyY1x4MzFceDMxXHgzNFx4MmNceDMxXHgzMVx4MzZceDJjXHgzMVx4MzBceDM3XHgyY1x4MzRceDM5XHgyY1x4MzVceDMw) </br>
`\x35\x35\x2c\x35\x36\x2c\x35\x34\x2c\x37\x39\x2c\x31\x31\x35\x2c\x36\x39\x2c\x31\x31\x34\x2c\x31\x31\x36\x2c\x31\x30\x37\x2c\x34\x39\x2c\x35\x30` </br>

## Step 3
And then, you will get an array of number, use this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode) to decode the number and then you'll get the flag </br>
