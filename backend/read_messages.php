<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');


include("connection.php");

$q = $sqli->prepare("SELECT full_name,message FROM messages");
$q->execute();

$all = $q->get_result();


$response = [];

while($a = $all->fetch_assoc()){
    $response[] = $a;
}

$result = json_encode($response);

echo $result;

?>