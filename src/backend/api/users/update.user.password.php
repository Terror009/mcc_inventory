<?php
session_start();
include('../../header.php');

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(404);
    echo ("NOT FOUND");
    return;
}
include('../../db_config/database.php');
include('../../models/users.php');

$database = new Database();
$db = $database->getConnection();

$users = new Users($db);

$user_data = json_decode(file_get_contents("php://input"));

if (
    empty($user_data->password)
) {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to create, data is incomplete"));
    return;
}

$users->password = $user_data->password;
$users->user_id = $user_data->user_id;

$isUpdated = $users->updateUserPasswordData();

if ($isUpdated) {
    http_response_code(200);
    echo json_encode(array("message" => "Updated Successfully"));
} else {
    http_response_code(500);
    echo json_encode(array("message"  => "database error"));
}
