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

if (
    empty($manufacturer_data->manufacturer_name) ||
    empty($manufacturer_data->manufacturer_email) ||
    empty($manufacturer_data->manufacturer_contact) ||
    empty($manufacturer_data->manufacturer_address)
) {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to create, data is incomplete"));
    return;
}

$manufacturer->manufacturer_name = $manufacturer_data->manufacturer_name;
$manufacturer->manufacturer_email = $manufacturer_data->manufacturer_email;
$manufacturer->manufacturer_contact = $manufacturer_data->manufacturer_contact;
$manufacturer->manufacturer_address = $manufacturer_data->manufacturer_address;
$manufacturer->user_id = $manufacturer_data->user_id;

$isCreated = $manufacturer->createManufacturerData();

if ($isCreated) {
    http_response_code(201);
    echo json_encode(array("message" => "Created Successfully"));
} else {
    http_response_code(500);
}
