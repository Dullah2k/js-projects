const body = document.getElementsByTagName("body")[0]
const colorCode = document.getElementById("colorCode")
const btn = document.getElementById("changeColor")

const colors = ['green', 'red', 'yellow', 'white']

btn.addEventListener("click", ()=>{
  const randomNumber = getRandomColor()
  console.log(randomNumber);
  body.style.backgroundColor = colors[randomNumber]
  colorCode.textContent = colors[randomNumber].toUpperCase()
})

function getRandomColor(){
  return Math.floor(Math.random() * colors.length) 
}