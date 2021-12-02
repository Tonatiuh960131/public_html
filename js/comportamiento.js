
let men= document.querySelector('.menu');
let perf=document.querySelector('.perfil');
let a=document.querySelector('.a')
let b=document.querySelector('.b')

let face=document.querySelector('e');
face.addEventListener('mouseover',cambio);
 cambio('.ia','imagenes/faceblack.png' );
 cambio('.ib','imagenes/instagram_black.png' );
 cambio('.ic','imagenes/gorjeo_black.png');
 cambio('.ic','imagenes/whatsapp_black');



function cambio(clss, imaf){
    
    let camb = document.querySelector(clss);
    camb.src=imaf;
    
}
