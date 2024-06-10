const reviews = [
  {
    id: 1,
    name: 'lionel messi',
    job: 'web developer',
    img: 'images/pessi.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'images/ceo.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'images/chang.jpg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'images/cr6.png',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

const next = document.getElementById("next")
const prev = document.getElementById("prev")
const randomBtn = document.getElementById("randomBtn")

const image = document.getElementsByTagName("img")[0]
const personName = document.querySelector(".name-role .name")
const job = document.querySelector(".name-role .job")
const desc = document.querySelector(".desc")

let currentItem = 0

window.addEventListener("DOMContentLoaded", ()=> {
  getItem(currentItem)
})

next.addEventListener("click", ()=> {
  currentItem++
  if(currentItem > reviews.length - 1){
    currentItem = 0
  }
  getItem(currentItem)
})

prev.addEventListener("click", ()=> {
  currentItem--
  if(currentItem < 0){
    currentItem = 0
  }
  getItem(currentItem)
})

randomBtn.addEventListener("click", ()=> {
  currentItem = Math.floor(Math.random()*reviews.length)
  getItem(currentItem)
})

function getItem(currentItem){
  image.src = reviews[currentItem].img
  personName.textContent = reviews[currentItem].name
  job.textContent = reviews[currentItem].job
  desc.textContent = reviews[currentItem].text
}