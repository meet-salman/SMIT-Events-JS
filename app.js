const bulb = document.querySelector('#bulb');
const box = document.querySelector('#box');


box.innerHTML = '<img  id="bulb"  src="./essets/Off.png" alt="bulb-off image"  width="400px"  height="400px">'


box.addEventListener('mouseover' , function () {
    box.innerHTML = '<img  id="bulb"  src="./essets/On.png" alt="bulb-on image"  width="400px"  height="400px">'
})


box.addEventListener('mouseout' , function () {
    box.innerHTML = '<img  id="bulb"  src="./essets/Off.png" alt="bulb-off image"  width="400px"  height="400px">'
    // console.log('Called');
})




const   button = document.querySelector('#button-hover');

button.addEventListener('mouseover' , function () {
    button.innerHTML = 'Click Me !'
})
button.addEventListener('mouseout' , function () {
    button.innerHTML = 'Hover Me'
})




const   redBtn = document.querySelector('#red');
const   blueBtn = document.querySelector('#blue');
const   yellowBtn = document.querySelector('#yellow');
const   greenBtn = document.querySelector('#green');
const   orangeBtn = document.querySelector('#orange');
const   purpleBtn = document.querySelector('#purple');
const   noneBtn = document.querySelector('#none');

const   color = document.querySelector('#color');


redBtn.addEventListener('mouseover' , function () {
    color.style.backgroundColor = "red";
    color.innerHTML = '<h1>Red</h1>'
})

blueBtn.addEventListener('mouseover' , function () {
    color.style.backgroundColor = "#00b1dd";
    color.innerHTML = '<h1>Blue</h1>'
})
yellowBtn.addEventListener('mouseover' , function () {
    color.style.backgroundColor = "yellow";
    color.innerHTML = '<h1>Yellow</h1>'
})
greenBtn.addEventListener('mouseover' , function () {
    color.style.backgroundColor = "green";
    color.innerHTML = '<h1>Green</h1>'
})
orangeBtn.addEventListener('mouseover' , function () {
    color.style.backgroundColor = "orange";
    color.innerHTML = '<h1>Orange</h1>'
})
purpleBtn.addEventListener('mouseover' , function () {
    color.style.backgroundColor = "purple";
    color.innerHTML = '<h1>Purple</h1>'
})
noneBtn.addEventListener('mouseover' , function () {
    color.style.backgroundColor = "white";
    color.innerHTML = '<h1>Hello Salman!</h1>'
})
























