# CTF Challenge

Platform: Root Me </br>
Type: `Steganography` </br>
Link: [We Need to Go Deeper](https://www.root-me.org/en/Challenges/Steganography/We-need-to-go-deeper?action_solution=voir&debut_affiche_solutions=0#pagination_affiche_solutions) </br>
Hint: Image inside an image
Clue: Beer

> I encourage you to find by yourself first! </br>

[Flag](./passphrase.txt) </br>

---

## Step 1
Open terminal and use `exiftool` to extract from JPG. Do it twice </br>
`exiftool -b -ThumbnailImage ch10.jpg | exiftool -b -ThumbnailImage - > flag.jpg` </br>
