$( document ).ready(function() {
    
  $("#comentarioForm").submit(function(event){
    event.preventDefault();
    ajaxGet();
  });
    
  function ajaxGet(){
    $.ajax({
      type : "GET",
      url : "/api/coments/all",
      success: function(result){
        $('#getResultDiv ul').empty();
        var custList = "";
        $.each(result, function(i, coments){
          $('#getResultDiva ').append( + '<p>' + coments.comentario + " " + '<br>'+ '</p>' )
          $('#getResultDivb').append('<button id="ouvir" type="button" class="btn btn-default" >ouvir</button>')
        });
        console.log("Success: ", result);
      },
      error : function(e) {
        $("#getResultDiv").html("<strong>Error</strong>");
        console.log("ERROR: ", e);
      }
    });  
  }
})