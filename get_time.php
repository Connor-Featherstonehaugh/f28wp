<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Make the API call to World Time API
$response = file_get_contents("http://worldtimeapi.org/api/timezone/America/Argentina/Salta");

// Output the response
echo $response;
?>