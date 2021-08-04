# CTF Challenge

Platform: Root Me </br>
Type: `Web - Client` </br>
Link: [HTML - disabled buttons](http://challenge01.root-me.org/web-client/ch25/) </br>
Hint: Inspect </br>
Clue: Enabled </br>

> I encourage you to find by yourself first! </br>

[Flag](./passphrase.txt) </br>

---

## Step 1
Start the challenge, and inspect the browser. </br>

## Step 2
```<input disabled="" type="text" name="auth-login" value="" data-dashlane-rid="c467e97b20fed78d" data-form-type="other">
<input disabled="" type="submit" value="Member access" name="authbutton" data-dashlane-rid="f36253c6c13428da" data-form-type="action">```

Delete the `disabled` text or type `enabled` </br>

## Step 3
Type something in the text box, and click member access, it should give you access without validating, but if you don't type something, the browser will refresh </br>
