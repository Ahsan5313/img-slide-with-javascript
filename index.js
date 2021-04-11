
var picture = ["bargar.jpg", "istockphoto-1155240408-612x612.jpg", "p.png"]

var imgTag = document.querySelector("img");

var count = 0;

function nxt(){

 count++;

 if(count>=picture.length){
      count=0;
      imgTag.src=(picture[count]);
 }
 else
 {
    imgTag.src=(picture[count]);
 }

 
}
function prev(){

    count--;

    if(count<0){
         count= picture.length-1;
         imgTag.src=(picture[count]);
    }
    else
    {
       imgTag.src=(picture[count]);
    }
   

}
   