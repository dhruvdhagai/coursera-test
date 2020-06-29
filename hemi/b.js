var NumberOfWords = 28

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "Tanhaji"
words[2] = "Baaghi 3"
words[3] = "Street Dancer 3D"
words[4] = "Jab We Met"
words[5] = "Hera Pheri"
words[6] = "Munna Bhai M.B.B.S."
words[7] = "Bajrangi Bhaijaan"
words[8] = "PK"
words[9] = "My Name Is Khan"
words[10] = "Chak de! India"
words[11] = "Guru"
words[12] = "Barfi!"
words[13] = "Drishyam"
words[14] = "Queen"
words[15] = "Dil Chahta Hai"
words[16] = "Bhaag Milkha Bhaag "
words[17] = "Special 26"
words[18] = "Zindagi Na Milegi Dobara"
words[19] = "Dangal"
words[20] = "A Wednesday"
words[21] = "Taare Zameen Par"
words[22] = "Swades"
words[23] = "Gangs of Wasseypur "
words[24] = "Rang De Basanti "
words[25] = "3 Idiots"
words[26] = "Lagaan"
words[27] = "Love Aaj Kal"
words[28] = "Airlift"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

var c = 0
function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]

c++
console.log(c)
frm.point.value=c
}

function PickRandomWord2(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]

c--
console.log(c)
frm.point.value=c
}