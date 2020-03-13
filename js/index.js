let $bar = document.querySelector('.progress')
let $progressText = document.querySelector('.progressText')
let $h1 = document.getElementById('heading')
let $titleBar = document.querySelector('.titleBar')
let title = document.querySelector('h1').textContent
let text = document.querySelector('main').textContent
let $readingTime = document.getElementById('readingTime')

window.addEventListener('scroll', event => {
let windowH = window.innerHeight
let documentH = document.documentElement.scrollHeight
let amtScrolled = window.scrollY
let ttlAvailable = documentH - windowH
let percent = amtScrolled / ttlAvailable

$bar.style.width = `${percent * 100}%`
$progressText.textContent = `${Math.round(percent*100)}%`

let h1Top = $h1.offsetTop
let h1Height = $h1.clientHeight
console.log(h1Top, h1Height, amtScrolled)

if (amtScrolled > h1Top + h1Height) {
    console.log('H1 is off the top')
    $titleBar.classList.add(`show`)
    $titleBar.innerHTML = `${title}`;
} else {
    $titleBar.classList.remove(`show`)
    $titleBar.innerHTML = ``;
}

})

// let wordCount = (text.split(" ").length );
// console.log(wordCount)

const regex = /\s\S/g;
const found = text.trim().match(regex);
let wordCount = Math.floor(Math.round(found.length+1)/200);

if (wordCount == "1") {
    $readingTime.innerHTML = `less than a minute`;
}
if (wordCount == "2") {
    $readingTime.innerHTML = `less than two minutes`;
}  
if (wordCount == "3") {
    $readingTime.innerHTML = `less than three minutes`;    
}
if (wordCount == "4") {
    $readingTime.innerHTML = `less than four minutes`;    
}  
if (wordCount == "5") {
    $readingTime.innerHTML = `less than five minutes`;    
}  
if (wordCount == "6") {
    $readingTime.innerHTML = `less than six minutes`;    
}    
if (wordCount == "7") {
    $readingTime.innerHTML = `less than seven minutes`;    
}    
if (wordCount == "8") {
    $readingTime.innerHTML = `less than eight minutes`;    
}    
if (wordCount == "9") {
    $readingTime.innerHTML = `less than nine minutes`;       
}    
if (wordCount == "10") {
    $readingTime.innerHTML = `less than ten minutes`;       
}    
if (wordCount >= "11") {
    $readingTime.innerHTML = `more than ten minutes`; 
}    
