$(document).ready(function(){
  var myObj;
<<<<<<< HEAD
  $("#form").validate({wrapper: "li",
  submitHandler: function(form) {

=======
 $("#submit").click(function(e){
  e.preventDefault();
  setTimeout(function(){window.location.reload(true);},10000);
>>>>>>> 48bf484de8123d34c3ab1b91e8e6c6ad56b9d32d
  var fname = $("#fname").val();
  var lname = $("#lname").val();
  var email = $("#email").val();
// Returns successful data submission message when the entered information is stored in database.
  var dataString = 'fname='+ fname + '&lname=' + lname + '&email='+ email;
   if(fname==''||lname==''||email=='')
    {
    alert("Please Fill All Fields");
    }
  else
  {
// AJAX Code To Submit Form.
   $.ajax({
   type: "POST",
<<<<<<< HEAD
   url: "http://localhost:8888/greg/challengesql/save.php",
=======
   url: "http://localhost:8888/greg/challenge/save.php",
>>>>>>> 48bf484de8123d34c3ab1b91e8e6c6ad56b9d32d
   data: dataString,
   cache: false,
   success: function(result){
   myObj = JSON.parse(result);

   $( ".id" ).append( "<p>The ID of the submitted record is " + myObj.inserted_id + "</p>" );


  }
   });
<<<<<<< HEAD
  }

}});
=======

   // $( ".id" ).append( "<p>" + myObj.inserted_id + "</p>" );
  }
 });
>>>>>>> 48bf484de8123d34c3ab1b91e8e6c6ad56b9d32d
});
