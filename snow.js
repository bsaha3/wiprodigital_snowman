
var k=0;
//===========Dragging Hat===========================================


  $('#hat1').click(function(){
     $('#hat1').show().addClass('animated fadeOutUp');
     setTimeout(function(){$('#hat1').css('display','none');},1000);
     $('#hat2').css('display','block');
     $('#hat2').show().addClass('animated fadeInLeft');
     k++;
     final();
  });

$('#scarf1').click(function(){
     
     $('#scarf1').css('display','none');
     $('#scarf2').css('display','block');
     $('#scarf2').show().addClass('animated swing');
     k++;
     final();
  });

  $('#nose1').click(function(){
     
     $('#nose1').css('display','none');
     $('#nose2').css('display','block');
     $('#nose2').show().addClass('animated zoomIn');
     k++;
     final();
  });

  $('#hand11').click(function(){
     
     $('#hand11').css('display','none');
     $('#hand12').css('display','block');
     $('#hand12').show().addClass('animated jello');
     k++;
     final();
  });

  $('#hand21').click(function(){
     
     $('#hand21').css('display','none');
     $('#hand22').css('display','block');
     $('#hand22').show().addClass('animated rubberBand');
     k++;
     final();
  });

  $('#eye11').click(function(){
     
     $('#eye11').css('display','none');
     $('#eye12').css('display','block');
     $('#eye12').show().addClass('animated rotateIn');
     k++;
     final();
  });

  $('#eye21').click(function(){
     
     $('#eye21').css('display','none');
     $('#eye22').css('display','block');
     $('#eye22').show().addClass('animated rotateIn');
     k++;
     final();
  });

  $('#btn11').click(function(){
     
     $('#btn11').css('display','none');
     $('#btn12').css('display','block');
     $('#btn12').show().addClass('animated flip');
     k++;
     final();
  });

  $('#btn21').click(function(){
     
     $('#btn21').css('display','none');
     $('#btn22').css('display','block');
     $('#btn22').show().addClass('animated flip');
     k++;
     final();
  });
  
  function final(){
    if(k==9){         

          setTimeout(function(){ 
            $("#tree").fadeIn(1000);
            $("#greet").fadeIn(1000);
            $("#santa").fadeIn(1000);
            $("#inst").css('display','none');
          }, 1000);   
        }
  }

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

    $('#i').keydown(function(event) {
      // enter has keyCode = 13, change it if you want to use another button
      if (event.keyCode == 13) {
        text = document.getElementById("i").value;
      $("#land").css('display','none');
      $("#landbtn").css('display','none');
      $("#i").css('display','none');
      $("#text1").text("Hello "+text.toUpperCase());

      setTimeout(function(){ 
        $("#body-large-border").css('display','block');
      }, 1000);
      }
    });

//===========Welcome================================================


//=================Snow man fill====================================

$('#medium1').click(function(){
     
     $('#medium1').css('display','none');
     $('#medium').css('display','block');
     $('#medium').show().addClass('animated rollIn');
  });

  $('#small1').click(function(){
     
     $('#small1').css('display','none');
     $('#small').css('display','block');
     $('#small').show().addClass('animated rotateInDownRight');
  });

//=================Snow man fill====================================


//============End Greeting==========================================

        console.log(k);
        

//============End Greeting==========================================