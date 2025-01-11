const form = document.querySelector('form');
form.addEventListener( ('submit') ,(e)=>{
    e.preventDefault();
    const heighth = parseInt(document.querySelector('#hieght').value);
    const weigth =  parseInt(document.querySelector('#wieght').value);
    const result = document.querySelector('#results')
   if(heighth === '' || isNaN(heighth)|| heighth<1 ){
    result.innerHTML =`nt a valid hieght ${heighth}`

   }else if(weigth === '' || isNaN(weigth)|| weigth<1 ){
     result.innerHTML =`nt a valid hieght ${weigth}`
     
   }else{
const bmi = (weigth/(heighth*heighth/1000)).toFixed(2)

if(bmi <19){
    result.innerHTML = `<span> your ${bmi}  is Under Weight  </span>`;
}else if(bmi>26){
    result.innerHTML = `<span> your ${bmi}  is OVER Weight  </span>`;
}else{
result.innerHTML = `<span>${bmi} is normal</span>`;
    }
   }


})