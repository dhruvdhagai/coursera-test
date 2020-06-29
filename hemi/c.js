var NumberOfWords = 28

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "Tujhe Dekha To"
words[2] = "Chaiyya Chaiyya"
words[3] = "Dilbar"
words[4] = "I Am A Disco Dancer"
words[5] = "Tum Saath Ho"
words[6] = "Deewani Mastani"
words[7] = "Bezubaan"
words[8] = "Gallan Goodiyan"
words[9] = "Jashne Bahara"
words[10] = "Ishq Wala Love"
words[11] = "Tumhi Ho Bandhu"
words[12] = "Tukur Tukur!"
words[13] = "Kashmir Mein Tu Kanyakumar"
words[14] = "Titli"
words[15] = "Sun Saathiya"
words[16] = "Bhaag Milkha Bhaag"
words[17] = "Shubharambh"
words[18] = "Radha"
words[19] = "Dangal"
words[20] = "Samjhawan"
words[21] = "Taare Zameen Par"
words[22] = "Dilliwalli Girlfriend "
words[23] = "Re Kabira "
words[24] = "Rang De Basanti "
words[25] = "Raanjhaana"
words[26] = "Raabta"
words[27] = "Moh Moh Ke Daage"
words[28] = "Manwa Laage"

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