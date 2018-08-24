var index = 0;
    // variable de tipo arreglo
    var listaimg = [ "img/bg2.jpg", "img/bg2.jpg", "http://i.stack.imgur.com/jGlzr.png"];

$(function() {
  
    setInterval(changeImage, 7000);//ciclo que ejecuta la changeImage cada 7000 milisegundos 
  
});

function changeImage() {
  
   $('.Propuesta').css("background-image", 'url(' + listaimg[index] + ')');          
   index++;             
   if(index == 3)
      index = 0;
}