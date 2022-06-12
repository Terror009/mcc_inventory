<?php
include("../../header.php");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(404);
    echo ("NOT FOUND");
    return;
}
include("../../db_config/database.php");
include("../../models/user.list.php");

$database = new Database();
$db = $database->getConnection();

$user_list = new UserList($db);
$user_list_data = json_decode(file_get_contents("php://input"));

if (
    empty($user_list_data->user_list_name) ||
    empty($user_list_data->user_list_email) ||
    empty($user_list_data->user_list_contact) ||
    empty($user_list_data->user_list_type)
) {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to create, data is incomplete"));
    return;
}

$user_list->user_list_name = $user_list_data->user_list_name;
$user_list->user_list_email = $user_list_data->user_list_email;
$user_list->user_list_contact = $user_list_data->user_list_contact;
$user_list->user_list_type = $user_list_data->user_list_type;
$user_list->user_list_id = $user_list_data->user_list_id;

$isUpdated = $user_list->updateUserListData();

if ($isUpdated) {
    http_response_code(200);
    echo json_encode(array("message" => "Updated Successfully"));
} else {
    http_response_code(500);
    echo json_encode(array("message"  => "database error"));
}
