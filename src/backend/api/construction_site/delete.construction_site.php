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

$construction->construction_id = $construction_data->construction_id;


$result = $construction->deleteConstructionData();

if ($result > 0) {
    http_response_code(200);
    echo json_encode(array("message" =>  $result . "Delete Successfully"));
} else {
    http_response_code(400);
    echo json_encode(array("message" => "No record deleted"));
}
