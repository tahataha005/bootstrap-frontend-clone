<?php

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