$( document ).ready(function() {
   
  $("#comentarioForm").submit(function(event) {
    event.preventDefault();
    ajaxPost();
  });
     
  function ajaxPost(){
        
    var formData = {
      comentario : $("#comentario").val()
    }
        
    $.ajax({
      type : "POST",
      contentType : "application/json",
      url : window.location + "api/coments/save",
      data : JSON.stringify(formData),
      dataType : 'json',
      success : function(coments) {
        $("#postResultDiv").html("<p>" + 
          "Post Successfully! <br>" +
          "--> " + coments.comentario + " " + ", createdAt: " + coments.createdAt+  "</p>"); 
      },
      error : function(e) {
        alert("Error!")
        console.log("ERROR: ", e);
      }
    });
        
    resetData();
  }
      
  function resetData(){
    $("#comentario").val("");
  }
})