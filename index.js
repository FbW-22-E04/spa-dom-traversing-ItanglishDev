let heading = document.querySelector('h1')
let header = heading.closest('header')

header.style.border = '5px solid'

let infoSection = document.querySelector('.info')
let infoPackage = document.querySelector('.info-package')
let packageTitle = document.querySelector('.info .package-title')
let label = document.querySelector('.info .info-package')
Array.from(infoSection.children).forEach(element => {
  if (element) {
    element.style.border = '2px solid'
  }


});
// console.log('HERE', Array.from(infoSection));

Array.from(infoSection.children).forEach(el => {

  if (el.children[2].matches('.mild')) {
    el.children[2].style.border = '2px solid yellow'
  } else if (el.children[2].matches('.intense')) {
    el.children[2].style.border = '2px solid orange'
  } else if (!el.children[2].matches('.mild') || !el.children[2].matches('.intense'))
    el.children[2].style.border = '2px solid red'

})

// if (label)
console.log('INFO', infoSection.children);

