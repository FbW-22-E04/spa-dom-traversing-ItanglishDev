let heading = document.querySelector('h1')
let header = heading.closest('header')

header.style.border = '5px solid'

let img = document.querySelectorAll('img')
let infoSection = document.querySelector('.info')
let infoPackage = document.querySelectorAll('.info-package')
let packageTitle = document.querySelectorAll('.package-title')
let label = document.querySelector('.info .info-package')
let image = document.querySelector('img')

// Array.from(infoSection).forEach(el => {
//   if (el.children.matches('.info-package')) {
//     el.previousSibling.style.border = '2px solid'
//   }
// })
infoPackage.forEach(el => {
  if (infoPackage) {
    el.firstElementChild.style.border = '2px solid'
  }

});
console.log(infoPackage);
// console.log(packageTitle);

// {Array.from(infoPackage.children).forEach(element => {
//   if (element) {
//     element.style.border = '2px solid'
//   }
// console.log('INFO', infoSection.children, "THIS", infoPackage.matches('.info-package'));

// });}
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
// console.log('INFO', infoSection.children);

const allNav = document.querySelector('nav ul')
const siteMap = document.querySelector('footer .site-map')
const copyOfAllNav = document.querySelector('nav ul')

console.log(allNav);

// Array.from(allNav).forEach(el => {
siteMap.appendChild(allNav)
// allNav.appendChild(copyOfAllNav)
// allNav.appendChild(siteMap)

// })

console.log('SITE MAP', siteMap);
// console.log(' MAP', allNav);
