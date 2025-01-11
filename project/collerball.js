const button = document.querySelectorAll(".button")

const body = document.querySelector("body");

button.forEach( (button)=>{
    button.addEventListener('click', (e) =>{
  
        console.log(e) 
    if(e.target.id){
  body.style.backgroundColor =e.target.id
        }
    })

})
