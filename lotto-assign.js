let input1=document.getElementById("input1")
let input2=document.getElementById("input2")
let input3=document.getElementById("input3")

let displayGen= document.getElementById("display-gen")
let displayRand= document.getElementById("display-rand")

let texter =document.getElementById("texter")
let result = document.getElementById("result")
let formSec = document.forms[0]

// function inpSubmit(){
//     const valueinp=[]
//     valueinp[0]=input1.value
//     valueinp[1]=input2.value
//     valueinp[2]=input3.value
// //     if(input3.value==""|| input3.value==0){

// //     }else{
// // valueinp[2]=input3.value;
// //     }
// displayGen.innerHTML=valueinp ;
// console.log(typeof(valueinp))
// console.log(typeof(displayGen))
// }

formSec.addEventListener('submit',(event)=>{
    event.preventDefault();
    const valueinp=[]
    valueinp[0]=input1.value
    valueinp[1]=input2.value
    valueinp[2]=input3.value
    displayGen.innerHTML=valueinp ;

    const generate =[]
    for(let i=0;i<6;i++){
    let random =Math.floor(Math.random()*100)
    generate[i]= random
    displayRand.innerHTML = generate  
  console.log(random)

    
    }
    if(displayGen.innerHTML === ",," || displayGen.innerHTML === 0){
        texter.innerHTML = "input your values,please!"
        texter.style.color ="red"
        texter.style.fontSize ="50px"
        texter.style.textAlign = "center"
    }else 
    if(
        generate.includes(valueinp[0])&&
        generate.includes(valueinp[1])&&
        generate.includes(valueinp[2])){
            texter.innerHTML = "Congratulation,You win!"
            texter.style.color ="green"
            texter.style.fontSize ="50px"
            texter.style.textAlign = "center"
    }else{
        texter.innerHTML = "oops!,You loose"
        texter.style.color ="red"
        texter.style.fontSize ="50px"
        texter.style.textAlign = "center"
    }
   if(valueinp[0]=="" && valueinp[1]=="" && valueinp[2]=="" ) {
    displayRand.style.display ="none"
   }else{
    displayRand.style.display = "inline-block"
   }
   if( valueinp[0].length >=3  || valueinp[1].length >=3  || valueinp[2].length>=3 ){
    texter.innerHTML ="input must not be more than 2 digits each"
    displayRand.style.display ="none"
   }else{
    
   }

})












