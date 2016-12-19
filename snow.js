//===========Dragging Hat===========================================

  $(function() { $(".drag-image").draggable(); });

//===========Dragging Hat===========================================


//===========Welcome================================================
  var text;
    function next(){
      text = document.getElementById("i").value;
      $("#land").css('display','none');
      $("#landbtn").css('display','none');
      $("#i").css('display','none');
      $("#text1").text("Hello "+text.toUpperCase());

      setTimeout(function(){ 
        $("#body-large-border").css('display','block');
      }, 1000);

    }

//===========Welcome================================================


//=================Snow man fill====================================



var i=0;
document.body.onkeyup=function(e){
  
    if(e.keyCode==32)
    {
      if(i==0)
      {
        $("#body-large").css('display','block');
        setTimeout(function(){ 
          $("#body-medium-border").css('display','block');
        }, 1000);
      }
      if(i==1)
      {
        $("#body-medium").css('display','block');
        setTimeout(function(){ 
          $("#body-small-border").css('display','block');
        }, 1000);
      }
      if(i==2)
      {
        $("#body-small").css('display','block');
        
        setTimeout(function(){ 
          $(".parts").css('display','block');
        }, 1000);
      }
      
      i++;
    }
}

//=================Snow man fill====================================

//===========Text===================================================
        // setTimeout(function() {
        // $("#text").fadeOut().empty();
        // }, 2000);
//===========Text===================================================


//============End Greeting==========================================

        var i=0;
        function a(){         

          setTimeout(function(){ 
            $("#tree").fadeIn(1000);
            $("#greet").fadeIn(1000);
            $("#inst").css('display','none');
          }, 1000);   
        }

//============End Greeting==========================================


//=================Draggable elements===============================

  var selectedElement = 0;
  var currentX = 0;
  var currentY = 0;
  var currentMatrix = 0;

  function selectElement(evt) {
    selectedElement = evt.target;
    currentX = evt.clientX;
    currentY = evt.clientY;

    currentMatrix = selectedElement.getAttributeNS(null, "transform").slice(7,-1).split(' ');     

      for(var i=0; i<currentMatrix.length; i++) {
        currentMatrix[i] = parseFloat(currentMatrix[i]);
      }
    document.onmousemove = moveElement;
  }

  function moveElement(evt){
  dx = evt.clientX - currentX;
  dy = evt.clientY - currentY;
  currentMatrix[4] += dx;
  currentMatrix[5] += dy;
  newMatrix = "matrix(" + currentMatrix.join(' ') + ")";

  selectedElement.setAttributeNS(null, "transform", newMatrix);
  currentX = evt.clientX;
  currentY = evt.clientY;
}

function deselectElement(evt){
  if(selectedElement != 0){
    document.onmousemove = null;
    document.onmouseout = null;
    document.onmouseup = null;
    selectedElement = 0;
  }
}

selectedElement.setAttributeNS(null, "onmouseout", "deselectElement(evt)");
selectedElement.setAttributeNS(null, "onmouseup", "deselectElement(evt)");

//=================Draggable elements===============================

