<?php
<<<<<<< HEAD
error_reporting(-1);
ini_set('display_errors', 1);
=======
header("Access-Control-Allow-Origin: *");
error_reporting(-1);
ini_set('error_reporting', 1);
>>>>>>> 48bf484de8123d34c3ab1b91e8e6c6ad56b9d32d
$conn = mysqli_connect("localhost","root","root","challenge");
if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
}
if(isset($_POST['fname'])){
		$fname=$_POST['fname'];
		$lname=$_POST['lname'];
		$email=$_POST['email'];
    // echo "Application saved successfully ";
		mysqli_query($conn,"insert into names (first_name, last_name, email_address) values ('$fname', '$lname', '$email')");
	}
 $id=mysqli_insert_id($conn);
 $myArr = array('inserted_id'=>$id);
 $myJSON = json_encode($myArr);
 echo $myJSON;
?>
