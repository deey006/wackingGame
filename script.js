const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')
const startBtn = document.querySelector('.start')
const stopBtn = document.querySelector('.stop')
const minute = document.querySelector('.minute')
const seconds = document.querySelector('.seconds')
const score = document.querySelector('#score')
const speed = document.querySelector('#speed')
const container = document.querySelector('.circle-container')


startBtn.hidden = false
stopBtn.hidden = true

one.value = 1
two.value = 2
three.value = 3
four.value = 4
five.value = 5
six.value = 6
seven.value = 7
eight.value = 8
nine.value = 9

scored = 0
score.innerHTML = scored

let myarray = [one, two, three, four, five, six, seven, eight, nine];

// Toggling Start and stop button
function toggleBtn () {
    startBtn.hidden = true
        stopBtn.hidden = false
}

function reverse () {
    stopBtn.hidden = true
        startBtn.hidden = false
}


speed.innerHTML = 0

min = 0
sec = 0
seconds.innerHTML = sec
minute.innerHTML = min

// Timer Function
function timer () {
    sec++
    seconds.innerHTML =  sec
    if (sec < 10 && min < 10) {
        seconds.innerHTML = "0" + sec
        minute.innerHTML = "0" + min
    } else {
        seconds.innerHTML = sec
        minute.innerHTML = min
    }
    if (sec > 59) {
        sec = 0 
        minute.innerHTML = min
        min ++
    }
}

// Incrementing Timer speed at every Level
let timerIntervals
function firstInt() {
    timerIntervals = setInterval(timer, 4000);
}
function myTimeInterval() {
    if (min === 1){
        speed.innerHTML = 1
        timerIntervals = setInterval(timer, 3500);
    } else if (min === 2){
        speed.innerHTML = 2
        timerIntervals = setInterval(timer, 3000);
    } else if (min === 3){
        speed.innerHTML = 3
        timerIntervals = setInterval(timer, 2500);
    } else if (min === 4){
        speed.innerHTML = 4
        timerIntervals = setInterval(timer, 1000);
    }
}
let secondInt
function setTimer() {
    firstInt()
    secondInt = setInterval(myTimeInterval,3000)  
}


function removeBackground () {
    myarray.forEach(elemet => {
        elemet.style.background = 'wheat'
    });
}

// Generating Random Number ever 100th of a Second
let randomVar 
let times

function setNow() {
      randomVar = Math.floor(Math.random() * 10)  
}

function callint() {
    times = setInterval(setNow, 100);
}


 function interval () {
    callint()

        if (randomVar === 1) {
            one.style.background = 'red'
        }else {
            one.style.background = 'wheat'
        }   
        if (randomVar === 2) {
            two.style.background = 'blue'
        }else {
            two.style.background = 'wheat'
        }   
        if (randomVar === 3) {
            three.style.background = 'green'
        }else {
            three.style.background = 'wheat'
        }   
        if (randomVar === 4) {
            four.style.background = 'orange'
        }else {
            four.style.background = 'wheat'
        }   
        if (randomVar === 5) {
            five.style.background = 'violet'
        }else {
            five.style.background = 'wheat'
        }   
        if (randomVar === 6) {
            six.style.background = 'indigo'
        }else {
            six.style.background = 'wheat'
        }   
        if (randomVar === 7) {
            seven.style.background = 'coral'
        }else {
            seven.style.background = 'wheat'
        }   
        if (randomVar === 8) {
            eight.style.background = 'brown'
        }else {
            eight.style.background = 'wheat'
        }   
        if (randomVar === 9) {
            nine.style.background = 'gold'
        }else {
            nine.style.background = 'wheat'
        }   
}

let myInterval; 


// FUNCTION CREATED TO CHECK IF CORRECT CIRCLE IS CLICKED AND INCREMENT SCORE
function clicked (e) {
    if(e.target.value === randomVar){
        scored++
        score.innerHTML = scored
    }    
}

// FUNCTION TO RESET THE GAME IF STOP GAME BUTTON IS CLICKED
function clearAll() {
    clearInterval(myInterval)
    clearInterval(secondInt)
    clearInterval(timerIntervals)
    removeBackground()
    reverse()
    score.innerHTML = 0
    speed.innerHTML = 0
    min = 0
    sec = 0      
}
 let callGameSpeed
 function int () {
    myInterval = setInterval(interval, 2000)   
    toggleBtn()
    setTimer()
}
function stopInt () {
    clearAll()
}


//ALL EVENT LISTENERS
startBtn.addEventListener('click', int)
stopBtn.addEventListener('click', stopInt)
container.addEventListener('click', clicked)


