let heading = document.querySelector('h1')
let header = heading.closest('header')

header.style.border = '5px solid'

let infoSection = document.querySelector('.info')
let infoPackage = document.querySelector('.info-package')
let packageTitle = document.querySelector('package-title')

Array.from(infoSection.children).forEach(element => {
  if (element) {
    element.style.border = '2px solid'
  }


});
// console.log('HERE', Array.from(infoSection));