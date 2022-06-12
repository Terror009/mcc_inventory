<?php
include("../../header.php");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(404);
    echo ("NOT FOUND");
    return;
}
include("../../db_config/database.php");
include("../../models/project.php");

$database = new Database();
$db = $database->getConnection();

$projects = new Project($db);
$project_data = json_decode(file_get_contents("php://input"));

$projects->project_id = $project_data->project_id;

$result = $projects->deleteProjectData();


if ($result > 0) {
    http_response_code(200);
    echo json_encode(array("message" =>  $result . "Delete Successfully"));
    return;
}

http_response_code(400);
echo json_encode(array("message" => "no record deleted"));
