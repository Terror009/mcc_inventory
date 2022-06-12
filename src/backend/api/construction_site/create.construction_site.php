<?php
include("../../header.php");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(404);
    echo ("NOT FOUND");
    return;
}
include("../../db_config/database.php");
include("../../models/construction_site.php");

$database = new Database();
$db = $database->getConnection();

$construction = new ConstructionSite($db);

$construction_data = json_decode(file_get_contents("php://input"));

if (
    empty($construction_data->construction_site_name) ||
    empty($construction_data->construction_client_name)
) {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to create, data is incomplete"));
    return;
}

$construction->construction_site_name = $construction_data->construction_site_name;
$construction->construction_client_name = $construction_data->construction_client_name;
$construction->user_id = $construction_data->user_id;

$isCreated = $construction->createConstructionData();

if ($isCreated) {
    http_response_code(201);
    echo json_encode(array("message" => "Created Successfully"));
} else {
    http_response_code(500);
}
