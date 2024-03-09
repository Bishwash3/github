let rect = document.querySelector("#crusor");

rect.addEventListener('mousemove',function(mouseposition){
     let rectangleLocation = rect.getBoundingClientRect();
     insideRectangle = mouseposition.clientX - rectangleLocation.left;

     if(insideRectangle < rectangleLocation.width/2){
        rect.style.backgroundColor = "red";
        if(insideRectangle < rectangleLocation.width/4){
            rect.style.backgroundColor = "rgb(150 , 0, 0)";
        }
        // if(insideRectangle > rectangleLocation.width/4){
        //     rect.style.backgroundColor = "yellow";
        // } 
     }
     else{
        rect.style.backgroundColor = "yellow";
     }
})

