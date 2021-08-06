# CTF Challenge

Platform: Root Me </br>
Type: `Web Client` </br>
Link: [JavaScript Source](https://www.root-me.org/en/Challenges/Web-Client/Javascript-Source) </br>
Hint: Sources </br>
Clue: index </br>

> I encourage you to find by yourself first! </br>

[Flag](./passphrase.txt) </br>

---

## Step 1
Inspect the web </br>

## Step 2
Go to `Sources` tab and you'll find the pass </br>
```
<html>
    <head>
	<script type="text/javascript">
	/* <![CDATA[ */
	    function login(){
		pass=prompt("Entrez le mot de passe / Enter password");
		if ( pass == "123456azerty" ) {
		    alert("Mot de passe accepté, vous pouvez valider le challenge avec ce mot de passe.\nYou can validate the challenge using this password.");  }
		else {
		    alert("Mauvais mot de passe / wrong password !");
		}
	    }
	/* ]]> */
	</script>
    </head>
   <body onload="login();"><link rel='stylesheet' property='stylesheet' id='s' type='text/css' href='/template/s.css' media='all' /><iframe id='iframe' src='https://www.root-me.org/?page=externe_header'></iframe>

    </body>
</html>
```

## Step 3
The flag is the password </br>
