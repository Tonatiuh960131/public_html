let agre=document.querySelector('.agregar');
let elim=document.querySelector('.eliminar');
agre.addEventListener('click',agregar);
elim.addEventListener('click',eliminar);

function agregar(){
    let en=document.querySelector('.en');
    en.number='1';
    en.className('en')
   
    let enlist=document.querySelector('.titulo');
    enlist.string='Gintama';
    enlist.className('titulo')
   
    let calif=document.querySelector('.cal')
    calif.number=10;
    calif.className('calif')
    
    let imag=document.querySelector('.pe');
    imag.src='imagenes/gintama.jpg';
    imag.className('pe')
  
    let top=document.querySelector('.top');
    top.appendChild(en,enlist, calif,imag);
    
}
function eliminar(){
    let top=document.querySelector('top');
    top.removeChild(en,enlist, calif,imag);
}