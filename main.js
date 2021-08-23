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

const colors=["red","blue","green","black","purple","orange","violet","indigo","yellow"]

const button=document.getElementById("btn")
const color=document.querySelector(".color")

button.addEventListener("click",()=>{
    let n=colors.length
    let index=Math.floor(Math.random()*n)
    console.log(index)
    document.body.style.backgroundColor = colors[index]
    color.textContent=colors[index] 
})  

