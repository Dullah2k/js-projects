const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
const upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const characters = [  "!", "@", "#", "$", "%", "&", "?", "~", "`", "^", "*", "|", "+", "="]
const passwordContents = [...numbers, ...upperCaseLetters, ...lowerCaseLetters, ...characters]

const btn = document.getElementById("getPassword")
const pwdText = document.getElementById("pwdText")

btn.addEventListener("click", ()=> {
  let password = ''
  for(let i=0; i<13; i++){
    password += passwordContents[generatePassword()]
  }
  pwdText.textContent = password
})

function generatePassword(){
  return Math.floor(Math.random() * passwordContents.length)
}
