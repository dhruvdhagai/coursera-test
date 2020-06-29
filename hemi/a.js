var NumberOfWords = 28

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "Miranda Bailey"
words[2] = "Owen Hunt"
words[3] = "Alex Karev"
words[4] = "Tom Koracick"
words[5] = "Derek Shepherd"
words[6] = "Richard Webber"
words[7] = "Theodora Altman"
words[8] = "Jackson Avery"
words[9] = "Preston Burke"
words[10] = "Meredith Grey"
words[11] = "Erica Hahn"
words[12] = "Cormac Hayes"
words[13] = "Atticus Lincoln"
words[14] = "Addison Montgomery"
words[15] = "Margaret Pierce"
words[16] = "Arizona Robbins"
words[17] = "Amelia Shepherd"
words[18] = "Mark Sloan"
words[19] = "Calliope Torres"
words[20] = "Megan Hunt"
words[21] = "Josephine Karev"
words[22] = "April Kepner"
words[23] = "Nathan Riggs"
words[24] = "Nico Kim"
words[25] = "Cristina Yang"
words[26] = "Andrew DeLuca"
words[27] = "Stephanie Edwards"
words[28] = "Alexandra Grey"

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
