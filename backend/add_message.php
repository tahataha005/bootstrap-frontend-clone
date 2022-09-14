<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');


include("connection.php");

$full_name = $_POST["full_name"];
$email = $_POST["email"];
$phone_number = $_POST["phone_number"];
$message = $_POST["message"];

$q = $sqli->prepare("INSERT INTO messages(full_name, email,phone_number,message) VALUE (?,?,?,?)");
$q->bind_param("ssss", $full_name, $email ,$phone_number,$message);
$q->execute();

$response = [];
$response["success"] = true;

$result = json_encode($response);


echo $result;

?>