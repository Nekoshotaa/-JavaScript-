let btnn = document.querySelector('.bth')
let inp = document.querySelector('.txt')


btnn.onclick = function (){
   console.log('Da');
   let e = inp.value
   out.innerHTML += `<li> ${e} </li>`
}

let out = document.querySelector('#one')

let myhappy = prompt('Когда у тебя ДР?  ')
if(myhappy == 22){
   out.innerhtml = 'Yes';
   
}else{
   out.innerhtml = 'No';
}
