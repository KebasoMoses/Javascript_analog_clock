
let hourEl  = document.getElementById("hour")
let minEl = document.getElementById("min")
let secEl  = document.getElementById("sec")



setInterval(()=>{
    let date = new Date;

    let secDeg = date.getSeconds()/60 * 360 -90;

    secEl.style.transform = `rotate(${secDeg}deg)`

    let minDeg = date.getMinutes()/60 * 360 -90

    minEl.style.transform = `rotate(${minDeg}deg)`

    let hourDeg = date.getHours()/12 * 360 -90

    hourEl.style.transform = `rotate(${hourDeg}deg)`

},1000)





