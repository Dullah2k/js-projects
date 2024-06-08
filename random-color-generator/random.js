const body = document.getElementsByTagName("body")[0]
const colorCode = document.getElementById("colorCode")
const btn = document.getElementById("changeColor")

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

btn.addEventListener("click", ()=> {
  hexColor = '#'
  for(let i=0; i<6; i++){
    hexColor += hex[gerRandomNumber()]
  }

  body.style.backgroundColor = hexColor
  colorCode.textContent = hexColor
})

function gerRandomNumber(){
  return Math.floor(Math.random() * hex.length)
}