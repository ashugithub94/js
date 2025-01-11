
const mytime = document.getElementById('clock');
setInterval( ()=>{
let date = new Date();
mytime.innerHTML =date.toLocaleTimeString();
},1000)