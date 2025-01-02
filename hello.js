const a ="ashu";
const reverse = ()=>{
  return a.split('').reverse().join('')
  //  console.log(b);
    
}

console.log(reverse());

const str ="amn"

const unique =()=>{
    debugger
    const charset = new Set();
    let isUnique = true
    for(i of str){
if(charset.has(i)){
    isUnique = false
    break;
    }
charset.add(i)


}
//(isUnique) ? console.log("all char are true") : console.log(`all char are false`);
}

unique();

const sort = ()=>{
    let ele = "debu"
 const b = ele.split('').reverse().join('');
(b == ele) ? console.log(`this ${ele} is pyboniac series`): console.log(`nott a series`);

}
sort();
