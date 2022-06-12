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

if (
    empty($project_data->project_name) ||
    empty($project_data->site_location) ||
    empty($project_data->budget) ||
    empty($project_data->client_name) ||
    empty($project_data->status)
) {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to create, data is incomplete"));
    return;
}

$projects->project_name = $project_data->project_name;
$projects->site_location = $project_data->site_location;
$projects->budget = $project_data->budget;
$projects->client_name = $project_data->client_name;
$projects->status = $project_data->status;
$projects->project_time = $project_data->project_time;
$projects->project_id = $project_data->project_id;

$isUpdated = $projects->updateProjectData();
if ($isUpdated) {
    http_response_code(200);
    echo json_encode(array("message" => "Updated Successfully"));
} else {
    http_response_code(500);
    echo json_encode(array("message"  => "database error"));
}
