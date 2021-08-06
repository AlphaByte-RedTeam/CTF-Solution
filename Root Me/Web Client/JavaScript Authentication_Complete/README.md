# CTF Challenge

Platform: Root Me </br>
Type: `Web Client` </br>
Link: [JavaScript Authentication](https://www.root-me.org/en/Challenges/Web-Client/Javascript-Authentication) </br>
Hint: Inspect </br>
Clue: login.js </br>

> I encourage you to find by yourself first! </br>

[Flag](./passphrase.txt) </br>

---

## Step 1
Go to the challenge [link](http://challenge01.root-me.org/web-client/ch9/) and inspect it </br>

## Step 2
Go to `Sources` tab, and find `login.js` </br>
```
/* <![CDATA[ */

function Login(){
	var pseudo=document.login.pseudo.value;
	var username=pseudo.toLowerCase();
	var password=document.login.password.value;
	password=password.toLowerCase();
	if (pseudo=="4dm1n" && password=="sh.org") {
	    alert("Password accepté, vous pouvez valider le challenge avec ce mot de passe.\nYou an validate the challenge using this password.");
	} else { 
	    alert("Mauvais mot de passe / wrong password"); 
	}
}
/* ]]> */ 
```

## Step 3
`if (pseudo=="4dm1n" && password=="sh.org")` , as you can see, there's the username and password, the flag is the password </br>
