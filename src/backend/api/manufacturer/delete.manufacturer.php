<?php
include("../../header.php");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(404);
    echo ("NOT FOUND");
    return;
}

include("../../db_config/database.php");
include("../../models/manufacturer.php");

$database = new Database();
$db = $database->getConnection();

$manufacturer = new Manufacturer($db);
$manufacturer_data = json_decode(file_get_contents("php://input"));


$manufacturer->manufacturer_id = $manufacturer_data->manufacturer_id;

$result = $manufacturer->deleteManufacturerData();


if ($result > 0) {
    http_response_code(200);
    echo json_encode(array("message" =>  $result . "Delete Successfully"));
} else {
    http_response_code(400);
    echo json_encode(array("message" => "No record deleted"));
}
