//ojects are like maps/structs
//objects inside objects is possible
// "use strict"
//return a list of all integers squared

// var a=[10,0.3,9,-0.3,0.2,20]

// var conv=(arr)=>{
//     var ret=arr.filter((x) => {return Number.isInteger(x)&&x>0}).map((x) => {return x*x});
//     return ret;
// }
// a=conv(a)
// // console.log(a);
// var struct={"base1":"kuch bhi","base2":"kuch bhi 2"}
// var {"base2":ff} = struct
// console.log(ff)

const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]



const button=document.getElementById("btn")
const color=document.querySelector(".color")

button.addEventListener("click",()=>{
    let n=hex.length
    var hexcolor="#"
    for(let i=0;i<6;i++)
    {
        let index=Math.floor(Math.random()*n)
        hexcolor+=hex[index]   
    }
    console.log(hexcolor)
    document.body.style.backgroundColor = hexcolor
    color.textContent=hexcolor
})  

