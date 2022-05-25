const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const toggleBtn = document.querySelector('.toggle')
const timeEl = document.querySelector('.digital')
const dateEl = document.querySelector('.date')
const day = document.querySelector('.circle')

const days = ["Monday","Tuesday","Wednesday","Thursday","Friday",
"Saturday","Sunday"]

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug",
"Sept","Oct","Nov","Dec"]



toggleBtn.addEventListener('click',()=>{
    const html = document.getElementsByTagName('html')[0]
    html.classList.toggle('dark')
    if (html.classList.contains('dark')) {
        toggleBtn.innerText = 'Light mode'
    } else {
        toggleBtn.innerText = 'Dark mode'
    }
})


function setTime(){
    const time = new Date()
    const date = time.getDate()
    const month = time.getMonth()
    const day = time.getDay()
    const hours = time.getHours()
    const hrsForClock = hours % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()  
    const deg = 6
    const degHr = 30



    let hh = ((hrsForClock) + minutes/60) * degHr
    let mm = minutes * deg
    let ss = seconds * deg
    hourEl.style.transform = `translate(-50%, -100%) rotateZ(${hh}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotateZ(${mm}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotateZ(${ss}deg)`

    timeEl.innerHTML = `${hrsForClock < 10 ? `0${hrsForClock}`: hrsForClock}:${minutes < 10 ? `0${minutes}`: minutes} ${hours >= 12 ? "PM" : "AM"}`
    dateEl.innerHTML = `${days[day-1]}, ${months[month]} 
    <span class='circle'>${date}</span>`


}

setTime()

setInterval(() => {
    setTime()
}, 1000);