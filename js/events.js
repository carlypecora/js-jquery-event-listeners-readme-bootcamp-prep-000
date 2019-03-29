function getIt(){
  $("p").on("click", function (){
    alert("Hey!")
  })
}

function frameIt(){
  $(".tasty").on("load", function(){
    this.style.border = "red"
  })
}

$(document).ready(function(){

// call functions here

});
