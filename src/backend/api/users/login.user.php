<?php
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
    empty($user_data->email) ||
    empty($user_data->password)
) {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to create, data is incomplete"));
    return;
}

$users->email = $user_data->email;
$users->password = $user_data->password;

if (strlen($users->password) < 8) {
    http_response_code(400);
    echo json_encode(array("message" => "Password length have altest 8 characters"));
    return;
}

$results = $users->validateUserData();
$row = $results->fetch_assoc();
if ($row > 0) {
    http_response_code(200);
    echo json_encode($row);
} else {
    echo json_encode(array("message" => "data not found"));
    http_response_code(400);
    return;

}

