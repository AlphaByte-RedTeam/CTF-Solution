# CTF Challenge

Platform: Root Me </br>
Type: `Web Client` </br>
Link: [JavaScript Obfuscation 2](https://www.root-me.org/en/Challenges/Web-Client/Javascript-Obfuscation-2) </br>
Hint: Going down 3 floors </br>
Clue: - </br>

> I encourage you to find by yourself first! </br>

[Flag](./passphrase.txt) </br>

---

## Step 1
Go to the challenge site and inspect it, go to sources, and then see the `pass` variable </br>
```

<html>

<head>
	<title>Obfuscation JS</title>
<!-- 
Obfuscation 
.Niveau : Facile 
.By Hel0ck
.The mission : 
	Retrouver le password contenu dans la var pass.
	You need my help ? IRC : irc.root-me.org #root-me
-->
<script type="text/javascript">
	var pass = unescape("unescape%28%22String.fromCharCode%2528104%252C68%252C117%252C102%252C106%252C100%252C107%252C105%252C49%252C53%252C54%2529%22%29");
</script>
</head>

</html>
```

## Step 2
Decode the string inside the parenthases using this [link](https://gchq.github.io/CyberChef/#input=JTI4MTA0JTJDNjglMkMxMTclMkMxMDIlMkMxMDYlMkMxMDAlMkMxMDclMkMxMDUlMkM0OSUyQzUzJTJDNTQlMjk) </br>

## Step 3
Decode the escaped sequences output after `fromCharCode` </br>
```unescape("String.fromCharCode%28104%2C68%2C117%2C102%2C106%2C100%2C107%2C105%2C49%2C53%2C54%29")```

## Step 4
Then decode it again, and you'll get the right `fromCharCode` function, decode it again in this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode) </br>
```(104,68,117,102,106,100,107,105,49,53,54)```

## Step 5
Run this `console.log(String.fromCharCode(104,68,117,102,106,100,107,105,49,53,54));` and you'll get the flag </br>
