const map  = new Map();
map.set(1,"qwhu")
map.set(2,"pand")
map.set(3,"pand")
map.set(3,"pand")
//console.log(map,"jd")

// for (const [key,value] of map) {
// console.log(key+ "map 2"+value)    
// }

// const name ={ id: 1, name: "Alice" }
// for (const key in name) {
//     console.log(name[key] ,"obj")
        
    
// }

const user = [{
    name: "Alice",
    age: 25,
    isActive: true,
  },{
    name: "bima",
    age: 24,
    isActive: false,

  },{
    name: "bahuma",
    age: 21,
    isActive: false,
    
  },{
    name: "namua",
    age: 17,
    isActive: false,
    
  }];
  
//   user.forEach( (item ,index)=>{
//     console.log(item,index);

//   })


  const user1 = [{
    name: "Alice",
    age: 25,
    isActive: true,
  },{
    name: "bima",
    age: 24,
    isActive: false,

  },{
    name: "bahuma",
    age: 21,
    isActive: false,
    
  },{
    name: "namua",
    age: 17,
    isActive: false,
    
  }];

 const u1=  user1.map( ( item) => item.age +1).filter( (item) => item > 19);
 //console.log(u1,"u1array")


 let myarr = [1,2,3,4]
 const re =myarr.reduce(( acc , curr)=>(acc+curr),0)

console.log(re,"re");

 

